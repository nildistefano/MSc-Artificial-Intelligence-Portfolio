import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://nildistefano.github.io',
  base: 'MSc-Artificial-Intelligence-Portfolio',
  integrations: [tailwind(), icon()],
  output: "static",  // Switch to 'static' mode for GitHub Pages compatibility
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
