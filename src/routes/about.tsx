import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "How We Vet | The Vetted Senior" },
      {
        name: "description",
        content:
          "The full vetting methodology behind The Vetted Senior: primary-source verification, structured interviews, reference calls, five published criteria, scheduled re-reviews, and public removals. Nobody can pay to be listed.",
      },
      { property: "og:title", content: "How We Vet | The Vetted Senior" },
      {
        property: "og:description",
        content:
          "Licences checked with regulators, insurance certificates read, references actually called, and every listing re-reviewed on a schedule. Here is the whole process.",
      },
    ],
  }),
  component: About,
});

const STAGES = [
  {
    n: "1",
    title: "The desk screen",
    body: "Before we contact anyone, we check the public record: legal existence in the business registry, regulatory standing on the regulator's own register, litigation history, and complaint patterns. Roughly half of the candidates we research never make it past this stage. We also list every credential, membership, and award claimed on the provider's website, because each claim becomes something we verify later. A business that claims \"fully licensed and insured\" and cannot produce the certificate is declined for honesty, not paperwork.",
  },
  {
    n: "2",
    title: "Documents and consent",
    body: "Providers who pass the screen are invited to participate. They supply proof of insurance, relevant licences and registrations, and operational basics, and they consent in writing to us contacting regulators and client references. Participation is free. It has to be: inclusion that can be bought is worthless.",
  },
  {
    n: "3",
    title: "Verification against primary sources",
    body: "We verify everything against the source that issued it, never against the provider's own claims. Licences are checked on the regulator's register. Insurance certificates are read, with the insurer and expiry logged. Workplace insurance clearance is confirmed where the provider has workers. Regulated health professionals are checked against their college registers. Every check is recorded with a date.",
  },
  {
    n: "4",
    title: "The structured interview",
    body: "An hour or more with the owner or director, using a structured set of questions, some designed to be uncomfortable. We ask them to walk us through their last hire, not their hiring policy. We ask what happens when the regular worker calls in sick at 6am. We ask about a client relationship that went badly and what changed afterward, because how a company handles its failures tells you more than its successes ever will. We ask to see the actual rate card, because billing surprises are this industry's top complaint.",
  },
  {
    n: "5",
    title: "Reference calls",
    body: "Three client references, consented in writing, each interviewed for 20 to 30 minutes. We ask whether the same person shows up on time, whether anything ever went wrong and what happened when they raised it, whether an invoice ever surprised them, and whether management ever checked in without being called first. Identities are never published. Coached-sounding references are themselves a red flag.",
  },
  {
    n: "6",
    title: "Determination",
    body: "Everything is scored against the five criteria below, with a written rationale. Listing requires at least four passes out of five, no outright fail on any criterion, and no wobble at all on honesty. A provider with one marginal area can be listed conditionally, with the improvement named privately and the re-review moved up to six months.",
  },
  {
    n: "7",
    title: "The published vetting report",
    body: "Every listing carries its vetting report: what we verified and when, what we asked, what their clients told us, and what the provider does not do, in their own stated limits. Providers fact-check factual fields before publication. They cannot edit conclusions. Every report ends with the same line: this provider has not paid, and cannot pay, to appear here.",
  },
  {
    n: "8",
    title: "Re-review, forever",
    body: "Every listing is re-reviewed at twelve months, or six for conditional passes. Expired insurance or licences trigger an immediate review, as do ownership changes, regulator actions, complaint patterns, and media reports. A directory that never removes anyone is not vetting. It is decorating.",
  },
];

const CRITERIA = [
  {
    name: "Legitimacy",
    body: "Legal existence, required licences and registrations, insurance in force, workplace coverage where applicable. All verified against primary sources.",
  },
  {
    name: "Honesty",
    body: "Every public claim checks out, interview answers match the records, and pricing is transparent and documented. This is the criterion the brand is named for, and it is pass or fail: a business that lies to the vetting process about small things will lie to families about large ones.",
  },
  {
    name: "Competence and safety",
    body: "Screening, training, and supervision practices that are real and evidenced, not described. Scope limits understood. Category-specific safety practices in place.",
  },
  {
    name: "Reliability",
    body: "Backup coverage when someone is sick, a staff turnover picture that supports consistent care, and consistency confirmed by the people receiving the service.",
  },
  {
    name: "Accountability",
    body: "Complaints get answered, management is reachable, and a named human answers for the business. We test this in the interview and again with references.",
  },
];

function About() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
            How we vet
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            Every referral site in this industry claims to "carefully screen"
            its listings. Here is what the words mean on ours, published in
            full, because a process you can't read is a process you can't
            trust.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            The methodology was designed by our founder,{" "}
            <Link to="/founder" className="text-primary underline">
              Ragini
            </Link>
            , the way she designed compliance programs for Canada's largest
            banks for twenty years: documented, repeatable, and checked against
            primary sources.
          </p>
        </div>
      </section>

      {/* ── THE ONE RULE ─────────────────────────────────────────────────── */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            One rule before everything else: nobody can pay to be listed here.
            Not with money, not with favours, not with anything.
          </p>
          <p className="mt-3 text-lg opacity-85">
            How the site earns money instead is spelled out, in full, on{" "}
            <Link
              to="/disclosure"
              className="underline text-primary-foreground"
            >
              our disclosure page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── THE PIPELINE ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl mb-3">
          The process, stage by stage
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Six to nine hours of work per provider, every stage written to file,
          every claim traced to its source.
        </p>
        <ol className="space-y-5">
          {STAGES.map((s) => (
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
      </section>

      {/* ── THE FIVE CRITERIA ────────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            The five criteria, and the four-of-five rule
          </h2>
          <p className="mt-3 text-lg text-foreground/85 leading-relaxed">
            Every provider is scored pass, marginal, or fail on each of these,
            with a written rationale. Listing requires at least four passes,
            no fails, and no marginal score on honesty.
          </p>
          <ul className="mt-8 space-y-4">
            {CRITERIA.map((c, i) => (
              <li
                key={c.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-serif text-xl text-primary">
                  <span className="text-gold">{i + 1}.</span> {c.name}
                </h3>
                <p className="mt-2 text-lg text-foreground/85 leading-relaxed">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
            Providers who don't pass are told why, privately and specifically,
            and what a successful re-application would show. Some fix the
            deficiency and come back. That is the directory improving the
            market, which is the mission working even when the listing does
            not happen.
          </p>
        </div>
      </section>

      {/* ── WHEN SOMETHING GOES WRONG ────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          What happens when something goes wrong
        </h2>
        <div className="mt-5 space-y-5 text-lg text-foreground/85 leading-relaxed">
          <p>
            Listings are not permanent. Every report from a family is
            acknowledged within one business day and logged. A service
            complaint gets the provider's response and goes in the file; a
            pattern of complaints triggers an early re-review. A serious
            allegation, one that would fail a criterion if credible, suspends
            the listing while we investigate: it is marked{" "}
            <em>"Under review, temporarily not recommended,"</em> with the
            date, until we decide.
          </p>
          <p>
            An allegation of harm, abuse, financial exploitation, or fraud
            suspends the listing the same day, before we even speak with the
            provider. And one thing we will always be clear about: we are a
            directory, not an investigator of crimes. If a report involves
            abuse or a crime, our first response is directing the reporter to
            the proper authority: 911 where urgent, and Ontario's Seniors
            Safety Line, 1-866-299-1011, which answers 24 hours a day. Our own
            investigation answers one question only: does this provider still
            meet our standard for listing?
          </p>
          <p>
            When a provider is removed, the listing page is never quietly
            deleted. It becomes a dated removal notice stating which criterion
            was no longer met, because scrubbing history is what other
            directories do. Suspensions that end in reinstatement stay visible
            in the listing's history too.
          </p>
        </div>
      </section>

      {/* ── WHAT VETTED DOESN'T MEAN ─────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl mb-4">
            What "vetted" doesn't mean
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Vetting reduces risk. It does not eliminate it, and anyone who
            promises otherwise is lying to you. A business that passes our
            review is one we believe is worth considering, with the evidence
            published. It is not a guarantee of a perfect experience. People
            change, businesses change, and that is exactly why the re-review
            schedule exists and why we encourage you to trust your own
            judgment alongside ours. If something feels wrong, it probably is.
          </p>
          <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
            And the second honest limit: the directory is young. We are
            building it region by region, starting with the Toronto area, and
            provider by provider, at six to nine hours per file. Where we do
            not yet have vetted providers, we say so plainly rather than pad
            the list. On this site, an empty category is a promise being kept,
            not a gap being hidden.
          </p>
        </div>
      </section>

      {/* ── REPORT ───────────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
            Had an experience with a listed provider that doesn't match their
            listing?
          </h2>
          <p className="text-lg text-foreground/85 leading-relaxed">
            Good or bad, tell us. That feedback loop is part of the vetting.
            Every concern is taken seriously, investigated against our
            published criteria, and acted on, up to and including removal.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
            >
              Contact us →
            </Link>
            <Link
              to="/founder"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
            >
              Meet the person who checks
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
