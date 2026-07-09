import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const MENTAL_HEALTH_COUNSELLING_ARTICLES: ArticleContentMap = {
  "depression-in-later-life": [
    {
      heading: "The myth doing the damage",
      body: (
        <>
          <p>
            The most harmful idea in seniors' mental health is that
            feeling low is simply what old age is like. It is not.
            Depression is a treatable illness at every age, and treatment
            works about as well at 80 as it does at 40. What is true is
            that late-life depression is underdiagnosed, partly because
            seniors themselves grew up in a generation that did not
            discuss it, and partly because it wears disguises: it shows
            up at the doctor's office as back pain, poor sleep, fatigue,
            and appetite loss more often than as sadness.
          </p>
          <p>
            The scale is not small. Meaningful depressive symptoms affect
            an estimated one in five older adults, higher among those who
            are recently bereaved, chronically ill, caregiving, or
            isolated. Untreated, depression worsens heart disease and
            dementia risk, and older men have among the highest suicide
            rates of any group in Canada. Taking it seriously is not
            fussing; it is medicine.
          </p>
        </>
      ),
    },
    {
      heading: "What it looks like in a parent",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Loss of interest in things that used to matter: the garden
              untouched, the cards group dropped, the grandchildren's
              calls unreturned.
            </li>
            <li>
              New physical complaints without clear cause, or old ones
              suddenly consuming: pain, stomach trouble, exhaustion.
            </li>
            <li>
              Changes in sleep and appetite, in either direction; a
              fridge that has emptied out overlaps with the warning signs
              in our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "meals-nutrition",
                  article: "when-a-senior-stops-eating-well",
                }}
                className="text-primary underline"
              >
                nutrition guide
              </Link>
              .
            </li>
            <li>
              Irritability and withdrawal rather than visible sadness,
              especially in men.
            </li>
            <li>
              Comments that dismiss the future: "I'm just in the way,"
              "what's the point at my age." Take these seriously and say
              so kindly. If there is any mention of not wanting to live,{" "}
              <strong>call or text 988</strong>, Canada's suicide crisis
              line, which answers 24/7.
            </li>
          </ul>
          <p>
            One complication deserves naming: depression and early
            dementia can look alike, and depression in later life can
            also accompany it. Apathy, poor concentration, and memory
            complaints belong to both. This is a reason for a proper
            medical assessment rather than family guesswork; the process
            in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "dementia-memory-support",
                article: "getting-a-memory-assessment",
              }}
              className="text-primary underline"
            >
              memory assessment guide
            </Link>{" "}
            checks for both at once.
          </p>
        </>
      ),
    },
    {
      heading: "What treatment actually involves, and what OHIP covers",
      body: (
        <>
          <p>
            The evidence for late-life depression supports the same two
            pillars as at any age: talk therapy and medication, alone or
            together. For mild to moderate depression, structured talk
            therapy (especially cognitive behavioural therapy) performs
            as well as medication and its effects last longer. For more
            severe depression, antidepressants help most people who try
            them, though in seniors they should be started low, reviewed
            against the other medications on the list, and given a full
            six to eight weeks to work.
          </p>
          <p>
            On coverage: visits to the <strong>family doctor</strong> and
            to a <strong>psychiatrist</strong> (with a referral) are
            OHIP-covered, and so is{" "}
            <strong>Ontario Structured Psychotherapy</strong>, a free
            program of CBT-based therapy you can self-refer into. What
            OHIP does not cover is private psychologists and registered
            psychotherapists, who charge roughly $130 to $220 a session.
            The affordable routes into therapy, including the free and
            sliding-scale ones, are the subject of{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mental-health-counselling",
                article: "grief-and-counselling-options",
              }}
              className="text-primary underline"
            >
              our companion guide
            </Link>
            .
          </p>
          <p>
            And do not discount the non-clinical layer, because the
            evidence for it is real: exercise programs, daylight,
            social contact, and treating hearing loss all move the
            needle on late-life mood. A parent who is isolated needs
            connection alongside treatment, not instead of it; the
            free programs in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "companion-social",
                article: "loneliness-is-a-health-risk",
              }}
              className="text-primary underline"
            >
              community programs guide
            </Link>{" "}
            are, functionally, part of the prescription.
          </p>
        </>
      ),
    },
    {
      heading: "Getting a reluctant generation to accept help",
      body: (
        <>
          <p>
            Many seniors will never say the word depression. Useful
            translations exist. Frame the first step as a physical
            checkup, which it genuinely should be, since thyroid,
            B12, anemia, and medication side effects can all produce
            the same picture. Frame therapy as "someone to talk things
            through with after the year you've had," which offends
            nobody. Frame medication, if it comes to that, the way the
            doctor will: as treatment for a medical condition, like
            insulin, not a character verdict.
          </p>
          <p>
            Go to the appointment together if the person allows it, and
            send the doctor a short written note of what the family has
            observed beforehand. Fifteen-minute appointments miss
            depression that a two-paragraph letter catches.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>If there is any talk of self-harm or not wanting to live, contact 988 now, by call or text, and do not leave the person alone.</li>
            <li>Book a full checkup with the family doctor, framed as physical, and send your observations in writing beforehand.</li>
            <li>Ask the doctor specifically about depression screening and about the reversible causes: thyroid, B12, medications, sleep, hearing.</li>
            <li>Self-refer to Ontario Structured Psychotherapy if therapy is agreed to; it is free and does not need a doctor's note.</li>
            <li>Add one standing social commitment to the week while treatment proceeds; connection and treatment work faster together.</li>
          </ol>
        </>
      ),
    },
  ],

  "grief-and-counselling-options": [
    {
      heading: "Grief is not a disorder, and still deserves support",
      body: (
        <>
          <p>
            Losing a spouse of fifty years is not a mental illness, and
            most grieving people do not need a clinician. What they need
            is not to carry it alone. The distinction that matters is
            time and function: grief that is heavy but moving, with
            better and worse days, is normal for a year and longer.
            Grief that is frozen, months of being unable to eat,
            function, or feel anything but the loss, or grief that has
            slid into the depression described in{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "mental-health-counselling",
                article: "depression-in-later-life",
              }}
              className="text-primary underline"
            >
              our depression guide
            </Link>
            , deserves professional help.
          </p>
          <p>
            This guide maps the counselling landscape for both
            situations, from free to private, because the most common
            reason seniors go without support is not reluctance. It is
            that nobody told them what exists or what it costs.
          </p>
        </>
      ),
    },
    {
      heading: "The free layer, which is bigger than people think",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Hospice bereavement programs.</strong> Residential
              hospices and hospice organizations run grief support
              groups and one-on-one bereavement visits, free, and you
              do not need to have used the hospice. This is the
              best-kept secret in grief support; find the local hospice
              through 211.
            </li>
            <li>
              <strong>Bereaved Families of Ontario</strong> runs peer
              support groups across the province, led by people who
              have been through loss themselves.
            </li>
            <li>
              <strong>Ontario Structured Psychotherapy</strong> provides
              free, OHIP-funded courses of cognitive behavioural
              therapy for depression and anxiety, with self-referral.
            </li>
            <li>
              <strong>Faith communities</strong> remain a serious
              source of both visiting and grief support, and clergy
              have sat with more grieving people than most therapists.
            </li>
            <li>
              <strong>Crisis and talk lines:</strong> 988 for crisis,
              24/7, call or text; A Friendly Voice (1-855-892-9992) for
              ordinary loneliness, staffed for exactly the conversation
              a long evening needs. Both come up again in our{" "}
              <Link
                to="/situations/$slug"
                params={{ slug: "recently-widowed" }}
                className="text-primary underline"
              >
                recently widowed guide
              </Link>
              , which walks the first year as a whole.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Paid counselling: who the letters are and what it costs",
      body: (
        <>
          <p>
            Ontario's talk-therapy professionals come with an alphabet.{" "}
            <strong>Psychiatrists</strong> are physicians, OHIP-covered
            with a referral, best reserved for complex or severe cases
            and for medication decisions; waits are long.{" "}
            <strong>Psychologists</strong> (roughly $180 to $250 a
            session) assess and treat, and can do formal testing.{" "}
            <strong>Registered psychotherapists and registered social
            workers</strong> (roughly $120 to $180) provide most of the
            actual therapy in the province, and for grief and adjustment
            work they are usually the right and most affordable private
            choice.
          </p>
          <p>
            Before paying full private rates, check three things.
            Community family service agencies (members of Family Service
            Ontario) offer counselling on <strong>sliding scales</strong>{" "}
            that go down to nearly nothing. Many private therapists hold
            a few reduced-rate spots; you get them by asking. And if the
            senior has retiree benefits or the family member arranging
            care has an employee assistance program, short-term
            counselling may already be paid for. Private therapy is also
            a medical expense for tax purposes when provided by an
            authorized practitioner, which takes some sting out; the
            broader money picture is in our{" "}
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
      heading: "Choosing well, and what good therapy looks like",
      body: (
        <>
          <p>
            Fit matters more than framework. A senior is entitled to a
            therapist who feels respectful and unhurried, and switching
            after two or three sessions is normal, not rude. Practical
            screens: ask whether the therapist has worked with older
            adults and with bereavement specifically; ask about home
            visits or video sessions if travel is hard (virtual therapy
            works well for seniors more often than families expect);
            and verify registration with the relevant Ontario college,
            which takes two minutes online.
          </p>
          <p>
            Set expectations honestly too. Good grief counselling does
            not aim to make the loss stop hurting on a schedule. It
            aims at carrying the loss while rebuilding a livable week,
            and progress usually shows up as small returns: an
            appetite, a phone call made, one outing kept.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Call 211 and ask for hospice bereavement programs and family service agencies near the senior's postal code.</li>
            <li>If symptoms look like depression rather than moving grief, start with the family doctor and our depression guide.</li>
            <li>Check the free and covered routes first: hospice groups, Bereaved Families of Ontario, Ontario Structured Psychotherapy, and any retiree or family benefits.</li>
            <li>If going private, choose a registered psychotherapist or social worker with older-adult experience, and ask about sliding scale before the first session.</li>
            <li>Reassess after four to six sessions: is the week becoming more livable? If not, changing therapists is allowed and often the fix.</li>
          </ol>
        </>
      ),
    },
  ],
};
