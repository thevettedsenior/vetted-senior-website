import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ListChecks, Stethoscope } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { ArticleTools, ShortVersion } from "@/components/ArticleTools";
import { findHelpCategory } from "@/lib/directory-data";
import { findHowTo, HOW_TOS } from "@/lib/howto-data";
import {
  faqPageJsonLd,
  howToBreadcrumbJsonLd,
  howToJsonLd,
  jsonLdScript,
  SITE_URL,
} from "@/lib/jsonld";
import { HOWTO_CONTENT } from "@/content/howtos";

export const Route = createFileRoute("/how-to/$slug")({
  loader: ({ params }) => {
    const howTo = findHowTo(params.slug);
    if (!howTo) throw notFound();
    const category = findHelpCategory(howTo.categorySlug);
    return { howTo, category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.howTo.title} | The Vetted Senior` },
          { name: "description", content: loaderData.howTo.description },
          { property: "og:type", content: "article" },
          { property: "og:title", content: loaderData.howTo.title },
          {
            property: "og:description",
            content: loaderData.howTo.description,
          },
          {
            property: "og:url",
            content: `${SITE_URL}/how-to/${loaderData.howTo.slug}`,
          },
          {
            property: "og:image",
            content: `${SITE_URL}${loaderData.howTo.image}`,
          },
        ]
      : [{ title: "How-To Guide" }],
    scripts: loaderData
      ? [
          jsonLdScript(howToJsonLd(loaderData.howTo)),
          jsonLdScript(faqPageJsonLd(loaderData.howTo)),
          jsonLdScript(howToBreadcrumbJsonLd(loaderData.howTo)),
        ]
      : [],
  }),
  component: HowToPage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Guide not found</h1>
        <Link to="/how-to" className="mt-4 inline-block text-primary underline">
          Back to How-To Guides
        </Link>
      </div>
    </Page>
  ),
});

function HowToPage() {
  const { howTo, category } = Route.useLoaderData();
  const sections = HOWTO_CONTENT[howTo.slug];
  const related = howTo.related
    .map((slug) => HOW_TOS.find((h) => h.slug === slug))
    .filter((h) => h !== undefined);

  return (
    <Page>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="article-hero relative flex min-h-[300px] flex-col justify-end bg-cover bg-center md:min-h-[400px]"
        style={{ backgroundImage: `url(${howTo.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-3 text-xs text-white/80 md:py-4 md:text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span aria-hidden> / </span>
          <Link to="/how-to" className="hover:underline">
            How-To Guides
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-6 md:pb-10">
          <p className="eyebrow !text-gold">
            Step-by-step guide · {howTo.minutes} minute read
          </p>
          <h1 className="mt-2 font-serif text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
            {howTo.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 leading-relaxed md:mt-4 md:text-xl">
            {howTo.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="space-y-8">
          <ArticleTools sourceId="howto-content" kind="guide" />
          <ShortVersion takeaways={howTo.takeaways} />

          {/* Steps at a glance: mirrors the HowTo JSON-LD steps exactly */}
          <div className="rounded-2xl border-2 border-primary/15 bg-secondary/40 p-6 md:p-7">
            <p className="eyebrow flex items-center gap-2">
              <ListChecks size={18} className="text-gold-deep" aria-hidden />
              The steps at a glance
            </p>
            <ol className="mt-4 space-y-4">
              {howTo.steps.map((step, i) => (
                <li
                  key={step.name}
                  id={`step-${i + 1}`}
                  className="flex items-start gap-4"
                >
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground"
                  >
                    {i + 1}
                  </span>
                  <span className="text-lg leading-relaxed">
                    <strong className="text-primary">{step.name}.</strong>{" "}
                    <span className="text-foreground/85">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <p className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-base leading-relaxed text-muted-foreground">
            <Stethoscope
              size={22}
              className="mt-0.5 shrink-0 text-gold-deep"
              aria-hidden
            />
            <span>
              This guide is general information, not medical advice. Bodies and
              situations differ; a physiotherapist or occupational therapist can
              check technique and equipment for your exact needs, often at no
              cost through your doctor or Ontario Health atHome (310-2222).
            </span>
          </p>
        </div>

        {/* ── FULL GUIDE ───────────────────────────────────────────────────── */}
        {sections && (
          <div id="howto-content" className="mt-12 space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── FAQ: same text as the FAQPage JSON-LD ────────────────────────── */}
        <div className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Common questions
          </h2>
          <dl className="mt-6 space-y-8">
            {howTo.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-xl font-semibold text-primary">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-lg leading-relaxed text-foreground/85">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── RELATED + CATEGORY CTA ──────────────────────────────────────────── */}
      <section className="no-print border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {related.length > 0 && (
            <>
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Keep going: related how-tos
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/how-to/$slug"
                      params={{ slug: r.slug }}
                      className="flex h-full flex-col rounded-2xl border-2 border-border bg-card p-5 no-underline transition-all hover:border-gold hover:shadow-sm"
                    >
                      <span className="font-serif text-lg text-primary">
                        {r.shortTitle}
                      </span>
                      <span className="mt-2 flex-1 text-sm text-foreground/75">
                        {r.description}
                      </span>
                      <span className="mt-3 text-sm font-semibold text-gold">
                        Read the guide →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {category && (
            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                Want a professional to help with this?
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Browse {category.name.toLowerCase()} guides and vetted
                providers.
              </p>
              <Link
                to="/help/$category"
                params={{ category: category.slug }}
                className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-primary/5"
              >
                Go to {category.name} →
              </Link>
            </div>
          )}
        </div>
      </section>
    </Page>
  );
}
