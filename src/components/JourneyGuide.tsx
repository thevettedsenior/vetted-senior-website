import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plus, Printer } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { SourceNote } from "@/components/SourceNote";
import { JOURNEYS, SOURCES } from "@/lib/journeys";
import { useCarePlan } from "@/lib/care-plan";
type Step = { title: string; detail: string };
type Guide = {
  intro: string;
  note: string;
  question: string;
  steps: Step[];
  sources: (keyof typeof SOURCES)[];
};
const GUIDES: Record<string, Guide> = {
  "hospital-discharge-planning": {
    intro:
      "You don’t have to solve every long-term question today. Start with the handover, the journey home and who will be there.",
    note: "If your parent has just fallen, is injured or is in immediate danger, seek medical help. Call 911 in an emergency. This page helps you prepare once urgent needs are being addressed.",
    question:
      "“What needs to be in place for my parent to manage at home, and who is responsible for each part?”",
    steps: [
      {
        title: "Bring your parent into the plan.",
        detail:
          "Ask what matters to them, what feels difficult and who they want involved. With their agreement, choose one family contact to keep everyone informed.",
      },
      {
        title: "Ask for a discharge-planning conversation.",
        detail:
          "Speak to the hospital team before the move home. Explain practical concerns about stairs, meals, getting to the bathroom and time alone. Ask whether an Ontario Health atHome care coordinator should be involved.",
      },
      {
        title: "Leave with clear instructions and contacts.",
        detail:
          "Ask for written care instructions, an up-to-date medication list, follow-up appointments and a number to call with concerns. Ask the clinical team which changes need urgent attention.",
      },
      {
        title: "Confirm what will actually be ready.",
        detail:
          "Check transport, access to the home, equipment and the start dates of any arranged support. Ask who to contact if an expected service does not arrive. A referral is not a confirmed visit.",
      },
      {
        title: "Make the first few days manageable.",
        detail:
          "Agree who is doing each task and when. Identify any uncovered periods with the care team. Use the care-cost worksheet if private support is part of the plan; ask agencies about minimum visits and extra fees.",
      },
    ],
    sources: ["discharge", "athome", "homecare"],
  },
  "staying-at-home": {
    intro:
      "Start with the everyday: meals, getting dressed, getting out and being comfortable at home. The right mix of help begins with your parent’s preferences.",
    note: "Public support is assessed individually. Eligibility, service type and available hours must be confirmed by the care coordinator; a calculator cannot decide what someone qualifies for.",
    question:
      "“Which tasks are getting harder, what help would feel acceptable, and what would make the biggest difference?”",
    steps: [
      {
        title: "Map the tasks, together.",
        detail:
          "Talk through a usual day with your parent. Note what they do comfortably, where help would be welcome and when support is needed. Ask a health professional about tasks that need clinical or specialist input.",
      },
      {
        title: "Ask about a home-care assessment.",
        detail:
          "Contact Ontario Health atHome. A care coordinator assesses needs and eligibility and can discuss appropriate services. If support is already in place and needs have changed, ask for a reassessment.",
      },
      {
        title: "Look for community support.",
        detail:
          "Use 211 Ontario to explore local meals, transportation, social programs and other practical support. Ask the service directly about eligibility, fees, availability and how to apply.",
      },
      {
        title: "Be realistic about family help.",
        detail:
          "Agree on specific tasks and times each person can sustain. Include travel, work and rest. Build in a backup, and avoid counting two people as covering the same hour twice.",
      },
      {
        title: "Price the remaining gap.",
        detail:
          "Request written quotes for the tasks and hours still needed. Confirm minimum visit lengths, travel, weekend fees, tax if applicable and cancellation terms. Compare the same service schedule across providers.",
      },
    ],
    sources: ["homecare", "athome", "community"],
  },
  "dementia-concerns": {
    intro:
      "Changes in memory deserve a conversation, not an assumption. Your first job is to notice, listen and help prepare for a professional assessment.",
    note: "Sudden new confusion needs immediate medical attention. Call 911 in an emergency. For gradual memory concerns, arrange a primary-care appointment; Health811 can help with non-emergency health questions.",
    question:
      "“I’ve noticed a few things and wondered how they feel to you. Would it help if we talked to someone together?”",
    steps: [
      {
        title: "Start with a calm conversation.",
        detail:
          "Choose a familiar setting and describe what you have noticed without labelling it. Listen to your parent’s perspective and ask what help, if any, they would welcome.",
      },
      {
        title: "Write down useful observations.",
        detail:
          "Prepare a few dated examples of changes and their effect on everyday life, plus questions for the appointment. Keep private health details in a secure place; this site’s plan is for general next steps only.",
      },
      {
        title: "Arrange a primary-care conversation.",
        detail:
          "Contact your parent’s family doctor or nurse practitioner about the concerns. With your parent’s agreement, ask how you can contribute observations and what to bring. The clinician determines the appropriate assessment.",
      },
      {
        title: "Connect with the Alzheimer Society.",
        detail:
          "Ask the local Alzheimer Society what support fits your situation. First Link connects people living with dementia and their families with information and community support. Ask the care team about a referral.",
      },
      {
        title: "Ask about the practical next questions.",
        detail:
          "Discuss any concerns about medicines, driving or being alone with the appropriate professional. Ask your parent about their wishes and who they want involved. Seek qualified legal advice if decision-making documents need attention.",
      },
    ],
    sources: ["assessment", "memory", "sudden", "health811"],
  },
};
export function JourneyGuide({ slug }: { slug: string }) {
  const journey = JOURNEYS.find((j) => j.slug === slug)!;
  const guide = GUIDES[slug];
  const plan = useCarePlan();
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <div className="tvs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/situations">Start here</Link>
            <span>/ {journey.label}</span>
          </div>
          <p className="tvs-kicker">
            {journey.number} / {journey.label} · Ontario
          </p>
          <h1>{journey.title}</h1>
          <p>{guide.intro}</p>
          <p className="tvs-byline">
            Published by The Vetted Senior ·{" "}
            <Link to="/founder">Meet our founder</Link>
          </p>
          <div className="tvs-actions no-print">
            <Link className="tvs-text-link" to="/my-plan">
              See my next steps
              <ArrowRight size={18} />
            </Link>
            <button
              className="tvs-text-link"
              type="button"
              onClick={() => window.print()}
            >
              <Printer size={17} />
              Print this guide
            </button>
          </div>
        </div>
        <div className="tvs-page-layout">
          <div>
            <div className="tvs-callout">{guide.note}</div>
            <p className="tvs-kicker">A few things to do next</p>
            <ol className="tvs-steps">
              {guide.steps.map((step, i) => {
                const id = `${slug}-${i}`;
                const saved = plan.items.some((x) => x.id === id);
                return (
                  <li key={id} className="tvs-step">
                    <span className="tvs-step-number" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <div>
                      <h2>{step.title}</h2>
                      <p>{step.detail}</p>
                      <button
                        className="tvs-add-step no-print"
                        type="button"
                        disabled={!plan.ready}
                        aria-pressed={saved}
                        onClick={() =>
                          saved
                            ? plan.remove(id)
                            : plan.add({
                                id,
                                title: step.title,
                                detail: step.detail,
                              })
                        }
                      >
                        {saved ? <Check size={16} /> : <Plus size={16} />}{" "}
                        {saved
                          ? "Added to my next steps"
                          : "Add to my next steps"}
                        <span className="sr-only">: {step.title}</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="tvs-status no-print" role="status">
              {plan.ready &&
                (plan.persistent
                  ? `${plan.items.length} step${plan.items.length === 1 ? "" : "s"} saved on this device.`
                  : "Browser storage is unavailable. Your steps will last for this visit only; print them before leaving.")}
            </p>
            <SourceNote sources={guide.sources} />
            <div className="tvs-callout no-print">
              <strong>Keep going, at your own pace.</strong>
              <p>
                Read the{" "}
                <Link
                  to="/help/$category/$article"
                  params={{
                    category: "home-care",
                    article: "home-care-costs-ontario",
                  }}
                >
                  Ontario home care cost guide
                </Link>{" "}
                or <Link to="/guides">browse the family guides</Link>.
              </p>
            </div>
          </div>
          <aside className="tvs-aside">
            <p className="tvs-kicker">Words to get you started</p>
            <h2>You can ask…</h2>
            <blockquote className="tvs-quote">{guide.question}</blockquote>
            <hr />
            <p className="tvs-kicker">Your Ontario starting point</p>
            {slug === "dementia-concerns" ? (
              <>
                <p>
                  <strong>Alzheimer Society</strong>
                  <br />
                  Information and local support for people living with dementia
                  and their families.
                </p>
                <a
                  href={SOURCES.memory.url}
                  className="tvs-text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore First Link ↗
                </a>
              </>
            ) : (
              <>
                <p>
                  <strong>Ontario Health atHome</strong>
                  <br />
                  Ask about an assessment, existing care or your next contact.
                </p>
                <a className="tvs-text-link" href="tel:18335151234">
                  Call 1-833-515-1234
                </a>
              </>
            )}
            <hr />
            <Link to="/care-costs" className="tvs-text-link">
              Work out the care costs
              <ArrowRight size={17} />
            </Link>
            <Link to="/local-help" className="tvs-text-link">
              Find local help
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </div>
    </Page>
  );
}
