import type { Business } from "@/lib/directory-data";

const TIER_LABEL: Record<Business["tier"], string> = {
  city: "Local",
  provincial: "Provincial",
  national: "National",
};

export function BusinessCard({ business }: { business: Business }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-semibold text-primary">
            {business.name}
          </h3>
          <span className="mt-1 inline-flex items-center rounded-full border border-primary/30 bg-secondary px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary/80">
            {TIER_LABEL[business.tier]}
          </span>
        </div>
        <span
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold text-primary"
          title={`Vetted since ${business.vettedSince}`}
        >
          <span aria-hidden>✓</span> Vetted {business.vettedSince}
        </span>
      </div>
      <p className="mt-3 text-base text-foreground/90">
        {business.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-base">
        <a
          href={`tel:${business.phone.replace(/[^+\d]/g, "")}`}
          className="font-semibold text-primary underline"
        >
          📞 {business.phone}
        </a>
        {business.website && (
          <a
            href={business.website}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            Visit website ↗
          </a>
        )}
      </div>
    </article>
  );
}
