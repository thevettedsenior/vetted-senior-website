import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { IconChip, situationIcon } from "@/lib/site-icons";
import { SITUATIONS } from "@/lib/directory-data";

export const Route = createFileRoute("/situations/")({
  head: () => ({
    meta: [
      { title: "Find Your Situation | The Vetted Senior" },
      {
        name: "description",
        content:
          "Not sure where to start? Choose the situation that sounds closest to what you're dealing with. Plain-language guides for seniors, adult children, and caregivers.",
      },
    ],
  }),
  component: SituationsPage,
});

function SituationsPage() {
  const live = SITUATIONS.filter((s) => s.phase === "live");
  const soon = SITUATIONS.filter((s) => s.phase === "coming-soon");

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            Find your situation
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            Not sure what kind of help you need yet? You're in the right place.
            Choose the situation that sounds closest to what you're dealing with.
          </p>
          <p className="mt-3 text-lg text-muted-foreground">
            Each guide explains what's happening, what to do first, what options
            exist, and where to find real help without the jargon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-2xl text-primary mb-6">Guides available now</h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((s) => (
            <li key={s.slug}>
              <Link
                to="/situations/$slug"
                params={{ slug: s.slug }}
                className="lift-card group flex h-full flex-col rounded-2xl border border-border bg-card p-7 no-underline hover:border-gold"
              >
                <IconChip icon={situationIcon(s.slug)} />
                <span className="mt-4 font-serif text-2xl text-primary">
                  {s.title}
                </span>
                <span className="mt-3 text-base text-foreground/75 flex-1 leading-relaxed">
                  {s.description}
                </span>
                <span className="mt-5 text-sm font-semibold text-gold-deep">
                  Read the guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {soon.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="font-serif text-2xl text-primary mb-2">More guides on the way</h2>
            <p className="text-base text-muted-foreground mb-6">
              We're writing these carefully. They'll be ready soon.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {soon.map((s) => (
                <li
                  key={s.slug}
                  className="flex flex-col rounded-2xl border border-dashed border-border bg-card/50 p-6"
                >
                  <IconChip icon={situationIcon(s.slug)} className="opacity-50" />
                  <span className="mt-3 font-serif text-lg text-primary">
                    {s.title}
                  </span>
                  <span className="mt-2 text-sm text-foreground/65 flex-1">
                    {s.description}
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Coming soon
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Page>
  );
}
