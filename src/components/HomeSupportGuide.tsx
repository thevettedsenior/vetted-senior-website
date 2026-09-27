import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown, Plus, Printer, Trash2 } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { SourceNote } from "@/components/SourceNote";
import { useHomeSupportPlan } from "@/hooks/useHomeSupportPlan";
import { useCarePlan } from "@/lib/care-plan";
import { SOURCES } from "@/lib/journeys";
import {
  SUPPORT_TASKS,
  DAYS,
  TIMES,
  COVERAGE,
  MAX_SUPPORT_ENTRIES,
  HOME_SUPPORT_REVIEWED,
  newSupportEntry,
  taskFor,
  entrySchedule,
  supportEntryIssues,
  weeklyHours,
  canPriceEntry,
  validSupportMinutes,
  HOME_SUPPORT_STEPS,
  type SupportEntry,
  type SupportTaskId,
  type Coverage,
  type SupportTime,
} from "@/lib/home-support";

function goToWeek() {
  requestAnimationFrame(() => document.getElementById("weekly-plan")?.focus());
}

export function HomeSupportGuide() {
  const { draft, ready, persistent, update, clear } = useHomeSupportPlan();
  const [status, setStatus] = useState("");
  const [clearPending, setClearPending] = useState(false);
  const [nextTask, setNextTask] = useState<SupportTaskId>("meals");
  const [undo, setUndo] = useState<SupportEntry | null>(null);
  const unarranged = draft.entries.filter(
    (e) => e.coverage === "unarranged",
  ).length;
  const incomplete = draft.entries.filter(
    (e) => supportEntryIssues(e).length,
  ).length;
  const full = draft.entries.length >= MAX_SUPPORT_ENTRIES;
  function addSelected() {
    const missing = draft.priorities.filter(
      (task) => !draft.entries.some((e) => e.task === task),
    );
    const rows = missing
      .slice(0, MAX_SUPPORT_ENTRIES - draft.entries.length)
      .map(newSupportEntry);
    update((current) => ({
      ...current,
      entries: [...current.entries, ...rows],
    }));
    setStatus(
      rows.length
        ? `${rows.length} task ${rows.length === 1 ? "entry added" : "entries added"}. Add the days, time and support below.`
        : "Your chosen tasks are already in your week. You can add another visit below.",
    );
    goToWeek();
  }
  return (
    <Page>
      <div className="tvs-wrap tvs-home-guide">
        <div className="tvs-page-intro tvs-home-intro">
          <div className="tvs-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/situations">Start here</Link>
            <span>/ Help at home</span>
          </div>
          <p className="tvs-kicker">02 / Help at home · Ontario</p>
          <h1>
            They need more help.
            <br />
            What can we afford?
          </h1>
          <p>
            Start with the parts of everyday life your parent wants to keep
            doing. Choose what needs support, explore the options, then put a
            manageable week on paper.
          </p>
          <p className="tvs-byline">
            A free family planning tool · No account needed
            <br />
            Published by The Vetted Senior ·{" "}
            <Link to="/founder">Meet our founder</Link>
          </p>
        </div>
        <nav
          className="tvs-home-nav no-print"
          aria-label="Help at home sections"
        >
          <a href="#choose-support">
            <span>01</span> What needs a hand?
          </a>
          <a href="#support-options">
            <span>02</span> Who could help?
          </a>
          <a href="#weekly-plan">
            <span>03</span> Build a week
          </a>
        </nav>
        <div className="tvs-home-question no-print">
          <p className="tvs-kicker">Begin with your parent</p>
          <blockquote>
            “Which parts of the day would you welcome a little help with?”
          </blockquote>
          <p>
            Their preferences, routines, language and comfort belong in the
            plan. For personal or clinical care, ask the care team what skills
            and support are needed.
          </p>
        </div>

        <section
          className="tvs-home-section tvs-home-start"
          aria-labelledby="choose-support"
        >
          <div className="tvs-home-section-heading">
            <p className="tvs-kicker">01 / Notice the everyday</p>
            <h2 id="choose-support" tabIndex={-1}>
              What’s getting harder?
            </h2>
            <p>
              Choose the tasks you want to talk through. Start with one or two;
              you can come back to the rest.
            </p>
          </div>
          <fieldset className="tvs-task-choices" disabled={!ready}>
            <legend className="sr-only">Tasks to plan together</legend>
            {SUPPORT_TASKS.map((task) => (
              <label key={task.id} className="tvs-task-choice">
                <input
                  type="checkbox"
                  checked={draft.priorities.includes(task.id)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    update((current) => ({
                      ...current,
                      priorities: checked
                        ? [...current.priorities, task.id]
                        : current.priorities.filter((id) => id !== task.id),
                    }));
                  }}
                />
                <span>
                  <strong>{task.title}</strong>
                  <span>{task.description}</span>
                </span>
              </label>
            ))}
          </fieldset>
          {draft.priorities.length > 0 && (
            <div className="tvs-task-prompts">
              <h3>A starting question for each task.</h3>
              {SUPPORT_TASKS.filter((t) => draft.priorities.includes(t.id)).map(
                (task) => (
                  <div key={task.id}>
                    <h4>{task.title}</h4>
                    <p>{task.prompt}</p>
                    <Link
                      to="/help/$category"
                      params={{ category: task.category }}
                    >
                      Explore {task.title.toLowerCase()}{" "}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                ),
              )}
            </div>
          )}
          <div className="tvs-actions">
            <button
              type="button"
              className="tvs-button"
              disabled={!ready || !draft.priorities.length || full}
              onClick={addSelected}
            >
              Start my weekly plan <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="tvs-text-link" href="#support-options">
              Compare the ways to get help ↓
            </a>
          </div>
          <p className="tvs-help-note">
            Changing your choices here does not remove entries you have already
            made below.
          </p>
        </section>

        <section
          className="tvs-home-section tvs-home-options"
          aria-labelledby="support-options"
        >
          <div className="tvs-home-section-heading">
            <p className="tvs-kicker">02 / Understand the options</p>
            <h2 id="support-options" tabIndex={-1}>
              A mix of help can make a week work.
            </h2>
            <p>
              Different services do different jobs. Open an option to see what
              to ask and where to begin.
            </p>
          </div>
          <div className="tvs-support-options">
            <details open>
              <summary>
                <strong>Public home care</strong>
                <span>Assessment first · Confirm the care arranged</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Ontario Health atHome assesses needs and eligibility for
                  publicly funded home care. Ask what services fit your parent’s
                  needs, when they can start and who to contact if needs change.
                  An assessment or referral is not a confirmed visit.
                </p>
                <p>
                  <strong>Ask:</strong> “Which tasks will the service cover, on
                  which days, and what should we do while we wait?”
                </p>
                <div className="tvs-actions">
                  <a className="tvs-text-link" href="tel:18335151234">
                    Call 1-833-515-1234
                  </a>
                  <a href={SOURCES.athome.url} className="tvs-text-link">
                    Read about Ontario Health atHome ↗
                  </a>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <strong>Community services</strong>
                <span>Local programmes · Fees and eligibility vary</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Explore meal delivery, rides, friendly visiting, social
                  programmes or respite. Some services have fees, and local
                  availability varies. 211 Ontario can help you find a starting
                  point.
                </p>
                <p>
                  <strong>Ask:</strong> “Do you serve this area, what does it
                  cost, is a referral needed, and is there a waiting list?”
                </p>
                <div className="tvs-actions">
                  <a className="tvs-text-link" href="tel:211">
                    Call 211
                  </a>
                  <a href={SOURCES.community.url} className="tvs-text-link">
                    Find community support ↗
                  </a>
                </div>
              </div>
            </details>
            <details>
              <summary>
                <strong>Family &amp; friends</strong>
                <span>Specific tasks · A commitment people can sustain</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Agree on tasks and times, including work, travel, rest and a
                  backup. A willingness to help becomes useful when everyone
                  knows what has been agreed. Ask the care team before taking on
                  tasks that need training or professional support.
                </p>
                <p>
                  <strong>Ask:</strong> “What can you reliably take on this
                  week, and who will cover if that changes?”
                </p>
                <a className="tvs-text-link" href="#weekly-plan">
                  Put agreed help in the weekly plan ↓
                </a>
              </div>
            </details>
            <details>
              <summary>
                <strong>Paid help</strong>
                <span>A written quote · The right person for the task</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <div>
                <p>
                  Ask providers to quote for the same tasks and schedule. Check
                  the skills required, minimum visit lengths, extra charges,
                  cancellation terms and backup arrangements. Confirm the visits
                  before marking them as covered.
                </p>
                <p>
                  <strong>Ask:</strong> “What is the full cost for these visits,
                  what is included, and what happens if someone cannot come?”
                </p>
                <div className="tvs-actions">
                  <Link
                    to="/help/$category/$article"
                    params={{
                      category: "home-care",
                      article: "homecare-questions",
                    }}
                    className="tvs-text-link"
                  >
                    Questions to ask a provider{" "}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link to="/local-help" className="tvs-text-link">
                    Find local starting points{" "}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section
          className="tvs-home-section tvs-home-week"
          aria-labelledby="weekly-plan"
        >
          <div className="tvs-home-section-heading">
            <p className="tvs-kicker">03 / Make the next week clearer</p>
            <h2 id="weekly-plan" tabIndex={-1}>
              Your weekly support plan.
            </h2>
            <p className="no-print">
              Use one entry per visit pattern. If the same visit covers several
              tasks, enter it once under its main task. Add a separate entry
              when the time or person changes.
            </p>
          </div>
          <div className="tvs-home-storage no-print">
            <p>
              {!ready
                ? "Loading your worksheet…"
                : persistent
                  ? "Edits save automatically in this browser on this device. No account, upload or family sync."
                  : "Browser storage is unavailable. This worksheet lasts for this visit only. Print it before closing or reloading."}
            </p>
            <p>
              Anyone using this browser may see it. Use roles instead of full
              names, and leave out health records, passwords and account
              details.
            </p>
          </div>
          <div className="tvs-home-editor no-print">
            {ready && draft.entries.length === 0 && (
              <div className="tvs-home-empty">
                <h3>One task is enough to begin.</h3>
                <p>
                  Choose tasks above, or add your first entry here. Blank times
                  can wait until you have spoken to the people involved.
                </p>
              </div>
            )}
            {draft.entries.length > 0 && (
              <p className="tvs-week-summary">
                {draft.entries.length}{" "}
                {draft.entries.length === 1 ? "entry" : "entries"} ·{" "}
                {unarranged} still to arrange
                {incomplete > 0
                  ? ` · ${incomplete} with days or time to confirm`
                  : ""}
              </p>
            )}
            <div className="tvs-week-entries">
              {draft.entries.map((entry) => (
                <WeekEntry
                  key={entry.id}
                  entry={entry}
                  onChange={(patch) =>
                    update((current) => ({
                      ...current,
                      entries: current.entries.map((e) =>
                        e.id === entry.id ? { ...e, ...patch } : e,
                      ),
                    }))
                  }
                  onRemove={() => {
                    setUndo(entry);
                    update((current) => ({
                      ...current,
                      entries: current.entries.filter((e) => e.id !== entry.id),
                    }));
                    setStatus(`${taskFor(entry.task).title} entry removed.`);
                  }}
                />
              ))}
            </div>
            {undo && (
              <div className="tvs-actions">
                <button
                  type="button"
                  className="tvs-text-link"
                  disabled={full}
                  onClick={() => {
                    update((current) => ({
                      ...current,
                      entries: [...current.entries, undo],
                    }));
                    setUndo(null);
                    setStatus("Entry restored.");
                  }}
                >
                  Undo removal of {taskFor(undo.task).title.toLowerCase()}
                </button>
              </div>
            )}
            <div className="tvs-add-visit">
              <div className="tvs-field">
                <label htmlFor="next-support-task">
                  Add another task or visit pattern
                </label>
                <select
                  id="next-support-task"
                  value={nextTask}
                  onChange={(e) => setNextTask(e.target.value as SupportTaskId)}
                >
                  {SUPPORT_TASKS.map((task) => (
                    <option key={task.id} value={task.id}>
                      {task.title}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="tvs-button secondary"
                type="button"
                disabled={!ready || full}
                onClick={() => {
                  const entry = newSupportEntry(nextTask);
                  update((current) => ({
                    ...current,
                    entries: [...current.entries, entry],
                  }));
                  setStatus(`${taskFor(nextTask).title} entry added.`);
                  requestAnimationFrame(() =>
                    document.getElementById(`entry-${entry.id}`)?.focus(),
                  );
                }}
              >
                <Plus size={18} aria-hidden="true" /> Add an entry
              </button>
            </div>
            {full && (
              <p className="tvs-help-note">
                This worksheet holds up to {MAX_SUPPORT_ENTRIES} visit patterns.
                Reuse the day choices for recurring visits.
              </p>
            )}
            <p className="tvs-status" role="status">
              {status}
            </p>
          </div>
          <div className="tvs-home-print">
            <p>
              The Vetted Senior · Weekly support worksheet · thevettedsenior.com
            </p>
            {draft.entries.length ? (
              draft.entries.map((entry) => (
                <section className="tvs-week-print-entry" key={entry.id}>
                  <h3>{taskFor(entry.task).title}</h3>
                  <p>{entrySchedule(entry)}</p>
                  <p>
                    {entry.minutes
                      ? `${entry.minutes} minutes per visit`
                      : "Duration to confirm"}{" "}
                    · {COVERAGE[entry.coverage]}
                  </p>
                  <p>
                    Person or service: {entry.who || "________________________"}
                  </p>
                </section>
              ))
            ) : (
              <p>
                No visits entered yet. Write down the task, days, time, person
                or service, and what still needs arranging.
              </p>
            )}
            <p>
              Backup / changes to discuss:
              _____________________________________________________
            </p>
          </div>
          <p className="tvs-help-note">
            This is a conversation and scheduling aid. The right skills, timing
            and backup still need to be confirmed with your parent and the
            people providing support.
          </p>
          <div className="tvs-actions no-print">
            <button
              type="button"
              className="tvs-button"
              onClick={() => window.print()}
            >
              <Printer size={18} aria-hidden="true" /> Print my weekly plan
            </button>
            <Link to="/my-plan" className="tvs-text-link">
              See my next steps <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="tvs-text-link"
              disabled={
                !ready || (!draft.entries.length && !draft.priorities.length)
              }
              onClick={() => setClearPending(true)}
            >
              Clear this worksheet
            </button>
          </div>
          {clearPending && (
            <div
              className="tvs-callout no-print"
              role="group"
              aria-label="Clear worksheet confirmation"
            >
              <p>
                Clear all tasks and weekly entries from this browser? Your
                separate next-steps list and saved budgets will remain.
              </p>
              <div className="tvs-actions">
                <button
                  type="button"
                  className="tvs-button secondary"
                  onClick={() => {
                    clear();
                    setUndo(null);
                    setClearPending(false);
                    setStatus("Worksheet cleared from this browser.");
                  }}
                >
                  Yes, clear worksheet
                </button>
                <button
                  type="button"
                  className="tvs-text-link"
                  onClick={() => setClearPending(false)}
                >
                  Keep my worksheet
                </button>
              </div>
            </div>
          )}
        </section>
        <HomeSupportNextSteps />
        <section
          className="tvs-home-followup no-print"
          aria-labelledby="home-next-call"
        >
          <div>
            <p className="tvs-kicker">When a gap remains</p>
            <h2 id="home-next-call">The next conversation matters.</h2>
            <p>
              If services are not yet arranged, ask the care coordinator about
              available alternatives, reassessment when needs change, and what
              to do while waiting. Build a backup with the people involved.
            </p>
            <a className="tvs-text-link" href="tel:18335151234">
              Ontario Health atHome: 1-833-515-1234
            </a>
          </div>
          <div>
            <p className="tvs-kicker">Keep something useful</p>
            <h2>A free pack to take with you.</h2>
            <p>
              Ten practical guides, a next-steps page and Ontario contacts in
              one download. Choose the pages that help today.
            </p>
            <Link className="tvs-text-link" to="/starter-pack">
              Get the free Starter Pack{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <div className="tvs-home-sources no-print">
          <SourceNote
            sources={["homecare", "athome", "community", "communityServices"]}
            reviewed={HOME_SUPPORT_REVIEWED}
          />
        </div>
      </div>
    </Page>
  );
}

function WeekEntry({
  entry,
  onChange,
  onRemove,
}: {
  entry: SupportEntry;
  onChange: (patch: Partial<SupportEntry>) => void;
  onRemove: () => void;
}) {
  const [open, setOpen] = useState(true);
  const [showIssues, setShowIssues] = useState(false);
  const navigate = useNavigate();
  const issues = supportEntryIssues(entry);
  const hours = weeklyHours(entry);
  const task = taskFor(entry.task);
  const prefix = `support-${entry.id}`;
  return (
    <details
      className="tvs-week-entry"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
    >
      <summary id={`entry-${entry.id}`} tabIndex={0}>
        <span>
          <strong>{task.title}</strong>
          <span>{entrySchedule(entry)}</span>
        </span>
        <span
          className={`tvs-coverage-label ${entry.coverage === "unarranged" ? "pending" : ""}`}
        >
          {COVERAGE[entry.coverage]}
        </span>
        <ChevronDown size={19} aria-hidden="true" />
      </summary>
      <div className="tvs-week-entry-body">
        <div className="tvs-week-fields">
          <div className="tvs-field">
            <label htmlFor={`${prefix}-task`}>Main task for this visit</label>
            <select
              id={`${prefix}-task`}
              value={entry.task}
              onChange={(e) =>
                onChange({ task: e.target.value as SupportTaskId })
              }
            >
              {SUPPORT_TASKS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>
          <div className="tvs-field">
            <label htmlFor={`${prefix}-coverage`}>
              Who has agreed to cover it?
            </label>
            <select
              id={`${prefix}-coverage`}
              aria-describedby={`${prefix}-confirmed`}
              value={entry.coverage}
              onChange={(e) =>
                onChange({ coverage: e.target.value as Coverage })
              }
            >
              {Object.entries(COVERAGE).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <small id={`${prefix}-confirmed`}>
              Leave as “Still to arrange” until the tasks and visits are
              confirmed.
            </small>
          </div>
        </div>
        <fieldset
          className="tvs-day-picker"
          aria-describedby={
            showIssues && !entry.days.length ? `${prefix}-issues` : undefined
          }
        >
          <legend>Which days?</legend>
          <div>
            {DAYS.map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={entry.days.includes(day)}
                  onChange={(e) =>
                    onChange({
                      days: e.target.checked
                        ? DAYS.filter(
                            (d) => d === day || entry.days.includes(d),
                          )
                        : entry.days.filter((d) => d !== day),
                    })
                  }
                />
                <span aria-hidden="true">{day.slice(0, 3)}</span>
                <span className="sr-only">{day}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="tvs-week-fields">
          <div className="tvs-field">
            <label htmlFor={`${prefix}-time`}>When in the day?</label>
            <select
              id={`${prefix}-time`}
              value={entry.time}
              aria-invalid={(showIssues && !entry.time) || undefined}
              onChange={(e) =>
                onChange({ time: e.target.value as SupportTime })
              }
            >
              <option value="">Time to confirm</option>
              {TIMES.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className="tvs-field">
            <label htmlFor={`${prefix}-minutes`}>Minutes per visit</label>
            <input
              id={`${prefix}-minutes`}
              type="number"
              min="1"
              max="1440"
              step="any"
              inputMode="decimal"
              value={entry.minutes}
              aria-describedby={`${prefix}-duration`}
              aria-invalid={
                (showIssues && !validSupportMinutes(entry.minutes)) || undefined
              }
              onChange={(e) =>
                onChange({ minutes: e.target.value.slice(0, 8) })
              }
            />
            <small id={`${prefix}-duration`}>
              Use your planned duration; leave blank if it is not known yet.
            </small>
          </div>
          <div className="tvs-field tvs-week-who">
            <label htmlFor={`${prefix}-who`}>Role or service (optional)</label>
            <input
              id={`${prefix}-who`}
              type="text"
              maxLength={60}
              autoComplete="off"
              placeholder="e.g. sibling or meal programme"
              value={entry.who}
              onChange={(e) => onChange({ who: e.target.value })}
            />
          </div>
        </div>
        {hours !== null && (
          <p className="tvs-entry-hours">
            {entry.days.length} {entry.days.length === 1 ? "visit" : "visits"} ×{" "}
            {entry.minutes} minutes = {Number(hours.toFixed(2))} hours per week
            for this entry.
          </p>
        )}
        {canPriceEntry(entry) && (
          <div className="tvs-entry-pricing">
            <p>
              <strong>Need a cost for this support?</strong> Use an hourly quote
              for this entry. Rides, meal deliveries and programmes may charge
              per trip, meal or session; confirm those separately.
            </p>
            <button
              type="button"
              className="tvs-text-link"
              onClick={() => {
                if (issues.length) {
                  setShowIssues(true);
                  return;
                }
                void navigate({
                  to: "/care-costs",
                  search: { support: entry.id },
                });
              }}
            >
              Estimate cost for this entry{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p>
              One entry goes into the estimate. Different services may need
              different quotes.
            </p>
          </div>
        )}
        {showIssues && issues.length > 0 && (
          <div className="tvs-form-error" id={`${prefix}-issues`} role="alert">
            {issues.map((issue) => (
              <p key={issue}>{issue}</p>
            ))}
          </div>
        )}
        <button
          type="button"
          className="tvs-text-link tvs-remove-entry"
          onClick={onRemove}
        >
          <Trash2 size={16} aria-hidden="true" /> Remove this entry
          <span className="sr-only">: {task.title}</span>
        </button>
      </div>
    </details>
  );
}

function HomeSupportNextSteps() {
  const plan = useCarePlan();
  return (
    <details className="tvs-home-next-steps no-print">
      <summary>
        <strong>Five next steps to keep handy.</strong>
        <span>Save the calls and conversations you want to follow up.</span>
        <ChevronDown size={20} aria-hidden="true" />
      </summary>
      <ol className="tvs-steps">
        {HOME_SUPPORT_STEPS.map((step, i) => {
          const id = `staying-at-home-${i}`;
          const saved = plan.items.some((item) => item.id === id);
          return (
            <li key={id} className="tvs-step">
              <span className="tvs-step-number" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <button
                  type="button"
                  className="tvs-add-step"
                  aria-pressed={saved}
                  disabled={!plan.ready}
                  onClick={() =>
                    saved ? plan.remove(id) : plan.add({ id, ...step })
                  }
                >
                  {saved ? "Added to my next steps" : "Add to my next steps"}
                  <span className="sr-only">: {step.title}</span>
                </button>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="tvs-status" role="status">
        {plan.ready
          ? plan.persistent
            ? "Your selected steps are saved in this browser on this device."
            : "Storage is unavailable. Print My next steps to keep them."
          : "Loading your next steps…"}
      </p>
      <Link to="/my-plan" className="tvs-text-link">
        Open my next steps <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </details>
  );
}
