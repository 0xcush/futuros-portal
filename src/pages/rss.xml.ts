import type { APIRoute } from "astro";

const ENTRIES = [
  {
    title: "v0.2.0 — Robustness sprint",
    date: "2026-05-03",
    summary:
      "Pydantic schemas, async orchestrator, 6 new agents, 6 new country profiles, 6 new pilots, 8 peer initiatives, 10 new portal pages, CI/CD, security policy.",
  },
  {
    title: "v0.1.0 — Initial blueprint",
    date: "2026-05-01",
    summary:
      "Blueprint 11 docs, 7 country profiles, 5 candidate pilots, 8 specialist agents, orchestrator, portal 6 pages, CLI tooling.",
  },
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") || "https://odisea.xyz/futuros";
  const items = ENTRIES.map(
    (e) => `<item>
<title>${e.title}</title>
<link>${base}/sobre</link>
<description><![CDATA[${e.summary}]]></description>
<pubDate>${new Date(e.date).toUTCString()}</pubDate>
</item>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Futuros — actualizaciones</title>
<link>${base}</link>
<description>Blueprint regional vivo para América Latina. Actualizaciones del proyecto.</description>
<language>es</language>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
