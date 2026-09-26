import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { STARTER_PACK_PDF } from "@/lib/family-offers";
import { RESOURCES } from "@/lib/resources";
import {
  breadcrumbJsonLd,
  jsonLdScript,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/jsonld";

export const Route = createFileRoute("/starter-pack")({
  head: () => ({
    meta: [
      {
        title:
          "Free Family Care Starter Pack for Ontario Families | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "Ten free caregiver guides in one 34-page PDF, plus a family next-steps page and Ontario help contacts. Download the Family Care Starter Pack with no email required.",
      },
      { property: "og:title", content: "The free Family Care Starter Pack" },
      {
        property: "og:description",
        content:
          "Ten practical guides. One calm place to begin. No email required.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/images/family-care/starter-pack-cover.png`,
      },
    ],
    scripts: [
      jsonLdScript({
        "@type": "WebPage",
        "@id": `${SITE_URL}/starter-pack#webpage`,
        url: `${SITE_URL}/starter-pack`,
        name: "Free Family Care Starter Pack",
        inLanguage: "en-CA",
        isPartOf: { "@id": WEBSITE_ID },
      }),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Family Care Starter Pack", path: "/starter-pack" },
        ]),
      ),
    ],
  }),
  component: StarterPackPage,
});

function StarterPackPage() {
  const guides = RESOURCES.filter((r) => r.group !== "Start here");
  return (
    <Page>
      <section className="tvs-wrap tvs-offer-hero">
        <div>
          <div className="tvs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/ Free Starter Pack</span>
          </div>
          <p className="tvs-kicker">A small beginning, on us</p>
          <h1>
            The Family Care
            <br />
            <em>Starter Pack.</em>
          </h1>
          <p className="tvs-offer-intro">
            You don’t have to figure everything out today. Start with one useful
            page.
          </p>
          <p>
            All ten of our practical guides in one download, with a family
            next-steps page and Ontario help contacts. For the conversations,
            calls and small decisions that come with helping an ageing parent in
            Ontario.
          </p>
          <div className="tvs-actions">
            <a href={STARTER_PACK_PDF} download className="tvs-button">
              Download the free pack <Download size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="tvs-offer-note">
            34-page PDF · Free · No email required
            <br />
            Print only the pages you need.
          </p>
        </div>
        <figure className="tvs-offer-cover">
          <img
            src="/images/family-care/starter-pack-cover.png"
            alt="The Family Care Starter Pack cover"
            width="850"
            height="1100"
            fetchPriority="high"
          />
          <figcaption>A place to start. Something to keep.</figcaption>
        </figure>
      </section>
      <section className="tvs-wrap tvs-section">
        <div className="tvs-section-heading">
          <div>
            <p className="tvs-kicker">Inside your free pack</p>
            <h2>Choose what helps today.</h2>
          </div>
          <p>
            The next-steps page helps you name the first action.
            <br />
            The contact sheet helps you find the right call.
          </p>
        </div>
        <ol className="tvs-pack-list">
          {guides.map((r, i) => (
            <li key={r.file}>
              <span className="tvs-kicker">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </div>
              <a href={r.file} aria-label={`Download ${r.title} PDF`}>
                <Download size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
        <p className="tvs-offer-note">
          Prefer separate files? Each guide is also available from{" "}
          <Link to="/resources">Checklists &amp; printables</Link>.
        </p>
      </section>
      <section className="tvs-offer-band">
        <div className="tvs-wrap tvs-guide-feature">
          <div>
            <p className="tvs-kicker">When you want a fuller plan</p>
            <h2>The next layer is there when you need it.</h2>
            <p>
              The Family Care Planning Kit adds the revised complete handbook, a
              fillable hospital-to-home organiser and a spreadsheet for
              schedules and cost comparisons. C$29, one time.
            </p>
            <p>
              The Starter Pack, website guides and online care-cost tool stay
              free.
            </p>
          </div>
          <Link to="/family-care-kit" className="tvs-button secondary">
            See the planning kit <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </Page>
  );
}
