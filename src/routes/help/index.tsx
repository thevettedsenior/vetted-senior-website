import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { CATEGORY_GROUPS, HELP_CATEGORIES } from "@/lib/directory-data";

export const Route = createFileRoute("/help/")({
  head: () => ({
    meta: [
      { title: "Find Help | The Vetted Senior" },
      {
        name: "description",
        content:
          "Already know what kind of help you need? Browse by service type: home care, legal, mobility, transportation, and more. Guides, articles, and vetted local providers.",
      },
    ],
  }),
  component: HelpPage,
});

function HelpPage() {
  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Find help
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            Already know what you're looking for? Browse by service type.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Each section has plain-language guides, practical articles, and,
            as we vet them, trusted local providers you can contact directly.
          </p>
        </div>
      </section>

      {CATEGORY_GROUPS.map((group) => (
        <section key={group} className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-serif text-3xl font-semibold text-primary">
            {group}
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CATEGORIES.filter((c) => c.group === group).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/help/$category"
                  params={{ category: c.slug }}
                  className="group flex h-full flex-col rounded-2xl border-2 border-border bg-card p-7 no-underline transition-all hover:border-gold hover:shadow-sm"
                >
                  <span aria-hidden className="text-4xl">{c.icon}</span>
                  <span className="mt-4 font-serif text-2xl text-primary">
                    {c.name}
                  </span>
                  <span className="mt-3 text-base text-foreground/75 flex-1 leading-relaxed">
                    {c.description}
                  </span>
                  <span className="mt-5 text-sm font-semibold text-gold">
                    Guides & services →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Page>
  );
}
