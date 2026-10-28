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
    }),
  ],
});
