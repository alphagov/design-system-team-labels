# Design System Team Labels

We use this repo to synchronise the labels we use across our repositories.

It uses [github-label-sync](https://github.com/Financial-Times/github-label-sync).

## Updating labels

Labels are configured in `config.json`.

The groups are only used for organisation, and to avoid having to declare the same colour multiple times.

You can preview the labels by running:

```
node preview.js
```

## Updating repos

The list of repositories to update is configured in apply.sh.
