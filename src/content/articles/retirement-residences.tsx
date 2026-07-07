import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const RETIREMENT_RESIDENCES_ARTICLES: ArticleContentMap = {
  "independent-assisted-memory-care": [
    {
      heading: "The distinction that changes everything: retirement home versus long-term care",
      body: (
        <>
          <p>
            Before the four levels, one Canadian distinction that families
            mix up constantly, at real cost. In Ontario, a{" "}
            <strong>retirement residence</strong> is a private business you
            pay for yourself, regulated by the Retirement Homes Regulatory
            Authority (RHRA). A <strong>long-term care home</strong> is part
            of the public system: nursing and personal care are funded by
            the province, you pay only a standardized accommodation co-payment,
            and admission runs through Ontario Health atHome, with waitlists
            that can be months or years.
          </p>
          <p>
            Why this matters: families sometimes pay $6,000 a month for a
            retirement residence with heavy care packages when the person
            actually qualifies for long-term care at a fraction of the
            out-of-pocket cost, or they wait for a long-term care bed when a
            retirement residence could serve well now. The two systems have
            different front doors, different price tags, and different
            waitlists. Know which one you are shopping in.
          </p>
        </>
      ),
    },
    {
      heading: "Independent living: housing with the friction removed",
      body: (
        <>
          <p>
            An apartment or suite in a community of other seniors, with some
            combination of meals, housekeeping, activities, and an emergency
            response system. No hands-on care. The resident manages their
            own medications, bathing, and day.
          </p>
          <p>
            <strong>Right for:</strong> someone managing well but tired of
            cooking, isolated, or wanting the security of people nearby.
            Loneliness is a legitimate reason to move; many residents say
            the dining room did more for them than anything else.
          </p>
          <p>
            <strong>Ontario cost reality:</strong> roughly $2,500 to $5,000
            a month depending on city and building, all private pay. Rent
            increases are a fact of life; ask for the last three years of
            increases in writing.
          </p>
        </>
      ),
    },
    {
      heading: "Assisted living: the care package layer",
      body: (
        <>
          <p>
            The same housing, plus purchased care: help with bathing,
            dressing, medication administration, escorts to meals. In most
            Ontario retirement residences this is sold as tiered "care
            packages" stacked on the base rent, and this is where bills
            surprise people. The advertised $3,800 suite becomes $5,600 once
            the person actually needs level two care, and $7,000 at level
            three.
          </p>
          <p>
            <strong>The questions that protect you:</strong> What exactly is
            in each care level, in writing? What triggers a move to the next
            level, and who decides? What is the maximum care this residence
            can deliver before it asks a resident to leave? That last
            question is the one families never ask and always wish they
            had, because "aging in place" marketing often ends at a care
            threshold the brochure never mentioned.
          </p>
          <p>
            <strong>Cost reality:</strong> $4,000 to $7,500+ a month all-in
            depending on care level and city. A useful comparison point:
            heavy care packages sometimes cost more than the equivalent
            hours of{" "}
            <Link
              to="/help/$category"
              params={{ category: "home-care" }}
              className="text-primary underline"
            >
              private home care
            </Link>{" "}
            brought into a cheaper suite, and you are allowed to do exactly
            that.
          </p>
        </>
      ),
    },
    {
      heading: "Memory care: secured, specialized, and worth scrutinizing hardest",
      body: (
        <>
          <p>
            A secured floor or wing designed for people with dementia:
            controlled exits, higher staff ratios, staff trained in dementia
            care, programming built around cognitive abilities rather than
            around a calendar. Usually the most expensive tier, often $6,000
            to $9,000+ a month in Ontario.
          </p>
          <p>
            Because the residents cannot report problems reliably, this is
            the tier where your own eyes matter most. Visit at different
            times, unannounced. Watch whether staff talk to residents or
            over them. Ask what dementia-specific training staff actually
            receive, in hours, not adjectives. Ask how they handle
            responsive behaviours (the sector's term for agitation,
            wandering, and aggression), and be wary of any answer that
            sounds like sedation as a first resort.
          </p>
          <p className="italic">
            If dementia is new territory for your family, start with the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "dementia-concerns" }}
              className="text-primary underline"
            >
              Dementia Concerns guide
            </Link>
            , which covers the whole arc, including the legal steps that
            should precede any move.
          </p>
        </>
      ),
    },
    {
      heading: "Long-term care: the public tier",
      body: (
        <>
          <p>
            For people who need 24-hour nursing care or supervision.
            Admission is through Ontario Health atHome (310-2222), which
            assesses eligibility, and you choose up to five homes for the
            waitlist. The province funds the care; residents pay a
            standardized co-payment for accommodation (set provincially and
            adjusted each July), with a government rate reduction subsidy
            available for basic rooms when income is low. Nobody is denied
            long-term care placement for inability to pay the basic rate.
          </p>
          <p>
            The honest trade: dramatically lower cost and real nursing
            capacity, in exchange for waitlists, less hotel-like
            surroundings, and less choice of timing. Many families bridge
            the waitlist with home care or a retirement residence, which is
            a legitimate strategy, not a failure.
          </p>
        </>
      ),
    },
    {
      heading: "How to actually decide",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Get a needs assessment first (family doctor or 310-2222 in Ontario). The level of need picks the shelf; you pick from the shelf.</li>
            <li>Price the real care level, not the base rate, for every residence you consider, in writing.</li>
            <li>Compare against the home care alternative for the same money; the right answer is sometimes staying put with support.</li>
            <li>Check the RHRA register (rhra.ca) for licensing and inspection history on any Ontario retirement home.</li>
            <li>Tour at least three. Our <Link to="/help/$category/$article" params={{ category: "retirement-residences", article: "touring-retirement-residences" }} className="text-primary underline">touring guide</Link> and printable checklist turn the visits into comparable data.</li>
          </ol>
        </>
      ),
    },
  ],

  "touring-retirement-residences": [
    {
      heading: "Why the tour is designed, and how to see through the design",
      body: (
        <>
          <p>
            Every retirement residence tour is a sales appointment. The
            route is chosen, the timing is chosen, the suite you see is the
            model suite, and lunch happens to be the kitchen's best service
            of the week. None of this is dishonest, exactly. It is
            marketing. Your job is to collect the information the tour was
            not designed to give you, and this guide, built the way our
            founder built verification programs in banking, is how.
          </p>
          <p>
            The single most useful technique costs nothing:{" "}
            <strong>visit twice, and make the second visit unannounced,</strong>{" "}
            at a mealtime or on a weekend evening when staffing is thinnest.
            A residence that looks the same both times is telling the truth.
          </p>
        </>
      ),
    },
    {
      heading: "Before you go: the twenty-minute desk screen",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>In Ontario, look the residence up on the RHRA public
              register</strong> (rhra.ca): licence status, conditions, and
              inspection and enforcement history. Other provinces have
              equivalents; 211 can point you to them.
            </li>
            <li>
              <strong>Request the full rate card and care package pricing in
              writing before the tour.</strong> A residence that will not
              send prices before a visit is telling you how the
              relationship will go.
            </li>
            <li>
              <strong>Read recent reviews, but read them like an
              investigator:</strong> discount the ecstatic and the furious,
              and look for repeated specifics (billing disputes, staff
              turnover, response times at night).
            </li>
            <li>
              <strong>Ask your parent what matters most to them,</strong>{" "}
              and write the three answers down. Families tour for
              chandeliers; residents live in the dining room and the
              activity calendar.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "During the tour: watch more than you listen",
      body: (
        <>
          <p>The building will be clean where you are taken. Look where you are not taken:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Hallways on residential floors, especially handrails and carpet edges, and the smell away from the lobby. Buildings smell like their worst-cleaned corner.</li>
            <li>Whether staff greet residents by name, and whether residents look engaged or parked. Count the wheelchairs facing a television with nobody talking.</li>
            <li>The dining room in actual service: is there choice, is help offered gracefully, do people seem to want to be there? Ask to eat the regular lunch, not the marketing lunch, and ask your parent what they think of the food; they are the one eating it for years.</li>
            <li>The posted activity calendar versus reality: pick one event from yesterday and ask a staff member how it went. Vague answers mean the calendar is decorative.</li>
            <li>How the tour guide responds when your parent, not you, asks a question. A residence that talks past its future resident on the sales tour will talk past them as a resident too.</li>
          </ul>
        </>
      ),
    },
    {
      heading: "The questions, including the uncomfortable ones",
      body: (
        <>
          <p>
            Bring the printable checklist below; it has space for answers
            across three residences. The ones that matter most:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>What is in the base rate, itemized, and what does each care level add, in dollars?</li>
            <li>What were the rate increases in each of the last three years?</li>
            <li>Who is in the building overnight: how many staff, and is any of them a nurse? (In many residences the night answer is one or two PSWs for the whole building. You want to know, not assume.)</li>
            <li>What care needs would make you ask a resident to leave, and how much notice is given? Get the discharge policy in writing.</li>
            <li>Is the waitlist deposit refundable, and is that in the contract?</li>
            <li>Is there a trial stay? A month of respite stay is the best due diligence money can buy.</li>
            <li>Can we see the most recent residents' council meeting minutes? (Ontario retirement homes must support a residents' council if residents want one; the minutes are where the real complaints live.)</li>
            <li>How did the residence handle its last serious complaint? A confident operator has an answer; a defensive one has a problem.</li>
          </ol>
        </>
      ),
    },
    {
      heading: "Reading the contract before anyone signs",
      body: (
        <>
          <p>
            Ontario retirement home contracts must disclose care services
            and prices, but the details that bite are legal boilerplate:
            annual increase mechanics, what happens to fees during a
            hospital stay, extra charges (guest meals, transportation,
            incontinence supplies, "care assessments"), and the discharge
            and eviction terms. Take the contract home. Any residence that
            resists a few days of review has failed the most basic test.
            For anything unclear, an hour with a lawyer, or at minimum a
            call to the RHRA's information line, is cheap insurance on a
            six-figure decision.
          </p>
          <p>
            And keep the financial context honest: at $60,000+ a year, the
            move deserves the same layered funding review as any other care
            decision, which is what{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "paying-for-care" }}
              className="text-primary underline"
            >
              Paying for Care
            </Link>{" "}
            walks through.
          </p>
        </>
      ),
    },
    {
      heading: "The printable version",
      body: (
        <>
          <p>
            Everything above, as a checklist with a three-residence
            comparison grid. Print one per tour.
          </p>
          <a
            href="/checklists/TVS_RR1_ResidenceTourChecklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Residence Tour Checklist (PDF)
          </a>
          <p className="italic">
            Not sure a residence is the right move at all? The{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "staying-at-home" }}
              className="text-primary underline"
            >
              Staying at Home guide
            </Link>{" "}
            makes the honest case for the alternative.
          </p>
        </>
      ),
    },
  ],
};
