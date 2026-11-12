// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://l-nea-roja-software.vercel.app",
  output: "static",
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "always" },
});
