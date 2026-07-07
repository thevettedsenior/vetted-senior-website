import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { HandbookCTA } from "@/components/HandbookCTA";
import { resourcesByGroup } from "@/lib/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free Checklists & Printables | The Vetted Senior" },
      {
        name: "description",
        content:
          "Every free printable checklist and worksheet from The Vetted Senior in one place: home care questions, residence tours, legal documents, medical alerts, seasonal home safety, and the full Caregiver Handbook. No email required.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const groups = resourcesByGroup();

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          <h1 className="font-serif text-3xl font-semibold text-primary md:text-5xl">
            Checklists &amp; printables
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/85 leading-relaxed md:text-xl">
            Every worksheet on this site, in one place. Print them, write on
            them, bring them to tours and provider calls. All free, and none
            of them ask for your email first.
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Each one comes from a guide on this site, so if a checklist raises
            questions, the guide it belongs to has the answers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10 md:py-12">
        <div className="space-y-12">
          {groups.map(([group, items]) => (
            <div key={group}>
              <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                {group}
              </h2>
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {items.map((r) => (
                  <li key={r.file}>
                    <a
                      href={r.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl border-2 border-border bg-card p-6 no-underline transition-all hover:border-gold hover:shadow-sm"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {r.pages}
                      </span>
                      <span className="mt-2 font-serif text-xl text-primary">
                        {r.title}
                      </span>
                      <span className="mt-2 flex-1 text-base text-foreground/75 leading-relaxed">
                        {r.description}
                      </span>
                      <span className="mt-4 text-sm font-semibold text-gold">
                        Download PDF →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Not sure where to start?
          </h2>
          <p className="mt-2 max-w-2xl text-lg text-foreground/85 leading-relaxed">
            If you know what kind of help you need, start with{" "}
            <Link to="/help" className="text-primary underline">
              Find Help
            </Link>
            . If you only know something has changed, start with{" "}
            <Link to="/situations" className="text-primary underline">
              Find Your Situation
            </Link>
            .
          </p>
          <div className="mt-8">
            <HandbookCTA compact />
          </div>
        </div>
      </section>
    </Page>
  );
}
