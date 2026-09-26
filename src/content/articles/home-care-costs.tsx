import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const HOME_CARE_COST_ARTICLES: ArticleContentMap = {
  "home-care-costs-ontario": [
    {
      heading: "Is home care free in Ontario?",
      body: (
        <>
          <p>
            Ontario pays for home care services you qualify for through the
            public system. Ontario Health atHome assesses your needs and
            eligibility, then works with you to develop a care plan. This does
            not mean that every requested task or hour will be covered.
            Community services can also have fees or client contributions.
          </p>
          <p>
            Start by asking what services are approved, when they begin and whom
            to contact if your needs change. Keep a referral, an assessment and
            a confirmed visit as three separate things in your plan.
          </p>
          <p>
            <a href="https://www.ontario.ca/page/home-community-care">
              Ontario’s home and community care guide
            </a>{" "}
            explains the assessment process, available services and options if
            you do not qualify. You can contact Ontario Health atHome at{" "}
            <a href="tel:+18335151234">1-833-515-1234</a>.
          </p>
        </>
      ),
    },
    {
      heading: "What does private home care cost?",
      body: (
        <>
          <p>
            A useful budget starts with a written quote for the help your parent
            needs. There is no single price on this page because a companion
            visit, personal support and nursing are different services.
            Schedule, location, visit minimums and additional charges also
            change the total.
          </p>
          <p>
            Give each provider the same brief: the tasks, days, start times,
            length of each visit, location and proposed start date. Ask which
            services and workers the quote includes. If a task needs clinical
            input, ask the care team what type of professional is appropriate.
          </p>
          <p>Ask for the following in writing:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The hourly or per-visit price, and the minimum billable visit.
            </li>
            <li>Travel, weekend, holiday or other premiums.</li>
            <li>
              Whether applicable tax is included, and any separate charges.
            </li>
            <li>
              Cancellation notice, missed-visit rules and backup arrangements.
            </li>
            <li>Availability and the earliest confirmed start date.</li>
          </ul>
          <p>
            A lower hourly rate can still produce a higher bill if the minimum
            visit is longer. Read the{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "home-care", article: "homecare-questions" }}
            >
              questions to ask a home care provider
            </Link>{" "}
            before choosing.
          </p>
        </>
      ),
    },
    {
      heading: "An example: why the visit minimum matters",
      body: (
        <>
          <p>
            <strong>
              Illustration only. These are invented numbers to show the
              calculation, not Ontario market rates or a provider quote.
            </strong>
          </p>
          <p>
            Suppose your family wants three two-hour visits each week. A
            hypothetical provider charges $40 per hour but bills a minimum of
            three hours per visit.
          </p>
          <dl className="tvs-cost-example">
            <div>
              <dt>Help requested</dt>
              <dd>3 visits × 2 hours = 6 hours a week</dd>
            </div>
            <div>
              <dt>Hours billed</dt>
              <dd>3 visits × 3-hour minimum = 9 hours a week</dd>
            </div>
            <div>
              <dt>Weekly labour</dt>
              <dd>9 hours × $40 = $360</dd>
            </div>
            <div>
              <dt>Illustrative weekly extra fees</dt>
              <dd>$15</dd>
            </div>
            <div>
              <dt>Weekly total for these items</dt>
              <dd>$375</dd>
            </div>
            <div>
              <dt>Average monthly equivalent</dt>
              <dd>$375 × 52 ÷ 12 = $1,625</dd>
            </div>
          </dl>
          <p>
            The monthly figure is an annualised planning average. An actual
            calendar month, holiday schedule or invoice may differ. Add one-time
            costs separately and confirm all fees and tax treatment with the
            provider. If visits have different lengths or rates, calculate each
            type separately.
          </p>
        </>
      ),
    },
    {
      heading: "Work out the support still to arrange",
      body: (
        <>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>List the actual tasks and times.</strong> Ask your parent
              what support they would welcome, and discuss care needs with their
              care team.
            </li>
            <li>
              <strong>Record confirmed public services.</strong> Include the
              task and appointment or visit details. Do not assume requested
              hours have been approved.
            </li>
            <li>
              <strong>Agree sustainable family help.</strong> Assign a person, a
              time and a backup. Count overlapping help once, and keep nursing
              or other specialist tasks separate from general household help.
            </li>
            <li>
              <strong>Price the remaining support.</strong> Use current written
              quotes. Keep uncertainty visible until the visit and price are
              confirmed.
            </li>
          </ol>
          <p>
            Our <Link to="/care-costs">free care-cost worksheet</Link> helps
            estimate a weekly support gap from your own hours and quote. It does
            not assess care needs or determine eligibility. Add provider
            minimums and other charges before committing to a service.
          </p>
        </>
      ),
    },
    {
      heading: "Where to start if the budget does not work",
      body: (
        <>
          <p>
            Tell the care coordinator what has changed or is still uncovered.
            Ask about reassessment, suitable community services and caregiver
            support. Ontario Health atHome can connect people with services such
            as meal delivery or transportation; availability and fees need to be
            checked with each service.
          </p>
          <p>
            Use <Link to="/local-help">Local Help</Link> to find official and
            community starting points. Record what is confirmed, what you are
            waiting for and the next person to contact. Your parent’s
            preferences and the family’s ability to help belong in that
            conversation.
          </p>
          <p>
            If your parent is leaving hospital, begin with the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "hospital-discharge-planning" }}
            >
              hospital discharge planning guide
            </Link>
            . The first useful decision may be who will confirm tomorrow’s
            arrangements.
          </p>
        </>
      ),
    },
    {
      heading: "Sources and scope",
      body: (
        <>
          <p>
            Source pages checked September 26, 2026. This guide explains how to
            organise a care budget. It is not a clinical assessment, a benefits
            decision or a survey of local prices.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a href="https://www.ontario.ca/page/home-community-care">
                Ontario: home and community care
              </a>{" "}
              — public funding, eligibility, assessment and community services.
            </li>
            <li>
              <a href="https://ontariohealthathome.ca/home-care/">
                Ontario Health atHome: home care
              </a>{" "}
              — care coordination, referrals and types of support.
            </li>
          </ul>
          <p>
            The quote questions and worked example are The Vetted Senior’s
            planning tools. They do not represent a recommendation of any
            provider. Read our{" "}
            <Link to="/disclosure">editorial and financial disclosure</Link>.
          </p>
        </>
      ),
    },
  ],
};
