import type { ReactNode } from "react";

/**
 * Ontario jurisdiction modules. Each is a standalone expandable section that
 * appears inside its universal situation guide. The universal guide content
 * stays jurisdiction-neutral; these carry the specific, dated Ontario
 * programs, phone numbers, and rates. Rates flagged "adjusted each July"
 * must be re-verified every July before republishing.
 */

function Sub({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-card"
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-primary [&::-webkit-details-marker]:hidden">
        <span className="text-lg leading-snug">{title}</span>
        <span
          aria-hidden
          className="shrink-0 text-gold transition-transform group-open:rotate-90"
        >
          ›
        </span>
      </summary>
      <div className="space-y-4 px-5 pb-5 text-lg leading-relaxed text-foreground/85">
        {children}
      </div>
    </details>
  );
}

function GetsWrong({ items }: { items: ReactNode[] }) {
  return (
    <Sub title="What Ontario families consistently get wrong">
      <ol className="list-decimal space-y-3 pl-6">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </Sub>
  );
}

const FALL_MODULE = (
  <>
    <Sub title="The one phone number to learn first" defaultOpen>
      <p>
        Ontario Health atHome is the provincial organization that coordinates
        publicly funded home care and manages every long-term care placement in
        Ontario. It was formed in 2024 when the fourteen regional Home and
        Community Care Support Services organizations (the old LHINs and CCACs)
        were merged into one body. If you last dealt with this system years ago
        under a different name, this is the same front door with a new sign.
      </p>
      <p>
        Call <strong>310-2222</strong> (no area code needed anywhere in
        Ontario) or <strong>1-833-515-1234</strong>, seven days a week. Anyone
        can make the referral: you, your parent, a friend, or a doctor. You do
        not need a physician's order to start, and there is no charge for
        their services. Website: ontariohealthathome.ca.
      </p>
      <p>
        When you call, ask for a care coordinator assessment. Say the words
        "recent fall" and "concerned about safety at home." A care coordinator
        will assess your parent, usually at home or in hospital, using a
        standardized assessment tool, and can arrange publicly funded nursing,
        personal support workers, physiotherapy, occupational therapy, and
        personal alarms or equipment recommendations. What you actually
        receive depends on assessed need, and hours are often fewer than
        families hope, which is why many Ontario families blend public hours
        with privately paid care.
      </p>
    </Sub>

    <Sub title="If the fall put your parent in hospital">
      <p>
        Three Ontario-specific things to know before discharge day, because
        discharge day is when families get steamrolled.
      </p>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          Ask to speak with the hospital's Ontario Health atHome care
          coordinator before discharge. Most hospitals have coordinators
          embedded on the wards. Home care arranged before discharge starts
          faster than home care requested after.
        </li>
        <li>
          You will hear the phrase "Home First." This is Ontario's official
          philosophy: patients should return home with supports rather than
          wait in hospital for a long-term care bed. It is usually genuinely
          better for the patient. But know your rights: you cannot be forced
          to take your parent home if it is unsafe, and you should never sign
          anything committing to a retirement home under discharge pressure.
          Since the More Beds, Better Care Act (Bill 7), hospital patients
          designated ALC (alternate level of care) can be assessed and placed
          in a long-term care home not of their choosing, and can face a daily
          charge ($400 per day) for refusing a placement, so get informed
          early rather than reacting late. Ask the coordinator directly: "Is
          my parent at risk of being designated ALC, and what are our
          options?"
        </li>
        <li>
          If your parent needs recovery time but not hospital care, ask about
          convalescent care: a short-stay bed in a long-term care home, up to
          90 days per calendar year, arranged through Ontario Health atHome,
          at no accommodation cost to the patient. It exists precisely for
          regaining strength after an injury, and many families have never
          heard of it.
        </li>
      </ol>
    </Sub>

    <Sub title="Rehab and physiotherapy after a fall, without paying privately">
      <p>
        Ontario funds physiotherapy for seniors more generously than most
        families realize.
      </p>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          OHIP-funded community physiotherapy clinics: people 65 and older
          (and 19 and under, and anyone after an overnight hospital stay for a
          condition needing physio) qualify for episodes of care at designated
          clinics across the province at no charge. Search "OHIP funded
          physiotherapy clinic" plus your city, or ask your doctor for a
          referral to one. After a fall, this is exactly what they are for.
        </li>
        <li>
          In-home physiotherapy through Ontario Health atHome if your parent
          cannot easily get to a clinic.
        </li>
        <li>
          Falls prevention exercise classes: local public health units and
          seniors' centres run evidence-based programs at low or no cost. Ask
          211 what runs near your parent.
        </li>
      </ol>
    </Sub>

    <Sub title="Equipment and home modifications: who pays in Ontario">
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Assistive Devices Program (ADP)</strong>, Ontario Ministry
          of Health. Pays 75 percent of the approved price for eligible
          mobility equipment: walkers, wheelchairs, and other listed devices.
          The catch families miss: the device must be prescribed through an
          ADP-registered assessor (usually an occupational therapist or
          physiotherapist) and bought from an ADP-registered vendor. Buy the
          walker first and apply after, and you get nothing. Sequence matters:
          assessment, authorization, then purchase. Info: ontario.ca, search
          "Assistive Devices Program," or call ServiceOntario at
          1-800-268-1154.
        </li>
        <li>
          <strong>Home and Vehicle Modification Program</strong>, funded by
          the Ontario government and delivered by March of Dimes Canada.
          Grants of up to $15,000 for home modifications (ramps, stair lifts,
          bathroom modifications) and up to $15,000 toward vehicle
          modification for people with a substantial impairment expected to
          last a year or more that impedes mobility. It is income-tested and
          demand outstrips funding, so apply early and expect a wait. Apply
          through March of Dimes Canada, marchofdimes.ca, 1-877-369-4867.
        </li>
        <li>
          <strong>Ontario Seniors Care at Home Tax Credit.</strong>{" "}
          Refundable, meaning your parent gets it even if they owe no tax.
          Worth 25 percent of claimable medical expenses up to $6,000, for a
          maximum of $1,500 per year. Eligible expenses include walkers,
          wheelchairs, hospital beds, hearing aids, attendant care, and grab
          bar installation. Eligibility: 70 or older (or spouse is), Ontario
          resident, and it phases out between $35,000 and $65,000 of family
          net income. Claimed on the ON479 form with the tax return. Keep
          every receipt.
        </li>
        <li>
          <strong>Federal Home Accessibility Tax Credit:</strong> 15 percent
          of up to $20,000 per year in eligible renovation expenses (up to
          $3,000 back) for making a home safer or more accessible for someone
          65 or older or eligible for the Disability Tax Credit. This stacks
          with the Ontario credit and, in many cases, the same expense can
          also qualify as a medical expense. A grab bar in Ontario can
          effectively be triple-supported. Almost nobody claims all of it.
        </li>
        <li>
          <strong>If your parent is a veteran:</strong> the Veterans
          Independence Program (VIP) through Veterans Affairs Canada funds
          housekeeping, grounds maintenance, and personal care to keep
          veterans at home. 1-866-522-2122. Families forget to ask whether
          Dad's two years of service in the 1950s counts. Ask.
        </li>
      </ol>
    </Sub>

    <Sub title="Personal alarms and medical alerts in Ontario">
      <p>
        Ontario does not broadly fund medical alert services, so this is
        usually a private purchase (our guide to choosing one covers the
        questions to ask). Two exceptions worth checking: some municipalities
        and community support agencies subsidize alarms for low-income seniors
        (ask 211), and low-income seniors who qualify for TELUS's Internet for
        Good or Mobility for Good programs can get TELUS Health Medical Alert
        service at a steep discount through its Health for Good program.
      </p>
    </Sub>

    <Sub title="Two numbers for everything else">
      <p>
        <strong>211:</strong> Ontario's community services helpline, live
        24/7, in 150+ languages. They know every meal program, transportation
        service, friendly visiting program, and subsidy in your parent's
        postal code. This is the single most underused number in Ontario.
      </p>
      <p>
        <strong>811 (Health Connect Ontario):</strong> registered nurses,
        24/7, for "is this worth an ER visit" questions. After a fall with no
        obvious injury, this call can save a nine-hour emergency department
        night or catch something you would have missed.
      </p>
    </Sub>

    <GetsWrong
      items={[
        <>
          They buy equipment first and ask about funding after. ADP only pays
          when the assessment and authorization come before the purchase. Do
          it in order.
        </>,
        <>
          They assume "the government sends a PSW now" means enough hours.
          Publicly funded personal support is real but rationed by assessed
          need. Plan for the gap between assessed hours and actual need, and
          read our home care guide before hiring privately.
        </>,
        <>
          They treat the hospital's timeline as the family's timeline.
          Discharge pressure is real, ALC rules have teeth, and decisions made
          in a hallway on a Friday afternoon are rarely the best ones. Ask
          about convalescent care, ask about Home First supports, and do not
          sign retirement home agreements you have not read overnight.
        </>,
        <>
          They never call 211, and spend forty hours googling what one
          twenty-minute call would have answered.
        </>,
        <>
          They wait for the second fall to take the first one seriously. In
          Ontario the wait for some services and all long-term care placement
          is measured in months to years. The best time to call 310-2222 is
          after the first fall, when it still feels premature.
        </>,
      ]}
    />
  </>
);

const DEMENTIA_MODULE = (
  <>
    <Sub title="Getting a diagnosis in Ontario" defaultOpen>
      <p>
        Start with the family doctor and ask directly for a cognitive
        assessment. If you suspect the concern will be dismissed with "that's
        just aging," write down specific incidents with dates and bring the
        list; doctors act on documented patterns. The family doctor can refer
        to a memory clinic (most large Ontario hospitals and many family
        health teams run them) or a geriatrician or geriatric psychiatrist.
        Wait times for memory clinics in the GTA commonly run several months,
        which is one more reason not to wait for certainty before starting the
        process. If there is no family doctor, Health Care Connect (through
        811 or ontario.ca) registers your parent for one, and some memory
        clinics accept referrals from nurse practitioners.
      </p>
    </Sub>

    <Sub title="The first call to make the week you start wondering">
      <p>
        The Alzheimer Society. Ontario has local Alzheimer Society chapters
        covering every part of the province, and their core program, First
        Link, connects families to education, counselling, support groups, and
        system navigation from the moment of concern, no diagnosis required,
        no fee, no referral needed (though doctors can refer directly, and you
        should ask yours to). Find your local society at alzheimer.ca/on.
        Families consistently report the same thing: they wish they had called
        two years earlier. The Society is for you, the caregiver, as much as
        for the person with dementia.
      </p>
    </Sub>

    <Sub title="Money and legal steps that are time-sensitive in Ontario">
      <p>
        This is the part where acting early matters most, because every one of
        these requires that your parent still has legal capacity.
      </p>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Powers of Attorney.</strong> Ontario has two: a Continuing
          Power of Attorney for Property (finances) and a Power of Attorney
          for Personal Care (health and living decisions). They are governed
          by Ontario's Substitute Decisions Act, and they can only be signed
          while your parent understands what they are signing. After capacity
          is lost, the only route to managing a parent's property is a
          guardianship application through the courts or the Office of the
          Public Guardian and Trustee, which is slow, expensive, and invasive.
          The Ontario government publishes a free POA kit (ontario.ca, search
          "power of attorney kit"), though for anything beyond a simple
          situation, an hour with a lawyer who does elder law is money well
          spent. Do this the month you start wondering, not the month after
          diagnosis.
        </li>
        <li>
          If no Power of Attorney for Personal Care exists and a health
          decision must be made, Ontario's Health Care Consent Act
          automatically ranks substitute decision-makers: spouse or partner,
          then children or parents, then siblings, then other relatives, with
          the Public Guardian and Trustee as the last resort. Disagreements go
          to the Consent and Capacity Board. Knowing this hierarchy exists
          prevents both panic and family warfare.
        </li>
        <li>
          <strong>Disability Tax Credit (DTC), federal.</strong> Dementia
          frequently qualifies under the mental functions category. The doctor
          completes form T2201. The DTC matters beyond its own value because
          it unlocks other supports and can be transferred to a supporting
          family member, and it can be claimed retroactively up to ten years.
          If the diagnosis is established, apply.
        </li>
        <li>
          <strong>Canada Caregiver Credit, federal</strong>, for the family
          member supporting a dependant with impairment. Claimed on the
          caregiver's own return. Most caregiving children never claim it.
        </li>
        <li>
          <strong>Ontario Seniors Care at Home Tax Credit:</strong> attendant
          care and many dementia-related expenses qualify. Refundable, worth
          up to $1,500 per year for Ontarians 70 and older, phasing out
          between $35,000 and $65,000 of family net income.
        </li>
      </ol>
    </Sub>

    <Sub title="Day programs, respite, and the supports that keep caregivers standing">
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Adult day programs.</strong> Structured, supervised days for
          people with dementia, typically run by community agencies, with
          modest daily fees (commonly in the range of $10 to $50 per day
          depending on the program and subsidy). Access is usually through
          Ontario Health atHome (310-2222) or directly through the agency.
          These programs are the single most protective service for caregiver
          survival, and they routinely have wait lists, so apply before you
          are desperate.
        </li>
        <li>
          <strong>In-home respite.</strong> Ontario Health atHome can provide
          respite hours as part of a care plan, and where you qualify, those
          hours are free. Community agencies sell additional private respite
          hours.
        </li>
        <li>
          <strong>Short-stay respite in a long-term care home.</strong> Your
          parent can stay up to 60 days at a time, to a maximum of 90 days per
          calendar year, in a respite bed while you rest or travel. The daily
          rate is set by the province, currently $44.38 per day (2025-26
          rate, adjusted each July), and personal care and nursing are
          covered; you pay only that accommodation fee. Arranged through
          Ontario Health atHome. This program is chronically underused because
          families do not know it exists.
        </li>
        <li>
          <strong>The Ontario Caregiver Organization</strong> runs a free 24/7
          caregiver helpline: 1-833-416-2273 (1-833-416-CARE), plus peer
          support programs and an annual caregiver resource library. Put the
          number in your phone tonight.
        </li>
        <li>
          <strong>Behavioural Supports Ontario (BSO)</strong> provides
          specialized teams for responsive behaviours (aggression, wandering,
          agitation) at home and in long-term care. Access through Ontario
          Health atHome or your local Alzheimer Society. If behaviour changes
          are the crisis, this is the program built for it.
        </li>
      </ol>
    </Sub>

    <Sub title="Driving and dementia: Ontario's rules">
      <p>
        Ontario doctors and nurse practitioners are legally required to report
        patients with medical conditions, including dementia, that may make
        driving unsafe to the Ministry of Transportation, which can suspend
        the licence. Separately, at age 80 every Ontario driver renews every
        two years and must complete a group education session, vision test,
        and in-class screening exercises, with road tests ordered case by
        case. What this means for your family: the licence conversation is not
        optional or infinitely postponable in Ontario, and it is better had at
        the kitchen table than triggered by a ministry letter. Our universal
        guidance on the driving conversation applies; the Ontario-specific
        fact is that the system will eventually force the issue whether you
        have prepared or not.
      </p>
    </Sub>

    <Sub title="Wandering and safety">
      <p>
        Register with MedicAlert's Connect Protect service (MedicAlert
        Foundation Canada partners with police services so responders can
        identify a person found wandering and reach family). Local police
        services in the GTA also maintain vulnerable persons registries; ask
        your division. Finding Your Way, an Alzheimer Society of Ontario
        program, provides wandering prevention resources in multiple
        languages.
      </p>
    </Sub>

    <Sub title="When home stops working: long-term care in Ontario, the short version">
      <p>
        Only Ontario Health atHome can place someone in a long-term care home;
        there is no private fast lane, and any retirement home that implies
        otherwise is talking about retirement living, which is a different,
        privately paid thing (regulated by the Retirement Homes Regulatory
        Authority, not the Ministry of Long-Term Care). You apply through your
        care coordinator, choose up to five homes, and wait; waits vary from
        months to several years for popular homes, dementia-capable beds
        included. Costs are standardized province-wide: residents pay
        accommodation only, currently $68.56 per day for basic ($2,085.37 per
        month, 2025-26 rate, adjusted each July), more for semi-private or
        private rooms, and care itself is publicly funded. A Rate Reduction
        Program can lower the basic rate for low-income residents (roughly,
        incomes below about $26,800 qualify for reductions, assessed
        individually; apply through the home). Every home's inspection
        history is public at publicreporting.ltchomes.net. Read it before you
        list a home among your five. Almost no family does, and it is the
        closest thing Ontario has to a report card.
      </p>
    </Sub>

    <GetsWrong
      items={[
        <>
          They wait for a diagnosis before calling the Alzheimer Society, when
          First Link exists precisely for the worried, pre-diagnosis stage.
        </>,
        <>
          They put off Powers of Attorney until "things get worse." Capacity
          is the legal fuel for those documents, and dementia burns it. The
          window closes quietly, and after it closes the alternative is a
          court process no family enjoys.
        </>,
        <>
          They confuse retirement homes with long-term care homes. Retirement
          homes are private-pay housing with services, often $4,000 to $9,000+
          per month in the GTA, lightly regulated relative to LTC, and their
          "memory care" floors vary enormously. Long-term care is the publicly
          funded, ministry-regulated system with standardized rates and a
          provincial waitlist. Families who do not understand the difference
          make expensive decisions.
        </>,
        <>
          They get on zero waitlists because "we're not there yet," then hit a
          crisis with no options. In Ontario, being on a list costs nothing
          and commits you to nothing; you can decline a bed offer for a
          short-stay program or reorder choices. List early, decide later. One
          caution: for long-stay placement, refusing an offered bed has
          consequences for your application, so discuss refusal rules with
          your care coordinator before the offer comes, not after.
        </>,
        <>
          They carry it alone for years before touching respite, then burn out
          and make the placement decision from the bottom of the well. The
          60-day respite program, day programs, and the caregiver helpline
          exist so the decision never has to be made from there.
        </>,
      ]}
    />
  </>
);

const HOME_MODULE = (
  <>
    <Sub title="The public foundation: what Ontario actually provides at home" defaultOpen>
      <p>
        Ontario Health atHome (310-2222 or 1-833-515-1234,
        ontariohealthathome.ca) coordinates the publicly funded layer:
        nursing, personal support workers, physiotherapy, occupational
        therapy, social work, dietitian services, and medical supplies related
        to assessed needs, all at no charge to eligible patients. It also
        gatekeeps adult day programs, assisted living in supportive housing,
        respite, and every long-term care application. One call starts an
        assessment, and anyone can make it.
      </p>
      <p>
        Be clear-eyed about what "publicly funded" means in practice: hours
        are allocated by assessed need against a stretched system, visits are
        often shorter than families expect, and consistency of workers varies.
        Most Ontario families who keep a parent at home for years run a
        blended model: public hours as the base, privately paid care filling
        the gaps, and family holding the rest. Our home care guides cover how
        to hire well; this module covers what Ontario will pay for.
      </p>
    </Sub>

    <Sub title="The money layer: what keeps the blended model affordable">
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Ontario Seniors Care at Home Tax Credit.</strong> The
          workhorse. Refundable, up to $1,500 per year (25 percent of up to
          $6,000 of eligible medical expenses) for Ontarians 70+, phasing out
          between $35,000 and $65,000 family net income. Attendant care,
          nursing, mobility equipment, hearing aids, incontinence supplies
          prescribed for a condition, and much of what aging at home actually
          costs can qualify. Claim it every single year, keep receipts six
          years, and ask any retirement home for the itemized breakdown of the
          care portion of fees, because the care portion can qualify as
          attendant care.
        </li>
        <li>
          <strong>Federal medical expense tax credit</strong> and, for the
          supporting child, the <strong>Canada Caregiver Credit</strong>.
          These stack with the Ontario credit on the same receipts.
        </li>
        <li>
          <strong>Guaranteed Annual Income System (GAINS).</strong> Ontario
          tops up the income of the lowest-income seniors who receive federal
          OAS and GIS with a monthly provincial payment, applied automatically
          through the tax return. This is one more reason a parent with modest
          income must file taxes every year even with nothing owing: GIS and
          GAINS both flow from the return.
        </li>
        <li>
          <strong>Ontario Drug Benefit.</strong> At 65, Ontarians are
          automatically covered for thousands of prescription drugs. Default
          cost-sharing is a $100 annual deductible plus up to $6.11 per
          prescription; lower-income seniors should apply for the Seniors
          Co-Payment Program, which drops the deductible to zero and co-pays
          to a maximum of $2. High drug costs relative to income before 65, or
          for non-ODB drugs, may qualify for the Trillium Drug Program. Ask
          the pharmacist to check both; pharmacists in Ontario are the most
          underused benefits advisors in the province.
        </li>
        <li>
          <strong>Ontario Senior Homeowners' Property Tax Grant:</strong> up
          to $500 per year for low- to moderate-income senior homeowners,
          claimed through the ON-BEN form at tax time. Small, automatic,
          routinely missed.
        </li>
        <li>
          <strong>Home modifications:</strong> the Home and Vehicle
          Modification Program through March of Dimes Canada (up to $15,000,
          income-tested, expect waits), the federal Home Accessibility Tax
          Credit (15 percent of up to $20,000 of renovations), and the
          Multigenerational Home Renovation Tax Credit (15 percent of up to
          $50,000, up to $7,500, for building a secondary suite so a senior
          can live with family). The secondary suite credit is nearly unknown
          and is exactly the tool for the "move Mom into a garden suite" plan
          that many GTA families are now considering, especially since Toronto
          and many GTA municipalities now permit garden and laneway suites as
          of right.
        </li>
        <li>
          <strong>Home equity, honestly.</strong> For homeowners who are
          house-rich and income-tight, equity is often the largest single
          resource available for staying at home, through downsizing, a
          secured line of credit, or a reverse mortgage. Each has real costs
          and real risks, none is right for everyone, and anyone who presents
          one of them as the obvious answer is selling something. Disclosure,
          because we mean what we say on our disclosure page: our founder is a
          licensed mortgage agent under BRX Mortgage Inc., and that
          relationship never changes what appears in our directory or our
          guides.
        </li>
      </ol>
    </Sub>

    <Sub title="The services layer: the Ontario programs that make home sustainable">
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          <strong>Community support services.</strong> Across Ontario,
          non-profit agencies funded partly by the province deliver Meals on
          Wheels, transportation to appointments, friendly visiting, telephone
          reassurance, caregiver relief, home maintenance help, and congregate
          dining. Fees are modest and often geared to income. Find them
          through 211 or your Ontario Health atHome coordinator. These
          services are the difference between a house that works and a house
          that slowly stops working.
        </li>
        <li>
          <strong>Assisted living in supportive housing.</strong> For seniors
          with higher needs who do not need long-term care, some Ontario
          buildings offer 24/7 on-call personal support in designated housing,
          publicly funded, accessed through Ontario Health atHome. Waits
          exist, but for the right person it is the best-kept secret in the
          system.
        </li>
        <li>
          <strong>Community paramedicine.</strong> In many Ontario
          municipalities, paramedic services run wellness visit programs for
          high-risk seniors at home, including for people on long-term care
          waitlists. Ask 211 or your coordinator whether your parent's
          municipality runs one.
        </li>
        <li>
          <strong>Ontario community physiotherapy clinics and falls
          prevention classes</strong> keep strength and balance up, which is
          the cheapest home care there is. People 65 and older qualify for
          OHIP-funded episodes of care at designated clinics at no charge.
        </li>
        <li>
          <strong>Snow, lawns, and ladders.</strong> Many municipalities and
          community agencies run seniors' snow removal and home maintenance
          programs, and Toronto property owners over 65 or with disability can
          request sidewalk snow clearing support where applicable. These small
          services prevent the falls and the "maybe it's time to sell"
          conversations alike. Again: 211.
        </li>
      </ol>
    </Sub>

    <Sub title="Technology and safety at home in Ontario">
      <p>
        Medical alert systems are private purchases in Ontario, with two
        exceptions worth checking: some municipalities and community agencies
        subsidize alarms for low-income seniors (ask 211), and low-income
        seniors who qualify for TELUS's Internet for Good or Mobility for Good
        programs can get TELUS Health Medical Alert service at a steep
        discount. For phone and internet affordability, low-income seniors
        receiving GIS qualify for the federal Connecting Families internet
        program and TELUS's seniors programs. If wandering or memory is part
        of the picture, layer in the safety tools from our dementia guide's
        Ontario module.
      </p>
    </Sub>

    <GetsWrong
      items={[
        <>
          They treat the choice as home versus facility, when Ontario's actual
          system is a ladder: home with community supports, home with public
          and private care blended, assisted living in supportive housing,
          then long-term care. Families who know the middle rungs exist keep
          parents home years longer.
        </>,
        <>
          They pay privately for things Ontario funds. Physio for a 65+
          parent, respite hours, day program subsidies, equipment through ADP,
          drug co-pay reductions. One afternoon of calls to 310-2222 and 211
          routinely saves thousands of dollars a year.
        </>,
        <>
          They skip the tax return. GIS, GAINS, the Seniors Care at Home
          credit, the property tax grant, and the Trillium Drug Program all
          run through filed taxes. A parent with no income owing still needs
          to file, every year, on time. Free tax clinics (through 211 or CRA's
          Community Volunteer Income Tax Program) exist for exactly this.
        </>,
        <>
          They renovate first and check programs after. Modification grants
          and credits have rules about timing, receipts, and prescriptions.
          Read first, renovate second.
        </>,
        <>
          They wait until the eleventh hour to involve Ontario Health atHome
          because "we're managing." Assessments take time, services have
          waits, and the file you open early is the file that moves fast in a
          crisis. Managing well is the best time to call, not the
          disqualification for calling.
        </>,
      ]}
    />
  </>
);

const MODULES: Record<string, ReactNode> = {
  "parent-had-a-fall": FALL_MODULE,
  "dementia-concerns": DEMENTIA_MODULE,
  "staying-at-home": HOME_MODULE,
};

export function OntarioModule({ slug }: { slug: string }) {
  const module = MODULES[slug];
  if (!module) return null;

  return (
    <section
      aria-labelledby="ontario-module-heading"
      className="mx-auto max-w-4xl px-6 pb-12"
    >
      <div className="rounded-3xl border-2 border-gold/50 bg-secondary/40 p-6 md:p-9">
        <div className="flex items-start gap-4">
          <span aria-hidden className="text-4xl">
            🍁
          </span>
          <div>
            <h2
              id="ontario-module-heading"
              className="font-serif text-2xl font-semibold text-primary md:text-3xl"
            >
              If you are in Ontario
            </h2>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              The guide above applies anywhere. This section carries the
              Ontario-specific programs, phone numbers, and dollar figures,
              verified against official Ontario government and Ontario Health
              atHome sources as of July 2026. Rates marked "adjusted each
              July" change annually.
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-3">{module}</div>
      </div>
    </section>
  );
}
