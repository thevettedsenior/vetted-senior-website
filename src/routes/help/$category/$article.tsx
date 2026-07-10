import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/SiteShell";
import { ArticleTools, ShortVersion } from "@/components/ArticleTools";
import { AffiliateDisclosure } from "@/components/Affiliate";
import { findArticle, findHelpCategory } from "@/lib/directory-data";
import { articleJsonLd, jsonLdScript } from "@/lib/jsonld";
import { ARTICLE_CONTENT } from "@/content/articles";
export const Route = createFileRoute("/help/$category/$article")({
  loader: ({ params }) => {
    const category = findHelpCategory(params.category);
    if (!category) throw notFound();
    const article = findArticle(params.category, params.article);
    if (!article) throw notFound();
    return { category, article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.article.title} | The Vetted Senior`
          : "Article",
      },
      {
        name: "description",
        content: loaderData ? loaderData.article.description : "",
      },
    ],
    scripts: loaderData
      ? [jsonLdScript(articleJsonLd(loaderData.article, loaderData.category))]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Article not found</h1>
        <Link to="/help" className="mt-4 inline-block text-primary underline">
          Back to Find Help
        </Link>
      </div>
    </Page>
  ),
});

function ArticlePage() {
  const { category, article } = Route.useLoaderData();
  const sections = ARTICLE_CONTENT[article.slug];

  return (
    <Page>
      {article.affiliate && <AffiliateDisclosure />}
      <section
        className="article-hero relative flex min-h-[300px] flex-col justify-end bg-cover bg-center md:min-h-[400px]"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-3 text-xs text-white/80 md:py-4 md:text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/help" className="hover:underline">Find Help</Link>
          <span aria-hidden> / </span>
          <Link to="/help/$category" params={{ category: category.slug }} className="hover:underline">
            {category.name}
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-6 md:pb-10">
          <h1 className="font-serif text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 leading-relaxed md:mt-4 md:text-xl">
            {article.description}
          </p>
        </div>
      </section>

      {sections && (
        <section className="mx-auto max-w-4xl px-6 py-10">
          <div className="space-y-8">
            <ArticleTools sourceId="article-content" kind="article" />
            <ShortVersion takeaways={article.takeaways} />
          </div>
          <div id="article-content" className="mt-12 space-y-12">
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
        </section>
      )}

      <section className="no-print border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Looking for a vetted provider?
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Browse vetted {category.name.toLowerCase()} providers in the directory.
          </p>
          <Link
            to="/help/$category"
            params={{ category: category.slug }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            Back to {category.name} →
          </Link>
        </div>
      </section>
    </Page>
  );
}
