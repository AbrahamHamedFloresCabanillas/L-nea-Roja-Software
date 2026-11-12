// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://linea-roja-software.vercel.app",
  output: "static",
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "always" },
});
