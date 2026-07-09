import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const MEALS_NUTRITION_ARTICLES: ArticleContentMap = {
  "meal-delivery-options": [
    {
      heading: "Why food is the first service to arrange, not the last",
      body: (
        <>
          <p>
            When families build a support plan, meals usually come last,
            after the alarms and the cleaners, because food feels like a
            preference rather than a safety issue. The order should be
            reversed. Eating well is one of the strongest predictors of
            staying healthy and independent at home, and a reliable meal
            arriving is also a person at the door, a routine in the day,
            and a quiet check that someone answered. For the cost of a
            few dollars a meal, it is the cheapest safety net in senior
            care.
          </p>
          <p>
            The landscape has more options than most families know, from
            volunteer-delivered hot lunches to national frozen-meal
            companies to ordinary grocery delivery. Here is all of it,
            with real prices.
          </p>
        </>
      ),
    },
    {
      heading: "Meals on Wheels: the classic, still the best value",
      body: (
        <>
          <p>
            <strong>Meals on Wheels</strong> is not one organization but
            hundreds of local programs, run by community support
            agencies across Ontario and Canada. A volunteer delivers a
            hot meal at lunchtime, typically two to five days a week,
            for roughly <strong>$7 to $12 a meal</strong>, subsidized
            and sometimes income-adjusted. Most programs also offer
            frozen meals for the days between deliveries, and many
            handle diabetic, low-sodium, pureed, and cultural diets.
          </p>
          <p>
            Two things families underestimate. First, the delivery is
            also a wellness check: drivers are trained to notice when
            something is wrong, and many a fall has been found within
            hours instead of days because a meal went unanswered.
            Second, there is no complicated intake; call 211 or the
            local community support agency, and delivery can often
            start within a week or two. If getting out is the harder
            problem, the same agencies usually run{" "}
            <strong>congregate dining</strong>, a hot lunch at a
            community site with company included, which quietly solves
            the loneliness problem covered in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "companion-social",
                article: "loneliness-is-a-health-risk",
              }}
              className="text-primary underline"
            >
              community programs guide
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "The private delivery layer, honestly compared",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Frozen meal companies built for seniors</strong>{" "}
              (Heart to Home Meals is the largest in Canada) deliver a
              few weeks of frozen meals at a time, roughly{" "}
              <strong>$8 to $13 a main course</strong>, no subscription
              required, with menus designed for older appetites and
              common diets. The practical fit: seniors who can manage a
              microwave but not a stove, and who want to choose their
              own menu from a catalogue, which many enjoy.
            </li>
            <li>
              <strong>Mainstream meal kits and prepared-meal
              subscriptions</strong> are built for busy workers, not
              seniors: portions, packaging, and app-based ordering all
              fit poorly. Usually the wrong tool.
            </li>
            <li>
              <strong>Grocery delivery</strong> from the major chains
              runs $5 to $10 a trip and solves the heavy-bags problem
              for seniors who still cook, which is worth protecting;
              cooking is exercise, planning, and dignity in one
              activity. A family member can manage the online order
              from anywhere.
            </li>
            <li>
              <strong>Restaurants and local caterers</strong> fill the
              gaps for special occasions and food fatigue; some small
              caterers run weekly senior delivery routes worth asking
              about.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Building the actual meal plan",
      body: (
        <>
          <p>
            The strongest setups combine layers rather than choosing
            one: Meals on Wheels three lunchtimes a week for the hot
            meal and the check-in, a freezer stocked by a monthly
            frozen-meal order for evenings, groceries delivered for
            breakfasts and the cooking the person still enjoys, and
            family dinners on the weekend. Total cost for the delivered
            portions of that plan runs roughly $250 to $400 a month,
            which compares well against almost any other service in
            senior care, and against the cost of not eating.
          </p>
          <p>
            Watch the plan work, then adjust. If delivered meals are
            stacking up uneaten, the problem is usually not the menu,
            and the warning signs in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "meals-nutrition",
                article: "when-a-senior-stops-eating-well",
              }}
              className="text-primary underline"
            >
              companion guide on appetite
            </Link>{" "}
            deserve a read.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Call 211 and ask which Meals on Wheels program serves the senior's address, what it costs, and which diets it handles.</li>
            <li>Order a trial week from a seniors' frozen-meal company and let the senior judge the catalogue themselves.</li>
            <li>Set up grocery delivery with a family member managing the online account, keeping the senior in charge of the list.</li>
            <li>Ask about congregate dining at the local seniors' centre; one lunch out a week feeds more than the body.</li>
            <li>Check the freezer and fridge a month in: the plan is working if food is disappearing, not accumulating.</li>
          </ol>
        </>
      ),
    },
  ],

  "when-a-senior-stops-eating-well": [
    {
      heading: "Tea and toast: how eating quietly falls apart",
      body: (
        <>
          <p>
            It rarely announces itself. A widow who cooked for a family
            for fifty years starts skipping the effort for one person; a
            meal becomes tea and toast, then toast. A man who never
            learned to cook loses his wife and lives on cereal and
            crackers. The weight comes off slowly, clothes are blamed on
            the dryer, and by the time anyone says malnutrition out
            loud, strength, balance, and immunity have been eroding for
            a year. Between a third and half of Canadian seniors are at
            nutritional risk, and it is among the most reversible
            serious problems in aging.
          </p>
          <p>
            The signs worth acting on: visible weight loss or clothes
            gone loose, an emptying fridge or one full of expired food,
            the same few foods on repeat, new fatigue or dizziness,
            wounds healing slowly, and more frequent infections.
            Dizziness plus weight loss is a falls forecast; the home
            safety work in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "medical-alert-safety",
                article: "fall-proofing-the-home",
              }}
              className="text-primary underline"
            >
              fall-proofing guide
            </Link>{" "}
            matters, but food is the root cause to fix.
          </p>
        </>
      ),
    },
    {
      heading: "Find the reason before buying the supplement",
      body: (
        <>
          <p>
            Poor eating is a symptom with a cause, and the cause decides
            the fix. The common ones, roughly in order of how often
            families find them: <strong>cooking for one feels
            pointless</strong> (a motivation problem, not a food
            problem); <strong>dental pain or ill-fitting dentures</strong>{" "}
            make chewing miserable, and a senior will quietly stop
            eating meat rather than complain;{" "}
            <strong>medications</strong> blunt appetite, dry the mouth,
            or make food taste like metal;{" "}
            <strong>depression and grief</strong> take appetite first,
            as our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mental-health-counselling",
                article: "depression-in-later-life",
              }}
              className="text-primary underline"
            >
              depression guide
            </Link>{" "}
            describes; <strong>memory change</strong> means meals are
            simply forgotten; and{" "}
            <strong>shopping and cooking have become physically
            hard</strong>, which is a logistics problem with easy
            answers.
          </p>
          <p>
            This is why the first stop is the family doctor and the
            dentist, not the supplement aisle: weight loss gets ruled
            out as illness, medications get reviewed (a free MedsCheck
            covers this, per our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "doctors-pharmacy-medication",
                article: "managing-multiple-medications",
              }}
              className="text-primary underline"
            >
              medication guide
            </Link>
            ), and the mouth gets fixed. A surprising number of
            "failing" seniors were rescued by a denture reline.
          </p>
        </>
      ),
    },
    {
      heading: "What actually gets more food in: the practical fixes",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Make eating social again.</strong> People eat
              more with company, reliably. Congregate dining, a
              standing family dinner, a neighbour trading suppers, or
              a companion visit timed to lunch all outperform lectures
              about protein.
            </li>
            <li>
              <strong>Remove the effort.</strong> Meals on Wheels and
              frozen delivery, covered in our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "meals-nutrition",
                  article: "meal-delivery-options",
                }}
                className="text-primary underline"
              >
                meal delivery guide
              </Link>
              , exist precisely for the person who can eat but will
              not cook.
            </li>
            <li>
              <strong>Go smaller and more often.</strong> Aging
              appetites do better with five small eatings than three
              plates. Leave good snacks where the person actually
              sits: cheese, yogurt, nuts, boiled eggs, full-fat
              everything.
            </li>
            <li>
              <strong>Protein first.</strong> Muscle is what weight
              loss steals and falls exploit. Eggs, dairy, fish,
              beans, and ground meats are the easy-chewing carriers.
            </li>
            <li>
              <strong>Supplement drinks are a bridge, not a menu.</strong>{" "}
              Ensure and Boost help while the real causes get fixed,
              ideally between meals rather than replacing them.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "When to bring in a professional",
      body: (
        <>
          <p>
            A <strong>registered dietitian</strong> is the specialist
            here, and free access exists: family health teams and
            community health centres have dietitians on staff, Ontario
            Health atHome (310-2222) can arrange dietitian visits as
            part of home care, and Health811 offers free phone
            consultations with a dietitian. Bring a written record of
            a typical week's eating; it makes the visit twice as
            useful. For unintended weight loss of more than a few
            kilograms, ask the family doctor for bloodwork and a
            swallowing assessment referral if meals end in coughing,
            since swallowing trouble is common after stroke and in
            dementia and has its own therapists.
          </p>
          <p>
            The encouraging truth: appetite responds to circumstances,
            and circumstances can be engineered. Fix the teeth, review
            the pills, add company, remove effort, and most seniors
            eat again. Food is one of the few problems in aging where
            the fixes are this concrete.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Weigh the concern: check the fridge, the cupboards, and the fit of clothes, and write down what a typical day's eating really is.</li>
            <li>Book the family doctor (rule out illness, review medications) and the dentist in the same fortnight.</li>
            <li>Start one delivery service and one social meal a week now, while causes are being investigated; food cannot wait for diagnostics.</li>
            <li>Stock effortless protein where the person sits, and shift to small, frequent eating without commentary.</li>
            <li>Ask the family health team or Health811 for a free dietitian consult, and reweigh in a month to confirm the trend has turned.</li>
          </ol>
        </>
      ),
    },
  ],
};
