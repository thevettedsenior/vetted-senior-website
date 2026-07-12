import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const HOME_MAINTENANCE_ARTICLES: ArticleContentMap = {
  "hiring-trades-seniors-can-trust": [
    {
      heading: "Why seniors' homes attract the wrong contractors",
      body: (
        <>
          <p>
            Ask any consumer protection office which fraud complaints involve
            victims over 65, and home repair is always near the top. The reasons
            are structural: seniors own older homes that genuinely need work,
            are home during the day when door-knockers work, were raised to be
            polite to people on their doorstep, and often no longer have the
            network of coworkers and neighbours that once supplied "a guy." The
            fix is not suspicion of everyone. It is a verification habit, the
            same one our founder applied in{" "}
            <Link to="/about" className="text-primary underline">
              bank compliance for twenty years
            </Link>
            : trust what checks out, decline what won't be checked.
          </p>
        </>
      ),
    },
    {
      heading: "The verification habit, in five checks",
      body: (
        <>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Licence, where one is required.</strong> In Ontario,
              electrical work must go through a Licensed Electrical Contractor
              (verifiable on the Electrical Safety Authority's site,
              esasafe.com), and anyone touching gas appliances needs TSSA
              registration. Plumbers, roofers, and general handypeople are
              municipally licensed in some cities (Toronto requires trade
              licences for several categories). Two minutes online, and "can you
              send me your licence number?" is a completely normal question that
              professionals answer without blinking.
            </li>
            <li>
              <strong>Insurance, in writing.</strong> Liability insurance (a
              certificate the contractor's broker emails in minutes) and, if
              they have employees, a WSIB clearance certificate, which you can
              verify yourself, free, at wsib.ca in under a minute. Without WSIB
              clearance, a worker hurt on the property can become the
              homeowner's problem. This single free check filters out an
              enormous share of trouble.
            </li>
            <li>
              <strong>
                Three written quotes for anything over about $1,000
              </strong>
              , itemized enough to compare. The value is not just the price; a
              contractor's quote is a sample of their paperwork, and sloppy
              paperwork predicts sloppy everything.
            </li>
            <li>
              <strong>References from jobs older than a year.</strong> Any
              contractor can produce a happy customer from last month. The
              question that matters: "how did it hold up, and did they come back
              when something needed fixing?"
            </li>
            <li>
              <strong>A payment schedule that keeps leverage.</strong> Small
              deposit (10 to 15 percent is plenty for most jobs), progress
              payments tied to completed stages, and a real final payment held
              until the work is done and inspected. Large cash deposits to "buy
              materials" are how homeowners fund other people's vanishing acts.
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: "The scams that come to the door",
      body: (
        <>
          <p>
            A few patterns account for most senior-targeted home repair fraud.
            Name them for your parent, out loud, because a scam that has been
            described in advance loses most of its power:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>
                "We were just doing work down the street and noticed your
                roof/chimney/driveway..."
              </strong>{" "}
              The leftover-materials driveway sealer and the free roof
              inspection that finds urgent damage are decades-old classics. Real
              contractors are booked; they do not troll for work door to door.
            </li>
            <li>
              <strong>The furnace/duct-cleaning phone call or knock</strong>,
              sometimes impersonating a utility. Ontario banned unsolicited
              door-to-door sales of furnaces, water heaters, and similar
              equipment precisely because of this; a contract signed at your
              door for that equipment is generally not enforceable. Nobody
              legitimate sells a furnace at the door.
            </li>
            <li>
              <strong>Manufactured urgency:</strong> "this price is only good
              today," "your insurance will be void if you don't fix this now."
              Urgency is the scammer's solvent for judgment. The family rule
              that beats it: nothing over $500 gets agreed at the door, ever;
              everything waits for one phone call to a family member. A senior
              armed with "my daughter handles that, leave your card" is nearly
              scam-proof.
            </li>
            <li>
              <strong>The overpayment/advance-fee variants</strong>: pay for
              materials up front, contractor evaporates. See payment schedule,
              above.
            </li>
          </ul>
          <p>
            If money was lost: report to the Canadian Anti-Fraud Centre
            (1-888-495-8501) and local police, and treat it without shame; these
            operations are professional and they work on everyone. If the
            pattern includes a family member or caregiver taking financial
            advantage, that is a different and serious thing: the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "recognizing-elder-abuse" }}
              className="text-primary underline"
            >
              Recognizing Elder Abuse guide
            </Link>{" "}
            covers it.
          </p>
        </>
      ),
    },
    {
      heading: "Building the roster before you need it",
      body: (
        <>
          <p>
            The best time to find a plumber is not during a flood. Build a short
            vetted roster in a calm month: one handyperson for the small-jobs
            list, one plumber, one electrician, one heating/cooling company,
            snow removal, and someone for eaves and roof. Sources that
            outperform search engines: neighbours with well-kept homes (ask them
            directly; people love recommending their finds), the local seniors'
            centre's grapevine, and building supply store staff, who see which
            contractors buy quality materials weekly.
          </p>
          <p>
            Then keep the roster warm: a handyperson who comes twice a year for
            a standing small-jobs visit learns the house, notices developing
            problems, and becomes the trusted first call, which is itself
            protection against the stranger at the door. This is exactly the
            directory we are building, province by province, with every provider
            verified the way this article describes, because "find someone
            trustworthy" should not require luck.{" "}
            <Link to="/get-vetted" className="text-primary underline">
              Know a tradesperson who deserves to be listed? Send them our way.
            </Link>
          </p>
        </>
      ),
    },
    {
      heading: "The one-page version for the fridge",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Nothing over $500 agreed at the door; "leave your card" is a
              complete sentence.
            </li>
            <li>
              Licence number checked, insurance certificate received, WSIB
              clearance verified free at wsib.ca.
            </li>
            <li>Three written quotes over $1,000.</li>
            <li>
              Small deposit, progress payments, meaningful final holdback.
            </li>
            <li>References from last year, not last month.</li>
          </ul>
          <p>
            The companion piece to this article is the maintenance plan itself:{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "home-maintenance",
                article: "aging-in-place-maintenance-plan",
              }}
              className="text-primary underline"
            >
              what needs doing, season by season
            </Link>
            , so the roster has a schedule to work against.
          </p>
        </>
      ),
    },
  ],

  "aging-in-place-maintenance-plan": [
    {
      heading: "Maintenance is a safety system, not chores",
      body: (
        <>
          <p>
            When a senior says "the house is getting to be too much," they are
            describing the number one stated reason for leaving a home earlier
            than wanted. Notice what the sentence is about: not cooking, not
            stairs, but the accumulating weight of eaves, filters, snow, and the
            forty small tasks a house demands. The good news hiding in that:
            maintenance can be systematized and delegated far more cheaply than
            housing can be replaced. $2,000 a year of hired help is two weeks of
            retirement residence rent.
          </p>
          <p>
            This guide is the system: what must happen and when, which tasks a
            senior should hand off first, and how to make the house itself
            easier to maintain.
          </p>
        </>
      ),
    },
    {
      heading: "The non-negotiables: safety-critical maintenance",
      body: (
        <>
          <p>
            A short list of tasks where "we got behind" becomes dangerous rather
            than untidy. These get scheduled first and checked by someone, every
            time:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Smoke and CO alarms</strong> tested twice a year,
              batteries changed, units replaced at their expiry date (they have
              one, printed on the back; most people have never looked).
            </li>
            <li>
              <strong>
                Furnace serviced annually and filters changed quarterly.
              </strong>{" "}
              A failed furnace in a February cold snap is a health emergency for
              a senior, not an inconvenience.
            </li>
            <li>
              <strong>
                Snow and ice, contracted in writing before the end of October.
              </strong>{" "}
              The driveway is where winter injures seniors, either by falls or
              by shovelling; both are fully preventable with one autumn phone
              call.
            </li>
            <li>
              <strong>Eavestroughs cleaned each fall:</strong> overflowing
              gutters ice the walkways below them.
            </li>
            <li>
              <strong>Dryer vent cleaned yearly</strong> (a genuine fire risk
              that hides behind the machine), and the water heater kept at 49°C
              to prevent scalds.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "What to hand off first: the ladder rule and the exertion rule",
      body: (
        <>
          <p>
            Two rules sort every task honestly.{" "}
            <strong>The ladder rule:</strong> past seventy or so, nobody's
            routine includes ladders and roofs; a fall from the second rung
            changes a life. Eaves, high windows, and anything overhead goes to
            hired help or family, permanently, and it is worth saying out loud
            so it is a policy rather than a negotiation each time.{" "}
            <strong>The exertion rule:</strong> snow shovelling is the textbook
            cardiac event trigger for older adults; it leaves the list the same
            way. What remains, gardening at ground level, small repairs,
            sweeping, is not just acceptable to keep; it is good for the person.
            The goal is removing danger, not removing purpose. A parent who
            putters is a parent doing physiotherapy that feels like Tuesday.
          </p>
        </>
      ),
    },
    {
      heading: "The seasonal rhythm, and the printable version",
      body: (
        <>
          <p>
            The full walkthrough is on the printable checklist below: the
            any-season safety items, the fall list (furnace, eaves, outdoor
            taps, snow contract, ice melt by every door), the spring list
            (walkway frost damage, dryer vent, screens, air conditioning tested
            before the first heat wave, deck boards), plus a handyperson work
            list with space for quotes. Do the walkthrough together, twice a
            year; it doubles as a natural, unforced check-in on how the person
            and the house are really doing.
          </p>
          <a
            href="/checklists/TVS_HM1_SeasonalHomeSafety.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Seasonal Home Safety Checklist (PDF)
          </a>
          <p>
            Costs, for planning: a reliable handyperson runs $50 to $100 an hour
            in most Ontario markets; seasonal eaves cleaning $150 to $400;
            residential snow contracts a few hundred to $1,000+ for the season
            depending on driveway and city; annual furnace service around $150
            to $250. Budget roughly $1,500 to $3,000 a year for a fully
            delegated maintenance load on a typical house, and see{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "paying-for-care",
              }}
              className="text-primary underline"
            >
              Paying for Care
            </Link>{" "}
            for the tax credits (and the veterans' program that specifically
            funds housekeeping and grounds maintenance).
          </p>
        </>
      ),
    },
    {
      heading: "Making the house lazier: downgrades that pay forever",
      body: (
        <>
          <p>
            The deepest fix is reducing what the house demands. When something
            wears out, replace it with the low-maintenance version: perennial
            ground cover instead of annual beds, a smaller lawn or no lawn,
            composite decking when the wood deck dies, LED bulbs everywhere (a
            15-year bulb is 15 years of a senior not standing on a chair), lever
            taps, and a smart thermostat that removes daily fiddling. None of
            this is glamorous. All of it compounds, and together with the
            delegation plan above it converts "the house is too much" into "the
            house runs itself," which is the whole aging in place project in one
            sentence.
          </p>
          <p className="italic">
            The bigger picture, including care, safety, and when staying home
            stops being the right answer, is in the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "staying-at-home" }}
              className="text-primary underline"
            >
              Staying at Home guide
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
};
