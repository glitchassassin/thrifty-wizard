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

The light and dark palettes are defined in `src/styles/theme.css` and connected
through Starlight's `customCss` option. This stylesheet maps the design tokens to
Starlight's colors and controls the wash and haze over the background artwork in
`src/assets/city-sketch.webp`.
Headings use the normal foreground color, primary actions use gold, and secondary
actions and active navigation use blue. Ruby is reserved for attention accents
on important components, such as warning borders, rather than text.

The production URL is `https://thriftywizard.com`. Astro uses this for canonical
URLs and the generated sitemap. Internal links stay on the current host, so they
also work on preview deployments.

[Starlight documentation](https://starlight.astro.build/)

## Cloudflare deployment

The site deploys to Cloudflare Workers as static assets from `dist/`.
`wrangler.jsonc` configures the `thrifty-wizard` Worker, the `thriftywizard.com`
Custom Domain, the generated 404 page, and support for branch previews.

See [deployment setup](docs/deployment.md) for the Cloudflare account, GitHub
integration, and PR preview settings.

### Local commands

Build before uploading so the deployment includes the latest content:

```sh
npm run build
npm run deploy -- --dry-run  # Validate the deployment without publishing
```

For an authenticated manual deployment, run `npx wrangler login` once, then build
and use `npm run deploy` for production or `npm run deploy:preview` from a feature
branch for its Preview. An explicit Preview name can be passed with
`npm run deploy:preview -- --name example-pr`.

Local preview of the Cloudflare static asset routing is available after building:

```sh
npx wrangler dev
```
