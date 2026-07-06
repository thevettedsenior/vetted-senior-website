import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { HandbookCTA } from "@/components/HandbookCTA";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "The Person Behind The Vetted Senior | Ragini Domenichini" },
      {
        name: "description",
        content:
          "Ragini Domenichini spent twenty years running verification and compliance programs for Canada's largest banks. Now she applies that discipline to the businesses that care for our parents. This is her story, in her own words.",
      },
      {
        property: "og:title",
        content: "The person behind The Vetted Senior",
      },
      {
        property: "og:description",
        content:
          "After twenty years verifying banks, she started verifying the people who care for our parents.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://thevettedsenior.com/founder#ragini",
              name: "Ragini Domenichini",
              jobTitle: "Founder",
              worksFor: { "@id": "https://thevettedsenior.com/#org" },
              description:
                "Founder of The Vetted Senior. 20+ years in regulatory compliance and verification for CIBC, BMO, Scotiabank, and First Caribbean International Bank. Specialties: anti-money-laundering programs, know-your-client verification, enterprise risk assessment. Licensed Ontario mortgage agent (BRX Mortgage Inc., FSRA #13549).",
              knowsAbout: [
                "regulatory compliance",
                "anti-money-laundering",
                "know-your-client verification",
                "enterprise risk assessment",
                "senior care provider vetting",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://thevettedsenior.com/#org",
              name: "The Vetted Senior",
              url: "https://thevettedsenior.com",
              founder: { "@id": "https://thevettedsenior.com/founder#ragini" },
              description:
                "A directory of senior-care providers where nobody can pay to be listed. Every provider is verified against primary sources and re-reviewed on a schedule.",
              areaServed: "Greater Toronto Area, Ontario, Canada",
              slogan: "Nobody pays to be recommended by us.",
            },
          ],
        }),
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            The person behind The Vetted Senior
          </p>
          <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary md:text-4xl lg:text-[2.6rem]">
            I spent twenty years catching the things institutions hoped nobody
            would check. Now I do it for your family.
          </h1>
        </div>
      </section>

      {/* ── LETTER + PHOTO ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        {/*
          Photo placeholder. Replace with a real photograph of Ragini:
          warm and direct, not a corporate headshot against grey. The photo
          with her mother, if her mother consents, is the strongest option.
        */}
        <figure className="float-none mx-auto mb-10 w-full max-w-sm md:float-right md:ml-10 md:mb-6">
          <div
            className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gold/60 bg-secondary/50 p-6 text-center"
            role="img"
            aria-label="Placeholder for a photograph of Ragini Domenichini with her mother"
          >
            <span aria-hidden className="text-5xl">📷</span>
            <p className="font-serif text-lg text-primary">
              Photograph of Ragini
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A warm, direct photo goes here, ideally Ragini with her mother.
            </p>
          </div>
          <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
            With my mother, the reason this site exists.
          </figcaption>
        </figure>

        <div className="space-y-5 text-lg text-foreground/90 leading-relaxed">
          <p>
            My name is Ragini Domenichini. I built The Vetted Senior for one
            reason: when it was my turn to find help for my own mother, I could
            not find a single resource I actually trusted. Not one.
          </p>
          <p>
            Let me tell you what I mean by trust, because I do not use the word
            loosely.
          </p>
          <p>
            For more than twenty years, I worked inside Canada's largest banks.
            CIBC. BMO. Scotiabank. First Caribbean International Bank, across
            twelve countries. My specialty was the unglamorous work that keeps
            financial systems honest: anti-money-laundering programs,
            know-your-client verification, regulatory compliance, enterprise
            risk. My job, in plain language, was to design the systems that
            check whether people and businesses are who they say they are,
            whether the paperwork matches the reality, and whether anyone is
            quietly cutting corners. When a bank needed to figure out how to
            verify thousands of clients, flag suspicious activity, or prove to
            a regulator that its controls actually worked, that was my desk.
          </p>
          <p>
            You develop a particular habit of mind doing that work for two
            decades. You stop accepting claims. You ask for the document. You
            call the reference. You check the licence against the registry, not
            against the website. You learn that most organizations are honest,
            some are sloppy, and a few are counting on the fact that nobody
            ever verifies anything.
          </p>
          <p>
            Then my mother turned 80, and I became the person responsible for
            her wellbeing and her finances. She lives in a retirement home in
            Mississauga. I am the one who evaluates her care, questions the
            invoices, and makes the decisions when something changes. And when
            I went looking for the services every family eventually needs,
            home care, safety equipment, help with the house, honest guidance
            about paying for it all, I found an industry that runs almost
            entirely on unverified claims.
          </p>
          <p>
            Directories where "featured" means "paid us." Referral services
            that call themselves advisors but earn their money from the
            facilities they recommend, sometimes a full month's rent per
            placement. Review sites where nobody checks whether the reviewer,
            or the business, is real. Websites whose fine print admits the
            listings are advertising. I read that fine print. Most people never
            do, and the industry knows it.
          </p>
          <p>
            I found this genuinely unacceptable. Not disappointing.
            Unacceptable. These are our parents. This is the money they spent a
            lifetime earning. The people navigating these decisions are often
            exhausted, frightened, and doing it at eleven o'clock at night
            after work and dinner and a phone call that ended in tears. They
            deserve better than a lead-generation machine wearing a friendly
            face.
          </p>
          <p className="font-serif text-xl text-primary">
            So I built the thing I could not find.
          </p>
          <p>
            The Vetted Senior works on one rule: nobody can pay to be listed
            here. Not with money, not with favours, not with anything. Every
            provider in our directory has been through a verification process I
            designed the way I designed compliance programs for banks:
            documented, repeatable, and checked against primary sources. We
            verify licences with the regulators who issue them, not with the
            businesses that claim them. We check insurance certificates. We
            interview owners and ask the questions families do not know to
            ask. We call real clients. We re-review every listing on a
            schedule, because standards slip, and when they slip, we notice.
            When a provider stops meeting our standards, they come off the
            list, and we say so.
          </p>
          <p>
            Vetting reduces risk. It does not eliminate it, and I will never
            tell you otherwise. What I can tell you is exactly what we checked,
            when we checked it, and what we found, for every single listing. If
            you have ever wished someone with a compliance auditor's suspicion
            and a daughter's stake in the answer had already done the homework,
            that is what this site is.
          </p>
          <p>
            Two more things you should know about me, because you deserve to
            know how this site makes money and who is behind it.
          </p>
          <p>
            First, I am a licensed mortgage agent in Ontario, operating under
            BRX Mortgage Inc. Some of the guidance on this site touches on
            paying for care, and sometimes home equity is part of that
            conversation. When it is, I will always show you every option,
            government programs, tax credits, insurance, family arrangements,
            downsizing, alongside any mortgage product, and I will tell you
            plainly when a mortgage is the wrong tool. You can read exactly how
            this works, and how every dollar on this site is earned, on our{" "}
            <Link to="/disclosure" className="text-primary underline">
              disclosure page
            </Link>
            . I wrote it to be read, not skimmed.
          </p>
          <p>
            Second, I am still my mother's daughter first. Every guide on this
            site is written the way I would explain it to a friend sitting at
            my kitchen table: plainly, honestly, and without pretending
            anything is simpler than it is. When you read something here, you
            are reading what I would want someone to tell me.
          </p>
          <p>
            If you are at the beginning of this, overwhelmed and not sure what
            question to even ask, start with{" "}
            <Link to="/situations" className="text-primary underline">
              Find Your Situation
            </Link>
            . If you know what kind of help you need, start with{" "}
            <Link to="/help" className="text-primary underline">
              Find Help
            </Link>
            . And if you ever find something on this site that does not meet
            the standard I have described,{" "}
            <Link to="/contact" className="text-primary underline">
              tell me
            </Link>
            . I mean that. The whole point of this place is that someone is
            actually checking.
          </p>
          <div className="pt-2">
            <p className="font-serif text-xl text-primary">
              Ragini Domenichini
            </p>
            <p className="text-base text-muted-foreground">
              Founder, The Vetted Senior
              <br />
              Toronto, Ontario
            </p>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS, styled quietly ──────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Credentials
          </p>
          <p className="mt-3 text-base text-foreground/80 leading-relaxed">
            20+ years in regulatory compliance and verification for CIBC, BMO,
            Scotiabank, and First Caribbean International Bank. Specialties:
            anti-money-laundering programs, know-your-client verification,
            enterprise risk assessment. Licensed Ontario mortgage agent (BRX
            Mortgage Inc., FSRA #13549). Primary caregiver and decision-maker
            for her 80-year-old mother.
          </p>
        </div>
      </section>

      {/* ── HOW THE CHECKING WORKS ───────────────────────────────────────── */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Want to see the checking itself?
          </h2>
          <p className="mt-3 text-lg text-foreground/85 leading-relaxed">
            The vetting process is published in full: what we verify, how we
            score it, and what gets a provider removed.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity"
            >
              How we vet →
            </Link>
            <Link
              to="/disclosure"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
            >
              How this site makes money
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <HandbookCTA compact />
      </section>
    </Page>
  );
}
