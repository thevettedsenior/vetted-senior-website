import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bookmark, Printer } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { SourceNote } from "@/components/SourceNote";
import {
  calculateCareCost,
  EXAMPLE,
  EMPTY,
  cad,
  type CostInputs,
} from "@/lib/care-costs";
import { useCarePlan } from "@/lib/care-plan";
export const Route = createFileRoute("/care-costs")({
  head: () => ({
    meta: [
      { title: "Care cost planner | The Vetted Senior" },
      {
        name: "description",
        content:
          "Estimate a care-at-home budget using confirmed support, family help, provider quotes and minimum visit hours. Ontario planning guidance.",
      },
    ],
  }),
  component: CareCosts,
});
function CareCosts() {
  const [input, setInput] = useState<CostInputs>(EXAMPLE);
  const [status, setStatus] = useState("");
  const plan = useCarePlan();
  const result = calculateCareCost(input);
  const field = (
    key: keyof CostInputs,
    label: string,
    hint: string,
    step = "any",
  ) => (
    <div className="tvs-field">
      <label htmlFor={`cost-${key}`}>{label}</label>
      <input
        id={`cost-${key}`}
        name={key}
        type="number"
        min="0"
        step={step}
        inputMode="decimal"
        value={input[key]}
        onChange={(e) => {
          setInput({ ...input, [key]: e.target.value });
          setStatus("");
        }}
        aria-describedby={`hint-${key}`}
      />
      <small id={`hint-${key}`}>{hint}</small>
    </div>
  );
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <p className="tvs-kicker">A little less guesswork</p>
          <h1>
            What might help
            <br />
            at home cost?
          </h1>
          <p>
            Put the support you need, the help already arranged and a provider’s
            quote in one place. This is a planning worksheet, not an assessment
            or a promise of funding.
          </p>
        </div>
        <div className="tvs-page-layout">
          <div>
            <div className="tvs-callout">
              <strong>Start with an example, then use your own numbers.</strong>{" "}
              The $40 hourly rate and all starting figures are illustrative
              assumptions, not researched Ontario averages. Ask providers for
              written quotes.
            </div>
            <div className="tvs-tool-box">
              <div className="tvs-tool-heading">
                <h2>Your weekly care picture</h2>
                <a className="tvs-text-link no-print" href="#care-estimate">
                  View estimate ↓
                </a>
                <button
                  className="tvs-text-link no-print"
                  type="button"
                  onClick={() => {
                    setInput(EMPTY);
                    setStatus("Fields cleared. Enter your own numbers.");
                  }}
                >
                  Clear example
                </button>
              </div>
              <div className="tvs-form-section">
                <h3>1. What support is needed?</h3>
                <div className="tvs-field-grid">
                  {field(
                    "needed",
                    "Total support hours / week",
                    "Discuss the type and amount of support with the care team.",
                  )}
                  {field(
                    "publicHours",
                    "Confirmed public care hours / week",
                    "Use only hours actually arranged, with a start date.",
                  )}
                  {field(
                    "familyHours",
                    "Family or unpaid help hours / week",
                    "Count sustainable, non-overlapping hours.",
                  )}
                </div>
              </div>
              <div className="tvs-form-section">
                <h3>2. What does the provider charge?</h3>
                <div className="tvs-field-grid">
                  {field(
                    "rate",
                    "Quoted hourly rate (CAD)",
                    "Use a quote for the service you need.",
                  )}
                  {field(
                    "visits",
                    "Paid visits / week",
                    "The schedule you would book.",
                    "1",
                  )}
                  {field(
                    "minimum",
                    "Minimum billed hours / visit",
                    "Use 0 if there is no minimum.",
                  )}
                  {field(
                    "extras",
                    "Other monthly charges (CAD)",
                    "For example: transport, equipment or booking fees.",
                  )}
                  {field(
                    "tax",
                    "Tax to add (%)",
                    "Confirm if applicable. Use 0 if already included or not charged.",
                  )}
                </div>
              </div>
            </div>
          </div>
          <aside
            id="care-estimate"
            className="tvs-results-column"
            tabIndex={-1}
          >
            <div
              className="tvs-cost-result"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="tvs-kicker">Your planning estimate</p>
              <h2>Monthly paid support</h2>
              {result.valid ? (
                <>
                  <output aria-label="Estimated monthly cost">
                    {cad(result.monthly)}
                  </output>
                  <p>CAD / month · based on your entries</p>
                  <dl className="tvs-cost-breakdown">
                    <div>
                      <dt>Support still to arrange</dt>
                      <dd>{Number(result.gap.toFixed(2))} hr/wk</dd>
                    </div>
                    <div>
                      <dt>Hours billed with minimums</dt>
                      <dd>{Number(result.billed.toFixed(2))} hr/wk</dd>
                    </div>
                    <div>
                      <dt>Weekly care cost</dt>
                      <dd>{cad(result.weekly)}</dd>
                    </div>
                    <div>
                      <dt>Monthly care (52 weeks ÷ 12)</dt>
                      <dd>{cad(result.monthlyCare)}</dd>
                    </div>
                    <div>
                      <dt>Other monthly charges</dt>
                      <dd>{cad(result.extras)}</dd>
                    </div>
                    <div>
                      <dt>Tax entered</dt>
                      <dd>{cad(result.taxAmount)}</dd>
                    </div>
                  </dl>
                  <p>
                    {result.gap === 0
                      ? "Your entered hours cover the stated total. Confirm that the right tasks, timing and backup are covered; zero paid hours does not establish that care needs are met."
                      : result.billed > result.gap
                        ? "The provider’s minimum visit length increases the hours you would pay for."
                        : "Paid hours reflect the gap in your entered schedule."}
                  </p>
                </>
              ) : (
                <>
                  <output aria-label="Estimate unavailable">—</output>
                  <p>Complete or correct the figures to see an estimate.</p>
                </>
              )}
            </div>
            {!result.valid && (
              <div className="tvs-form-error" role="status">
                {result.errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <p className="tvs-help-note">
              The same hourly rate is used for all billed hours. Tax, if
              entered, applies to care and extras together. Use separate quotes
              if charges have different tax treatment. Totals are rounded for
              display.
            </p>
            <div className="tvs-actions no-print">
              <button
                type="button"
                className="tvs-button"
                disabled={!result.valid || !plan.ready}
                onClick={() => {
                  plan.add({
                    id: "care-budget",
                    title: `Review a care budget of ${cad(result.monthly)} per month`,
                    detail: `Planning assumption: ${input.needed} total hr/wk, ${input.publicHours} confirmed public, ${input.familyHours} family; ${Number(result.billed.toFixed(2))} billed hr/wk at $${input.rate}/hr; $${input.extras}/month extras and ${input.tax}% added tax. Confirm all quotes, tasks and availability.`,
                  });
                  setStatus("Budget added to My next steps.");
                }}
              >
                <Bookmark size={17} />
                Add budget to my plan
              </button>
              <button
                type="button"
                className="tvs-text-link"
                onClick={() => window.print()}
              >
                <Printer size={17} />
                Print worksheet
              </button>
            </div>
            <p className="tvs-status" role="status">
              {status}
            </p>
            {!plan.persistent && (
              <p className="tvs-help-note">
                Storage is unavailable. Print your plan to keep it.
              </p>
            )}
            <Link to="/local-help" className="tvs-text-link">
              Find the right starting point
              <ArrowRight size={17} />
            </Link>
          </aside>
          <div className="tvs-cost-reading">
            <div className="tvs-prose">
              <h2>Before you commit</h2>
              <ul>
                <li>
                  Confirm that public care and family help cover the tasks and
                  times your parent actually needs.
                </li>
                <li>
                  Ask about minimum visits, travel, evenings, weekends and
                  cancellation fees.
                </li>
                <li>
                  Get a separate quote for overnight, live-in or specialist
                  care. An hourly worksheet may not fit those arrangements.
                </li>
                <li>
                  Compare options and the available budget before considering
                  borrowing. This tool does not recommend a financial product.
                </li>
              </ul>
            </div>
            <SourceNote sources={["homecare", "athome"]} />
          </div>
        </div>
      </div>
    </Page>
  );
}
