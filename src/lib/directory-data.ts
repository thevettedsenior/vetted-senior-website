import BUSINESSES_JSON from "./data/businesses.json";

// ─── SITUATIONS ────────────────────────────────────────────────────────────────
// "Find Your Situation" — life events and emotional states.
// User does NOT yet know what kind of help they need.

export type Situation = {
  slug: string;
  title: string;
  shortTitle: string; // for cards
  description: string; // one-line for card
  icon: string;
  phase: "live" | "coming-soon";
  takeaways?: string[]; // 3 plain-language bullets for "The short version" box
};

export const SITUATIONS: Situation[] = [
  {
    slug: "parent-had-a-fall",
    title: "Parent Had a Fall",
    shortTitle: "Parent had a fall",
    description: "What to do right now, and how to prevent the next one.",
    icon: "🩹",
    phase: "live",
    takeaways: [
      "See a doctor even if nothing seems broken, since hip fractures and head injuries are easy to miss.",
      "Ask the doctor or pharmacist to review every medication, one of the most effective single steps against another fall.",
      "Fix the obvious home hazards first: loose rugs, poor lighting, and missing grab bars in the bathroom.",
    ],
  },
  {
    slug: "dementia-concerns",
    title: "Dementia Concerns",
    shortTitle: "Dementia concerns",
    description: "Understanding the signs and knowing what comes next.",
    icon: "🧠",
    phase: "live",
    takeaways: [
      "See a doctor early, because treatable problems like thyroid issues and medication side effects can look exactly like dementia.",
      "Set up powers of attorney for finances and personal care while the person still has legal capacity.",
      "Connect with a local dementia support organization and line up respite options before you desperately need them.",
    ],
  },
  {
    slug: "staying-at-home",
    title: "Staying at Home",
    shortTitle: "Staying at home",
    description: "Helping a senior stay safe and independent at home.",
    icon: "🏠",
    phase: "live",
    takeaways: [
      "Start with an honest assessment of daily tasks, personal care, home safety, medications, finances, and social connection.",
      "Find out what publicly funded home support exists in your area before paying for anything privately.",
      "Staying home with paid support often costs less than a retirement residence, at least in the early stages.",
    ],
  },
  {
    slug: "caregiver-burnout",
    title: "Caregiver Burnout",
    shortTitle: "Caregiver burnout",
    description: "When caring for someone else is wearing you down.",
    icon: "💛",
    phase: "live",
    takeaways: [
      "Burnout is the predictable result of unsupported caregiving, not a personal weakness, and the fix is support, not trying harder.",
      "See your own doctor, tell at least one person what you are carrying, and schedule regular respite before a crisis.",
      "Caregivers who take regular breaks stay healthier and keep caregiving longer, so a break is maintenance, not abandonment.",
    ],
  },
  {
    slug: "parent-refuses-help",
    title: "Parent Refuses Help",
    shortTitle: "Parent refuses help",
    description: "How to navigate pushback when help is clearly needed.",
    icon: "🤝",
    phase: "live",
    takeaways: [
      "Most refusals hide a fear of losing independence, so listen for the real worry before presenting your evidence.",
      "Start with one small, low-stakes ask like weekly grocery help rather than a five-day care schedule.",
      "A doctor, trusted friend, or geriatric care manager can often land the message a family member cannot.",
    ],
  },
  {
    slug: "senior-living-alone",
    title: "Senior Living Alone",
    shortTitle: "Senior living alone",
    description: "Safety, connection, and peace of mind from a distance.",
    icon: "🔑",
    phase: "live",
    takeaways: [
      "Set the emergency plan first: who checks in, who has a key, and whether there is a medical alert device.",
      "A medical alert device is one of the highest-impact, lowest-cost safety measures for anyone living alone.",
      "Loneliness is a genuine health risk, so build regular calls, visits, and community activities into every week.",
    ],
  },
  {
    slug: "recently-widowed",
    title: "Recently Widowed",
    shortTitle: "Recently widowed",
    description: "Practical next steps during an impossibly hard time.",
    icon: "🕊️",
    phase: "live",
    takeaways: [
      "Do not make major irreversible decisions like selling the house in the acute phase of grief.",
      "Get legal and financial advice early to claim survivor benefits and update accounts and documents.",
      "See your own doctor and connect with bereavement support, because grief affects physical health too.",
    ],
  },
  {
    slug: "hospital-discharge-planning",
    title: "Hospital Discharge Planning",
    shortTitle: "Hospital discharge",
    description: "What to arrange before and after a hospital stay.",
    icon: "🏥",
    phase: "live",
    takeaways: [
      "Ask to speak with the hospital discharge planner or social worker as soon as the admission happens.",
      "Go through every medication change before leaving, since medication confusion is a leading cause of readmission.",
      "Confirm what funded home support is arranged, get equipment in place, and book the first follow-up before discharge.",
    ],
  },
  {
    slug: "recognizing-elder-abuse",
    title: "Recognizing Elder Abuse",
    shortTitle: "Recognizing elder abuse",
    description:
      "Understanding the signs and knowing what to do when something feels wrong",
    icon: "🛡️",
    phase: "live",
    takeaways: [
      "If someone is in immediate danger call emergency services now, otherwise put safety first and documentation second.",
      "You do not need proof to act, since a concern is enough to call adult protective services or a senior helpline, often anonymously.",
      "If the abuser is also the caregiver, plan alternative care at the same time so leaving does not mean losing support.",
    ],
  },
];

// ─── HELP CATEGORIES ────────────────────────────────────────────────────────────
// "Find Help" — service domains and topic areas.
// User already knows what category of help they need.

// Visual grouping for the Find Help nav menu only. Categories stay flat in
// routing and data; the group never appears in a URL.
export type CategoryGroup = "Medical & Health" | "Practical & Legal";

export const CATEGORY_GROUPS: CategoryGroup[] = [
  "Medical & Health",
  "Practical & Legal",
];

export type HelpCategory = {
  slug: string;
  name: string;
  shortName: string; // for cards
  description: string; // one-line for card
  icon: string;
  group: CategoryGroup;
  intro: string; // paragraph for the category page hero
  image?: string; // optional hero image path for the category page
};

export const HELP_CATEGORIES: HelpCategory[] = [
  // ── Medical & Health ──────────────────────────────────────────────────────
  {
    slug: "home-care",
    name: "Home Care & Nursing",
    shortName: "Home Care",
    description: "Personal support, nursing, and daily living help at home.",
    icon: "🏡",
    group: "Medical & Health",
    intro:
      "Home care helps seniors live safely and independently in the place they know best. Services range from a few hours of personal support each week to around-the-clock nursing care. Understanding what's available, and how to pay for it, is the first step.",
    image: "/images/help/homecare-hero.jpeg",
  },
  {
    slug: "doctors-pharmacy-medication",
    name: "Doctors, Pharmacy & Medication",
    shortName: "Doctors & Pharmacy",
    description:
      "Finding a doctor, managing prescriptions, and medication reviews.",
    icon: "🩺",
    group: "Medical & Health",
    intro:
      "Staying on top of medical care gets harder as prescriptions pile up and family doctors get scarcer. From finding a doctor who takes new patients to blister packs and pharmacist medication reviews, this section covers the practical side of managing health care.",
  },
  {
    slug: "mobility-equipment",
    name: "Mobility, Physio & Falls Prevention",
    shortName: "Mobility & Physio",
    description:
      "Walkers, stairlifts, physiotherapy, and falls-prevention programs.",
    icon: "🦽",
    group: "Medical & Health",
    intro:
      "The right equipment and the right therapy can keep a senior safe at home for years longer than they might otherwise manage. From grab bars and stairlifts to physiotherapy and falls-prevention assessments, this category covers both the gear and the services that make a real difference.",
  },
  {
    slug: "hearing-vision",
    name: "Vision, Hearing, Dental & Foot Care",
    shortName: "Vision & Hearing",
    description: "Eye exams, hearing aids, dental care, and foot care.",
    icon: "👂",
    group: "Medical & Health",
    intro:
      "Vision, hearing, dental health, and foot care affect quality of life in ways that are easy to underestimate. They're also among the most treatable problems seniors face. Regular assessment and the right support can make an enormous difference.",
  },
  {
    slug: "medical-alert-safety",
    name: "Medical Alert & Safety",
    shortName: "Medical Alert",
    description: "Emergency pendants, fall detection, and monitoring systems.",
    icon: "🚨",
    group: "Medical & Health",
    intro:
      "A medical alert system can be the difference between a fall becoming a tragedy and a fall becoming a bad afternoon. Modern devices range from simple pendants to GPS-enabled wearables with automatic fall detection. Here's what to look for.",
  },
  {
    slug: "dementia-memory-support",
    name: "Dementia & Memory Support",
    shortName: "Dementia Support",
    description:
      "Memory clinics, day programs, and support for families living with dementia.",
    icon: "🧠",
    group: "Medical & Health",
    intro:
      "A dementia diagnosis changes life for the whole family, but nobody has to navigate it alone. Memory clinics, adult day programs, caregiver support, and home care designed for cognitive change all exist. Knowing what's available, and when to reach for it, makes the road ahead less frightening.",
  },
  {
    slug: "mental-health-counselling",
    name: "Mental Health & Counselling",
    shortName: "Mental Health",
    description: "Counselling for late-life depression, grief, and isolation.",
    icon: "💬",
    group: "Medical & Health",
    intro:
      "Depression and anxiety are not a normal part of aging, and they are treatable at any age. From grief counselling to therapists who understand late-life transitions, real help exists. Asking for it is a sign of strength, not weakness.",
  },
  {
    slug: "retirement-residences",
    name: "Retirement Residences",
    shortName: "Retirement Homes",
    description: "Independent living, assisted living, and memory care.",
    icon: "🏘️",
    group: "Medical & Health",
    intro:
      "Choosing a retirement residence is one of the biggest decisions a family makes. The range of options, from active independent living to full memory care, is wider than most people realize. Knowing the right questions to ask makes all the difference.",
  },
  {
    slug: "palliative-hospice-care",
    name: "Palliative & Hospice Care",
    shortName: "Palliative Care",
    description:
      "Comfort-focused care at the end of life, at home or in hospice.",
    icon: "🕊️",
    group: "Medical & Health",
    intro:
      "Palliative care is about comfort and dignity, not giving up. It covers far more than most families realize, and starting earlier almost always means better care. This section explains what hospice and palliative services actually provide, and how to access them.",
  },
  // ── Practical & Legal ─────────────────────────────────────────────────────
  {
    slug: "legal-financial",
    name: "Legal & Financial",
    shortName: "Legal & Financial",
    description: "Wills, powers of attorney, tax, and retirement planning.",
    icon: "⚖️",
    group: "Practical & Legal",
    intro:
      "Legal and financial planning for seniors isn't just about wills. Powers of attorney, trusts, benefit entitlements, and tax planning all matter, and the window to put things in order is often narrower than people expect. Start early.",
  },
  {
    slug: "funeral-estate-planning",
    name: "Funeral & Estate Planning",
    shortName: "Funeral Planning",
    description: "Pre-planning and compassionate end-of-life services.",
    icon: "🕯️",
    group: "Practical & Legal",
    intro:
      "Pre-planning a funeral is one of the most generous things a person can do for their family. It removes impossible decisions from an impossibly hard moment. This guide covers what to think about, what to ask, and how to find providers you can trust.",
  },
  {
    slug: "transportation",
    name: "Transportation",
    shortName: "Transportation",
    description:
      "Accessible rides to appointments, shopping, and family visits.",
    icon: "🚐",
    group: "Practical & Legal",
    intro:
      "Losing the ability to drive is one of the most significant independence milestones for seniors. But it doesn't have to mean isolation. Accessible transportation options, from volunteer driver programs to medical transport, exist in most communities.",
  },
  {
    slug: "home-maintenance",
    name: "Home Maintenance",
    shortName: "Home Maintenance",
    description: "Trusted handypeople, snow removal, and seasonal help.",
    icon: "🔧",
    group: "Practical & Legal",
    intro:
      "A well-maintained home is a safe home. For seniors living independently, reliable help with repairs, snow removal, and seasonal tasks isn't a luxury, it's part of staying safe. Finding trustworthy tradespeople is harder than it should be. We make it easier.",
  },
  {
    slug: "companion-social",
    name: "Companion & Social",
    shortName: "Companionship",
    description: "Friendly visits, activities, and adult day programs.",
    icon: "☕",
    group: "Practical & Legal",
    intro:
      "Loneliness is one of the most serious health risks facing older adults. Companion services, volunteer visitor programs, and adult day programs exist precisely to address this, and many are free or subsidized. Here's what's available.",
  },
  {
    slug: "meals-nutrition",
    name: "Meals & Nutrition",
    shortName: "Meals & Nutrition",
    description:
      "Meal delivery, Meals on Wheels, and help eating well at home.",
    icon: "🍲",
    group: "Practical & Legal",
    intro:
      "Good nutrition is one of the strongest predictors of staying healthy and independent at home. From national meal delivery companies to local Meals on Wheels kitchens, there are more options than most families realize, at every budget.",
  },
  {
    slug: "downsizing-moving",
    name: "Downsizing & Moving",
    shortName: "Downsizing",
    description: "Senior move managers, downsizing help, and estate sales.",
    icon: "📦",
    group: "Practical & Legal",
    intro:
      "Leaving a long-time family home is as emotional as it is practical. Senior move managers are a real, certified profession most families have never heard of, and they can turn an overwhelming move into a managed process. Here's how it works.",
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
  takeaways?: string[]; // 3 plain-language bullets for "The short version" box
};

export const ARTICLES: Article[] = [
  {
    slug: "homecare-questions",
    categorySlug: "home-care",
    title: "What to Ask Before Hiring a Home Care Provider",
    description:
      "The questions to ask every agency or independent caregiver before you sign anything.",
    image: "/images/help/homecare-questions.jpeg",
    takeaways: [
      "Ask every provider whether caregivers are employees or contractors, since that changes who handles supervision, insurance, and backup.",
      "Contact at least three providers and compare written quotes, service agreements, and references before signing anything.",
      "Watch for red flags like pressure to sign quickly, vague answers about background checks, or no backup plan for sick caregivers.",
    ],
  },
  {
    slug: "homecare-care-types",
    categorySlug: "home-care",
    title:
      "Personal Support, Nursing, or Companion Care: Which Type of Home Care Do You Actually Need?",
    description:
      "A plain-language comparison of the three main types of home care, what they cost, and which one fits your situation.",
    image: "/images/help/homecare-care-types.jpeg",
    takeaways: [
      "Personal support workers handle daily tasks like bathing and meals, nurses handle clinical care, and companions provide social connection.",
      "Nursing costs the most and companion care the least, so paying for the wrong type wastes money while real needs go unmet.",
      "Many people need a combination, and a funded needs assessment through the family doctor or local health authority gets the match right.",
    ],
  },
  {
    slug: "finding-a-family-doctor",
    categorySlug: "doctors-pharmacy-medication",
    title:
      "Finding a Family Doctor After 65: The Waitlist, the Workarounds, and What to Do Meanwhile",
    description:
      "Health Care Connect, nurse practitioner clinics, and how to get real care while the search drags on.",
    image: "/images/help/family-doctor-hero.svg",
    takeaways: [
      "Register with Health Care Connect (1-800-445-1822) on day one and mention every diagnosis, since complex patients get priority.",
      "Nurse practitioner clinics provide full OHIP-funded primary care and are a real substitute for most seniors' routine needs.",
      "While you wait, use one walk-in clinic consistently and keep a one-page health summary and medication list in the wallet.",
    ],
  },
  {
    slug: "managing-multiple-medications",
    categorySlug: "doctors-pharmacy-medication",
    title:
      "Ten Pills a Day: Getting Medications Under Control with Services That Are Already Free",
    description:
      "MedsCheck reviews, blister packs, free delivery, and what drugs actually cost after 65 in Ontario.",
    image: "/images/help/medications-hero.svg",
    takeaways: [
      "Ask the pharmacy for a MedsCheck, a free annual review for anyone taking three or more chronic medications.",
      "Blister packs, refill synchronization, and free delivery are standard at most pharmacies and prevent most medication mistakes.",
      "After 65 the Ontario Drug Benefit covers most drugs for a $100 deductible and up to $6.11 per prescription.",
    ],
  },
  {
    slug: "getting-a-memory-assessment",
    categorySlug: "dementia-memory-support",
    title:
      "Worried About a Parent's Memory: How to Get a Real Assessment, Step by Step",
    description:
      "What is normal aging and what is not, how the testing works, and why an early diagnosis is worth having.",
    image: "/images/help/memory-assessment-hero.svg",
    takeaways: [
      "Getting lost on familiar routes or repeating questions within the hour warrants an assessment, unlike ordinary misplaced keys.",
      "Depression, thyroid problems, B12 deficiency, and medication side effects can all mimic dementia, and several are fully reversible.",
      "Write down specific incidents with dates, then book a dedicated appointment with the family doctor and bring a family member.",
    ],
  },
  {
    slug: "support-after-dementia-diagnosis",
    categorySlug: "dementia-memory-support",
    title: "After the Dementia Diagnosis: The Support System Nobody Hands You",
    description:
      "First Link, day programs, dementia-trained home care, respite, and the safety layer, assembled in the right order.",
    image: "/images/help/dementia-support-hero.svg",
    takeaways: [
      "Call the Alzheimer Society's free First Link program first, and no doctor's referral is needed.",
      "Adult day programs cost roughly $10 to $40 a day in Ontario and give both the person and the caregiver a better week.",
      "Apply for publicly funded respite through Ontario Health atHome (310-2222) before exhaustion, because waitlists are real.",
    ],
  },
  {
    slug: "depression-in-later-life",
    categorySlug: "mental-health-counselling",
    title:
      "Depression After 70 Is Not Normal Aging: Spotting It and Treating It",
    description:
      "Why late-life depression hides behind physical complaints, what treatment involves, and what OHIP covers.",
    image: "/images/help/late-life-depression-hero.svg",
    takeaways: [
      "Depression is treatable at every age and often shows up as pain, fatigue, and poor sleep rather than sadness.",
      "OHIP covers the family doctor, psychiatrists with a referral, and Ontario Structured Psychotherapy, a free program you can self-refer into.",
      "If there is any talk of not wanting to live, call or text 988, Canada's suicide crisis line, right away.",
    ],
  },
  {
    slug: "grief-and-counselling-options",
    categorySlug: "mental-health-counselling",
    title:
      "Grief, Loneliness, and Finding a Counsellor: The Affordable Ways In",
    description:
      "Free bereavement programs, sliding-scale counselling, and how to choose among therapists, with real prices.",
    image: "/images/help/grief-counselling-hero.svg",
    takeaways: [
      "Hospice bereavement programs offer free grief groups and one-on-one support, and you do not need to have used the hospice.",
      "Registered psychotherapists and social workers charge roughly $120 to $180 a session and are usually the right private choice for grief.",
      "Ask family service agencies about sliding-scale rates and check retiree or workplace benefits before paying full private prices.",
    ],
  },
  {
    slug: "what-palliative-care-actually-is",
    categorySlug: "palliative-hospice-care",
    title:
      "Palliative Care Is Not Giving Up: What It Actually Provides, and Why Earlier Is Better",
    description:
      "Symptom control, home visits, and support for the whole family, available months or years before the end.",
    image: "/images/help/palliative-care-hero.svg",
    takeaways: [
      "Palliative care runs alongside treatment, not instead of it, and starting early makes people feel better and sometimes live longer.",
      "The team controls pain and other symptoms, makes home visits, arranges equipment, and leaves a plan for the 2 a.m. crisis.",
      "Ask the doctor directly for a referral or call Ontario Health atHome at 310-2222, because families often have to raise it first.",
    ],
  },
  {
    slug: "hospice-at-home-or-residence",
    categorySlug: "palliative-hospice-care",
    title:
      "The Last Months: Home, Residential Hospice, or Hospital, and How to Arrange Each",
    description:
      "What each setting really involves, why hospice is free in Ontario, and the benefits that pay family caregivers.",
    image: "/images/help/hospice-options-hero.svg",
    takeaways: [
      "Residential hospice care is free to families in Ontario, but beds are limited, so start the referral early.",
      "Dying at home works when the after-hours number, the symptom kit, and a signed DNR confirmation are all in place.",
      "EI compassionate care benefits pay up to 26 weeks to family members who leave work, and the weeks can be shared.",
    ],
  },
  {
    slug: "meal-delivery-options",
    categorySlug: "meals-nutrition",
    title:
      "Meals on Wheels and Everything After: Every Way to Get Good Food to a Senior's Door",
    description:
      "Community meal programs, frozen delivery companies, grocery delivery, and dining programs, with real prices.",
    image: "/images/help/meal-delivery-hero.svg",
    takeaways: [
      "Meals on Wheels delivers hot lunches for roughly $7 to $12 a meal, and every delivery doubles as a wellness check.",
      "Call 211 to find the program serving your address, and delivery can often start within a week or two.",
      "A layered plan combining Meals on Wheels, frozen delivery, and grocery delivery runs roughly $250 to $400 a month.",
    ],
  },
  {
    slug: "when-a-senior-stops-eating-well",
    categorySlug: "meals-nutrition",
    title:
      "Tea and Toast: When a Senior Stops Eating Well, and What Actually Helps",
    description:
      "The warning signs of malnutrition, the causes families miss, and the fixes that work at every budget.",
    image: "/images/help/eating-well-hero.svg",
    takeaways: [
      "Visible weight loss, an emptying fridge, and the same few foods on repeat are warning signs worth acting on now.",
      "See the doctor and the dentist first, because medications, dental pain, and depression are the usual hidden causes.",
      "Company at meals, delivered food, and easy protein snacks get more eaten than any lecture about nutrition.",
    ],
  },
  {
    slug: "senior-move-managers",
    categorySlug: "downsizing-moving",
    title:
      "Senior Move Managers: The Profession That Turns a Brutal Move into a Managed One",
    description:
      "What move managers actually do, what they cost, and the questions that find a good one.",
    image: "/images/help/move-managers-hero.svg",
    takeaways: [
      "Most Canadian senior move managers charge $50 to $95 an hour, and a typical downsizing runs $2,500 to $7,500 in fees.",
      "Ask about NASMM membership, insurance, a written estimate after a home visit, and any commission on items they sell.",
      "Services are modular, so families on a budget can buy just the floor plan, sorting sessions, and move-day supervision.",
    ],
  },
  {
    slug: "sorting-a-lifetime-of-belongings",
    categorySlug: "downsizing-moving",
    title: "Sorting a Lifetime of Belongings Without Breaking Hearts",
    description:
      "The ground rules that prevent family fights, what things are really worth, and where everything can honestly go.",
    image: "/images/help/sorting-belongings-hero.svg",
    takeaways: [
      "Agree on two rules before starting: the senior decides what stays, and nothing sentimental leaves in secret.",
      "Start with a floor plan of the new home and the least sentimental room, never with the photographs.",
      "Most brown furniture, china, and silver-plate has little resale value, so donation is often faster and kinder than a sale.",
    ],
  },
  {
    slug: "choosing-a-medical-alert-system",
    categorySlug: "medical-alert-safety",
    title:
      "How to Choose a Medical Alert System: The Questions That Actually Matter",
    description:
      "What these devices do, what they cost, the questions to ask any provider before signing, and who helps pay in Ontario.",
    image: "/images/help/medical-alert-hero.svg",
    takeaways: [
      "Expect to pay $25 to $60 a month privately, because Ontario does not broadly fund medical alert services.",
      "Ask every provider about all-in monthly cost, contract term, and cancellation, since billing surprises are the industry's biggest complaint.",
      "A device only works when worn, so let your parent choose one they will actually wear.",
    ],
  },
  {
    slug: "paying-for-care",
    categorySlug: "legal-financial",
    title: "Paying for Care: The Money Conversation Without the Sales Pitch",
    description:
      "The six layers families should use in order, from public programs to the family home, and the honest case for and against each.",
    image: "/images/help/paying-for-care-hero.svg",
    takeaways: [
      "Use the layers in order: public programs, tax credits, unclaimed benefits, insurance, family money, and the home last.",
      "One call to Ontario Health atHome (310-2222) or 211 opens the file on publicly funded home care and equipment.",
      "The disability tax credit can be claimed retroactively up to ten years, and dementia frequently qualifies.",
    ],
  },
  {
    slug: "five-legal-documents",
    categorySlug: "legal-financial",
    title: "The Five Legal Documents Every Family Needs, in Plain Language",
    description:
      "Wills, powers of attorney, and written wishes, why early is everything, and what to do if it already feels too late.",
    image: "/images/help/legal-documents-hero.svg",
    takeaways: [
      "Every one of these documents can only be made while the person still has mental capacity, so early is everything.",
      "The five are a will, two powers of attorney, written medical wishes, and a personal inventory of where everything is.",
      "Without a financial power of attorney, family must go through a slow and expensive court process to manage a parent's money.",
    ],
  },
  {
    slug: "fall-proofing-the-home",
    categorySlug: "medical-alert-safety",
    title: "Fall-Proofing a Home, Room by Room, for Under $300",
    description:
      "The highest-value safety fixes in every room, what each one costs, and the order to do them in.",
    image: "/images/help/fallproofing-home-hero.svg",
    affiliate: true,
    takeaways: [
      "Do the free fixes first: secure loose rugs, reroute cords, clear the stairs, and move daily items to waist height.",
      "Grab bars anchored into studs cost $20 to $40 each, and towel bars are not grab bars.",
      "Ask the doctor about OHIP-covered physiotherapy at 65 and older, since strength and balance cut fall risk more than any gadget.",
    ],
  },
  {
    slug: "choosing-a-walker-or-rollator",
    categorySlug: "mobility-equipment",
    title:
      "Canes, Walkers, and Rollators: Choosing the Right One, and Getting Ontario to Pay Most of the Bill",
    description:
      "Which device fits which need, why the assessment must come before the purchase, and how the Assistive Devices Program covers 75 percent.",
    image: "/images/help/walker-rollator-hero.svg",
    affiliate: true,
    takeaways: [
      "Get the therapist assessment before buying, because Ontario's Assistive Devices Program only pays its 75 percent on prescribed devices.",
      "Rollators suit people who can walk but tire, while standard walkers are for anyone who leans real weight on the frame.",
      "Call the family doctor or Ontario Health atHome (310-2222) to arrange the assessment, which is often free.",
    ],
  },
  {
    slug: "stairlifts-and-home-modifications",
    categorySlug: "mobility-equipment",
    title:
      "Stairlifts, Ramps, and Bathroom Renovations: The Big Modifications, Honestly Priced",
    description:
      "What major accessibility work really costs, the funding that exists, and how to buy it without being taken.",
    image: "/images/help/stairlift-hero.svg",
    takeaways: [
      "A straight stairlift runs $3,000 to $5,500 installed, and reconditioned or rented lifts cost about half.",
      "Get an occupational therapist's home assessment first, often free through Ontario Health atHome (310-2222), before buying anything big.",
      "Never sign on the first visit, and get three written quotes for any job over $2,000.",
    ],
  },
  {
    slug: "touring-retirement-residences",
    categorySlug: "retirement-residences",
    title:
      "How to Tour a Retirement Residence: What to Ask, What to Watch, What They Hope You Miss",
    description:
      "A former bank compliance professional's guide to seeing past the lobby, with a printable tour checklist.",
    image: "/images/help/residence-tour-hero.svg",
    takeaways: [
      "Check the residence on the RHRA register (rhra.ca) and get the full rate card in writing before you tour.",
      "Visit twice and make the second visit unannounced at a mealtime or weekend evening when staffing is thinnest.",
      "Ask what care needs would force a resident to leave and get the discharge policy in writing.",
    ],
  },
  {
    slug: "independent-assisted-memory-care",
    categorySlug: "retirement-residences",
    title:
      "Independent Living, Assisted Living, Memory Care, or Long-Term Care: What the Labels Actually Mean",
    description:
      "The four levels explained in plain language, what each costs in Ontario, and the crucial difference between retirement homes and long-term care.",
    image: "/images/help/residence-levels-hero.svg",
    takeaways: [
      "Retirement residences are private pay while long-term care is publicly funded, and the two have different front doors and waitlists.",
      "Ontario costs run roughly $2,500 to $5,000 a month for independent living and $6,000 to $9,000 or more for memory care.",
      "Price the real care level, not the advertised base rate, because care packages can add thousands a month.",
    ],
  },
  {
    slug: "when-driving-ends",
    categorySlug: "transportation",
    title:
      "When Driving Has to End: The Conversation, the Rules, and What Comes After",
    description:
      "The warning signs, Ontario's licence renewal system at 80, and how to have the hardest conversation without destroying trust.",
    image: "/images/help/driving-retirement-hero.svg",
    takeaways: [
      "Watch patterns like new dents, getting lost on familiar routes, and family quietly declining rides, not birthdays.",
      "At 80, Ontario drivers renew every two years with a vision test and screening, and doctors must report unsafe medical conditions.",
      "Build the replacement ride plan before the conversation, and remember a car costs $8,000 to $12,000 a year that can fund rides.",
    ],
  },
  {
    slug: "getting-to-appointments",
    categorySlug: "transportation",
    title:
      "Getting There Without a Car: Every Ride Option for Seniors, from Free to Full Service",
    description:
      "Community transport, para-transit, volunteer drivers, and private options, what each costs, and how to actually book them.",
    image: "/images/help/rides-appointments-hero.svg",
    takeaways: [
      "Call 211 first, because it is the free 24/7 line that knows which community ride programs serve your postal code.",
      "Community agencies run door-to-door seniors' rides for free to about $20 a trip, and para-transit matches regular transit fares.",
      "Family members can book and pay for Uber or Lyft rides for a senior from their own app, no smartphone required.",
    ],
  },
  {
    slug: "hearing-aids-without-overpaying",
    categorySlug: "hearing-vision",
    title:
      "Hearing Aids Without Overpaying: How the Market Works and Where the Money Goes",
    description:
      "Why hearing aids cost thousands, what Ontario's Assistive Devices Program covers, and the questions that protect you in the clinic.",
    image: "/images/help/hearing-aids-hero.svg",
    affiliate: true,
    takeaways: [
      "Hearing aids run roughly $1,000 to $4,000 per ear, so ask for the unbundled price list before agreeing to anything.",
      "Ontario's Assistive Devices Program pays $500 per hearing aid, and the clinic usually handles the paperwork.",
      "The audiogram is yours, so take a copy and price-shop, because spreads on the same device routinely top a thousand dollars.",
    ],
  },
  {
    slug: "vision-care-after-65",
    categorySlug: "hearing-vision",
    title:
      "Vision Care After 65: What OHIP Covers, What It Doesn't, and Living Well with Low Vision",
    description:
      "Eye exams, cataracts, glasses, and the practical supports that keep low vision from becoming lost independence.",
    image: "/images/help/vision-care-hero.svg",
    affiliate: true,
    takeaways: [
      "OHIP covers routine eye exams for seniors 65 and older and cataract surgery, but glasses are not covered.",
      "Book the exam even when nothing feels wrong, because glaucoma and macular degeneration steal vision silently and irreversibly.",
      "CNIB (1-800-563-2642) offers free practical help for anyone with vision loss, and brighter lighting is the cheapest vision aid.",
    ],
  },
  {
    slug: "funeral-preplanning-guide",
    categorySlug: "funeral-estate-planning",
    title: "Pre-Planning a Funeral: The Kindest Paperwork You Will Ever Do",
    description:
      "Recording wishes, comparing funeral homes, and the truth about prepaying, with a printable worksheet.",
    image: "/images/help/funeral-preplanning-hero.svg",
    takeaways: [
      "Recording wishes is free and every family should do it now, while prepaying is a separate financial decision.",
      "Direct cremation runs $1,500 to $4,000 and traditional burial can pass $20,000, with huge price spreads between providers in the same city.",
      "Ontario providers must give an itemized price list, and caskets and urns can legally be bought elsewhere.",
    ],
  },
  {
    slug: "what-executors-actually-do",
    categorySlug: "funeral-estate-planning",
    title:
      "What an Executor Actually Does: The Job Nobody Explains Until You Have It",
    description:
      "The first two weeks, the first year, probate in plain language, and when to pay for help.",
    image: "/images/help/executor-guide-hero.svg",
    takeaways: [
      "In the first two weeks, find the will, order about ten death certificates, secure the house, and call the home insurer.",
      "Never distribute money before the CRA clearance certificate, or any tax shortfall becomes personally yours.",
      "Ontario executors can claim compensation up to about 5 percent of the estate, and declining the job is allowed.",
    ],
  },
  {
    slug: "hiring-trades-seniors-can-trust",
    categorySlug: "home-maintenance",
    title:
      "Hiring Trades and Handypeople a Senior Can Trust: The Verification Habit",
    description:
      "Licence checks, insurance proof, quotes in writing, and the door-knocker scams that target seniors' homes.",
    image: "/images/help/hiring-trades-hero.svg",
    takeaways: [
      "Verify the licence, get insurance in writing, and check WSIB clearance free at wsib.ca before anyone starts work.",
      "Get three written quotes for anything over $1,000 and hold back a real final payment until the work is inspected.",
      "Agree as a family that nothing over $500 gets decided at the door, because door-knocker scams target seniors' homes.",
    ],
  },
  {
    slug: "aging-in-place-maintenance-plan",
    categorySlug: "home-maintenance",
    title:
      "The Aging in Place Maintenance Plan: Keeping the Home an Asset, Not a Hazard",
    description:
      "The seasonal rhythm that keeps a senior's home safe, which tasks to hand off first, and the printable walkthrough.",
    image: "/images/help/seasonal-maintenance-hero.svg",
    takeaways: [
      "Schedule the safety-critical tasks first: alarms tested, furnace serviced, eaves cleaned, and snow removal contracted by the end of October.",
      "Hand off ladders and snow shovelling permanently, because roof falls and shovelling heart strain are the two big dangers.",
      "Budget roughly $1,500 to $3,000 a year for fully delegated maintenance, far cheaper than leaving the home.",
    ],
  },
  {
    slug: "loneliness-is-a-health-risk",
    categorySlug: "companion-social",
    title:
      "Loneliness Is a Health Risk, and Canada Has Programs for It: Here They Are",
    description:
      "Adult day programs, seniors' centres, friendly visiting, and phone lines, most free or subsidized, and how to get in.",
    image: "/images/help/social-programs-hero.svg",
    takeaways: [
      "Loneliness carries health risks researchers compare to smoking, so treat connection as a medical need, not a nicety.",
      "Seniors' centres cost $20 to $60 a year and adult day programs run $10 to $40 a day, often subsidized.",
      "Go along for the first two or three visits, because walking in alone is the real barrier, not the price.",
    ],
  },
  {
    slug: "hiring-a-companion",
    categorySlug: "companion-social",
    title:
      "Hiring a Paid Companion: What They Do, What They Cost, and How to Choose Well",
    description:
      "The most flexible service in senior care, the agency versus independent decision, and the questions that matter.",
    image: "/images/help/companionship-hero.svg",
    takeaways: [
      "Companion care runs roughly $25 to $40 an hour through an Ontario agency, usually with a minimum visit of two to four hours.",
      "Insist on vulnerable sector police checks and references you actually call, because character screening matters most in this service.",
      "Check the free options through 211 first, like friendly visiting programs and day programs, then layer paid companionship on top.",
    ],
  },
];

export function articlesForCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

export function findArticle(
  categorySlug: string,
  articleSlug: string,
): Article | undefined {
  return ARTICLES.find(
    (a) => a.categorySlug === categorySlug && a.slug === articleSlug,
  );
}

// ─── PROVINCES ──────────────────────────────────────────────────────────────────

export type Province = {
  code: string;
  name: string;
  cities: string[];
};

export const PROVINCES: Province[] = [
  { code: "AB", name: "Alberta", cities: ["Calgary", "Edmonton", "Red Deer"] },
  {
    code: "BC",
    name: "British Columbia",
    cities: ["Vancouver", "Victoria", "Kelowna"],
  },
  { code: "MB", name: "Manitoba", cities: ["Winnipeg", "Brandon"] },
  {
    code: "NB",
    name: "New Brunswick",
    cities: ["Moncton", "Fredericton", "Saint John"],
  },
  { code: "NL", name: "Newfoundland and Labrador", cities: ["St. John's"] },
  { code: "NS", name: "Nova Scotia", cities: ["Halifax", "Sydney"] },
  {
    code: "ON",
    name: "Ontario",
    cities: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
  },
  { code: "PE", name: "Prince Edward Island", cities: ["Charlottetown"] },
  {
    code: "QC",
    name: "Quebec",
    cities: ["Montreal", "Quebec City", "Laval", "Gatineau"],
  },
  { code: "SK", name: "Saskatchewan", cities: ["Saskatoon", "Regina"] },
  { code: "NT", name: "Northwest Territories", cities: ["Yellowknife"] },
  { code: "NU", name: "Nunavut", cities: ["Iqaluit"] },
  { code: "YT", name: "Yukon", cities: ["Whitehorse"] },
];

// ─── BUSINESSES ─────────────────────────────────────────────────────────────────
// Empty until real vetted listings are added.
// Directory shows "Coming soon — we're vetting providers" state.
// Data lives in src/lib/data/businesses.json and is validated below.

export type ServiceCategory =
  | "Home Care & Nursing"
  | "Doctors, Pharmacy & Medication"
  | "Mobility, Physio & Falls Prevention"
  | "Vision, Hearing, Dental & Foot Care"
  | "Medical Alert & Safety"
  | "Dementia & Memory Support"
  | "Mental Health & Counselling"
  | "Palliative & Hospice Care"
  | "Legal & Financial"
  | "Funeral & Estate Planning"
  | "Transportation"
  | "Home Maintenance"
  | "Companion & Social"
  | "Meals & Nutrition"
  | "Downsizing & Moving"
  | "Retirement Residences";

/**
 * GOVERNING RULE: a listing represents ONE contact point (one phone number,
 * one inbox), and its tier is whatever territory that specific contact point
 * actually covers, not what the company claims to cover on its own website.
 * When a single company has different contact points for different
 * territories, that is multiple rows sharing a brandGroup, not one row with
 * a wide territory.
 *
 * Examples:
 * - One company, one phone/email serving all of Canada: one row,
 *   tier="national", provinces=[all provinces], cities=[].
 * - One company with a separate phone number per province: one row PER
 *   province, each tier="provincial", sharing a brandGroup. NOT one
 *   national row.
 * - A provincial number plus a separate local number in one city: a
 *   tier="provincial" row plus a tier="city" row, same brandGroup.
 * - One contact point covering multiple cities in one province: one row,
 *   tier="city", with both cities listed in cities[].
 *
 * tier meanings:
 * - "national": this contact point covers all of Canada. provinces should
 *   list every province code; cities is [].
 * - "provincial": this contact point covers one or more whole provinces
 *   (every city in them). provinces lists those province codes; cities
 *   is [].
 * - "city": this contact point covers specific cities only. cities lists
 *   those city names; provinces lists the province code(s) those cities
 *   are in (for lookups/breadcrumbs), but the row does NOT match a
 *   province-wide search, only its listed cities.
 *
 * brandGroup is an optional shared identifier (e.g. a slug) linking
 * multiple rows that belong to the same underlying company, so the UI can
 * display them together without merging them into a single row.
 */
export type Business = {
  id: string;
  name: string;
  category: ServiceCategory;
  tier: "national" | "provincial" | "city";
  provinces: string[];
  cities: string[];
  brandGroup?: string;
  phone: string;
  website?: string;
  description: string;
  vettedSince: string;
};

function loadBusinesses(): Business[] {
  const data = BUSINESSES_JSON as Business[];
  for (const b of data) {
    if (!b.id || !b.name || !b.tier || !b.provinces || !b.cities) {
      throw new Error(
        `Invalid business entry in businesses.json: ${JSON.stringify(b)}`,
      );
    }
    if (b.tier === "city" && b.cities.length === 0) {
      throw new Error(
        `Business "${b.name}" has tier="city" but no cities listed.`,
      );
    }
    if (b.tier !== "city" && b.cities.length > 0) {
      throw new Error(
        `Business "${b.name}" has tier="${b.tier}" but lists cities; ` +
          `only tier="city" rows should populate cities[].`,
      );
    }
    if (b.provinces.length === 0) {
      throw new Error(`Business "${b.name}" has no provinces listed.`);
    }
  }
  return data;
}

export const BUSINESSES: Business[] = loadBusinesses();
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

function hasProvince(b: Business, provinceCode: string): boolean {
  const code = provinceCode.toLowerCase();
  return b.provinces.some((p) => p.toLowerCase() === code);
}

function hasCity(b: Business, city: string): boolean {
  const target = city.toLowerCase();
  return b.cities.some((c) => c.toLowerCase() === target);
}

/** National and provincial providers covering a given province (no city-tier rows). */
export function provincialBusinesses(provinceCode: string): Business[] {
  return BUSINESSES.filter(
    (b) => b.tier !== "city" && hasProvince(b, provinceCode),
  );
}

/**
 * Every business that serves a given city: city-tier rows listing that
 * city, plus provincial-tier rows covering its province, plus national
 * rows. Sorted city-tier first, then provincial, then national, per the
 * directory's "never hide broader results" rule.
 */
export function cityBusinesses(provinceCode: string, city: string): Business[] {
  const matches = BUSINESSES.filter((b) => {
    if (b.tier === "city") return hasCity(b, city);
    return hasProvince(b, provinceCode);
  });
  return sortByTier(matches);
}

export function categoryBusinesses(
  provinceCode: string,
  categorySlug: string,
): Business[] {
  const category = HELP_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return BUSINESSES.filter(
    (b) => hasProvince(b, provinceCode) && b.category === category.name,
  );
}

const TIER_ORDER: Record<Business["tier"], number> = {
  city: 0,
  provincial: 1,
  national: 2,
};

function sortByTier(list: Business[]): Business[] {
  return [...list].sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier]);
}

export type DirectoryFilters = {
  q?: string; // free-text search
  category?: string; // HelpCategory slug
  province?: string; // province code, any case
  city?: string; // city name, any case (matches Business.cities)
};

/**
 * The one query the directory UI runs. Reads straight from BUSINESSES, so a
 * listing added to the array is searchable with zero further code changes.
 *
 * Tier matching:
 * - national rows match any province/city filter.
 * - provincial rows match a province filter against provinces[], and match
 *   a city filter as long as the city's province is in provinces[].
 * - city rows match only a city filter against cities[] (and a province
 *   filter against provinces[]).
 *
 * When a city filter is active, results are sorted city-tier first, then
 * provincial, then national, so narrower matches lead without hiding
 * broader ones.
 */
export function searchBusinesses(filters: DirectoryFilters): Business[] {
  const q = filters.q?.trim().toLowerCase();
  const category = filters.category
    ? HELP_CATEGORIES.find((c) => c.slug === filters.category)?.name
    : undefined;
  const province = filters.province?.toLowerCase();
  const city = filters.city?.toLowerCase();

  // Resolve the filtered city to its province code, so a provincial row can
  // be matched by "does this row cover the city's province" even when the
  // UI didn't also pass an explicit province filter.
  const cityProvince = city
    ? PROVINCES.find((p) =>
        p.cities.some((c) => c.toLowerCase() === city),
      )?.code.toLowerCase()
    : undefined;

  const matches = BUSINESSES.filter((b) => {
    if (category && b.category !== category) return false;

    if (b.tier === "national") {
      // National rows always satisfy province/city filters.
    } else if (b.tier === "provincial") {
      if (province && !hasProvince(b, province)) return false;
      if (city && !(cityProvince && hasProvince(b, cityProvince))) return false;
    } else {
      // city tier
      if (province && !hasProvince(b, province)) return false;
      if (city && !hasCity(b, city)) return false;
    }

    if (q) {
      const haystack = [
        b.name,
        b.description,
        b.category,
        ...b.cities,
        ...b.provinces,
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  return city ? sortByTier(matches) : matches;
}

export function groupByCategory(list: Business[]): Record<string, Business[]> {
  const out: Record<string, Business[]> = {};
  for (const b of list) {
    (out[b.category] ||= []).push(b);
  }
  return out;
}
