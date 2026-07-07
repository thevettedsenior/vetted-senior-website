import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const LEGAL_FINANCIAL_ARTICLES: ArticleContentMap = {
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
      heading: "The printable version",
      body: (
        <>
          <p>
            The checklist below turns this article into a worksheet: whether
            each document exists, whether it is current, whether it can be
            found, and whether the named people know. Twenty minutes with it
            tells you exactly where your family stands.
          </p>
          <a
            href="/checklists/TVS_LF1_LegalDocumentsChecklist.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Legal Documents Checklist (PDF)
          </a>
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
