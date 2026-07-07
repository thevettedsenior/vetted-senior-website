import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { BusinessCard } from "@/components/BusinessCard";
import { LaunchNotice } from "@/components/HandbookCTA";
import {
  BUSINESSES,
  HELP_CATEGORIES,
  PROVINCES,
  findHelpCategory,
  findProvince,
  searchBusinesses,
} from "@/lib/directory-data";

// Filters live entirely in the URL, so every filtered view is shareable and
// bookmarkable. Unknown or empty params are dropped so URLs stay clean.
type DirectorySearch = {
  q?: string;
  category?: string;
  province?: string;
  city?: string;
};

export const Route = createFileRoute("/directory")({
  validateSearch: (search: Record<string, unknown>): DirectorySearch => {
    const out: DirectorySearch = {};
    if (typeof search.q === "string" && search.q.trim()) out.q = search.q;
    if (
      typeof search.category === "string" &&
      findHelpCategory(search.category)
    )
      out.category = search.category;
    if (typeof search.province === "string" && findProvince(search.province))
      out.province = search.province.toLowerCase();
    if (typeof search.city === "string" && search.city.trim())
      out.city = search.city;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Directory of Vetted Providers | The Vetted Senior" },
      {
        name: "description",
        content:
          "Search the directory of personally vetted senior services by category, province, and city. Every listing is earned through our published vetting process. Nobody pays to be recommended.",
      },
    ],
  }),
  component: DirectoryPage,
});

function DirectoryPage() {
  const filters = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const results = searchBusinesses(filters);
  const activeProvince = filters.province
    ? findProvince(filters.province)
    : undefined;
  const cityOptions = activeProvince?.cities ?? [];
  const hasFilters = Boolean(
    filters.q || filters.category || filters.province || filters.city,
  );

  // One updater for every control; empty values fall out of the URL.
  function setFilter(patch: Partial<DirectorySearch>) {
    navigate({
      search: (prev: DirectorySearch) => {
        const next = { ...prev, ...patch };
        // Changing province invalidates any selected city.
        if ("province" in patch) next.city = undefined;
        for (const key of Object.keys(next) as (keyof DirectorySearch)[]) {
          if (!next[key]) delete next[key];
        }
        return next;
      },
      replace: true,
    });
  }

  const selectClass =
    "w-full rounded-xl border-2 border-border bg-card px-4 py-3 text-base text-primary focus:border-gold focus:outline-none";

  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
          <h1 className="font-serif text-3xl font-semibold text-primary md:text-5xl">
            The directory
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground/85 leading-relaxed md:text-xl">
            Every provider here passed{" "}
            <Link to="/about" className="text-primary underline">
              the full vetting process
            </Link>
            , and nobody paid to appear. Search by service, place, or both.
          </p>
        </div>
      </section>

      {/* ── SEARCH & FILTERS ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="grid gap-3 md:grid-cols-[2fr_repeat(3,1fr)_auto]">
            <label className="block">
              <span className="sr-only">Search providers</span>
              <input
                type="search"
                inputMode="search"
                placeholder="Search by name or service…"
                value={filters.q ?? ""}
                onChange={(e) => setFilter({ q: e.target.value })}
                className={selectClass}
              />
            </label>

            <label className="block">
              <span className="sr-only">Filter by category</span>
              <select
                value={filters.category ?? ""}
                onChange={(e) => setFilter({ category: e.target.value })}
                className={selectClass}
              >
                <option value="">All categories</option>
                {HELP_CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Filter by province</span>
              <select
                value={filters.province ?? ""}
                onChange={(e) => setFilter({ province: e.target.value })}
                className={selectClass}
              >
                <option value="">All provinces</option>
                {PROVINCES.map((p) => (
                  <option key={p.code} value={p.code.toLowerCase()}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Filter by city</span>
              <select
                value={filters.city ?? ""}
                onChange={(e) => setFilter({ city: e.target.value })}
                disabled={!activeProvince}
                className={`${selectClass} disabled:opacity-50`}
              >
                <option value="">
                  {activeProvince ? "All cities" : "Choose a province first"}
                </option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            {hasFilters && (
              <button
                type="button"
                onClick={() =>
                  navigate({ search: {}, replace: true })
                }
                className="rounded-xl border-2 border-primary px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        {BUSINESSES.length === 0 ? (
          <EmptyDirectory />
        ) : results.length > 0 ? (
          <>
            <p className="text-base text-muted-foreground">
              {results.length} vetted{" "}
              {results.length === 1 ? "provider" : "providers"}
              {hasFilters ? " match your filters" : ""}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {results.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </>
        ) : (
          <NoMatches
            place={
              filters.city ??
              activeProvince?.name ??
              "your area"
            }
            onClear={() => navigate({ search: {}, replace: true })}
          />
        )}
      </section>

      {/* ── HOW LISTINGS ARE EARNED ──────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Why this directory is small on purpose
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-foreground/85 leading-relaxed">
            Six to nine hours of verification per provider, re-reviewed every
            year, removals published rather than hidden. We would rather show
            you three providers we checked than three hundred we didn't. The
            whole methodology is public on{" "}
            <Link to="/about" className="text-primary underline">
              How We Vet
            </Link>
            , and providers can{" "}
            <Link to="/get-vetted" className="text-primary underline">
              apply to be vetted
            </Link>{" "}
            at no cost.
          </p>
        </div>
      </section>
    </Page>
  );
}

/** Shown while the BUSINESSES array is empty: the pre-launch honest state. */
function EmptyDirectory() {
  return (
    <div className="mx-auto max-w-3xl">
      <LaunchNotice place="the directory" />
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <p className="font-semibold text-primary">
          While the first vetting files are completed:
        </p>
        <ul className="mt-3 space-y-2 text-base text-foreground/80">
          <li>
            • The{" "}
            <Link to="/help" className="text-primary underline">
              Find Help guides
            </Link>{" "}
            cover every category the directory will, with the questions to
            ask any provider you find on your own.
          </li>
          <li>
            • The{" "}
            <Link to="/resources" className="text-primary underline">
              printable checklists
            </Link>{" "}
            turn those questions into worksheets.
          </li>
          <li>
            • The search and filters on this page are live now, so the day a
            provider passes vetting, they are findable here the same day.
          </li>
        </ul>
      </div>
    </div>
  );
}

/** Shown when listings exist but the current filters match none of them. */
function NoMatches({
  place,
  onClear,
}: {
  place: string;
  onClear: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gold/50 bg-card p-8">
      <p className="font-serif text-2xl text-primary">
        No vetted providers match those filters yet.
      </p>
      <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
        That's the honest answer, not a search problem. We list only
        providers we have personally vetted, and coverage is growing region
        by region. Leave your email and you'll hear when vetted listings go
        live in {place}.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:info@thevettedsenior.com?subject=${encodeURIComponent(
            `Tell me when vetted providers go live in ${place}`,
          )}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
        >
          Tell me when {place} is live →
        </a>
        <button
          type="button"
          onClick={onClear}
          className="text-base text-primary underline"
        >
          Clear filters and show everything
        </button>
      </div>
    </div>
  );
}
