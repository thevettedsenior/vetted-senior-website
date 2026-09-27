import { EMPTY, type CostInputs } from "./care-costs";

export const HOME_SUPPORT_KEY = "tvs-home-support-v1";
export const MAX_SUPPORT_ENTRIES = 28;
export const HOME_SUPPORT_REVIEWED = "27 September 2026";
export const SUPPORT_TASKS = [
  {
    id: "meals",
    title: "Meals & groceries",
    description: "Shopping, preparing food or arranging meals.",
    prompt:
      "Would help with shopping or cooking be welcome? Ask community services about meal options, delivery areas and fees.",
    category: "meals-nutrition",
  },
  {
    id: "personal",
    title: "Personal care",
    description: "Getting dressed, bathing or using the bathroom.",
    prompt:
      "Ask a care coordinator what support and skills these tasks require. Agree on help that respects your parent’s comfort and privacy.",
    category: "home-care",
  },
  {
    id: "transport",
    title: "Transport & appointments",
    description: "Getting to appointments and everyday outings.",
    prompt:
      "Ask about the full journey: booking, door-to-door assistance, the return trip and the fare. A ride does not always include someone staying for the appointment.",
    category: "transportation",
  },
  {
    id: "company",
    title: "Company & check-ins",
    description: "Conversation, visits and social connection.",
    prompt:
      "Start with the people and activities your parent enjoys. Ask about friendly visiting or local social programmes, and agree what a check-in should cover.",
    category: "companion-social",
  },
  {
    id: "household",
    title: "Household jobs",
    description: "Cleaning, laundry and practical upkeep.",
    prompt:
      "Separate everyday jobs from repairs or specialist work. Confirm the exact tasks, equipment and charges before arranging help.",
    category: "home-maintenance",
  },
  {
    id: "breaks",
    title: "Caregiver breaks",
    description: "Reliable cover so the person helping can rest.",
    prompt:
      "Name the time that needs covering and the tasks involved. Ask Ontario Health atHome or a community service about respite options and availability.",
    category: "home-care",
  },
] as const;
export type SupportTaskId = (typeof SUPPORT_TASKS)[number]["id"];
export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;
export type Day = (typeof DAYS)[number];
export const TIMES = [
  "Morning",
  "Afternoon",
  "Evening",
  "Overnight",
  "Flexible, by agreement",
] as const;
export type SupportTime = "" | (typeof TIMES)[number];
export const COVERAGE = {
  unarranged: "Still to arrange",
  family: "Family / friend agreed",
  public: "Public home care confirmed",
  community: "Community service confirmed",
  paid: "Paid help confirmed",
} as const;
export type Coverage = keyof typeof COVERAGE;
export type SupportEntry = {
  id: string;
  task: SupportTaskId;
  days: Day[];
  time: SupportTime;
  minutes: string;
  coverage: Coverage;
  who: string;
};
export type HomeSupportDraft = {
  version: 1;
  priorities: SupportTaskId[];
  entries: SupportEntry[];
};
export function emptyHomeSupport(): HomeSupportDraft {
  return { version: 1, priorities: [], entries: [] };
}
export function taskFor(id: SupportTaskId) {
  return SUPPORT_TASKS.find((t) => t.id === id)!;
}
export function newSupportEntry(task: SupportTaskId): SupportEntry {
  return {
    id: crypto.randomUUID(),
    task,
    days: [],
    time: "",
    minutes: "",
    coverage: "unarranged",
    who: "",
  };
}
const isRecord = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === "object" && !Array.isArray(value);
const isTask = (value: unknown): value is SupportTaskId =>
  SUPPORT_TASKS.some((t) => t.id === value);
const isDay = (value: unknown): value is Day => DAYS.some((d) => d === value);
export function isSupportId(value: unknown): value is string {
  return typeof value === "string" && /^[a-zA-Z0-9-]{1,64}$/.test(value);
}
/** Treat browser storage as untrusted. Unknown versions and malformed rows are discarded. */
export function parseHomeSupport(value: unknown): HomeSupportDraft {
  if (!isRecord(value) || value.version !== 1) return emptyHomeSupport();
  const priorities = Array.isArray(value.priorities)
    ? [...new Set(value.priorities.filter(isTask))]
    : [];
  const entries: SupportEntry[] = [];
  if (Array.isArray(value.entries))
    for (const row of value.entries) {
      if (
        !isRecord(row) ||
        !isSupportId(row.id) ||
        !isTask(row.task) ||
        entries.some((e) => e.id === row.id)
      )
        continue;
      if (!Array.isArray(row.days) || !row.days.every(isDay)) continue;
      if (row.time !== "" && !TIMES.some((t) => t === row.time)) continue;
      if (
        typeof row.minutes !== "string" ||
        row.minutes.length > 8 ||
        typeof row.who !== "string" ||
        row.who.length > 60
      )
        continue;
      if (
        typeof row.coverage !== "string" ||
        !Object.hasOwn(COVERAGE, row.coverage)
      )
        continue;
      entries.push({
        id: row.id,
        task: row.task,
        days: DAYS.filter((d) => (row.days as Day[]).includes(d)),
        time: row.time as SupportTime,
        minutes: row.minutes,
        coverage: row.coverage as Coverage,
        who: row.who,
      });
      if (entries.length === MAX_SUPPORT_ENTRIES) break;
    }
  return { version: 1, priorities, entries };
}
export function supportEntryIssues(entry: SupportEntry) {
  const issues: string[] = [];
  if (!entry.days.length) issues.push("Choose at least one day.");
  if (!entry.time) issues.push("Choose a time of day.");
  if (!validSupportMinutes(entry.minutes))
    issues.push(
      "Enter 1 to 1,440 minutes per visit, or leave the time blank until you know.",
    );
  return issues;
}
export function validSupportMinutes(minutes: string) {
  return (
    /^\d{1,4}(\.\d{1,2})?$/.test(minutes) &&
    Number(minutes) >= 1 &&
    Number(minutes) <= 1440
  );
}

export const HOME_SUPPORT_STEPS = [
  {
    title: "Map the tasks, together.",
    detail:
      "Talk through a usual day with your parent. Note where help would be welcome and when it is needed. Ask a health professional about tasks that need clinical or specialist input.",
  },
  {
    title: "Ask about a home-care assessment.",
    detail:
      "Contact Ontario Health atHome about an assessment of needs and eligibility. If support is already in place and needs have changed, ask for a reassessment.",
  },
  {
    title: "Look for community support.",
    detail:
      "Use 211 Ontario to explore local meals, transportation, social programmes and practical support. Ask each service about eligibility, fees, availability and how to apply.",
  },
  {
    title: "Be realistic about family help.",
    detail:
      "Agree specific tasks and times each person can sustain. Include travel, work and rest. Build in a backup and avoid counting the same visit twice.",
  },
  {
    title: "Price the remaining gap.",
    detail:
      "Request written quotes for the tasks and visits still needed. Confirm minimum visit lengths, travel, weekend fees, applicable tax and cancellation terms. Compare the same schedule across providers.",
  },
] as const;
export function weeklyHours(entry: SupportEntry): number | null {
  if (supportEntryIssues(entry).length) return null;
  return Number(((Number(entry.minutes) * entry.days.length) / 60).toFixed(4));
}
export function canPriceEntry(entry: SupportEntry) {
  return entry.coverage === "unarranged" || entry.coverage === "paid";
}
/** Price one service; never subtract a different task's public or family hours. */
export function costInputsForEntry(entry: SupportEntry): CostInputs | null {
  const hours = weeklyHours(entry);
  if (hours === null || !canPriceEntry(entry)) return null;
  return {
    ...EMPTY,
    needed: String(hours),
    publicHours: "0",
    familyHours: "0",
    visits: String(entry.days.length),
    rate: "",
    minimum: "",
  };
}
export function entrySchedule(entry: SupportEntry) {
  const days =
    entry.days.length === 7
      ? "Every day"
      : entry.days.map((d) => d.slice(0, 3)).join(", ");
  return [days || "Days to confirm", entry.time || "Time to confirm"].join(
    " · ",
  );
}
