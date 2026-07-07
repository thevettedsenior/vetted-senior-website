// ─── DOWNLOADABLE RESOURCES ─────────────────────────────────────────────────
// Everything printable the site offers, in one place. The /resources page
// renders this array grouped by `group`; adding a PDF here makes it live
// with no other code changes.

export type Resource = {
  file: string; // path under /public
  title: string;
  description: string;
  group: string; // display grouping on /resources
  pages: string; // honest length so people know what they're printing
};

export const RESOURCE_GROUPS: string[] = [
  "Start here",
  "Home care",
  "Retirement residences",
  "Medical alert & safety",
  "Legal & financial",
  "Funeral & estate planning",
  "Home maintenance",
  "Safety & protection",
];

export const RESOURCES: Resource[] = [
  {
    file: "/handbook/TVS_Family_Caregivers_Complete_Handbook.pdf",
    title: "The Family Caregiver's Complete Handbook",
    description:
      "What to do, in what order, when someone you love starts needing help. Twelve plain-language sections, from the first 72 hours to the 2am pages.",
    group: "Start here",
    pages: "Full handbook",
  },
  {
    file: "/checklists/TVS_HC1_SupportTasksPlanner.pdf",
    title: "Support Tasks Planner",
    description:
      "Write down exactly what help is needed before you call anyone. Specific requests get specific answers.",
    group: "Home care",
    pages: "Fill-in worksheet",
  },
  {
    file: "/checklists/TVS_HC2_QuestionsForProviders.pdf",
    title: "Questions for Home Care Providers",
    description:
      "The full question set to bring to every agency call: licensing, worker screening, pricing, backup coverage, references.",
    group: "Home care",
    pages: "Printable question set",
  },
  {
    file: "/checklists/TVS_HC3_ProviderComparison.pdf",
    title: "Home Care Provider Comparison",
    description:
      "Compare up to three providers side by side, on the answers that matter rather than the brochures.",
    group: "Home care",
    pages: "Comparison grid",
  },
  {
    file: "/checklists/TVS_CareTypeGrid.pdf",
    title: "Care Type Grid",
    description:
      "Personal support, nursing, or companion care? Check off what is actually needed and see which type fits.",
    group: "Home care",
    pages: "Self-assessment grid",
  },
  {
    file: "/checklists/TVS_RR1_ResidenceTourChecklist.pdf",
    title: "Residence Tour Checklist",
    description:
      "What to ask and what to watch for when touring retirement residences, plus a grid to compare your top three.",
    group: "Retirement residences",
    pages: "Tour checklist + comparison",
  },
  {
    file: "/checklists/TVS_MA1_MedicalAlertComparison.pdf",
    title: "Medical Alert Comparison",
    description:
      "The ten questions to ask every medical alert provider, with columns to compare three before signing anything.",
    group: "Medical alert & safety",
    pages: "Comparison worksheet",
  },
  {
    file: "/checklists/TVS_LF1_LegalDocumentsChecklist.pdf",
    title: "Legal Documents Checklist",
    description:
      "The five documents every family needs, and whether yours are actually usable: found, current, and known to the right people.",
    group: "Legal & financial",
    pages: "Readiness checklist",
  },
  {
    file: "/checklists/TVS_FP1_FuneralPrePlanWorksheet.pdf",
    title: "Funeral Pre-Planning Worksheet",
    description:
      "Record wishes calmly and early, and compare funeral homes on the questions that protect the family later.",
    group: "Funeral & estate planning",
    pages: "Wishes + provider worksheet",
  },
  {
    file: "/checklists/TVS_HM1_SeasonalHomeSafety.pdf",
    title: "Seasonal Home Safety Checklist",
    description:
      "The twice-a-year walkthrough that keeps a senior's home safe, plus the fall and spring task lists and a handyperson sheet.",
    group: "Home maintenance",
    pages: "Seasonal walkthrough",
  },
  {
    file: "/checklists/TVS_ElderAbuse_WarningSigns_Checklist.pdf",
    title: "Elder Abuse Warning Signs",
    description:
      "The signs of physical, emotional, and financial abuse, and exactly who to call in Ontario when something feels wrong.",
    group: "Safety & protection",
    pages: "Warning signs checklist",
  },
];

export function resourcesByGroup(): [string, Resource[]][] {
  return RESOURCE_GROUPS.map(
    (g) => [g, RESOURCES.filter((r) => r.group === g)] as [string, Resource[]],
  ).filter(([, list]) => list.length > 0);
}
