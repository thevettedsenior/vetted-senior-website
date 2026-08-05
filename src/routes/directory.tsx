import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { BusinessCard } from "@/components/BusinessCard";
import { LaunchNotice } from "@/components/HandbookCTA";
import { SignupForm } from "@/components/SignupForm";
import {
  BUSINESSES,
  HELP_CATEGORIES,
  PROVINCES,
  findHelpCategory,
  findProvince,
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
      { title: "Directory of Vetted Providers | The Vetted Senior" },
      {
        name: "description",
        content:
          "Search vetted private providers and verified public services for seniors by category, province, and city. Every private listing is earned through our published vetting process. Nobody pays to be recommended.",
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
    // Picking from a dropdown must visibly do something: bring the results
    // into view. Typing in the search box is exempt so the page holds still.
    if ("category" in patch || "province" in patch || "city" in patch) {
      requestAnimationFrame(() => {
        document
          .getElementById("directory-results")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  const selectClass =
    "w-full rounded-xl border-2 border-border bg-card px-4 py-3 text-base text-primary focus:border-gold focus:outline-none";

  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <h1 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            The directory
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground/85 leading-relaxed md:text-xl">
            Two kinds of listings, clearly marked: private providers that passed{" "}
            <Link to="/about" className="text-primary underline">
              the full vetting process
            </Link>
            , and public or non-profit services we verified directly. Nobody
            pays to appear, either way. Search by service, place, or both.
          </p>
        </div>
      </section>

      {/* ── SEARCH & FILTERS ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-4">
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
                onClick={() => navigate({ search: {}, replace: true })}
                className="rounded-xl border-2 border-primary px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────────── */}
      <section
        id="directory-results"
        className="mx-auto max-w-6xl scroll-mt-16 px-6 py-8"
      >
        {BUSINESSES.length === 0 ? (
          <EmptyDirectory />
        ) : results.length > 0 ? (
          <>
            <p className="text-base text-muted-foreground">
              <ResultsSummary results={results} hasFilters={hasFilters} />
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {results.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </>
        ) : (
          <NoMatches
            place={filters.city ?? activeProvince?.name ?? "your area"}
            onClear={() => navigate({ search: {}, replace: true })}
          />
        )}
      </section>

      {/* ── WHAT THE BADGES MEAN ─────────────────────────────────────────── */}
      {BUSINESSES.length > 0 && (
        <section className="border-t border-border bg-card">
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
                  A public program, hospital-affiliated service, or non-profit
                  community organization. We verify it is real, currently
                  operating, and reachable, and we record how to access it.
                  These services do not go through the private-provider vetting
                  process. Many are free or subsidized.
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
    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gold/50 bg-card p-8">
      <p className="font-serif text-2xl text-primary">
        No listings match those filters yet.
      </p>
      <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
        That's the honest answer, not a search problem. We list only providers
        we have personally vetted and public services we have verified, and
        coverage is growing region by region. Leave your email and you'll hear
        when listings go live in {place}.
      </p>
      <div className="mt-5 max-w-xl">
        <SignupForm
          intent={`notify me: ${place}`}
          signupFor={`one email the day vetted listings go live in ${place}`}
          buttonLabel={`Tell me when ${place} is live →`}
          successMessage={`Done. The day vetted listings go live in ${place}, you'll hear it from us first.`}
        />
      </div>
      <div className="mt-4">
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
