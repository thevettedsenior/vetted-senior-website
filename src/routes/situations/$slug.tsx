import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Page } from "@/components/SiteShell";
import { findSituation } from "@/lib/directory-data";

export const Route = createFileRoute("/situations/$slug")({
  loader: ({ params }) => {
    const situation = findSituation(params.slug);
    if (!situation) throw notFound();
    if (situation.phase === "coming-soon") throw notFound();
    return { situation };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.situation.title} | The Vetted Senior`
          : "Guide",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.situation.description} Plain-language guidance from The Vetted Senior.`
          : "",
      },
    ],
  }),
  component: SituationGuidePage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Guide not found</h1>
        <p className="mt-3 text-muted-foreground">
          This guide may still be in progress.
        </p>
        <Link to="/situations" className="mt-4 inline-block text-primary underline">
          See all situations
        </Link>
      </div>
    </Page>
  ),
});

function HelpLink({ category, children }: { category: string; children: ReactNode }) {
  return (
    <Link
      to="/help/$category"
      params={{ category }}
      className="text-primary underline hover:text-primary/80"
    >
      {children}
    </Link>
  );
}

type Section = {
  part: string;
  heading: string;
  body: ReactNode;
};

const GUIDES: Record<string, Section[]> = {
  "parent-had-a-fall": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Falls can happen for many reasons, and often several reasons at once.
            The floor was slippery. The lighting was poor. A medication caused
            dizziness. Eyesight has changed. Muscle strength has declined without
            anyone noticing. Sometimes there is no single cause.
          </p>
          <p>
            What matters now is not assigning blame. Falls are not inevitable, and
            they are not a sign of failure. They are a signal that something in the
            environment or the body needs attention.
          </p>
          <p>
            Even a fall with no injury can be significant. The fear of falling again
            often leads older adults to move less, which weakens muscles, which
            increases the risk of the next fall. Breaking that cycle early matters.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">If the fall just happened</h3>
          <p>
            Stay calm and do not rush to move the person. Moving someone with an
            undetected injury can make things worse.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Ask them how they feel and where it hurts</li>
            <li>
              Look for signs of serious injury: pain in the hip, back, or neck;
              inability to move a limb; confusion; loss of consciousness
            </li>
            <li>
              If you suspect a serious injury, call emergency services immediately
              and do not attempt to move them
            </li>
            <li>
              If they are conscious and not seriously hurt, help them get
              comfortable while you assess the situation
            </li>
            <li>
              If they are alone and cannot get up safely, they should call for help
              rather than attempting to get up unaided
            </li>
          </ul>
          <p>
            Getting up from a fall incorrectly is a common cause of additional
            injury. If the person can move without pain, the safest way to get up
            is to roll to one side, push up to hands and knees, crawl to a sturdy
            piece of furniture, and use it to push up slowly.
          </p>
          <h3 className="font-serif text-xl text-primary">In the hours and days after</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              See a doctor, even if nothing seems broken. Some injuries are not
              immediately obvious. Hip fractures in particular can be missed
            </li>
            <li>
              Tell the doctor about any medications the person takes. Some
              medications affect balance and blood pressure
            </li>
            <li>
              Note exactly where and how the fall happened. This detail helps
              identify what to change
            </li>
            <li>
              Watch for signs of a head injury in the days following: unusual
              drowsiness, confusion, headache, vomiting
            </li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <>
          <p>
            Understanding what increases fall risk helps you take action in the
            right places.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Medications:</strong> Certain medications cause dizziness,
              drop in blood pressure when standing, or affect balance. Ask a doctor
              or pharmacist to review all medications, including over-the-counter
              drugs and supplements. This is one of the most impactful steps you
              can take.
            </li>
            <li>
              <strong>Vision:</strong> Outdated glasses prescriptions and
              conditions like cataracts or macular degeneration significantly
              affect depth perception and balance. An eye exam is worth scheduling.
            </li>
            <li>
              <strong>Footwear:</strong> Socks without grip, loose slippers, and
              shoes with poor support are common culprits. Well-fitting shoes with
              non-slip soles and low, broad heels make a real difference.
            </li>
            <li>
              <strong>Home hazards:</strong> Loose rugs, poor lighting, cluttered
              pathways, and lack of grab bars in bathrooms are among the most
              correctable risk factors.
            </li>
            <li>
              <strong>Muscle weakness:</strong> Strength and balance decline
              naturally with age, but can be improved with exercise. Even gentle
              movement programs have shown meaningful results.
            </li>
            <li>
              <strong>Health conditions:</strong> Low blood pressure, inner ear
              conditions, Parkinson&#x2019;s disease, stroke, and diabetes all
              affect balance. Managing these conditions well reduces fall risk.
            </li>
            <li>
              <strong>Recent illness or surgery:</strong> Periods of bed rest
              reduce strength quickly. Extra caution is needed during recovery.
            </li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Home modifications</h3>
          <p>
            Many falls happen at home, and many can be prevented with
            straightforward changes. A home safety assessment by an occupational
            therapist identifies specific hazards and recommends practical
            solutions.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Install grab bars in the bathroom beside the toilet and in the
              shower or tub
            </li>
            <li>Add non-slip mats in the bathroom and kitchen</li>
            <li>
              Improve lighting throughout the home, especially on stairs and in
              hallways
            </li>
            <li>Remove loose rugs or secure them with non-slip backing</li>
            <li>
              Rearrange frequently used items so they are easy to reach without
              stretching or bending
            </li>
            <li>Consider a raised toilet seat and a shower chair or bench</li>
            <li>Ensure stair rails are secure and extend the full length of stairs</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">Exercise and physical therapy</h3>
          <p>
            Strength and balance training is one of the most effective ways to
            reduce fall risk. Programs do not need to be intensive to be helpful.
            Tai chi, gentle yoga, and physiotherapist-guided balance exercises all
            have good evidence behind them. A physiotherapist can design a program
            suited to the individual&#x2019;s current abilities.
          </p>
          <h3 className="font-serif text-xl text-primary">Assistive devices</h3>
          <p>
            A cane or walker used correctly provides meaningful stability. Many
            people resist these devices, but using one is a choice that preserves
            independence rather than diminishing it. A physiotherapist or
            occupational therapist can ensure the device is the right type and
            correctly fitted.
          </p>
          <h3 className="font-serif text-xl text-primary">Medical alert systems</h3>
          <p>
            A personal emergency response device means that if a fall happens when
            no one is around, help can be called with the press of a button.
            Modern devices include automatic fall detection, GPS tracking, and
            two-way communication. They are worth considering for anyone who
            spends time alone.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="medical-alert-safety">medical alert providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Home support</h3>
          <p>
            If daily tasks have become more difficult, in-home support can help
            someone continue living independently and safely. This ranges from a
            few hours of help each week to daily personal care assistance.
          </p>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Many regions offer publicly funded programs that provide home safety
            assessments, falls prevention exercise classes, home modification
            funding, and in-home support. These vary by location.
          </p>
          <p className="italic">
            Check the <Link to="/situations" className="text-primary underline">directory under your province</Link>{" "}
            for local falls prevention programs and funded home support services.
          </p>
          <p>
            Community organizations, seniors centres, and local health authorities
            are also good sources of information about what is available in your
            area at low or no cost.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <p>
            The cost of falls prevention measures varies widely depending on what
            is needed.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Home modifications range from low-cost (non-slip mats, improved
              lighting) to significant (stairlift installation, bathroom
              renovation)
            </li>
            <li>
              Some regions offer grants or subsidized programs for home
              modifications for older adults. Ask your local municipality or
              seniors services organization
            </li>
            <li>
              Medical alert devices typically involve a monthly subscription fee.
              Costs vary by provider and feature set
            </li>
            <li>
              Physiotherapy and occupational therapy may be covered in part by
              health insurance or publicly funded programs depending on your
              location
            </li>
            <li>
              In-home support may be publicly subsidized or privately paid
              depending on the level of care needed and where you live
            </li>
          </ul>
          <p>
            It is worth speaking with a social worker or care coordinator to
            identify what funding you may be entitled to before paying out of
            pocket.
          </p>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For the doctor</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Could any of the medications being taken be contributing to fall risk?</li>
            <li>Should balance or strength be formally assessed?</li>
            <li>Is a referral to physiotherapy or occupational therapy appropriate?</li>
            <li>Are there any underlying health conditions that should be investigated?</li>
            <li>How soon should we follow up?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">
            For a physiotherapist or occupational therapist
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What specific exercises would help most?</li>
            <li>Is the current assistive device (if any) appropriate and correctly fitted?</li>
            <li>What changes to the home would have the most impact?</li>
            <li>How long before we expect to see improvement in balance and strength?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a home care provider</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What tasks can you help with?</li>
            <li>How do you handle emergencies?</li>
            <li>Are your staff trained in falls prevention and safe mobility assistance?</li>
            <li>What happens if the regular caregiver is unavailable?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A home safety checklist can be a useful starting point for identifying
            hazards. Walk through each room and note: lighting levels, floor
            surfaces, stair rails, bathroom grab bars, furniture stability, and the
            location of frequently used items.
          </p>
          <p>
            Keeping a medication list that includes all prescription drugs,
            over-the-counter medications, vitamins, and supplements is useful for
            every medical appointment and especially valuable in an emergency.
          </p>
          <p>
            If a medical alert device is being considered, a comparison of
            features and monthly costs across providers helps with the decision.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the site
            develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <>
          <p>
            Based on what has been covered in this guide, the following types of
            providers may be helpful. You can find vetted options in the
            directory.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <HelpLink category="home-care">Home Care</HelpLink> providers for
              in-home support and personal care
            </li>
            <li>
              <HelpLink category="medical-alert-safety">Medical Alert and Safety</HelpLink>{" "}
              providers for emergency response devices
            </li>
            <li>
              <HelpLink category="mobility-equipment">Mobility and Equipment</HelpLink>{" "}
              providers for grab bars, non-slip aids, walkers, and bathroom safety
              equipment
            </li>
            <li>
              <HelpLink category="home-maintenance">Home Maintenance</HelpLink>{" "}
              providers for installing grab bars, improving lighting, and other
              home modifications
            </li>
          </ul>
          <p className="italic">
            Use the <Link to="/help" className="text-primary underline">Find Help</Link>{" "}
            section of this site to browse vetted providers by category and
            location.
          </p>
        </>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <>
          <p>Start with the steps that take the least time and have the most impact.</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Book a doctor&#x2019;s appointment to discuss the fall, review
              medications, and assess whether further investigation is needed.
            </li>
            <li>
              Do a walkthrough of the home and address the most obvious hazards
              first: loose rugs, poor lighting, missing grab bars.
            </li>
            <li>
              Ask for a referral to an occupational therapist for a home safety
              assessment if hazards are not obvious or if there are mobility
              concerns.
            </li>
            <li>
              Look into balance and strength exercises, either through a
              physiotherapist or a community falls prevention program.
            </li>
            <li>Consider a medical alert device if the person spends time alone.</li>
            <li>
              Look into available funding and publicly supported services in your
              area before paying out of pocket.
            </li>
          </ol>
        </>
      ),
    },
  ],
  "dementia-concerns": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Dementia is an umbrella term for a group of symptoms that affect
            memory, thinking, and the ability to perform everyday tasks. It is
            caused by damage to brain cells, and it is progressive, meaning it
            changes over time. Alzheimer&#x2019;s disease is the most common
            form, but there are others including vascular dementia, Lewy body
            dementia, and frontotemporal dementia, each with somewhat different
            patterns of symptoms.
          </p>
          <p>
            Early signs vary but commonly include: forgetting recent
            conversations or events while remembering older ones clearly, getting
            confused in familiar environments, difficulty finding words, poor
            judgment in situations that would not have been a problem before, and
            changes in mood or personality.
          </p>
          <p>
            It is important to know that not all memory changes mean dementia.
            Stress, depression, thyroid problems, vitamin deficiencies, medication
            side effects, and sleep problems can all cause memory and thinking
            difficulties that look similar but are treatable. This is one reason
            why seeing a doctor early matters: some causes of cognitive decline
            can be reversed.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <p>
            The most important first step is to see a doctor. This can feel
            difficult, especially if the person who may be affected is resistant
            or frightened. But early assessment opens options that are not
            available later.
          </p>
          <h3 className="font-serif text-xl text-primary">
            If you are the person experiencing changes
          </h3>
          <p>
            Tell your doctor what you have noticed, even if it feels
            embarrassing. Be specific about what is different from before. Bring
            someone you trust to the appointment if you can. They may have
            noticed things you have not, and they can help you remember what the
            doctor says.
          </p>
          <h3 className="font-serif text-xl text-primary">
            If you are a family member or friend
          </h3>
          <p>
            Gently raising concerns with the person and offering to go with them
            to a doctor&#x2019;s appointment is often the most effective approach.
            Avoid framing it as something alarming. Try something like:
            &#x2018;I have noticed a few things lately and I would feel better if
            we talked to the doctor together.&#x2019;
          </p>
          <p>
            If the person refuses and you are genuinely concerned for their
            safety, speaking to their doctor directly (even if the doctor cannot
            share information back with you) or consulting with a social worker
            about next steps can help.
          </p>
          <h3 className="font-serif text-xl text-primary">What to expect at the doctor</h3>
          <p>
            An initial assessment typically involves a conversation about
            symptoms, a brief cognitive screening test, blood tests to rule out
            treatable causes, and sometimes brain imaging. If the initial
            assessment suggests dementia, a referral to a specialist such as a
            neurologist, geriatrician, or geriatric psychiatrist is usually the
            next step. Diagnosis can take time. That is normal.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Driving:</strong> Dementia affects the judgment and reaction
            time needed for driving. This is a sensitive issue but a real safety
            concern. It should be discussed with a doctor early, before it
            becomes a crisis.
          </li>
          <li>
            <strong>Financial vulnerability:</strong> People with dementia are at
            higher risk of financial exploitation and of making poor financial
            decisions. Putting legal safeguards in place early, while the person
            still has capacity, is important.
          </li>
          <li>
            <strong>Wandering:</strong> As dementia progresses, some people leave
            home and become disoriented. Planning ahead for this possibility is
            worthwhile even if it has not happened yet.
          </li>
          <li>
            <strong>Caregiver burnout:</strong> Caring for someone with dementia
            is one of the most demanding caregiving situations. Burnout is not a
            sign of weakness. It is a predictable outcome of prolonged,
            unsupported caregiving. Support for caregivers matters as much as
            support for the person with dementia.
          </li>
          <li>
            <strong>Medication management:</strong> Difficulty managing
            medications safely becomes a concern as cognitive impairment
            progresses. Pill organizers, blister packs, and eventually medication
            supervision may be needed.
          </li>
          <li>
            <strong>Delayed diagnosis:</strong> Many people wait too long to seek
            a diagnosis. Early diagnosis allows more time to plan, access
            supports, and in some cases, access treatments that may slow
            progression.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">At home in the early stages</h3>
          <p>
            Many people with dementia live at home for years, especially with
            early diagnosis and the right supports. The goal in the early stages
            is to maintain independence, safety, and quality of life for as long
            as possible.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Establishing routines reduces confusion and anxiety</li>
            <li>
              Simplifying the environment: reducing clutter, labelling drawers
              and cupboards, leaving notes in visible places
            </li>
            <li>
              Using technology: medication reminders, GPS devices for safety,
              video calling to stay connected with family
            </li>
            <li>
              In-home support for household tasks, personal care, and
              companionship as needs increase
            </li>
          </ul>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Adult day programs</h3>
          <p>
            Adult day programs offer structured activities, social connection,
            and supervision during the day in a community setting. They provide
            meaningful stimulation for the person with dementia and essential
            respite for family caregivers.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="companion-social">companion and social programs</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Memory care residences</h3>
          <p>
            As dementia progresses and care needs increase beyond what can
            safely be provided at home, a specialized memory care residence may
            be the right option. These facilities have staff trained
            specifically in dementia care, secure environments to prevent
            wandering, and programming designed for people with cognitive
            impairment.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="retirement-residences">
              retirement and memory care residences
            </HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Legal and financial planning</h3>
          <p>
            Setting up powers of attorney for both personal care and finances
            while the person with dementia still has legal capacity is one of
            the most important practical steps. This allows a trusted person to
            make decisions if the individual is no longer able to do so. A
            lawyer with experience in elder law can guide this process.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="legal-financial">legal professionals</HelpLink> in
            the directory.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Most regions have publicly funded programs and community
            organizations that provide support to people with dementia and their
            caregivers. These commonly include home support services, adult day
            programs, caregiver education and training, respite care, and
            support groups.
          </p>
          <p>
            Dementia-specific organizations in many countries offer information
            lines, online resources, local support groups, and care navigation
            support at no cost.
          </p>
          <p className="italic">
            Check the <Link to="/situations" className="text-primary underline">directory under your province or region</Link>{" "}
            for local dementia support programs and organizations.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <p>
            The costs of dementia care are significant and increase over time as
            care needs grow.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              In-home support may be partially or fully funded through public
              programs depending on location and assessed need, or privately
              arranged
            </li>
            <li>Adult day programs vary in cost and may be subsidized in some regions</li>
            <li>
              Memory care residences are typically privately funded, though
              public funding may be available in some circumstances depending on
              location
            </li>
            <li>Legal costs for setting up powers of attorney are a worthwhile one-time investment</li>
            <li>Some private health insurance plans cover portions of home care or respite care</li>
          </ul>
          <p>
            A social worker or care coordinator can help identify what public
            funding and community supports are available in your specific
            location before you start paying privately.
          </p>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For the doctor</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What type of dementia is this, and what does that mean for how it will progress?</li>
            <li>Are there any medications or treatments that might help?</li>
            <li>What should we watch for as signs that more support is needed?</li>
            <li>Is it still safe to drive?</li>
            <li>Who should we contact if we need help navigating next steps?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a memory care residence</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What is the staff-to-resident ratio?</li>
            <li>How are staff trained in dementia care?</li>
            <li>What does a typical day look like for residents?</li>
            <li>How do you handle wandering and agitation?</li>
            <li>How do you communicate with families, and how often?</li>
            <li>What happens if a resident&#x2019;s needs exceed what you can provide?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a home care provider</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Do your staff have experience supporting people with dementia?</li>
            <li>How do you handle difficult moments like refusal of care or agitation?</li>
            <li>How is continuity of care managed so the same caregivers visit regularly?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            Keeping a written record of symptoms as they develop over time is
            useful for medical appointments and for tracking changes.
          </p>
          <p>
            A medication list, including all prescriptions and supplements,
            should be kept up to date and brought to every appointment.
          </p>
          <p>
            A care journal documenting daily observations, what worked and what
            did not, and any incidents, helps family members coordinate and helps
            doctors understand the full picture.
          </p>
          <p>
            A legal document checklist to track which documents have been
            prepared: power of attorney for finances, power of attorney for
            personal care, advance directive or living will, and up-to-date will.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the site
            develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <HelpLink category="home-care">Home Care</HelpLink> providers for
              in-home support and personal care
            </li>
            <li>
              <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
              programs for adult day programs and social connection
            </li>
            <li>
              <HelpLink category="retirement-residences">Retirement Residences</HelpLink>{" "}
              with memory care programs
            </li>
            <li>
              <HelpLink category="legal-financial">Legal and Financial</HelpLink>{" "}
              professionals experienced with elder law and powers of attorney
            </li>
            <li>
              <HelpLink category="transportation">Transportation</HelpLink>{" "}
              services for medical appointments and day programs
            </li>
          </ul>
          <p className="italic">
            Use the <Link to="/help" className="text-primary underline">Find Help</Link>{" "}
            section of this site to browse vetted providers by category and
            location.
          </p>
        </>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Book a doctor&#x2019;s appointment to discuss what you have noticed.
            Be specific and bring someone with you if possible.
          </li>
          <li>
            Rule out treatable causes. Blood tests and a full medication review
            should be part of the initial workup.
          </li>
          <li>
            If dementia is suspected or confirmed, set up powers of attorney
            while the person still has legal capacity to do so.
          </li>
          <li>
            Connect with a local dementia support organization. They can help
            you understand what to expect and what is available.
          </li>
          <li>
            Look into what home support is available in your area so you know
            your options before you urgently need them.
          </li>
          <li>
            If you are a caregiver, take your own wellbeing seriously from the
            start. Burnout is predictable without support. Find respite options
            before you need them desperately.
          </li>
        </ol>
      ),
    },
  ],
  "staying-at-home": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            The desire to stay at home often comes with questions that nobody is
            quite ready to ask out loud. Can I manage on my own? What happens if
            something goes wrong? How do I know when it is time to accept help?
            When does staying at home stop being the right choice?
          </p>
          <p>
            These are good questions. The goal of this guide is not to push
            anyone toward a decision, but to give you the information to make a
            real one.
          </p>
          <p>
            For many people, the barrier is not physical. It is the fear of
            losing independence by admitting you need help, or the reluctance to
            spend money on support, or simply not knowing what help is
            available. All of those barriers are worth addressing, because the
            alternative, trying to manage without support until a crisis forces a
            change, usually ends badly.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <p>
            An honest assessment of the current situation is the right starting
            point. This does not have to involve outsiders if you are not ready
            for that. Start with a realistic look at what is working and what is
            not.
          </p>
          <h3 className="font-serif text-xl text-primary">Ask yourself these questions</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Are daily tasks like cooking, cleaning, laundry, and grocery shopping manageable?</li>
            <li>Is personal care like bathing, dressing, and grooming manageable safely?</li>
            <li>Is the home safe? Are there fall hazards? Is the bathroom safe?</li>
            <li>Are medications being taken correctly and on time?</li>
            <li>Are bills and finances being managed?</li>
            <li>Is there enough social connection, or is loneliness becoming a problem?</li>
            <li>Is there someone who can help in an emergency?</li>
          </ul>
          <p>The areas where the answer is no or not really are where to focus first.</p>
          <h3 className="font-serif text-xl text-primary">Talk to your doctor</h3>
          <p>
            A medical check-in is a useful starting point. Some difficulties
            with daily living have medical causes that can be treated. A doctor
            can also provide referrals to occupational therapists,
            physiotherapists, and social workers who specialize in helping people
            stay at home safely.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Falls:</strong> Falls are the most common serious safety risk
            for older adults at home. See the{" "}
            <Link to="/situations/$slug" params={{ slug: "parent-had-a-fall" }} className="text-primary underline">
              Parent Had a Fall
            </Link>{" "}
            guide for detailed information. The key point here is that falls
            prevention is active, not passive. It requires attention to the home
            environment, medications, vision, and physical conditioning.
          </li>
          <li>
            <strong>Medication errors:</strong> Missing doses, taking the wrong
            dose, or dangerous interactions between medications are common and
            serious. As the number of medications increases, so does the risk.
          </li>
          <li>
            <strong>Isolation and loneliness:</strong> Social isolation is
            associated with serious health consequences including cognitive
            decline, depression, and increased falls risk. It is easy to
            underestimate how quickly it can develop when mobility decreases or
            when friends and family live far away.
          </li>
          <li>
            <strong>Nutrition:</strong> Cooking becomes harder as mobility and
            energy change. Poor nutrition affects everything else: energy,
            immune function, wound healing, and cognitive clarity.
          </li>
          <li>
            <strong>Undetected health changes:</strong> Living alone means that
            gradual changes in health may go unnoticed longer than they would
            with more regular contact. Regular check-ins from people who know
            the person well matter.
          </li>
          <li>
            <strong>Home maintenance neglect:</strong> Small maintenance problems
            can become safety hazards. A leaking roof, a broken step, or faulty
            electrical are more than inconveniences.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Home care</h3>
          <p>
            In-home support covers a wide range. At the lighter end it means
            help with housekeeping, grocery shopping, meal preparation, and
            laundry. As needs increase it can include personal care assistance
            with bathing, dressing, and grooming. At the more intensive end it
            includes skilled nursing care. The right level of support is
            whatever allows the person to live safely and with dignity.
          </p>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Home modifications</h3>
          <p>
            Modifying the home to match changing abilities extends independent
            living significantly. Priority areas are usually the bathroom, where
            grab bars, a shower seat, and a raised toilet seat make a
            significant difference, and the entryways and stairs, where
            lighting, rails, and ramps matter.
          </p>
          <p className="italic">
            Find vetted home modification and installation services in the
            directory under{" "}
            <HelpLink category="home-maintenance">Home Maintenance</HelpLink> and{" "}
            <HelpLink category="mobility-equipment">Mobility and Equipment</HelpLink>.
          </p>
          <h3 className="font-serif text-xl text-primary">Meal support</h3>
          <p>
            Meal delivery services bring nutritious, ready-to-eat meals to the
            door. Community meal programs provide both food and social
            connection. Some grocery delivery services are particularly well set
            up for older adults.
          </p>
          <p className="italic">
            Find vetted meal and nutrition services through the{" "}
            <Link to="/help" className="text-primary underline">Find Help</Link>{" "}
            directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Transportation</h3>
          <p>
            When driving is no longer possible or no longer feels safe,
            transportation becomes a practical barrier to medical appointments,
            shopping, and social activities. Accessible transportation options,
            volunteer driver programs, and medical transport services exist in
            most communities.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="transportation">transportation services</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Technology supports</h3>
          <p>
            Technology has expanded what is possible for independent living.
            Medication reminder systems ensure correct medication timing.
            Medical alert devices provide emergency backup when alone. Video
            calling keeps people connected with family. Smart home devices can
            control lighting, temperature, and appliances by voice.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="medical-alert-safety">
              medical alert and safety products
            </HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Social and companion support</h3>
          <p>
            Volunteer visitor programs, telephone reassurance programs, and
            adult day programs address social isolation. Community centres and
            seniors organizations offer programming and connection. These are
            not extras: social connection is a genuine health need.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="companion-social">companion and social programs</HelpLink>{" "}
            in the directory.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Many regions provide publicly funded home support services, meal
            programs, transportation assistance, and caregiver respite through
            public health and social services systems. Eligibility and the
            level of support available vary by location.
          </p>
          <p>
            A care coordinator or social worker can conduct a needs assessment
            and connect you with funded services in your area. This is usually
            the most efficient way to find out what you are entitled to.
          </p>
          <p className="italic">
            Check the <Link to="/situations" className="text-primary underline">directory under your province or region</Link>{" "}
            for publicly funded home support and community programs.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <p>
            The cost of staying at home with support depends on what support is
            needed and how much of it is publicly funded in your location.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Basic housekeeping help through a private agency or independent
              worker typically costs less than nursing support or personal care
              assistance
            </li>
            <li>
              Home modifications have a wide cost range. Adding grab bars is
              inexpensive. A full bathroom renovation or stairlift installation
              is a significant investment
            </li>
            <li>Some regions offer grants, subsidized loans, or tax credits for home modifications for older adults</li>
            <li>
              Medical alert devices involve a monthly subscription, typically a
              modest cost relative to the peace of mind they provide
            </li>
            <li>Meal delivery services vary in cost. Some community programs provide meals at low or no cost</li>
          </ul>
          <p>
            Comparing the cost of staying at home with the right support against
            the cost of a retirement residence is often instructive. For many
            people, staying at home with paid support is less expensive than a
            retirement residence, at least in the early and middle stages of
            declining independence.
          </p>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For a home care agency</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What services do you provide and at what cost?</li>
            <li>Are your workers employees or contractors, and how are they screened and trained?</li>
            <li>How do you match workers with clients?</li>
            <li>What is your policy if a scheduled worker cannot come?</li>
            <li>Can the level of service be adjusted as needs change?</li>
            <li>Do you provide a written service agreement?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">
            For an occupational therapist doing a home assessment
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What are the most important changes to make first?</li>
            <li>What equipment or modifications would have the greatest impact on safety and independence?</li>
            <li>Are there any tasks that should no longer be attempted alone?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For family conversations</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What matters most to the person who wants to stay at home?</li>
            <li>What are the non-negotiable safety concerns for the family?</li>
            <li>How will we know if the current arrangement is no longer working?</li>
            <li>Who will coordinate care and communicate with providers?</li>
            <li>What is the plan if there is an emergency?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A home safety checklist covering each room can identify hazards
            that are easy to miss when you see the space every day.
          </p>
          <p>
            A personal care plan that documents daily routines, medication
            schedules, dietary preferences, and emergency contacts is useful for
            anyone providing support and essential in an emergency.
          </p>
          <p>
            A contact list of all providers, doctors, and emergency contacts,
            kept in a visible place at home, is a simple but important safety
            measure.
          </p>
          <p>
            A care agreement with any home care provider should be in writing
            and should cover services, schedule, costs, cancellation policy, and
            what happens in emergencies.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the site
            develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <HelpLink category="home-care">Home Care</HelpLink> providers for
            personal support, nursing, and household help
          </li>
          <li>
            <HelpLink category="home-maintenance">Home Maintenance</HelpLink>{" "}
            providers for repairs and home modifications
          </li>
          <li>
            <HelpLink category="mobility-equipment">Mobility and Equipment</HelpLink>{" "}
            providers for grab bars, shower chairs, walkers, and assistive
            devices
          </li>
          <li>
            <HelpLink category="medical-alert-safety">Medical Alert and Safety</HelpLink>{" "}
            providers for emergency response systems
          </li>
          <li>
            <HelpLink category="transportation">Transportation</HelpLink>{" "}
            services for medical appointments and community access
          </li>
          <li>
            <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
            programs for social connection and adult day programs
          </li>
          <li>Meal and Nutrition services for meal delivery and grocery support</li>
        </ul>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Do an honest assessment of what is working and what is not. Use the
            questions in Part 2 as a starting point.
          </li>
          <li>
            Talk to a doctor about any health concerns that are making daily
            life more difficult. Some have straightforward solutions.
          </li>
          <li>
            Look into what publicly funded home support services are available
            in your area. Contact your local health authority or social
            services office.
          </li>
          <li>
            Address the most obvious home safety issues. Start with the
            bathroom and any fall hazards.
          </li>
          <li>Consider a medical alert device if there is any time spent alone at home.</li>
          <li>
            Have an honest family conversation about what support is
            available, who will coordinate it, and what the plan is if the
            situation changes.
          </li>
          <li>
            Make a plan now for what would need to change if staying at home
            becomes unsafe. Having that conversation before a crisis is far
            better than having it during one.
          </li>
        </ol>
      ),
    },
  ],
  "caregiver-burnout": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Caregiver burnout is a state of physical, emotional, and mental
            exhaustion caused by the ongoing demands of caring for someone
            else. It does not arrive suddenly. It builds over months or
            years as the caregiver&#x2019;s own needs go unmet while the
            needs of the person they care for continue to grow.
          </p>
          <p>
            Signs of burnout include: persistent fatigue that sleep does not
            fix, feeling hopeless or trapped, withdrawing from people and
            activities you used to enjoy, getting sick more often than
            usual, feeling irritable or resentful toward the person you
            care for, and a sense that nothing you do is ever enough.
          </p>
          <p>
            Many caregivers feel guilty about these feelings. The guilt is
            understandable but misplaced. Feeling burnt out does not mean
            you love the person less. It means you have been giving more
            than is sustainable for too long. The solution is not to try
            harder. The solution is to get support.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <p>
            The first and hardest step is acknowledging that what you are
            experiencing is real and serious. Burnout is not a personal
            weakness. It is a condition with real health consequences, for
            you and ultimately for the person you care for.
          </p>
          <h3 className="font-serif text-xl text-primary">Tell someone</h3>
          <p>
            Keeping burnout private makes it worse. Talk to your doctor
            about how you are feeling. Tell a trusted family member or
            friend what you are carrying. If there are other people who
            could be sharing the caregiving load, now is the time to have
            that conversation honestly.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Get a medical check-in for yourself
          </h3>
          <p>
            Caregivers often neglect their own health entirely. When did
            you last see a doctor for yourself? Chronic stress has physical
            consequences. Your health matters, not only for your sake but
            because your ability to continue caregiving depends on it.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Identify what needs to change
          </h3>
          <p>
            Burnout is a signal that the current situation is not
            sustainable. Something needs to change. That might be getting
            more help, taking regular time off, adjusting the level of care
            you are providing, or reconsidering whether the person you care
            for needs a different care arrangement. All of these are
            legitimate options.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Your own health:</strong> Caregivers have significantly
            higher rates of depression, anxiety, and physical illness than
            non-caregivers. Ignoring your own health needs while caring for
            someone else is a pattern that ends badly for both of you.
          </li>
          <li>
            <strong>Isolation:</strong> Caregiving is isolating by nature.
            Social withdrawal makes burnout worse. Maintaining some social
            connection, even when it feels impossible, is genuinely
            important.
          </li>
          <li>
            <strong>Financial strain:</strong> Many caregivers reduce their
            working hours or leave employment entirely to provide care. The
            financial impact is real and often underestimated. Planning
            ahead for this, where possible, matters.
          </li>
          <li>
            <strong>Relationship damage:</strong> Burnout damages
            relationships with the person being cared for, with other
            family members, and with friends. Resentment that builds up
            unaddressed causes lasting harm.
          </li>
          <li>
            <strong>Delayed help-seeking:</strong> Many caregivers wait
            until they are in crisis before asking for help. Getting
            support earlier preserves more options and prevents more
            damage.
          </li>
          <li>
            <strong>Making poor care decisions under stress:</strong>{" "}
            Exhausted caregivers are more likely to make rushed decisions
            about care arrangements that they later regret. Getting support
            before a crisis allows for better decisions.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Respite care</h3>
          <p>
            Respite care gives the caregiver a break. It can take many
            forms: a few hours of in-home support while you rest or run
            errands, a day program that the person attends several times a
            week, or a short residential stay of several days or weeks that
            allows the caregiver to recover, travel, or address their own
            needs.
          </p>
          <p>
            Many caregivers resist respite care because they feel guilty
            about taking a break. The evidence is clear: caregivers who
            take regular respite are more effective, healthier, and able to
            continue caregiving longer. A break is not abandonment. It is
            maintenance.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="home-care">
              home care providers who offer respite services
            </HelpLink>{" "}
            in the directory, and find vetted{" "}
            <HelpLink category="companion-social">day programs</HelpLink>{" "}
            under Companion and Social.
          </p>
          <h3 className="font-serif text-xl text-primary">Support groups</h3>
          <p>
            Connecting with other caregivers who understand the experience
            is one of the most consistently helpful things a burnt-out
            caregiver can do. Support groups exist for caregivers generally
            and for specific situations such as caring for someone with
            dementia. They are available in person and online.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Counselling and therapy
          </h3>
          <p>
            Individual counselling gives caregivers a space to process the
            complex emotions that come with this role, including grief,
            anger, guilt, and loss. It is not a sign of weakness. It is a
            practical tool for managing an extremely difficult situation.
          </p>
          <h3 className="font-serif text-xl text-primary">Sharing the load</h3>
          <p>
            If other family members could be contributing more, this
            conversation needs to happen. A family meeting, sometimes
            facilitated by a social worker or mediator, can help
            redistribute responsibilities more equitably. Adult children
            who live at a distance can often contribute financially or by
            taking over specific tasks like managing appointments or
            finances.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Reconsidering the care arrangement
          </h3>
          <p>
            Sometimes burnout is a signal that the current care arrangement
            has reached its limits. If the person being cared for has
            needs that exceed what one person can safely provide at home,
            exploring other options including more intensive in-home
            support or residential care is not failure. It is responsible
            planning.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="retirement-residences">
              retirement and care residences
            </HelpLink>{" "}
            in the directory.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Most regions have programs specifically designed to support
            caregivers. These commonly include funded respite care,
            caregiver education and training programs, support groups,
            counselling services, and financial benefits or tax relief for
            caregivers. Availability varies significantly by location.
          </p>
          <p>
            A social worker or care coordinator is often the most efficient
            starting point for finding out what is available in your
            specific area. Many caregiver support organizations also offer
            navigation help at no cost.
          </p>
          <p className="italic">
            Check the{" "}
            <Link to="/situations" className="text-primary underline">
              directory under your province or region
            </Link>{" "}
            for local caregiver support programs and respite services.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Respite care may be publicly funded in part or fully through
            health or social services programs depending on location and
            circumstances
          </li>
          <li>
            Some regions offer caregiver allowances or tax credits that
            recognize the financial contribution caregivers make
          </li>
          <li>
            Private respite care, counselling, and support services have
            costs that vary widely
          </li>
          <li>
            If caregiving has affected your employment, understanding your
            options around employment insurance, leave benefits, or
            caregiver support programs is worth doing sooner rather than
            later
          </li>
          <li>
            Financial planning for the long term matters especially if you
            anticipate caregiving responsibilities continuing or increasing
          </li>
        </ul>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For yourself</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What specifically is most draining about my current situation?</li>
            <li>
              What would help most right now: more practical help, more
              time off, more emotional support, or a different care
              arrangement?
            </li>
            <li>Who else could realistically be contributing to this situation and is not?</li>
            <li>What have I given up that I need to reclaim?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a respite care provider</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What services do you offer and how flexible is the scheduling?</li>
            <li>How do you match care workers with clients?</li>
            <li>What happens if the regular caregiver cannot come?</li>
            <li>How do you handle difficult situations with the person being cared for?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a family conversation</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              What are each person&#x2019;s actual constraints and what
              could each person realistically contribute?
            </li>
            <li>What needs to change for the current caregiver to be sustainable?</li>
            <li>Are there tasks that could be handled remotely or financially rather than in person?</li>
            <li>What is our shared plan if the primary caregiver is no longer able to continue?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A caregiving task inventory listing everything the caregiver
            currently does can be useful for family conversations about
            redistributing responsibilities. Seeing the full list on paper
            often surprises people who have not been closely involved.
          </p>
          <p>
            A personal wellbeing check-in, a simple weekly assessment of
            sleep, mood, energy, and social connection, helps track whether
            things are improving or deteriorating over time.
          </p>
          <p>
            A respite plan that schedules regular breaks in advance, rather
            than waiting until crisis point, is one of the most practical
            tools for sustainable caregiving.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the
            site develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <HelpLink category="home-care">Home Care</HelpLink> providers
              who offer respite and relief caregiving
            </li>
            <li>
              <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
              programs for adult day programs
            </li>
            <li>
              <HelpLink category="retirement-residences">Retirement Residences</HelpLink>{" "}
              for short-stay respite or longer-term care options
            </li>
            <li>
              <HelpLink category="legal-financial">Legal and Financial</HelpLink>{" "}
              professionals if caregiving is affecting your work or finances
            </li>
          </ul>
          <p className="italic">
            Use the <Link to="/help" className="text-primary underline">Find Help</Link>{" "}
            section of this site to browse vetted providers by category and
            location.
          </p>
        </>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            See your own doctor and be honest about how you are feeling.
            Caregiver burnout has real physical and mental health
            consequences that deserve medical attention.
          </li>
          <li>
            Tell at least one other person what you are carrying. Keeping
            burnout private makes it worse.
          </li>
          <li>
            Identify one concrete change that would reduce your load in the
            next two weeks. One hour of respite. One task redistributed.
            One conversation had.
          </li>
          <li>
            Look into what caregiver support programs are available in
            your area. Many people are surprised by what exists.
          </li>
          <li>
            If other family members could be contributing more, have that
            conversation. A social worker can help facilitate it if it
            feels too difficult to do alone.
          </li>
          <li>
            Give yourself permission to consider all options, including
            care arrangements that involve more support than you alone can
            provide. Asking for help is not failure.
          </li>
        </ol>
      ),
    },
  ],
  "parent-refuses-help": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Refusing help is rarely about stubbornness for its own sake,
            though it can feel that way. Behind most refusals are real and
            understandable fears: fear of losing independence, fear of
            being seen as incapable, fear that accepting help is the first
            step toward a nursing home, fear of burdening the people they
            love, or simply discomfort with having strangers in the home.
          </p>
          <p>
            Pride plays a role too, particularly for people who built their
            lives around self-sufficiency. For many older adults, accepting
            help feels like admitting defeat.
          </p>
          <p>
            Sometimes refusal is also a symptom of something medical.
            Depression can cause people to stop caring about their own
            wellbeing. Cognitive changes can impair someone&#x2019;s
            ability to accurately assess their own situation. Pain or
            discomfort that has been normalized can make a person
            underestimate how much they are struggling.
          </p>
          <p>
            Understanding what is actually driving the refusal helps you
            respond to the real issue rather than the surface resistance.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">
            Start with listening, not convincing
          </h3>
          <p>
            The instinct is to present evidence: here is what I have
            noticed, here is why I am worried, here is what needs to
            change. This approach almost always fails because it positions
            the conversation as a debate, and nobody changes their mind
            when they feel they are being argued with.
          </p>
          <p>
            Instead, start by asking genuine questions and listening to the
            answers. What does your parent most want to protect? What are
            they most afraid of? What does independence mean to them?
            Understanding their perspective does not mean agreeing with it,
            but it opens doors that pushback closes.
          </p>
          <h3 className="font-serif text-xl text-primary">Choose the right moment</h3>
          <p>
            Conversations about care go better when neither person is
            tired, rushed, stressed, or in the middle of something else. A
            relaxed moment, often during or after a shared meal, tends to
            work better than a planned sit-down that feels like an
            intervention.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Lead with relationship, not concern
          </h3>
          <p>
            Opening with &#x2018;I am worried about you&#x2019; often
            triggers defensiveness. Opening with &#x2018;I want to figure
            out how to make sure you can stay in your home as long as
            possible&#x2019; speaks to what the person actually wants and
            positions you as an ally rather than an adversary.
          </p>
          <h3 className="font-serif text-xl text-primary">Accept that it may take time</h3>
          <p>
            Most people do not change their minds about accepting help
            after one conversation. This is a process, not an event.
            Repeated gentle conversations over time are more effective than
            a single definitive discussion.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Safety risks going unaddressed:</strong> When someone
            refuses help they genuinely need, real safety risks
            accumulate. Falls, medication errors, poor nutrition, and
            unmanaged health conditions all become more likely.
          </li>
          <li>
            <strong>The refusal may mask something medical:</strong>{" "}
            Cognitive impairment, depression, and pain can all affect a
            person&#x2019;s willingness and ability to accept help
            accurately. If the refusal seems out of character or is
            accompanied by other changes, a medical assessment is worth
            pursuing.
          </li>
          <li>
            <strong>Family conflict:</strong> Disagreements about how to
            handle a parent&#x2019;s refusal of help are a significant
            source of conflict between adult siblings. Getting on the same
            page as a family before approaching the parent reduces this
            risk.
          </li>
          <li>
            <strong>Waiting for a crisis:</strong> Many families wait until
            a fall, a hospitalization, or another crisis forces the issue.
            Crisis-driven decisions are often worse decisions. Addressing
            the situation earlier, even imperfectly, is usually better.
          </li>
          <li>
            <strong>Overriding autonomy:</strong> Adults have the right to
            make decisions about their own lives, including decisions that
            others disagree with. Unless a person lacks the cognitive
            capacity to make decisions, overriding their wishes carries
            serious ethical and relational consequences.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Start small</h3>
          <p>
            The ask that gets refused is usually too big. Asking someone
            who values independence to accept a home care worker five days
            a week is almost certain to fail. Asking if you can arrange for
            someone to help with the grocery shopping once a week is a
            different conversation. Starting with something small and
            low-stakes can open a door that a larger ask would close.
          </p>
          <h3 className="font-serif text-xl text-primary">Let someone else raise it</h3>
          <p>
            The message is sometimes better received from someone other
            than the family member who has been raising concerns. A
            trusted friend, a family doctor, or a religious leader may be
            able to say the same thing you have been saying and have it
            land differently. It is not fair, but it is often true.
          </p>
          <h3 className="font-serif text-xl text-primary">Frame help as being for you</h3>
          <p>
            &#x2018;I would feel so much better knowing someone was checking
            in on you&#x2019; is a different ask than &#x2018;you need
            help.&#x2019; Many people who refuse to accept help for
            themselves will accept it to ease the worry of someone they
            love.
          </p>
          <h3 className="font-serif text-xl text-primary">Involve them in decisions</h3>
          <p>
            Resistance often increases when people feel that decisions are
            being made for them. Involving the person in choosing who
            comes, what tasks they help with, and when they come preserves
            a sense of control and makes acceptance more likely.
          </p>
          <h3 className="font-serif text-xl text-primary">Professional care navigation</h3>
          <p>
            A geriatric care manager or social worker who specializes in
            elder care can sometimes achieve in one visit what family
            members have been unable to achieve in months of conversations.
            They are experienced at building trust with reluctant older
            adults and at finding approaches that work for specific
            personalities and situations.
          </p>
          <h3 className="font-serif text-xl text-primary">
            When safety is an immediate concern
          </h3>
          <p>
            If a person is in immediate danger and refuses help, the
            options narrow. A doctor who has concerns can conduct a
            capacity assessment to determine whether the person has the
            cognitive ability to make decisions about their own care.
            Social services in most areas have the ability to conduct
            welfare checks and, in extreme situations, to intervene. These
            are serious steps that carry real consequences for the
            relationship and should be considered carefully.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            In some situations, having a professional outside the family
            raise concerns can be the most effective approach. A family
            doctor who is aware of the situation can raise concerns during
            a routine appointment. Social workers connected to health
            systems can conduct assessments and make recommendations. Some
            communities have elder care navigators who specialize in
            exactly these situations.
          </p>
          <p className="italic">
            Check the{" "}
            <Link to="/situations" className="text-primary underline">
              directory under your province or region
            </Link>{" "}
            for social workers, geriatric care managers, and elder care
            navigation services.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <p>
            The financial dimension of refusing help is worth
            understanding. Sometimes refusal is partly about not wanting
            to spend money on support. Being clear about what things cost,
            and about what funded options exist, can remove a barrier that
            was never explicitly named.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Some in-home support services are partially or fully funded through public programs</li>
            <li>
              Starting with lower-cost options such as volunteer visitor
              programs, subsidized meal delivery, or community programs can
              ease someone into accepting help without the cost feeling
              prohibitive
            </li>
            <li>
              A geriatric care manager or care navigator may charge for
              their time but can save significant family conflict and
              identify funded supports that offset their cost
            </li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">
            For the conversation with your parent
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What matters most to you about how you live right now?</li>
            <li>What would have to change for you to feel like things were not working?</li>
            <li>Is there anything that would make it easier to accept a bit of help with certain things?</li>
            <li>If I arranged for someone to help with just one specific thing, would you be willing to try it?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">
            For a geriatric care manager or social worker
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>How do you typically approach situations where an older adult is refusing help?</li>
            <li>What tends to work with someone who strongly values independence?</li>
            <li>What would you need to assess the situation?</li>
            <li>At what point does refusal of help become a safety issue that requires a different kind of response?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a family conversation</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Are we all seeing the same thing, or do different family members have different assessments of the situation?</li>
            <li>Who does our parent trust most and might be best placed to raise this?</li>
            <li>Are we willing to accept some risk in order to respect their autonomy?</li>
            <li>
              What is our shared line in the sand, the point at which we
              would take more formal action?
            </li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A written log of specific safety concerns with dates and
            details is useful if the situation reaches the point where a
            formal assessment or intervention is being considered.
          </p>
          <p>
            A list of the small, specific things that would make the
            biggest difference to safety and wellbeing can help focus
            conversations on concrete asks rather than general concerns.
          </p>
          <p>
            Resources on having difficult family conversations about aging
            are available from many caregiver support organizations and
            are worth reading before the next conversation.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the
            site develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <HelpLink category="home-care">Home Care</HelpLink> providers
              for in-home support, starting small
            </li>
            <li>
              <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
              programs as a lower-stakes starting point for accepting
              outside contact
            </li>
            <li>
              <HelpLink category="legal-financial">Legal and Financial</HelpLink>{" "}
              professionals if capacity or legal authority questions arise
            </li>
          </ul>
          <p className="italic">
            Use the <Link to="/help" className="text-primary underline">Find Help</Link>{" "}
            section of this site to browse vetted providers by category and
            location.
          </p>
        </>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Try to understand what is actually behind the refusal before
            your next conversation. Fear of losing independence? Cost
            concerns? Past bad experience? The real barrier is where to
            focus.
          </li>
          <li>
            Change your approach if the current one is not working. The
            same conversation repeated the same way will produce the same
            result.
          </li>
          <li>
            Start smaller. Identify the one lowest-stakes thing that would
            make the biggest safety difference and ask only about that.
          </li>
          <li>
            Consider who else might raise the concern more effectively, a
            doctor, a trusted friend, a faith community member.
          </li>
          <li>
            Get other family members aligned before approaching the parent
            again. A united, calm front is more effective than conflicting
            messages from different family members.
          </li>
          <li>
            If safety is an immediate concern, speak to a doctor or social
            worker about what formal options exist and what the process
            looks like.
          </li>
        </ol>
      ),
    },
  ],
  "senior-living-alone": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            The concerns around living alone in later life usually cluster
            around three things: safety, health management, and
            loneliness. Each is real, each is addressable, and none of
            them require giving up independence to manage.
          </p>
          <p>
            Safety concerns typically involve falls, what happens if
            something goes wrong when no one is around, and whether the
            home environment is still appropriate for the person living in
            it. Health management concerns involve keeping on top of
            medications, medical appointments, and noticing health changes
            before they become serious. Loneliness is sometimes overlooked
            but is among the most significant health risks facing older
            adults who live alone.
          </p>
          <p>
            The goal of this guide is not to be alarming. Most people who
            live alone in later life manage well, especially with the right
            supports in place. The point is to know what those supports
            are and to put them in place proactively rather than
            reactively.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Do an honest safety assessment</h3>
          <p>
            Walk through the home and look at it with fresh eyes. Is the
            bathroom safe? Are there fall hazards? Is the lighting
            adequate, especially on stairs and in hallways? Are frequently
            used items easy to reach? Are medications organized and managed
            correctly?
          </p>
          <h3 className="font-serif text-xl text-primary">Check in on social connection</h3>
          <p>
            How often is the person in meaningful contact with other
            people? A phone call a day, a weekly visit, and a community
            activity or two each week is a reasonable baseline. If
            isolation is already a problem, it tends to worsen gradually
            unless something actively addresses it.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Make sure there is a plan for emergencies
          </h3>
          <p>
            Who knows to check if they have not heard from the person in a
            day or two? Who has a key? Who would be called in an
            emergency? Is there a medical alert device? These are basic
            questions that are worth having clear answers to.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Falls with no one to help:</strong> A fall when alone
            is more dangerous not because of the fall itself but because of
            the time before help arrives. A medical alert device addresses
            this risk directly.
          </li>
          <li>
            <strong>Medication errors:</strong> Managing multiple
            medications alone, without anyone checking, creates real risk
            of missed doses, double doses, or dangerous interactions.
          </li>
          <li>
            <strong>Isolation and loneliness:</strong> Social isolation is
            associated with cognitive decline, depression, weakened immune
            function, and increased falls risk. It develops gradually and
            is easy to underestimate.
          </li>
          <li>
            <strong>Delayed recognition of health changes:</strong> When
            someone lives alone, gradual changes in health, cognition, or
            function may go unnoticed longer. Regular contact with people
            who know the person well is one of the best early warning
            systems.
          </li>
          <li>
            <strong>Vulnerability to scams:</strong> Older adults who live
            alone and have limited social contact are at higher risk of
            financial scams and exploitation. Awareness and trusted
            contacts who can be consulted before major decisions matter.
          </li>
          <li>
            <strong>Home maintenance falling behind:</strong> A home that
            is not being maintained creates safety hazards. Small problems
            become larger ones when they go unaddressed.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Medical alert systems</h3>
          <p>
            A personal emergency response device is one of the most
            impactful single things a person living alone can have. Modern
            devices include automatic fall detection, GPS tracking for use
            outside the home, and two-way communication. They are
            discreet, effective, and provide genuine peace of mind for
            everyone.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="medical-alert-safety">medical alert providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Regular check-in systems</h3>
          <p>
            A daily phone call from a family member, a neighbour agreement
            to check in, or a formal telephone reassurance program through
            a community organization can mean the difference between a
            problem being discovered quickly or hours later. Some people
            also use automated check-in apps or devices that alert a
            contact if no response is received by a certain time.
          </p>
          <h3 className="font-serif text-xl text-primary">In-home support</h3>
          <p>
            Help with housekeeping, grocery shopping, meal preparation, and
            personal care does not diminish independence. It supports it.
            Starting with a few hours of help each week can make staying
            at home alone both safer and more manageable.
          </p>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Meal support</h3>
          <p>
            Meal delivery services and community meal programs address
            both nutrition and social connection. Some are specifically
            designed for older adults and provide a friendly visit
            alongside the meal.
          </p>
          <h3 className="font-serif text-xl text-primary">Social and community connection</h3>
          <p>
            Seniors centres, community programs, volunteer visitor
            programs, and faith communities all provide opportunities for
            regular social contact. Adult day programs offer structured
            activities and connection several days a week. These are not
            consolation prizes for people who cannot manage alone. They
            are supports that make living alone more sustainable and more
            enjoyable.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="companion-social">companion and social programs</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Home safety modifications</h3>
          <p>
            Grab bars, improved lighting, non-slip surfaces, and other
            modifications make the home safer for independent living. An
            occupational therapist can assess the home and recommend the
            most impactful changes.
          </p>
          <p className="italic">
            Find vetted home modification services in the directory under{" "}
            <HelpLink category="home-maintenance">Home Maintenance</HelpLink> and{" "}
            <HelpLink category="mobility-equipment">Mobility and Equipment</HelpLink>.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Many communities have programs specifically designed to
            support older adults living independently. These can include
            welfare check programs through local police or fire services,
            telephone reassurance programs, subsidized home support, meal
            programs, and transportation assistance. Availability varies
            by location.
          </p>
          <p className="italic">
            Check the{" "}
            <Link to="/situations" className="text-primary underline">
              directory under your province or region
            </Link>{" "}
            for local programs supporting seniors living independently.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>Medical alert devices involve a monthly subscription that varies by provider and feature level</li>
            <li>In-home support may be partially funded through public programs depending on location and assessed need</li>
            <li>Meal delivery programs vary widely in cost; some community programs offer subsidized or free meals</li>
            <li>
              Home modifications range from minimal cost (non-slip mats,
              better lighting) to more significant investment (grab bar
              installation, bathroom modifications)
            </li>
            <li>Some regions offer grants or subsidized programs for home safety modifications for older adults</li>
          </ul>
          <p>
            A social worker or community support organization can help
            identify what publicly funded supports are available in your
            area before you pay privately.
          </p>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For yourself or the person living alone</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>If something happened right now, who would know and how quickly?</li>
            <li>Is there anything about the home that feels less safe than it used to?</li>
            <li>How often are you in contact with people who would notice if something was wrong?</li>
            <li>Is there anything you are avoiding or managing around because of a safety concern?</li>
            <li>What would make you feel more comfortable staying here?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For family members</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What is our check-in system and is it actually working?</li>
            <li>Are we relying on the person to tell us if something is wrong, or do we have independent ways of knowing?</li>
            <li>Have we actually walked through the home recently and looked at it from a safety perspective?</li>
            <li>What is our plan if the current arrangement is no longer working?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            An emergency information sheet kept in a visible location in
            the home, listing medications, medical conditions, doctors,
            emergency contacts, and insurance information, is one of the
            simplest and most useful safety tools.
          </p>
          <p>
            A home safety checklist covering each room helps identify
            hazards that become familiar and therefore invisible over
            time.
          </p>
          <p>
            A social connection plan, a simple weekly schedule of phone
            calls, visits, and community activities, helps ensure that
            isolation does not develop by default.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the
            site develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <HelpLink category="medical-alert-safety">Medical Alert and Safety</HelpLink>{" "}
            providers for emergency response devices
          </li>
          <li>
            <HelpLink category="home-care">Home Care</HelpLink> providers
            for in-home support
          </li>
          <li>
            <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
            programs for regular social connection and day programs
          </li>
          <li>
            <HelpLink category="home-maintenance">Home Maintenance</HelpLink>{" "}
            providers for safety modifications
          </li>
          <li>
            <HelpLink category="transportation">Transportation</HelpLink>{" "}
            services for appointments and community access
          </li>
        </ul>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Set up or review your emergency plan. Who knows to check? Who
            has a key? Is there a medical alert device?
          </li>
          <li>
            Walk through the home and identify the three most important
            safety changes to make. Start with those.
          </li>
          <li>
            Assess social connection honestly. Is there enough regular
            contact with people who would notice a change?
          </li>
          <li>
            Look into a medical alert device if you do not already have
            one. It is one of the highest-impact, lowest-cost safety
            measures available.
          </li>
          <li>
            Look into what home support services are available in your
            area before you urgently need them.
          </li>
          <li>
            Make sure someone has your emergency information and knows how
            to find it.
          </li>
        </ol>
      ),
    },
  ],
  "recently-widowed": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Grief after losing a spouse is not a linear process and it does
            not follow a schedule. Numbness, disbelief, intense sadness,
            anger, relief (especially after a long illness), loneliness,
            and unexpected moments of something like normalcy can all
            coexist. All of these are normal.
          </p>
          <p>
            Alongside the grief, there are practical realities that
            require attention. There may be financial and legal matters to
            address. There may be decisions about housing and daily life.
            There may be social isolation as the social world that existed
            as part of a couple changes. There may be health concerns that
            were being managed by the partner who has died.
          </p>
          <p>
            One of the most important things to know about the period
            immediately after losing a spouse is this: it is not the time
            to make major irreversible decisions. Selling the house,
            giving away possessions, making large financial moves: these
            decisions made in the acute phase of grief are often regretted.
            Give yourself time wherever you possibly can.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">In the first days and weeks</h3>
          <p>
            Funeral and memorial arrangements will take immediate priority.
            Leaning on family and friends to help with logistics during
            this time is appropriate and important. You do not have to
            manage everything alone.
          </p>
          <p>
            Notify the necessary parties of the death: government agencies
            for benefits purposes, financial institutions, insurance
            companies, professional and community organizations the person
            belonged to. This list can feel overwhelming. Doing it in
            stages over several weeks is fine.
          </p>
          <p>
            If there is a will, locate it and ensure the executor is aware
            of their role. If there is no will, get legal advice about
            what the process looks like in your jurisdiction.
          </p>
          <h3 className="font-serif text-xl text-primary">In the months that follow</h3>
          <p>
            Update financial accounts and legal documents to reflect your
            new situation. This includes bank accounts, investment
            accounts, insurance policies, and any documents that listed
            your spouse in a legal capacity.
          </p>
          <p>
            Pay attention to your own health. Grief has physical as well
            as emotional effects. Appetite, sleep, and immunity are all
            commonly affected. Seeing your doctor in the months after a
            loss is worthwhile.
          </p>
          <p>
            Watch for signs that grief is becoming something more,
            specifically depression. Grief and depression overlap but are
            different. If you are not functioning, not caring for
            yourself, or feeling hopeless for an extended period, talk to
            a doctor.
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Making major decisions too soon:</strong> Selling the
            home, relocating to be near family, making large financial
            changes: these decisions made in the first year of widowhood
            are frequently regretted. Where possible, wait.
          </li>
          <li>
            <strong>Financial vulnerability:</strong> Widowed people,
            especially those who were not the primary financial manager in
            the relationship, are at higher risk of financial errors,
            scams, and exploitation. Getting trusted professional advice
            before making significant financial decisions is important.
          </li>
          <li>
            <strong>Social isolation:</strong> The social world of a couple
            is different from the social world of a single person. Friends
            and activities that were couple-oriented may fall away.
            Building new social connections and maintaining existing ones
            requires deliberate effort.
          </li>
          <li>
            <strong>Health neglect:</strong> If your spouse managed
            appointments, medications, or health-related decisions, those
            things may now be going unattended. Getting on top of your own
            health management matters.
          </li>
          <li>
            <strong>Grief becoming depression:</strong> Extended inability
            to function, persistent hopelessness, or not caring about
            living are signs that professional support is needed. These
            are not signs of weakness. They are symptoms of something
            treatable.
          </li>
          <li>
            <strong>Isolation of adult children:</strong> Adult children
            sometimes become so focused on supporting a widowed parent
            that they neglect to grieve themselves, or they try to manage
            the parent&#x2019;s life in ways that undermine the
            parent&#x2019;s autonomy. Good intentions need to be balanced
            with respect for the parent as an adult.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Grief support</h3>
          <p>
            Grief counselling, bereavement support groups, and peer support
            programs for widowed people exist in most communities. They
            are not only for people who are struggling severely. Talking
            with others who understand the experience of losing a spouse
            is valuable for most people going through it.
          </p>
          <h3 className="font-serif text-xl text-primary">Practical support</h3>
          <p>
            In the early period, practical help with meals, errands, and
            household tasks from family and friends is appropriate to
            accept. As time passes, in-home support services can fill gaps
            that family and friends cannot sustain long-term.
          </p>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Legal and financial guidance</h3>
          <p>
            A lawyer and a financial advisor or planner who work with
            people navigating estate matters and post-bereavement
            financial changes can provide essential guidance. This is
            particularly important if the deceased managed most of the
            financial and legal affairs of the household.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="legal-financial">legal and financial professionals</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Social connection</h3>
          <p>
            Seniors centres, faith communities, volunteer programs, and
            social clubs for widowed people provide structured ways to
            maintain and build social connection. The transition from a
            coupled social life to an independent one benefits from
            deliberate effort.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="companion-social">companion and social programs</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Housing decisions</h3>
          <p>
            The home question almost always arises after losing a spouse.
            The first answer is usually: not yet. The second answer, when
            enough time has passed, involves honestly assessing whether
            the current home still makes sense in terms of size,
            maintenance, location, and cost. This is a decision worth
            taking time on and involving trusted people in.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="retirement-residences">
              retirement residence information
            </HelpLink>{" "}
            in the directory if the time comes to consider other living
            arrangements.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Survivor benefits and pensions that a widowed person may be
            entitled to vary significantly by location and personal
            circumstances. Understanding what you are entitled to from
            government programs, former employers, and private insurance
            is an important practical step that is often overlooked in the
            immediate aftermath of loss.
          </p>
          <p>
            Community bereavement programs, many offered at no cost
            through hospices, hospitals, religious organizations, and
            community centres, provide both support and connection.
          </p>
          <p className="italic">
            Check the{" "}
            <Link to="/situations" className="text-primary underline">
              directory under your province or region
            </Link>{" "}
            for local bereavement support and senior services.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Understanding what survivor benefits, pensions, and insurance
            payments you are entitled to should be an early priority,
            handled with professional help if needed
          </li>
          <li>Updating beneficiary designations on financial accounts and insurance policies is a legal and financial necessity</li>
          <li>
            Estate and tax matters related to the death of a spouse can be
            complex; professional advice specific to your situation and
            location is important
          </li>
          <li>Bereavement counselling may be covered by insurance or available at low or no cost through community programs</li>
          <li>
            Housing decisions have significant financial implications;
            taking time to understand the full picture before acting is
            worth doing
          </li>
        </ul>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">For a lawyer</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What needs to happen to settle the estate?</li>
            <li>What documents do I need to update now that I am the surviving spouse?</li>
            <li>Are there any time-sensitive legal matters I need to address?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For a financial advisor</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What is my full financial picture now?</li>
            <li>What benefits, pensions, or insurance payments am I entitled to?</li>
            <li>What do I need to update and in what timeframe?</li>
            <li>What are the financial implications of the housing decisions I am considering?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For yourself, over time</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What do I actually want my life to look like in the next year? In five years?</li>
            <li>What decisions can wait and what cannot?</li>
            <li>Where do I want my social connection to come from?</li>
            <li>Who are the people I trust to help me think through the big decisions?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A consolidated list of all financial accounts, insurance
            policies, and legal documents, their locations and relevant
            contact information, is something every couple should have and
            is especially needed after a loss. Creating this list is a
            practical first step that also helps clarify the full picture.
          </p>
          <p>
            A benefits checklist covering government survivor programs,
            pension plans, and insurance policies ensures nothing is
            missed.
          </p>
          <p>
            A simple daily or weekly structure during the early period of
            widowhood provides some stability when everything else feels
            uncertain. It does not need to be rigid. It just helps to have
            a shape to the day.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the
            site develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <HelpLink category="legal-financial">Legal and Financial</HelpLink>{" "}
            professionals for estate matters and financial reorganization
          </li>
          <li>
            <HelpLink category="companion-social">Companion and Social</HelpLink>{" "}
            programs for bereavement support and social connection
          </li>
          <li>
            <HelpLink category="home-care">Home Care</HelpLink> providers
            for practical help at home
          </li>
          <li>
            <HelpLink category="retirement-residences">Retirement Residences</HelpLink>{" "}
            if housing decisions become relevant in time
          </li>
        </ul>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            In the first weeks: focus on the immediate necessities.
            Funeral arrangements, notifying key parties, and accepting
            help from people who offer it.
          </li>
          <li>
            In the first months: get legal and financial advice to
            understand what needs to be settled and updated. Do not make
            major irreversible decisions yet.
          </li>
          <li>
            See your doctor. Grief affects physical health and it is worth
            having someone monitoring yours.
          </li>
          <li>
            Connect with bereavement support, whether a group, a
            counsellor, or a trusted community. You do not have to do this
            alone.
          </li>
          <li>
            Pay attention to your social connection. Deliberately maintain
            the relationships that matter and be open to building new
            ones.
          </li>
          <li>
            When enough time has passed, revisit the bigger questions like
            housing with clearer eyes and trusted advisors.
          </li>
        </ol>
      ),
    },
  ],
  "hospital-discharge-planning": [
    {
      part: "Part 1 of 10",
      heading: "What you may be dealing with",
      body: (
        <>
          <p>
            Hospital discharge can happen faster than families expect and
            feel faster than the person being discharged is ready for.
            Hospitals face real pressure on bed availability, and
            discharge decisions are sometimes made before the family has
            had time to arrange adequate support at home.
          </p>
          <p>
            The period immediately after discharge is one of the
            highest-risk periods for older adults. Research consistently
            shows that readmission rates in the weeks following discharge
            are significant, and that many of these readmissions are
            preventable with better preparation and support during the
            transition.
          </p>
          <p>
            The good news is that most of the risks are known and
            addressable. The key is knowing what they are and planning for
            them before the person leaves the hospital, not after.
          </p>
        </>
      ),
    },
    {
      part: "Part 2 of 10",
      heading: "What to do first",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Before discharge happens</h3>
          <p>
            As soon as a hospital admission occurs, begin thinking about
            discharge. Ask the hospital team who is responsible for
            discharge planning and make contact with that person early. In
            most hospitals this is a social worker, a discharge planner,
            or a case manager.
          </p>
          <p>
            Ask directly: what does this person need to be able to go home
            safely? What will they be able to do and not do in the first
            days and weeks after discharge? What follow-up care will be
            required?
          </p>
          <p>Do not wait to be told. Ask.</p>
          <h3 className="font-serif text-xl text-primary">Understand what is being discharged to</h3>
          <p>
            Discharge home requires that the home is set up to receive the
            person safely. Discharge to a rehabilitation facility, a
            long-term care facility, or a transition care bed requires
            understanding what each of these options involves and what the
            plan is from there.
          </p>
          <p>
            If discharge home is the plan, the questions to ask are: Can
            this person manage safely at home with the current level of
            support? What additional support is needed and can it be
            arranged before discharge?
          </p>
        </>
      ),
    },
    {
      part: "Part 3 of 10",
      heading: "Common risks to know about",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Medication changes:</strong> Medications are frequently
            added, removed, or adjusted during a hospital stay.
            Understanding what has changed and why, and ensuring the
            person can manage the new regimen correctly at home, is one of
            the most important discharge tasks.
          </li>
          <li>
            <strong>Premature discharge:</strong> People are sometimes
            discharged before they are truly ready because of bed
            pressures. Knowing your right to raise concerns about
            premature discharge and how to do so matters.
          </li>
          <li>
            <strong>Falls during recovery:</strong> Physical deconditioning
            during a hospital stay increases fall risk during recovery.
            The home environment needs to be assessed with this in mind.
          </li>
          <li>
            <strong>Infection and wound care:</strong> If the
            hospitalization involved surgery or infection, wound care
            instructions need to be clearly understood and followed.
            Infection after discharge is a common cause of readmission.
          </li>
          <li>
            <strong>Follow-up appointment gaps:</strong> The period between
            discharge and the first follow-up appointment is a gap where
            problems can develop undetected. Knowing when the first
            appointment is and how to reach someone if problems arise
            before then is important.
          </li>
          <li>
            <strong>Caregiver unpreparedness:</strong> Family members who
            take on caregiving responsibilities after discharge are often
            not given adequate information or training. Ask for what you
            need to know.
          </li>
        </ul>
      ),
    },
    {
      part: "Part 4 of 10",
      heading: "Care and support options",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Home care after discharge</h3>
          <p>
            In-home support after discharge may include nursing visits for
            wound care or medication management, physiotherapy or
            occupational therapy to support recovery, and personal support
            workers to help with daily activities during the recovery
            period. Some of this may be arranged through the hospital;
            some may need to be arranged independently.
          </p>
          <p className="italic">
            Find vetted <HelpLink category="home-care">home care providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Rehabilitation</h3>
          <p>
            For many older adults after a significant hospitalization,
            particularly following a fall, a fracture, a stroke, or
            surgery, a period of rehabilitation is an important part of
            recovery. This may happen in a dedicated rehabilitation
            facility, in a long-term care facility with a rehabilitation
            program, or at home through visiting therapists. Understanding
            what the options are and which is most appropriate is worth
            discussing with the hospital team.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Home modifications for the recovery period
          </h3>
          <p>
            Even a temporary recovery period may require temporary changes
            to the home: a hospital bed on the main floor, a commode, grab
            bars, or equipment to assist with bathing and mobility. Knowing
            what equipment is needed before discharge, and having it in
            place before the person arrives home, prevents problems.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="mobility-equipment">mobility and equipment providers</HelpLink>{" "}
            in the directory.
          </p>
          <h3 className="font-serif text-xl text-primary">Medication management</h3>
          <p>
            If managing multiple medications at home is a concern, a
            pharmacist can provide a medication review and packaging in
            blister packs or other formats that make taking the right
            medications at the right times easier. Some home care programs
            include medication support.
          </p>
          <h3 className="font-serif text-xl text-primary">
            Transportation for follow-up appointments
          </h3>
          <p>
            The person being discharged will need to get to follow-up
            appointments during a period when they may not be able to
            drive. Arranging this before discharge is better than
            scrambling afterward.
          </p>
          <p className="italic">
            Find vetted{" "}
            <HelpLink category="transportation">transportation services</HelpLink>{" "}
            in the directory.
          </p>
        </>
      ),
    },
    {
      part: "Part 5 of 10",
      heading: "Government and community supports",
      body: (
        <>
          <p>
            Most health systems include some level of funded transition
            support after hospitalization. This may include nursing
            visits, therapy, and personal support during the recovery
            period. The amount of support, how it is accessed, and how
            long it lasts varies significantly by location.
          </p>
          <p>
            Ask the hospital discharge planner or social worker explicitly
            what funded supports are available in your area and how to
            access them. Do not assume that support will be automatically
            arranged.
          </p>
          <p className="italic">
            Check the{" "}
            <Link to="/situations" className="text-primary underline">
              directory under your province or region
            </Link>{" "}
            for transition care and home support services.
          </p>
        </>
      ),
    },
    {
      part: "Part 6 of 10",
      heading: "Money and funding considerations",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>Some post-discharge home care and rehabilitation may be publicly funded; the amount and eligibility criteria vary by location</li>
            <li>Equipment needed for the recovery period may be available through loan programs; ask the hospital occupational therapist or social worker</li>
            <li>Private home care can be arranged to supplement publicly funded support if needed</li>
            <li>Transportation to follow-up appointments may be covered by insurance or community programs for eligible individuals</li>
          </ul>
          <p>
            Get clarity on what is funded and what is not as early as
            possible so that private arrangements can be made in time if
            needed.
          </p>
        </>
      ),
    },
    {
      part: "Part 7 of 10",
      heading: "Questions to ask",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Before discharge, for the hospital team</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What exactly happened and what does recovery look like?</li>
            <li>What can and cannot this person do when they go home?</li>
            <li>What medications have changed and why? Can someone go through each one with us?</li>
            <li>What home support has been arranged and what do we need to arrange ourselves?</li>
            <li>What signs should we watch for that would mean coming back to the emergency room?</li>
            <li>When is the first follow-up appointment and with whom?</li>
            <li>Who do we call if we have questions or concerns after we get home?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">For the home care provider after discharge</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What exactly are you providing and how often?</li>
            <li>What are you not providing that we need to arrange separately?</li>
            <li>How do we reach someone if there is a problem between visits?</li>
            <li>What should we watch for and report to you?</li>
          </ul>
        </>
      ),
    },
    {
      part: "Part 8 of 10",
      heading: "Helpful resources and forms",
      body: (
        <>
          <p>
            A discharge checklist that covers medications, follow-up
            appointments, home care arrangements, equipment, and warning
            signs to watch for helps ensure nothing is missed in what is
            often a rushed transition.
          </p>
          <p>
            A medication list with the current complete list of
            medications including what each is for, the correct dose, and
            the schedule is essential for the person, the caregiver, and
            any home care providers.
          </p>
          <p>
            An emergency contact list including the family doctor, the
            specialist seen in hospital, the home care provider, and
            after-hours contact numbers should be posted somewhere visible
            at home.
          </p>
          <p className="italic">
            Downloadable resources will be added to this section as the
            site develops.
          </p>
        </>
      ),
    },
    {
      part: "Part 9 of 10",
      heading: "Services to find near you",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <HelpLink category="home-care">Home Care</HelpLink> providers
            for nursing, therapy, and personal support after discharge
          </li>
          <li>
            <HelpLink category="mobility-equipment">Mobility and Equipment</HelpLink>{" "}
            providers for recovery equipment
          </li>
          <li>
            <HelpLink category="transportation">Transportation</HelpLink>{" "}
            services for follow-up appointments
          </li>
          <li>
            <HelpLink category="medical-alert-safety">Medical Alert and Safety</HelpLink>{" "}
            providers if a device is now indicated
          </li>
        </ul>
      ),
    },
    {
      part: "Part 10 of 10",
      heading: "Suggested next steps",
      body: (
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            As soon as a hospital admission happens, ask to speak with the
            discharge planner or social worker. Start planning before
            discharge is imminent.
          </li>
          <li>
            Get clear answers about what the person can and cannot do at
            home and what support is needed before they leave the
            hospital.
          </li>
          <li>
            Get a complete medication list with explanations before
            leaving the hospital. Have someone go through every change
            with you.
          </li>
          <li>
            Confirm what funded home support has been arranged and what
            you need to arrange privately. Do not assume.
          </li>
          <li>
            Make sure the home is ready before the person arrives: any
            equipment needed should be in place, hazards addressed, and
            the environment set up for the recovery period.
          </li>
          <li>
            Know the warning signs that would mean returning to the
            emergency room and write them down.
          </li>
          <li>
            Confirm the first follow-up appointment before leaving the
            hospital and arrange transportation for it.
          </li>
        </ol>
      ),
    },
  ],
};

function SituationGuidePage() {
  const { situation } = Route.useLoaderData();
  const sections = GUIDES[situation.slug];

  return (
    <Page>
      <section
        className="relative flex h-[400px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(/images/situations/${situation.slug}.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-4 text-sm text-white/80">
          <Link to="/" className="hover:underline">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/situations" className="hover:underline">Find Your Situation</Link>
          <span aria-hidden> / </span>
          <span>{situation.title}</span>
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-10">
          <span aria-hidden className="text-5xl">{situation.icon}</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-white md:text-5xl">
            {situation.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90 leading-relaxed">
            {situation.description}
          </p>
          <p className="mt-3 text-base text-white/75">
            Plain-language guidance. No jargon. No pressure.
          </p>
        </div>
      </section>

      {sections && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.part}>
                <h2 className="font-serif text-3xl font-semibold text-primary">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/85">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Know what kind of help you need?
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Browse by service type to find guides, articles, and vetted providers.
          </p>
          <Link
            to="/help"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            Browse Find Help →
          </Link>
        </div>
      </section>
    </Page>
  );
}
