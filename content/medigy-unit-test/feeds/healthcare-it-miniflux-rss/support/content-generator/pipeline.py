import bonobo  # type: ignore
import frontmatter  # type: ignore
import json
import os
import pretty_errors  # type: ignore
import pyjq  # type: ignore
import requests
import tempfile
import tldextract  # type: ignore
import sys
import shutil
import random
import glob
import socket
import datetime
import time
import uuid

from abc import abstractmethod
from bonobo.config import use  # type: ignore
from bonobo.constants import NOT_MODIFIED, Flag  # type: ignore
from frontmatter import Post as MarkdownContent
from models import BaseModel as BaseOpenProjectModel
from models import Category, Feed, User, UserEntry, Icon, FeedIcon
from peewee import JOIN  # type: ignore
from pathlib import Path
from pydantic import BaseModel as BasePydanticModel, NoneStr
from PIL import Image  # type: ignore
from slugify import slugify  # type: ignore
from typing import Any, Dict, Generic, Generator, List, Tuple, Type, Optional
from urllib.parse import urlparse, parse_qs
from prometheus_client import CollectorRegistry, Gauge, write_to_textfile, Info, Counter, Summary
from datetime import date
from metric import MetricGenerator, MetricLabel, MetricCollector


class Arguments(BasePydanticModel):
    miniflux_db_url: str
    miniflux_app_user_login: List[str]
    content_dest_home: Path
    image_prep_home: Path
    assets_cache_home: Path
    concurrent_download_workers: int = 0
    medigy_publ_env: str
    filter_id: int
    metric_content: str


class GeneratedMarkdown:
    md: MarkdownContent

    def __init__(self, md: MarkdownContent):
        self.md = md


class MarkdownGenerator(BasePydanticModel):
    @abstractmethod
    def can_handle(self, ue: UserEntry) -> bool:
        print("This is an abstract method and should never be called")
        return False

    @abstractmethod
    def generate_markdown(self, ue: UserEntry, ec: "ExecutionContext") -> MarkdownContent:
        print("This is an abstract method and should never be called")
        pass

    def dest_file_path(
        self, ue: UserEntry, ec: "ExecutionContext", relative_file_name: str
    ) -> Path:
        return (
            ec.arguments.content_dest_home
            / slugify(ue.feed.category.title)
            / slugify(ue.feed.title)
            / relative_file_name
        )

    def prepare_markdown(
        self, ue: UserEntry, ec: "ExecutionContext", **kwargs: str
    ) -> MarkdownContent:
        link_brand = tldextract.extract(ue.url).fqdn
        if link_brand.startswith("www."):
            link_brand = link_brand[4:]
        mdName = ue.title        
        if (len(ue.title) > 100):                       
            mdName = ue.title[0:100]             
        md = MarkdownContent(
            ue.content,
            handler=None,
            title=ue.title,
            categories=[],  # TODO -- add this
            feed={
                "source": "miniflux",
                "title": ue.feed.title,
                "id": ue.feed.id,
                "site_url": ue.feed.site_url,
                "feed_url": ue.feed.feed_url,
            },
            # date=ue.published_at,
            date=ue.published_at.isoformat(),
            pubDate=ue.published_at,
            link={"href": ue.url, "brand": link_brand},
            # slug=link_brand + "-" + slugify(ue.title),
            slug=link_brand + "-" + slugify(mdName),
            mdName=link_brand + "-" + slugify(mdName),
            aliases="/feeds/" + slugify(mdName),
            author=['Admin'],
            tags= ['Feeds'],
            # aliases="/feeds/" + slugify(ue.feed.title) + "-" + slugify(ue.title),
            **kwargs
        )
        return md

class Link(BasePydanticModel):
    text: str
    href: str


default_bread_crumbs: List[Link] = [
    Link(text="Home", href="/"),
    Link(text="Feeds", href="/feed/latest/"),
    Link(text="Latest", href="/feed/latest/")
   
] 
# We skip uncategorized entries so create a special handler
class UncategorizedUserEntryMarkdownGenerator(MarkdownGenerator):
    def can_handle(self, ue: UserEntry) -> bool:
        return False

    def generate_markdown(self, ue: UserEntry, ec: "ExecutionContext") -> MarkdownContent:
        print("This method should never be called since can_handle returns False")
        pass


# ec: "ExecutionContext" above is used as a string because it is forward-referenced
MarkdownGenerator.update_forward_refs()


class FeedIconRef(BasePydanticModel):
    href: str
    mime_type: str
    format: str
    size: Tuple[int, int]


class ExecutionContext(BasePydanticModel):
    arguments: Arguments
    warnings: Dict[str, int] = {}
    generators: Dict[str, MarkdownGenerator] = {}
    uncategorized_generator: UncategorizedUserEntryMarkdownGenerator = UncategorizedUserEntryMarkdownGenerator()
    feed_icons: Dict[int, FeedIconRef] = {}

    def markdown_generator(self, ue: UserEntry) -> Optional[MarkdownGenerator]:
        if ue.feed.category_id is None:
            return self.uncategorized_generator

        category = ue.feed.category
        class_name = "".join(x.title() for x in category.title.split(" ")) + "MarkdownGenerator"
        mdg = self.generators.get(class_name)
        if mdg is None:
            generator_class = globals().get(class_name)
            if generator_class is None:
                self.warn_once(
                    "Class {0} not found for feed category '{1}', skipping UserEntry rows in this category.".format(
                        class_name, category.title
                    )
                )
                return None
            mdg = generator_class()
            self.generators[class_name] = mdg
        return mdg

    def warn_once(self, message: str) -> None:
        if self.warnings.get(message) is None:
            self.warnings[message] = 1
            print(message)
        else:
            self.warnings[message] += 1

    def prepare_feed_icon(self, ue: UserEntry, mdg: MarkdownGenerator) -> Optional[FeedIconRef]:
        feed_id = ue.feed_id
        feed_title_slug = slugify(ue.feed.title)
        result = self.feed_icons.get(feed_id)
        if result is None:
            for fi in ue.feed.icons:
                icon: Icon = fi.icon
                icon_prep_path = ec.arguments.image_prep_home / "feed_{0}_{1}_image.blob".format(
                    feed_id, feed_title_slug,
                )
                os.makedirs(icon_prep_path.parent, exist_ok=True)
                with open(icon_prep_path, "wb") as icon_file:
                    icon_file.write(icon.content)
                try:
                    image = Image.open(icon_prep_path)
                    image.verify()
                    feed_icon_name = "{0}-feed-icon.{1}".format(
                        feed_title_slug, image.format.lower()
                    )
                    feed_icon_path = mdg.dest_file_path(ue, ec, feed_icon_name)
                    os.makedirs(feed_icon_path.parent, exist_ok=True)
                    shutil.copyfile(icon_prep_path, feed_icon_path)
                    result = FeedIconRef(
                        href=feed_icon_name,
                        mime_type=icon.mime_type,
                        format=image.format,
                        size=image.size,
                    )
                    self.feed_icons[feed_id] = result
                except Exception as e:
                    result = None
                    self.warn_once("Feed {0} icon image error: {1}".format(feed_id, str(e)))

        return result


# Handles 'Netspective Medigy Anonymous Public Feeds' entries
class EssentialNewsMarkdownGenerator(MarkdownGenerator):
    def can_handle(self, ue: UserEntry) -> bool:
        return True

    def generate_markdown(self, ue: UserEntry, ec: ExecutionContext) -> MarkdownContent:
        md = self.prepare_markdown(
            ue,
            ec,
            archetype="external-bookmark-feed",
            searchCategory="Feeds",
            sub="feeds",  # TODO -- necessary? update...
            # aliases="/feeds/" + slugify(ue.feed.title) + "-" + slugify(ue.title),
            breadcrumbs = [bc.text for bc in default_bread_crumbs],
            breadcrumbLinks= [
                bc.href if not bc.href is None else "#" for bc in default_bread_crumbs
            ],
            feedSource =[slugify(ue.feed.title)],
    
        )
        return GeneratedMarkdown(md)
class FeedsWithoutUpdatesSince2017MarkdownGenerator(MarkdownGenerator):
    def can_handle(self, ue: UserEntry) -> bool:
        return True

    def generate_markdown(self, ue: UserEntry, ec: ExecutionContext) -> MarkdownContent:
        md = self.prepare_markdown(
            ue,
            ec,
            archetype="external-bookmark-feed",
            searchCategory="Feeds",
            sub="feeds",  # TODO -- necessary? update...
            # aliases="/feeds/" + slugify(ue.feed.title) + "-" + slugify(ue.title),
            breadcrumbs = [bc.text for bc in default_bread_crumbs],
            breadcrumbLinks= [
                bc.href if not bc.href is None else "#" for bc in default_bread_crumbs
            ],
            feedSource =[slugify(ue.feed.title)],
    
        )
        return GeneratedMarkdown(md)


class PodcastsMarkdownGenerator(EssentialNewsMarkdownGenerator):
    # TODO implement this, it shouldn't just use the default generator above
    pass


class VideosMarkdownGenerator(EssentialNewsMarkdownGenerator):
    # TODO implement this, it shouldn't just use the default generator above
    pass


# Handles 'Netspective Medigy Anonymous Google Alert Feeds' entries
class GoogleAlertsMarkdownGenerator(MarkdownGenerator):
    def can_handle(self, ue: UserEntry) -> bool:
        return True

    def generate_markdown(self, ue: UserEntry, ec: ExecutionContext) -> MarkdownContent:
        try:
            # Google Alerts returns a google URL but we want the redirected one
            # in the 'url' query string of the google URL
            google_url = urlparse(ue.url)
            query_params = parse_qs(google_url.query)
            if query_params.get("url"):
                ue.url = query_params["url"][0]
        except Exception as e:
            ec.warn_once(
                "Unable to parse Google Alert {0}: {1} ({2})".format(ue.id, google_url, str(e))
            )
        md = self.prepare_markdown(
            ue,
            ec,
            archetype="external-bookmark-feed",
            searchCategory="feeds",
            sub="brief",  # TODO -- necessary? update...
            # aliases="",  # TODO -- add this
        )
        return GeneratedMarkdown(md)


@use("ec")
def select_tt_rss_app_user_feed_entries(ec: ExecutionContext) -> Generator[UserEntry, None, None]:
    MetricCollector.startTime = time.time()
    for user_name in ec.arguments.miniflux_app_user_login:
        user = User.get(User.username == user_name.lower())
        for ue in (
            user.entries.join(Feed, JOIN.LEFT_OUTER)
            .join(Category, JOIN.LEFT_OUTER)
            .switch(Feed)
            .join(FeedIcon, JOIN.LEFT_OUTER)
            .join(Icon, JOIN.LEFT_OUTER)
            .switch(UserEntry)
            .where(
                Category.id == ec.arguments.filter_id
                if ec.arguments.filter_id > 0
                else Category.id != 0
            )
            .order_by(UserEntry.published_at.desc())
            # .limit(100 if ec.arguments.medigy_publ_env != "production" else None)
        ):
            MetricCollector.expectedItems = MetricCollector.expectedItems + 1
            yield ue


@use("ec")
def create_user_entry_markdown_generator(
    ue: UserEntry, ec: ExecutionContext
) -> Generator[Tuple[UserEntry, MarkdownGenerator], None, bool]:
    mdg = ec.markdown_generator(ue)
    if mdg is None:
        return False
    if not mdg.can_handle(ue):
        return False
    yield ue, mdg
    return True


@use("ec")
def generate_markdown(
    ue: UserEntry, mdg: MarkdownGenerator, ec: ExecutionContext
) -> Generator[Tuple[UserEntry, MarkdownGenerator, GeneratedMarkdown], None, None]:
    if mdg is None:
        return False
    yield ue, mdg, mdg.generate_markdown(ue, ec)


@use("ec")
def validate_and_write_feed_image(
    ue: UserEntry, mdg: MarkdownGenerator, gmd: GeneratedMarkdown, ec: ExecutionContext
) -> Generator[Tuple[UserEntry, MarkdownGenerator, GeneratedMarkdown], None, None]:
    if gmd is None:
        return False
    icon = ec.prepare_feed_icon(ue, mdg)
    if not icon is None:
        gmd.md["icon"] = icon.dict()
    yield ue, mdg, gmd


@use("ec")
def write_markdown(
    ue: UserEntry, mdg: MarkdownGenerator, gmd: GeneratedMarkdown, ec: ExecutionContext
) -> Flag:
    # TODO: add error checking to see if a file is being rewritten
    if gmd is None:
        return False
    md = gmd.md
    path = mdg.dest_file_path(ue, ec, "{0}.md".format(md["mdName"]))
    os.makedirs(path.parent, exist_ok=True)
    with open(path, "w") as f:
        f.write(frontmatter.dumps(md))
    return NOT_MODIFIED


def get_graph(ec: ExecutionContext) -> bonobo.Graph:
    graph = bonobo.Graph()
    graph.add_chain(
        select_tt_rss_app_user_feed_entries,
        #bonobo.Limit(5),
        create_user_entry_markdown_generator,
        generate_markdown,
        validate_and_write_feed_image,
        write_markdown,
    )
    return graph


def get_services(ec: ExecutionContext) -> Dict[str, Any]:
    return {"ec": ec}


def write_metric_files(ec: ExecutionContext):
    path = str(ec.arguments.content_dest_home)
    numFiles = str(len(glob.glob(path + "/**/*.md", recursive=True)))
    today = str(datetime.datetime.now())
    totalTime = time.time() - MetricCollector.startTime

    registry = CollectorRegistry()
    mtrc = MetricGenerator()
    label = MetricLabel(
        name="nets_medigy_mpcg_rss_industry_feeds",
        description="nets_medigy mpcg rss industry feeds execution details.",
        labels=["lastExecuted", "txId", "expectedItems", "sourceUrl",],
    )
    metric = mtrc.guageMetric(label)
    registry.register(metric)
    metric.labels(
        MetricCollector.lastExecuted,
        uuid.uuid4(),
        MetricCollector.expectedItems,
        MetricCollector.sourceUrl,
    ).set(1)
    totalExecTimelabel = MetricLabel(
        name="nets_medigy_mpcg_rss_industry_feeds_total_exec_time",
        description="nets_medigy mpcg rss industry feeds execution time.",
        labels=["totalExecTime"],
    )
    totalExecTime = mtrc.guageMetric(totalExecTimelabel)
    registry.register(totalExecTime)
    totalExecTime.labels(round(totalTime, 2),).set(2)

    totalGeneratedItemslabel = MetricLabel(
        name="nets_medigy_mpcg_rss_industry_feeds_total_items_generated",
        description="total number of mds generated",
        labels=["generatedItems"],
    )
    totalGeneratedItems = mtrc.guageMetric(totalGeneratedItemslabel)
    registry.register(totalGeneratedItems)
    totalGeneratedItems.labels(numFiles,).set(3)

    write_to_textfile(
        ec.arguments.metric_content + "mpcg-industry-feeds-rss-prometheus-metrics.txt", registry
    )


if __name__ == "__main__":
    parser = bonobo.get_argument_parser()
    parser.add_argument("--miniflux-db-url", action="store", required=True)
    parser.add_argument("--miniflux-app-user-login", action="append", required=True)
    parser.add_argument("--content-dest-home", action="store", required=True)
    parser.add_argument("--image-prep-home", action="store", required=True)
    parser.add_argument("--assets-cache-home", action="store", required=True)
    parser.add_argument("--concurrent-download-workers", action="store")
    parser.add_argument("--medigy-publ-env", action="store")
    parser.add_argument("--filter-id", action="store")
    parser.add_argument("--metric-content", action="store")

    with bonobo.parse_args(parser) as options:
        args = Arguments(**options)
        BaseOpenProjectModel.open_database(args.miniflux_db_url)
        ec = ExecutionContext(arguments=args)
        MetricCollector.lastExecuted = str(datetime.datetime.now())
        MetricCollector.sourceUrl = "https://read.netspective.com"
        bonobo.run(get_graph(ec), services=get_services(ec))
        write_metric_files(ec)
        BaseOpenProjectModel.close_database()
