# Use common Makefile from https://github.com/shah/devcontainer-common/make
# DCC_HOME is the devcontainer-common directory, usually installed within a .devcontainer
# Commented below lines to disable devcontainer requirement for usage in CI/CD.
#DCC_MAKE_HOME ?= /etc/devcontainer-common/make
#ifneq ("$(wildcard $(DCC_MAKE_HOME)/common.mk)","")
#include $(DCC_MAKE_HOME)/common.mk
#else
#$(error common.mk was not found in $(DCC_MAKE_HOME), unable to proceed)
#endif

GENERATOR_WORK_TMP := generator-work-tmp

INPUT_DATA_HOME := input
OUTPUT_DATA_HOME := ../../content-cicd

MEDIGY_PUBL_ENV?="production"

FILTER_ID=10
METRIC_HOME=static/obeservability/

SUPPORT_DOCS_HOME := support/docs
SUPPORT_DOCS_GENERATED_HOME := $(SUPPORT_DOCS_HOME)/generated
CONTENT_MD_HOME := $(OUTPUT_DATA_HOME)
CONTENT_IMAGE_PREP_HOME := $(GENERATOR_WORK_TMP)/image-prep
ASSETS_CACHE_HOME := $(GENERATOR_WORK_TMP)/assets-cache

UNITTEST_HOME := support/unit-test
UNITTEST_HUGO_HOME := $(UNITTEST_HOME)/hugo
UNITTEST_HUGO_THEMES_HOME := $(UNITTEST_HUGO_HOME)/themes

$(UNITTEST_HUGO_HOME)/content: $(CONTENT_MD_HOME)
	echo "Symlinking the content in $(UNITTEST_HUGO_HOME)/content to $(realpath $(CONTENT_MD_HOME))"
	ln -s $(realpath $(CONTENT_MD_HOME)) $(UNITTEST_HUGO_HOME)/content

# Prepare the Hugo unit test environment by getting the bare minimum theme and related components
$(UNITTEST_HUGO_THEMES_HOME):
	mkdir -p $(UNITTEST_HUGO_THEMES_HOME)
	git clone https://github.com/kaushalmodi/hugo-bare-min-theme $(UNITTEST_HUGO_THEMES_HOME)/hugo-bare-min-theme
	git clone https://github.com/kaushalmodi/hugo-search-fuse-js $(UNITTEST_HUGO_THEMES_HOME)/hugo-search-fuse-js
	git clone https://github.com/kaushalmodi/hugo-debugprint $(UNITTEST_HUGO_THEMES_HOME)/hugo-debugprint

$(SUPPORT_DOCS_GENERATED_HOME):
	mkdir -p $(SUPPORT_DOCS_GENERATED_HOME)

## Grab the latest source files and run the content generator
generate: clean-content pipeline

## Run the content generator
pipeline:
	python pipeline.py \
		--content-dest-home $(CONTENT_MD_HOME) \
		--image-prep-home $(CONTENT_IMAGE_PREP_HOME) \
		--assets-cache-home $(ASSETS_CACHE_HOME) \
		--miniflux-db-url "postgresext://$(MEDIGY_MINIFLUX_FEED_USERNAME):$(MEDIGY_MINIFLUX_FEED_PASSWORD)@$(MEDIGY_MINIFLUX_FEED_DATABASE_HOST):$(MEDIGY_MINIFLUX_FEED_DATABASE_PORT)/miniflux" \
		--miniflux-app-user-login "Netspective Medigy Anonymous Public Feeds" \
		--medigy-publ-env $(MEDIGY_PUBL_ENV) \
		--filter-id $(FILTER_ID) \
		--metric-content $(METRIC_HOME) \
		--concurrent-download-workers 8

## TODO: create update-feeds target for using Python miniflux API to update feeds
update-feeds:
	# TODO see https://github.com/miniflux/python-client
	echo "TODO: need to implement update-feeds.py using miniflux client API (already installed in requirements.txt)"

## Generate the ORM models for reading data from the database
models-doc: $(SUPPORT_DOCS_GENERATED_HOME)
	mkdir -p $(SUPPORT_DOCS_GENERATED_HOME)/models
	# see http://docs.peewee-orm.com/en/latest/peewee/playhouse.html#pwiz for instructions
	# NOTE: -m pwiz adds database information (INCLUDING PASSWORD) to generated output so
	#       be sure to remove that if committing the code to a git repo
	python -m pwiz -i -e postgres -u $(MEDIGY_MINIFLUX_FEED_USERNAME) -P -H $(MEDIGY_MINIFLUX_FEED_DATABASE) -p $(MEDIGY_MINIFLUX_FEED_DATABASE_PORT) miniflux > $(SUPPORT_DOCS_GENERATED_HOME)/models/miniflux_models_gen.py

## Remove just the generated content
clean-content:
	rm -rf $(CONTENT_MD_HOME)
	rm -rf $(UNITTEST_HUGO_HOME)/resources
	rm -f $(UNITTEST_HUGO_HOME)/content

## Remove all derived artifacts
clean: clean-content
	py3clean .
	rm -rf $(SUPPORT_DOCS_GENERATED_HOME)
	find . -not -path '*/\.*' -type d -empty -delete

## Conduct static analysis on the files (run before commits/push)
static-analysis:
	mypy --config-file mypi.ini --pretty *.py

## Unit test the generated files through Hugo (port specified in devcontainer.json)
unit-test-hugo: $(UNITTEST_HUGO_HOME)/config.toml $(UNITTEST_HUGO_HOME)/content $(UNITTEST_HUGO_THEMES_HOME)
	cd $(UNITTEST_HUGO_HOME) && hugo serve --port 9287 --bind 0.0.0.0

## Temporary task during migration from legacy code
clone-legacy-repos:
	mkdir -p .legacy-repos/feeds && cd .legacy-repos/feeds
	git clone https://git.netspective.io/netspective/feed-datasource.git 
	git clone https://git.netspective.io/netspective/feeds.git
	cd ..
