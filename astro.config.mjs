// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://thriftywizard.com",
  output: "static",
  integrations: [
    starlight({
      title: "The Thrifty Wizard's Guide",
      customCss: ["./src/styles/theme.css"],
      components: {
        EditLink: "./src/components/ReportIssue.astro",
      },
      head: [
        { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Almendra&family=Literata:ital,opsz,wght@0,7..72,400..700;1,7..72,400..700&display=swap",
          },
        },
      ],
    }),
  ],
});
