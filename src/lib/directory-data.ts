// ─── SITUATIONS ────────────────────────────────────────────────────────────────
// "Find Your Situation" — life events and emotional states.
// User does NOT yet know what kind of help they need.

export type Situation = {
  slug: string;
  title: string;
  shortTitle: string;  // for cards
  description: string; // one-line for card
  icon: string;
  phase: "live" | "coming-soon";
};

export const SITUATIONS: Situation[] = [
  {
    slug: "parent-had-a-fall",
    title: "Parent Had a Fall",
    shortTitle: "Parent had a fall",
    description: "What to do right now, and how to prevent the next one.",
    icon: "🩹",
    phase: "live",
  },
  {
    slug: "dementia-concerns",
    title: "Dementia Concerns",
    shortTitle: "Dementia concerns",
    description: "Understanding the signs and knowing what comes next.",
    icon: "🧠",
    phase: "live",
  },
  {
    slug: "staying-at-home",
    title: "Staying at Home",
    shortTitle: "Staying at home",
    description: "Helping a senior stay safe and independent at home.",
    icon: "🏠",
    phase: "live",
  },
  {
    slug: "caregiver-burnout",
    title: "Caregiver Burnout",
    shortTitle: "Caregiver burnout",
    description: "When caring for someone else is wearing you down.",
    icon: "💛",
    phase: "live",
  },
  {
    slug: "parent-refuses-help",
    title: "Parent Refuses Help",
    shortTitle: "Parent refuses help",
    description: "How to navigate pushback when help is clearly needed.",
    icon: "🤝",
    phase: "live",
  },
  {
    slug: "senior-living-alone",
    title: "Senior Living Alone",
    shortTitle: "Senior living alone",
    description: "Safety, connection, and peace of mind from a distance.",
    icon: "🔑",
    phase: "live",
  },
  {
    slug: "recently-widowed",
    title: "Recently Widowed",
    shortTitle: "Recently widowed",
    description: "Practical next steps during an impossibly hard time.",
    icon: "🕊️",
    phase: "live",
  },
  {
    slug: "hospital-discharge-planning",
    title: "Hospital Discharge Planning",
    shortTitle: "Hospital discharge",
    description: "What to arrange before and after a hospital stay.",
    icon: "🏥",
    phase: "live",
  },
  {
    slug: "recognizing-elder-abuse",
    title: "Recognizing Elder Abuse",
    shortTitle: "Recognizing elder abuse",
    description: "Understanding the signs and knowing what to do when something feels wrong",
    icon: "🛡️",
    phase: "live",
  },
];

// ─── HELP CATEGORIES ────────────────────────────────────────────────────────────
// "Find Help" — service domains and topic areas.
// User already knows what category of help they need.

export type HelpCategory = {
  slug: string;
  name: string;
  shortName: string; // for cards
  description: string; // one-line for card
  icon: string;
  intro: string; // paragraph for the category page hero
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: "home-care",
    name: "Home Care",
    shortName: "Home Care",
    description: "Personal support, nursing, and daily living help at home.",
    icon: "🏡",
    intro:
      "Home care helps seniors live safely and independently in the place they know best. Services range from a few hours of personal support each week to around-the-clock nursing care. Understanding what's available — and how to pay for it — is the first step.",
  },
  {
    slug: "medical-alert-safety",
    name: "Medical Alert & Safety",
    shortName: "Medical Alert",
    description: "Emergency pendants, fall detection, and monitoring systems.",
    icon: "🚨",
    intro:
      "A medical alert system can be the difference between a fall becoming a tragedy and a fall becoming a bad afternoon. Modern devices range from simple pendants to GPS-enabled wearables with automatic fall detection. Here's what to look for.",
  },
  {
    slug: "mobility-equipment",
    name: "Mobility & Equipment",
    shortName: "Mobility",
    description: "Walkers, wheelchairs, stairlifts, and home modifications.",
    icon: "🦽",
    intro:
      "The right equipment can keep a senior safe at home for years longer than they might otherwise manage. From grab bars in the bathroom to stairlift installations, this category covers the practical modifications that make a real difference.",
  },
  {
    slug: "retirement-residences",
    name: "Retirement Residences",
    shortName: "Retirement Homes",
    description: "Independent living, assisted living, and memory care.",
    icon: "🏘️",
    intro:
      "Choosing a retirement residence is one of the biggest decisions a family makes. The range of options — from active independent living to full memory care — is wider than most people realize. Knowing the right questions to ask makes all the difference.",
  },
  {
    slug: "legal-financial",
    name: "Legal & Financial",
    shortName: "Legal & Financial",
    description: "Wills, powers of attorney, tax, and retirement planning.",
    icon: "⚖️",
    intro:
      "Legal and financial planning for seniors isn't just about wills. Powers of attorney, trusts, benefit entitlements, and tax planning all matter — and the window to put things in order is often narrower than people expect. Start early.",
  },
  {
    slug: "transportation",
    name: "Transportation",
    shortName: "Transportation",
    description: "Accessible rides to appointments, shopping, and family visits.",
    icon: "🚐",
    intro:
      "Losing the ability to drive is one of the most significant independence milestones for seniors. But it doesn't have to mean isolation. Accessible transportation options — from volunteer driver programs to medical transport — exist in most communities.",
  },
  {
    slug: "hearing-vision",
    name: "Hearing & Vision",
    shortName: "Hearing & Vision",
    description: "Hearing aids, eyewear, and in-home assessments.",
    icon: "👂",
    intro:
      "Hearing and vision changes affect quality of life in ways that are easy to underestimate. They're also among the most treatable conditions seniors face. Regular assessment and the right support can make an enormous difference.",
  },
  {
    slug: "funeral-estate-planning",
    name: "Funeral & Estate Planning",
    shortName: "Funeral Planning",
    description: "Pre-planning and compassionate end-of-life services.",
    icon: "🕯️",
    intro:
      "Pre-planning a funeral is one of the most generous things a person can do for their family. It removes impossible decisions from an impossibly hard moment. This guide covers what to think about, what to ask, and how to find providers you can trust.",
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance",
    shortName: "Home Maintenance",
    description: "Trusted handypeople, snow removal, and seasonal help.",
    icon: "🔧",
    intro:
      "A well-maintained home is a safe home. For seniors living independently, reliable help with repairs, snow removal, and seasonal tasks isn't a luxury — it's part of staying safe. Finding trustworthy tradespeople is harder than it should be. We make it easier.",
  },
  {
    slug: "companion-social",
    name: "Companion & Social",
    shortName: "Companionship",
    description: "Friendly visits, activities, and adult day programs.",
    icon: "☕",
    intro:
      "Loneliness is one of the most serious health risks facing older adults. Companion services, volunteer visitor programs, and adult day programs exist precisely to address this — and many are free or subsidized. Here's what's available.",
  },
];

// ─── PROVINCES ──────────────────────────────────────────────────────────────────

export type Province = {
  code: string;
  name: string;
  cities: string[];
};

export const PROVINCES: Province[] = [
  { code: "AB", name: "Alberta", cities: ["Calgary", "Edmonton", "Red Deer"] },
  { code: "BC", name: "British Columbia", cities: ["Vancouver", "Victoria", "Kelowna"] },
  { code: "MB", name: "Manitoba", cities: ["Winnipeg", "Brandon"] },
  { code: "NB", name: "New Brunswick", cities: ["Moncton", "Fredericton", "Saint John"] },
  { code: "NL", name: "Newfoundland and Labrador", cities: ["St. John's"] },
  { code: "NS", name: "Nova Scotia", cities: ["Halifax", "Sydney"] },
  { code: "ON", name: "Ontario", cities: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"] },
  { code: "PE", name: "Prince Edward Island", cities: ["Charlottetown"] },
  { code: "QC", name: "Quebec", cities: ["Montreal", "Quebec City", "Laval", "Gatineau"] },
  { code: "SK", name: "Saskatchewan", cities: ["Saskatoon", "Regina"] },
  { code: "NT", name: "Northwest Territories", cities: ["Yellowknife"] },
  { code: "NU", name: "Nunavut", cities: ["Iqaluit"] },
  { code: "YT", name: "Yukon", cities: ["Whitehorse"] },
];

// ─── BUSINESSES ─────────────────────────────────────────────────────────────────
// Empty until real vetted listings are added.
// Directory shows "Coming soon — we're vetting providers" state.

export type ServiceCategory =
  | "Home Care"
  | "Medical Alert & Safety"
  | "Mobility & Equipment"
  | "Retirement Residences"
  | "Legal & Financial"
  | "Transportation"
  | "Hearing & Vision"
  | "Funeral & Estate Planning"
  | "Home Maintenance"
  | "Companion & Social";

export type Business = {
  id: string;
  name: string;
  category: ServiceCategory;
  province: string;
  city?: string;
  phone: string;
  website?: string;
  description: string;
  vettedSince: string;
};

export const BUSINESSES: Business[] = [];
// Listings will be added as providers are vetted.

// ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────────

export function findProvince(code: string): Province | undefined {
  return PROVINCES.find((p) => p.code.toLowerCase() === code.toLowerCase());
}

export function findSituation(slug: string): Situation | undefined {
  return SITUATIONS.find((s) => s.slug === slug);
}

export function findHelpCategory(slug: string): HelpCategory | undefined {
  return HELP_CATEGORIES.find((c) => c.slug === slug);
}

export function provincialBusinesses(provinceCode: string): Business[] {
  return BUSINESSES.filter(
    (b) => b.province.toLowerCase() === provinceCode.toLowerCase() && !b.city,
  );
}

export function cityBusinesses(provinceCode: string, city: string): Business[] {
  return BUSINESSES.filter(
    (b) =>
      b.province.toLowerCase() === provinceCode.toLowerCase() &&
      b.city?.toLowerCase() === city.toLowerCase(),
  );
}

export function categoryBusinesses(provinceCode: string, categorySlug: string): Business[] {
  const category = HELP_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return BUSINESSES.filter(
    (b) => b.province.toLowerCase() === provinceCode.toLowerCase() &&
      b.category === category.name,
  );
}

export function groupByCategory(list: Business[]): Record<string, Business[]> {
  const out: Record<string, Business[]> = {};
  for (const b of list) {
    (out[b.category] ||= []).push(b);
  }
  return out;
}
