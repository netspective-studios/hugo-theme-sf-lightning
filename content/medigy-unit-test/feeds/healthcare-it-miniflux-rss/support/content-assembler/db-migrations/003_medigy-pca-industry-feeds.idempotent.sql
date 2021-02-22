--@block Create idempotent objects
--
--
CREATE OR REPLACE VIEW medigy_pca_industry_feeds_mf_categories_rule_health_it AS
select c.id as category_id,
    c.title as category_title
from categories as c,
    users as u
where c.user_id = u.id
    and u.username = 'netspective medigy anonymous public feeds'
    and c.title = 'Essential News';
comment on view medigy_pca_industry_feeds_mf_categories_rule_health_it is 'Rule which defines the Miniflux categories from which to select Medigy Health IT Feeds';
comment on column medigy_pca_industry_feeds_mf_categories_rule_health_it.category_id is 'Miniflux Category ID';
comment on column medigy_pca_industry_feeds_mf_categories_rule_health_it.category_title is 'Miniflux Category Title';
--
--
CREATE OR REPLACE VIEW medigy_pca_industry_feeds_mf_feeds_rule_health_it AS
select f.id as feed_id,
    f.title as feed_title
from categories as c,
    feeds as f
where f.category_id = c.id
    and c.id in (
        select category_id
        from medigy_pca_industry_feeds_mf_categories_rule_health_it
    );
comment on view medigy_pca_industry_feeds_mf_feeds_rule_health_it is 'Rule which defines the Miniflux feeds from which to select Medigy Health IT Feed Entries';
comment on column medigy_pca_industry_feeds_mf_feeds_rule_health_it.feed_id is 'Miniflux Feed ID';
comment on column medigy_pca_industry_feeds_mf_feeds_rule_health_it.feed_title is 'Miniflux Feed Title';
--
--
CREATE OR REPLACE VIEW medigy_pca_industry_feeds_mf_feed_icons_health_it AS
select 'miniflux' as feed_source,
    feed_id,
    f.title as feed_title,
    f.feed_url as feed_url,
    f.site_url as feed_site_url,
    i.mime_type as feed_icon_mime_type,
    i.content as feed_icon_bytea,
    url_brand(f.site_url) as feed_link_brand,
    prepare_file_name(
        url_brand(f.site_url),
        concat(
            '.',
            (
                select file_extn
                from IETF_RFC6838_MEDIA_TYPE
                where mime_type = i.mime_type
            )
        )
    ) as feed_icon_file_name
from icons as i,
    feed_icons as fi,
    feeds as f
where f.id in (
        select feed_id
        from medigy_pca_industry_feeds_mf_feeds_rule_health_it
    )
    and f.id = fi.feed_id
    and i.id = fi.icon_id;
comment on view medigy_pca_industry_feeds_mf_feed_icons_health_it is 'Miniflux feed icons to associate with entries';
--
--
CREATE OR REPLACE VIEW medigy_pca_industry_feeds_mf_entries_health_it AS
select 'miniflux' as feed_source,
    feed_id,
    f.title as feed_title,
    f.feed_url as feed_url,
    f.site_url as feed_site_url,
    e.title as entry_title,
    e.hash as entry_hash,
    e.published_at as entry_published_at,
    e.url as entry_url,
    e.author as entry_author,
    e.content as entry_content,
    url_brand(e.url) as entry_link_brand,
    concat(url_brand(e.url), '-', slugify(e.title)) as entry_link_slug
from entries as e,
    feeds as f
where e.feed_id in (
        select feed_id
        from medigy_pca_industry_feeds_mf_feeds_rule_health_it
    )
    and f.id = e.feed_id;
comment on view medigy_pca_industry_feeds_mf_entries_health_it is 'Miniflux entries from which to generate Medigy presentation content markdown';
--
--
-- TODO: Priya will create:
-- CREATE OR REPLACE VIEW medigy_pca_industry_feeds_mf_entries_health_it_markdown AS
-- select 'miniflux' as feed_source,
--     frontmatter,   -- this should be JSON
--     body,          -- this should be TEXT
--     prepare_file_name(entry_link_slug, '.md') as markdown_file_name
-- from medigy_pca_industry_feeds_mf_entries_health_it as e
-- comment on view medigy_pca_industry_feeds_mf_entries_health_it is 'Miniflux entries from which to generate Medigy presentation content markdown';
-- then, in Python/Perl/bash we will run the SQL above, and generate the markdown files without any post processing required