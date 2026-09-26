import { Link } from "@tanstack/react-router";

import { SignupForm } from "@/components/SignupForm";

import { STARTER_PACK_PDF } from "@/lib/family-offers";

/**
 * Dead-end converter for directory pages with no vetted listings yet.
 * Every not-yet-covered area is a launch notice with a specific promise,
 * not a disappointment.
 */
export function LaunchNotice({ place }: { place: string }) {
  return (
    <div className="rounded-2xl border-2 border-gold/50 bg-card p-8">
      <p className="font-serif text-2xl text-primary">
        No vetted providers in {place} yet, and we won't pretend otherwise.
      </p>
      <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
        Vetting takes six to nine hours per provider, and we publish nothing we
        haven't checked. On this site, an empty page is a promise being kept,
        not a gap being hidden. Leave your email and you'll hear the day vetted
        listings go live in {place}.
      </p>
      <div className="mt-5 max-w-xl">
        <SignupForm
          intent={`notify me: ${place}`}
          signupFor={`one email the day vetted listings go live in ${place}`}
          buttonLabel={`Tell me when ${place} is live →`}
          successMessage={`Done. The day vetted listings go live in ${place}, you'll hear it from us first.`}
        />
      </div>
      <div className="mt-4">
        <Link to="/starter-pack" className="text-base text-primary underline">
          Meanwhile, the free Family Care Starter Pack
        </Link>
      </div>
    </div>
  );
}

/** The main free offer. Downloading does not subscribe someone to emails. */
export function StarterPackCTA({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="rounded-2xl border-2 border-gold/50 bg-card p-6 md:p-8">
        <p className="font-serif text-2xl text-primary">
          Start with the free Family Care Starter Pack.
        </p>
        <p className="mt-2 text-lg text-foreground/80 leading-relaxed">
          Ten practical guides, a family next-steps page and Ontario help
          contacts, together in one PDF. No email required.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={STARTER_PACK_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
          >
            Download the free Starter Pack (PDF) →
          </a>
          <Link
            to="/starter-pack"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            What's inside
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border-2 border-gold/50 bg-card p-8 md:p-10">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="font-serif text-3xl text-primary leading-snug">
            A small beginning. A clearer next step.
          </p>
          <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
            The free Family Care Starter Pack brings all ten of our practical
            guides together, with a family next-steps page and Ontario contacts.
            Keep the pack, print what you need and begin with one question.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={STARTER_PACK_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
            >
              Download free (PDF) →
            </a>
            <Link
              to="/starter-pack"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-lg font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
            >
              See what's inside
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-secondary/60 p-6">
          <p className="font-semibold text-primary">Want the briefing too?</p>
          <p className="mt-2 text-base text-foreground/75 leading-relaxed">
            One short email from Ragini, most weeks: one thing worth knowing,
            one reader question answered, and directory news. If a week has
            nothing worth your time, we skip it. Leaving is one click, no hard
            feelings.
          </p>
          <div className="mt-4">
            <SignupForm
              compact
              intent="briefing"
              signupFor="the briefing, one short email most weeks"
              buttonLabel="Email me the briefing"
              successMessage="You're on the list. The next briefing is on its way soon."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
