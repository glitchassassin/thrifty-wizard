---
title: Markdown kitchen sink
description: Development-only samples of the site's Markdown rendering.
# Starlight omits draft pages from production routes, navigation, and search.
draft: true
pagefind: false
sidebar:
  order: 99
  badge:
    text: Dev
    variant: caution
prev: false
next: false
---

Use this page to inspect typography, spacing, colors, and overflow. Switch between light and dark
themes and try a narrow viewport. This page is available during development and excluded from
production builds.

## Headings

The page title above provides the level-one heading. Body headings start at level two and continue
through level six.

### Heading level three

A paragraph beneath a third-level heading.

#### Heading level four

A paragraph beneath a fourth-level heading.

##### Heading level five

A paragraph beneath a fifth-level heading.

###### Heading level six

A paragraph beneath a sixth-level heading, with **bold text**, _emphasis_, and `inline code`.

### A longer heading with _emphasis_ and `inline code` that can wrap across multiple lines

This heading checks wrapping, inline formatting, and the heading anchor.

### A heading with ~~strikethrough~~ text

Check the ruby line's position and thickness against the heading font.

## Paragraphs and inline formatting

This is a regular paragraph with enough text to wrap across several lines. Check the reading width,
line height, and spacing between blocks. The quick brown fox jumps over the lazy dog. Numbers and
punctuation: 0123456789, “double quotes,” ‘single quotes,’ an apostrophe in wizard's, an en dash –
and an em dash —.

This second paragraph contains **bold**, _italic_, _**bold italic**_, ~~strikethrough~~, **bold with
_nested emphasis_**, and a [link with **bold text**](/guides/apprentice/).

Strikethrough comparison: ~~Mixed-case text~~ and ~~ALL-CAPS TEXT~~.

~~This longer strikethrough example wraps onto multiple lines and includes **bold text** and a
[link](/guides/apprentice/).~~

Inline code: `npm run dev`, `src/content/docs/kitchen-sink.md`, and `` `backticks inside code` ``.

<!-- prettier-ignore -->
These two source lines use a soft break
and should appear in the same paragraph.

This line ends with an explicit hard break.\
This line should start immediately below it.

Escaped formatting stays literal: \*asterisks\*, \_underscores\_, \[brackets\], \# hash, and
\`backticks\`. HTML entities: &amp; &lt; &gt; &copy; &rarr;.

## Links

- [Internal page](/guides/apprentice/)
- [Section on this page](#tables)
- [External link with a title](https://example.com "Example website")
- [Reference-style link][example]
- Autolink: <https://example.com>
- Bare URL: https://example.com
- Email link: <hello@example.com>

[example]: https://example.com "Reference link title"

## Lists

### Unordered and nested

- First item with **bold text**.
- Second item with `inline code` and a [link](/).
  - Nested item.
    - Third-level item with a longer sentence to check wrapping and indentation when the available
      space becomes narrow.
  - Another nested item.
- Final top-level item.

### Ordered and mixed

1. Start with a numbered step.
2. Follow with nested steps.
   1. First nested step.
   2. Second nested step.
      - An unordered item within a numbered list.
3. Finish with a top-level step.

### Ordered list starting at a different number

7. This list starts at seven.
8. The next item should be eight.

### Multiple blocks in a list item

- First item, first paragraph.

  A second paragraph inside the same item checks spacing between blocks.

  > A blockquote inside the list item.

  ```sh
  npm run check
  ```

- Second item after the expanded first item.

### Task list

- [x] A completed task.
- [ ] An incomplete task.
  - [x] A completed nested task.
  - [ ] A nested task with **emphasis** and `code`.

## Blockquotes

> A single-paragraph quote with **bold**, _italic_, `inline code`, and a
> [link](/guides/journeyman/).

> A longer quote with multiple blocks.
>
> This is the second paragraph of the same quote.
>
> > A nested quotation checks indentation and border spacing.
>
> - A list inside the quote.
> - A second item.

## Code blocks

### Plain text

```text
Plain text preserves whitespace.
  Two spaces of indentation.
    Four spaces of indentation.
Symbols: <tag> & "quotes" {braces} [brackets]
```

### Fenced code without a language

```
An unlabelled code fence.
No syntax highlighting is requested.
```

### Syntax highlighting, title, and highlighted lines

```ts title="example.ts" {2-4}
const guide = "The Thrifty Wizard's Guide";
const paths = ["apprentice", "journeyman", "master"];
for (const path of paths) {
  console.log(`${guide}: ${path}`);
}
```

### Terminal commands

```sh
npm run dev
npm run check
npm run build
```

### Inserted and deleted lines

```diff
- const theme = "light";
+ const theme = "dark";
  const font = "Literata";
```

### Long line and horizontal scrolling

```text
This deliberately long line checks horizontal scrolling inside a code block without stretching the page or hiding the end of the content: abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789.
```

## Tables

### Alignment and inline formatting

| Left aligned                     |         Centered          | Right aligned |
| :------------------------------- | :-----------------------: | ------------: |
| Plain text                       |         **Bold**          |            12 |
| _Italic_                         |       `inline code`       |           345 |
| [Internal link](/guides/master/) |        ~~Removed~~        |         6,789 |
| Escaped pipe: \|                 | First line<br>Second line |             0 |

### Wide table

| Path       | Audience              | Prerequisites                                  | Example activity                           | Status           |
| ---------- | --------------------- | ---------------------------------------------- | ------------------------------------------ | ---------------- |
| Apprentice | New software builders | No prior development experience                | Make a small change and inspect the result | Ready for review |
| Journeyman | Practicing developers | Familiarity with source control and tests      | Plan a feature and verify its behavior     | In progress      |
| Master     | Experienced engineers | Experience delivering and maintaining software | Evaluate tradeoffs across a larger system  | Planned          |

## Images

A local image uses the same Astro image processing as the guide pages.

![The Thrifty Wizard mascot wearing a pointed hat.](../../assets/wizard-gnome.png)

## Horizontal rule

A paragraph before the separator.

---

A paragraph after the separator.

## Starlight callouts

:::note
A default note with **bold text**, `inline code`, and a [link](/).
:::

:::tip[Custom tip title]
A tip can contain more than one block.

- First recommendation.
- Second recommendation.
:::

:::caution
A caution checks the warning icon, border, background, and text colors.
:::

:::danger[Example danger callout]
This is sample content for inspecting the danger variant.

```sh
printf 'Example output\n'
```
:::

## HTML elements

These examples use HTML inside Markdown for elements without dedicated Markdown syntax.

### Inline HTML

Press <kbd>Ctrl</kbd> + <kbd>K</kbd>. This sentence has <mark>highlighted text</mark>, <u>underlined
text</u>, <small>small text</small>, an <abbr title="HyperText Markup Language">HTML</abbr>
abbreviation, H<sub>2</sub>O, and x<sup>2</sup>.

### Definition list

<dl>
  <dt>Markdown</dt>
  <dd>A plain-text format used to write the guide pages.</dd>
  <dt>Starlight</dt>
  <dd>The documentation framework that supplies the page layout.</dd>
  <dd>A second description checks spacing between definitions.</dd>
</dl>

### Collapsed disclosure

<details>
<summary>Expand to inspect Markdown inside a disclosure</summary>

A paragraph with **bold**, _italic_, `code`, and a [link](/).

- First nested item.
- Second nested item.

```json
{
  "theme": "dark",
  "development": true
}
```

</details>

### Open disclosure

<details open>
<summary>This disclosure starts open</summary>

Check the summary marker and the spacing above this paragraph, then collapse and reopen the
disclosure.

</details>

## Footnote references

This sentence has a footnote.[^basic] This sentence references a longer footnote.[^long] The first
footnote can be referenced again.[^basic]

[^basic]: A short footnote with a [link](/).

[^long]: A footnote with **bold text** and `inline code`.

    A second paragraph checks spacing within a footnote.
