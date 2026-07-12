import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Compass, FolderOpen, ListChecks, Search } from "lucide-react";
import {
  ARTICLES,
  HELP_CATEGORIES,
  SITUATIONS,
} from "@/lib/directory-data";
import { HOW_TOS } from "@/lib/howto-data";

type SearchHit = {
  key: string;
  kind: "situation" | "category" | "article" | "howto";
  title: string;
  description: string;
  score: number;
  link:
    | { to: "/situations/$slug"; params: { slug: string } }
    | { to: "/help/$category"; params: { category: string } }
    | {
        to: "/help/$category/$article";
        params: { category: string; article: string };
      }
    | { to: "/how-to/$slug"; params: { slug: string } };
};

const KIND_META = {
  situation: { label: "Guide", icon: Compass },
  category: { label: "Help topic", icon: FolderOpen },
  article: { label: "Article", icon: BookOpen },
  howto: { label: "How-to", icon: ListChecks },
} as const;

function scoreEntry(query: string[], title: string, description: string): number {
  const t = title.toLowerCase();
  const d = description.toLowerCase();
  let score = 0;
  for (const token of query) {
    if (t.includes(token)) score += 3;
    else if (d.includes(token)) score += 1;
    else return 0; // every word must match somewhere
  }
  return score;
}

function search(raw: string): SearchHit[] {
  const query = raw.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
  if (query.length === 0) return [];

  const hits: SearchHit[] = [];

  for (const s of SITUATIONS.filter((s) => s.phase === "live")) {
    const score = scoreEntry(query, `${s.title} ${s.shortTitle}`, s.description);
    if (score > 0)
      hits.push({
        key: `s-${s.slug}`,
        kind: "situation",
        title: s.title,
        description: s.description,
        score: score + 1, // situations first on ties: they are the best entry point
        link: { to: "/situations/$slug", params: { slug: s.slug } },
      });
  }

  for (const c of HELP_CATEGORIES) {
    const score = scoreEntry(query, `${c.name} ${c.shortName}`, c.description);
    if (score > 0)
      hits.push({
        key: `c-${c.slug}`,
        kind: "category",
        title: c.name,
        description: c.description,
        score,
        link: { to: "/help/$category", params: { category: c.slug } },
      });
  }

  for (const a of ARTICLES) {
    const score = scoreEntry(query, a.title, a.description);
    if (score > 0)
      hits.push({
        key: `a-${a.slug}`,
        kind: "article",
        title: a.title,
        description: a.description,
        score,
        link: {
          to: "/help/$category/$article",
          params: { category: a.categorySlug, article: a.slug },
        },
      });
  }

  for (const h of HOW_TOS) {
    const score = scoreEntry(query, `${h.title} ${h.shortTitle}`, h.description);
    if (score > 0)
      hits.push({
        key: `h-${h.slug}`,
        kind: "howto",
        title: h.shortTitle,
        description: h.description,
        score,
        link: { to: "/how-to/$slug", params: { slug: h.slug } },
      });
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, 7);
}

/**
 * Plain-language site search for the homepage hero. Matches situations,
 * help topics, and articles; results are ordinary links in a listbox.
 */
export function SiteSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => search(query), [query]);

  // Close when clicking or focusing outside
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const showPanel = open && query.trim().length > 1;

  return (
    <div ref={rootRef} className="relative max-w-xl">
      <label
        htmlFor="site-search"
        className="text-base font-semibold text-primary"
      >
        What do you need help with?
      </label>
      <div className="relative mt-2">
        <Search
          size={22}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="Try: mom had a fall, meal delivery, power of attorney"
          autoComplete="off"
          className="min-h-14 w-full rounded-full border-2 border-border bg-card py-3 pl-13 pr-5 text-lg text-foreground shadow-[var(--shadow-card)] placeholder:text-muted-foreground/70 focus:border-gold"
        />
      </div>

      <p aria-live="polite" className="sr-only">
        {showPanel
          ? results.length === 0
            ? "No results found"
            : `${results.length} results found`
          : ""}
      </p>

      {showPanel && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card-hover)]">
          {results.length === 0 ? (
            <div className="px-6 py-5 text-base text-muted-foreground">
              No matches for "{query.trim()}". Try a simpler word, or{" "}
              <Link to="/help" className="text-primary underline">
                browse all help topics
              </Link>
              .
            </div>
          ) : (
            <ul>
              {results.map((hit) => {
                const meta = KIND_META[hit.kind];
                return (
                  <li key={hit.key} className="border-b border-border/60 last:border-b-0">
                    <Link
                      {...hit.link}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center gap-4 px-5 py-3.5 no-underline transition-colors hover:bg-secondary"
                    >
                      <span
                        aria-hidden
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-deep"
                      >
                        <meta.icon size={20} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-base font-semibold text-primary">
                          {hit.title}
                        </span>
                        <span className="block truncate text-sm text-muted-foreground">
                          {meta.label} · {hit.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
