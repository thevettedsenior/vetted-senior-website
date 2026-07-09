import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const DEMENTIA_MEMORY_SUPPORT_ARTICLES: ArticleContentMap = {
  "getting-a-memory-assessment": [
    {
      heading: "Normal aging or something more: the honest line",
      body: (
        <>
          <p>
            Everyone over 70 misplaces keys and blanks on names, and none
            of that predicts dementia. The changes that deserve an
            assessment are different in kind, not just degree: getting
            lost on familiar routes, asking the same question within the
            hour, trouble managing money or medications that used to be
            routine, food burning on the stove, withdrawal from
            activities that suddenly feel too complicated, or a
            personality shift the family cannot explain. One of these,
            once, means watch. A pattern over months means book the
            appointment.
          </p>
          <p>
            The other honest point: memory symptoms are not always
            dementia. Depression, thyroid problems, vitamin B12
            deficiency, sleep apnea, urinary infections, and medication
            side effects all impersonate it, and several are fully
            reversible. That alone is a reason to get assessed rather
            than quietly assume the worst; if medications are a
            suspect, our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "doctors-pharmacy-medication",
                article: "managing-multiple-medications",
              }}
              className="text-primary underline"
            >
              medication review guide
            </Link>{" "}
            covers the free pharmacist check that rules it in or out.
          </p>
        </>
      ),
    },
    {
      heading: "How the assessment actually works",
      body: (
        <>
          <p>
            It starts with the family doctor or nurse practitioner, and
            the appointment should be booked for the memory concern
            specifically, not tacked onto a blood pressure visit. The
            doctor will take a history (a family member's observations
            matter enormously here, so someone should come along), run
            bloodwork to rule out the impersonators, and administer a
            short cognitive screen, usually the MoCA or MMSE, thirty
            questions of drawing clocks and remembering word lists. It
            feels like a quiz and some people find it insulting; it
            helps to frame it beforehand as routine, like a blood
            pressure cuff for the brain.
          </p>
          <p>
            Depending on results, the doctor may order a CT or MRI and
            may refer onward to a <strong>memory clinic</strong> or a
            geriatrician for fuller testing. Waits for specialty memory
            clinics run months in much of Ontario, which is one more
            argument for starting early. The output, eventually, is a
            diagnosis: normal aging, mild cognitive impairment (which
            sometimes progresses and sometimes never does), or a
            specific dementia such as Alzheimer's disease or vascular
            dementia.
          </p>
        </>
      ),
    },
    {
      heading: "Why an early diagnosis is worth having",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The reversible causes get treated</strong> instead
              of written off as aging.
            </li>
            <li>
              <strong>Medications work best early.</strong> Current drugs
              do not cure dementia, but several can slow symptoms
              meaningfully in the early and middle stages, and newer
              treatments under review are aimed squarely at early
              disease.
            </li>
            <li>
              <strong>The person gets a voice in their own future.</strong>{" "}
              Powers of attorney, a will, care preferences, and the
              conversation about where to live all require legal
              capacity, and capacity is exactly what dementia erodes.
              Early diagnosis is what makes the{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "legal-financial",
                  article: "five-legal-documents",
                }}
                className="text-primary underline"
              >
                five legal documents
              </Link>{" "}
              possible on the person's own terms.
            </li>
            <li>
              <strong>Support starts flowing.</strong> Day programs,
              caregiver education, and subsidized respite exist for
              diagnosed dementia; the diagnosis is the key that opens
              them.
            </li>
            <li>
              <strong>Safety gets managed, not discovered.</strong>{" "}
              Driving, the stove, finances, and wandering risk can be
              handled gradually and with dignity instead of after a
              crisis.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "When the person refuses to go",
      body: (
        <>
          <p>
            Refusal is common and usually it is fear wearing a disguise.
            What tends to work: make the appointment about something the
            person already accepts ("a checkup, and we'll mention the
            memory thing while we're there"), send the family's
            observations to the doctor in writing beforehand so the
            visit starts informed, and let the doctor be the one who
            raises testing, since parents argue with children and
            listen to physicians. Framing matters too: this is about
            ruling things out and keeping independence, which happens to
            be true.
          </p>
          <p>
            If refusal is absolute, do not force a confrontation you
            will lose. Document what you observe with dates, quietly
            reduce the highest risks first, and revisit in a month; the
            approach in our{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-refuses-help" }}
              className="text-primary underline"
            >
              guide to a parent refusing help
            </Link>{" "}
            applies here almost word for word.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Write down specific incidents with dates for two to four weeks; patterns persuade doctors and family members alike.</li>
            <li>Book a dedicated appointment with the family doctor or nurse practitioner, and have a family member attend.</li>
            <li>Ask explicitly for the reversible causes to be checked: bloodwork, medication review, mood, sleep, and hearing.</li>
            <li>If a referral to a memory clinic is made, take it and stay on the list even if things seem to stabilize.</li>
            <li>Whatever the outcome, get the legal documents in order now, while capacity is not in question.</li>
          </ol>
        </>
      ),
    },
  ],

  "support-after-dementia-diagnosis": [
    {
      heading: "The day after the diagnosis",
      body: (
        <>
          <p>
            A dementia diagnosis lands on the whole family, and the
            cruel part of the system is that nobody hands you the map.
            The doctor delivers the news, the appointment ends, and
            families drive home believing they are on their own. They
            are not. Ontario has a genuine support layer for dementia,
            most of it free or subsidized, but it is opt-in: you have to
            know it exists and ask. This guide is the map, in the order
            most families need it.
          </p>
          <p>
            One reframe helps from the start. The typical course of
            dementia is years, often many years, and most of that time
            is livable, especially with support in place early. The goal
            of everything below is to keep both people, the person with
            dementia and the primary caregiver, well for as long as
            possible.
          </p>
        </>
      ),
    },
    {
      heading: "First call: the Alzheimer Society and First Link",
      body: (
        <>
          <p>
            The <strong>Alzheimer Society</strong> operates across
            Ontario and its <strong>First Link</strong> program exists
            precisely for the newly diagnosed. It connects the family to
            a staff person who explains the disease, runs education
            courses for caregivers, hosts support groups (for
            caregivers, and separately for people living with early
            dementia), and keeps checking in as things change. It is
            free, it does not require a doctor's referral, and families
            consistently describe it as the thing they wish they had
            called sooner. Find the local society at alzheimer.ca or
            through 211.
          </p>
          <p>
            The caregiver support group deserves a specific pitch,
            because many caregivers skip it, feeling they have no time.
            The people in that room are living the same days and know
            which battles to fight; an hour there saves ten hours of
            trial and error at home.
          </p>
        </>
      ),
    },
    {
      heading: "The services that carry the middle years",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Adult day programs</strong>, many designed
              specifically for dementia, give the person structured,
              genuinely enjoyable days and give the caregiver reliable
              time off, for roughly $10 to $40 a day in Ontario. They
              are the single best-value service in this list; our{" "}
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
              covers how to get in.
            </li>
            <li>
              <strong>Publicly funded home care</strong> through Ontario
              Health atHome (310-2222) can provide personal support
              hours and respite at no charge; ask specifically for a
              caregiver respite assessment. Waits exist, so apply before
              exhaustion, not after.
            </li>
            <li>
              <strong>Dementia-trained private home care</strong> fills
              the gaps public hours leave. When interviewing agencies,
              ask directly what dementia training their workers receive
              and insist on consistent workers, because familiar faces
              matter more in dementia care than anywhere else. The
              questions in our{" "}
              <Link
                to="/help/$category/$article"
                params={{
                  category: "home-care",
                  article: "homecare-questions",
                }}
                className="text-primary underline"
              >
                home care hiring guide
              </Link>{" "}
              all apply.
            </li>
            <li>
              <strong>Overnight and short-stay respite</strong> beds in
              long-term care homes and some hospices let a caregiver
              take an actual vacation. These book up; learn the local
              options before you need them.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The safety layer, added with dignity",
      body: (
        <>
          <p>
            Safety changes land best when they arrive gradually and are
            framed around independence rather than surveillance.{" "}
            <strong>MedicAlert Connect Protect</strong> (formerly Safely
            Home) registers the person with police and provides an
            engraved bracelet, roughly $60 a year, and it is the
            standard answer to wandering risk. Stove shut-off devices,
            door chimes, GPS insoles or watches, and medication pouch
            packaging each remove one specific danger. Driving needs an
            honest early conversation, because doctors in Ontario are
            required to report medical conditions that affect driving;
            our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "transportation",
                article: "when-driving-ends",
              }}
              className="text-primary underline"
            >
              driving guide
            </Link>{" "}
            covers how to have it without wrecking trust.
          </p>
          <p>
            Financial safety belongs here too: dementia is the single
            biggest risk factor for financial exploitation. Powers of
            attorney, simplified accounts, and a trusted second set of
            eyes on statements should all be in place early.
          </p>
        </>
      ),
    },
    {
      heading: "Pacing the road ahead",
      body: (
        <>
          <p>
            Two mistakes account for most family suffering in dementia
            care. The first is waiting for a crisis before accepting
            help, which means every change happens in an emergency
            room. The second is the primary caregiver quietly running
            themselves into the ground; caregiver collapse, not the
            disease itself, is what most often forces a sudden move
            into care. Build respite into every week from the
            beginning, and read our{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "caregiver-burnout" }}
              className="text-primary underline"
            >
              caregiver burnout guide
            </Link>{" "}
            before it describes you.
          </p>
          <p>
            And look ahead deliberately, once, rather than anxiously,
            always. Visit a memory care residence or two years before
            a move is likely, so the option is a known place rather
            than a fear; the{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "retirement-residences",
                article: "independent-assisted-memory-care",
              }}
              className="text-primary underline"
            >
              levels of care guide
            </Link>{" "}
            explains where memory care fits. Then put the binder away
            and go live the good years, which is the entire point of
            the support system.
          </p>
        </>
      ),
    },
  ],
};
