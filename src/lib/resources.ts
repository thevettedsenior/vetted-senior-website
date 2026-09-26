import { STARTER_PACK_PDF } from "@/lib/family-offers";

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
    file: STARTER_PACK_PDF,
    title: "The Family Care Starter Pack",
    description:
      "All ten practical guides in one PDF, plus a family next-steps page and Ontario help contacts. Start with the question in front of you.",
    group: "Start here",
    pages: "34-page free pack",
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
      "Describe the tasks that need support, then ask the care team which type of help fits. A starting point for a conversation.",
    group: "Home care",
    pages: "Care conversation guide",
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
      "Locate important documents, identify the right contacts and note questions for an Ontario lawyer or the care team.",
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
      "A practical home walkthrough, seasonal task lists and space to assign follow-up with the right professional.",
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
