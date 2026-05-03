import type { APIRoute } from "astro";

const PAGES = [
  "",
  "blueprint",
  "pilotos",
  "paises",
  "hubs",
  "talento",
  "etica",
  "financiamiento",
  "gobernanza",
  "geopolitica",
  "actores",
  "kpis",
  "preguntas",
  "metodologia",
  "sobre",
  "contacto",
  "en",
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") || "https://odisea.xyz/futuros";
  const today = new Date().toISOString().split("T")[0];
  const urls = PAGES.map((p) => {
    const path = p ? `/${p}` : "";
    return `<url><loc>${base}${path}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
