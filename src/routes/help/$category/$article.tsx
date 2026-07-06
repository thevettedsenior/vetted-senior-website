import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Page } from "@/components/SiteShell";
import { findArticle, findHelpCategory } from "@/lib/directory-data";

export const Route = createFileRoute("/help/$category/$article")({
  loader: ({ params }) => {
    const category = findHelpCategory(params.category);
    if (!category) throw notFound();
    const article = findArticle(params.category, params.article);
    if (!article) throw notFound();
    return { category, article };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.article.title} | The Vetted Senior`
          : "Article",
      },
      {
        name: "description",
        content: loaderData ? loaderData.article.description : "",
      },
    ],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Article not found</h1>
        <Link to="/help" className="mt-4 inline-block text-primary underline">
          Back to Find Help
        </Link>
      </div>
    </Page>
  ),
});

type Section = {
  heading: string;
  body: ReactNode;
};

const ARTICLE_CONTENT: Record<string, Section[]> = {
  "homecare-questions": [
    {
      heading: "Understanding the home care landscape",
      body: (
        <>
          <p>
            Home care is not a single service. It is a broad category that
            includes personal support, nursing, companionship, respite,
            and specialized dementia or palliative care. Before you can
            ask the right questions of a provider, it helps to understand
            what the industry actually looks like and who the players
            are.
          </p>
          <h3 className="font-serif text-xl text-primary">Agencies versus independent caregivers</h3>
          <p>Most home care is delivered through one of two models:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Agency model:</strong> You hire a company, and the
              company assigns and manages caregivers. The agency handles
              scheduling, backup coverage, payroll, insurance, and worker
              supervision. If your regular caregiver is sick, the agency
              finds a replacement.
            </li>
            <li>
              <strong>Independent caregiver:</strong> You hire an
              individual directly. This often costs less per hour, but
              you take on more responsibility. You may need to manage
              their schedule, handle tax withholding, arrange your own
              backup if they are unavailable, and verify their
              credentials yourself.
            </li>
          </ul>
          <p>
            Neither model is wrong. Many families use both at different
            stages. The important thing is knowing which you are
            evaluating so you ask the right questions.
          </p>
          <h3 className="font-serif text-xl text-primary">A note on terminology across countries</h3>
          <p>
            This guide uses the most widely recognized terms. Roles are
            described by what the worker does, not just their title,
            because the same job goes by different names depending on
            where you live:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Personal support worker (PSW)</strong> is the
              common Canadian term for a worker who helps with bathing,
              dressing, grooming, meals, mobility, and basic home tasks.
              In the United States, the same role is often called a home
              health aide (HHA) or certified nursing assistant (CNA). In
              the United Kingdom, the equivalent is a care worker or care
              assistant. In Australia, it is often called a personal care
              attendant or support worker.
            </li>
            <li>
              <strong>Registered nurse (RN) or registered practical nurse
              (RPN/LPN)</strong> handles clinical tasks: wound care,
              injections, catheter management, medication administration,
              health assessments. In the UK, this role is a district
              nurse or community nurse. In Australia, it is a community
              registered nurse.
            </li>
            <li>
              <strong>Companion</strong> provides social support, light
              tasks, accompaniment to appointments, and meaningful
              company. This role exists under similar names in most
              countries.
            </li>
          </ul>
          <p>
            If you are outside Canada or the United States, ask any
            prospective provider what the equivalent regulated roles are
            in your region, and what credentials workers hold.
          </p>
        </>
      ),
    },
    {
      heading: "Before you make your first call",
      body: (
        <>
          <p>
            The most useful thing you can do before contacting any
            provider is write down exactly what you need. Vague requests
            get vague answers. Specific requests let you compare apples
            to apples.
          </p>
          <p className="font-semibold text-primary">Write down:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              The specific tasks that need support (bathing, dressing,
              meals, medication reminders, housekeeping, mobility,
              companionship, nursing)
            </li>
            <li>How many hours per day or week</li>
            <li>Whether the schedule needs to be fixed or flexible</li>
            <li>
              Any specific requirements: language spoken, gender
              preference, experience with dementia or a particular
              condition
            </li>
            <li>
              Whether this is for a private home, a retirement residence,
              or a long-term care facility
            </li>
          </ul>
          <p className="italic">
            Note: Home care workers can be privately hired to provide
            support inside a retirement residence or long-term care
            facility in most jurisdictions. If this applies to your
            situation, tell the provider upfront so they can confirm
            whether they work in those settings.
          </p>
        </>
      ),
    },
    {
      heading: "Questions about the agency or provider",
      body: (
        <>
          <p>
            Ask these of every agency or independent provider you
            evaluate. Write down the answers so you can compare later.
          </p>
          <h3 className="font-serif text-xl text-primary">Licensing and standing</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>How long have you been operating?</li>
            <li>Are you licensed, accredited, or registered in this region? What does that mean in practice?</li>
            <li>Are you a member of any home care industry associations? Which ones?</li>
            <li>Do you carry general liability insurance? Are workers covered under a workplace safety insurance policy?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">Workers: screening, training, and employment status</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Are your caregivers employees or independent contractors? What does that mean for supervision, training, and liability?</li>
            <li>What background checks do you conduct? Criminal record checks? Vulnerable sector checks?</li>
            <li>What training is required before a worker is assigned? Is training ongoing?</li>
            <li>What credentials or certifications do the workers hold?</li>
            <li>How do you supervise workers in the field? Is there a supervisor who checks in on client visits?</li>
          </ul>
          <p className="italic">
            Why this matters: Whether workers are employees or
            contractors changes who is legally and practically
            responsible for them. Contractors may not be covered by the
            agency&#x2019;s insurance or subject to the same oversight.
            Many families do not ask this question and are surprised when
            a problem arises.
          </p>
        </>
      ),
    },
    {
      heading: "Questions about services and costs",
      body: (
        <>
          <h3 className="font-serif text-xl text-primary">Scope of services</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>What exactly is included in your service? What are you not able to do?</li>
            <li>Do you provide personal care, nursing, companionship, or some combination? Which of those are your workers trained and regulated to provide?</li>
            <li>Can you provide care in a retirement residence or long-term care facility if needed?</li>
            <li>Can the level of care be increased or decreased as needs change?</li>
          </ul>
          <h3 className="font-serif text-xl text-primary">Pricing and contracts</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>How is pricing structured? Hourly, by visit, or by care package?</li>
            <li>Is there a minimum number of hours per visit or per week?</li>
            <li>Are there additional charges for evenings, weekends, or public holidays?</li>
            <li>Are there fees for initial assessments, care plans, or administration?</li>
            <li>Is there a written service agreement? Can I read it before I sign?</li>
            <li>What is the cancellation policy? What happens if we need to stop services?</li>
          </ul>
        </>
      ),
    },
    {
      heading: "Questions about reliability and communication",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>What happens if my regular caregiver is sick or unavailable? How far in advance do you let us know?</li>
            <li>Will we have the same caregiver consistently, or does it rotate? What is your approach to continuity of care?</li>
            <li>How do we communicate concerns or feedback? Who do we call if something goes wrong?</li>
            <li>Is there someone available after hours or on weekends if there is an urgent concern?</li>
            <li>Can I speak with references from current or past clients or families?</li>
            <li>How do you handle complaints? Has your agency ever lost its license, registration, or accreditation?</li>
          </ul>
          <p className="italic">
            What good answers look like: A reputable provider will answer
            these questions directly, provide written documentation
            without being asked, and welcome the request for references.
            Vagueness, pressure to sign quickly, or resistance to putting
            things in writing are all warning signs.
          </p>
        </>
      ),
    },
    {
      heading: "Questions about fit and safety",
      body: (
        <ul className="list-disc space-y-2 pl-6">
          <li>How do you match caregivers to clients? Can we meet the caregiver before they start?</li>
          <li>What happens if the match is not working? Can we request a different caregiver?</li>
          <li>Do you have experience with the specific diagnosis, condition, or situation?</li>
          <li>How are workers trained to handle behavioral changes, emergencies, or falls?</li>
          <li>What is your policy if a worker witnesses signs of abuse, neglect, or a change in a client&#x2019;s condition?</li>
        </ul>
      ),
    },
    {
      heading: "Red flags to watch for",
      body: (
        <>
          <p>These are not automatic reasons to walk away, but they warrant careful attention:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Pressure to sign a contract before you have had time to review it</li>
            <li>Inability or unwillingness to provide references</li>
            <li>Vague or inconsistent answers about worker credentials or background checks</li>
            <li>No clear backup plan when a caregiver is unavailable</li>
            <li>Billing that is unclear or difficult to get in writing</li>
            <li>A high turnover of caregivers with no explanation</li>
            <li>Workers who are not employees but are described loosely as &#x201C;our people&#x201D;</li>
          </ul>
        </>
      ),
    },
    {
      heading: "What happens after you choose a provider",
      body: (
        <>
          <p>
            Most reputable agencies will conduct an in-home care
            assessment before services begin. This is a visit where a
            coordinator comes to the home, talks with the person
            receiving care and their family, and develops a written care
            plan. The care plan documents what support is needed, how it
            will be delivered, and how progress will be monitored.
          </p>
          <p>
            Ask for a copy of the care plan before the first visit.
            Review it carefully. It should match what you discussed and
            reflect the actual needs of the person receiving care.
          </p>
          <p>
            Plan to reassess within the first few weeks. How is the match
            working? Are the needs being met? Is the person receiving
            care comfortable with the caregiver? Early feedback is easy to
            act on. Problems that go unaddressed for months are harder to
            resolve.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Write down the specific tasks and hours needed before contacting anyone.</li>
            <li>Contact at least three providers. Compare their answers side by side.</li>
            <li>Request written quotes, service agreements, and references before deciding.</li>
            <li>Ask to meet the caregiver before services begin.</li>
            <li>Check whether publicly funded home care is available in your area before committing to private-pay costs.</li>
            <li>Download the checklists below and bring them to every call or meeting.</li>
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/checklists/TVS_HC1_SupportTasksPlanner.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
            >
              Download: Support Tasks Planner (PDF)
            </a>
            <a
              href="/checklists/TVS_HC2_QuestionsForProviders.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
            >
              Download: Questions for Home Care Providers (PDF)
            </a>
            <a
              href="/checklists/TVS_HC3_ProviderComparison.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
            >
              Download: Home Care Provider Comparison (PDF)
            </a>
          </div>
          <p className="italic">
            Find vetted <Link to="/help/$category" params={{ category: "home-care" }} className="text-primary underline">home care providers</Link>{" "}
            in the directory.
          </p>
        </>
      ),
    },
  ],
  "homecare-care-types": [
    {
      heading: "Why choosing the right type matters",
      body: (
        <>
          <p>
            Home care is not one thing. It is a category that covers
            everything from a nurse managing a wound twice a week to a
            companion dropping in for coffee and a walk on Tuesday
            afternoons. The three main types of support serve completely
            different needs, are provided by workers with different
            training and credentials, and are priced very differently.
          </p>
          <p>
            Choosing the wrong type does not just waste money. It can
            mean real needs go unmet while you pay for services that do
            not address the actual problem. A nursing agency is not the
            right answer when the need is companionship and help with
            meals. A companion is not the right answer when there is a
            wound that needs clinical care.
          </p>
          <p>The three types can also overlap. Many people need more than one.</p>
        </>
      ),
    },
    {
      heading: "Personal support workers: help with daily living",
      body: (
        <>
          <p>
            A personal support worker helps with the physical tasks of
            daily life. This includes bathing, dressing, grooming,
            toileting, meal preparation, mobility assistance, medication
            reminders, light housekeeping, and errands. The goal is to
            help someone maintain their routines and live safely at home
            or in a care setting.
          </p>
          <p>
            <strong>What they cannot do:</strong> Personal support workers
            are not clinically trained. They cannot administer
            medications by injection, manage wounds, insert or manage
            catheters, or make clinical health assessments. If those
            needs are present, a nurse is required, either separately or
            in addition.
          </p>
          <p>
            <strong>Where they can work:</strong> Personal support workers
            can be privately hired to provide support in a private home,
            a retirement residence, or a long-term care facility. This is
            a common arrangement when publicly funded care in a facility
            is not sufficient to meet a person&#x2019;s needs.
          </p>
          <h3 className="font-serif text-xl text-primary">What this role is called in different countries</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Canada:</strong> Personal Support Worker (PSW)</li>
            <li><strong>United States:</strong> Home Health Aide (HHA), Certified Nursing Assistant (CNA), or Personal Care Aide (PCA)</li>
            <li><strong>United Kingdom:</strong> Care Worker, Care Assistant, or Support Worker</li>
            <li><strong>Australia:</strong> Personal Care Attendant, Support Worker</li>
          </ul>
          <p className="italic">
            If you are in another country, ask the provider what training
            and qualifications the worker holds, and what they are and
            are not permitted to do. The function matters more than the
            title.
          </p>
          <p className="font-semibold text-primary">
            This type of support is right for you if: The main need is
            help with daily physical tasks, routines, or household
            management, and there are no active clinical medical needs
            requiring a nurse.
          </p>
        </>
      ),
    },
    {
      heading: "Nursing care: clinical support at home",
      body: (
        <>
          <p>
            A nurse provides clinical care in the home. This includes
            wound care, catheter management, injection administration,
            intravenous therapy, complex medication management,
            post-surgical monitoring, chronic disease management, and
            formal health assessments. Nurses are regulated professionals
            who must be registered with a professional body in their
            jurisdiction.
          </p>
          <p>
            Nursing care is prescribed for specific clinical needs. It is
            significantly more expensive than personal support because it
            requires regulated professionals. It is not a substitute for
            personal support when the need is simply help with bathing
            and meals. And it is essential when it is needed.
          </p>
          <p>
            <strong>Where they can work:</strong> Nurses can provide home
            visits in a private home or retirement residence setting.
            They can also provide transition care after
            hospitalization. In many regions, some nursing visits after a
            hospital discharge are publicly funded. Private nursing
            visits are also available.
          </p>
          <h3 className="font-serif text-xl text-primary">What this role is called in different countries</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Canada:</strong> Registered Nurse (RN), Registered Practical Nurse (RPN), Licensed Practical Nurse (LPN)</li>
            <li><strong>United States:</strong> Registered Nurse (RN), Licensed Practical Nurse (LPN), Licensed Vocational Nurse (LVN)</li>
            <li><strong>United Kingdom:</strong> District Nurse, Community Nurse, Practice Nurse</li>
            <li><strong>Australia:</strong> Community Registered Nurse, Enrolled Nurse</li>
          </ul>
          <p className="font-semibold text-primary">
            This type of support is right for you if: There are active
            clinical needs at home: an unhealed wound, a catheter,
            injections, complex medications, or recovery from surgery or
            a serious illness.
          </p>
        </>
      ),
    },
    {
      heading: "Companion care: connection and social support",
      body: (
        <>
          <p>
            A companion provides social support and meaningful company.
            Companions talk, play cards, go for walks, accompany people
            to appointments, help with light tasks, read aloud, and
            generally provide the kind of regular human connection that
            matters enormously to wellbeing.
          </p>
          <p>
            <strong>What they do not do:</strong> Companions are not
            trained in personal care. They do not assist with bathing,
            dressing, or physical transfers. They are not clinical
            workers.
          </p>
          <p>
            <strong>Why companion care is underrated:</strong> Isolation
            among older adults is a significant health risk with
            measurable effects on physical and cognitive health.
            Companion care addresses this directly. It also provides
            regular respite for family caregivers, which has its own
            value.
          </p>
          <p className="font-semibold text-primary">
            This type of support is right for you if: The person is
            largely independent physically but spends too much time
            alone, or a family caregiver needs regular, reliable time
            away.
          </p>
        </>
      ),
    },
    {
      heading: "When you need more than one type",
      body: (
        <p>
          It is very common to need a combination. A personal support
          worker three mornings a week, a nurse twice a week for wound
          care, and a companion visit on the weekend is not a redundant
          arrangement. Each serves a distinct purpose. Some agencies offer
          all three types of support under one roof. Others specialize.
          If your needs span multiple types, ask whether the agency can
          provide all of them, or whether you will need to coordinate
          multiple providers.
        </p>
      ),
    },
    {
      heading: "Quick comparison: all three types at a glance",
      body: (
        <>
          <p>
            The table below summarizes how personal support, nursing, and
            companion care differ. The same comparison is available as a
            printable PDF you can fill in and bring to provider calls.
          </p>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-border text-left">
                  <th className="py-2 pr-4 font-semibold text-primary">&nbsp;</th>
                  <th className="py-2 pr-4 font-semibold text-primary">Personal Support Worker</th>
                  <th className="py-2 pr-4 font-semibold text-primary">Nurse</th>
                  <th className="py-2 pr-4 font-semibold text-primary">Companion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-semibold">What they do</td>
                  <td className="py-3 pr-4">Bathing, dressing, grooming, meals, mobility, medication reminders, light housekeeping</td>
                  <td className="py-3 pr-4">Wound care, injections, catheters, medication administration, clinical assessments, post-surgical care</td>
                  <td className="py-3 pr-4">Conversation, outings, accompanying to appointments, light tasks, social connection</td>
                </tr>
                <tr className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-semibold">What they do not do</td>
                  <td className="py-3 pr-4">Clinical procedures, medication administration beyond reminders, medical decision-making</td>
                  <td className="py-3 pr-4">Not a replacement for personal care or companionship; roles are complementary</td>
                  <td className="py-3 pr-4">Personal care, clinical procedures, lifting or transfers</td>
                </tr>
                <tr className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-semibold">Typical setting</td>
                  <td className="py-3 pr-4">Private home, retirement residence, or long-term care facility</td>
                  <td className="py-3 pr-4">Private home, clinic, or post-acute recovery settings</td>
                  <td className="py-3 pr-4">Private home, retirement residence, community outings</td>
                </tr>
                <tr className="border-b border-border align-top">
                  <td className="py-3 pr-4 font-semibold">Relative cost</td>
                  <td className="py-3 pr-4">Mid-range</td>
                  <td className="py-3 pr-4">Highest</td>
                  <td className="py-3 pr-4">Lowest</td>
                </tr>
                <tr className="align-top">
                  <td className="py-3 pr-4 font-semibold">Best if&#x2026;</td>
                  <td className="py-3 pr-4">Daily physical tasks are the need, without complex medical needs</td>
                  <td className="py-3 pr-4">Active medical needs require clinical skills</td>
                  <td className="py-3 pr-4">Largely independent but isolated or needing social connection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      heading: "How to figure out what you need",
      body: (
        <>
          <p>
            Start by writing down a typical day. What tasks does the
            person struggle with or need help to complete? Are any of
            those tasks clinical in nature? How much time does the person
            spend alone, and is that a concern?
          </p>
          <p>
            A formal needs assessment by a care coordinator or
            occupational therapist is the most reliable way to get this
            right. In many regions, a funded needs assessment is
            available through the public health system. Ask your family
            doctor or local health authority how to access one.
          </p>
          <p>
            The most common mistake families make is hiring based on a
            title rather than an honest assessment of what the person
            actually needs. Getting that clarity first saves both money
            and the difficulty of switching providers later.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Write down what the person currently struggles with or cannot do safely alone.</li>
            <li>Separate tasks into three buckets: daily physical care, clinical medical needs, and social connection.</li>
            <li>Ask the family doctor whether a care needs assessment or referral to a care coordinator is available.</li>
            <li>Download the printable care type grid below and use it to organize what you know.</li>
            <li>Contact home care providers with a specific, written description of what is needed rather than a general inquiry.</li>
          </ol>
          <a
            href="/checklists/TVS_CareTypeGrid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Care Type Grid (PDF)
          </a>
          <p className="italic">
            Find vetted <Link to="/help/$category" params={{ category: "home-care" }} className="text-primary underline">home care providers</Link>{" "}
            in the directory.
          </p>
        </>
      ),
    },
  ],

  "choosing-a-medical-alert-system": [
    {
      heading: "What these devices actually do, and when one earns its place",
      body: (
        <>
          <p>
            A medical alert system is a button your parent wears, connected to
            a monitoring centre that answers when it is pressed, day or night.
            The good ones turn a fall from a night on the floor into a
            fifteen-minute wait for help. That is the whole product, and for
            the right person it is one of the highest-value purchases in all
            of senior care.
          </p>
          <p>
            The day to start considering one is the day two things become true
            at once: your parent lives alone, and a fall risk exists. If a
            fall has already happened, you are not early. Fear of falling
            again often makes older adults move less, which weakens muscles,
            which increases the risk of the next fall. A device your parent
            trusts breaks part of that cycle.
          </p>
          <p>
            One honest limit before anything else: devices only work when
            worn. The most sophisticated pendant in the world does nothing in
            a drawer. Involve your parent in choosing one they will actually
            wear, and treat "will you actually wear this" as the first
            specification, ahead of every feature on the box.
          </p>
        </>
      ),
    },
    {
      heading: "The main types, in plain language",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Home-based systems:</strong> a base station connected to
              a phone line or cellular network, with a wearable button that
              works within range of the house. Simplest, usually cheapest,
              right for someone who is mostly at home.
            </li>
            <li>
              <strong>Mobile (GPS) systems:</strong> the button works anywhere
              there is cellular coverage, and responders can locate the
              wearer. Right for someone still out walking, shopping, or
              driving.
            </li>
            <li>
              <strong>Fall detection:</strong> an add-on sensor that tries to
              detect a fall and call for help automatically, for the
              situations where someone cannot press the button. Useful, but
              imperfect in both directions: it can miss real falls and trigger
              on false ones. Treat it as a backup to the button, not a
              replacement.
            </li>
            <li>
              <strong>Smartwatch-style devices:</strong> alert functions built
              into a watch form. Some seniors who refuse a pendant will wear a
              watch. The trade-offs are battery life and smaller buttons.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The questions to ask any provider before you sign",
      body: (
        <>
          <p>
            These come from our founder's own vetting question set. Ask them
            all, write the answers down, and be suspicious of any salesperson
            who cannot answer them crisply.
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Is monitoring 24/7, and where is the monitoring centre located?
              Who answers, and in what languages?
            </li>
            <li>
              What exactly happens when the button is pressed? Who is called,
              in what order, and what happens if nobody answers?
            </li>
            <li>Is fall auto-detection included, and what does it cost extra?</li>
            <li>
              What does it cost month to month, all in: equipment, monitoring,
              activation, and any "protection plan" they add at checkout?
            </li>
            <li>
              What is the contract term, and what does cancellation actually
              take? Month-to-month exists in this market. Long contracts with
              cancellation fees are a choice, and usually a bad one.
            </li>
            <li>
              What happens when the equipment fails or the battery dies? Who
              notices, them or you?
            </li>
          </ol>
          <p>
            Billing surprises and cancellation pain are this industry's most
            common complaints. The answers to questions 4 and 5 predict
            whether you will be writing an angry review in a year.
          </p>
        </>
      ),
    },
    {
      heading: "Who helps pay, in Ontario",
      body: (
        <>
          <p>
            The honest answer: mostly nobody. Ontario does not broadly fund
            medical alert services, so this is usually a private purchase in
            the range of $25 to $60 a month depending on features. Two
            exceptions are worth checking before you pay full price:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Some municipalities and community support agencies subsidize
              alarms for low-income seniors. Call 211 and ask what exists in
              your parent's area. The call is free and answered 24/7.
            </li>
            <li>
              Low-income seniors who qualify for TELUS's Internet for Good or
              Mobility for Good programs can get TELUS Health Medical Alert
              service at a steep discount through its Health for Good program.
            </li>
          </ul>
          <p>
            The device may also count as a medical expense in some
            circumstances at tax time; keep receipts and ask whoever prepares
            your parent's return.
          </p>
          <p className="italic">
            Transparency note, because this is that kind of site: this page
            currently contains no affiliate links and no provider has paid to
            be mentioned or omitted. If that ever changes, the disclosure will
            be at the top of this page, per{" "}
            <Link to="/disclosure" className="text-primary underline">
              our disclosure policy
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      heading: "Beyond the button: the rest of the safety layer",
      body: (
        <>
          <p>
            A medical alert system is one layer of home safety, not the whole
            plan. The others cost less and matter as much: loose rugs removed,
            paths lit from bed to bathroom, grab bars anchored into studs,
            non-slip footwear, and a weekly blister pack from the pharmacy for
            medications. The full room-by-room walkthrough is in our free{" "}
            <Link to="/handbook" className="text-primary underline">
              Family Caregiver's Complete Handbook
            </Link>
            , and if a fall has already happened, start with the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "parent-had-a-fall" }}
              className="text-primary underline"
            >
              Parent Had a Fall guide
            </Link>
            .
          </p>
        </>
      ),
    },
  ],

  "paying-for-care": [
    {
      heading: "The honest framing first",
      body: (
        <>
          <p>
            In Canada, medical care is largely covered, but long-term help
            with daily living is a patchwork of public programs, tax measures,
            and private money, and the private share grows as needs grow. The
            families who manage best are not the richest ones. They are the
            ones who mapped the resources early and used every layer in order.
          </p>
          <p>
            Almost every family pays in the wrong order. They reach for
            private savings and private services first, because those are the
            doors that advertise. The layers that do not advertise, public
            programs, tax credits that refund money already being spent,
            benefits your parent is entitled to but never claimed, get left on
            the table. Here are the layers, in the order to use them.
          </p>
        </>
      ),
    },
    {
      heading: "Layer 1: Public programs first",
      body: (
        <>
          <p>
            Provincial home care, subsidized day programs, equipment funding,
            and community services are the base layer, and they are
            chronically underused because nobody advertises them. One
            assessment call opens the file. In Ontario, that call is Ontario
            Health atHome at 310-2222 (no area code needed), and 211 covers
            everything else, 24/7, in 150+ languages. Every province has an
            equivalent front door; call 211 anywhere in Canada and ask for
            "home care intake for seniors."
          </p>
          <p>
            In Ontario alone, a family doing this well can be talking about
            thousands of dollars a year: publicly funded home care hours,
            equipment funding that covers 75 percent of a walker or wheelchair
            through the Assistive Devices Program (assessment before purchase,
            in that order), subsidized adult day programs, and OHIP-funded
            physiotherapy for people 65 and older.
          </p>
        </>
      ),
    },
    {
      heading: "Layer 2: Tax measures, because they refund money you are already spending",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The medical expense tax credit:</strong> attendant care,
              equipment, and many home care costs qualify.
            </li>
            <li>
              <strong>The disability tax credit:</strong> a gateway credit
              that unlocks others, can transfer to a supporting child, and can
              be claimed retroactively up to ten years. Dementia frequently
              qualifies under the mental functions category.
            </li>
            <li>
              <strong>The Canada Caregiver Credit:</strong> for the supporting
              family member, claimed on the caregiver's own return. Most
              caregiving children never claim it.
            </li>
            <li>
              <strong>The Home Accessibility Tax Credit:</strong> 15 percent
              of up to $20,000 a year in safety renovations.
            </li>
            <li>
              <strong>Provincial credits stack on top.</strong> Ontario's
              Seniors Care at Home Tax Credit refunds up to $1,500 a year, and
              it is refundable, meaning your parent gets it even with no tax
              owing.
            </li>
          </ul>
          <p>
            The rule of the tax layer: keep every receipt, file every year
            even with no income, and spend one hour annually with someone who
            knows seniors' credits. That hour reliably pays for itself several
            times over.
          </p>
        </>
      ),
    },
    {
      heading: "Layer 3: Benefits your parent may already be entitled to",
      body: (
        <>
          <p>
            Federal income supports (OAS and the income-tested GIS
            supplement), provincial top-ups like Ontario's GAINS, veterans'
            programs (housekeeping and grounds maintenance funding through the
            Veterans Independence Program surprises many families; ask whether
            even short service counts), and drug cost programs. Every one of
            these flows from a filed tax return, which is why the return is
            the master key: a parent with no income owing still needs to file,
            every year, on time. Free tax clinics exist for exactly this; ask
            211.
          </p>
        </>
      ),
    },
    {
      heading: "Layers 4 and 5: Insurance, then family money, out loud",
      body: (
        <>
          <p>
            <strong>Insurance fourth:</strong> some parents hold long-term
            care insurance, critical illness coverage, or workplace retiree
            benefits nobody has looked at in years. Find the policies before
            assuming there are none.
          </p>
          <p>
            <strong>Family money and family labour fifth, and out loud.</strong>{" "}
            Decide together whose money pays (the parent's own resources
            usually should come first, both practically and legally), track
            what is spent, and put any sibling arrangements in writing. Money
            handled in silence becomes resentment; money handled in a shared
            spreadsheet stays money.
          </p>
        </>
      ),
    },
    {
      heading: "Layer 6: The home, last and carefully",
      body: (
        <>
          <p className="rounded-xl border border-gold/50 bg-secondary/40 p-4 text-base">
            <strong>Disclosure, before this section, not after it:</strong>{" "}
            The Vetted Senior's founder, Ragini Domenichini, is a licensed
            mortgage agent in Ontario operating under BRX Mortgage Inc. (FSRA
            #13549). That relationship never changes what appears in our
            directory or our guides, nobody here will ever contact you about a
            mortgage unless you ask, and the full picture is on{" "}
            <Link to="/disclosure" className="text-primary underline">
              our disclosure page
            </Link>
            . Read this section knowing exactly who wrote it.
          </p>
          <p>
            For homeowners, the house is often the largest resource available,
            and there are exactly four honest ways to use it:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Sell and downsize.</strong> Frees the most money, costs
              the home. Right when the house itself has become the problem:
              stairs, upkeep, isolation.
            </li>
            <li>
              <strong>Rent out part of it.</strong> Income without leaving,
              but it makes your parent a landlord, with everything that means.
            </li>
            <li>
              <strong>A secured line of credit.</strong> Cheap, flexible
              borrowing while income can service it. Requires qualifying and
              discipline.
            </li>
            <li>
              <strong>A reverse mortgage.</strong> No payments required and no
              qualifying income needed, but interest compounds against the
              estate, and costs are real. It is the right tool for some
              house-rich, income-tight situations and the wrong tool for many
              others.
            </li>
          </ol>
          <p>
            Each one has real costs, real benefits, and situations where it is
            clearly wrong. Anyone who leads with one product before
            understanding your family's whole picture is selling, not
            advising. Take the time to compare all four, in writing, with the
            ongoing costs and the ten-year picture included, and treat any
            adviser's willingness to show you the option that pays them
            nothing as the test of the advice.
          </p>
        </>
      ),
    },
    {
      heading: "A word on financial safety, because it belongs in the money chapter",
      body: (
        <>
          <p>
            Financial abuse of seniors is common, underreported, and usually
            committed by someone known and trusted. The protective habits are
            simple: more than one set of eyes on the accounts (many banks
            offer view-only access or duplicate statements for a trusted
            contact), powers of attorney chosen with care, and an agreed
            family rule that no financial decision happens under pressure or
            in secret. Talk about scams openly and without condescension.
            Shame is the scammer's best friend; a family that jokes about scam
            calls at dinner is a family that reports them.
          </p>
          <p className="italic">
            The legal documents that protect all of this are covered in{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "five-legal-documents" }}
              className="text-primary underline"
            >
              The Five Legal Documents Every Family Needs
            </Link>
            , and the full money map is Section 7 of the free{" "}
            <Link to="/handbook" className="text-primary underline">
              Family Caregiver's Complete Handbook
            </Link>
            .
          </p>
        </>
      ),
    },
  ],

  "five-legal-documents": [
    {
      heading: "The one unforgiving rule",
      body: (
        <>
          <p>
            Names vary by country and province, but the functions of these
            documents are universal, and all of them share one unforgiving
            rule: they can only be created while the person still has the
            mental capacity to understand them. Early is everything. If
            dementia is anywhere in the picture, do these the month you start
            wondering, not the month after diagnosis.
          </p>
        </>
      ),
    },
    {
      heading: "The five documents, in plain language",
      body: (
        <>
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <strong>A will.</strong> Who gets what, and who is in charge of
              making it happen (the executor). Dying without one hands the
              decisions to a government formula.
            </li>
            <li>
              <strong>A financial power of attorney</strong> (continuing or
              enduring, in Canadian terms). Names who can manage money and
              property if your parent cannot, temporarily or permanently.
              Without one, family must apply to a court or public authority to
              take over, a process that is slow, public, and expensive,
              arriving precisely at the worst moment.
            </li>
            <li>
              <strong>A power of attorney or directive for personal and
              health care.</strong> Names who decides about care, housing, and
              treatment when your parent cannot, and can carry written wishes.
            </li>
            <li>
              <strong>Written wishes about medical care</strong> (advance care
              plan, living will, the name varies). What matters to your parent
              at the end of life, what they would accept and refuse. The
              document matters; the conversation around it matters more,
              because the named decision-maker will one day need to hear your
              parent's voice in their memory.
            </li>
            <li>
              <strong>The personal inventory.</strong> Not a legal document,
              but the map that makes all the legal documents usable: where
              everything is, who to call, how things are paid. The fill-in
              version is Section 2 of our free{" "}
              <Link to="/handbook" className="text-primary underline">
                Family Caregiver's Complete Handbook
              </Link>
              .
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: "If you are in Ontario: the specifics",
      body: (
        <>
          <p>
            Ontario has two powers of attorney: a Continuing Power of Attorney
            for Property (finances) and a Power of Attorney for Personal Care
            (health and living decisions), governed by the Substitute
            Decisions Act. The Ontario government publishes a free POA kit
            (ontario.ca, search "power of attorney kit"), though for anything
            beyond a simple situation, an hour with a lawyer who does elder
            law is money well spent.
          </p>
          <p>
            If no Power of Attorney for Personal Care exists and a health
            decision must be made, Ontario's Health Care Consent Act
            automatically ranks substitute decision-makers: spouse or partner,
            then children or parents, then siblings, then other relatives,
            with the Public Guardian and Trustee as the last resort.
            Disagreements go to the Consent and Capacity Board. Knowing this
            hierarchy exists prevents both panic and family warfare, but a
            named attorney of your parent's own choosing beats the default
            list every time.
          </p>
          <p>
            After capacity is lost, the only route to managing a parent's
            property is a guardianship application through the courts or the
            Office of the Public Guardian and Trustee: slow, expensive, and
            invasive. This is the outcome the documents exist to prevent.
          </p>
        </>
      ),
    },
    {
      heading: "Three practical notes families learn too late",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Kits and online services are fine for simple situations. Blended
              families, business ownership, property in more than one place,
              or family conflict are worth a real lawyer, and one focused hour
              is cheaper than the mess.
            </li>
            <li>
              Tell the named people they are named, and tell them where the
              documents are. A power of attorney nobody can find does not
              exist.
            </li>
            <li>
              Revisit after any major life event: a death, a move, a
              diagnosis, a falling-out.
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: "If you are reading this too late",
      body: (
        <>
          <p>
            If capacity is already in question, do not panic and do not
            improvise. Every jurisdiction has a legal pathway for substitute
            decision-making, health systems have default decision-maker
            hierarchies for medical consent, and an elder law lawyer or
            hospital social worker can tell you exactly where you stand. Later
            than ideal is still workable. It is just slower, and it is why
            this page nags everyone else to go early.
          </p>
          <p className="italic">
            If memory changes are what brought you here, the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "dementia-concerns" }}
              className="text-primary underline"
            >
              Dementia Concerns guide
            </Link>{" "}
            covers the whole path, including the Ontario-specific steps that
            are time-sensitive.
          </p>
        </>
      ),
    },
  ],
};

function ArticlePage() {
  const { category, article } = Route.useLoaderData();
  const sections = ARTICLE_CONTENT[article.slug];

  return (
    <Page>
      <section
        className="relative flex h-[400px] flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-4 text-sm text-white/80">
          <Link to="/" className="hover:underline">Home</Link>
          <span aria-hidden> / </span>
          <Link to="/help" className="hover:underline">Find Help</Link>
          <span aria-hidden> / </span>
          <Link to="/help/$category" params={{ category: category.slug }} className="hover:underline">
            {category.name}
          </Link>
          <span aria-hidden> / </span>
          <span>{article.title}</span>
        </div>
        <div className="relative mx-auto w-full max-w-4xl px-6 pb-10">
          <h1 className="font-serif text-3xl font-semibold text-white md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white/90 leading-relaxed">
            {article.description}
          </p>
        </div>
      </section>

      {sections && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
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
            Looking for a vetted provider?
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Browse vetted {category.name.toLowerCase()} providers in the directory.
          </p>
          <Link
            to="/help/$category"
            params={{ category: category.slug }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-base font-semibold text-primary no-underline hover:bg-primary/5 transition-colors"
          >
            Back to {category.name} →
          </Link>
        </div>
      </section>
    </Page>
  );
}
