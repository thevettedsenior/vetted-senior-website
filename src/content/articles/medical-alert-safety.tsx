import { Link } from "@tanstack/react-router";
import { AmazonSearchLink } from "@/components/Affiliate";
import type { ArticleContentMap } from "./types";

export const MEDICAL_ALERT_SAFETY_ARTICLES: ArticleContentMap = {
  "fall-proofing-the-home": [
    {
      heading: "Why this list exists, and why it starts under $300",
      body: (
        <>
          <p>
            Falls are the leading cause of injury hospitalization among
            Canadian seniors, and between a quarter and a third of adults over
            65 fall each year. Here is the part that should change how you
            spend a Saturday: most of those falls happen at home, on familiar
            ground, and a large share of them are preventable with changes
            that cost less than a single month of home care.
          </p>
          <p>
            This guide goes room by room, in the order of risk. Do the free
            items first. Then the under-$50 items. The expensive projects,
            stairlifts and walk-in showers, get their own guide in{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mobility-equipment",
                article: "stairlifts-and-home-modifications",
              }}
              className="text-primary underline"
            >
              Mobility &amp; Equipment
            </Link>
            . You do not need them to make a home dramatically safer this
            weekend.
          </p>
          <p>
            One rule before you buy anything: walk the house with the person
            who lives there, not around them. A safety change that gets
            removed the day you leave protects nobody, and seniors remove
            things that were installed at them rather than with them.
          </p>
        </>
      ),
    },
    {
      heading: "The bathroom: highest risk per square foot",
      body: (
        <>
          <p>
            Wet, hard, and full of awkward movements. If you only fix one
            room, fix this one.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Grab bars, anchored into studs</strong> (about $20 to
              $40 each, plus an hour of installation): one vertical at the
              shower entry, one horizontal or diagonal inside, one beside the
              toilet. Towel bars are not grab bars; they pull out of drywall
              under a fraction of body weight. Look for bars rated to at
              least 250 pounds, like these{" "}
              <AmazonSearchLink query="grab bar stainless 250 lb bathroom">
                wall-mount grab bars on Amazon.ca
              </AmazonSearchLink>
              . If nobody in the family is confident finding studs, this is a
              perfect one-hour job for a handyperson.
            </li>
            <li>
              <strong>Non-slip surface in the tub or shower</strong> (under
              $20):{" "}
              <AmazonSearchLink query="non slip adhesive bath strips">
                adhesive strips
              </AmazonSearchLink>{" "}
              outlast suction mats, which shift and grow mildew.
            </li>
            <li>
              <strong>A shower chair and handheld shower head</strong> ($40 to
              $80 together) turn the highest-risk daily activity into a
              seated one.
            </li>
            <li>
              <strong>A raised toilet seat with handles</strong> ($35 to $60)
              if standing from low seats has become effortful. Watch for this
              sign: using the towel bar or sink edge to pull up.
            </li>
            <li>
              <strong>Night path lighting</strong>: the bed-to-bathroom trip
              at 2am is the classic fall.{" "}
              <AmazonSearchLink query="motion sensor night light plug in warm white">
                Plug-in motion-sensor night lights
              </AmazonSearchLink>{" "}
              cost a few dollars each; put one in the bedroom, one in the
              hallway, one in the bathroom.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Stairs: where falls do the most damage",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Railings on both sides, and actually solid.</strong>{" "}
              Grab each railing and try to wobble it. A loose railing is
              worse than none, because it betrays exactly when it is needed.
              Adding a second railing costs roughly $100 to $300 installed
              and is one of the highest-value changes on this whole list.
            </li>
            <li>
              <strong>Light the stairs from both ends,</strong> with switches
              at top and bottom. If rewiring is impractical,{" "}
              <AmazonSearchLink query="motion sensor stair lights battery">
                battery motion-sensor stair lights
              </AmazonSearchLink>{" "}
              stick on without an electrician.
            </li>
            <li>
              <strong>Mark the edges.</strong> High-contrast tape on the nose
              of each step helps aging eyes judge depth, especially on
              carpeted stairs where edges blur together.
            </li>
            <li>
              <strong>Nothing lives on the stairs. Ever.</strong> The pile of
              things waiting to go up is a documented fall cause with an
              undocumented body count.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Bedroom, kitchen, and living room: the quiet hazards",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Rugs: secure them or retire them.</strong> Loose scatter
              rugs are the single most common tripping hazard in Canadian
              homes. Double-sided carpet tape costs $10; sentimental rugs can
              move to low-traffic walls of the room.
            </li>
            <li>
              <strong>Cords out of walking paths</strong>, along walls,
              secured with clips. Extension cords across a room are a
              tripwire.
            </li>
            <li>
              <strong>Bed height check:</strong> sitting on the edge, feet
              should rest flat with knees at roughly hip level. Risers or a
              different mattress fix a bed that has become a climb.
            </li>
            <li>
              <strong>In the kitchen, move the daily things to waist height.</strong>{" "}
              The step stool in a senior's kitchen is a fall dressed as
              helpfulness. Everything used daily belongs between hip and
              shoulder.
            </li>
            <li>
              <strong>A sturdy chair with arms</strong> beats a low soft sofa
              for the main sitting spot. Watch how the person gets up; if it
              takes two tries, the furniture is working against them.
            </li>
            <li>
              <strong>Footwear indoors:</strong> socks on hardwood are a
              hazard.{" "}
              <AmazonSearchLink query="non slip slippers seniors closed back">
                Closed-back non-slip slippers
              </AmazonSearchLink>{" "}
              are a $30 fix families consistently skip.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Outside: the season matters more than the room",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Handrails at every entrance</strong>, even two steps.
              Most entries have none, and entries are where hands are full.
            </li>
            <li>
              <strong>Motion-sensor lighting over each door.</strong>
            </li>
            <li>
              <strong>Winter: treat ice as a certainty, not a surprise.</strong>{" "}
              A bucket of ice melt inside each door, and a snow removal
              arrangement confirmed in writing before the end of October. Our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "home-maintenance",
                  article: "aging-in-place-maintenance-plan",
                }}
                className="text-primary underline"
              >
                seasonal maintenance guide
              </Link>{" "}
              covers the whole rhythm.
            </li>
            <li>
              <strong>Ice grippers for boots</strong> (about $25 for{" "}
              <AmazonSearchLink query="ice cleats boots seniors">
                slip-on ice cleats
              </AmazonSearchLink>
              ) for anyone still walking outdoors in winter. One honest
              caution: they must come off at the door; they are slippery on
              indoor floors.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The two upgrades that are not about the house",
      body: (
        <>
          <p>
            First, <strong>strength and balance are fall prevention</strong>,
            more than any gadget. Exercise programs designed for older adults
            measurably cut fall risk, and in Ontario, OHIP covers
            physiotherapy for people 65 and older at participating clinics. A
            referral question at the next doctor's appointment costs nothing.
          </p>
          <p>
            Second, <strong>a plan for the fall that happens anyway.</strong>{" "}
            That means a{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "medical-alert-safety",
                article: "choosing-a-medical-alert-system",
              }}
              className="text-primary underline"
            >
              medical alert system
            </Link>{" "}
            for anyone living alone with fall risk, and it means practicing
            what to do on the floor: how to roll, crawl to sturdy furniture,
            and get up, or stay warm and summon help if getting up is not
            possible. Paramedics teach this in some community programs; ask
            211 what exists locally.
          </p>
          <p className="italic">
            If a fall already happened, work through the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-had-a-fall" }}
              className="text-primary underline"
            >
              Parent Had a Fall guide
            </Link>{" "}
            first; it covers the medical follow-up that should accompany the
            hardware store trip.
          </p>
        </>
      ),
    },
    {
      heading: "Your shopping list, in priority order",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Free: rugs secured, cords rerouted, stairs cleared, daily items to waist height</li>
            <li>About $30: motion-sensor night lights for the bed-to-bathroom path</li>
            <li>About $60 to $120: grab bars at shower and toilet, installed into studs</li>
            <li>About $20: non-slip strips in the tub</li>
            <li>About $40 to $80: shower chair and handheld shower head</li>
            <li>About $30: proper non-slip indoor footwear</li>
            <li>About $100 to $300: second stair railing, professionally installed</li>
            <li>Ask the doctor: OHIP-covered physiotherapy referral for strength and balance</li>
          </ol>
          <p>
            Everything above, done completely, lands near $300 plus a
            handyperson visit, and addresses the hazards behind the majority
            of home falls. The{" "}
            <Link to="/handbook" className="text-primary underline">
              free Caregiver Handbook
            </Link>{" "}
            includes the full room-by-room walkthrough as a printable
            section.
          </p>
        </>
      ),
    },
  ],
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
