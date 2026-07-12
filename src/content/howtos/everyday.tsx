import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "../articles/types";
import { CarTransferDiagram } from "./diagrams";

export const EVERYDAY_HOWTOS: ArticleContentMap = {
  "how-to-get-in-and-out-of-a-car": [
    {
      heading: "Why cars are harder than chairs",
      body: (
        <>
          <p>
            A car seat is a low, soft, tilted-back chair behind an awkward door
            frame, parked on ground you did not choose. Getting into one
            combines a deep squat, a duck, a twist, and a one-legged balance
            moment, which is why so many hip and back tweaks, and a fair number
            of falls, happen in parking lots. The fix is a method that removes
            the twist and the one-legged moment entirely:{" "}
            <strong>sit first, swivel second.</strong>
          </p>
        </>
      ),
    },
    {
      heading: "Getting in: back up, sit, swivel",
      body: (
        <>
          <CarTransferDiagram />
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Prepare the car before the person.</strong> Slide the seat
              back as far as it goes, recline the backrest slightly, and park on
              flat ground clear of curbs, with the door open to its full width.
            </li>
            <li>
              <strong>Back up to the seat.</strong> Walk to the open door, turn
              around so your back is to the car, and step backward until you
              feel the seat edge against the backs of both legs. No ducking yet:
              your head never enters first.
            </li>
            <li>
              <strong>Sit down, feet still outside.</strong> Reach back for the
              seat with one hand, hold the door frame with the other, and lower
              yourself to sitting with both feet still on the pavement, ducking
              the head as you sit.
            </li>
            <li>
              <strong>Swivel both legs in together.</strong> Lean back slightly
              onto the reclined seat and bring both knees around in one motion.
              On upholstery that grips, a plastic shopping bag on the seat cuts
              the friction and gets thrown in the glovebox after; a purpose-made
              swivel cushion does it better.
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: "Getting out: the same movie in reverse",
      body: (
        <>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Swivel both feet to the pavement first,</strong> turning
              your whole body as one piece, no leading leg.
            </li>
            <li>
              <strong>Scoot to the seat edge,</strong> feet flat, hip-width
              apart.
            </li>
            <li>
              <strong>Nose over toes, then push up</strong> from the seat frame
              with one hand and the door frame or a support handle with the
              other. The door itself moves, so it only counts as a handle if a
              helper is bracing it.
            </li>
            <li>
              <strong>Stand a moment before walking.</strong> The light-headed
              few seconds after rising from a low seat are real, and parking
              lots are a bad place to discover them mid-step. Feet planted, one
              breath, then go.
            </li>
          </ol>
          <p>
            Winter adds one rule: assume the ground beside the car is ice until
            proven otherwise, and put each foot down flat while still holding
            the car. The full winter technique is in{" "}
            <Link
              to="/how-to/$slug"
              params={{ slug: "how-to-walk-on-ice-and-snow" }}
              className="text-primary underline"
            >
              how to walk on ice and snow
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Helping someone: brace the door, lend a forearm",
      body: (
        <>
          <p>
            The helper's checklist is short. Open the door fully and brace it
            with your hip or hand so it cannot swing while being used as a
            support. Let them do the swivel and the scoot at their own speed.
            When they are ready to rise, offer your forearm held vertically,
            like a rail, rather than your hand: they grip your forearm, you grip
            theirs, and their push comes from their own legs while you stand as
            furniture, close and immovable. Never pull on a hand or under an
            arm; fragile shoulders and a slipping grip take you both down.
            Guiding their head under the frame with a light hand as they sit is
            welcome; pushing it is not.
          </p>
          <p>
            If transfers involve real lifting, or a wheelchair is part of the
            picture, an occupational therapist should see the actual car once;
            vehicle transfers are a standard thing they solve. And if driving or
            being driven is itself becoming the question,{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "transportation",
                article: "getting-to-appointments",
              }}
              className="text-primary underline"
            >
              our guide to getting to appointments
            </Link>{" "}
            maps the alternatives.
          </p>
        </>
      ),
    },
    {
      heading: "Two cheap gadgets and one seat choice",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>A swivel cushion</strong> ($30 to $50): a rotating disc
              that sits on the seat and turns the swivel step into one smooth
              motion. The single best dollar-for-dollar transfer aid.
            </li>
            <li>
              <strong>A portable support handle</strong>, often sold as a car
              cane ($20 to $40): slots into the door latch loop and gives a
              rigid vertical grip for pushing up. Check it seats firmly in your
              particular car before trusting it.
            </li>
            <li>
              <strong>A leg lifter strap</strong> ($15): a stiffened loop for
              bringing a weak or post-surgery leg in after the swivel.
            </li>
          </ul>
          <p>
            And the seat choice: the front passenger seat is almost always the
            easiest, highest, and most adjustable spot in the car, with the
            biggest door. The habit of tucking a parent into the back seat is
            chivalry working against biomechanics. Front seat, slid back,
            slightly reclined, every time.
          </p>
        </>
      ),
    },
  ],

  "how-to-spot-a-scam": [
    {
      heading: "Why scammers call seniors, and why shame is their best friend",
      body: (
        <>
          <p>
            Fraud against older adults is a professional industry with scripts,
            quotas, and call centres, and Canadians lose hundreds of millions of
            dollars to it every year in reported cases alone. The Canadian
            Anti-Fraud Centre estimates that only a small fraction of incidents
            are ever reported, mostly because victims feel foolish. Understand
            this clearly: these operations fool lawyers, engineers, and bank
            staff. Falling for a professional con is not a cognitive failure;
            staying silent about it afterward is the only part that helps the
            scammer.
          </p>
          <p>
            The defence is not memorizing every scam. New ones appear monthly.
            The defence is recognizing the three-part signature they all share,
            and having one rule that beats all of them.
          </p>
        </>
      ),
    },
    {
      heading: "The signature: urgency, secrecy, strange payment",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Urgency.</strong> Act right now, before court, before the
              account is drained, before your grandson spends the night in jail.
              Urgency exists to keep you off the phone with anyone sensible.
              Legitimate institutions give you time; they are bureaucracies,
              time is what they have.
            </li>
            <li>
              <strong>Secrecy.</strong> Do not tell your family, there is a gag
              order, do not tell the bank teller what the withdrawal is for, the
              investigation is confidential. There is no legitimate scenario,
              none, in which a real official needs you to hide a transaction
              from your own family and bank.
            </li>
            <li>
              <strong>Strange payment.</strong> Gift cards, bitcoin, wire
              transfers to unknown accounts, couriers collecting cash,
              e-transfers to a "safe account." No government agency, police
              force, or bank in Canada takes payment in Google Play cards. The
              payment method alone identifies the scam.
            </li>
          </ul>
          <p>
            One of the three is a stop sign. Two is certainty. The specific
            costume changes, fake CRA agent, fake bank investigator, fake
            grandchild, fake Microsoft technician, fake lottery official, but
            the signature never does.
          </p>
        </>
      ),
    },
    {
      heading: "The one rule: hang up, look it up, call back",
      body: (
        <>
          <p>
            Every phone scam, without exception, dies against this rule:{" "}
            <strong>
              end the call, find the organization's real number yourself, and
              call back.
            </strong>{" "}
            The number on the back of your bank card. The CRA's published line,
            1-800-959-8281. Your grandchild's own number, or their parents'.
            Caller ID can be faked effortlessly, a familiar voice can now be
            cloned by AI from a few seconds of audio, but no scammer can answer
            the real number.
          </p>
          <p>
            Practise the sentence that makes it easy: "I don't handle anything
            by incoming call. I'll call the main number and sort it out." A real
            bank, a real police officer, a real government clerk will not
            object, because this is exactly what they advise. Only a scammer
            argues with it, and the arguing is your answer.
          </p>
        </>
      ),
    },
    {
      heading: "The family password: your defence against a cloned voice",
      body: (
        <>
          <p>
            The grandparent scam, a panicked call from a grandchild in trouble
            needing quiet money, is now sometimes armed with AI voice cloning
            good enough to fool a parent. The countermeasure is old, cheap, and
            works perfectly: <strong>agree on a family code word.</strong>{" "}
            Something silly and unguessable, known to the family and never
            posted anywhere. Any emergency call involving money gets one
            question: "What's the word?" No word, no money, and then a callback
            to the person's real number regardless.
          </p>
          <p>
            Set it up at the next family dinner; frame it as protecting the
            grandchildren from being impersonated, which is the truth, and it
            lands without insulting anyone's sharpness.
          </p>
        </>
      ),
    },
    {
      heading: "The current heavy rotation",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Fake CRA or Service Canada:</strong> arrest threats,
              suspended SINs, back taxes payable immediately. The real CRA never
              threatens arrest on a call and never takes gift cards.
            </li>
            <li>
              <strong>The bank investigator:</strong> asks for your help
              catching a corrupt teller by withdrawing cash or moving money to a
              "safe account." Real bank investigations never involve customers
              moving money. Ever.
            </li>
            <li>
              <strong>Tech support pop-ups:</strong> a screaming browser warning
              with a phone number. Real virus warnings do not include phone
              numbers. Power the machine off; nothing is on fire.
            </li>
            <li>
              <strong>Romance and companionship scams:</strong> months of
              patient warmth, then a crisis needing money. The tell is
              permanent: a reason never to meet, and eventually, a request to
              send funds.
            </li>
            <li>
              <strong>Prize and lottery scams:</strong> winnings that require a
              fee or taxes paid upfront to release. Real winnings never cost
              money to receive.
            </li>
            <li>
              <strong>Door-to-door urgency:</strong> the roof, the furnace, the
              driveway, today only. The same signature, standing on the porch;
              our{" "}
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
              is the antidote.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "If money or information already went out",
      body: (
        <>
          <p>Speed matters and shame wastes it. In order:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Call the bank's fraud line immediately</strong>, the
              number on the card. Transfers can sometimes be frozen or recalled
              in the first hours, and cards and accounts get locked before more
              leaves.
            </li>
            <li>
              <strong>Report to the Canadian Anti-Fraud Centre</strong> at
              1-888-495-8501 or online. Reports are how patterns get prosecuted,
              and they matter even when the money is gone.
            </li>
            <li>
              <strong>File with local police</strong> at the non-emergency line;
              a report number also helps with banks and insurers.
            </li>
            <li>
              <strong>If the SIN or ID leaked:</strong> notify Service Canada,
              and place fraud alerts with both credit bureaus, Equifax Canada
              and TransUnion Canada.
            </li>
            <li>
              <strong>Keep everything:</strong> texts, emails, receipts, gift
              card numbers. Evidence, not embarrassment.
            </li>
          </ol>
          <p>
            Then expect the second wave: victims go on lists, and follow-up
            scams, including fake "fraud recovery agents" offering to get the
            money back for a fee, are standard practice. The one rule applies to
            them too.
          </p>
          <p>
            One more honest word for families: repeated scam losses, especially
            when hidden, can be an early sign that managing money is getting
            harder, and it is worth pairing the fraud cleanup with a gentle look
            at{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "five-legal-documents",
              }}
              className="text-primary underline"
            >
              powers of attorney and the other core documents
            </Link>
            , while it is a planning conversation rather than a crisis one.
          </p>
        </>
      ),
    },
  ],
};
