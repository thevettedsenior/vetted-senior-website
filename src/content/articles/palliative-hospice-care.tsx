import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const PALLIATIVE_HOSPICE_CARE_ARTICLES: ArticleContentMap = {
  "what-palliative-care-actually-is": [
    {
      heading: "The misunderstanding that costs families months of help",
      body: (
        <>
          <p>
            Most families hear the word palliative and translate it as
            "the doctors have given up." That translation is wrong, and
            it is expensive, because it makes people refuse or delay a
            service that would have made life measurably better.
            Palliative care is specialized care focused on comfort,
            symptom control, and quality of life for people with serious
            illness. It runs alongside other treatment, not instead of
            it; a person can receive chemotherapy and palliative care in
            the same month. And it is not only for the final days. The
            evidence consistently shows that people who start palliative
            care early feel better, and in some studies live longer,
            than those who start late.
          </p>
          <p>
            The useful reframe: palliative care is the team whose entire
            job is how the person feels. Every other specialist is
            focused on the disease. This one is focused on the days.
          </p>
        </>
      ),
    },
    {
      heading: "What the team actually does",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Symptom control that actually works:</strong> pain,
              breathlessness, nausea, agitation, and sleeplessness are
              treatable problems with a real body of expertise behind
              them, and palliative physicians and nurses are the experts.
            </li>
            <li>
              <strong>Home visits.</strong> Palliative physicians and
              nurse practitioners make house calls, and palliative home
              care brings nursing and personal support into the house,
              publicly funded.
            </li>
            <li>
              <strong>Equipment and practical setup:</strong> hospital
              beds, commodes, and oxygen at home, arranged and funded
              through the public system.
            </li>
            <li>
              <strong>A plan for the 2 a.m. crisis.</strong> Good
              palliative teams leave a symptom kit in the house and a
              number to call, which is the difference between a managed
              night and a panicked ambulance ride.
            </li>
            <li>
              <strong>Support for the family:</strong> honest
              conversations about what to expect, help with decisions,
              respite, and bereavement support afterward.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "How to get it in Ontario, step by step",
      body: (
        <>
          <p>
            The front doors are ordinary ones. Ask the family doctor or
            the specialist treating the illness directly: "Is it time
            for a palliative care referral?" Hospitals have palliative
            consult teams that can be requested during any admission.
            And <strong>Ontario Health atHome</strong> (310-2222)
            arranges palliative home care, nursing, personal support,
            and equipment, without a hospital stay first. If the answer
            to "would you be surprised if things got much worse within a
            year?" is no, it is time to ask, whatever the diagnosis:
            heart failure, lung disease, kidney disease, dementia, and
            frailty all qualify, not only cancer.
          </p>
          <p>
            Families are often the ones who have to raise it, because
            physicians hesitate, not wanting to extinguish hope. Raise
            it anyway. Accepting palliative support does not close any
            treatment door, and teams are practiced at holding both
            hope and honesty at once.
          </p>
        </>
      ),
    },
    {
      heading: "The conversations that come with it",
      body: (
        <>
          <p>
            Palliative care runs on knowing what the person actually
            wants, which most families have never said out loud. Two
            documents do most of the work. A{" "}
            <strong>power of attorney for personal care</strong> names
            who decides if the person cannot; advance care planning
            conversations tell that person what to decide. Both are
            covered in plain language in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "five-legal-documents",
              }}
              className="text-primary underline"
            >
              five legal documents guide
            </Link>
            . The questions worth asking early, while they are still
            easy: what matters most to you in the time ahead, what
            would you want more of, what are you most afraid of, and
            where would you want to be cared for if things got harder?
          </p>
          <p>
            Families who have these conversations early describe them
            afterward as a relief, not a trauma. The ones who never
            have them are the ones left guessing in a hallway at the
            worst possible moment.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>If a serious illness is progressing, ask the doctor this week about a palliative care referral, and say the word yourself if the doctor does not.</li>
            <li>Call Ontario Health atHome (310-2222) and ask what palliative home services the person qualifies for now.</li>
            <li>Confirm the power of attorney for personal care exists, and have the what-matters-most conversation while it is still an easy one.</li>
            <li>Ask the palliative team about the after-hours number and the home symptom kit before either is needed.</li>
            <li>When the time horizon shortens, read our guide to the settings, home, hospice, or hospital, so the choice is made on knowledge rather than fear.</li>
          </ol>
        </>
      ),
    },
  ],

  "hospice-at-home-or-residence": [
    {
      heading: "The three settings, honestly described",
      body: (
        <>
          <p>
            When someone is in their last months, care happens in one
            of three places: at home with support, in a residential
            hospice, or in hospital. Hospital is where nobody plans to
            be and where many people end up by default, precisely
            because the other two options were arranged too late or
            not at all. This guide exists so that the default does not
            decide.
          </p>
          <p>
            Most people say they want to die at home. That is
            achievable, and it is also honest to say what it requires:
            family able and willing to provide much of the hands-on
            care between professional visits, a home that can hold a
            hospital bed where the living happens, and nerve for hard
            nights. A residential hospice delivers the same comfort
            philosophy with round-the-clock professionals in a place
            built to feel like a home rather than a ward. Neither
            choice is braver or more loving than the other, and the
            choice is not final; people move between settings as needs
            change.
          </p>
        </>
      ),
    },
    {
      heading: "Dying at home: what it takes to do well",
      body: (
        <>
          <p>
            The scaffolding comes from{" "}
            <strong>Ontario Health atHome</strong> (310-2222):
            palliative nursing visits, personal support hours, a
            hospital bed and equipment, and a palliative physician or
            nurse practitioner attached to the house, all publicly
            funded. At end of life the allocated hours rise
            substantially, though rarely to around-the-clock, which is
            why families either take shifts or hire{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "home-care",
                article: "homecare-care-types",
              }}
              className="text-primary underline"
            >
              private care
            </Link>{" "}
            to fill nights. Local hospice organizations also send
            trained <strong>visiting volunteers</strong> at no charge,
            who sit with the person so family can sleep or step out.
          </p>
          <p>
            Three arrangements make the difference between a peaceful
            home death and a 911 call: the after-hours palliative
            number posted by the phone, the symptom kit already in the
            house, and a signed do-not-resuscitate confirmation where
            paramedics can see it, because without one, paramedics who
            are called must attempt resuscitation. The palliative team
            arranges all three; the family's job is to ask before the
            crisis.
          </p>
        </>
      ),
    },
    {
      heading: "Residential hospice: the option families discover too late",
      body: (
        <>
          <p>
            A residential hospice is a small home-like facility, often
            ten beds or fewer, staffed around the clock by palliative
            nurses and physicians, with family welcome at any hour and
            room for them to stay. Care is focused entirely on comfort,
            the ratios are far better than any hospital ward, and
            families who experience one almost universally wish they
            had known sooner. In Ontario,{" "}
            <strong>residential hospice care is free to the family</strong>,
            funded by the province and donations.
          </p>
          <p>
            The honest constraints: beds are limited, admission
            generally requires a prognosis measured in weeks to a few
            months, and referral typically comes through the palliative
            team or Ontario Health atHome. The practical move is to ask
            the palliative team early which hospices serve the area,
            visit one before it is urgent, and get the referral
            paperwork started when the horizon shortens, because a bed
            that is wanted on Friday is easier to get if the file
            opened in March. 211 and the local hospice organization can
            name every residence nearby.
          </p>
        </>
      ),
    },
    {
      heading: "The money, and the benefits that pay family caregivers",
      body: (
        <>
          <p>
            The core care itself costs less than families fear:
            palliative home care and residential hospice are publicly
            funded, and hospital care is OHIP-covered. Where money
            goes is private care topping up home support, and lost
            income when family steps back from work. Two federal
            programs help with the second.{" "}
            <strong>EI compassionate care benefits</strong> pay up to
            26 weeks to people who leave work to care for a family
            member at risk of dying, at the usual EI rate, and the
            weeks can be shared among siblings. Ontario employees also
            have job-protected{" "}
            <strong>family medical leave</strong> for the same
            situation. The caregiver tax credits and the medical
            expense credit in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "legal-financial",
                article: "paying-for-care",
              }}
              className="text-primary underline"
            >
              paying for care guide
            </Link>{" "}
            apply here as well.
          </p>
          <p>
            And because the practical and the final are neighbours:
            if the funeral has not been thought about, doing it now,
            gently, spares the family a second scramble; our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "funeral-estate-planning",
                article: "funeral-preplanning-guide",
              }}
              className="text-primary underline"
            >
              pre-planning guide
            </Link>{" "}
            was written for exactly this moment.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Ask the palliative team or Ontario Health atHome (310-2222) to walk through all three settings for your situation, out loud, once.</li>
            <li>If aiming for home: confirm the after-hours number, the symptom kit, and the DNR confirmation form are in place this week.</li>
            <li>Ask which residential hospices serve the area and visit one early, even if home is the plan; it turns the backup into a known place.</li>
            <li>If family members are reducing work to caregive, apply for EI compassionate care benefits now; the weeks can be shared.</li>
            <li>Ask the hospice organization about visiting volunteers and, afterward, bereavement support; both are free and both help.</li>
          </ol>
        </>
      ),
    },
  ],
};
