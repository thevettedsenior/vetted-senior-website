export const STARTER_PACK_PDF = "/downloads/TVS-Family-Care-Starter-Pack.pdf";
export const FAMILY_KIT_SAMPLE_PDF =
  "/downloads/TVS-Family-Care-Planning-Kit-Sample.pdf";

// Set only after the CAD checkout and paid-file delivery have been tested.
// Keep the full kit in the fulfilment provider, never in public/.
export const FAMILY_KIT_CHECKOUT_URL: string | null = null;

export const FAMILY_KIT_CONTENTS = [
  {
    number: "01",
    title: "The Complete Family Care Handbook",
    format: "32-page printable PDF",
    description:
      "A revised Ontario guide with conversation scripts, a family meeting agenda, document locators, a care budget, a backup plan and worked examples.",
  },
  {
    number: "02",
    title: "The Hospital-to-Home Organiser",
    format: "8-page fillable PDF",
    description:
      "Keep the discharge handover, first 72 hours, two-week rota, calls, provider quotes and family updates together. Type on screen or print the pages you need.",
  },
  {
    number: "03",
    title: "The family planning spreadsheet",
    format: "4 editable worksheets · XLSX",
    description:
      "A family plan, dated visits, a call log and side-by-side quote calculations that include minimum visits and extra charges. Start with your own numbers.",
  },
];
