import { BusinessCard } from "@/components/BusinessCard";
import type { Business } from "@/lib/directory-data";

/**
 * Collapsible category sections for long directory lists. All sections start
 * minimized (unless there is only one) so readers pick the category they need
 * instead of scrolling a massive list.
 */
export function CategoryAccordion({
  grouped,
}: {
  grouped: Record<string, Business[]>;
}) {
  const entries = Object.entries(grouped);
  return (
    <div className="space-y-4">
      {entries.map(([cat, items]) => (
        <details
          key={cat}
          open={entries.length === 1}
          className="group rounded-2xl border border-border bg-card shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-6 py-5 hover:bg-gold/10 [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-2xl text-primary">{cat}</span>
            <span className="flex shrink-0 items-center gap-3">
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary/80">
                {items.length} {items.length === 1 ? "listing" : "listings"}
              </span>
              <span
                aria-hidden
                className="text-xl text-gold transition-transform group-open:rotate-90"
              >
                ▸
              </span>
            </span>
          </summary>
          <div className="grid gap-5 border-t border-border px-6 pb-6 pt-5 md:grid-cols-2">
            {items.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
