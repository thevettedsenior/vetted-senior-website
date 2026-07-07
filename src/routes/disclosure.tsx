import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      {
        title:
          "How This Site Makes Money, and How It Never Will | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "Every way The Vetted Senior earns money, every way it refuses to, and why. No business can pay to be in our directory. No advertising. Every conflict disclosed in plain language.",
      },
      {
        property: "og:title",
        content: "How this site makes money, and how it never will",
      },
    ],
  }),
  component: DisclosurePage,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-serif text-2xl font-semibold text-primary md:text-3xl">
      {children}
    </h2>
  );
}

function DisclosurePage() {
  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            Disclosure and transparency
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
            How this site makes money, and how it never will
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            Most websites bury this page. We link it in the footer of every
            page on the site, and we would honestly prefer you read it before
            you trust anything else we say.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-5 text-lg text-foreground/90 leading-relaxed">
          <p>
            Here is every way The Vetted Senior earns money, every way it
            refuses to, and why the structure is built the way it is.
          </p>
          <p className="font-serif text-xl text-primary">
            Start with the refusals, because they define us.
          </p>

          <SectionHeading>
            No business can pay to be in our directory. Ever.
          </SectionHeading>
          <p>
            There is no fee to be listed, no fee to be featured, no fee to
            appear higher in a category, and no fee to make a bad review
            disappear. Providers cannot buy their way in, and they cannot buy
            their way back in after being removed. Inclusion in our directory
            is earned by passing our vetting process and keeping standards up
            between reviews. That is the only currency accepted here.
          </p>
          <p>
            This matters because it is not how this industry usually works. The
            largest senior care referral services in North America are paid by
            the facilities and agencies they recommend, often a substantial
            percentage of the first month's fees. Many well-known "directories"
            are, by their own fine print, paid advertising. We built The Vetted
            Senior specifically as the opposite of that model. If we ever
            compromise this rule, we would deserve to lose your trust
            completely, and we would.
          </p>

          <SectionHeading>We do not run advertising.</SectionHeading>
          <p>
            No banner ads, no sponsored posts, no "presented by" content.
            Nothing on this site is here because someone paid for your
            attention.
          </p>

          <p className="pt-4 font-serif text-xl text-primary">
            Now, the honest part. This site does cost money to run, and the
            vetting work takes real time. Here is how we pay for it.
          </p>

          <SectionHeading>
            1. Affiliate commissions on some products and services
          </SectionHeading>
          <p>
            Some links on this site are affiliate links. If you click one and
            buy something, the company pays us a commission. It costs you
            nothing extra, and often nothing at all changes about your price.
          </p>
          <p>
            Here is our rule, and it is absolute: commissions never influence
            what we recommend, how we rank anything, or whether a provider
            passes vetting. We decide what to recommend first, based on our
            research and standards. Then, and only then, we check whether an
            affiliate program exists for it. If we recommend something with no
            affiliate program, we recommend it anyway and earn nothing, and
            this happens regularly. If a company with a generous affiliate
            program fails our standards, it does not appear here, full stop.
          </p>
          <p>
            Every page that contains affiliate links says so at the top of the
            page, not hidden at the bottom. You will never have to guess.
          </p>

          <SectionHeading>
            2. The founder is a licensed mortgage agent. Here is exactly what
            that means.
          </SectionHeading>
          <p>
            The Vetted Senior was founded by{" "}
            <Link to="/founder" className="text-primary underline">
              Ragini
            </Link>
            , who is a licensed mortgage agent in Ontario operating under BRX
            Mortgage Inc. (FSRA licence #13549). Some content on this site
            discusses paying for care, and home equity, including reverse
            mortgages, is genuinely one of the tools some families use. When
            Ragini arranges a mortgage for a client, she earns compensation
            through BRX Mortgage Inc., the way any licensed mortgage
            professional does.
          </p>
          <p>
            You should hold this site to a hard standard on that point, so here
            is the standard we hold ourselves to:
          </p>
          <ul className="list-none space-y-4 pl-0">
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>a.</strong> Wherever mortgage products appear on this
              site, they are presented as one option among several. Government
              programs, tax credits, insurance, family arrangements, and
              selling or downsizing are always presented alongside them, and we
              are direct about situations where a mortgage is the wrong choice.
              Home equity is a serious tool with real costs, and it deserves
              the same unsentimental scrutiny we apply to everything else.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>b.</strong> Mortgage content never affects the directory.
              Providers are not vetted differently, ranked differently, or
              treated differently based on anything related to the mortgage
              practice.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>c.</strong> This relationship is disclosed on every page
              where mortgage products are discussed, not only here.
            </li>
            <li className="rounded-xl border border-border bg-card p-5">
              <strong>d.</strong> Nobody at The Vetted Senior will ever contact
              you about a mortgage unless you ask. Reading our guides puts you
              on no list and triggers no sales call.
            </li>
          </ul>
          <p>
            We could have hidden this connection behind a numbered company and
            a different name. We disclosed it instead, prominently, because we
            think a business whose financial incentives are fully visible is
            more trustworthy than one that pretends to have none. Every
            business has to make money somehow. The only real question is
            whether they will tell you how. We just did.
          </p>

          <SectionHeading>3. In the future: provider audit fees</SectionHeading>
          <p>
            As the directory grows, we expect to charge listed providers an
            annual fee that covers the cost of their verification and
            re-review, the way certification bodies in other industries do. If
            and when we introduce this, three things will remain true: paying
            the fee will never guarantee passing the audit, the fee will never
            affect ranking or presentation order, and failed audits will result
            in removal regardless of any fee paid. We are telling you about
            this before it exists because that is the kind of site this is.
          </p>

          <SectionHeading>What we do with your information</SectionHeading>
          <p>
            If you give us your email address, we use it to send you what you
            asked for and our newsletter, which you can leave with one click.
            We do not sell, rent, or trade your information. When we check
            references during provider vetting, we collect that information
            with consent and use it only for vetting decisions.
          </p>

          <SectionHeading>A closing thought</SectionHeading>
          <p>
            We named this page honestly because we are proud of the model, not
            embarrassed by it. The test of any recommendation service is
            simple: would they tell you the same thing if there were no money
            in it? On this site, the recommendations come first and the money
            is checked afterward, the directory cannot be bought, and the
            founder's own business interests are printed in plain language
            where everyone can see them. If you ever find anything on this site
            that does not live up to this page,{" "}
            <Link to="/contact" className="text-primary underline">
              write to us
            </Link>
            . This page is the contract.
          </p>

          <p className="mt-8 border-t border-border pt-6 text-base text-muted-foreground">
            Last updated: July 2026. We update this page whenever anything
            about how we earn money changes, and we date every change.
          </p>
        </div>
      </section>
    </Page>
  );
}
