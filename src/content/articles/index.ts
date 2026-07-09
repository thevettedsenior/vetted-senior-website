import type { ArticleContentMap } from "./types";
import { HOME_CARE_ARTICLES } from "./home-care";
import { MEDICAL_ALERT_SAFETY_ARTICLES } from "./medical-alert-safety";
import { MOBILITY_EQUIPMENT_ARTICLES } from "./mobility-equipment";
import { RETIREMENT_RESIDENCES_ARTICLES } from "./retirement-residences";
import { LEGAL_FINANCIAL_ARTICLES } from "./legal-financial";
import { TRANSPORTATION_ARTICLES } from "./transportation";
import { HEARING_VISION_ARTICLES } from "./hearing-vision";
import { FUNERAL_ESTATE_PLANNING_ARTICLES } from "./funeral-estate-planning";
import { HOME_MAINTENANCE_ARTICLES } from "./home-maintenance";
import { COMPANION_SOCIAL_ARTICLES } from "./companion-social";
import { DOCTORS_PHARMACY_MEDICATION_ARTICLES } from "./doctors-pharmacy-medication";
import { DEMENTIA_MEMORY_SUPPORT_ARTICLES } from "./dementia-memory-support";

export type { ArticleSection, ArticleContentMap } from "./types";

// All article bodies, keyed by article slug. One module per help category;
// add the new module's spread here when a category gets its first article.
export const ARTICLE_CONTENT: ArticleContentMap = {
  ...HOME_CARE_ARTICLES,
  ...MEDICAL_ALERT_SAFETY_ARTICLES,
  ...MOBILITY_EQUIPMENT_ARTICLES,
  ...RETIREMENT_RESIDENCES_ARTICLES,
  ...LEGAL_FINANCIAL_ARTICLES,
  ...TRANSPORTATION_ARTICLES,
  ...HEARING_VISION_ARTICLES,
  ...FUNERAL_ESTATE_PLANNING_ARTICLES,
  ...HOME_MAINTENANCE_ARTICLES,
  ...COMPANION_SOCIAL_ARTICLES,
  ...DOCTORS_PHARMACY_MEDICATION_ARTICLES,
  ...DEMENTIA_MEMORY_SUPPORT_ARTICLES,
};
