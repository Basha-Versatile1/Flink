// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Canonical site URL — keep in sync with SITE_URL in src/lib/config.ts.
// (Astro needs this literal at config-load time to build sitemap + canonicals.)
const SITE_URL = "https://www.flink.com";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  // Ship as little JS as possible — Astro already ships zero by default;
  // interactive bits are tiny vanilla-JS islands in <script> tags.
  build: { inlineStylesheets: "auto" },
});
