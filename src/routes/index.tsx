import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarCheck,
  ChevronRight,
  FileSearch,
  MapPin,
  PhoneCall,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Page } from "@/components/SiteShell";
import { HandbookCTA } from "@/components/HandbookCTA";
import { IconChip, categoryIcon, situationIcon } from "@/lib/site-icons";
import { SITUATIONS, HELP_CATEGORIES, PROVINCES, CATEGORY_GROUPS } from "@/lib/directory-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Vetted Senior: Guidance for Seniors, Families, and Caregivers" },
      {
        name: "description",
        content:
          "Getting older comes with questions. We have answers. Plain-language guidance on care, housing, safety, money, and support for seniors, adult children, and caregivers.",
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
      <section className="hero-wash border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 md:grid-cols-[1.35fr_1fr] md:items-center md:pb-20 md:pt-20">
          <div>
            <p className="eyebrow">Independent · Canadian · Personally checked</p>
            <h1 className="mt-5 font-serif text-[2.75rem] font-semibold leading-[1.08] text-primary md:text-6xl lg:text-[4.25rem]">
              Getting older comes with questions.{" "}
              <span className="text-gold-deep">We have answers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-foreground/85">
              Plain-language guidance on care, housing, safety, money, and
              support for seniors, adult children, and caregivers who need to
              know what to do next.
            </p>
            <p className="mt-3 text-lg font-medium text-muted-foreground">
              No jargon. No pressure. No paid placements.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#situations"
                className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground no-underline shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Find your situation
                <ChevronRight size={20} aria-hidden />
              </a>
              <a
                href="#find-help"
                className="inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-primary bg-card/70 px-8 py-4 text-lg font-semibold text-primary no-underline transition-colors hover:bg-primary/5"
              >
                Find help by topic
              </a>
            </div>
          </div>

          {/* Trust card */}
          <div className="lift-card rounded-3xl border border-gold/40 bg-card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                <ShieldCheck size={24} aria-hidden />
              </span>
              <p className="font-serif text-2xl font-semibold text-primary">
                What "vetted" means
              </p>
            </div>
            <ul className="mt-6 space-y-4 text-lg">
              {[
                "We speak to the owner or service provider directly.",
                "We confirm licences, insurance, and credentials.",
                "We check references from real clients or families.",
                "We re-review every year. Standards slip. We notice.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck
                    size={22}
                    className="mt-1 shrink-0 text-gold-deep"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
              No business can pay to appear here. Every listing earns its place.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW THIS SITE WORKS: 3 STEPS ─────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <ol className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FileSearch,
                title: "Start with your situation",
                text: "Pick the guide that sounds like what you're facing. Each one explains what's happening and what to do first.",
              },
              {
                icon: MapPin,
                title: "Find the right kind of help",
                text: "Browse 16 plain-language help topics, from home care to legal matters, with trusted providers as we vet them.",
              },
              {
                icon: PhoneCall,
                title: "Act with confidence",
                text: "Use our checklists, questions to ask, and vetted listings so you never have to guess who to trust.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-serif text-2xl font-semibold text-gold"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-serif text-xl font-semibold text-primary">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-foreground/75">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FIND YOUR SITUATION ───────────────────────────────────────────── */}
      <section id="situations" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16 md:py-20">
        <div className="mb-10">
          <p className="eyebrow">Start here</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-[2.6rem] md:leading-tight">
            Find your situation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Not sure where to start? Choose the situation that sounds closest to
            what you're dealing with. Each guide walks you through what's
            happening, what to do first, and what help exists.
          </p>
        </div>

        {/* Live guides */}
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liveSituations.map((s) => (
            <li key={s.slug}>
              <Link
                to="/situations/$slug"
                params={{ slug: s.slug }}
                className="lift-card group flex h-full flex-col rounded-2xl border border-border bg-card p-6 no-underline hover:border-gold"
              >
                <IconChip icon={situationIcon(s.slug)} />
                <span className="mt-4 font-serif text-xl font-semibold text-primary">
                  {s.shortTitle}
                </span>
                <span className="mt-2 flex-1 text-base leading-relaxed text-foreground/75">
                  {s.description}
                </span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-gold-deep">
                  Read the guide
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}

          {/* Coming soon cards */}
          {soonSituations.map((s) => (
            <li key={s.slug}>
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card/50 p-6">
                <IconChip icon={situationIcon(s.slug)} className="opacity-50" />
                <span className="mt-4 font-serif text-xl font-semibold text-primary/60">
                  {s.shortTitle}
                </span>
                <span className="mt-2 flex-1 text-base leading-relaxed text-foreground/50">
                  {s.description}
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Guide coming soon
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── FIND HELP ─────────────────────────────────────────────────────── */}
      <section id="find-help" className="scroll-mt-28 border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="eyebrow">Browse by topic</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-primary md:text-[2.6rem] md:leading-tight">
              Find help
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Already know what you're looking for? Browse by service type.
              Each section has plain-language guides, useful articles, and
              trusted local providers as we vet them.
            </p>
          </div>

          {CATEGORY_GROUPS.map((group) => (
            <div key={group} className="mb-10 last:mb-0">
              <p className="eyebrow mb-5">{group}</p>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {HELP_CATEGORIES.filter((c) => c.group === group).map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/help/$category"
                      params={{ category: c.slug }}
                      className="lift-card group flex h-full flex-col rounded-2xl border border-border bg-card p-5 no-underline hover:border-gold"
                    >
                      <IconChip icon={categoryIcon(c.slug)} />
                      <span className="mt-3.5 font-serif text-lg font-semibold leading-snug text-primary">
                        {c.shortName}
                      </span>
                      <span className="mt-1.5 flex-1 text-[0.95rem] leading-relaxed text-foreground/70">
                        {c.description}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
                        Guides &amp; services
                        <ChevronRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIRECTORY ─────────────────────────────────────────────────────── */}
      <section id="directory" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-sm font-semibold text-gold-foreground">
                <CalendarCheck size={16} aria-hidden />
                Directory: Coming Soon
              </span>
              <h2 className="font-serif text-3xl font-semibold text-primary md:text-[2.6rem] md:leading-tight">
                Find vetted services near you
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We're personally vetting senior-serving businesses, starting
                with Toronto, Mississauga, and Durham Region and expanding
                across the GTA, then the country. Every provider is reviewed,
                never paid to appear.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Where we don't yet have vetted providers, we say so plainly
                rather than pad the list. An empty category here is a promise
                being kept, not a gap being hidden.
              </p>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-primary">
                Browse by province
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROVINCES.slice(0, 10).map((p) => (
                  <li key={p.code}>
                    <Link
                      to="/province/$province"
                      params={{ province: p.code.toLowerCase() }}
                      className="flex min-h-13 items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5 text-base font-medium text-primary no-underline transition-colors hover:border-gold hover:bg-gold/10"
                    >
                      <span>{p.name}</span>
                      <ChevronRight size={18} className="text-gold-deep" aria-hidden />
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
      <section className="navy-band border-t border-border text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow !text-gold">Why this site exists</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-[2.6rem] md:leading-tight">
                Trust is the product
              </h2>
              <p className="mt-5 text-lg leading-relaxed opacity-90">
                There is no shortage of directories online. Most are link farms:
                businesses pay to appear, nobody checks anything, and families
                end up calling providers who shouldn't be trusted with
                vulnerable people.
              </p>
              <p className="mt-4 text-lg leading-relaxed opacity-90">
                The Vetted Senior exists because someone has to do the work of
                actually checking. We don't take paid placements. We don't rush
                the process. We remove providers who slip.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex min-h-13 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-gold-foreground no-underline transition-all hover:-translate-y-0.5 hover:opacity-95"
                >
                  How we vet every business
                  <ChevronRight size={18} aria-hidden />
                </Link>
                <Link
                  to="/disclosure"
                  className="text-base font-semibold text-primary-foreground/85 underline underline-offset-4 transition-colors hover:text-primary-foreground"
                >
                  How this site makes money
                </Link>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                { stat: "0", label: "Paid placements. Ever." },
                { stat: "5", label: "Published criteria every listing is scored against" },
                { stat: "Annual", label: "Re-review of every provider" },
                { stat: "Real", label: "References from senior clients" },
              ].map((item) => (
                <li
                  key={item.stat}
                  className="flex items-center gap-6 rounded-2xl border border-primary-foreground/15 bg-white/8 px-7 py-5 backdrop-blur-sm"
                >
                  <span className="min-w-24 shrink-0 font-serif text-3xl font-semibold text-gold md:text-4xl">
                    {item.stat}
                  </span>
                  <span className="text-lg opacity-90">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
            {/* Founder photo placeholder: swap for a real, warm photo of Ragini */}
            <div
              className="mx-auto flex h-44 w-44 shrink-0 flex-col items-center justify-center gap-1 rounded-full border-2 border-dashed border-gold/60 bg-cream text-center md:mx-0"
              role="img"
              aria-label="Placeholder for a photo of founder Ragini"
            >
              <Users size={36} className="text-gold-deep" aria-hidden />
              <span className="px-4 text-xs text-muted-foreground">
                Photo of Ragini
              </span>
            </div>
            <div className="relative">
              <Quote
                size={44}
                className="absolute -left-2 -top-6 rotate-180 text-gold/40 md:-left-6"
                aria-hidden
              />
              <p className="font-serif text-2xl font-semibold leading-snug text-primary md:text-3xl">
                After twenty years verifying banks, she started verifying the
                people who care for our parents.
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/80">
                The Vetted Senior was built by Ragini, who spent two decades
                running compliance and verification programs inside Canada's
                largest banks, and who built this site when she could not find
                a single resource she trusted for her own mother.
              </p>
              <Link
                to="/founder"
                className="mt-6 inline-flex min-h-13 items-center gap-2 rounded-full border-2 border-primary px-7 py-3.5 text-base font-semibold text-primary no-underline transition-colors hover:bg-primary/5"
              >
                Read her story
                <ChevronRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HANDBOOK ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <HandbookCTA />
        </div>
      </section>

      {/* ── SOFT CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-primary md:text-[2.6rem]">
            Not sure where to start?
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-foreground/80">
            That's exactly why this site exists. Start with a situation that
            sounds familiar, and we'll help you figure out the rest.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#situations"
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground no-underline shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Find your situation
              <ChevronRight size={20} aria-hidden />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center gap-2 rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-primary no-underline transition-colors hover:bg-primary/5"
            >
              Ask us directly
            </Link>
          </div>
        </div>
      </section>

    </Page>
  );
}
