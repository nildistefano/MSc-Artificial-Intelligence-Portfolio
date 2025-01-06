import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://nildistefano.github.io',
  base: '/MSc-Artificial-Intelligence-Portfolio/',
  integrations: [
    tailwind(),
    icon(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  output: "static",
});

