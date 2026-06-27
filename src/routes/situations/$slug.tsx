import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { findSituation } from "@/lib/directory-data";

export const Route = createFileRoute("/situations/$slug")({
  loader: ({ params }) => {
    const situation = findSituation(params.slug);
    if (!situation) throw notFound();
    if (situation.phase === "coming-soon") throw notFound();
    return { situation };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.situation.title} | The Vetted Senior`
          : "Guide",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.situation.description} Plain-language guidance from The Vetted Senior.`
          : "",
      },
    ],
  }),
  component: SituationGuidePage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Guide not found</h1>
        <p className="mt-3 text-muted-foreground">
          This guide may still be in progress.
        </p>
        <Link to="/situations" className="mt-4 inline-block text-primary underline">
          See all situations
        </Link>
      </div>
    </Page>
  ),
});

function SituationGuidePage() {
  const { situation } = Route.useLoaderData();

  return (
    <Page>

      {/* ── GUIDE HERO ───────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/situations" className="hover:underline">Find Your Situation</Link>
          <span aria-hidden> / </span>
          <span>{situation.title}</span>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-14">
          <span aria-hidden className="text-5xl">{situation.icon}</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary md:text-5xl">
            {situation.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            {situation.description}
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Plain-language guidance. No jargon. No pressure.
          </p>
        </div>
      </section>

      {/* ── GUIDE CONTENT ────────────────────────────────────────────────── */}
      {/*
        Content sections below are placeholders for Hermes to fill in.
        Each situation guide follows this 10-part structure:
          1. What you may be dealing with
          2. What to do first
          3. Common risks
          4. Care options
          5. Government and community supports
          6. Money and funding considerations
          7. Questions to ask
          8. Helpful downloads and forms
          9. Local services to find
          10. Suggested next steps
      */}

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border-2 border-gold/40 bg-card p-8">
          <p className="font-serif text-2xl text-primary">
            This guide is being written
          </p>
          <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
            We're building out the full {situation.title} guide now. It will cover
            what to do first, what to expect, care options, government supports,
            funding considerations, and more.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            In the meantime, if you have an urgent question —
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
          >
            Contact us directly →
          </Link>
        </div>
      </section>

      {/* ── RELATED HELP CATEGORIES ──────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Know what kind of help you need?
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Browse by service type to find guides, articles, and vetted providers.
          </p>
          <Link
            to="/help"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            Browse Find Help →
          </Link>
        </div>
      </section>

    </Page>
  );
}
