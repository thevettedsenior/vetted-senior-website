import type { ArticleContentMap } from "../articles/types";
import { MOBILITY_HOWTOS } from "./mobility";
import { FALLS_HOWTOS } from "./falls";
import { EVERYDAY_HOWTOS } from "./everyday";

// All how-to bodies, keyed by how-to slug. Same section shape as articles
// (heading + JSX body), merged the same way. Every slug here must have a
// matching entry in HOW_TOS (src/lib/howto-data.ts), which carries the
// metadata, steps, and FAQs.
export const HOWTO_CONTENT: ArticleContentMap = {
  ...MOBILITY_HOWTOS,
  ...FALLS_HOWTOS,
  ...EVERYDAY_HOWTOS,
};
