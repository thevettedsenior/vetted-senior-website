import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { AMAZON_ASSOCIATE_TAG } from "@/lib/affiliates";
import {
  FAMILY_KIT_CHECKOUT_URL,
  FAMILY_KIT_CONTENTS,
} from "@/lib/family-offers";
import {
  breadcrumbJsonLd,
  jsonLdScript,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/jsonld";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      { title: "Disclosure & Transparency | The Vetted Senior" },
      {
        name: "description",
        content:
          "What is free, what the optional C$29 Family Care Planning Kit includes, and how The Vetted Senior handles commercial links, provider listings and your information.",
      },
      {
        property: "og:title",
        content: "Disclosure & transparency | The Vetted Senior",
      },
      {
        property: "og:description",
        content:
          "Free guidance, optional paid planning materials, and the standards behind our recommendations. Explained in plain language.",
      },
    ],
    scripts: [
      jsonLdScript({
        "@type": "WebPage",
        "@id": `${SITE_URL}/disclosure#webpage`,
        url: `${SITE_URL}/disclosure`,
        name: "Disclosure & transparency",
        inLanguage: "en-CA",
        isPartOf: { "@id": WEBSITE_ID },
      }),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Disclosure & transparency", path: "/disclosure" },
        ]),
      ),
    ],
  }),
  component: DisclosurePage,
});

function DisclosurePage() {
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <div className="tvs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/ Disclosure &amp; transparency</span>
          </div>
          <p className="tvs-kicker">Disclosure &amp; transparency</p>
          <h1>
            What’s free. What’s paid.
            <br />
            What you can expect.
          </h1>
          <p>
            The Vetted Senior helps Ontario families figure out what to do next
            when an ageing parent’s needs change. You deserve to know how we
            support this work, what a purchase buys, and what money cannot
            influence.
          </p>
        </div>

        <div className="tvs-page-layout">
          <article className="tvs-prose" aria-label="Our disclosure">
            <div className="tvs-callout">
              <strong>The essentials</strong>
              <p>
                The Starter Pack and website guidance are free. The optional
                Planning Kit is C$29, one time.
                {!FAMILY_KIT_CHECKOUT_URL &&
                  " Purchases are not open yet."}{" "}
                Providers cannot buy a recommendation, a higher position or a
                vetting result.
              </p>
            </div>

            <section aria-labelledby="free-guidance">
              <h2 id="free-guidance">
                01 / A useful place to begin, for free.
              </h2>
              <p>
                The <Link to="/starter-pack">Family Care Starter Pack</Link>{" "}
                combines ten practical guides, a family next-steps page and
                Ontario help contacts. No email address or purchase is needed to
                download it.
              </p>
              <p>
                Our website guides, individual checklists,{" "}
                <Link to="/care-costs">care-cost planner</Link>, saved
                next-steps list and <Link to="/local-help">Local Help</Link> are
                also free to use. Buying a kit is optional.
              </p>
            </section>

            <section aria-labelledby="paid-tools">
              <h2 id="paid-tools">02 / The optional C$29 Planning Kit.</h2>
              <p>
                The <Link to="/family-care-kit">Family Care Planning Kit</Link>{" "}
                brings the fuller reference guide and reusable planning
                materials together in one package:
              </p>
              <ul>
                {FAMILY_KIT_CONTENTS.map((item) => (
                  <li key={item.number}>
                    <strong>{item.title}</strong> — {item.format}.
                  </li>
                ))}
              </ul>
              <p>
                It is a one-time purchase of digital files, with no recurring
                subscription. It does not include a consultation, a care
                assessment, personalised professional advice or preferential
                access to a provider. These files help you organise your own
                conversations, schedules and decisions.
              </p>
              <p>
                {FAMILY_KIT_CHECKOUT_URL
                  ? "Purchases are open through the kit page. Review the checkout total and purchase terms before paying."
                  : "Purchases are not open yet. You can see the contents and download a free sample on the kit page. Checkout and automatic file delivery must be ready before we accept payment."}{" "}
                The free Starter Pack is available now.
              </p>
              <p>
                Sales of our own planning materials are intended to help fund
                the site. They do not determine what our free guidance says or
                which services appear in Local Help.
              </p>
            </section>

            <section aria-labelledby="independent-guidance">
              <h2 id="independent-guidance">
                03 / Recommendations cannot be bought.
              </h2>
              <p>
                There is no fee to be listed, featured or placed higher in Local
                Help. A provider cannot pay for a favourable assessment or to
                have a concern removed. We do not sell provider leads, run
                banner advertising or publish sponsored posts.
              </p>
              <p>
                Public and official resources, verified provider facts and
                deeper TVS vetting are different levels of information. A
                listing alone is not an endorsement. Any verification claim
                needs to say what was checked, when and against which evidence.
                Our <Link to="/about">approach to trust</Link> explains the
                distinctions.
              </p>
            </section>

            <section aria-labelledby="commercial-links">
              <h2 id="commercial-links">04 / Product links and commissions.</h2>
              <p>
                {AMAZON_ASSOCIATE_TAG
                  ? "Some product links on the site are Amazon affiliate links. If you make a qualifying purchase through one, we may earn a commission."
                  : "Some guides link to product searches on Amazon Canada. Those links currently have no affiliate tracking tag, so TVS does not earn an affiliate commission from them."}
              </p>
              <p>
                If we introduce a commission-bearing link, we will identify it
                clearly on the relevant page and explain the relationship.
                Commercial arrangements must not decide what we recommend or how
                we assess a provider. An ordinary source link does not imply a
                paid relationship.
              </p>
            </section>

            <section aria-labelledby="scope-of-guidance">
              <h2 id="scope-of-guidance">05 / What our guidance can do.</h2>
              <p>
                TVS is an independent information and planning resource, not a
                care provider or a government service. Our founder,{" "}
                <Link to="/founder">Ragini</Link>, brings personal caregiving
                experience and a background in compliance and regulatory
                programs. That does not make these guides a clinical assessment
                or individual medical, legal or financial advice.
              </p>
              <p>
                Guidance on paying for care explains options and questions to
                explore. The cost planner uses the numbers you enter; examples
                are labelled. It cannot decide eligibility for public care,
                guarantee available hours or recommend a financial product.
                Confirm services, prices and eligibility with the relevant
                organisation or professional.
              </p>
              <p>
                Source-check dates tell you when we reviewed source pages. They
                do not mean a clinician has reviewed the guidance. If something
                has changed, please tell us which page needs checking.
              </p>
            </section>

            <section aria-labelledby="your-information">
              <h2 id="your-information">
                06 / Your information stays your choice.
              </h2>
              <p>
                A free download does not subscribe you to a newsletter. Email
                updates require a separate signup, and you can unsubscribe.
                Reading a guide or using a planning tool does not sign you up
                for a sales call. We do not sell, rent or trade your information
                or pass it to a listed provider.
              </p>
              <p>
                Your saved next steps stay in this browser on this device. Cost
                figures join that plan only when you choose to save them.
                Downloaded PDFs and spreadsheets do not send your entries to TVS
                or sync between family members. Keep completed copies private,
                especially on a shared device.
              </p>
              <p>
                The <Link to="/privacy">privacy policy</Link> explains signup
                information, our email service, hosting and browser storage in
                more detail.
              </p>
            </section>

            <section aria-labelledby="questions-and-changes">
              <h2 id="questions-and-changes">
                07 / Questions, corrections and changes.
              </h2>
              <p>
                If a recommendation, commercial link or service description
                seems unclear, <Link to="/contact">contact us</Link>. Include
                the page so we can check it. We update this disclosure when our
                offers or commercial relationships change and show the date
                below.
              </p>
              <p className="tvs-offer-note">
                Last updated: September 27, 2026.
              </p>
            </section>
          </article>

          <aside
            className="tvs-aside"
            aria-label="Explore our resources and standards"
          >
            <p className="tvs-kicker">Start where it helps</p>
            <h2>A little clarity first.</h2>
            <p>
              You can use the free resources at your own pace. No purchase is
              needed to take your next step.
            </p>
            <Link to="/starter-pack" className="tvs-text-link">
              Get the free Starter Pack{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/family-care-kit" className="tvs-text-link">
              See the Planning Kit <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <hr />
            <p className="tvs-kicker">The details behind the guidance</p>
            <Link to="/about" className="tvs-text-link">
              Our approach to trust <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/privacy" className="tvs-text-link">
              Your privacy <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="tvs-text-link">
              Contact us <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </Page>
  );
}
