import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Printer, Trash2 } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { useCarePlan } from "@/lib/care-plan";
export const Route = createFileRoute("/my-plan")({
  head: () => ({
    meta: [
      { title: "My next steps | The Vetted Senior" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MyPlan,
});
function MyPlan() {
  const plan = useCarePlan();
  const completed = plan.items.filter((x) => x.done).length;
  return (
    <Page>
      <div className="tvs-wrap">
        <p className="tvs-print-heading">
          The Vetted Senior · Family next steps
        </p>
        <div className="tvs-page-intro">
          <p className="tvs-kicker">One thing at a time</p>
          <h1>My next steps.</h1>
          <p>
            A small, practical list for the conversations ahead. Print it, share
            the paper with family, and decide together who can take on each
            step.
          </p>
        </div>
        <div className="tvs-page-layout">
          <div>
            {!plan.ready ? (
              <p role="status">Loading your saved steps…</p>
            ) : plan.items.length === 0 ? (
              <div className="tvs-empty">
                <h2>Your next chapter starts with one step.</h2>
                <p>
                  Choose a situation and add the steps that matter to your
                  family. You can also add a budget from the care-cost planner.
                </p>
                <Link className="tvs-button" to="/situations">
                  Find my starting point
                  <ArrowRight size={18} />
                </Link>
              </div>
            ) : (
              <>
                <div className="tvs-plan-summary">
                  <span role="status">
                    {completed} of {plan.items.length} steps complete
                  </span>
                  <button
                    className="tvs-text-link no-print"
                    type="button"
                    onClick={() => window.print()}
                  >
                    <Printer size={17} />
                    Print my plan
                  </button>
                </div>
                <div>
                  {plan.items.map((item, i) => (
                    <div
                      key={item.id}
                      className={`tvs-plan-row ${item.done ? "done" : ""}`}
                    >
                      <input
                        id={`plan-${i}`}
                        type="checkbox"
                        checked={item.done}
                        onChange={() => plan.toggle(item.id)}
                      />
                      <div>
                        <label htmlFor={`plan-${i}`}>{item.title}</label>
                        <p>{item.detail}</p>
                      </div>
                      <button
                        className="tvs-icon-button no-print"
                        type="button"
                        aria-label={`Remove: ${item.title}`}
                        onClick={() => plan.remove(item.id)}
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  ))}
                </div>
                <Link to="/situations" className="tvs-text-link no-print">
                  Add another next step
                  <ArrowRight size={17} />
                </Link>
              </>
            )}
          </div>
          <aside className="tvs-aside">
            <p className="tvs-kicker">A note about your plan</p>
            <h2>Yours to keep. Yours to clear.</h2>
            <p>
              {!plan.ready
                ? "Checking device storage…"
                : plan.persistent
                  ? "Your list is saved only in this browser on this device. There is no account or cloud backup. Clearing browser data will remove it."
                  : "Your browser is blocking storage. Steps are available for this visit only. Print your list before leaving."}
            </p>
            <p>
              Anyone using this browser may see the plan. Keep names, diagnoses
              and other private details out of it.
            </p>
            <hr />
            <p>
              These steps help you prepare. They don’t replace a care plan
              agreed with your parent and the professionals involved.
            </p>
            <Link to="/privacy" className="tvs-text-link">
              Read our privacy approach
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </div>
    </Page>
  );
}
