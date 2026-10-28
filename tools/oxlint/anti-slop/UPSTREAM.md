# Anti-slop provenance

Source: [dmmulroy/anti-slop](https://github.com/dmmulroy/anti-slop), commit
[`13909c9e07590f5a85d93c62712259fe14a883f7`](https://github.com/dmmulroy/anti-slop/tree/13909c9e07590f5a85d93c62712259fe14a883f7).

Installed on 2026-10-28 using upstream's `skills/install-anti-slop/scripts/install.mjs`.
Before copying, `scripts/sync-skill-assets.mjs --check` verified that the bundled
assets matched the canonical `src/` files at this revision.

## Installed files

- `tools/oxlint/anti-slop/` contains upstream's `src/` distribution, excluding
  `*.test.ts` files as specified by the upstream installer.
- The root MIT `LICENSE` is copied verbatim from the same revision.
- `vendor/eslint-stylistic/LICENSE` and its `UPSTREAM.md` are preserved verbatim.
- The generic plugin is registered through `index.ts`. The bundled Effect plugin
  is not registered because this project does not depend directly on Effect.

## Local policy

No rule source changes. All 18 generic rules and Oxlint's native
`oxc/no-accumulating-spread` companion rule are enabled at error severity in
`.oxlintrc.json`. Vendored files and agent tooling are excluded from both Oxlint
and Oxfmt so routine checks preserve the upstream source.

`oxlint` and `@oxlint/plugins` are both pinned to `1.90.0`; upgrade them together.
Rule tests remain available in the source repository at the recorded revision.

## Updates

Compare changes against this exact source revision, preserve local policy and
licenses, and record the new revision and any intentional changes here. Do not
overwrite the vendored directory without reviewing the differences.
