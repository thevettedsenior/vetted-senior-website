import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const FUNERAL_ESTATE_PLANNING_ARTICLES: ArticleContentMap = {
  "funeral-preplanning-guide": [
    {
      heading: "Why this is a gift, and why now",
      body: (
        <>
          <p>
            A family arranging a funeral makes dozens of purchasing
            decisions in about 48 hours, while grieving, on a deadline,
            across the desk from a professional seller. Nobody shops well
            under those conditions, and the industry's pricing reflects
            it. Pre-planning moves every one of those decisions to a calm
            afternoon years earlier, and the person it honours gets a say.
          </p>
          <p>
            Two separate things hide under the word "pre-planning," and
            keeping them separate is the whole trick:{" "}
            <strong>recording wishes</strong>, which costs nothing and has
            no downside, and <strong>prepaying</strong>, which is a
            financial product with real pros and cons. Do the first this
            month. Decide the second with your eyes open, using the
            section below.
          </p>
        </>
      ),
    },
    {
      heading: "Recording wishes: the free part every family should do",
      body: (
        <>
          <p>
            The decisions that ambush grieving families, all answerable in
            advance: burial or cremation; what kind of service, if any;
            where; religious or not; music, readings, an obituary's key
            facts; and, bluntly useful, what <em>not</em> to spend money
            on. A parent who writes "a simple cremation and a party, and I
            mean it" spares their children both thousands of dollars and
            the guilt of choosing the cheaper option themselves. In the
            arrangement room, guilt is expensive.
          </p>
          <p>
            Write it down, tell the executor and family where it lives,
            and keep it <strong>outside the will</strong>: wills are often
            read after the funeral. Our printable worksheet covers all of
            it:
          </p>
          <a
            href="/checklists/TVS_FP1_FuneralPrePlanWorksheet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-primary no-underline transition-colors hover:bg-gold/80"
          >
            Download: Funeral Pre-Planning Worksheet (PDF)
          </a>
        </>
      ),
    },
    {
      heading: "What funerals cost in Canada, in real numbers",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Direct cremation</strong> (no service through the funeral home): roughly $1,500 to $4,000 depending on city and provider, and the spread between providers in the same city is enormous for a nearly identical service.</li>
            <li><strong>Cremation with a memorial service:</strong> $4,000 to $9,000.</li>
            <li><strong>Traditional burial with visitation and service:</strong> $10,000 to $20,000+ once casket, cemetery plot, marker, and interment fees are included. Cemetery costs are separate from funeral home costs, a surprise that arrives late in the process.</li>
          </ul>
          <p>
            Ontario law is on your side here:{" "}
            <strong>every licensed provider must give you an itemized
            price list</strong>, and you may buy only the items you want.
            "Packages" are marketing, not law. The regulator is the
            Bereavement Authority of Ontario (thebao.ca); check the
            licence of any provider there, and know that caskets and urns
            can legally be purchased elsewhere (including online, at
            dramatic savings) and the funeral home must accept them
            without a handling fee.
          </p>
          <p>
            Help that exists: CPP pays a one-time death benefit (a few
            thousand dollars, claimed by the estate); veterans may qualify
            for burial assistance through the Last Post Fund;
            and Ontario municipalities must cover basic funeral costs for
            residents who die without means, a dignity provision families
            in hardship should ask their municipality about directly.
          </p>
        </>
      ),
    },
    {
      heading: "Prepaying: the honest pros and cons",
      body: (
        <>
          <p>
            Prepaid funeral money in Ontario is protected: it must go into
            trust or a licensed insurance product, it earns interest, and
            it is refundable (with modest cancellation rules) if you
            cancel, and transferable if you move. Those protections make
            prepaying <em>safe</em>. Whether it is <em>smart</em> depends
            on the details:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>The case for:</strong> price-guaranteed contracts lock today's prices for services the home controls; the money is sheltered from the temptation to inflate the funeral later ("Dad deserves the best" is the industry's most profitable sentence); and for anyone approaching long-term care means-testing or managing an estate for simplicity, a paid funeral is genuinely tidy.</li>
            <li><strong>The case against:</strong> a guaranteed contract only guarantees the provider's own items (cemetery fees and third-party costs can still rise); the funeral home might change ownership or quality by the time it is needed; and the same money in the family's own investment account is more flexible. An alternative that captures most of the benefit: a dedicated joint or TFSA account labelled "funeral," plus the written wishes.</li>
          </ul>
          <p>
            If you do prepay: get the itemized contract showing exactly
            what is guaranteed versus estimated, confirm in writing where
            the money is held, keep the paperwork with the other estate
            documents, and tell the executor it exists. A prepaid funeral
            nobody knows about gets paid for twice, and it happens more
            than the industry likes to admit.
          </p>
        </>
      ),
    },
    {
      heading: "Choosing the provider, calmly",
      body: (
        <>
          <p>
            Visit two or three funeral homes years before you need one,
            exactly like any other major purchase. Ask for the price list
            (watch how the request lands), ask whether they are
            independently owned or part of a chain (chains are not
            automatically worse, but prices often differ and the local
            name on the sign may not mean local ownership anymore), and
            ask how they handle families who choose simple options. The
            provider who treats a direct cremation request with the same
            respect as a $15,000 funeral is the provider you want, and the
            visit tells you in twenty minutes.
          </p>
          <p className="italic">
            The wishes worksheet pairs with the legal documents in{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "five-legal-documents" }}
              className="text-primary underline"
            >
              The Five Legal Documents
            </Link>
            ; do them the same week and the family's paperwork is
            genuinely in order.
          </p>
        </>
      ),
    },
  ],

  "what-executors-actually-do": [
    {
      heading: "The job, described honestly",
      body: (
        <>
          <p>
            An executor (Ontario's formal term: estate trustee) is the
            person legally responsible for wrapping up everything a person
            owned, owed, and promised. It is part project manager, part
            bookkeeper, part diplomat, and it lasts a year or more for a
            typical estate. People agree to it at a kitchen table decades
            earlier, flattered to be trusted, with no idea what they said
            yes to. This guide is what they said yes to.
          </p>
          <p>
            If you are reading this with the death already happened: skip
            to the first-two-weeks list, breathe, and know that almost
            nothing in an estate is truly urgent except the funeral, the
            house, and any dependents or pets. The rest tolerates a slow,
            careful executor far better than a fast, sloppy one.
          </p>
        </>
      ),
    },
    {
      heading: "The first two weeks",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li><strong>Funeral and burial arrangements</strong>, guided by any written wishes (check for a prepaid contract before paying for anything).</li>
            <li><strong>Find the will</strong> and confirm you are named. The lawyer who drafted it, the safe deposit box, and the filing cabinet are the usual suspects.</li>
            <li><strong>Order death certificates through the funeral home, and order more than you think you need.</strong> Banks, insurers, pensions, and land registries all want one; ten is a sane starting number, and reordering later is slow.</li>
            <li><strong>Secure the property:</strong> locks if the house sits empty, and call the home insurer immediately; vacant-home clauses can void coverage within weeks, and this is the most expensive thing new executors don't know.</li>
            <li><strong>Redirect mail, and start a notebook.</strong> Every call, every date, every expense, from day one. The estate reimburses reasonable executor expenses, and beneficiaries are entitled to an accounting; the notebook is both your defence and your sanity.</li>
            <li><strong>Notify the big systems:</strong> Service Canada (CPP/OAS stop, and the CPP death benefit and survivor benefits start here), the bank, employer or pension plans, and the CRA.</li>
          </ol>
        </>
      ),
    },
    {
      heading: "Probate, in plain language",
      body: (
        <>
          <p>
            Probate is the court process that certifies the will and your
            authority. In Ontario it produces a Certificate of Appointment
            of Estate Trustee, and the estate pays Estate Administration
            Tax (roughly 1.5 percent of estate value over $50,000; the
            first $50,000 is exempt). Whether you need it depends on what
            the estate holds: banks release small accounts without it,
            real estate held solely in the deceased's name almost always
            requires it, and each institution sets its own threshold.
            Ask each one "will you release this asset without probate?"
            before assuming.
          </p>
          <p>
            Ontario has a simplified process for small estates (under
            $150,000) that is genuinely more navigable without a lawyer.
            For everything else, a wise division of labour: many executors
            hire an estates lawyer for the probate application and specific
            questions, and do the legwork themselves. Legal fees come from
            the estate, not your pocket, and a few focused hours of advice
            prevents the classic executor errors.
          </p>
        </>
      ),
    },
    {
      heading: "The long middle: the year of paperwork",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Inventory everything:</strong> accounts, property, investments, insurance, debts, subscriptions, and the increasingly real category of digital assets (email, photos, crypto, loyalty points). The personal inventory in Section 2 of our <Link to="/handbook" className="text-primary underline">free Handbook</Link>, if the person filled it in, turns this month of detective work into an afternoon.</li>
            <li><strong>Pay debts and taxes before distributing anything.</strong> The estate files a final tax return (and often an estate return), and the CRA's clearance certificate is the executor's shield: distribute before clearance and the tax shortfall is personally yours. This is the single most important sentence in this guide.</li>
            <li><strong>Communicate with beneficiaries on a schedule</strong>, even when there is nothing to report. Executors get sued by surprised beneficiaries far more often than by wronged ones. A quarterly email costs nothing.</li>
            <li><strong>Sell or transfer the big assets</strong> (house, vehicles, investments), keeping records of valuations at death; they set the tax cost base.</li>
            <li><strong>Distribute per the will, get releases signed, keep the file.</strong> Seven years is the standard advice for retaining estate records.</li>
          </ul>
        </>
      ),
    },
    {
      heading: "Compensation, conflict, and saying no",
      body: (
        <>
          <p>
            Three things people wish they had known earlier. First,{" "}
            <strong>executors are entitled to compensation</strong> in
            Ontario, by convention up to about 5 percent of the estate's
            value for a full administration; family members often waive
            it, but knowing it exists reframes the workload. Second,{" "}
            <strong>conflict is normal and manageable:</strong> the
            executor's duty is to the will, not to fairness as siblings
            define it, and the notebook plus scheduled updates defuse most
            of it; a lawyer's letter defuses the rest. Third,{" "}
            <strong>you can decline.</strong> Renouncing before starting
            is straightforward, and an alternate or a trust company steps
            in. An executor who knows they will not do the job well serves
            the family better by saying so at the start.
          </p>
          <p className="italic">
            If you are being asked to be someone's executor now, the best
            answer is "yes, if we do the paperwork": the{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "legal-financial", article: "five-legal-documents" }}
              className="text-primary underline"
            >
              five legal documents
            </Link>{" "}
            and the personal inventory, done while they are well, are the
            difference between a manageable year and a miserable one.
          </p>
        </>
      ),
    },
  ],
};
