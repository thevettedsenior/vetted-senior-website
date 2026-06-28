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
          </ol>
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
