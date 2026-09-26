import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { ARTICLES } from "@/lib/directory-data";
import {
  breadcrumbJsonLd,
  jsonLdScript,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/jsonld";

const groups = [
  {
    id: "home",
    number: "01",
    title: "Help at home & what it costs",
    intro:
      "Understand the support, compare the quotes and work out what your family can sustain.",
    slugs: [
      "home-care-costs-ontario",
      "homecare-care-types",
      "homecare-questions",
      "paying-for-care",
    ],
  },
  {
    id: "memory",
    number: "02",
    title: "Memory & changes in wellbeing",
    intro:
      "Prepare for a useful conversation and find the right people to ask.",
    slugs: [
      "getting-a-memory-assessment",
      "support-after-dementia-diagnosis",
      "managing-multiple-medications",
      "depression-in-later-life",
    ],
  },
  {
    id: "everyday",
    number: "03",
    title: "The everyday, made more manageable",
    intro: "Transport, meals, getting around and choosing a place to live.",
    slugs: [
      "getting-to-appointments",
      "meal-delivery-options",
      "independent-assisted-memory-care",
      "touring-retirement-residences",
    ],
  },
] as const;

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      {
        title:
          "Ontario Caregiver Guides: Home Care, Costs & Family Decisions | The Vetted Senior",
      },
      {
        name: "description",
        content:
          "Practical guides for adult children helping ageing parents in Ontario. Find answers about home care costs, memory concerns, transport and family decisions.",
      },
      { property: "og:title", content: "Family guides | The Vetted Senior" },
      {
        property: "og:description",
        content:
          "Useful answers to the questions that come with helping an ageing parent.",
      },
    ],
    scripts: [
      jsonLdScript({
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/guides#webpage`,
        url: `${SITE_URL}/guides`,
        name: "Ontario caregiver guides",
        inLanguage: "en-CA",
        isPartOf: { "@id": WEBSITE_ID },
      }),
      jsonLdScript(
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Family guides", path: "/guides" },
        ]),
      ),
    ],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <Page>
      <section className="tvs-wrap tvs-page-intro">
        <div className="tvs-breadcrumb">
          <Link to="/">Home</Link>
          <span>/ Family guides</span>
        </div>
        <p className="tvs-kicker">The family field guide</p>
        <h1>
          A useful answer.
          <br />A little less to carry.
        </h1>
        <p>
          For the questions that come with helping an ageing parent. Start with
          what you need today, and leave the rest for later.
        </p>
        <nav className="tvs-guide-topics" aria-label="Guide topics">
          {groups.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              {g.title}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </section>
      <div className="tvs-wrap">
        <div className="tvs-callout">
          <strong>Something has just changed?</strong>
          <p>
            Our{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "hospital-discharge-planning" }}
            >
              hospital-to-home guide
            </Link>
            ,{" "}
            <Link to="/situations/$slug" params={{ slug: "staying-at-home" }}>
              help-at-home plan
            </Link>{" "}
            and{" "}
            <Link to="/situations/$slug" params={{ slug: "dementia-concerns" }}>
              memory-concerns guide
            </Link>{" "}
            begin with a few clear next steps.
          </p>
        </div>
        {groups.map((group) => (
          <section
            id={group.id}
            key={group.id}
            className="tvs-section tvs-guide-cluster"
          >
            <div className="tvs-section-heading">
              <div>
                <p className="tvs-kicker">
                  {group.number} / Explore a question
                </p>
                <h2>{group.title}</h2>
              </div>
              <p>{group.intro}</p>
            </div>
            <ul className="tvs-guide-grid">
              {group.slugs.map((slug) => {
                const article = ARTICLES.find((a) => a.slug === slug)!;
                return (
                  <li key={slug}>
                    <Link
                      to="/help/$category/$article"
                      params={{ category: article.categorySlug, article: slug }}
                    >
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <span>
                        Read the guide{" "}
                        <ArrowRight size={17} aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        <section className="tvs-section tvs-guide-feature">
          <div>
            <p className="tvs-kicker">Keep it practical</p>
            <h2>Make room for the next step.</h2>
            <p>
              Use the free care-cost worksheet, save a short plan or print a
              checklist to take with you.
            </p>
          </div>
          <div className="tvs-actions">
            <Link className="tvs-button" to="/care-costs">
              Plan the costs <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="tvs-text-link" to="/resources">
              Free checklists & handbook →
            </Link>
            <Link className="tvs-text-link" to="/help">
              All topics →
            </Link>
          </div>
        </section>
      </div>
    </Page>
  );
}
