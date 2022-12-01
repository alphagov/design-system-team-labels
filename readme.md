# Design System Team Labels

We use this repo to synchronise the labels we use across our repositories.

It uses [github-label-sync](https://github.com/Financial-Times/github-label-sync).

## Updating labels

Labels are configured in `config.js`.

The groups are only used for organisation, and to avoid having to declare the same colour multiple times.

You can preview the labels by running:

```
npm run preview
```

When a pull request is created, you will be able to see a preview of the changes that will be made to each repository as a comment on the PR, or in the GitHub Actions log.

Once the pull request has been merged to `main`, those changes will be applied.

Labels that are not included in this config will not be affected. This also means that removing a label from the config will not remove it from any repositories.

## Updating repos

The list of repositories to update is configured in apply.sh.
