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
};

function SituationGuidePage() {
  const { situation } = Route.useLoaderData();
  const sections = GUIDES[situation.slug];

  return (
    <Page>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:underline">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/situations" className="hover:underline">Find Your Situation</Link>
          <span aria-hidden> / </span>
          <span>{situation.title}</span>
        </div>
        <div className="mx-auto max-w-4xl px-6 pb-14">
          <span aria-hidden className="text-5xl">{situation.icon}</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-primary md:text-5xl">
            {situation.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-foreground/85 leading-relaxed">
            {situation.description}
          </p>
          <p className="mt-3 text-base text-muted-foreground">
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
