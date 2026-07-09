import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const DOCTORS_PHARMACY_MEDICATION_ARTICLES: ArticleContentMap = {
  "finding-a-family-doctor": [
    {
      heading: "The honest state of things",
      body: (
        <>
          <p>
            Roughly two and a half million Ontarians do not have a family
            doctor, and seniors are overrepresented among them, often
            because a long-time physician retired and the practice closed
            with no successor. Saying this out loud matters, because the
            search can take months and families who expect a two-week fix
            give up in frustration. The good news is that the search has a
            proper front door, there are workarounds that provide real
            care in the meantime, and a senior with multiple conditions is
            exactly the kind of patient practices are asked to prioritize.
          </p>
          <p>
            This guide covers the official route, the unofficial routes
            that actually work, and how to keep prescriptions, referrals,
            and monitoring going while the search continues.
          </p>
        </>
      ),
    },
    {
      heading: "Health Care Connect: the official front door",
      body: (
        <>
          <p>
            Ontario's matching program is called{" "}
            <strong>Health Care Connect</strong> (1-800-445-1822, or online
            through ontario.ca). You register once, a nurse reviews the
            file, and the program searches for a family doctor or nurse
            practitioner accepting patients near you. Registration is
            free, and people with complex health needs are given higher
            priority, which is why the registration call should mention
            every diagnosis, not summarize politely.
          </p>
          <p>
            Two honest caveats. First, you can only register if the senior
            is not currently rostered to a doctor, so if the old doctor is
            retiring, wait until the practice formally closes or ask to be
            de-rostered. Second, waits vary enormously by community, from
            weeks to well over a year. Register anyway, on day one, and
            then work the other routes in parallel rather than waiting by
            the phone.
          </p>
        </>
      ),
    },
    {
      heading: "The workarounds that actually find doctors",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Ask every clinician you already see.</strong>{" "}
              Pharmacists, specialists, physiotherapists, and walk-in
              doctors hear about practices quietly taking patients before
              any list does. The pharmacist who fills the prescriptions is
              often the best-connected person in local health care.
            </li>
            <li>
              <strong>Call new and expanding clinics directly.</strong> New
              family health teams and community health centres roster
              fastest in their first year. An online search for the town
              plus "accepting new patients," repeated monthly, catches
              these windows.
            </li>
            <li>
              <strong>Consider a nurse practitioner.</strong>{" "}
              Nurse-practitioner-led clinics provide ongoing primary care,
              prescribe, order tests, and refer to specialists, all
              OHIP-funded. For most seniors' routine care they are a full
              substitute, not a consolation prize.
            </li>
            <li>
              <strong>Ask family members' doctors.</strong> Many practices
              quietly accept parents or spouses of existing patients.
              Adult children should ask their own doctor directly.
            </li>
            <li>
              <strong>If moving is on the horizon anyway</strong>, primary
              care access is a legitimate factor in choosing the new
              community, and retirement residences often have visiting
              physicians; our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "retirement-residences",
                  article: "touring-retirement-residences",
                }}
                className="text-primary underline"
              >
                residence tour guide
              </Link>{" "}
              includes the questions to ask about medical coverage.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Getting real care while you wait",
      body: (
        <>
          <p>
            Doctorless does not mean careless. Ontario pharmacists can
            assess and prescribe for a list of common minor ailments
            (urinary tract infections, pink eye, shingles rash, and more)
            at no charge with an OHIP card. <strong>Health811</strong>{" "}
            (dial 811) provides 24/7 nurse advice and can connect callers
            to services including dietitians. Walk-in and virtual clinics
            handle episodic problems and prescription renewals, and a
            senior who uses the same walk-in clinic consistently builds a
            chart there, which is the next best thing to a roster.
          </p>
          <p>
            The one thing to manage deliberately is prescriptions. Ask the
            departing doctor for renewals long enough to bridge the gap,
            and know that Ontario pharmacists can extend most ongoing
            prescriptions when a renewal falls through. Keep a current
            medication list and a one-page health summary (conditions,
            surgeries, allergies, specialists) in the senior's wallet; it
            makes every walk-in visit twice as useful and it is the first
            thing a new doctor will want.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Register with Health Care Connect today (1-800-445-1822), listing every diagnosis and medication, and note the confirmation number.</li>
            <li>Ask the senior's pharmacist, and every specialist at the next appointment, whether they know a practice taking patients.</li>
            <li>Search monthly for nurse-practitioner-led clinics and new family health teams within driving distance, and call rather than relying on websites.</li>
            <li>Write the one-page health summary and current medication list, and put a copy in the wallet and one on the fridge.</li>
            <li>Pick one walk-in or virtual clinic and use it consistently in the meantime, so the interim care at least accumulates in one chart.</li>
          </ol>
        </>
      ),
    },
  ],

  "managing-multiple-medications": [
    {
      heading: "Why medication load is a safety issue, not a detail",
      body: (
        <>
          <p>
            The average Canadian over 65 takes about seven prescription
            medications; many take a dozen or more once over-the-counter
            pills and supplements are counted. Every added medication
            raises the odds of interactions, side effects that get
            mistaken for aging, and missed or doubled doses. Medication
            problems are among the most common reasons seniors end up in
            emergency departments, and they are also among the most
            preventable, because the fixes below are simple and almost
            all of them are free.
          </p>
          <p>
            If a parent seems foggier, dizzier, or more unsteady than
            usual, the medication list is the first suspect to rule out,
            before anyone concludes it is simply age. Dizziness that
            leads to falls is a medication question as much as a{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "medical-alert-safety",
                article: "fall-proofing-the-home",
              }}
              className="text-primary underline"
            >
              home safety
            </Link>{" "}
            one.
          </p>
        </>
      ),
    },
    {
      heading: "The free annual review: MedsCheck",
      body: (
        <>
          <p>
            Ontario pays pharmacists to sit down with any patient taking
            three or more chronic medications for a structured annual
            review called <strong>MedsCheck</strong>. It is free, takes
            twenty to thirty minutes, requires no doctor referral, and can
            be booked by simply asking at the pharmacy counter. The
            pharmacist goes through every prescription, over-the-counter
            product, and supplement, flags interactions and duplicates,
            and sends the reconciled list to the doctor. A home version
            (MedsCheck at Home) exists for seniors who cannot easily get
            to the pharmacy.
          </p>
          <p>
            Two habits make the review worth far more. Bring everything,
            including the vitamins, the herbal products, and the bottle
            from the other pharmacy, because interactions do not care
            where something was purchased. And ask the deprescribing
            question out loud: "Is there anything here we could reduce or
            stop?" Sleeping pills, sedatives, and some blood pressure
            combinations are common candidates, and stopping the right
            pill can do more for balance and clarity than starting a new
            one.
          </p>
        </>
      ),
    },
    {
      heading: "Blister packs, synchronization, and delivery",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Compliance packaging</strong> (blister packs or
              pouch rolls) organizes every pill by day and time slot, so
              "did I take it?" has a visible answer. Most pharmacies
              provide it free or for a few dollars a week, and it is the
              single highest-value change for anyone juggling five or
              more medications, or anyone with early memory change.
            </li>
            <li>
              <strong>Medication synchronization</strong> aligns all
              refills to one pickup date, turning six trips a month into
              one. Just ask; pharmacies do this routinely.
            </li>
            <li>
              <strong>Free delivery</strong> is standard at most Canadian
              pharmacies, including in small towns. For a senior who no
              longer drives, pharmacy delivery plus blister packs removes
              an entire category of errand; pair it with the options in
              our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "transportation",
                  article: "getting-to-appointments",
                }}
                className="text-primary underline"
              >
                rides guide
              </Link>{" "}
              and the week gets much lighter.
            </li>
            <li>
              <strong>One pharmacy, on purpose.</strong> Interaction
              checking only works if one system sees everything. Pick the
              pharmacy with the best service and move every prescription
              there.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "What medications cost after 65, honestly",
      body: (
        <>
          <p>
            At 65 every Ontarian is automatically covered by the{" "}
            <strong>Ontario Drug Benefit</strong>, which pays for more
            than 5,000 medications. The standard arrangement is a $100
            annual deductible and a co-payment of up to $6.11 per
            prescription. Lower-income seniors should apply for the{" "}
            <strong>Seniors Co-Payment Program</strong>, which removes
            the deductible and drops the co-payment to $2, and pharmacies
            can waive even that. The application is a single form, and
            pharmacists will help fill it in.
          </p>
          <p>
            If a prescribed drug is not on the public list, ask the
            doctor or pharmacist about covered alternatives first, then
            about the Exceptional Access Program, before anyone pays
            hundreds out of pocket. And keep receipts: prescription
            costs, along with many other care expenses, count toward the
            medical expense tax credit described in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "paying-for-care",
              }}
              className="text-primary underline"
            >
              paying for care guide
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Book a MedsCheck this week; it costs nothing and requires only a phone call to the pharmacy.</li>
            <li>Consolidate every prescription to one pharmacy and ask for synchronization so refills land on one day.</li>
            <li>Switch to blister packs or pouch packaging, and set up free delivery if getting to the pharmacy is any effort at all.</li>
            <li>Ask the deprescribing question at the next doctor or pharmacist visit: what here could be reduced or stopped?</li>
            <li>If money is tight, file the Seniors Co-Payment Program form; the pharmacist can help complete it on the spot.</li>
          </ol>
        </>
      ),
    },
  ],
};
