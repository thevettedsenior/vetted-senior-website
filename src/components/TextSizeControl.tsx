import { useEffect, useState } from "react";

const SIZES = [
  { label: "A", px: 18, name: "Standard text" },
  { label: "A+", px: 20, name: "Large text" },
  { label: "A++", px: 22, name: "Largest text" },
] as const;

const STORAGE_KEY = "tvs-text-size";

/**
 * Site-wide text size control. The whole site is sized in rem, so bumping the
 * root font size scales everything. Choice persists in localStorage.
 */
export function TextSizeControl() {
  const [sizeIndex, setSizeIndex] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    if (saved >= 0 && saved < SIZES.length) {
      setSizeIndex(saved);
      document.documentElement.style.fontSize = `${SIZES[saved].px}px`;
    }
  }, []);

  function apply(index: number) {
    setSizeIndex(index);
    document.documentElement.style.fontSize = `${SIZES[index].px}px`;
    localStorage.setItem(STORAGE_KEY, String(index));
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
        {SIZES.map((size, i) => (
          <button
            key={size.label}
            type="button"
            aria-label={size.name}
            aria-pressed={sizeIndex === i}
            onClick={() => apply(i)}
            className={`min-w-11 px-3 py-1.5 font-serif font-semibold leading-none transition-colors ${
              i === 0 ? "text-sm" : i === 1 ? "text-base" : "text-lg"
            } ${
              sizeIndex === i
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
