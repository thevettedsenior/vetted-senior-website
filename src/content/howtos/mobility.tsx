import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "../articles/types";
import {
  CaneHeightDiagram,
  CaneSideDiagram,
  WalkerPositionDiagram,
  StairsDiagram,
  BalanceExercisesDiagram,
  PenguinWalkDiagram,
} from "./diagrams";

export const MOBILITY_HOWTOS: ArticleContentMap = {
  "how-to-use-a-cane": [
    {
      heading: "Why most people use a cane wrong",
      body: (
        <>
          <p>
            Nobody teaches this. A cane arrives from the pharmacy or a
            relative's closet, it gets held in whichever hand feels natural, at
            whatever height it came, and that is that. Physiotherapists estimate
            that most self-taught cane users get at least one of the three
            basics wrong: the height, the side, or the timing. Each mistake
            quietly makes walking harder and less safe, which is the opposite of
            what the cane is for.
          </p>
          <p>
            The good news is that all three basics take about ten minutes to
            learn, and the difference is immediate: less wrist and shoulder
            pain, a straighter back, and a steadier walk.
          </p>
        </>
      ),
    },
    {
      heading: "Step 1: Set the height to your wrist crease",
      body: (
        <>
          <p>
            Stand tall in the shoes you actually wear, arms hanging relaxed at
            your sides. Have someone stand the cane beside you: the top of the
            handle should line up with the crease on the inside of your wrist.
            When you then grip the handle, your elbow bends slightly, about 15
            to 20 degrees. That slight bend is what lets your arm push down on
            the cane without hiking your shoulder.
          </p>
          <CaneHeightDiagram />
          <p>
            Too tall, and your shoulder rides up while your wrist bends
            backward, which is where cane-related wrist pain comes from. Too
            short, and you stoop toward it, throwing your weight forward. Most
            drugstore canes adjust with a push button and a locking collar; set
            it once, tighten the collar, and check it again if you change
            footwear styles.
          </p>
        </>
      ),
    },
    {
      heading: "Step 2: Hold it on the side OPPOSITE the weaker leg",
      body: (
        <>
          <p>
            This is the one that surprises everyone. The cane goes in the hand
            opposite the painful or weak leg. Bad right knee, cane in the left
            hand. It feels wrong for about five minutes, and then it feels
            obviously right.
          </p>
          <CaneSideDiagram />
          <p>
            The reason is how walking works: when your weak leg steps forward
            and takes weight, the opposite arm swings forward naturally. Putting
            the cane in that opposite hand means the cane hits the ground
            exactly when the weak leg needs help, sharing the load between the
            cane and the leg. On the same side, the cane and the weak leg are
            never on the ground together at the right moment, so your body
            lurches from one to the other.
          </p>
        </>
      ),
    },
    {
      heading: "Step 3: Move the cane and the weaker leg together",
      body: (
        <>
          <p>
            The walking pattern is simple: cane and weaker leg swing forward
            together, land together, and then the stronger leg steps past them.
            Cane and weak leg, then strong leg. That is the whole rhythm.
          </p>
          <p>
            Keep the tip close, planted about a hand's width to the side of your
            foot, not stretched out ahead. Reaching far forward with the cane
            feels safer but actually pulls your body off balance and loads the
            wrist. Small steps, cane close, eyes ahead rather than on your feet.
          </p>
        </>
      ),
    },
    {
      heading: "The five-second maintenance habit",
      body: (
        <>
          <p>
            The rubber tip is the cane's tire, and a worn tip on a wet tile
            floor is a genuine hazard. Flip the cane over once a month: if the
            tread is smooth, cracked, or the rubber has hardened, replace it.
            Tips cost a few dollars at any pharmacy and press on by hand. In
            winter, a flip-down ice pick attachment turns the same cane into a
            winter cane; our{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-walk-on-ice-and-snow" }}
              className="text-primary underline"
            >
              guide to walking on ice and snow
            </Link>{" "}
            covers winter gear properly.
          </p>
        </>
      ),
    },
    {
      heading: "When a cane is the wrong tool",
      body: (
        <>
          <p>
            A cane offloads a sore joint and adds one point of steadiness. It
            cannot fix a real balance disorder, and asking it to is how people
            get hurt. Watch for these signs that the situation has outgrown the
            cane: still grabbing furniture and walls while using it, near-falls
            with the cane in hand, or needing two hands to feel safe. Any of
            those means it is time for a proper mobility assessment, which in
            Ontario is free through your doctor or Ontario Health atHome at
            310-2222, and which also unlocks{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mobility-equipment",
                article: "choosing-a-walker-or-rollator",
              }}
              className="text-primary underline"
            >
              75 percent ADP funding toward a walker
            </Link>{" "}
            if that is the recommendation.
          </p>
          <p>
            And one honest word for the person who has the cane but leaves it at
            home: using a cane in public is not an announcement of decline.
            Falling in public is. The cane is how you keep the Saturday market,
            the church aisle, and the grandchildren's driveway.
          </p>
        </>
      ),
    },
  ],

  "how-to-use-a-walker-safely": [
    {
      heading: "The one habit that causes most walker falls",
      body: (
        <>
          <p>
            Watch someone struggle with a walker and you will almost always see
            the same thing: the walker drifts out ahead, the person bends at the
            waist to reach it, and now they are chasing their own equipment
            across the room, off balance with every step. The fix is a single
            idea: <strong>you walk inside the frame, not behind it.</strong>
          </p>
          <WalkerPositionDiagram />
          <p>
            Standing tall between the back legs or back wheels, the frame
            surrounds you like a railing on three sides. That is the entire
            point of the device. If you can see the whole walker out in front of
            you, it is too far away.
          </p>
        </>
      ),
    },
    {
      heading: "Fit it in two minutes: handles at the wrist crease",
      body: (
        <>
          <p>
            The height rule is the same as for a cane: stand tall in your usual
            shoes inside the frame, arms relaxed at your sides, and set the
            handles level with the creases of your wrists. Gripping them should
            leave a slight bend in your elbows, about 15 to 20 degrees. Set both
            sides to the same notch and make sure every adjustment button clicks
            fully home; a half-latched leg collapses under weight.
          </p>
          <p>
            Handles too low force a stoop, which hurts the back and pushes the
            walker away. Too high, and the shoulders shrug up while the arms
            lose their pushing strength.
          </p>
        </>
      ),
    },
    {
      heading: "Walking: two different techniques for two different tools",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Standard walker (no wheels or front wheels only):</strong>{" "}
              move the walker one comfortable step ahead, make sure all four
              tips are flat and still, then step into the frame, weak leg first
              if one side is weaker. Lift it, place it, step. It is slow on
              purpose; the stillness is the stability.
            </li>
            <li>
              <strong>Rollator (four wheels, brakes, seat):</strong> push it
              smoothly at your natural walking pace, keeping it close enough
              that your posture stays upright. Feather the brakes on ramps and
              slopes. A rollator is a moving handrail, not a shopping cart to
              lean into.
            </li>
          </ul>
          <p>
            Turning is where tips happen with both kinds: take small steps and
            turn in a wide arc together with the frame. Never pivot your body
            while the walker keeps going straight.
          </p>
        </>
      ),
    },
    {
      heading: "The sitting-down rule that prevents the worst accidents",
      body: (
        <>
          <p>
            Rollator seats cause a specific, predictable accident: someone sits
            without locking the brakes, the rollator rolls, and they go down
            backward with nothing to grab. So make it mechanical:{" "}
            <strong>
              squeeze and lock both brakes every time, before you sit, and keep
              them locked until you are standing again.
            </strong>{" "}
            Most rollators lock by pushing the brake levers down until they
            click.
          </p>
          <p>
            The same discipline applies in reverse: never sit on the seat and
            scoot along with your feet, and never let anyone push you on it. A
            rollator seated with a person is not a wheelchair; it has no
            footrests, the wrong wheels, and the wrong brakes for it. If being
            pushed is what is needed, a transport chair is the right tool and
            worth asking about at the same assessment.
          </p>
        </>
      ),
    },
    {
      heading: "Getting up from a chair with a walker nearby",
      body: (
        <>
          <p>
            The instinct is to grab the walker and pull yourself up. Resist it:
            a walker pulled toward you can tip over onto you, and even a locked
            rollator can shift. Instead, scoot to the edge of the chair, push up
            from the chair's armrests, stand fully, find your balance, and then
            take the walker's handles. The walker is for walking; the chair is
            for standing up. Our guide on{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-help-someone-stand-up" }}
              className="text-primary underline"
            >
              helping someone stand up
            </Link>{" "}
            covers the same move from the helper's side.
          </p>
        </>
      ),
    },
    {
      heading: "Doorways, thresholds, and the rest of the real world",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Thresholds and door sills:</strong> approach square-on,
              slow down, and with a standard walker lift it fully over rather
              than dragging. A $50 threshold ramp removes the worst sill in the
              house.
            </li>
            <li>
              <strong>Carpet edges and scatter mats:</strong> scatter mats and
              walkers are enemies. The mats should simply go.
            </li>
            <li>
              <strong>Curbs with a rollator:</strong> brakes on, front wheels up
              first using the frame, then step up after it. Coming down, walker
              goes down first, then you.
            </li>
            <li>
              <strong>Stairs:</strong> never. Walkers do not do stairs; the
              usual answer is a second walker on the other floor. The{" "}
              <Link
                to="/how-to/$slug"
                params={{ slug: "how-to-climb-stairs-safely" }}
                className="text-primary underline"
              >
                stairs guide
              </Link>{" "}
              covers the technique for the stairs themselves.
            </li>
          </ul>
          <p>
            If the walker itself is the problem, wrong size, wrong type, or
            fighting the hallways of the actual house, the buying decision
            deserves a redo:{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mobility-equipment",
                article: "choosing-a-walker-or-rollator",
              }}
              className="text-primary underline"
            >
              our walker and rollator guide
            </Link>{" "}
            explains the assessment route that also gets Ontario's ADP to pay 75
            percent.
          </p>
        </>
      ),
    },
  ],

  "how-to-climb-stairs-safely": [
    {
      heading: "One rule to memorize: up with the good, down with the bad",
      body: (
        <>
          <p>
            Physiotherapists have taught stairs the same way for decades because
            it works. Going up, your strong leg steps up first and lifts your
            body; the weaker leg and the cane join it on the same step. Coming
            down, the cane and the weaker leg go down first, and the strong leg,
            still on the higher step, lowers you with control.
          </p>
          <StairsDiagram />
          <p>
            The logic: the strong leg always does the hard work, lifting on the
            way up and braking on the way down, while it stays on the higher
            step. Say it once out loud on the bottom step, up with the good,
            down with the bad, and it sticks.
          </p>
        </>
      ),
    },
    {
      heading: "Both feet on each step is proper technique, not defeat",
      body: (
        <>
          <p>
            Bringing both feet together on every step before taking the next,
            what therapists call step-to gait, is the recommended method for
            anyone with a weak side, a sore joint, or any unsteadiness. It cuts
            the balance demand of stairs roughly in half. Nobody is timing you.
            The alternating climb of a forty-year-old is not the goal; arriving
            at the top is.
          </p>
          <p>
            Rail first, every time, even for two steps, even carrying nothing,
            even in the familiar dark of your own house at 2 a.m. Most stair
            falls at home happen on short, familiar flights precisely because
            they do not feel like a risk.
          </p>
        </>
      ),
    },
    {
      heading: "Stairs with a cane: which hand holds what",
      body: (
        <>
          <p>
            Rail on your strong side: perfect. Hold the rail with your strong
            hand and the cane in the other, using it as taught. Rail only on
            your weak side: hold the rail anyway, with the cane in the opposite
            hand. A rail beats correct cane-side theory on stairs, always. If
            carrying the cane is awkward, hook it over your forearm or the wrist
            of your rail hand rather than climbing with it dangling in your
            grip.
          </p>
          <p>
            If the house has stairs used daily and only one rail, a second rail
            on the other wall costs a few hundred dollars installed and is among
            the highest-value safety spends in the whole house, alongside{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-place-grab-bars" }}
              className="text-primary underline"
            >
              grab bars
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Hands full is how stair falls start",
      body: (
        <>
          <p>
            Laundry baskets, groceries carried in both hands, the cat carrier:
            stairs demand one hand for the rail at all times, so the cargo has
            to adapt. A crossbody bag or small backpack carries most daily
            loads. For everything else, the two-basket system works: one basket
            lives at the top of the stairs, one at the bottom, things pile up in
            them, and they travel only when someone with two free hands and
            steady legs is passing anyway.
          </p>
        </>
      ),
    },
    {
      heading: "Helping someone on stairs: stand on the downhill side",
      body: (
        <>
          <p>
            The helper's position is always downhill of the person: one or two
            steps below when they climb, directly in front and facing them when
            they descend. Downhill is where a stumble goes, and a braced helper
            below can stop one; a helper above can only watch. The hand goes
            lightly at the waist, hip, or a gait belt, never gripping an arm,
            and the person, not the helper, holds the rail and sets the pace.
          </p>
          <p>
            If stairs need real muscle rather than a steadying hand, that is the
            line where technique ends and equipment begins. An occupational
            therapist can assess whether the answer is a second rail, a{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mobility-equipment",
                article: "stairlifts-and-home-modifications",
              }}
              className="text-primary underline"
            >
              stairlift
            </Link>
            , or moving life to the main floor, and the assessment is often free
            through Ontario Health atHome at 310-2222.
          </p>
        </>
      ),
    },
    {
      heading: "Make the stairs themselves easier to survive",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Light them properly.</strong> A switch at both top and
            bottom, bright bulbs, and a plug-in night light. Most night stair
            falls are simply about not seeing the last step.
          </li>
          <li>
            <strong>Mark the edges.</strong> A strip of high-contrast tape on
            the nose of each step, especially the first and last, does wonders
            for aging eyes that judge depth poorly.
          </li>
          <li>
            <strong>Clear the runway.</strong> Nothing stored on steps, ever.
            The pile of things waiting to go up is a documented fall cause with
            its own emergency-room statistics.
          </li>
          <li>
            <strong>Fix the carpet.</strong> Loose stair runners and worn treads
            get repaired or removed, not stepped around.
          </li>
        </ul>
      ),
    },
  ],

  "how-to-do-balance-exercises-at-home": [
    {
      heading: "The strongest fall-prevention evidence there is",
      body: (
        <>
          <p>
            No pendant, grab bar, or pair of boots comes close: structured
            strength and balance exercise is the single best-proven way to
            prevent falls, reducing them by roughly a quarter to a third in
            large trials. Programs built on exactly the exercises below, like
            New Zealand's Otago programme, cut falls by around 35 percent in the
            frailest participants. The catch is the same as all exercise: it
            works if it happens, two to three times a week, indefinitely.
          </p>
          <p>
            One safety note before starting: if there has already been a fall,
            or standing exercises feel frightening rather than merely effortful,
            start with a physiotherapist or a community falls-prevention class
            instead of alone at the counter. Call 211 and ask what runs near
            you; most Ontario communities have free or cheap options.
          </p>
        </>
      ),
    },
    {
      heading: "Set up a safe practice spot",
      body: (
        <>
          <p>
            Everything below happens at the kitchen counter or behind a heavy,
            stable chair, something that takes real weight without shifting.
            Wear supportive shoes or go barefoot; socks on smooth floors are how
            balance practice becomes a fall. Clear the floor behind you, keep a
            phone within reach, and for the first few sessions have another
            person in the room. The counter is the spotter: start every exercise
            holding it, and earn the lighter grips.
          </p>
        </>
      ),
    },
    {
      heading: "The five exercises",
      body: (
        <>
          <BalanceExercisesDiagram />
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Sit-to-stands, 10 times.</strong> From a firm chair, scoot
              to the edge, feet back under your knees, lean nose over toes, and
              stand, using your hands on the armrests only as much as needed.
              Lower back down slowly, which is half the exercise. This one move
              is the best predictor of staying independent.
            </li>
            <li>
              <strong>Heel raises, 10 times.</strong> Holding the counter, rise
              onto your toes with ankles straight, pause, lower with control.
            </li>
            <li>
              <strong>Toe raises, 10 times.</strong> Same position; rock back
              onto your heels, lifting the front of each foot. Shin strength is
              what clears your toes over curbs and carpet edges.
            </li>
            <li>
              <strong>Tandem stance, 10 to 30 seconds each side.</strong> One
              foot directly in front of the other, heel touching toe, eyes
              ahead. Swap which foot leads.
            </li>
            <li>
              <strong>Side leg raises, 10 per side.</strong> Standing tall, lift
              one leg out to the side without leaning, lower slowly. Hip
              strength keeps the pelvis level every time you take a step.
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: "How to progress without gambling",
      body: (
        <>
          <p>
            Progress one dial at a time. The handhold dial: whole hand on the
            counter, then fingertips, then hovering hands an inch above it. The
            repetition dial: 10 becomes 12 becomes 15, or a second set after a
            rest. The surface dial, for later months: the same exercises
            standing on a firm cushion. When tandem stance with hovering hands
            is easy, add tandem walking, ten heel to toe steps along the counter
            edge.
          </p>
          <p>
            Two rules never change: something sturdy stays within reach, and
            pain or dizziness ends the session and earns a mention to the
            doctor. Dizziness on standing in particular is worth reporting; it
            is often a medication or blood pressure issue that is very fixable,
            and it is covered in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "doctors-pharmacy-medication",
                article: "managing-multiple-medications",
              }}
              className="text-primary underline"
            >
              medications guide
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Making it stick: the boring secret",
      body: (
        <>
          <p>
            The routine takes about twelve minutes, and the research is blunt:
            benefits fade within months of stopping. So attach it to something
            that already happens daily. The kettle takes four minutes to boil:
            that is heel raises and tandem stance. The commercial break, the
            microwave countdown, the wait for the morning pills to be sorted.
            Two or three anchored mini-sessions beat one heroic gym plan that
            dies in February.
          </p>
          <p>
            Company helps too. Tai chi classes have fall-prevention evidence
            nearly as strong as the counter routine and add the thing a kitchen
            cannot: other people. Seniors' centres and community health centres
            run them cheaply;{" "}
            <Link
              to="/help/$category"
              params={{ category: "companion-social" }}
              className="text-primary underline"
            >
              our social programs section
            </Link>{" "}
            explains where to look.
          </p>
        </>
      ),
    },
  ],

  "how-to-walk-on-ice-and-snow": [
    {
      heading: "First decision: is this trip happening at all?",
      body: (
        <>
          <p>
            The most effective winter walking technique is scheduling. Freezing
            rain, the first melt-refreeze morning, the glazed evening after a
            sunny thaw: these are the days that fill Canadian fracture clinics,
            and most trips taken on them could have waited a day or moved to
            midday, when sun and salt have done their work. Groceries deliver.
            Pharmacies deliver. A hip does not undo.
          </p>
          <p>
            For the trips that do happen, the rest is technique and equipment,
            in that order.
          </p>
        </>
      ),
    },
    {
      heading: "The penguin walk, done properly",
      body: (
        <>
          <p>
            Penguins walk the way they do because it is the mechanically correct
            gait for ice, and copying them works for humans:
          </p>
          <PenguinWalkDiagram />
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Short steps, whole foot landing flat.</strong> Normal
              walking lands heel-first with your weight split between two feet,
              which is precisely how slips start.
            </li>
            <li>
              <strong>Toes turned slightly outward, knees soft.</strong> A
              wider, springier base.
            </li>
            <li>
              <strong>Lean a little forward,</strong> so your centre of gravity
              stays over the foot that is on the ground.
            </li>
            <li>
              <strong>Arms out of pockets and slightly raised,</strong> like
              wings. Mittens exist so that cold hands do not end up in pockets;
              a hand in a pocket during a slip means landing on a hip or the
              head instead of a braced body.
            </li>
          </ul>
          <p>
            It looks slow and unglamorous. On ice, upright is the only dignity
            that counts.
          </p>
        </>
      ),
    },
    {
      heading: "Boots: trust the Canadian ice lab, not the price tag",
      body: (
        <>
          <p>
            Here is something genuinely useful and almost unknown: KITE, the
            rehabilitation research institute at Toronto's University Health
            Network, tests winter boots on actual ice ramps in a lab and
            publishes the ratings free at <strong>ratemytreads.com</strong>.
            Their consistent finding is that price and ice grip are barely
            related; some expensive boots skate, some modest ones grip. Look for
            their snowflake rating when buying.
          </p>
          <p>
            Beyond the rating: soft rubber that stays flexible in deep cold,
            deep multi-directional tread, a low wide heel, and fastenings that
            arthritic hands can actually manage, because the warmest boot loses
            to the slippery shoe that is easier to put on. Boots that are a
            battle end up by the door while the smooth-soled slip-ons do the
            winter, and that trade kills hips.
          </p>
        </>
      ),
    },
    {
      heading: "Cleats, cane picks, and poles: traction you carry",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Slip-on ice cleats</strong> (coils or carbide studs on a
              rubber harness) grip packed snow and ice better than any boot
              sole, for $20 to $50. Their one serious danger: on indoor tile,
              terrazzo, and polished concrete they are skates. They come off at
              every doorway, sitting down to do it, which means choosing a style
              you can actually get on and off. A mall entrance in January with
              cleats still on is a classic fall.
            </li>
            <li>
              <strong>A cane ice pick</strong> flips down over the rubber tip
              for outdoor use and flips up indoors. If a cane is part of daily
              life, this attachment is winter table stakes; our{" "}
              <Link
                to="/how-to/$slug"
                params={{ slug: "how-to-use-a-cane" }}
                className="text-primary underline"
              >
                cane guide
              </Link>{" "}
              covers the fit basics it attaches to.
            </li>
            <li>
              <strong>Walking poles with carbide tips</strong> add two extra
              points of contact and real confidence on winter ground. Rubber
              feet for dry pavement, bare carbide for ice.
            </li>
          </ul>
          <p>
            One honest caution: rollators and deep snow do not mix. Small front
            wheels dig into snow and stop dead. If the rollator is the daily
            mobility tool, winter is the season for indoor mall walking programs
            and rides to the door, not sidewalk expeditions;{" "}
            <Link
              to="/help/$category"
              params={{ category: "transportation" }}
              className="text-primary underline"
            >
              our transportation section
            </Link>{" "}
            covers the ride options.
          </p>
        </>
      ),
    },
    {
      heading: "The surfaces that pretend not to be ice",
      body: (
        <>
          <p>
            Near zero degrees, treat these as ice regardless of how they look:
            painted road lines and parking lot markings, metal utility covers
            and grates, wooden porches and deck stairs, smooth stone entryways,
            and the polished concrete of parking garages. The most dangerous
            metre of a winter trip is usually a transition: stepping off a curb,
            out of a car, or from a gritty sidewalk onto a smooth lobby floor
            with wet boots. Slow down at every transition, take the rail or the
            car door frame, and put the whole foot down flat.
          </p>
          <p>
            If a fall happens anyway, do not let embarrassment bounce you
            upright: check yourself first, then use the chair method, or on ice,
            get to hands and knees and crawl to something solid before rising.
            The full sequence is in{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-get-up-after-a-fall" }}
              className="text-primary underline"
            >
              how to get up after a fall
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
};
