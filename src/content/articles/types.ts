import type { ReactNode } from "react";

// One rendered section of an article page: an h2 plus its body JSX.
export type ArticleSection = {
  heading: string;
  body: ReactNode;
};

// Keyed by article slug. Each category contributes one map; they are merged
// in ./index.ts. Adding an article = one entry in ARTICLES (directory-data.ts)
// plus one entry in the category's content module.
export type ArticleContentMap = Record<string, ArticleSection[]>;
