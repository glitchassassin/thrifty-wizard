# Thrifty Wizard

A static documentation site for The Thrifty Wizard's Guide, built with Astro
and Starlight.

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

## Linting and formatting

```sh
npm run lint          # Check JavaScript and TypeScript
npm run lint:fix      # Apply safe lint fixes
npm run format        # Format supported project files
npm run format:check  # Check formatting without changing files
npm run check         # Run lint and formatting checks
```

Configure oxlint and oxfmt in `.oxlintrc.json` and `.oxfmtrc.json` respectively.

## Contributing

Add or edit guide pages in `src/content/docs/`. Follow the repo-local skills for
detailed conventions:

- [Site content](.agents/skills/site-content/SKILL.md): frontmatter, headings,
  links, images, and sidebar ordering.
- [Site styling](.agents/skills/site-styling/SKILL.md): color roles, typography,
  and theme CSS.

Use conventional commits.

## Configuration

Edit `astro.config.mjs` to change the site title or Starlight settings.

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

For an authenticated manual deployment, run `npx wrangler login` once, then
build and use `npm run deploy` for production or `npm run deploy:preview` from a
feature branch for its Preview. An explicit Preview name can be passed with
`npm run deploy:preview -- --name example-pr`.

Local preview of the Cloudflare static asset routing is available after
building:

```sh
npx wrangler dev
```
