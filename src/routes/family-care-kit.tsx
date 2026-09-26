import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { Page } from "@/components/SiteShell";
import {
  FAMILY_KIT_CHECKOUT_URL,
  FAMILY_KIT_CONTENTS,
  FAMILY_KIT_SAMPLE_PDF,
  STARTER_PACK_PDF,
} from "@/lib/family-offers";
import {
  breadcrumbJsonLd,
  jsonLdScript,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/jsonld";

export const Route = createFileRoute("/family-care-kit")({
  head: () => ({
    meta: [
      { title: "Family Care Planning Kit · C$29 | The Vetted Senior" },
      {
        name: "description",
        content:
          "A complete family care handbook, fillable hospital-to-home organiser and editable planning spreadsheet for Ontario families. Explore the C$29 kit and a free six-page sample.",
      },
      {
        property: "og:title",
        content: "The Family Care Planning Kit | The Vetted Senior",
      },
      {
        property: "og:description",
        content:
          "The handbook, the handover and the numbers. Practical files to help your family build a plan. C$29, one time.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/family-care/planning-kit-cover.png`,
      },
    ],
    // No purchasable Product/Offer markup until checkout and delivery are active.
    scripts: [
      jsonLdScript({
        "@type": "WebPage",
        "@id": `${SITE_URL}/family-care-kit#webpage`,
        url: `${SITE_URL}/family-care-kit`,
        name: "Family Care Planning Kit",
        inLanguage: "en-CA",
        isPartOf: { "@id": WEBSITE_ID },
      }),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Family Care Planning Kit", path: "/family-care-kit" },
        ]),
      ),
    ],
  }),
  component: FamilyCareKitPage,
});

function FamilyCareKitPage() {
  return (
    <Page>
      <section className="tvs-wrap tvs-offer-hero">
        <div>
          <div className="tvs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/ Family Care Planning Kit</span>
          </div>
          <p className="tvs-kicker">
            For the person keeping track of everything
          </p>
          <h1>
            Turn the next steps
            <br />
            into a <em>family plan.</em>
          </h1>
          <p className="tvs-offer-intro">The Family Care Planning Kit</p>
          <p>
            The handbook, the handover and the numbers, brought together in
            practical files your family can use. Built around the questions that
            come with helping an ageing parent in Ontario.
          </p>
          <p className="tvs-offer-price">
            C$29 <span>One-time purchase · Digital download</span>
          </p>
          <div className="tvs-actions">
            {FAMILY_KIT_CHECKOUT_URL && (
              <a href={FAMILY_KIT_CHECKOUT_URL} className="tvs-button">
                Get the planning kit <ArrowRight size={18} aria-hidden="true" />
              </a>
            )}
            <a
              href={FAMILY_KIT_SAMPLE_PDF}
              className={`tvs-button ${FAMILY_KIT_CHECKOUT_URL ? "secondary" : ""}`}
            >
              Preview 6 pages (PDF) <Download size={18} aria-hidden="true" />
            </a>
          </div>
          {!FAMILY_KIT_CHECKOUT_URL && (
            <p className="tvs-offer-note">
              Purchases are not open yet. Explore the sample, or{" "}
              <Link to="/starter-pack">get the free Starter Pack</Link> now.
            </p>
          )}
          <p className="tvs-offer-note">
            40 PDF pages + 4 editable worksheets + a getting-started guide.
          </p>
        </div>
        <figure className="tvs-offer-cover">
          <img
            src="/images/family-care/planning-kit-cover.png"
            alt="The Complete Family Care Handbook, included in the planning kit"
            width="850"
            height="1100"
            fetchPriority="high"
          />
          <figcaption>One kit. Three ways to make the plan easier.</figcaption>
        </figure>
      </section>
      <section className="tvs-wrap tvs-section">
        <div className="tvs-section-heading">
          <div>
            <p className="tvs-kicker">What you receive</p>
            <h2>Read it. Write it down. Work it out.</h2>
          </div>
        </div>
        <div className="tvs-kit-contents">
          {FAMILY_KIT_CONTENTS.map((item) => (
            <article key={item.number}>
              <span className="tvs-kicker">
                {item.number} / {item.format}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className="tvs-offer-note">
          The PDF and spreadsheet are separate working files. They do not sync.
          Save a private copy and choose one place for your main plan.
        </p>
      </section>
      <section className="tvs-offer-band">
        <div className="tvs-wrap">
          <div className="tvs-section-heading">
            <div>
              <p className="tvs-kicker">Choose the help you need</p>
              <h2>A useful start, or a fuller working plan.</h2>
            </div>
          </div>
          <div className="tvs-offer-options">
            <article>
              <p className="tvs-kicker">Free / No email required</p>
              <h3>Family Care Starter Pack</h3>
              <p>
                For getting started, preparing questions and comparing options.
                All ten standalone guides, a next-steps page and Ontario
                contacts in one printable PDF.
              </p>
              <a href={STARTER_PACK_PDF} download className="tvs-text-link">
                Download the free pack{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
            <article>
              <p className="tvs-kicker">C$29 / One time</p>
              <h3>Family Care Planning Kit</h3>
              <p>
                For the ongoing work of coordinating care. The revised handbook
                adds scripts, family meeting and backup plans, worked examples
                and record pages. The fillable organiser and spreadsheet help
                you track the handover, schedule and costs.
              </p>
              <a href={FAMILY_KIT_SAMPLE_PDF} className="tvs-text-link">
                See a real sample <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="tvs-wrap tvs-section tvs-prose tvs-kit-faq">
        <p className="tvs-kicker">Before you choose</p>
        <h2>A few useful details.</h2>
        <h3>Is this the same as the free pack?</h3>
        <p>
          No. The free pack gathers the individual practical guides. The paid
          kit combines the revised complete handbook with fillable planning
          pages and a spreadsheet. The website’s essential guidance, individual
          checklists and <Link to="/care-costs">care-cost worksheet</Link>{" "}
          remain free.
        </p>
        <h3>Can I use it on paper or on a computer?</h3>
        <p>
          Yes. The handbook is for reading and printing. The organiser has form
          fields for a PDF reader that supports saving entries. Save it first,
          type a short test, then save and reopen to check. The XLSX file is for
          a compatible spreadsheet app; check formatting and formulas after
          importing into another app.
        </p>
        <h3>Can I share it with my siblings?</h3>
        <p>
          You may share the kit within your family and with the people helping
          with this care plan. Please do not resell or publicly redistribute it.
          Keep completed copies private and leave health card numbers, passwords
          and banking details out of them.
        </p>
        <h3>Does it include personal advice or a care service?</h3>
        <p>
          It is a set of planning downloads. It does not include consultations,
          a care assessment, provider placement or a subscription. Use the care
          team’s instructions and ask the appropriate professional about
          individual health, legal or financial decisions.
        </p>
        <h3>What if I need help with the files?</h3>
        <p>
          <Link to="/contact">Contact us</Link> for file-access questions. Our{" "}
          <Link to="/disclosure">disclosure</Link> explains how paid tools
          support the site.
        </p>
      </section>
    </Page>
  );
}
