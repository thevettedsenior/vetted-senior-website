import { Link } from "@tanstack/react-router";
import { isListingPagePilot, type Business } from "@/lib/directory-data";

const TIER_LABEL: Record<Business["tier"], string> = {
  city: "Local",
  provincial: "Provincial",
  national: "National",
};

/**
 * Turn a printed phone string into tap-to-dial links. Printed strings are
 * honest transcriptions from official pages, so they carry extensions
 * ("905-453-4140 ext. 3720"), alternatives ("311 or 902-563-2276"), and
 * fallbacks ("3-1-1 (604-873-7000)"). Naive digit-stripping concatenates
 * all of it into an undialable number; a dead call button reads to a
 * family like the service no longer exists.
 */
export function telLinks(phone: string): { label: string; href: string }[] {
  return phone
    .split(/\s+or\s+|\s*\/\s*(?=\d)/i)
    .map((segment) => segment.trim())
    .filter(Boolean)
    .map((segment) => {
      // "3-1-1 (604-873-7000)": dial the parenthesized number, but only when
      // it is a complete number on its own. "1-800-BANTING (226-8464)" is
      // not: there the parens spell out the vanity letters, and stripping
      // letters from the whole segment already yields the full number.
      const paren = segment.match(/\((\d[\d\s().-]{6,})\)/);
      const parenDigits = paren ? paren[1].replace(/[^\d]/g, "") : "";
      // "ext. 3720", "x 3222", "poste 4", "option 1"
      const extMatch = segment.match(
        /(?:ext\.?|x|poste|option)\s*\.?\s*(\d+)/i,
      );
      let digits: string;
      if (extMatch) {
        digits = segment.slice(0, extMatch.index).replace(/[^+\d]/g, "");
      } else if (parenDigits.length >= 10) {
        digits = parenDigits;
      } else {
        digits = segment.replace(/[^+\d]/g, "");
      }
      // Extensions dial with two pauses so the menu has time to answer.
      const href = `tel:${digits}${extMatch ? `,,${extMatch[1]}` : ""}`;
      return { label: segment, href };
    })
    .filter((l) => /\d{3}/.test(l.href));
}

export function BusinessCard({ business }: { business: Business }) {
  const hasDetailPage = isListingPagePilot(business.id);
  const displayName = business.program ?? business.name;

  return (
    <article className="business-card min-w-0 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-[1_1_12rem]">
          <h3 className="font-serif text-xl font-semibold text-primary">
            {hasDetailPage ? (
              <Link
                to="/directory/$listingId"
                params={{ listingId: business.id }}
                className="text-primary underline decoration-gold/60 underline-offset-4"
              >
                {displayName}
              </Link>
            ) : (
              displayName
            )}
          </h3>
          {business.program && (
            <p className="mt-0.5 text-sm text-muted-foreground">
              Run by {business.runBy ?? business.name}
            </p>
          )}
        </div>
        <div className="ml-auto flex max-w-full flex-col items-end gap-1.5">
          {business.listingType === "public-service" ? (
            <span
              className="inline-flex max-w-full items-center gap-1 rounded-full border-2 border-primary/40 bg-secondary px-3 py-1 text-sm font-semibold text-primary"
              title={`A public or non-profit community service, verified by us on ${business.verifiedDate}. Not a privately vetted company.`}
            >
              <span aria-hidden>🏛</span> Public service
            </span>
          ) : (
            <span
              className="inline-flex max-w-full items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold text-primary"
              title={`Vetted since ${business.vettedSince}`}
            >
              <span aria-hidden>✓</span> Vetted {business.vettedSince}
            </span>
          )}
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-secondary px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary/80">
            {TIER_LABEL[business.tier]}
          </span>
        </div>
      </div>
      <p className="mt-3 text-base text-foreground/90">
        {business.description}
      </p>
      {business.listingType === "public-service" && (
        <p className="mt-2 text-sm text-muted-foreground">
          Record checked {business.verifiedDate}
          {business.intakeNote ? `. ${business.intakeNote}` : "."}
        </p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-base">
        {telLinks(business.phone).map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-center font-semibold text-primary-foreground no-underline hover:opacity-90 sm:w-auto"
          >
            <span>
              <span aria-hidden>📞 </span>Call {link.label}
            </span>
          </a>
        ))}
        {business.website && (
          <a
            href={business.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary/30 px-4 py-2 text-center font-semibold text-primary no-underline hover:bg-secondary sm:w-auto"
          >
            Visit website ↗
          </a>
        )}
      </div>
    </article>
  );
}
