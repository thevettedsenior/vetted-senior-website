import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, ArrowUpRight, Bookmark } from "lucide-react";
import { TextSizeControl } from "@/components/TextSizeControl";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { to: "/situations", label: "Start here" },
  { to: "/care-costs", label: "Care costs" },
  { to: "/local-help", label: "Local help" },
  { to: "/about", label: "Our approach" },
] as const;

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={`tvs-brand ${light ? "is-light" : ""}`}
      aria-label="The Vetted Senior — home"
    >
      <svg
        viewBox="0 0 40 46"
        width="35"
        height="41"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 40V18C6 9 12 4 20 4s14 5 14 14v22H6Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 24l6 6 12-15M20 4V0M1 40h38"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
      <span>
        <small>THE</small>
        <span>
          Vetted Senior<span className="brand-period">.</span>
        </span>
      </span>
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1120px)");
    const close = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);
  return (
    <>
      <div
        className="tvs-utility no-print"
        role="region"
        aria-label="About this site"
      >
        <div className="tvs-wrap">
          <span>For the people caring for their people.</span>
          <span>Ontario guidance · GTA local help</span>
        </div>
      </div>
      <header className="tvs-header no-print">
        <div className="tvs-wrap tvs-header-inner">
          <Brand />
          <nav className="tvs-desktop-nav" aria-label="Main navigation">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "active", "aria-current": "page" }}
                className="tvs-nav-link"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/my-plan"
            className="tvs-plan-link"
            aria-label="My next steps"
          >
            <Bookmark size={17} aria-hidden="true" />
            <span>My next steps</span>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="tvs-menu-button"
                aria-label="Open menu"
              >
                <Menu size={23} />
              </button>
            </SheetTrigger>
            <SheetContent className="tvs-mobile-sheet">
              <SheetTitle>Make a little room for clarity.</SheetTitle>
              <SheetDescription>
                Practical guidance for your family, one step at a time.
              </SheetDescription>
              <nav aria-label="Mobile navigation" className="tvs-mobile-nav">
                {[
                  { to: "/", label: "Home" },
                  ...nav,
                  { to: "/my-plan", label: "My next steps" },
                ].map((n) => (
                  <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                    {n.label}
                    <ArrowUpRight size={20} />
                  </Link>
                ))}
              </nav>
              <TextSizeControl />
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
export function SiteFooter() {
  return (
    <footer className="tvs-footer no-print">
      <div className="tvs-wrap">
        <div className="tvs-footer-top">
          <div>
            <Brand light />
            <p>
              A little clarity.
              <br />A next step you can take.
            </p>
          </div>
          <div className="tvs-footer-links">
            <div>
              <span className="tvs-kicker">Find your way</span>
              <Link to="/situations">Start with your situation</Link>
              <Link to="/care-costs">Plan the cost of care</Link>
              <Link to="/local-help">Find local help</Link>
              <Link to="/resources">Checklists & resources</Link>
            </div>
            <div>
              <span className="tvs-kicker">Get to know us</span>
              <Link to="/about">Our approach</Link>
              <Link to="/founder">Meet Ragini</Link>
              <Link to="/disclosure">Editorial & financial disclosure</Link>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
        <div className="tvs-footer-note">
          <p>
            Information to help you prepare and ask better questions. Decisions
            about health, eligibility and legal or financial matters belong with
            the appropriate professional.
          </p>
          <TextSizeControl />
        </div>
        <div className="tvs-footer-bottom">
          <span>© {new Date().getFullYear()} The Vetted Senior</span>
          <span>Ontario first. People always.</span>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="tvs-site">
      <a className="tvs-skip" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
