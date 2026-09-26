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
            Most websites bury this page. We link it in the footer of every page
            on the site, and we would honestly prefer you read it before you
            trust anything else we say.
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
            their way back in after being removed. Public resources, verified provider facts and deeper TVS vetting are distinct. A listing is not a blanket endorsement; the scope and evidence behind each label matter.
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
            vetting work takes real time. Here is how we fund it and keep our
            guidance independent.
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
            affiliate program, we recommend it anyway and earn nothing, and this
            happens regularly. If a company with a generous affiliate program
            fails our standards, it does not appear here, full stop.
          </p>
          <p>
            Every page that contains affiliate links says so at the top of the
            page, not hidden at the bottom. You will never have to guess.
          </p>

          <SectionHeading>2. Guidance on paying for care</SectionHeading>
          <p>
            Some guides discuss ways to pay for care, including public programs,
            tax credits, insurance, savings, family support and housing choices.
            Our aim is to help you understand the options, the questions to ask
            and the costs to consider before making a decision.
          </p>
          <p>
            This information is general education. It does not replace advice
            from a qualified professional who understands your family's
            circumstances. The planning tools help you organise the numbers you
            enter; they do not recommend a financial product or decide what is
            right for your family.
          </p>
          <p>
            Any commercial relationship must be disclosed clearly where it is
            relevant. It must not determine which options we explain, what we
            recommend or how providers are assessed. Reading a guide or using a
            planning tool does not sign you up for a sales call.
          </p>

          <SectionHeading>3. In the future: provider audit fees</SectionHeading>
          <p>
            As the directory grows, we expect to charge listed providers an
            annual fee that covers the cost of their verification and re-review,
            the way certification bodies in other industries do. If and when we
            introduce this, three things will remain true: paying the fee will
            never guarantee passing the audit, the fee will never affect ranking
            or presentation order, and failed audits will result in removal
            regardless of any fee paid. We are telling you about this before it
            exists because that is the kind of site this is.
          </p>

          <SectionHeading>What we do with your information</SectionHeading>
          <p>
            If you give us your email address, we use it to send you what you
            asked for and our newsletter, which you can leave with one click. We
            do not sell, rent, or trade your information. When we check
            references during provider vetting, we collect that information with
            consent and use it only for vetting decisions.
          </p>

          <SectionHeading>A closing thought</SectionHeading>
          <p>
            We named this page honestly because we are proud of the model, not
            embarrassed by it. The test of any recommendation service is simple:
            would they tell you the same thing if there were no money in it? On
            this site, the recommendations come first and the money is checked
            afterward, the directory cannot be bought, and commercial
            relationships are disclosed in plain language. If you ever find anything on this site that does not live
            up to this page,{" "}
            <Link to="/contact" className="text-primary underline">
              write to us
            </Link>
            . This page is the contract.
          </p>

          <p className="mt-8 border-t border-border pt-6 text-base text-muted-foreground">
            Last updated: September 25, 2026. We update this page whenever anything about
            how we earn money changes, and we date every change.
          </p>
        </div>
      </section>
    </Page>
  );
}
