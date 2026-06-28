import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { articlesForCategory, findHelpCategory, PROVINCES } from "@/lib/directory-data";

export const Route = createFileRoute("/help/$category/")({
  loader: ({ params }) => {
    const category = findHelpCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.category.name} | Find Help | The Vetted Senior`
          : "Find Help",
      },
      {
        name: "description",
        content: loaderData ? loaderData.category.intro.slice(0, 160) : "",
      },
    ],
  }),
  component: HelpCategoryPage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Category not found</h1>
        <Link to="/help" className="mt-4 inline-block text-primary underline">
          Back to Find Help
        </Link>
      </div>
    </Page>
  ),
});

function HelpCategoryPage() {
  const { category } = Route.useLoaderData();
  const articles = articlesForCategory(category.slug);

  return (
    <Page>

      {/* ── CATEGORY HERO ────────────────────────────────────────────────── */}
      {category.image ? (
        <section
          className="relative flex h-[400px] flex-col justify-end bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <div className="relative mx-auto w-full max-w-4xl px-6 py-4 text-sm text-white/80">
            <Link to="/" className="hover:underline">Home</Link>
            <span aria-hidden> / </span>
            <Link to="/help" className="hover:underline">Find Help</Link>
            <span aria-hidden> / </span>
            <span>{category.name}</span>
          </div>
          <div className="relative mx-auto w-full max-w-4xl px-6 pb-10">
            <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-white/90 leading-relaxed">
              {category.intro}
            </p>
          </div>
        </section>
      ) : (
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-6 py-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:underline">Home</Link>
            <span aria-hidden> / </span>
            <Link to="/help" className="hover:underline">Find Help</Link>
            <span aria-hidden> / </span>
            <span>{category.name}</span>
          </div>
          <div className="mx-auto max-w-4xl px-6 pb-14">
            <span aria-hidden className="text-5xl">{category.icon}</span>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-primary md:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
              {category.intro}
            </p>
          </div>
        </section>
      )}

      {/* ── ARTICLES ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          Guides & articles
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          Practical information to help you make confident decisions.
        </p>

        {articles.length > 0 ? (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  to="/help/$category/$article"
                  params={{ category: category.slug, article: article.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-card no-underline transition-all hover:border-gold hover:shadow-sm"
                >
                  <div
                    className="h-40 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-serif text-xl text-primary">
                      {article.title}
                    </span>
                    <span className="mt-2 text-base text-foreground/75 flex-1">
                      {article.description}
                    </span>
                    <span className="mt-4 text-sm font-semibold text-gold">
                      Read more →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <p className="font-serif text-xl text-primary">Articles coming soon</p>
            <p className="mt-2 text-base text-muted-foreground">
              We're writing plain-language guides for this section.
              Check back shortly, or{" "}
              <Link to="/contact" className="underline">
                contact us
              </Link>{" "}
              if you have a specific question right now.
            </p>
          </div>
        )}
      </section>

      {/* ── DIRECTORY ────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Find vetted providers near you
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            We're personally vetting {category.name.toLowerCase()} providers across the country.
            Select your province to see what's available in your area.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-primary mb-4">Choose your province</p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PROVINCES.filter(
                (p) => !["NT", "NU", "YT"].includes(p.code)
              ).map((p) => (
                <li key={p.code}>
                  <Link
                    to="/province/$province"
                    params={{ province: p.code.toLowerCase() }}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-base font-medium text-primary no-underline transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    <span>{p.name}</span>
                    <span aria-hidden className="text-gold text-sm">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border/50 bg-card/50 p-5">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                Directory building in progress
              </p>
              <p className="text-base text-muted-foreground">
                We're adding vetted {category.name.toLowerCase()} providers as they pass our
                review process. No business can buy their way in. Every listing is earned.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Page>
  );
}
