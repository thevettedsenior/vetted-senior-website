import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AMAZON_ASSOCIATE_TAG, amazonSearchUrl } from "@/lib/affiliates";

/**
 * The top-of-page banner promised on /disclosure: every page that contains
 * affiliate links says so at the top, not the bottom. Rendered by ArticlePage
 * whenever the article's `affiliate` flag is true.
 */
export function AffiliateDisclosure() {
  return (
    <div className="border-b border-gold/40 bg-secondary/60">
      <div className="mx-auto max-w-4xl px-6 py-3">
        <p className="text-sm text-foreground/80 leading-relaxed">
          <span className="font-semibold text-primary">
            {AMAZON_ASSOCIATE_TAG
              ? "This page contains affiliate links."
              : "About the product links on this page."}
          </span>{" "}
          {AMAZON_ASSOCIATE_TAG
            ? "If you buy through one, we may earn a commission. Commissions do not decide what we recommend."
            : "Amazon Canada links are currently ordinary product-search links. TVS does not earn an affiliate commission from them."}{" "}
          <Link to="/disclosure" className="text-primary underline">
            Read our disclosure
          </Link>
        </p>
      </div>
    </div>
  );
}

/**
 * An Amazon Canada product-search link. Uses a search URL rather than a
 * hardcoded product, so recommendations never point at a dead listing, and
 * OneLink (when configured) localizes the store for non-Canadian visitors.
 */
export function AmazonSearchLink({
  query,
  children,
}: {
  query: string;
  children: ReactNode;
}) {
  return (
    <a
      href={amazonSearchUrl(query)}
      target="_blank"
      rel={
        AMAZON_ASSOCIATE_TAG
          ? "sponsored noopener noreferrer"
          : "noopener noreferrer"
      }
      className="text-primary underline"
    >
      {children}
    </a>
  );
}
