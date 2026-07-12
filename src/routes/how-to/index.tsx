import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { SignupForm } from "@/components/SignupForm";
import { HOW_TOS, HOWTO_GROUPS } from "@/lib/howto-data";
import { howToListJsonLd, jsonLdScript } from "@/lib/jsonld";

export const Route = createFileRoute("/how-to/")({
  head: () => ({
    meta: [
      {
        title:
          "How-To Guides for Seniors: Canes, Walkers, Falls, and Everyday Safety | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "Step-by-step guides with diagrams: how to use a cane properly, get up after a fall, place grab bars, walk on ice, spot scams, and more. Plain language, Canadian, free.",
      },
    ],
    scripts: [jsonLdScript(howToListJsonLd(HOW_TOS))],
  }),
  component: HowToHubPage,
});

function HowToHubPage() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="navy-band border-b-4 border-gold text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
          <p className="text-xs text-primary-foreground/70 md:text-sm">
            <Link to="/" className="text-primary-foreground/70 hover:underline">
              Home
            </Link>
            <span aria-hidden> / </span>
            <span>How-To Guides</span>
          </p>
          <p className="eyebrow mt-6 !text-gold">Skills, not shopping</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-primary-foreground md:text-6xl">
            How-To Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
            Nobody teaches you how to use a cane, get up from a fall, or walk on
            January ice. So we wrote it down: short, step-by-step guides with
            diagrams, in plain language. Print them, read them aloud, practise
            them together.
          </p>
        </div>
      </section>

      {/* ── GUIDES BY GROUP ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        {HOWTO_GROUPS.map((group) => {
          const guides = HOW_TOS.filter((h) => h.group === group);
          if (guides.length === 0) return null;
          return (
            <div key={group} className="mt-10 first:mt-0">
              <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                {group}
              </h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {guides.map((howTo) => (
                  <li key={howTo.slug}>
                    <Link
                      to="/how-to/$slug"
                      params={{ slug: howTo.slug }}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-card no-underline transition-all hover:border-gold hover:shadow-sm"
                    >
                      <div
                        className="h-36 w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${howTo.image})` }}
                      />
                      <div className="flex flex-1 flex-col p-6">
                        <span className="font-serif text-xl text-primary">
                          {howTo.shortTitle}
                        </span>
                        <span className="mt-2 flex-1 text-base text-foreground/75">
                          {howTo.description}
                        </span>
                        <span className="mt-4 flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock size={16} aria-hidden />
                            {howTo.minutes} min
                          </span>
                          <span className="font-semibold text-gold">
                            Read the steps →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* ── WHY THESE EXIST ──────────────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Why we write these
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/85">
            Equipment gets prescribed, handed over, and never explained. Most
            cane users were never shown which side to hold it on. Half of
            seniors who fall cannot get up without help, yet almost nobody has
            practised the getting-up part. These guides fill that gap, and they
            pair with a professional's eye, not replace it: a physiotherapist or
            occupational therapist can check technique and fit for your exact
            body, often free through the public system.
          </p>
          <div className="mt-8 max-w-xl">
            <SignupForm
              compact
              intent="notify me: new how-to guides"
              signupFor="an email when we publish new how-to guides"
              buttonLabel="Tell me when new guides arrive"
              successMessage="Done. When a new how-to guide goes up, you'll hear it from us first."
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
