# Deployment

The site deploys to Cloudflare Workers as static assets at `https://thriftywizard.com`.
The repository's `wrangler.jsonc` defines the Worker and Custom Domain.

## One-time setup

1. Add `thriftywizard.com` to the target Cloudflare account and make sure its zone
   is active. Cloudflare manages the Custom Domain's DNS record and certificate
   when the Worker is deployed.
2. In **Workers & Pages**, create an application by importing
   `glitchassassin/thrifty-wizard` from GitHub. Use `thrifty-wizard` as the Worker
   name so it matches the Wrangler configuration.
3. Configure Workers Builds with these settings:

   | Setting           | Value                    |
   | ----------------- | ------------------------ |
   | Root directory    | Repository root          |
   | Production branch | `main`                   |
   | Build command     | `npm run build`          |
   | Deploy command    | `npm run deploy`         |
   | Preview command   | `npm run deploy:preview` |

   The committed `.node-version` pins Node.js for the build. Dependencies,
   including the project's Wrangler version, are installed by Workers Builds.

4. Under **Settings > Build > Branch control**, enable **Preview Builds**.
   Pushes to `main` deploy production; pushes to other branches create or update
   that branch's Preview. The GitHub integration posts Preview URLs to associated
   pull requests. Enable the Cloudflare GitHub app for this repository.

The `previews` block enables Worker Previews, and `wrangler preview` uses the
current branch as its Preview name. Previews upload that branch's static build
and use their own URLs. The production Custom Domain is configured at the top
level. Preview builds must use `npm run deploy:preview`, not `npm run deploy`.

The one-time Cloudflare account, GitHub integration, and branch controls are
dashboard settings; adding the repository configuration does not activate them.

See the [README's local commands](../README.md#local-commands) for manual deployment
and local validation.

[Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
and [preview builds](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/).
