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
  image?: string; // optional hero image path for the category page
};

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    slug: "home-care",
    name: "Home Care",
    shortName: "Home Care",
    description: "Personal support, nursing, and daily living help at home.",
    icon: "🏡",
    intro:
      "Home care helps seniors live safely and independently in the place they know best. Services range from a few hours of personal support each week to around-the-clock nursing care. Understanding what's available, and how to pay for it, is the first step.",
    image: "/images/help/homecare-hero.jpeg",
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
      "Choosing a retirement residence is one of the biggest decisions a family makes. The range of options, from active independent living to full memory care, is wider than most people realize. Knowing the right questions to ask makes all the difference.",
  },
  {
    slug: "legal-financial",
    name: "Legal & Financial",
    shortName: "Legal & Financial",
    description: "Wills, powers of attorney, tax, and retirement planning.",
    icon: "⚖️",
    intro:
      "Legal and financial planning for seniors isn't just about wills. Powers of attorney, trusts, benefit entitlements, and tax planning all matter, and the window to put things in order is often narrower than people expect. Start early.",
  },
  {
    slug: "transportation",
    name: "Transportation",
    shortName: "Transportation",
    description: "Accessible rides to appointments, shopping, and family visits.",
    icon: "🚐",
    intro:
      "Losing the ability to drive is one of the most significant independence milestones for seniors. But it doesn't have to mean isolation. Accessible transportation options, from volunteer driver programs to medical transport, exist in most communities.",
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
      "A well-maintained home is a safe home. For seniors living independently, reliable help with repairs, snow removal, and seasonal tasks isn't a luxury, it's part of staying safe. Finding trustworthy tradespeople is harder than it should be. We make it easier.",
  },
  {
    slug: "companion-social",
    name: "Companion & Social",
    shortName: "Companionship",
    description: "Friendly visits, activities, and adult day programs.",
    icon: "☕",
    intro:
      "Loneliness is one of the most serious health risks facing older adults. Companion services, volunteer visitor programs, and adult day programs exist precisely to address this, and many are free or subsidized. Here's what's available.",
  },
];

// ─── ARTICLES ───────────────────────────────────────────────────────────────────
// Guides & articles shown on each help category page, linking to /help/$category/$article.

export type Article = {
  slug: string;
  categorySlug: string;
  title: string;
  description: string; // one-sentence summary for the card
  image: string;
  affiliate?: boolean; // true = page shows the affiliate disclosure banner at the top
};

export const ARTICLES: Article[] = [
  {
    slug: "homecare-questions",
    categorySlug: "home-care",
    title: "What to Ask Before Hiring a Home Care Provider",
    description:
      "The questions to ask every agency or independent caregiver before you sign anything.",
    image: "/images/help/homecare-questions.jpeg",
  },
  {
    slug: "homecare-care-types",
    categorySlug: "home-care",
    title: "Personal Support, Nursing, or Companion Care: Which Type of Home Care Do You Actually Need?",
    description:
      "A plain-language comparison of the three main types of home care, what they cost, and which one fits your situation.",
    image: "/images/help/homecare-care-types.jpeg",
  },
  {
    slug: "choosing-a-medical-alert-system",
    categorySlug: "medical-alert-safety",
    title: "How to Choose a Medical Alert System: The Questions That Actually Matter",
    description:
      "What these devices do, what they cost, the questions to ask any provider before signing, and who helps pay in Ontario.",
    image: "/images/help/medical-alert-hero.svg",
  },
  {
    slug: "paying-for-care",
    categorySlug: "legal-financial",
    title: "Paying for Care: The Money Conversation Without the Sales Pitch",
    description:
      "The six layers families should use in order, from public programs to the family home, and the honest case for and against each.",
    image: "/images/help/paying-for-care-hero.svg",
  },
  {
    slug: "five-legal-documents",
    categorySlug: "legal-financial",
    title: "The Five Legal Documents Every Family Needs, in Plain Language",
    description:
      "Wills, powers of attorney, and written wishes, why early is everything, and what to do if it already feels too late.",
    image: "/images/help/legal-documents-hero.svg",
  },
  {
    slug: "fall-proofing-the-home",
    categorySlug: "medical-alert-safety",
    title: "Fall-Proofing a Home, Room by Room, for Under $300",
    description:
      "The highest-value safety fixes in every room, what each one costs, and the order to do them in.",
    image: "/images/help/fallproofing-home-hero.svg",
    affiliate: true,
  },
  {
    slug: "choosing-a-walker-or-rollator",
    categorySlug: "mobility-equipment",
    title: "Canes, Walkers, and Rollators: Choosing the Right One, and Getting Ontario to Pay Most of the Bill",
    description:
      "Which device fits which need, why the assessment must come before the purchase, and how the Assistive Devices Program covers 75 percent.",
    image: "/images/help/walker-rollator-hero.svg",
    affiliate: true,
  },
  {
    slug: "stairlifts-and-home-modifications",
    categorySlug: "mobility-equipment",
    title: "Stairlifts, Ramps, and Bathroom Renovations: The Big Modifications, Honestly Priced",
    description:
      "What major accessibility work really costs, the funding that exists, and how to buy it without being taken.",
    image: "/images/help/stairlift-hero.svg",
  },
  {
    slug: "touring-retirement-residences",
    categorySlug: "retirement-residences",
    title: "How to Tour a Retirement Residence: What to Ask, What to Watch, What They Hope You Miss",
    description:
      "A former bank compliance professional's guide to seeing past the lobby, with a printable tour checklist.",
    image: "/images/help/residence-tour-hero.svg",
  },
  {
    slug: "independent-assisted-memory-care",
    categorySlug: "retirement-residences",
    title: "Independent Living, Assisted Living, Memory Care, or Long-Term Care: What the Labels Actually Mean",
    description:
      "The four levels explained in plain language, what each costs in Ontario, and the crucial difference between retirement homes and long-term care.",
    image: "/images/help/residence-levels-hero.svg",
  },
  {
    slug: "when-driving-ends",
    categorySlug: "transportation",
    title: "When Driving Has to End: The Conversation, the Rules, and What Comes After",
    description:
      "The warning signs, Ontario's licence renewal system at 80, and how to have the hardest conversation without destroying trust.",
    image: "/images/help/driving-retirement-hero.svg",
  },
  {
    slug: "getting-to-appointments",
    categorySlug: "transportation",
    title: "Getting There Without a Car: Every Ride Option for Seniors, from Free to Full Service",
    description:
      "Community transport, para-transit, volunteer drivers, and private options, what each costs, and how to actually book them.",
    image: "/images/help/rides-appointments-hero.svg",
  },
  {
    slug: "hearing-aids-without-overpaying",
    categorySlug: "hearing-vision",
    title: "Hearing Aids Without Overpaying: How the Market Works and Where the Money Goes",
    description:
      "Why hearing aids cost thousands, what Ontario's Assistive Devices Program covers, and the questions that protect you in the clinic.",
    image: "/images/help/hearing-aids-hero.svg",
    affiliate: true,
  },
  {
    slug: "vision-care-after-65",
    categorySlug: "hearing-vision",
    title: "Vision Care After 65: What OHIP Covers, What It Doesn't, and Living Well with Low Vision",
    description:
      "Eye exams, cataracts, glasses, and the practical supports that keep low vision from becoming lost independence.",
    image: "/images/help/vision-care-hero.svg",
    affiliate: true,
  },
  {
    slug: "funeral-preplanning-guide",
    categorySlug: "funeral-estate-planning",
    title: "Pre-Planning a Funeral: The Kindest Paperwork You Will Ever Do",
    description:
      "Recording wishes, comparing funeral homes, and the truth about prepaying, with a printable worksheet.",
    image: "/images/help/funeral-preplanning-hero.svg",
  },
  {
    slug: "what-executors-actually-do",
    categorySlug: "funeral-estate-planning",
    title: "What an Executor Actually Does: The Job Nobody Explains Until You Have It",
    description:
      "The first two weeks, the first year, probate in plain language, and when to pay for help.",
    image: "/images/help/executor-guide-hero.svg",
  },
  {
    slug: "hiring-trades-seniors-can-trust",
    categorySlug: "home-maintenance",
    title: "Hiring Trades and Handypeople a Senior Can Trust: The Verification Habit",
    description:
      "Licence checks, insurance proof, quotes in writing, and the door-knocker scams that target seniors' homes.",
    image: "/images/help/hiring-trades-hero.svg",
  },
  {
    slug: "aging-in-place-maintenance-plan",
    categorySlug: "home-maintenance",
    title: "The Aging-in-Place Maintenance Plan: Keeping the Home an Asset, Not a Hazard",
    description:
      "The seasonal rhythm that keeps a senior's home safe, which tasks to hand off first, and the printable walkthrough.",
    image: "/images/help/seasonal-maintenance-hero.svg",
  },
  {
    slug: "loneliness-is-a-health-risk",
    categorySlug: "companion-social",
    title: "Loneliness Is a Health Risk, and Canada Has Programs for It: Here They Are",
    description:
      "Adult day programs, seniors' centres, friendly visiting, and phone lines, most free or subsidized, and how to get in.",
    image: "/images/help/social-programs-hero.svg",
  },
  {
    slug: "hiring-a-companion",
    categorySlug: "companion-social",
    title: "Hiring a Paid Companion: What They Do, What They Cost, and How to Choose Well",
    description:
      "The most flexible service in senior care, the agency-versus-independent decision, and the questions that matter.",
    image: "/images/help/companionship-hero.svg",
  },
];

export function articlesForCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

export function findArticle(categorySlug: string, articleSlug: string): Article | undefined {
  return ARTICLES.find((a) => a.categorySlug === categorySlug && a.slug === articleSlug);
}

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
