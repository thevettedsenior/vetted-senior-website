import type { Article, Business, HelpCategory } from "@/lib/directory-data";
import type { HowTo } from "@/lib/howto-data";

// Structured data (schema.org JSON-LD) helpers. Write the pattern once,
// reuse everywhere. Each helper returns a plain object; jsonLdScript()
// wraps it in the script descriptor that TanStack Start's head() expects,
// the same way /founder ships its Person + Organization graph.
//
// Where the pattern is applied:
// - Article schema: src/routes/help/$category/$article.tsx (every article).
// - LocalBusiness schema: src/routes/directory.tsx emits one node per
//   listed business, so structured data goes live automatically the day
//   BUSINESSES stops being empty. When a per-business detail page exists,
//   move the LocalBusiness node there and keep an ItemList here.
// - Organization/Person: already hand-written in src/routes/founder.tsx;
//   every node here links back to the same ORG_ID so search engines see
//   one publisher entity.

export const SITE_URL = "https://thevettedsenior.com";
export const ORG_ID = `${SITE_URL}/#org`;

/** Wraps a schema.org object for TanStack Start's head({ scripts }). */
export function jsonLdScript(data: object) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({ "@context": "https://schema.org", ...data }),
  };
}

/**
 * Article schema for help articles. datePublished/dateModified are only
 * emitted if the data layer ever grows date fields; publishing fake dates
 * is worse than publishing none.
 */
export function articleJsonLd(article: Article, category: HelpCategory) {
  const url = `${SITE_URL}/help/${category.slug}/${article.slug}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    url,
    inLanguage: "en-CA",
    articleSection: category.name,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/**
 * HowTo schema for step-by-step guides. Steps come from the data layer
 * (howto-data.ts), so the structured data always matches the on-page
 * "The steps at a glance" list. Used on /how-to/$slug.
 */
export function howToJsonLd(howTo: HowTo) {
  const url = `${SITE_URL}/how-to/${howTo.slug}`;
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: howTo.title,
    description: howTo.description,
    image: `${SITE_URL}${howTo.image}`,
    inLanguage: "en-CA",
    totalTime: `PT${howTo.minutes}M`,
    step: howTo.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${url}#step-${i + 1}`,
    })),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/**
 * FAQPage schema. Questions and answers are the same text rendered in the
 * on-page FAQ section; search engines reject FAQ markup that isn't visible.
 */
export function faqPageJsonLd(howTo: HowTo) {
  const url = `${SITE_URL}/how-to/${howTo.slug}`;
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: "en-CA",
    mainEntity: howTo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** BreadcrumbList for how-to pages: Home / How-To Guides / this guide. */
export function howToBreadcrumbJsonLd(howTo: HowTo) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "How-To Guides",
        item: `${SITE_URL}/how-to`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: howTo.shortTitle,
        item: `${SITE_URL}/how-to/${howTo.slug}`,
      },
    ],
  };
}

/** ItemList of every how-to, for the /how-to hub page head. */
export function howToListJsonLd(howTos: HowTo[]) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/how-to#list`,
    name: "Step-by-step how-to guides for seniors and caregivers",
    numberOfItems: howTos.length,
    itemListElement: howTos.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: h.title,
      url: `${SITE_URL}/how-to/${h.slug}`,
    })),
  };
}

/**
 * LocalBusiness node for a vetted directory listing. areaServed reflects
 * the row's actual coverage tier: cities for city-tier rows, provinces
 * otherwise (matching the contact-point tiering rule in the data layer).
 */
export function localBusinessJsonLd(business: Business) {
  const areaServed =
    business.tier === "city"
      ? business.cities.map((city) => ({ "@type": "City", name: city }))
      : business.provinces.map((code) => ({
          "@type": "AdministrativeArea",
          name: code === "all" ? "Canada" : code,
        }));
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/directory#${business.id}`,
    name: business.name,
    description: business.description,
    telephone: business.phone,
    ...(business.website ? { url: business.website } : {}),
    areaServed,
    // Ties the listing to the site itself, not the business's own pages:
    // the claim being made is "The Vetted Senior lists this business".
    subjectOf: { "@type": "WebPage", "@id": `${SITE_URL}/directory` },
  };
}

/** ItemList of every vetted business, for the /directory route head. */
export function directoryJsonLd(businesses: Business[]) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/directory#list`,
    name: "The Vetted Senior directory of vetted providers",
    numberOfItems: businesses.length,
    itemListElement: businesses.map((business, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: localBusinessJsonLd(business),
    })),
  };
}
