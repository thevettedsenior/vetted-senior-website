export type CostInputs = {
  needed: string;
  publicHours: string;
  familyHours: string;
  rate: string;
  visits: string;
  minimum: string;
  extras: string;
  tax: string;
};
export const EXAMPLE: CostInputs = {
  needed: "20",
  publicHours: "4",
  familyHours: "6",
  rate: "40",
  visits: "5",
  minimum: "2",
  extras: "0",
  tax: "0",
};
export const EMPTY: CostInputs = {
  needed: "",
  publicHours: "0",
  familyHours: "0",
  rate: "",
  visits: "",
  minimum: "0",
  extras: "0",
  tax: "0",
};
export function calculateCareCost(input: CostInputs) {
  const values = Object.fromEntries(
    Object.entries(input).map(([k, v]) => [
      k,
      v.trim() === "" ? NaN : Number(v),
    ]),
  ) as Record<keyof CostInputs, number>;
  const {
    needed,
    publicHours,
    familyHours,
    rate,
    visits,
    minimum,
    extras,
    tax,
  } = values;
  const errors: string[] = [];
  if (Object.values(values).some((n) => !Number.isFinite(n) || n < 0))
    errors.push("Enter a number of zero or more in every field.");
  if (needed > 168 || publicHours > 168 || familyHours > 168)
    errors.push("Weekly hours cannot exceed 168.");
  if (publicHours + familyHours > needed)
    errors.push(
      "Public and family hours exceed the total needed. Check for overlapping hours.",
    );
  if (visits > 168 || !Number.isInteger(visits))
    errors.push("Use a whole number of visits between 0 and 168.");
  if (minimum > 24) errors.push("A minimum visit cannot exceed 24 hours.");
  if (tax > 100)
    errors.push("Check the tax percentage; it cannot exceed 100%.");
  if (rate > 10000 || extras > 1000000)
    errors.push("Please check the rate and extra-cost figures.");
  const gap = Math.max(0, needed - publicHours - familyHours);
  if (gap > 0 && visits === 0)
    errors.push("Enter at least one weekly visit for the paid hours you need.");
  if (gap > 0 && rate === 0)
    errors.push("Enter the hourly quote for paid care.");
  const billed = gap === 0 ? 0 : Math.max(gap, visits * minimum);
  if (billed > 168)
    errors.push(
      "The visit minimums add up to more than 168 hours a week. Check the schedule.",
    );
  const weekly = billed * rate;
  const monthlyCare = (weekly * 52) / 12;
  const subtotal = monthlyCare + extras;
  const monthly = subtotal * (1 + tax / 100);
  return {
    valid: errors.length === 0,
    errors: [...new Set(errors)],
    gap,
    billed,
    weekly,
    monthlyCare,
    extras,
    monthly,
    taxAmount: (subtotal * tax) / 100,
  };
}
export const cad = (n: number) =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(n);
