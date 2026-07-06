import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { HANDBOOK_PDF, SUBSCRIBE_MAILTO } from "@/components/HandbookCTA";

export const Route = createFileRoute("/handbook")({
  head: () => ({
    meta: [
      {
        title:
          "The Family Caregiver's Complete Handbook (Free PDF) | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "What to do, in what order, when someone you love starts needing help. A free, plain-language handbook for family caregivers: the first 72 hours, the conversations, the money, the legal basics, and the 2am pages. No email required.",
      },
      {
        property: "og:title",
        content: "The Family Caregiver's Complete Handbook, free",
      },
      {
        property: "og:description",
        content:
          "The guide Ragini wishes someone had handed her. Twelve plain-language sections for family caregivers. Free download, no email required.",
      },
    ],
  }),
  component: HandbookPage,
});

const SECTIONS = [
  {
    n: "1",
    title: "The First 72 Hours",
    blurb:
      "When something has just happened: stabilize, gather, and buy yourself time to make good decisions instead of fast ones.",
  },
  {
    n: "2",
    title: "The Master Information Organizer",
    blurb:
      "The scavenger hunt, done once, in advance, on your terms. Fill-in pages for the people, health, money, legal, life, and access details every crisis demands.",
  },
  {
    n: "3",
    title: "The Conversations",
    blurb:
      "Talking to your parent about accepting help, to your siblings before it gets ugly, and to doctors so you actually get somewhere.",
  },
  {
    n: "4",
    title: "Navigating the System",
    blurb:
      "The six universal rules for getting help out of systems that never mark the front door.",
  },
  {
    n: "5",
    title: "Making the Home Safe",
    blurb:
      "The room-by-room walkthrough that prevents the fall instead of responding to it.",
  },
  {
    n: "6",
    title: "Understanding the Kinds of Help",
    blurb:
      "A plain-language map of a confusing industry: six kinds of help, the housing spectrum, and the questions that separate good providers from good marketing.",
  },
  {
    n: "7",
    title: "Paying for Care",
    blurb:
      "The money conversation without the sales pitch: public programs, tax measures, benefits, insurance, family money, and the home, in that order.",
  },
  {
    n: "8",
    title: "The Legal Basics",
    blurb:
      "Five documents, in plain language, and the one unforgiving rule they share: early is everything.",
  },
  {
    n: "9",
    title: "When Memory Is the Worry",
    blurb:
      "Why chase a diagnosis, what experienced families know, and the safety layers in order of intrusiveness.",
  },
  {
    n: "10",
    title: "Taking Care of the Caregiver",
    blurb:
      "The chapter you are most likely to skip, about the person most likely to break. Warning signs and what actually helps.",
  },
  {
    n: "11",
    title: "The 2am Pages",
    blurb: "Short answers for the panicked hours. Save them for when you need them.",
  },
  {
    n: "12",
    title: "Quick Reference: Canada and Ontario",
    blurb:
      "Tear this page out and put it on the fridge. Every number that matters, in one place.",
  },
];

function HandbookPage() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Free download. No email required.
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
              The Family Caregiver's Complete Handbook
            </h1>
            <p className="mt-4 max-w-xl text-xl text-foreground/85 leading-relaxed">
              What to do, in what order, when someone you love starts needing
              help. Written the way a friend would explain it at the kitchen
              table: plainly, honestly, and without pretending anything is
              simpler than it is.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={HANDBOOK_PDF}
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground no-underline shadow-sm hover:opacity-90 transition-opacity"
              >
                Download the handbook (PDF) →
              </a>
            </div>
            <p className="mt-4 text-base text-muted-foreground">
              Print it. This is a fridge-and-kitchen-table document, not a
              someday-file.
            </p>
          </div>

          {/* Handbook "cover" card */}
          <div className="mx-auto w-full max-w-sm rounded-2xl border-2 border-gold/50 bg-background p-8 text-center shadow-sm">
            <div className="mx-auto h-1 w-16 bg-gold" aria-hidden />
            <p className="mt-6 font-serif text-2xl font-semibold leading-snug text-primary">
              THE FAMILY CAREGIVER'S COMPLETE HANDBOOK
            </p>
            <p className="mt-4 text-base italic text-muted-foreground leading-relaxed">
              What to do, in what order, when someone you love starts needing
              help
            </p>
            <div className="mx-auto mt-6 h-1 w-16 bg-gold" aria-hidden />
            <p className="mt-6 text-sm text-muted-foreground">
              From The Vetted Senior
              <br />
              thevettedsenior.com
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
          You probably did not download this on a calm day
        </h2>
        <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
          Most people find this handbook after a phone call, a fall, a
          diagnosis, or a visit home where something was suddenly, unmistakably
          different. So here is the deal it makes with you: no jargon, no
          lectures, and nothing included unless it earns its place.
        </p>
        <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
          You do not need to read it in order. Nobody reads it front to back;
          they arrive in the middle of the night looking for one page. Every
          section stands alone, and the introduction tells you exactly where to
          start based on where you are: crisis mode, planning ahead, or 2am.
        </p>
      </section>

      {/* ── WHAT'S INSIDE ────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            What's inside
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s) => (
              <li
                key={s.n}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/25 font-serif text-lg text-primary"
                >
                  {s.n}
                </span>
                <div>
                  <p className="font-serif text-lg text-primary leading-snug">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground/75 leading-relaxed">
                    {s.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SUBSCRIBE ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-3xl border-2 border-gold/50 bg-card p-8 md:p-10">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Want the weekly briefing with it?
          </h2>
          <p className="mt-3 text-lg text-foreground/85 leading-relaxed">
            One email from Ragini a week, on Thursday mornings: one thing worth
            knowing (a program, a deadline, a warning), one question from a
            reader answered properly, and news from the directory, including
            removals, because you deserve to see both directions. No daily
            emails, no countdown timers. If a week has nothing worth your time,
            we skip the week.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={SUBSCRIBE_MAILTO}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
            >
              Email me the briefing →
            </a>
            <p className="text-sm text-muted-foreground">
              Leaving is one click, no hard feelings.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORWARD IT ───────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Know someone carrying this load?
          </h2>
          <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
            A friend with aging parents, a sibling, the colleague who leaves
            early on Thursdays for her dad's appointments. Send them this page.
            This site grows by families telling families, which is the only
            growth engine we want.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            When you're ready for the next layer:{" "}
            <Link to="/situations" className="text-primary underline">
              the situation guides
            </Link>{" "}
            and{" "}
            <Link to="/about" className="text-primary underline">
              how we vet
            </Link>
            .
          </p>
        </div>
      </section>
    </Page>
  );
}
