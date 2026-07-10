import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { CATEGORY_GROUPS, HELP_CATEGORIES } from "@/lib/directory-data";
import { categoryIcon } from "@/lib/site-icons";
import { TextSizeControl } from "@/components/TextSizeControl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Shield + checkmark logo as an inline SVG
function ShieldLogo({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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
        d="M22 3L6 9.5V22C6 30.8 13.1 39 22 41C30.9 39 38 30.8 38 22V9.5L22 3Z"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
      />
      <path
        d="M14 22l5.5 5.5 10-11"
        stroke="var(--color-gold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Desktop "Find Help" dropdown. Categories are flat in routing; the two
// group headings here are visual only.
function FindHelpMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-base font-medium text-primary transition-colors hover:bg-secondary data-[state=open]:bg-secondary">
        Find Help
        <ChevronDown size={16} aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[600px] rounded-2xl p-5 shadow-[var(--shadow-card-hover)]">
        <DropdownMenuItem asChild>
          <Link
            to="/help"
            className="rounded-lg px-2 py-2.5 text-base font-semibold text-primary no-underline"
          >
            Browse all help topics
            <ChevronRight size={16} className="text-gold-deep" aria-hidden />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-2 gap-x-6">
          {CATEGORY_GROUPS.map((group) => (
            <div key={group}>
              <DropdownMenuLabel className="eyebrow mt-2 mb-1 !text-xs">
                {group}
              </DropdownMenuLabel>
              {HELP_CATEGORIES.filter((c) => c.group === group).map((c) => {
                const Icon = categoryIcon(c.slug);
                return (
                  <DropdownMenuItem key={c.slug} asChild>
                    <Link
                      to="/help/$category"
                      params={{ category: c.slug }}
                      className="min-h-10 rounded-lg px-2 py-2 text-[0.95rem] text-primary no-underline"
                    >
                      <Icon size={18} className="text-gold-deep" aria-hidden />
                      {c.name}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NAV_LINKS = [
  { to: "/situations", label: "Find Your Situation" },
  { to: "/directory", label: "Directory" },
  { to: "/about", label: "How We Vet" },
  { to: "/handbook", label: "Free Handbook" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 shadow-[0_1px_12px_oklch(0.25_0.07_265/0.06)] backdrop-blur">
      {/* Utility strip: trust line + text size control */}
      <div className="border-b border-border/60 bg-secondary/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-1.5">
          <p className="text-sm text-muted-foreground">
            Independent and Canadian. Nobody pays to be recommended here.
          </p>
          <div className="hidden md:block">
            <TextSizeControl />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-4 px-6 py-3.5 md:flex-wrap">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <ShieldLogo />
          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap font-serif text-lg font-semibold text-primary sm:text-xl md:text-2xl">
              The Vetted Senior
            </span>
            <span className="hidden text-sm text-muted-foreground sm:block">
              Trusted guidance for seniors and families
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.slice(0, 1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex min-h-11 items-center rounded-full px-4 py-2 text-base font-medium text-primary no-underline transition-colors hover:bg-secondary"
              activeProps={{ className: "bg-secondary font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
          <FindHelpMenu />
          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex min-h-11 items-center rounded-full px-4 py-2 text-base font-medium text-primary no-underline transition-colors hover:bg-secondary"
              activeProps={{ className: "bg-secondary font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 flex min-h-11 items-center rounded-full bg-primary px-5 py-2 text-base font-semibold text-primary-foreground no-underline shadow-sm transition-opacity hover:opacity-90"
          >
            Ask a Question
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-primary md:hidden"
        >
          {menuOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
        </button>
      </div>

      {menuOpen && (
        <nav className="w-full border-t border-border bg-card px-6 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/situations", label: "Find Your Situation" },
              { to: "/help", label: "Find Help by Topic" },
              { to: "/directory", label: "Directory" },
              { to: "/about", label: "How We Vet" },
              { to: "/handbook", label: "Free Handbook" },
              { to: "/contact", label: "Ask a Question" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex min-h-12 items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-lg font-medium text-primary no-underline transition-colors hover:border-gold"
                activeOptions={link.to === "/" ? { exact: true } : undefined}
                activeProps={{ className: "border-gold bg-gold/10 font-semibold" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <ChevronRight size={20} className="text-gold-deep" aria-hidden />
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-4">
              <TextSizeControl />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="navy-band mt-20 border-t-4 border-gold text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14 text-base">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22 3L6 9.5V22C6 30.8 13.1 39 22 41C30.9 39 38 30.8 38 22V9.5L22 3Z"
                  fill="white"
                  fillOpacity="0.12"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 22l5.5 5.5 10-11"
                  stroke="var(--color-gold)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-2xl font-semibold">The Vetted Senior</span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed opacity-85">
              Plain-language guidance for seniors, adult children, and caregivers.
              No jargon. No pressure. No paid placements.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-gold">Navigate</p>
            <ul className="space-y-1 opacity-95">
              {[
                { to: "/situations", label: "Find Your Situation" },
                { to: "/help", label: "Find Help" },
                { to: "/directory", label: "Directory" },
                { to: "/handbook", label: "Free Caregiver Handbook" },
                { to: "/resources", label: "Checklists & Printables" },
                { to: "/about", label: "How We Vet" },
                { to: "/founder", label: "The Person Behind This Site" },
                { to: "/disclosure", label: "How This Site Makes Money" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-9 items-center no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 !text-gold">For Businesses</p>
            <p className="leading-relaxed opacity-90">
              Want to be considered for the directory? We vet every provider
              personally. No cost, no catch.
            </p>
            <Link
              to="/get-vetted"
              className="mt-4 inline-flex min-h-11 items-center rounded-full border-2 border-gold/70 px-5 py-2 font-semibold text-primary-foreground no-underline transition-colors hover:bg-gold/15"
            >
              How to get vetted
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/20 pt-6">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} The Vetted Senior. Serving seniors and families.
          </p>
          <p className="text-sm font-medium text-gold">
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
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
