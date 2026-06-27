import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { BusinessCard } from "@/components/BusinessCard";
import {
  findProvince,
  provincialBusinesses,
  groupByCategory,
} from "@/lib/directory-data";

export const Route = createFileRoute("/province/$province")({
  loader: ({ params }) => {
    const province = findProvince(params.province);
    if (!province) throw notFound();
    return {
      province,
      national: provincialBusinesses(province.code),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.province.name} — Vetted Senior Services | The Vetted Senior`
          : "Province",
      },
      {
        name: "description",
        content: loaderData
          ? `Find vetted services for seniors across ${loaderData.province.name}: national providers and local businesses by city.`
          : "",
      },
    ],
  }),
  component: ProvincePage,
  errorComponent: ({ error }) => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </div>
    </Page>
  ),
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl">Province not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back to home
        </Link>
      </div>
    </Page>
  ),
});

function ProvincePage() {
  const { province, national } = Route.useLoaderData();
  const grouped = groupByCategory(national);

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <nav className="text-base text-muted-foreground">
            <Link to="/" className="hover:underline">Home</Link>
            <span aria-hidden> / </span>
            <span>{province.name}</span>
          </nav>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Vetted services in {province.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground/85">
            National and provincial providers are listed below. For local
            businesses, choose a city.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-2xl font-semibold md:text-3xl">
          Choose your city
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {province.cities.map((city: string) => (
            <li key={city}>
              <Link
                to="/province/$province/$city"
                params={{
                  province: province.code.toLowerCase(),
                  city: city.toLowerCase().replace(/\s+/g, "-"),
                }}
                className="flex items-center justify-between rounded-2xl border-2 border-border bg-card px-6 py-5 text-lg font-semibold text-primary no-underline hover:border-gold hover:bg-gold/10"
              >
                <span>{city}</span>
                <span aria-hidden className="text-gold">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* National providers */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            National & provincial providers
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            These companies serve all of {province.name}.
          </p>

          {national.length === 0 ? (
            <p className="mt-8 rounded-xl border border-border bg-card p-6 text-lg">
              We're still vetting province-wide providers here. Check your city
              for local businesses.
            </p>
          ) : (
            <div className="mt-8 space-y-10">
              {Object.entries(grouped).map(([cat, items]) => (
                <div key={cat}>
                  <h3 className="font-serif text-xl text-primary">{cat}</h3>
                  <div className="mt-4 grid gap-5 md:grid-cols-2">
                    {items.map((b) => (
                      <BusinessCard key={b.id} business={b} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Page>
  );
}
