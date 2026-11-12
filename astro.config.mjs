// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://l-nea-roja-software.vercel.app",
  output: "static",
  build: { inlineStylesheets: "always" },
});
