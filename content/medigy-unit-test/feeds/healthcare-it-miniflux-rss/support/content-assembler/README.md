# Medigy Industry Feeds Miniflux Presentation Content Assembler (PCA)

You must have access to the Miniflux database and you'll need to setup your `.env` to supply database credentials. 

```bash
cp sample.env .env
```

Since we are using `psql` CLI via the `just` command runner and there's only Miniflux database, the `.env` file in this directory uses [`psql`'s environment variables](https://www.postgresql.org/docs/12/libpq-envars.htmlhttps://www.postgresql.org/docs/12/libpq-envars.html) for credentials.

Once you've setup the `.env` file, you can use the `Justfile`. To see the commands available:

```bash
just --list
```

For example:

```bash
just db-clean db-migrate
just inspect-entries
just inspect-feed-icons
```