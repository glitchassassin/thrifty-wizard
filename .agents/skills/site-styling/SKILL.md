---
name: site-styling
description: Apply Thrifty Wizard's visual conventions when creating or changing site CSS, theme colors, typography, or styled components.
---

# Site styling

Keep the site's visual conventions in `src/styles/theme.css`. It defines the
light and dark palettes, maps design tokens to Starlight's colors, and is loaded
through `customCss` in `astro.config.mjs`. Use the existing tokens so changes
work in both themes.

## Color roles

- Use the normal foreground color (`--foreground`) for headings and the site
  title.
- Use gold (`--accent-gold`) for primary actions, with `--on-gold` for their text.
- Use blue (`--accent-blue`) for secondary actions, links, and active navigation.
- Reserve ruby (`--accent-ruby`) for attention accents on important components,
  such as warning borders. Keep their text in the normal foreground color.

## Typography

Use Almendra Regular for headings and the site title, through `--font-heading`
with a font weight of `400`. Use Literata for content and navigation, through
`--sl-font`. Content text is 18px (`1.125rem`) with a line height of `1.6`.

Both font families load from Google Fonts through Starlight's `head`
configuration in `astro.config.mjs`. Keep Georgia and the browser's serif font
as fallbacks.

## Background artwork

The decorative artwork is `src/assets/city-sketch.webp`. The fixed `body`
pseudo-elements in `theme.css` apply the artwork, wash, and haze. Adjust their
theme-specific tokens when changing opacity or color, and check readability in
both light and dark modes. Keep these decorative layers hidden in print.
