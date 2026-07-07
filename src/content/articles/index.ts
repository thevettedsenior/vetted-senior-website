import type { ArticleContentMap } from "./types";
import { HOME_CARE_ARTICLES } from "./home-care";
import { MEDICAL_ALERT_SAFETY_ARTICLES } from "./medical-alert-safety";
import { LEGAL_FINANCIAL_ARTICLES } from "./legal-financial";

export type { ArticleSection, ArticleContentMap } from "./types";

// All article bodies, keyed by article slug. One module per help category;
// add the new module's spread here when a category gets its first article.
export const ARTICLE_CONTENT: ArticleContentMap = {
  ...HOME_CARE_ARTICLES,
  ...MEDICAL_ALERT_SAFETY_ARTICLES,
  ...LEGAL_FINANCIAL_ARTICLES,
};
