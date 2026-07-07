import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const TRANSPORTATION_ARTICLES: ArticleContentMap = {
  "when-driving-ends": [
    {
      heading: "Why this is the hardest conversation in senior care",
      body: (
        <>
          <p>
            Families who have navigated dementia diagnoses and funeral
            planning routinely say the driving conversation was worse. The
            car is not transportation to the person holding the keys. It is
            competence, spontaneity, and not asking anyone for anything. When
            you take the keys, you take that, and pretending otherwise is
            why so many of these conversations go badly.
          </p>
          <p>
            So this guide covers all three parts honestly: how to know when
            it is actually time (not just when adult children have become
            anxious), how the rules in Ontario work, and how to replace what
            the car provided, which is the part families skip and the reason
            the conversation fails.
          </p>
        </>
      ),
    },
    {
      heading: "Reading the signs honestly, in both directions",
      body: (
        <>
          <p>
            Age alone is not a reason. Plenty of 85-year-olds drive safely;
            some 68-year-olds should not. Watch patterns, not birthdays:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>New dents and scrapes that arrive without stories attached</li>
            <li>Getting lost on familiar routes (this one is never "just aging"; it warrants a doctor visit for more reasons than driving)</li>
            <li>Riding the brake, straddling lanes, missed signs, honks from other drivers as a regular soundtrack</li>
            <li>Family members quietly declining rides, or not letting grandchildren ride along: the most honest data point there is</li>
            <li>Self-restriction that is already happening: no night driving, no highways, no left turns. Progressive self-restriction is often wisdom, but it is also a signal worth respecting in both directions.</li>
          </ul>
          <p>
            A useful middle step exists between "fine" and "keys gone":
            a professional driving assessment. In Ontario, occupational
            therapy driving evaluations (offered through some rehab clinics)
            assess real-world driving and can recommend restrictions,
            retraining, or retirement from driving. It costs several hundred
            dollars, and it moves the verdict from "my daughter thinks" to a
            professional's report, which protects the relationship.
          </p>
        </>
      ),
    },
    {
      heading: "The rules in Ontario, so nobody is surprised",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>At 80, licence renewal changes.</strong> Every two
              years, drivers 80+ complete a group education session, a
              vision test, and a short in-class screening exercise; a road
              test only if flagged. It is not designed to strip licences; the
              majority renew.
            </li>
            <li>
              <strong>Doctors in Ontario must report</strong> patients with
              specific high-risk medical conditions affecting driving to the
              Ministry of Transportation, and may report others at their
              discretion. Licence suspension can follow. Families sometimes
              resent the doctor for this; it is the law working as designed,
              and honestly, it can be a gift: the doctor, not the family,
              becomes the decision.
            </li>
            <li>
              <strong>A dementia diagnosis does not automatically end
              driving,</strong> but it starts a clock; progressive conditions
              mean the question is when, not if. Plan while the person can
              participate in the plan.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Having the conversation without wrecking the relationship",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Start years early, hypothetically.</strong> "Dad, how will we know when it's time, and how do you want us to handle it?" A plan made at 74 is a contract; a confrontation at 84 is a coup.</li>
            <li><strong>Never the whole family at once.</strong> An intervention circle produces defence, not reflection. One trusted voice, and it is often not the eldest child; sometimes it is the family doctor, an old friend, or the grandchild who just got their licence.</li>
            <li><strong>Lead with what stays, not what goes.</strong> Have the replacement transportation plan ready before the conversation (next section, and it should be genuinely worked out, with names and numbers, not "we'll figure out rides").</li>
            <li><strong>Do the math out loud.</strong> A car costs most Canadian seniors $8,000 to $12,000 a year in payments, insurance, gas, and maintenance. That is a very large taxi and rideshare budget. For many, giving up the car and buying rides freely is a financial upgrade, and framing it that way is both true and face-saving.</li>
            <li><strong>If it has to happen against their will</strong> (cognition gone, real danger, doctor's report filed), be kind and be immovable, and let the licence system be the villain. Then over-invest in rides for the first months, because the anger fades when life demonstrably continues.</li>
          </ul>
          <p className="italic">
            If refusal is the pattern across more than driving, the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-refuses-help" }}
              className="text-primary underline"
            >
              Parent Refuses Help guide
            </Link>{" "}
            goes deeper on the psychology.
          </p>
        </>
      ),
    },
    {
      heading: "The replacement plan is the whole game",
      body: (
        <>
          <p>
            Seniors who stop driving without a replacement plan show
            measurable declines in social contact and health. The plan is
            not optional, and it is why we wrote a whole companion guide:{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "transportation",
                article: "getting-to-appointments",
              }}
              className="text-primary underline"
            >
              every ride option for seniors, from free to full service
            </Link>
            , covering community transport, para-transit, volunteer
            drivers, and how to set up rideshare for someone who does not
            use apps. Build that plan first. Then have the conversation.
          </p>
        </>
      ),
    },
  ],

  "getting-to-appointments": [
    {
      heading: "The landscape: more exists than most families know",
      body: (
        <>
          <p>
            When driving ends, most families default to "we'll drive them,"
            which works until it doesn't: until the daughter with the sedan
            also has a job, kids, and her own life, and the medical
            appointments multiply. The sustainable answer is a portfolio of
            ride options, matched to the trip. A dialysis run and a
            hairdresser visit do not need the same service.
          </p>
          <p>
            The single most useful phone number in this entire category is{" "}
            <strong>211</strong>: free, 24/7, and staffed by people whose
            job is knowing exactly which community transportation programs
            serve a given postal code. Call it before you build the plan.
          </p>
        </>
      ),
    },
    {
      heading: "Free and nearly-free: community transportation programs",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Community support agencies</strong> across Ontario run
              door-to-door rides for seniors, driven by volunteers or
              accessible vans, typically for medical appointments, shopping
              shuttles, and day programs. Cost: free to roughly $10 to $20
              per trip, often income-adjusted. These are the
              best-kept secret in the category; 211 knows which agency
              covers your area.
            </li>
            <li>
              <strong>Volunteer driver programs</strong> (Canadian Cancer
              Society for treatment, local seniors' centres, faith
              communities) match riders with vetted volunteers. Book days
              ahead; these are scheduled services, not taxis.
            </li>
            <li>
              <strong>Hospital and clinic shuttles:</strong> some regional
              health teams run them for specific programs. Always ask the
              clinic booking the appointment, "is there transportation
              support for this?" The question costs nothing and works
              surprisingly often.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Para-transit: the accessible public option",
      body: (
        <>
          <p>
            Every sizable Ontario city runs a door-to-door accessible
            transit service for people who cannot use conventional transit:
            Wheel-Trans in Toronto, DARTS in Hamilton, Para Transpo in
            Ottawa, and equivalents elsewhere. Fares match regular transit
            (a few dollars a ride). Two honest caveats: there is an
            application with eligibility criteria (functional, not age-based),
            and trips must be booked ahead and shared with other riders, so
            it suits appointments better than spontaneity. Apply before the
            need is urgent; approval takes weeks, and having it in place is
            like a spare key.
          </p>
          <p>
            Regular transit deserves a mention too: seniors' fares are
            discounted everywhere, many systems are increasingly accessible,
            and in some municipalities seniors ride free on certain days.
          </p>
        </>
      ),
    },
    {
      heading: "Private options: taxis, rideshare, and medical transport",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Set up rideshare without a smartphone.</strong> Uber
              and Lyft both let family members book and pay for rides for
              someone else from their own app, with the driver's name and
              car sent by text to any mobile phone. For a senior who will
              never touch an app, this turns every adult child into a
              dispatcher. There are also third-party phone-in services that
              book rideshares for seniors for a fee.
            </li>
            <li>
              <strong>Build a taxi relationship.</strong> Local taxi
              companies still take phone bookings, run accounts, and, in
              smaller cities especially, will assign regular drivers to
              regular customers. Predictability is worth more than the app
              discount.
            </li>
            <li>
              <strong>Non-emergency medical transport</strong> companies
              move people who need a wheelchair van, a stretcher, or an
              escort, at $80 to $200+ per trip locally. This is the right
              tool for dialysis with a wheelchair or a discharge home from
              hospital, not for groceries.
            </li>
            <li>
              <strong>Designated driver style services</strong> exist in
              some cities where a driver uses the senior's own car, useful
              in the transition period while the car still exists.
            </li>
          </ul>
          <p>
            Tax note worth knowing: when medical care is not available
            nearby, travel costs to reach it can qualify for the medical
            expense tax credit (distance rules apply). Keep a mileage and
            receipt log; details in{" "}
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
      heading: "Putting it together: the one-page ride plan",
      body: (
        <>
          <p>Sit down once and write the plan, then tape it beside the phone:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Medical appointments:</strong> which service, booked how far ahead, phone number</li>
            <li><strong>Groceries and errands:</strong> weekly shuttle, delivery, or a standing family slot</li>
            <li><strong>Social life:</strong> this is the line families forget, and the one that prevents the isolation spiral. The bridge game and the church service need rides as much as the cardiologist.</li>
            <li><strong>Spontaneous and evening trips:</strong> taxi account or family-dispatched rideshare</li>
            <li><strong>Winter backup:</strong> which of the above still runs in a snowstorm, and who checks in when nothing does</li>
          </ol>
          <p>
            Fund it from the car money: selling the car and cancelling
            insurance frees hundreds of dollars a month. Put it in a "rides"
            budget line and spend it guilt-free; that is what it is for.
          </p>
          <p className="italic">
            If the person is newly without a car and living alone, the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "senior-living-alone" }}
              className="text-primary underline"
            >
              Senior Living Alone guide
            </Link>{" "}
            pairs well with this one.
          </p>
        </>
      ),
    },
  ],
};
