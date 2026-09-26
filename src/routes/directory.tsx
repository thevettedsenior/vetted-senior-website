import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { CategoryAccordion } from "@/components/CategoryAccordion";
import { LaunchNotice } from "@/components/StarterPackCTA";
import { SignupForm } from "@/components/SignupForm";
import {
  BUSINESSES,
  HELP_CATEGORIES,
  PROVINCES,
  findHelpCategory,
  findProvince,
  groupByCategory,
  searchBusinesses,
  type Business,
} from "@/lib/directory-data";
import { directoryJsonLd, jsonLdScript } from "@/lib/jsonld";

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
      { title: "Local service records | The Vetted Senior" },
      {
        name: "description",
        content:
          "Explore existing public-service and provider records by service and location. Review the evidence shown and confirm current details with the organization.",
      },
    ],
    // Goes live automatically once BUSINESSES has vetted rows; an empty
    // list emits no script tag at all.
    scripts:
      BUSINESSES.length > 0 ? [jsonLdScript(directoryJsonLd(BUSINESSES))] : [],
  }),
  component: DirectoryPage,
});

function DirectoryPage() {
  const filters = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filterButton = useRef<HTMLButtonElement>(null);

  const results = searchBusinesses(filters);
  const activeProvince = filters.province
    ? findProvince(filters.province)
    : undefined;
  const cityOptions = activeProvince?.cities ?? [];
  const hasFilters = Boolean(
    filters.q || filters.category || filters.province || filters.city,
  );
  const filterCount = [filters.category, filters.province, filters.city].filter(
    Boolean,
  ).length;

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
      resetScroll: false,
    });
  }

  function clearFilters() {
    navigate({ search: {}, replace: true, resetScroll: false });
  }

  function showResults() {
    setFiltersOpen(false);
    filterButton.current?.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      document.getElementById("directory-results")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    });
  }

  const selectClass =
    "min-h-12 min-w-0 w-full rounded-xl border-2 border-border bg-card px-3 py-3 text-base text-primary focus:border-gold";

  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-8">
          <Link to="/local-help" className="tvs-text-link">
            ← Back to Ontario starting points
          </Link>
          <h1 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Local service records
          </h1>
          <p className="mt-3 max-w-2xl text-base text-foreground/85 leading-relaxed md:text-lg">
            Explore existing service research by name, service, or location.
            Confirm current details and suitability with each organization.{" "}
            <a href="#directory-badges" className="text-primary underline">
              What the badges mean
            </a>
          </p>
        </div>
      </section>

      {/* ── SEARCH & FILTERS ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="block min-w-0 flex-1">
              <span className="mb-1 block text-sm font-semibold text-primary">
                Search providers
              </span>
              <input
                type="search"
                inputMode="search"
                enterKeyHint="search"
                placeholder="Search by name or service…"
                value={filters.q ?? ""}
                onChange={(e) => setFilter({ q: e.target.value })}
                className={selectClass}
              />
            </label>
            <div className="flex gap-2">
              <button
                ref={filterButton}
                type="button"
                aria-expanded={filtersOpen}
                aria-controls="directory-filters"
                onClick={() => setFiltersOpen((open) => !open)}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary bg-card px-4 py-3 text-base font-semibold text-primary md:hidden"
              >
                <SlidersHorizontal size={20} aria-hidden />
                Filters{filterCount > 0 ? ` (${filterCount})` : ""}
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={filtersOpen ? "rotate-180" : ""}
                />
              </button>
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="min-h-12 rounded-xl border-2 border-border px-4 py-3 text-base font-semibold text-primary hover:bg-primary/5"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div
            id="directory-filters"
            className={`${filtersOpen ? "grid" : "hidden"} mt-4 gap-3 md:grid md:grid-cols-3`}
          >
            <label className="block min-w-0">
              <span className="mb-1 block text-sm font-semibold text-primary">
                Filter by category
              </span>
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

            <label className="block min-w-0">
              <span className="mb-1 block text-sm font-semibold text-primary">
                Filter by province
              </span>
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

            <label className="block min-w-0">
              <span className="mb-1 block text-sm font-semibold text-primary">
                Filter by city
              </span>
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

            <button
              type="button"
              onClick={showResults}
              className="min-h-12 rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground md:hidden"
            >
              {`Show ${results.length} ${results.length === 1 ? "result" : "results"}`}
            </button>
          </div>

          {filterCount > 0 && (
            <p className="mt-3 text-sm text-muted-foreground">
              Showing:{" "}
              {[
                filters.category
                  ? findHelpCategory(filters.category)?.name
                  : undefined,
                activeProvince?.name,
                filters.city,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section
        id="directory-results"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-6 sm:px-6 md:py-8"
      >
        {BUSINESSES.length === 0 ? (
          <EmptyDirectory />
        ) : results.length > 0 ? (
          <>
            <p role="status" className="text-base text-muted-foreground">
              <ResultsSummary results={results} hasFilters={hasFilters} />
            </p>
            <div className="mt-6">
              <CategoryAccordion
                grouped={groupByCategory(results)}
                openAll={Boolean(filters.q || filters.category)}
              />
            </div>
          </>
        ) : (
          <NoMatches
            place={filters.city ?? activeProvince?.name ?? "your area"}
            onClear={clearFilters}
          />
        )}
      </section>

      {/* ── WHAT THE BADGES MEAN ─────────────────────────────────────────── */}
      {BUSINESSES.length > 0 && (
        <section
          id="directory-badges"
          className="border-t border-border bg-card"
        >
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
              What the badges mean
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold text-primary">
                  <span aria-hidden>✓</span> Vetted
                </span>
                <p className="mt-3 text-base text-foreground/85 leading-relaxed">
                  A private company that earned its place through the full
                  vetting process: primary-source checks, a structured interview
                  with the owner, and reference calls with real clients. Each
                  one shows the date it was vetted, and each is re-reviewed on a
                  schedule.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <span className="inline-flex items-center gap-1 rounded-full border-2 border-primary/40 bg-secondary px-3 py-1 text-sm font-semibold text-primary">
                  <span aria-hidden>🏛</span> Public service
                </span>
                <p className="mt-3 text-base text-foreground/85 leading-relaxed">
                  A public program, hospital-affiliated service or non-profit
                  community organization. Records retain their original check
                  dates. Confirm current fees, eligibility and availability
                  directly; this label is not a private-provider endorsement.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── HOW LISTINGS ARE EARNED ──────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Facts with context. Choices that stay yours.
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-foreground/85 leading-relaxed">
            Service records support a care decision; they do not make it for
            you. Public resources, verified facts and deeper vetting carry
            different evidence. Read{" "}
            <Link to="/about" className="text-primary underline">
              our approach
            </Link>{" "}
            and ask providers to confirm the details that matter to your family.
          </p>
        </div>
      </section>
    </Page>
  );
}

/** One honest sentence about what matched: vetted providers, public services, or both. */
function ResultsSummary({
  results,
  hasFilters,
}: {
  results: Business[];
  hasFilters: boolean;
}) {
  const vetted = results.filter((b) => b.listingType === "vetted").length;
  const pub = results.length - vetted;
  const suffix = hasFilters ? " match your filters" : "";
  if (vetted && pub) {
    return (
      <>
        {results.length} listings{suffix}: {vetted} vetted{" "}
        {vetted === 1 ? "provider" : "providers"} and {pub} verified public{" "}
        {pub === 1 ? "service" : "services"}
      </>
    );
  }
  if (pub) {
    return (
      <>
        {pub} verified public {pub === 1 ? "service" : "services"}
        {suffix}
      </>
    );
  }
  return (
    <>
      {vetted} vetted {vetted === 1 ? "provider" : "providers"}
      {suffix}
    </>
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
            cover every category the directory will, with the questions to ask
            any provider you find on your own.
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
function NoMatches({ place, onClear }: { place: string; onClear: () => void }) {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gold/50 bg-card p-5 sm:p-8">
      <p role="status" className="font-serif text-2xl text-primary">
        No listings match those filters yet.
      </p>
      <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
        Try a broader service name or remove a filter. Coverage varies by
        service and location, and we only list services we have checked.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-4 min-h-12 w-full rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 sm:w-auto"
      >
        Clear filters and show everything
      </button>
      <div className="mt-5 max-w-xl">
        <SignupForm
          intent={`notify me: ${place}`}
          signupFor={`one email the day vetted listings go live in ${place}`}
          buttonLabel={`Tell me when ${place} is live →`}
          successMessage={`Done. The day vetted listings go live in ${place}, you'll hear it from us first.`}
        />
      </div>
    </div>
  );
}
