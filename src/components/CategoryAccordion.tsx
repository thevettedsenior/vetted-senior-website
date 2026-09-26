import { BusinessCard } from "@/components/BusinessCard";
import type { Business } from "@/lib/directory-data";

/**
 * Collapsible category sections for long directory lists. All sections start
 * minimized (unless there is only one) so readers pick the category they need
 * instead of scrolling a massive list.
 */
export function CategoryAccordion({
  grouped,
  openAll = false,
}: {
  grouped: Record<string, Business[]>;
  /** Expand every section (e.g. active search: matches must be visible). */
  openAll?: boolean;
}) {
  const entries = Object.entries(grouped);
  return (
    <div className="space-y-4">
      <h2 className="sr-only">Services by category</h2>
      {entries.map(([cat, items]) => (
        <details
          key={cat}
          open={openAll || entries.length === 1}
          className="group rounded-2xl border border-border bg-card shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-4 hover:bg-gold/10 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
            <span className="min-w-0 font-serif text-xl text-primary sm:text-2xl">
              {cat}
            </span>
            <span className="flex shrink-0 items-center gap-3">
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary/80">
                {items.length}
                <span className="sr-only sm:not-sr-only">
                  {" "}
                  {items.length === 1 ? "listing" : "listings"}
                </span>
              </span>
              <span
                aria-hidden
                className="text-xl text-gold transition-transform group-open:rotate-90"
              >
                ▸
              </span>
            </span>
          </summary>
          <div className="grid min-w-0 gap-4 border-t border-border p-3 sm:gap-5 sm:p-5 lg:grid-cols-2">
            {items.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
