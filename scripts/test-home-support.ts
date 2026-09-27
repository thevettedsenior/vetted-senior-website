import assert from "node:assert/strict";
import { calculateCareCost } from "../src/lib/care-costs";
import {
  costInputsForEntry,
  emptyHomeSupport,
  parseHomeSupport,
  supportEntryIssues,
  weeklyHours,
  MAX_SUPPORT_ENTRIES,
  type SupportEntry,
} from "../src/lib/home-support";

const row: SupportEntry = {
  id: "sample-entry",
  task: "meals",
  days: ["Monday", "Wednesday", "Friday"],
  time: "Morning",
  minutes: "30",
  coverage: "unarranged",
  who: "",
};
let checks = 0;
function check(name: string, fn: () => void) {
  fn();
  checks++;
  console.log(`PASS ${name}`);
}
check(
  "Three half-hour visits transfer 1.5 hours and three visits, with no invented rate or minimum",
  () => {
    const input = costInputsForEntry(row)!;
    assert.equal(input.needed, "1.5");
    assert.equal(input.visits, "3");
    assert.equal(input.rate, "");
    assert.equal(input.minimum, "");
    assert.equal(input.publicHours, "0");
    assert.equal(input.familyHours, "0");
    assert.equal(calculateCareCost(input).valid, false);
  },
);
check("Provider minimums apply to the entered visits", () => {
  const result = calculateCareCost({
    ...costInputsForEntry(row)!,
    rate: "40",
    minimum: "2",
  });
  assert.equal(result.valid, true);
  assert.equal(result.billed, 6);
  assert.equal(result.monthly, 1040);
});
check("Confirmed paid support can still be priced", () =>
  assert(costInputsForEntry({ ...row, coverage: "paid" })),
);
check(
  "Family, public and community entries cannot become an unrelated paid-care gap",
  () => {
    for (const coverage of ["family", "public", "community"] as const)
      assert.equal(costInputsForEntry({ ...row, coverage }), null);
  },
);
check("Unknown days or time prevent the transfer", () => {
  assert.equal(costInputsForEntry({ ...row, days: [] }), null);
  assert.equal(costInputsForEntry({ ...row, time: "" }), null);
});
check("Invalid or missing durations cannot yield a misleading estimate", () => {
  for (const minutes of [
    "",
    "0",
    "-1",
    "1441",
    "Infinity",
    "NaN",
    "1e2",
    "0x20",
    " ",
  ]) {
    assert(supportEntryIssues({ ...row, minutes }).length);
    assert.equal(weeklyHours({ ...row, minutes }), null);
  }
});
check(
  "Daily visits have seven visits, not four assumed weeks per month",
  () => {
    const daily = {
      ...row,
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ] as SupportEntry["days"],
      minutes: "60",
    };
    const result = calculateCareCost({
      ...costInputsForEntry(daily)!,
      rate: "30",
      minimum: "0",
    });
    assert.equal(result.billed, 7);
    assert.equal(result.monthly, 910);
  },
);
check("An unsupported stored schema resets safely", () => {
  for (const value of [null, [], "invalid", { version: 2, entries: [row] }])
    assert.deepEqual(parseHomeSupport(value), emptyHomeSupport());
});
check("Stored days and priorities are deduplicated", () => {
  const parsed = parseHomeSupport({
    version: 1,
    priorities: ["meals", "meals", "bad"],
    entries: [{ ...row, days: ["Friday", "Monday", "Monday"] }],
  });
  assert.deepEqual(parsed.priorities, ["meals"]);
  assert.deepEqual(parsed.entries[0].days, ["Monday", "Friday"]);
});
check(
  "Malformed stored rows and duplicate IDs do not enter calculations",
  () => {
    const parsed = parseHomeSupport({
      version: 1,
      entries: [
        row,
        row,
        { ...row, id: "bad-time", time: "Whenever" },
        { ...row, id: "bad-day", days: ["Someday"] },
        { ...row, id: "bad-owner", who: "x".repeat(61) },
        { ...row, id: "bad-coverage", coverage: "__proto__" },
      ],
    });
    assert.equal(parsed.entries.length, 1);
  },
);
check("Stored worksheet size is bounded", () => {
  const parsed = parseHomeSupport({
    version: 1,
    entries: Array.from({ length: 100 }, (_, i) => ({
      ...row,
      id: `row-${i}`,
    })),
  });
  assert.equal(parsed.entries.length, MAX_SUPPORT_ENTRIES);
});
check("Each service keeps its own duration and quote inputs", () => {
  const other = {
    ...row,
    id: "other",
    task: "personal" as const,
    minutes: "60",
  };
  assert.equal(costInputsForEntry(row)!.needed, "1.5");
  assert.equal(costInputsForEntry(other)!.needed, "3");
});
console.log(`${checks} home-support checks passed.`);
