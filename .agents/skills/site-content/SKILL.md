---
name: site-content
description: Create or edit content pages with the site's conventions for Markdown, frontmatter, headings, links, images, and sidebar ordering.
---

# Site content

Add Markdown pages under `src/content/docs/`. Each file becomes a page, and
folders become sidebar groups. The homepage is `src/content/docs/index.md`.
The content collection in `src/content.config.ts` uses Starlight's `docsSchema`.

## Frontmatter and headings

Every page needs a `title` in YAML frontmatter. Add an optional `description`
for a page summary and use `sidebar.order` when pages need a specific reading
order:

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

Starlight renders the frontmatter title as the page's `h1`. Start body sections
with `##` and use `###` for subsections; these headings populate the automatic
page table of contents.

## Links

Use standard Markdown links between any pages, independent of the sidebar.
Link to published URLs such as `/guides/start-here/`, rather than `.md` source
paths. Use root-relative internal links so navigation stays on the current host
and works on preview deployments. Link to a section by appending its heading
anchor, such as `#related-pages`.

## Images and static files

Store images in `src/assets/` and reference them with Markdown paths relative
to the page so Astro can optimize them. For example, from
`src/content/docs/guides/example.md`, use:

```md
![Descriptive alt text](../../../assets/example.png)
```

Adjust the relative path for the page's folder depth. Include descriptive alt
text. Use `public/` for files that should be copied without processing, and
reference those files by their published root-relative URL.
