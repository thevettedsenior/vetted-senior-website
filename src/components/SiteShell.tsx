import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";

// Shield + checkmark logo as an inline SVG
function ShieldLogo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 3L6 9.5V22C6 30.8 13.1 39 22 41C30.9 39 38 30.8 38 22V9.5L22 3Z"
        fill="var(--color-primary)"
      />
      <path
        d="M14 22l5.5 5.5 10-11"
        stroke="var(--color-primary-foreground)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-4 px-6 py-4 md:flex-wrap">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <ShieldLogo />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-semibold text-primary">
              The Vetted Senior
            </span>
            <span className="text-sm text-muted-foreground">
              Trusted guidance for seniors and families
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-base md:flex">
          <Link
            to="/"
            className="text-primary hover:underline"
            activeOptions={{ exact: true }}
            activeProps={{ className: "underline font-semibold" }}
          >
            Home
          </Link>
          <Link
            to="/situations"
            className="text-primary hover:underline"
            activeProps={{ className: "underline font-semibold" }}
          >
            Find Your Situation
          </Link>
          <Link
            to="/help"
            className="text-primary hover:underline"
            activeProps={{ className: "underline font-semibold" }}
          >
            Find Help
          </Link>
          <Link
            to="/about"
            className="text-primary hover:underline"
            activeProps={{ className: "underline font-semibold" }}
          >
            How We Vet
          </Link>
          <Link
            to="/handbook"
            className="text-primary hover:underline"
            activeProps={{ className: "underline font-semibold" }}
          >
            Free Handbook
          </Link>
          <Link
            to="/contact"
            className="rounded-full border-2 border-primary px-4 py-1.5 text-sm font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-primary md:hidden"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="w-full border-t border-border bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-base">
            <Link
              to="/"
              className="text-primary hover:underline"
              activeOptions={{ exact: true }}
              activeProps={{ className: "underline font-semibold" }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/situations"
              className="text-primary hover:underline"
              activeProps={{ className: "underline font-semibold" }}
              onClick={() => setMenuOpen(false)}
            >
              Find Your Situation
            </Link>
            <Link
              to="/help"
              className="text-primary hover:underline"
              activeProps={{ className: "underline font-semibold" }}
              onClick={() => setMenuOpen(false)}
            >
              Find Help
            </Link>
            <Link
              to="/about"
              className="text-primary hover:underline"
              activeProps={{ className: "underline font-semibold" }}
              onClick={() => setMenuOpen(false)}
            >
              How We Vet
            </Link>
            <Link
              to="/handbook"
              className="text-primary hover:underline"
              activeProps={{ className: "underline font-semibold" }}
              onClick={() => setMenuOpen(false)}
            >
              Free Handbook
            </Link>
            <Link
              to="/contact"
              className="text-primary hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12 text-base">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <svg
                width="32"
                height="32"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22 3L6 9.5V22C6 30.8 13.1 39 22 41C30.9 39 38 30.8 38 22V9.5L22 3Z"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M14 22l5.5 5.5 10-11"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-xl font-semibold">The Vetted Senior</span>
            </div>
            <p className="mt-3 max-w-sm text-sm opacity-80 leading-relaxed">
              Plain-language guidance for seniors, adult children, and caregivers.
              No jargon. No pressure. No paid placements.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wide opacity-60 mb-3">Navigate</p>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/situations" className="hover:underline">Find Your Situation</Link></li>
              <li><Link to="/help" className="hover:underline">Find Help</Link></li>
              <li><Link to="/handbook" className="hover:underline">Free Caregiver Handbook</Link></li>
              <li><Link to="/about" className="hover:underline">How We Vet</Link></li>
              <li><Link to="/founder" className="hover:underline">The Person Behind This Site</Link></li>
              <li><Link to="/disclosure" className="hover:underline">How This Site Makes Money</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wide opacity-60 mb-3">For Businesses</p>
            <p className="text-sm opacity-90 leading-relaxed">
              Want to be considered for the directory? We vet every provider
              personally. No cost, no catch.
            </p>
            <Link
              to="/get-vetted"
              className="mt-3 inline-block text-sm underline opacity-90 hover:opacity-100"
            >
              How to get vetted
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/20 pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} The Vetted Senior. Serving seniors and families.
          </p>
          <p className="text-sm opacity-60">
            Nobody pays to be recommended by us.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
