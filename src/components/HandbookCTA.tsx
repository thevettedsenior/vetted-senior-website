import { Link } from "@tanstack/react-router";

export const HANDBOOK_PDF = "/handbook/TVS_Family_Caregivers_Complete_Handbook.pdf";

// Subscribe is mailto-based until an email service provider is connected.
// Swap the href for a form action when the ESP is live.
export const SUBSCRIBE_MAILTO =
  "mailto:info@thevettedsenior.com?subject=Send%20me%20the%20handbook%20and%20the%20weekly%20briefing&body=Hi%20Ragini%2C%0A%0APlease%20add%20me%20to%20the%20weekly%20briefing.%0A%0AMy%20situation%2C%20if%20you%20want%20to%20tell%20me%20(optional)%3A%20";

/**
 * The site-wide email capture / handbook block. Used at the end of the founder
 * page, on guides, and on the homepage. The handbook download is free and
 * ungated; the subscribe ask sits beside it, never in front of it.
 */
export function HandbookCTA({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="rounded-2xl border-2 border-gold/50 bg-card p-6 md:p-8">
        <p className="font-serif text-2xl text-primary">
          Get the Family Caregiver's Complete Handbook, free.
        </p>
        <p className="mt-2 text-lg text-foreground/80 leading-relaxed">
          It is the guide I wish someone had handed me. No email required.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={HANDBOOK_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
          >
            Download the handbook (PDF) →
          </a>
          <Link
            to="/handbook"
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
            The Family Caregiver's Complete Handbook
          </p>
          <p className="mt-3 text-lg text-foreground/80 leading-relaxed">
            What to do, in what order, when someone you love starts needing
            help. Twelve plain-language sections, from the first 72 hours to
            the 2am pages. Free, and no email address required.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={HANDBOOK_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-lg font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
            >
              Download free (PDF) →
            </a>
            <Link
              to="/handbook"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-lg font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
            >
              See what's inside
            </Link>
          </div>
        </div>
        <div className="rounded-2xl bg-secondary/60 p-6">
          <p className="font-semibold text-primary">
            Want the weekly briefing too?
          </p>
          <p className="mt-2 text-base text-foreground/75 leading-relaxed">
            One short email from Ragini on Thursdays: one thing worth knowing,
            one reader question answered, and directory news. Leaving is one
            click, no hard feelings.
          </p>
          <a
            href={SUBSCRIBE_MAILTO}
            className="mt-4 inline-block rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            Email me the briefing
          </a>
        </div>
      </div>
    </div>
  );
}
