import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { telLinks } from "@/components/BusinessCard";
import {
  findCategoryForBusiness,
  findListingPagePilot,
  findProvince,
  type Business,
} from "@/lib/directory-data";
import {
  directoryListingBreadcrumbJsonLd,
  directoryListingJsonLd,
  jsonLdScript,
  SITE_URL,
} from "@/lib/jsonld";

// The underscore escape lets this detail route replace /directory rather than
// render beneath it; the directory hub intentionally has no child Outlet.
export const Route = createFileRoute("/directory_/$listingId")({
  loader: ({ params }) => {
    const business = findListingPagePilot(params.listingId);
    if (!business) throw notFound();
    return { business, category: findCategoryForBusiness(business) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Directory listing" }] };
    const { business } = loaderData;
    const name = business.program ?? business.name;
    const description = metaDescription(business.description);
    const url = `${SITE_URL}/directory/${business.id}`;
    return {
      meta: [
        { title: `${name} | The Vetted Senior` },
        { name: "description", content: description },
        { property: "og:title", content: `${name} | The Vetted Senior` },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        jsonLdScript(directoryListingJsonLd(business)),
        jsonLdScript(directoryListingBreadcrumbJsonLd(business)),
      ],
    };
  },
  component: ListingPage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Listing not found</h1>
        <p className="mt-3 text-muted-foreground">
          This individual listing is not part of the current pilot.
        </p>
        <Link
          to="/directory"
          className="mt-4 inline-block text-primary underline"
        >
          Browse the directory
        </Link>
      </div>
    </Page>
  ),
});

function metaDescription(value: string) {
  if (value.length <= 160) return value;
  const clipped = value.slice(0, 157);
  return `${clipped.slice(0, clipped.lastIndexOf(" "))}…`;
}

const TIER_LABEL: Record<Business["tier"], string> = {
  city: "Local",
  provincial: "Provincial",
  national: "National",
};

function coverageLabel(business: Business) {
  if (business.tier === "national") return "Across Canada";
  if (business.tier === "city") return business.cities.join(", ");
  return business.provinces
    .map((code) => findProvince(code)?.name ?? code)
    .join(", ");
}

function ListingPage() {
  const { business, category } = Route.useLoaderData();
  const name = business.program ?? business.name;
  const operator = business.program
    ? (business.runBy ?? business.name)
    : undefined;

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span aria-hidden> / </span>
            <Link to="/directory" className="hover:underline">
              Directory
            </Link>
            <span aria-hidden> / </span>
            <span>{name}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border-2 border-primary/40 bg-secondary px-3 py-1 text-sm font-semibold text-primary">
              <span aria-hidden>🏛</span> Public service
            </span>
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-secondary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary/80">
              {TIER_LABEL[business.tier]}
            </span>
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold text-primary md:text-5xl">
            {name}
          </h1>
          {operator && (
            <p className="mt-2 text-base text-muted-foreground">
              Run by {operator}
            </p>
          )}
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/90">
            {business.description}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-4xl gap-8 px-6 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)]">
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-primary">
              How to use this service
            </h2>
            {business.intakeNote && (
              <p className="mt-3 text-base leading-relaxed">
                {business.intakeNote}
              </p>
            )}
            <div className="mt-5 flex flex-wrap gap-3">
              {telLinks(business.phone).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground no-underline"
                >
                  Call {link.label}
                </a>
              ))}
              {business.website && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border-2 border-primary px-5 py-2 font-semibold text-primary no-underline"
                >
                  Open the official source ↗
                </a>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="font-serif text-2xl font-semibold text-primary">
              How this listing was checked
            </h2>
            <p className="mt-3 leading-relaxed">
              We checked this public or non-profit service directly against
              official sources on {business.verifiedDate}. This is not a
              privately vetted provider, and the organization has not paid to
              appear here.
            </p>
            <Link
              to="/about"
              className="mt-4 inline-block font-semibold text-primary underline"
            >
              Read the public-service verification standard
            </Link>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-primary">
            At a glance
          </h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-primary">Service area</dt>
              <dd className="mt-1 text-foreground/80">
                {coverageLabel(business)}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Category</dt>
              <dd className="mt-1 text-foreground/80">
                {category ? (
                  <Link
                    to="/help/$category"
                    params={{ category: category.slug }}
                    className="text-primary underline"
                  >
                    {category.name}
                  </Link>
                ) : (
                  business.category
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Last verified</dt>
              <dd className="mt-1 text-foreground/80">
                {business.verifiedDate}
              </dd>
            </div>
          </dl>
          <Link
            to="/directory"
            className="mt-6 inline-block font-semibold text-primary underline"
          >
            Browse all verified services
          </Link>
        </aside>
      </section>
    </Page>
  );
}
