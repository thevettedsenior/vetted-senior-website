import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/get-vetted")({
  head: () => ({
    meta: [
      { title: "Get Vetted: For Providers | The Vetted Senior" },
      {
        name: "description",
        content:
          "How senior-care providers earn a listing in The Vetted Senior directory. No cost, no catch: pass an independent verification process and keep standards up between reviews. Nobody can pay to be listed.",
      },
      { property: "og:title", content: "Get vetted: for providers" },
    ],
  }),
  component: GetVettedPage,
});

const STEPS = [
  {
    n: "1",
    title: "You provide documents",
    body: "Proof of insurance, relevant licences or registrations, and a few operational basics. About 30 minutes of gathering.",
  },
  {
    n: "2",
    title: "A structured interview",
    body: "About an hour with our founder, by video or in person. Some questions will feel pointed. The providers who do best are the ones who answer plainly, including about things that went wrong.",
  },
  {
    n: "3",
    title: "Three client references",
    body: "You connect us with three client references, with their consent, whom we will actually call. Identities are never published.",
  },
  {
    n: "4",
    title: "We verify everything against primary sources",
    body: "Licences with the regulators that issue them, insurance with the certificate, claims against the record. That is the entire point of the directory.",
  },
];

function GetVettedPage() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            For providers
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            Get vetted. No cost, no catch.
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            The Vetted Senior is a directory of senior-care providers built on
            one rule: nobody can pay to be listed. No fees, no advertising, no
            pay-to-play. Inclusion is earned by passing an independent vetting
            process, and only by that.
          </p>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          Why go through it
        </h2>
        <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
          Families increasingly do not trust marketing claims, and they are
          right not to. If you pass, you receive a free listing with a
          published vetting report: what we checked, when, and what we found.
          A listing here is third-party proof, not self-description. If you do
          not pass, we tell you why, privately and specifically, and what
          would change the outcome.
        </p>
      </section>

      {/* ── WHAT IT INVOLVES ─────────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl mb-8">
            Exactly what it involves
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
                  <p className="mt-2 text-lg text-foreground/85 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-base text-muted-foreground">
            The full methodology, including the five criteria and the
            four of five rule, is published on{" "}
            <Link to="/about" className="text-primary underline">
              How We Vet
            </Link>
            . We hold nothing back, because a process you can't read is a
            process you can't trust.
          </p>
        </div>
      </section>

      {/* ── UPFRONT ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          Two things we want to be upfront about
        </h2>
        <div className="mt-5 space-y-5 text-lg text-foreground/85 leading-relaxed">
          <p>
            <strong>First</strong>, listings are re-reviewed periodically, and
            providers who stop meeting the standard are removed. This is what
            makes the listing worth something.
          </p>
          <p>
            <strong>Second</strong>, there is no charge now. If the directory
            later introduces an annual fee, it will cover audit costs only, it
            will never influence outcomes, and existing listed providers will
            get full notice. That commitment is in writing on{" "}
            <Link to="/disclosure" className="text-primary underline">
              our disclosure page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── APPLY ────────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            Interested?
          </h2>
          <p className="mt-3 max-w-2xl text-lg opacity-90 leading-relaxed">
            Email us with your business name, category, and service area, and
            we will send the participation agreement and document list. We are
            currently vetting providers in Toronto, Mississauga, and Durham
            Region, expanding across the GTA.
          </p>
          <a
            href="mailto:apply@thevettedsenior.com?subject=Vetting%20application"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-lg font-semibold text-gold-foreground no-underline hover:opacity-90 transition-opacity"
          >
            apply@thevettedsenior.com →
          </a>
          <p className="mt-4 text-sm opacity-70">
            If it's not for you, no hard feelings, and we would welcome
            hearing why.
          </p>
        </div>
      </section>
    </Page>
  );
}
