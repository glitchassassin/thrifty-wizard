# Thrifty Wizard

A static documentation site built with Astro and Starlight. Includes sidebar
navigation, page tables of contents, search, and light/dark themes.

## Development

Use Node.js 24 (the exact version is in `.node-version`) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`.

```sh
npm run build    # Generate the static site in dist/
npm run preview  # Preview the production build, including search
```

## Content

Add Markdown files under `src/content/docs/`. Each file becomes a page, and folders
become sidebar groups. The homepage is `src/content/docs/index.md`.

Every page needs a title in YAML frontmatter. Use `sidebar.order` when pages need
a specific reading order:

```md
---
title: Example page
description: An optional summary.
sidebar:
  order: 2
---

An introductory paragraph.

## A section

Link to [another page](/guides/start-here/) or a
[section on that page](/guides/start-here/#related-pages).
```

Use standard Markdown links between any pages, independent of the sidebar.
Link to published URLs rather than `.md` source paths. Use `##` and `###` headings
for the automatic page table of contents; Starlight renders the page title as `h1`.

Store images in `src/assets/` and reference them with relative Markdown paths so
Astro can optimize them. For example, from `src/content/docs/guides/example.md`,
use `![Descriptive alt text](../../../assets/example.png)`. Use `public/` for files
that should be copied without processing.

## Configuration

Edit `astro.config.mjs` to change the placeholder site title. The sidebar currently
follows the content folders automatically; explicit groups and ordering can be
configured when the guide structure is ready.

Set the production `site` URL once a domain is chosen. If hosting under a subpath,
configure Astro's `base` and update internal links to include it.

[Starlight documentation](https://starlight.astro.build/)
