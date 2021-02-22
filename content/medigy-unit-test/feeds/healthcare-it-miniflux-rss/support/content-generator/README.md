# Miniflux Feeds Markdown Generator

This repo connects to a Miniflux PostgreSQL database instance and generates
each feed entry as a markdown file. It allows from category-specific
generation of markdown content (e.g. article vs. podcast vs. video, etc.).

## Preparing Miniflux

- Setup application via Docker
- Create user 'Netspective Medigy Anonymous Public Feeds'
- Import support/opml/Netspective Medigy Anonymous Public Feeds.opml into the newly created user
