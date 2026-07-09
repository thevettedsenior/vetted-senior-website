// Generates public/sitemap.xml from the route tree + site data.
// Runs automatically as part of `bun run build` (see package.json), so new
// situations, articles, categories, provinces, and cities appear in the
// sitemap with no manual step.
//
// Source of truth: FileRoutesByFullPath in src/routeTree.gen.ts (which
// TanStack Router regenerates from src/routes/). Dynamic segments are
// expanded from the arrays in src/lib/directory-data.ts. A route added
// tomorrow that is neither excluded nor expandable fails the build loudly
// rather than silently dropping out of the sitemap.

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  SITUATIONS,
  ARTICLES,
  HELP_CATEGORIES,
  PROVINCES,
} from "../src/lib/directory-data";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://thevettedsenior.com";
const TODAY = new Date().toISOString().slice(0, 10);

// Routes that must not be indexed (redirects, error pages).
const EXCLUDED = new Set(["/how-we-vet"]);

type Entry = { loc: string; changefreq: string; priority: string };

// ── 1. Read every route path from the generated route tree ────────────────
const gen = readFileSync(join(ROOT, "src/routeTree.gen.ts"), "utf8");
const block = gen.match(
  /export interface FileRoutesByFullPath \{([\s\S]*?)\n\}/,
);
if (!block) throw new Error("FileRoutesByFullPath not found in routeTree.gen.ts");
const routePaths = [...block[1].matchAll(/'([^']+)':/g)].map((m) =>
  // Normalize trailing slashes ('/help/' -> '/help'), keep '/' itself.
  m[1] === "/" ? "/" : m[1].replace(/\/$/, ""),
);

// ── 2. Expand each route into concrete URLs ────────────────────────────────
const citySlug = (city: string) =>
  city.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "%27");

const STATIC_META: Record<string, { changefreq: string; priority: string }> = {
  "/": { changefreq: "monthly", priority: "1.0" },
  "/situations": { changefreq: "monthly", priority: "0.9" },
  "/help": { changefreq: "monthly", priority: "0.9" },
  "/directory": { changefreq: "weekly", priority: "0.9" },
  "/handbook": { changefreq: "monthly", priority: "0.9" },
  "/resources": { changefreq: "monthly", priority: "0.8" },
  "/founder": { changefreq: "monthly", priority: "0.8" },
  "/disclosure": { changefreq: "monthly", priority: "0.7" },
  "/privacy": { changefreq: "yearly", priority: "0.5" },
  "/about": { changefreq: "monthly", priority: "0.6" },
  "/get-vetted": { changefreq: "monthly", priority: "0.6" },
  "/contact": { changefreq: "monthly", priority: "0.6" },
};

function expand(route: string): Entry[] {
  switch (route) {
    case "/situations/$slug":
      return SITUATIONS.filter((s) => s.phase === "live").map((s) => ({
        loc: `/situations/${s.slug}`,
        changefreq: "weekly",
        priority: "0.8",
      }));
    case "/help/$category":
      return HELP_CATEGORIES.map((c) => ({
        loc: `/help/${c.slug}`,
        changefreq: "weekly",
        priority: "0.8",
      }));
    case "/help/$category/$article":
      return ARTICLES.map((a) => ({
        loc: `/help/${a.categorySlug}/${a.slug}`,
        changefreq: "weekly",
        priority: "0.7",
      }));
    case "/province/$province":
      return PROVINCES.map((p) => ({
        loc: `/province/${p.code.toLowerCase()}`,
        changefreq: "weekly",
        priority: "0.7",
      }));
    case "/province/$province/$city":
      return PROVINCES.flatMap((p) =>
        p.cities.map((city) => ({
          loc: `/province/${p.code.toLowerCase()}/${citySlug(city)}`,
          changefreq: "weekly",
          priority: "0.6",
        })),
      );
    default: {
      const meta = STATIC_META[route];
      if (!meta) {
        throw new Error(
          `Route ${route} is not excluded, not expandable, and has no static metadata. ` +
            "Add it to STATIC_META, an expand() case, or EXCLUDED in scripts/generate-sitemap.ts.",
        );
      }
      return [{ loc: route, ...meta }];
    }
  }
}

const entries = routePaths
  .filter((r) => !EXCLUDED.has(r))
  .flatMap(expand);

// Stable, readable ordering: by priority (high first), then path.
entries.sort(
  (a, b) =>
    Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc),
);

// ── 3. Write the XML ───────────────────────────────────────────────────────
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${ORIGIN}${e.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public/sitemap.xml"), xml);
console.log(`sitemap.xml: ${entries.length} URLs written to public/sitemap.xml`);
