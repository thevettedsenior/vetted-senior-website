import { Link } from "@tanstack/react-router";
import { AmazonSearchLink } from "@/components/Affiliate";
import type { ArticleContentMap } from "./types";

export const MOBILITY_EQUIPMENT_ARTICLES: ArticleContentMap = {
  "choosing-a-walker-or-rollator": [
    {
      heading: "The rule that saves you hundreds of dollars: assessment before purchase",
      body: (
        <>
          <p>
            Here is the mistake that costs Ontario families real money every
            single week: they buy the walker first and ask about funding
            after. Ontario's Assistive Devices Program (ADP) pays 75 percent
            of the cost of an approved mobility device, but only when an
            authorized health professional, usually an occupational therapist
            or physiotherapist, assesses the person and prescribes the device
            <em> before</em> it is purchased, and only when it is bought from
            an ADP-registered vendor. Buy first, and the funding is gone.
            Permanently, for that device.
          </p>
          <p>
            So the order is: doctor or Ontario Health atHome (310-2222) for a
            therapist assessment, then prescription, then an ADP-registered
            vendor. The assessment itself is often free through the public
            system. Yes, it adds two or three weeks. It also cuts the price
            of a $500 rollator to $125, and it means the device actually
            fits, which matters more than the money.
          </p>
          <p>
            The rest of this guide explains what the devices are, so you walk
            into that assessment informed rather than starting from zero.
          </p>
        </>
      ),
    },
    {
      heading: "Cane, walker, or rollator: what each one is actually for",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>A cane</strong> offloads a little weight and adds a
              third point of balance. Right for mild unsteadiness or a weak
              side. Wrong as a fix for real balance problems; a cane cannot
              stop a fall, only make one slightly less likely. Height
              matters: with the arm hanging relaxed, the handle should meet
              the wrist crease. A cane at the wrong height actively hurts
              posture and wrists.
            </li>
            <li>
              <strong>A standard walker</strong> (four rubber tips, no
              wheels, or two front wheels) is the most stable option that is
              still portable. It is right when the person needs to lean real
              weight on the frame. The cost of that stability is a slow,
              lift-step-lift gait, and it is exhausting over distance.
            </li>
            <li>
              <strong>A rollator</strong> (four wheels, hand brakes, a seat)
              is for people who can walk but tire or lose balance over
              distance. It moves at walking speed, carries the groceries in
              its basket, and the seat turns "I can't make it that far" into
              "I'll rest at the halfway point." The trade-off: it will not
              hold full body weight the way a standard walker will, and weak
              hands struggle with the brakes. Someone who leans heavily needs
              a walker, not a rollator; a rollator rolls away from exactly
              the person who grabs it hardest.
            </li>
          </ul>
          <p>
            The therapist's assessment sorts this out properly, including
            measurements, gait, cognition (brakes require remembering
            brakes), and where the device will actually be used. Narrow
            hallways and rollators are an unhappy pairing; so are standard
            walkers and gravel driveways.
          </p>
        </>
      ),
    },
    {
      heading: "What things cost, with and without help",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>Canes: $20 to $60, not typically ADP-funded, and honestly fine to buy retail once a therapist confirms a cane is enough and sets the height.</li>
            <li>Standard walkers: roughly $150 to $350 retail; ADP covers 75 percent with the assessment-first process.</li>
            <li>Rollators: roughly $300 to $700 for solid quality; same ADP math applies, bringing a $400 rollator to about $100 out of pocket.</li>
            <li>Wheelchairs and power scooters: a different tier of cost and process, always through ADP with a therapist, never bought casually.</li>
          </ul>
          <p>
            Veterans may have equipment coverage through Veterans Affairs,
            and the medical expense tax credit applies to what you pay out of
            pocket; keep receipts. The full money map is in{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "paying-for-care" }}
              className="text-primary underline"
            >
              Paying for Care
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Where affiliate links make sense here, and where they don't",
      body: (
        <>
          <p>
            We will be straight with you about the boundary. The funded
            device itself should come from an ADP-registered vendor after an
            assessment, so we link nothing there. The accessories that make a
            device work day to day are a different story: they are cheap,
            unfunded, and genuinely useful, and ours are affiliate links per{" "}
            <Link to="/disclosure" className="text-primary underline">
              our disclosure
            </Link>
            :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <AmazonSearchLink query="replacement cane tips rubber">
                Replacement rubber tips
              </AmazonSearchLink>{" "}
              (canes and walkers wear through them; a worn tip is a slip)
            </li>
            <li>
              <AmazonSearchLink query="cane ice pick attachment winter">
                Winter ice-grip cane attachments
              </AmazonSearchLink>{" "}
              that flip down for Canadian sidewalks
            </li>
            <li>
              <AmazonSearchLink query="walker rollator cup holder attachment">
                Cup holders
              </AmazonSearchLink>{" "}
              and{" "}
              <AmazonSearchLink query="walker organizer pouch">
                organizer pouches
              </AmazonSearchLink>
              , because a walker that carries the tea gets used
            </li>
            <li>
              <AmazonSearchLink query="walker glide skis rear">
                Rear glide skis
              </AmazonSearchLink>{" "}
              that make a standard walker slide instead of scrape on indoor
              floors
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The part nobody warns you about: getting them to use it",
      body: (
        <>
          <p>
            Half the walkers in Canada live in closets. The device is an
            announcement of decline in the user's eyes, and pushing harder
            makes the resistance stronger. Three things that actually help:
            let the therapist, not the family, make the recommendation
            (outside authority lands differently than a worried child); frame
            the device around destinations, not deficits ("this is how we
            keep doing the market on Saturdays"); and make sure it fits and
            rolls well, because a badly fitted rollator genuinely is
            unpleasant to use, and the complaint is data, not stubbornness.
          </p>
          <p className="italic">
            If the resistance runs deeper than the walker, the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-refuses-help" }}
              className="text-primary underline"
            >
              Parent Refuses Help guide
            </Link>{" "}
            is about exactly this dynamic.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>Do not buy the device yet.</li>
          <li>Call the family doctor or Ontario Health atHome (310-2222) and ask for a mobility assessment by an OT or physiotherapist.</li>
          <li>At the assessment, describe the real life: distances, stairs, shopping, winter.</li>
          <li>Buy the prescribed device from an ADP-registered vendor so the 75 percent funding applies.</li>
          <li>Set a reminder to check the tips and brakes every six months.</li>
        </ol>
      ),
    },
  ],

  "stairlifts-and-home-modifications": [
    {
      heading: "Start with the question, not the product",
      body: (
        <>
          <p>
            The stairlift industry advertises heavily, and its salespeople
            are excellent. So before any of it: the question is never "should
            we get a stairlift," it is "what is the cheapest safe way for
            this person to live in this house for the next five years."
            Sometimes the answer is a $4,000 stairlift. Sometimes it is
            moving the bedroom downstairs for free. An occupational
            therapist's home assessment answers it properly, often at no
            cost through Ontario Health atHome (310-2222), and produces the
            written recommendation that funding programs want to see anyway.
          </p>
          <p>
            This guide covers the big three: stairlifts, ramps, and bathroom
            renovations, with honest Canadian prices and the funding that
            exists in Ontario.
          </p>
        </>
      ),
    },
    {
      heading: "Stairlifts: real prices and the used-market secret",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>A straight staircase stairlift</strong> runs roughly
              $3,000 to $5,500 installed, new.
            </li>
            <li>
              <strong>Curved staircases</strong> need custom rails and jump
              to $10,000 to $15,000 or more. If the staircase has a landing,
              ask about two straight lifts instead of one curved one; it is
              often thousands cheaper.
            </li>
            <li>
              <strong>The used and rental market is real.</strong> Straight
              lifts are routinely reconditioned and reinstalled for half the
              new price, and several Ontario dealers rent by the month,
              which is the right call for post-surgery recovery. Curved
              lifts, being custom, have almost no used market.
            </li>
          </ul>
          <p>
            Questions for any stairlift quote: is the price installed and
            all-in, what does the warranty cover and for how long, what does
            annual servicing cost, does it run on battery through a power
            outage, and what is the buy-back or removal cost later. A seat
            that swivels at the top and folds out of the way at the bottom
            is not a luxury; it is the difference between a safe exit and a
            dismount over open stairs.
          </p>
        </>
      ),
    },
    {
      heading: "Ramps and doorways",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Threshold ramps</strong> (the small wedge over a door
            sill): $50 to $200, solves more daily friction per dollar than
              almost anything else for walker and wheelchair users.
            </li>
            <li>
              <strong>Portable and modular aluminum ramps:</strong> a few
              hundred to a few thousand dollars depending on run length.
              Building code wants gentle slopes; a rushed steep ramp is a
              new hazard, not an accessibility feature. This is a job for
              someone who does ramps, not a general favour.
            </li>
            <li>
              <strong>Permanent wooden or concrete ramps:</strong> $2,000 to
              $10,000 depending on rise and materials, plus railings.
            </li>
            <li>
              <strong>Doorway widening</strong> for wheelchair access:
              roughly $700 to $2,500 per door depending on what lives inside
              the wall. Offset "swing-clear" hinges buy about two inches for
              under $50 and sometimes make the renovation unnecessary.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The bathroom: the most expensive room and the most worth it",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Tub-to-walk-in-shower conversions:</strong> the
              honest Ontario range is $6,000 to $15,000 done properly with
              waterproofing, a curbless or low-curb entry, blocking in the
              walls for grab bars, and a hand shower. Be suspicious at both
              ends of that range.
            </li>
            <li>
              <strong>"Walk-in tubs" deserve skepticism.</strong> They are
              heavily marketed to seniors, cost $8,000 to $20,000, require
              sitting in the tub while it fills and drains, and many
              families report regret. An OT's opinion before a walk-in tub
              contract is worth hundreds of times its cost.
            </li>
            <li>
              <strong>The modest version</strong> (grab bars, shower chair,
              handheld head, raised toilet seat) costs under $300 and is
              covered in our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "medical-alert-safety",
                  article: "fall-proofing-the-home",
                }}
                className="text-primary underline"
              >
                fall-proofing guide
              </Link>
              . Exhaust the modest version first.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Who helps pay in Ontario",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The federal Home Accessibility Tax Credit:</strong> 15
              percent back on up to $20,000 of eligible renovation per year,
              claimable alongside the medical expense credit for the same
              work in many cases.
            </li>
            <li>
              <strong>The Ontario Seniors Care at Home Tax Credit</strong>{" "}
              and medical expense credit can apply to some equipment and
              installation; keep every invoice.
            </li>
            <li>
              <strong>March of Dimes Canada's Home and Vehicle Modification
              Program</strong> provides substantial grants for Ontario
              residents with mobility restrictions who meet income
              criteria. The waitlist is real; apply early.
            </li>
            <li>
              <strong>Veterans:</strong> the Veterans Independence Program
              can fund home adaptations. Even short service is worth a call
              to Veterans Affairs.
            </li>
            <li>
              <strong>Some municipalities</strong> run renovation grant or
              loan programs for accessibility. Call 211 with the city name
              and ask.
            </li>
          </ul>
          <p>
            ADP, useful for walkers and wheelchairs, does not fund home
            renovations, a distinction that confuses many families. The
            broader financing picture, including when home equity is and is
            not the right tool, is in{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "paying-for-care" }}
              className="text-primary underline"
            >
              Paying for Care
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Buying it without being taken",
      body: (
        <>
          <p>
            Big-ticket accessibility purchases attract the same sales
            tactics as any home improvement, aimed at a more trusting
            audience. The defenses are boring and effective: three written
            quotes for anything over $2,000; no signing on the first visit,
            ever, no matter the "today-only" discount (a discount that
            expires when the salesperson leaves the driveway is a pressure
            tactic, not a price); proof of liability insurance and WSIB
            coverage before work starts; and a payment schedule that holds
            back a meaningful final payment until the work is done and
            inspected. Our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "home-maintenance",
                article: "hiring-trades-seniors-can-trust",
              }}
              className="text-primary underline"
            >
              guide to hiring trades
            </Link>{" "}
            covers the full verification habit.
          </p>
        </>
      ),
    },
  ],
};
