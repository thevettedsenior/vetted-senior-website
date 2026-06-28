import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { SITUATIONS, HELP_CATEGORIES, PROVINCES } from "@/lib/directory-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Vetted Senior — Guidance for Seniors, Families, and Caregivers" },
      {
        name: "description",
        content:
          "Getting older comes with questions. We have answers. Plain-language guidance on care, housing, safety, money, and support — for seniors, adult children, and caregivers.",
      },
      { property: "og:title", content: "The Vetted Senior" },
      {
        property: "og:description",
        content:
          "Getting older comes with questions. We have answers. Trusted guidance for seniors and the people who care for them.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const liveSituations = SITUATIONS.filter((s) => s.phase === "live");
  const soonSituations = SITUATIONS.filter((s) => s.phase === "coming-soon");

  return (
    <Page>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
              Getting older comes with questions.{" "}
              <br />
              <span className="text-gold">We have answers.</span>
            </h1>
            <p className="mt-5 max-w-xl text-xl text-foreground/85 leading-relaxed">
              Plain-language guidance on care, housing, safety, money, and support for seniors, adult children, and caregivers who need to know what to do next.
            </p>
            <p className="mt-3 text-lg text-muted-foreground">
              No jargon. No pressure. No paid placements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#situations"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Find your situation →
              </a>
              <a
                href="#find-help"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-lg font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                Find help by topic
              </a>
            </div>
          </div>

          {/* Trust card */}
          <div className="rounded-3xl border-2 border-gold/50 bg-background p-5 md:p-8">
            <p className="font-serif text-2xl text-primary">What "vetted" means</p>
            <ul className="mt-5 space-y-4 text-lg">
              <li className="flex gap-3 items-start">
                <span aria-hidden className="mt-0.5 text-gold font-bold">✓</span>
                <span>We speak to the owner or service provider directly.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span aria-hidden className="mt-0.5 text-gold font-bold">✓</span>
                <span>We confirm licences, insurance, and credentials.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span aria-hidden className="mt-0.5 text-gold font-bold">✓</span>
                <span>We check references from real clients or families.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span aria-hidden className="mt-0.5 text-gold font-bold">✓</span>
                <span>We re-review every year. Standards slip. We notice.</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-muted-foreground border-t border-border pt-4">
              No business can pay to appear here. Every listing earns its place.
            </p>
          </div>
        </div>
      </section>

      {/* ── FIND YOUR SITUATION ───────────────────────────────────────────── */}
      <section id="situations" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-4xl">
            Find your situation
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Not sure where to start? Choose the situation that sounds closest to
            what you're dealing with. Each guide walks you through what's
            happening, what to do first, and what help exists.
          </p>
        </div>

        {/* Live guides */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {liveSituations.map((s) => (
            <li key={s.slug}>
              <Link
                to="/situations/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col rounded-2xl border-2 border-border bg-card p-6 no-underline transition-all hover:border-gold hover:shadow-sm"
              >
                <span aria-hidden className="text-3xl">{s.icon}</span>
                <span className="mt-3 font-serif text-xl text-primary group-hover:text-primary">
                  {s.shortTitle}
                </span>
                <span className="mt-2 text-base text-foreground/75 flex-1">
                  {s.description}
                </span>
                <span className="mt-4 text-sm font-semibold text-gold">
                  Read the guide →
                </span>
              </Link>
            </li>
          ))}

          {/* Coming soon cards */}
          {soonSituations.map((s) => (
            <li key={s.slug}>
              <div className="flex h-full flex-col rounded-2xl border-2 border-border/50 bg-card/50 p-6 opacity-60">
                <span aria-hidden className="text-3xl">{s.icon}</span>
                <span className="mt-3 font-serif text-xl text-primary">
                  {s.shortTitle}
                </span>
                <span className="mt-2 text-base text-foreground/75 flex-1">
                  {s.description}
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Guide coming soon
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── FIND HELP ─────────────────────────────────────────────────────── */}
      <section id="find-help" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-semibold text-primary md:text-4xl">
              Find help
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Already know what you're looking for? Browse by service type.
              Each section has plain-language guides, useful articles, and trusted local providers as we vet them.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/help/$category"
                  params={{ category: c.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 no-underline transition-all hover:border-gold hover:shadow-sm"
                >
                  <span aria-hidden className="text-3xl">{c.icon}</span>
                  <span className="mt-3 font-serif text-xl text-primary">
                    {c.shortName}
                  </span>
                  <span className="mt-2 text-base text-foreground/75 flex-1">
                    {c.description}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-gold">
                    Guides & services →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DIRECTORY ─────────────────────────────────────────────────────── */}
      <section id="directory" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1 text-sm font-semibold text-primary mb-4">
                Directory — Coming Soon
              </span>
              <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                Find vetted services near you
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We're personally vetting senior-serving businesses across the
                country. Every provider in the directory has been reviewed, not paid to appear.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Select your province to see what's available in your area,
                or check back as we add more vetted listings.
              </p>
            </div>

            <div>
              <p className="text-base font-semibold text-primary mb-4">Browse by province</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROVINCES.slice(0, 10).map((p) => (
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
              <p className="mt-4 text-sm text-muted-foreground">
                All territories and provinces will be listed as providers are vetted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY VETTED ────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold md:text-4xl">
                Trust is the product
              </h2>
              <p className="mt-4 text-lg opacity-85 leading-relaxed">
                There is no shortage of directories online. Most are link farms —
                businesses pay to appear, nobody checks anything, and families
                end up calling providers who shouldn't be trusted with vulnerable people.
              </p>
              <p className="mt-4 text-lg opacity-85 leading-relaxed">
                The Vetted Senior exists because someone has to do the work of
                actually checking. We don't take paid placements. We don't rush
                the process. We remove providers who slip.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:bg-primary-foreground/10 transition-colors"
              >
                How we vet every business →
              </Link>
            </div>

            <ul className="space-y-4">
              {[
                { stat: "0", label: "Paid placements. Ever." },
                { stat: "5-step", label: "Vetting process for every listing" },
                { stat: "Annual", label: "Re-review of every provider" },
                { stat: "Real", label: "References from senior clients" },
              ].map((item) => (
                <li
                  key={item.stat}
                  className="flex items-center gap-5 rounded-2xl bg-white/10 px-6 py-5"
                >
                  <span className="font-serif text-3xl font-semibold text-gold shrink-0">
                    {item.stat}
                  </span>
                  <span className="text-lg opacity-90">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SOFT CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-xl text-foreground/80 leading-relaxed">
            That's exactly why this site exists. Start with a situation that
            sounds familiar, and we'll help you figure out the rest.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#situations"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Find your situation →
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-lg font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Ask us directly
            </Link>
          </div>
        </div>
      </section>

    </Page>
  );
}
