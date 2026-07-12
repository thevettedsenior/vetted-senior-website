import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "../articles/types";
import { GetUpSequenceDiagram, GrabBarHeightsDiagram } from "./diagrams";

export const FALLS_HOWTOS: ArticleContentMap = {
  "how-to-get-up-after-a-fall": [
    {
      heading: "The first rule: do not rush to get up",
      body: (
        <>
          <p>
            The instinct after a fall, especially with an audience, is to
            scramble upright immediately. That instinct causes second falls and
            turns minor injuries into major ones. So the first move is no move:
            lie where you are, take five slow breaths, and let the shock settle.
            Then check yourself deliberately, starting with the places that
            matter most: head, neck, wrists, and hips.
          </p>
          <p>
            Sharp pain anywhere, a leg that will not take weight, any blow to
            the head, or feeling faint means the answer is{" "}
            <strong>stay down and call for help</strong>, and skip ahead to the
            last section of this guide. Getting up on a broken hip does not make
            it less broken; it makes it worse, and it risks a far harder
            landing.
          </p>
        </>
      ),
    },
    {
      heading: "The chair method, step by step",
      body: (
        <>
          <p>
            If nothing seems injured, here is the sequence physiotherapists
            teach. Rest as long as you need between every step; this is a
            journey with stops, not one motion.
          </p>
          <GetUpSequenceDiagram />
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Roll onto your side.</strong> Bend your knees, turn your
              head the way you want to go, and roll your shoulders and hips
              together in one piece.
            </li>
            <li>
              <strong>Get onto hands and knees.</strong> Push your upper body up
              with your arms until you are on all fours. Breathe.
            </li>
            <li>
              <strong>Crawl to something solid.</strong> A sturdy chair, couch,
              or the bed. Not a rolling office chair, not a walker, not a glass
              table.
            </li>
            <li>
              <strong>Hands on the seat, strong foot forward.</strong> From
              kneeling with both hands flat on the seat, bring your stronger leg
              forward so that foot is flat on the floor, like a runner's lunge
              in slow motion.
            </li>
            <li>
              <strong>Push up and turn to sit.</strong> Press down through your
              hands and your front leg, rise, and pivot your bottom onto the
              seat. Then sit for several full minutes before trying to stand;
              the light-headedness after a fall is real and it has caused many
              second falls.
            </li>
          </ol>
          <p>
            Afterward, even if you feel fine, tell your doctor a fall happened.
            Falls are often the first visible symptom of something treatable: a
            medication side effect, blood pressure dipping on standing, an
            infection, changing vision.
          </p>
        </>
      ),
    },
    {
      heading: "If you cannot get up: the plan for waiting well",
      body: (
        <>
          <p>
            Roughly half of older adults who fall cannot get up without help, so
            this is not a remote possibility to skim past; it is the other half
            of the skill. The danger of a fall is often not the landing but the
            hours on the floor afterward, what emergency medicine calls a long
            lie: cold, pressure damage, dehydration, and muscle breakdown. The
            goals while waiting are summon, warm, and shift.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Summon:</strong> press the medical alert button if you
              wear one, or crawl toward the phone. This exact moment is why
              phones should live low, why a cordless handset belongs at
              floor-reachable height in main rooms, and why{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "medical-alert-safety",
                  article: "choosing-a-medical-alert-system",
                }}
                className="text-primary underline"
              >
                alert pendants with automatic fall detection
              </Link>{" "}
              earn their monthly fee.
            </li>
            <li>
              <strong>Warm:</strong> pull down anything reachable: a blanket,
              coats, cushions, even a tablecloth. Cover yourself, and put
              something between bony spots and hard floor.
            </li>
            <li>
              <strong>Shift:</strong> change position a little every 20 to 30
              minutes to protect skin and joints, and keep moving whatever moves
              comfortably to stay warm.
            </li>
            <li>
              <strong>Make noise in bursts:</strong> banging a shoe or cane on
              the floor at intervals carries surprisingly well and lasts far
              longer than shouting.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Practise this once, before it is real",
      body: (
        <>
          <p>
            Read step lists all you like; the version that works at 2 a.m. is
            the one your body has done before. Once, with a family member or
            physiotherapist in the room, get down on the floor deliberately and
            go through the whole sequence: roll, all fours, crawl, chair, up.
            Two minutes of slightly silly practice buys two things: the muscle
            memory, and the knowledge that you can, which quietly changes how
            confidently you move every day.
          </p>
          <p>
            If practising reveals that getting up is genuinely not possible even
            fresh and calm, that is vital information gained safely: it moves
            fall detection from nice-to-have to essential, and it is worth
            raising at the next doctor's visit along with a referral for
            strength work like{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-do-balance-exercises-at-home" }}
              className="text-primary underline"
            >
              sit-to-stand practice
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "For the family member reading this",
      body: (
        <>
          <p>
            If you find a parent on the floor: resist the arm-pull. If they are
            hurt, keep them still and warm and call 911; do not move them to a
            chair first. If they are unhurt, your job is coach and spotter for
            the chair method above, with your hands steadying at the hips or
            trunk, never hauling on hands or arms. The companion guide,{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-help-someone-stand-up" }}
              className="text-primary underline"
            >
              how to help someone stand up
            </Link>
            , covers your body mechanics so there is one fall in the family
            story that day, not two.
          </p>
          <p>
            And afterward, ask the quiet question: is this the first fall, or
            the first one you heard about? One fall a year is an event; two is a
            pattern that deserves a doctor's visit, a medication review, and an
            honest look at the home with our{" "}
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
            .
          </p>
        </>
      ),
    },
  ],

  "how-to-help-someone-stand-up": [
    {
      heading: "The prime directive: steady, never lift",
      body: (
        <>
          <p>
            Everything in this guide comes down to one sentence:{" "}
            <strong>they do the standing; you do the steadying.</strong> The
            moment you are hauling a meaningful share of someone's body weight,
            two people are in danger: their shoulders and your back, and if
            either of you slips, you both go down together.
          </p>
          <p>
            The corollary is the single most important rule in family
            caregiving:{" "}
            <strong>
              never pull someone up by the hands, wrists, or under the armpits.
            </strong>{" "}
            Older shoulders dislocate and tear with shocking ease, arm-pulling
            robs the person of their own strongest pushing muscles, and it is
            the classic setup for the double fall. Every technique below keeps
            your hands at their trunk, hips, or a gait belt, and leaves their
            arms free to push.
          </p>
        </>
      ),
    },
    {
      heading: "From a chair: set up, cue, count",
      body: (
        <>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Set up the body.</strong> Have them scoot their bottom to
              the front edge of the seat, then pull both feet back so they are
              under the knees, hip-width apart, flat on the floor. A person at
              the back of a deep chair cannot stand; half the battle is the
              scoot.
            </li>
            <li>
              <strong>Take your position.</strong> Stand at their side, slightly
              toward the weaker side if there is one, one foot forward, knees
              bent, back tall. Not directly in front: they need that space to
              lean into.
            </li>
            <li>
              <strong>Place your hands.</strong> One hand flat at the lower back
              or hip, or gripping the gait belt if they wear one. Their hands go
              to the armrests.
            </li>
            <li>
              <strong>Cue the lean: nose over toes.</strong> They lean forward
              until the nose is over the toes. It feels like tipping over; it is
              actually the physics of standing. Without the lean, no amount of
              pushing works.
            </li>
            <li>
              <strong>Rock and rise on three.</strong> One, two, and on three
              they push down through armrests and feet while you steady at the
              hip and rise with them. Then everyone pauses, because the first
              two seconds of standing is when blood pressure dips and knees
              reconsider.
            </li>
          </ol>
          <p>
            If a walker is waiting, it waits until they are fully standing and
            settled; pulling on a walker to rise tips it. The{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-use-a-walker-safely" }}
              className="text-primary underline"
            >
              walker guide
            </Link>{" "}
            covers that handoff from the user's side.
          </p>
        </>
      ),
    },
    {
      heading: "From a bed: the log roll and lever",
      body: (
        <>
          <p>
            Nobody should be hauled from flat to sitting by their arms. The easy
            path uses the body as a lever: they roll onto their side facing the
            edge of the bed, knees bent, then drop their feet and lower legs off
            the edge while pushing up through the bottom elbow and then the
            hand. The legs going down swings the trunk up with almost no effort.
            Your hands steady at the shoulder and hip, guiding the turn, lifting
            nothing.
          </p>
          <p>
            Once seated on the edge, treat it exactly like the chair: feet back,
            nose over toes, push from the mattress, rise on three. Beds are
            lower and softer than chairs, which makes them harder; if the bed is
            the daily battle, a firmer mattress edge, a bed rail, or a
            floor-to-ceiling transfer pole (all things an occupational therapist
            can prescribe) changes everything.
          </p>
        </>
      ),
    },
    {
      heading: "If they start to go down: guide, do not catch",
      body: (
        <>
          <p>
            One day, mid-transfer, the legs will buckle, and your reflex will be
            to catch. Do not catch: a falling adult generates more force than
            any back can safely absorb. Instead,{" "}
            <strong>
              pull them close to your body, bend your knees, and slide them down
              your leg to the floor
            </strong>
            , controlling the speed. A slow, guided arrival on the floor with
            nothing broken is a success. Then, once you have both had a breath,
            it becomes a calm, unhurried{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-get-up-after-a-fall" }}
              className="text-primary underline"
            >
              getting-up-from-the-floor
            </Link>{" "}
            situation, not an emergency.
          </p>
        </>
      ),
    },
    {
      heading: "The gait belt: forty dollars of back insurance",
      body: (
        <>
          <p>
            A gait belt is a wide woven belt that buckles snugly around the
            waist, over clothing, and exists to give helping hands an honest,
            secure grip at the body's centre of gravity instead of at fragile
            arms. Home health stores and pharmacies sell them for roughly $20 to
            $40. If steadying transfers is a daily part of life in your house,
            buy one, and better, ask the home care nurse or a physiotherapist
            for ten minutes of coaching with it; that ten minutes is the
            difference between a tool and a talisman.
          </p>
        </>
      ),
    },
    {
      heading: "Knowing when hands are no longer enough",
      body: (
        <>
          <p>
            There is a line in every caregiving story where technique stops
            being the answer, and it is worth naming plainly. You are past it
            when: they cannot do most of the rising themselves even with perfect
            setup, transfers happen many times a day and leave you sore, anyone
            has been hurt or nearly hurt, or fear has entered the room on either
            side. Past that line, the answer is equipment and trained help, not
            more effort: raised toilet seats, chair risers, transfer poles,
            mechanical lifts, and home care workers who do this all day with
            intact backs.
          </p>
          <p>
            In Ontario the path is an occupational therapy assessment through
            the family doctor or Ontario Health atHome at 310-2222, which is
            free, prescribes the right equipment, and often opens the door to{" "}
            <Link
              to="/help/$category"
              params={{ category: "home-care" }}
              className="text-primary underline"
            >
              publicly funded home care hours
            </Link>
            . Asking for it is not giving up; it is what keeping someone home
            safely actually looks like.
          </p>
        </>
      ),
    },
  ],

  "how-to-place-grab-bars": [
    {
      heading: "Why placement matters more than the bar",
      body: (
        <>
          <p>
            A grab bar is not a bathroom decoration; it is a promise that when a
            wet foot slips, there will be something within reach that holds. Two
            things break that promise constantly: bars placed where a contractor
            found studs rather than where a falling hand actually goes, and
            things that look like grab bars but are not, namely towel bars and
            suction cups. This guide is the exact heights, the exact spots, and
            the anchoring that makes the promise real.
          </p>
          <p>
            The bathroom earns this attention because it is, per square metre,
            the most dangerous room in the house: hard surfaces, water, and the
            two riskiest daily movements, stepping over a tub wall and rising
            from a toilet.
          </p>
        </>
      ),
    },
    {
      heading: "The three-bar bathroom",
      body: (
        <>
          <GrabBarHeightsDiagram />
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Bar one: vertical, at the tub or shower entry.</strong> An
              18-to-24-inch bar mounted vertically at the edge where you step
              in, lower end starting 32 to 36 inches off the floor. A vertical
              bar suits hands of any height and the pull-yourself- over-the-edge
              motion of entry.
            </li>
            <li>
              <strong>Bar two: horizontal, on the long wall inside.</strong>{" "}
              Mounted 33 to 36 inches above the tub or shower floor, this is the
              steadying rail for standing, washing, and turning. On a tub's
              faucet wall, a diagonal bar angled up and away from the taps
              serves both standing and lowering into the tub.
            </li>
            <li>
              <strong>Bar three: beside the toilet.</strong> Horizontal, 33 to
              36 inches above the floor, on the closest side wall. Rising from a
              toilet is a maximal sit-to-stand, done many times a day, often at
              night. If no wall is within reach, use a floor-anchored or
              bolt-through toilet safety frame rather than nothing.
            </li>
          </ul>
          <p>
            Those height numbers (33 to 36 inches, 84 to 91 centimetres) come
            from Canadian accessibility standards, but the person outranks the
            code: have them mime stepping in, sitting, and standing, and watch
            where the hand reaches. A bar an inch from the natural grab point
            beats a code-perfect bar six inches from it.
          </p>
        </>
      ),
    },
    {
      heading: "Anchoring: the part that decides everything",
      body: (
        <>
          <p>
            A grab bar must hold a falling adult, which standards treat as at
            least 250 pounds of sudden force. Screws into drywall alone hold a
            fraction of that and rip out exactly when grabbed hardest. There are
            two honest ways to mount a bar:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Into wall studs:</strong> found with a stud finder, with
              at least two of the bar's three flange screws per end biting into
              solid wood.
            </li>
            <li>
              <strong>Into rated hollow-wall anchors:</strong> proper grab-bar
              anchors (toggle or expanding types rated 250 to 300 pounds and
              sold for exactly this job) where studs refuse to line up with
              where the bar needs to be. On tile over cement board, this is
              routine work for anyone who does it regularly.
            </li>
          </ul>
          <p>
            Then the acceptance test: grab each installed bar and genuinely try
            to move it, pulling down, out, and sideways with real force. It
            should feel like part of the building. If a family member is
            installing, they need a stud finder, a level, a masonry or tile bit,
            and honesty about their skills; if that sentence raised doubts, a
            handyman does the whole bathroom in under two hours, and{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "home-maintenance",
                article: "hiring-trades-seniors-can-trust",
              }}
              className="text-primary underline"
            >
              our guide to hiring trades
            </Link>{" "}
            covers finding one worth letting in.
          </p>
        </>
      ),
    },
    {
      heading: "What is NOT a grab bar",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Towel bars.</strong> Attached with tiny screws or
              adhesive, rated for terry cloth. If a towel bar sits where hands
              naturally reach, that placement wisdom is worth keeping: replace
              it with a real bar in the same spot. Several makers sell grab bars
              with integrated towel rails, so the bathroom keeps its looks.
            </li>
            <li>
              <strong>Suction-cup bars.</strong> They hold until they do not,
              and the failure is silent and instant: grout lines, textured tile,
              aging seals, and temperature swings all defeat them. Treat them at
              most as a light fingertip-balance point, never as something that
              catches a fall, and never on the wall beside a tub edge where a
              real grab will happen.
            </li>
            <li>
              <strong>
                Sink edges, toilet paper holders, shower doors, and taps.
              </strong>{" "}
              These are what people actually grab when no bar exists, and every
              one of them fails or breaks. An existing habit of grabbing the
              sink is the clearest possible signal of where a real bar should
              go.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Costs, and who pays in Ontario",
      body: (
        <>
          <p>
            Solid stainless bars run $20 to $60 each; professional installation
            typically lands at $100 to $200 per bar all-in, less per bar when
            several are done in one visit. A complete three-bar bathroom is a
            few-hundred-dollar project, which is rounding error next to one
            fall-related hospital stay.
          </p>
          <p>
            Help exists: grab bars prescribed as part of an occupational
            therapist's home safety assessment (free to arrange through Ontario
            Health atHome, 310-2222) strengthen claims under the federal Home
            Accessibility Tax Credit and the medical expense credit, and the
            March of Dimes Home and Vehicle Modification Program grants cover
            bathroom safety work for those who qualify. Renters are not stuck
            either: under Ontario's human rights rules, landlords must generally
            accommodate disability- related modifications like grab bars. The
            full funding picture is in{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "paying-for-care",
              }}
              className="text-primary underline"
            >
              Paying for Care
            </Link>
            .
          </p>
          <p>
            While the drill is out, think past the bathroom: a vertical bar at
            the entry door where boots go on, rails on both sides of the stairs,
            and a bedside pole cover the other places falls cluster. The
            whole-house sweep is in{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "medical-alert-safety",
                article: "fall-proofing-the-home",
              }}
              className="text-primary underline"
            >
              our fall-proofing guide
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
};
