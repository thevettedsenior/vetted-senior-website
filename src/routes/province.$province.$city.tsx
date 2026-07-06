import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { BusinessCard } from "@/components/BusinessCard";
import { LaunchNotice } from "@/components/HandbookCTA";
import {
  findProvince,
  cityBusinesses,
  groupByCategory,
} from "@/lib/directory-data";

export const Route = createFileRoute("/province/$province/$city")({
  loader: ({ params }) => {
    const province = findProvince(params.province);
    if (!province) throw notFound();
    const cityName = province.cities.find(
      (c) => c.toLowerCase().replace(/\s+/g, "-") === params.city.toLowerCase(),
    );
    if (!cityName) throw notFound();
    return {
      province,
      cityName,
      businesses: cityBusinesses(province.code, cityName),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.cityName}, ${loaderData.province.name}: Vetted Senior Services`
          : "City",
      },
      {
        name: "description",
        content: loaderData
          ? `Vetted local businesses for seniors in ${loaderData.cityName}, ${loaderData.province.name}.`
          : "",
      },
    ],
  }),
  component: CityPage,
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
        <h1 className="font-serif text-3xl">City not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back to home
        </Link>
      </div>
    </Page>
  ),
});

function CityPage() {
  const { province, cityName, businesses } = Route.useLoaderData();
  const grouped = groupByCategory(businesses);

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <nav className="text-base text-muted-foreground">
            <Link to="/" className="hover:underline">Home</Link>
            <span aria-hidden> / </span>
            <Link
              to="/province/$province"
              params={{ province: province.code.toLowerCase() }}
              className="hover:underline"
            >
              {province.name}
            </Link>
            <span aria-hidden> / </span>
            <span>{cityName}</span>
          </nav>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            Vetted services in {cityName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-foreground/85">
            Local businesses based right here in {cityName}, {province.name}.
            Looking for a national company?{" "}
            <Link
              to="/province/$province"
              params={{ province: province.code.toLowerCase() }}
              className="text-primary underline"
            >
              See province-wide providers
            </Link>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        {businesses.length === 0 ? (
          <LaunchNotice place={cityName} />
        ) : (
          <div className="space-y-12">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <h2 className="font-serif text-2xl text-primary md:text-3xl">
                  {cat}
                </h2>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {items.map((b) => (
                    <BusinessCard key={b.id} business={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Page>
  );
}
