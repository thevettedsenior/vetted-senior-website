import { useEffect, useState } from "react";

const SIZES = [
  { px: 14, name: "Smallest text", cls: "text-xs" },
  { px: 16, name: "Small text", cls: "text-sm" },
  { px: 18, name: "Standard text", cls: "text-base" },
  { px: 20, name: "Large text", cls: "text-lg" },
  { px: 22, name: "Largest text", cls: "text-xl" },
] as const;

const STORAGE_KEY = "tvs-text-size-px";
// The original control stored an index into an 18/20/22 list under this key.
const LEGACY_KEY = "tvs-text-size";

/**
 * Site-wide text size control. The whole site is sized in rem, so bumping the
 * root font size scales everything. Choice persists in localStorage as a px
 * value; 18px is the default the stylesheet ships with.
 */
export function TextSizeControl() {
  const [px, setPx] = useState(18);

  useEffect(() => {
    let saved = Number(localStorage.getItem(STORAGE_KEY));
    if (!saved) {
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy !== null) {
        saved = [18, 20, 22][Number(legacy)] ?? 0;
        localStorage.removeItem(LEGACY_KEY);
        if (saved) localStorage.setItem(STORAGE_KEY, String(saved));
      }
    }
    if (SIZES.some((s) => s.px === saved)) {
      setPx(saved);
      document.documentElement.style.fontSize = `${saved}px`;
    }
  }, []);

  function apply(nextPx: number) {
    setPx(nextPx);
    document.documentElement.style.fontSize = `${nextPx}px`;
    localStorage.setItem(STORAGE_KEY, String(nextPx));
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">
        Text size
      </span>
      <div
        role="group"
        aria-label="Text size"
        className="flex overflow-hidden rounded-full border border-border bg-card"
      >
        {SIZES.map((size) => (
          <button
            key={size.px}
            type="button"
            aria-label={size.name}
            title={size.name}
            aria-pressed={px === size.px}
            onClick={() => apply(size.px)}
            className={`min-h-9 min-w-9 px-2.5 py-1 font-serif font-semibold leading-none transition-colors ${size.cls} ${
              px === size.px
                ? "bg-primary text-primary-foreground"
                : "text-primary hover:bg-secondary"
            }`}
          >
            A
          </button>
        ))}
      </div>
    </div>
  );
}
