import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const MEDICAL_ALERT_SAFETY_ARTICLES: ArticleContentMap = {
  "choosing-a-medical-alert-system": [
    {
      heading: "What these devices actually do, and when one earns its place",
      body: (
        <>
          <p>
            A medical alert system is a button your parent wears, connected to
            a monitoring centre that answers when it is pressed, day or night.
            The good ones turn a fall from a night on the floor into a
            fifteen-minute wait for help. That is the whole product, and for
            the right person it is one of the highest-value purchases in all
            of senior care.
          </p>
          <p>
            The day to start considering one is the day two things become true
            at once: your parent lives alone, and a fall risk exists. If a
            fall has already happened, you are not early. Fear of falling
            again often makes older adults move less, which weakens muscles,
            which increases the risk of the next fall. A device your parent
            trusts breaks part of that cycle.
          </p>
          <p>
            One honest limit before anything else: devices only work when
            worn. The most sophisticated pendant in the world does nothing in
            a drawer. Involve your parent in choosing one they will actually
            wear, and treat "will you actually wear this" as the first
            specification, ahead of every feature on the box.
          </p>
        </>
      ),
    },
    {
      heading: "The main types, in plain language",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Home-based systems:</strong> a base station connected to
              a phone line or cellular network, with a wearable button that
              works within range of the house. Simplest, usually cheapest,
              right for someone who is mostly at home.
            </li>
            <li>
              <strong>Mobile (GPS) systems:</strong> the button works anywhere
              there is cellular coverage, and responders can locate the
              wearer. Right for someone still out walking, shopping, or
              driving.
            </li>
            <li>
              <strong>Fall detection:</strong> an add-on sensor that tries to
              detect a fall and call for help automatically, for the
              situations where someone cannot press the button. Useful, but
              imperfect in both directions: it can miss real falls and trigger
              on false ones. Treat it as a backup to the button, not a
              replacement.
            </li>
            <li>
              <strong>Smartwatch-style devices:</strong> alert functions built
              into a watch form. Some seniors who refuse a pendant will wear a
              watch. The trade-offs are battery life and smaller buttons.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The questions to ask any provider before you sign",
      body: (
        <>
          <p>
            These come from our founder's own vetting question set. Ask them
            all, write the answers down, and be suspicious of any salesperson
            who cannot answer them crisply.
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Is monitoring 24/7, and where is the monitoring centre located?
              Who answers, and in what languages?
            </li>
            <li>
              What exactly happens when the button is pressed? Who is called,
              in what order, and what happens if nobody answers?
            </li>
            <li>Is fall auto-detection included, and what does it cost extra?</li>
            <li>
              What does it cost month to month, all in: equipment, monitoring,
              activation, and any "protection plan" they add at checkout?
            </li>
            <li>
              What is the contract term, and what does cancellation actually
              take? Month-to-month exists in this market. Long contracts with
              cancellation fees are a choice, and usually a bad one.
            </li>
            <li>
              What happens when the equipment fails or the battery dies? Who
              notices, them or you?
            </li>
          </ol>
          <p>
            Billing surprises and cancellation pain are this industry's most
            common complaints. The answers to questions 4 and 5 predict
            whether you will be writing an angry review in a year.
          </p>
          <a
            href="/checklists/TVS_MA1_MedicalAlertComparison.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Medical Alert Comparison (PDF)
          </a>
        </>
      ),
    },
    {
      heading: "Who helps pay, in Ontario",
      body: (
        <>
          <p>
            The honest answer: mostly nobody. Ontario does not broadly fund
            medical alert services, so this is usually a private purchase in
            the range of $25 to $60 a month depending on features. Two
            exceptions are worth checking before you pay full price:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Some municipalities and community support agencies subsidize
              alarms for low-income seniors. Call 211 and ask what exists in
              your parent's area. The call is free and answered 24/7.
            </li>
            <li>
              Low-income seniors who qualify for TELUS's Internet for Good or
              Mobility for Good programs can get TELUS Health Medical Alert
              service at a steep discount through its Health for Good program.
            </li>
          </ul>
          <p>
            The device may also count as a medical expense in some
            circumstances at tax time; keep receipts and ask whoever prepares
            your parent's return.
          </p>
          <p className="italic">
            Transparency note, because this is that kind of site: this page
            currently contains no affiliate links and no provider has paid to
            be mentioned or omitted. If that ever changes, the disclosure will
            be at the top of this page, per{" "}
            <Link to="/disclosure" className="text-primary underline">
              our disclosure policy
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Beyond the button: the rest of the safety layer",
      body: (
        <>
          <p>
            A medical alert system is one layer of home safety, not the whole
            plan. The others cost less and matter as much: loose rugs removed,
            paths lit from bed to bathroom, grab bars anchored into studs,
            non-slip footwear, and a weekly blister pack from the pharmacy for
            medications. The full room-by-room walkthrough is in our free{" "}
            <Link to="/handbook" className="text-primary underline">
              Family Caregiver's Complete Handbook
            </Link>
            , and if a fall has already happened, start with the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-had-a-fall" }}
              className="text-primary underline"
            >
              Parent Had a Fall guide
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
};
