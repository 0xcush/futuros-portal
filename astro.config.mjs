import { defineConfig } from "astro/config";

// Portal is served behind a /futuros rewrite on odisea.xyz (see landing/vercel.json).
// We do NOT set Astro base so files build flat at the dist root and assets
// resolve absolutely; the rewrite strips /futuros when proxying.
export default defineConfig({
  site: "https://odisea.xyz",
  trailingSlash: "ignore",
});
