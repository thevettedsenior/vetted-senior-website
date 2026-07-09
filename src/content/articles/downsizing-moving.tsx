import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const DOWNSIZING_MOVING_ARTICLES: ArticleContentMap = {
  "senior-move-managers": [
    {
      heading: "The profession most families have never heard of",
      body: (
        <>
          <p>
            There is a certified profession whose entire job is moving
            older adults out of long-time homes, and most families
            discover it only after doing the move the hard way. A{" "}
            <strong>senior move manager</strong> plans the move, floor
            plans the new home so decisions get made once, manages the
            sorting of decades of belongings, arranges sale, donation,
            and disposal of what is not going, books and supervises the
            movers, and sets up the new home down to the pictures on
            the walls and the tea in the cupboard. The industry body is
            the National Association of Senior and Specialty Move
            Managers (NASMM), which has members across Canada and a
            code of ethics with teeth.
          </p>
          <p>
            The reason the profession exists is that a senior's move is
            not a logistics problem with feelings attached; it is a
            feelings problem with logistics attached. Good move
            managers are equal parts project manager and gentle
            diplomat, and families consistently describe them as worth
            every dollar.
          </p>
        </>
      ),
    },
    {
      heading: "What it costs, and what you get for it",
      body: (
        <>
          <p>
            Most senior move managers in Canada charge{" "}
            <strong>$50 to $95 an hour</strong>, and a typical
            house-to-apartment downsizing runs{" "}
            <strong>$2,500 to $7,500</strong> in management fees,
            depending on the size of the house and how much sorting
            help is wanted; the movers themselves are usually billed
            separately or passed through. That is real money, and it
            buys real things: weeks of family labour returned, a move
            that happens on schedule, and, not least, a professional
            standing calmly between an anxious senior and an
            overwhelming pile of decisions.
          </p>
          <p>
            Services are also modular. Families on tighter budgets hire
            the manager for the parts that hurt most, often the floor
            plan, the sorting sessions, and move-day supervision, and
            do the packing themselves. If the move is toward a
            retirement residence, the residence's marketing team often
            knows the local move managers well; the choosing of the
            residence itself is covered in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "retirement-residences",
                article: "touring-retirement-residences",
              }}
              className="text-primary underline"
            >
              tour guide
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Hiring a good one: the questions that sort the field",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Are you a NASMM member, and are you insured for both
              liability and the goods in your care? (Both should be
              yes, in writing.)
            </li>
            <li>
              May I speak to two recent client families? Then actually
              call them, the habit our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "home-maintenance",
                  article: "hiring-trades-seniors-can-trust",
                }}
                className="text-primary underline"
              >
                hiring guide
              </Link>{" "}
              calls the single most skipped step in vetting anyone.
            </li>
            <li>
              What is in the written estimate, what is hourly, and
              what triggers extra charges? A professional provides a
              written scope after a home visit, never a price over the
              phone.
            </li>
            <li>
              How do you handle items for sale, and do you take any
              commission or benefit from buyers? (Transparency here
              separates the ethical from the rest.)
            </li>
            <li>
              How do you work with the senior directly, especially one
              who is ambivalent about the move? The answer tells you
              whether you are hiring a mover or a move manager.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "If you manage the move yourselves",
      body: (
        <>
          <p>
            Plenty of families do, and the move managers' playbook is
            copyable: start with a scaled floor plan of the new home
            and decide what furniture fits before packing a single box,
            because "will it fit" answers most keep-or-go questions
            without an argument. Work room by room on a calendar that
            starts eight to twelve weeks out, never in one apocalyptic
            weekend. Book movers experienced with seniors' moves, in
            writing, with insurance confirmed. And set up the bedroom,
            bathroom, and kitchen completely on day one in the new
            home; the first morning decides how the new place feels
            for months.
          </p>
          <p>
            The emotional half of the project, what to do with a
            lifetime of belongings and how to decide without breaking
            hearts, is its own craft, and it has its own guide:{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "downsizing-moving",
                article: "sorting-a-lifetime-of-belongings",
              }}
              className="text-primary underline"
            >
              Sorting a Lifetime of Belongings
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
            <li>Search the NASMM directory and 211 for senior move managers serving the area, and book two home-visit consultations; most are free.</li>
            <li>Get written scopes from both, ask the commission question, and call the references.</li>
            <li>Decide which modules to buy and which the family will do, using the floor plan as the first deliverable either way.</li>
            <li>Set the calendar at eight to twelve weeks, anchored to the new home's move-in date.</li>
            <li>Whoever manages it, reserve the family's energy for the sentimental sorting; that part cannot be delegated.</li>
          </ol>
        </>
      ),
    },
  ],

  "sorting-a-lifetime-of-belongings": [
    {
      heading: "Why this is the hardest part of any move",
      body: (
        <>
          <p>
            Nobody grieves a couch. But the objects in a fifty-year
            household are not objects; they are proof of a life. The
            china from the wedding, the workshop of a man who fixed
            everything, boxes of photographs nobody has opened in
            twenty years. When families fight during a downsizing, and
            they do, it is almost never about logistics. It is about a
            son discovering his mother's things are "just stuff" to
            his sister, or a mother feeling her life being carried out
            the door in garbage bags. Treating the sorting as an
            emotional project with a logistics component, rather than
            the reverse, prevents most of it.
          </p>
          <p>
            Two ground rules do the heaviest lifting. The senior
            decides, wherever capacity allows, with family as helpers
            rather than judges; a person who chooses what to keep
            feels moved, and a person whose things are chosen for them
            feels evicted. And nothing sentimental gets discarded in
            secret. One discovered garbage bag can poison an entire
            move.
          </p>
        </>
      ),
    },
    {
      heading: "A sorting method that actually works",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Start with the floor plan, not the memories.</strong>{" "}
              Knowing the new home holds one bookcase makes "which
              books" a real question with a real answer.
            </li>
            <li>
              <strong>Start in the least sentimental room.</strong> The
              linen closet and the garage build the deciding muscle;
              the photographs come last, never first.
            </li>
            <li>
              <strong>Four destinations, physically labelled:</strong>{" "}
              coming along, family and gifts, sale or donation, and
              disposal. A fifth box, "decide later," is allowed exactly
              one box's worth of mercy per room.
            </li>
            <li>
              <strong>Work in two-hour sessions.</strong> Decision
              fatigue is real, and the worst choices and worst
              arguments happen in hour four.
            </li>
            <li>
              <strong>Honour the stories as you go.</strong> Photograph
              beloved items that cannot come, and let the senior tell
              the story of a thing before it leaves; half the time it
              is the story, not the thing, that needed keeping.
            </li>
            <li>
              <strong>Distribute family items in daylight.</strong> The
              senior says who gets what, ideally recorded in the way
              our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "legal-financial",
                  article: "five-legal-documents",
                }}
                className="text-primary underline"
              >
                legal documents guide
              </Link>{" "}
              describes for personal effects, and siblings take turns
              choosing. Silence here is where estate feuds are born.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "What things are actually worth, gently",
      body: (
        <>
          <p>
            The hardest news in downsizing is financial: the brown
            furniture, the formal china, the silver-plate, and the
            collections that were "an investment" have very little
            resale market. Younger buyers do not want them, and dealers
            know it. Genuine value hides in fewer places than hoped:
            mid-century furniture, some jewellery and watches, tools,
            certain art, and truly rare collectibles. For anything
            suspected valuable, a certified appraiser (paid by the
            hour, never by a cut of the sale) settles it; for the rest,
            honest expectations spare everyone the insult of the offer.
          </p>
          <p>
            The realistic channels: an <strong>estate sale or content
            sale company</strong> runs the whole sale for roughly 30 to
            50 percent of proceeds, worth it for full houses;
            consignment suits a few good pieces; online marketplaces
            pay best per item and cost the most effort. Donation is
            faster and kinder than most sales: charities with furniture
            programs, Habitat for Humanity ReStores, and refugee
            resettlement groups give belongings a second life, and
            donation receipts have tax value. What sells or donates
            slowest is disposal, and a junk-removal crew at the end is
            money well spent.
          </p>
        </>
      ),
    },
    {
      heading: "When the house is emptying because someone died",
      body: (
        <>
          <p>
            Clearing a home as executor or as the surviving family is
            this same project with grief poured over it. Practical
            notes for that harder version: secure valuables and
            documents first, before the house has visitors; do not let
            anyone, including family, remove items until the will's
            gifts are known, a point our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "funeral-estate-planning",
                article: "what-executors-actually-do",
              }}
              className="text-primary underline"
            >
              executor guide
            </Link>{" "}
            treats in detail; and give the family one unhurried
            walkthrough for keepsakes before any sale company arrives.
            Then go slower than the real estate timeline wants. An
            extra month of carrying costs is cheaper than a decision
            the family regrets for a decade.
          </p>
          <p>
            And for the surviving spouse being moved in the same
            season: the belongings are the smaller loss. The{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "recently-widowed" }}
              className="text-primary underline"
            >
              recently widowed guide
            </Link>{" "}
            is the companion to keep open beside this one.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Draw the new home's floor plan and let it answer the furniture questions before any emotional sorting begins.</li>
            <li>Schedule two-hour sessions on a calendar starting with the garage, not the photo albums.</li>
            <li>Set the two ground rules with the whole family in advance: the senior decides, and nothing sentimental leaves in secret.</li>
            <li>Get one professional opinion on anything believed valuable, then choose sale, consignment, or donation channels realistically.</li>
            <li>Book the estate sale company or donation pickups three to four weeks before moving day, and junk removal for the week after.</li>
          </ol>
        </>
      ),
    },
  ],
};
