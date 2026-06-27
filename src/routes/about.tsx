import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "How We Vet | The Vetted Senior" },
      {
        name: "description",
        content:
          "What 'vetted' means on The Vetted Senior — and what it doesn't. Our review process, our standards, and our commitment to honesty about both.",
      },
      { property: "og:title", content: "How We Vet | The Vetted Senior" },
    ],
  }),
  component: About,
});

const STEPS = [
  {
    n: "1",
    title: "Direct conversation",
    body: "We speak with the owner or lead provider about their experience working with seniors, their approach to care, their staff training, and how they handle complaints.",
  },
  {
    n: "2",
    title: "Credentials and licences",
    body: "Where applicable, we confirm professional licences, insurance coverage, regulatory standing, and any required certifications for their field.",
  },
  {
    n: "3",
    title: "References from real clients",
    body: "We ask for references from senior clients or their family members — and we follow up. We're looking for honest accounts of real experiences, not curated testimonials.",
  },
  {
    n: "4",
    title: "Public record check",
    body: "We look at online reviews, complaint patterns, regulatory records, and any public information that speaks to how this provider actually treats people.",
  },
  {
    n: "5",
    title: "Annual re-review",
    body: "Being listed isn't a permanent status. We re-review every provider each year. If standards slip, the listing comes down. That's the point.",
  },
];

function About() {
  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            How we vet
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            The word "vetted" gets thrown around a lot online. Here's exactly
            what it means when we use it — and what it doesn't.
          </p>
        </div>
      </section>

      {/* What vetted means */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl mb-6">
          What our vetting process looks like
        </h2>
        <ol className="space-y-5">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
            >
              <span
                aria-hidden
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/25 font-serif text-2xl text-primary"
              >
                {s.n}
              </span>
              <div>
                <h3 className="font-serif text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-lg text-foreground/85 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* What vetted doesn't mean */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl mb-4">
            What "vetted" doesn't mean
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Vetting reduces risk — it doesn't eliminate it. A business that passes
            our review is one we believe is worth considering. It is not a guarantee
            of a perfect experience.
          </p>
          <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
            People change. Businesses change. That's why we re-review annually,
            and why we encourage users to trust their own judgment alongside ours.
            If something feels wrong, it probably is.
          </p>
          <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
            We also want to be honest about where we are: The Vetted Senior is
            building its directory carefully and deliberately. Not every service
            category has listings yet. We'd rather have fewer listings that are
            genuinely vetted than a full directory of businesses nobody checked.
          </p>
        </div>
      </section>

      {/* How to report */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            Had a bad experience with a listed provider?
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Tell us. We take every concern seriously. If a provider's conduct
            doesn't meet the standard we hold them to, we investigate and act —
            up to and including removing the listing.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </Page>
  );
}
