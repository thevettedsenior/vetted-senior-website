import { Link } from "@tanstack/react-router";
import { AmazonSearchLink } from "@/components/Affiliate";
import type { ArticleContentMap } from "./types";

export const HEARING_VISION_ARTICLES: ArticleContentMap = {
  "hearing-aids-without-overpaying": [
    {
      heading: "The stakes are higher than 'pardon?'",
      body: (
        <>
          <p>
            Untreated hearing loss is not a nuisance; it is one of the
            largest modifiable risk factors for cognitive decline
            identified in dementia research, and it drives social
            withdrawal with a directness families watch happen: first the
            dinner table gets quieter, then the invitations stop being
            accepted, then the television is the only voice in the house.
            About half of Canadians over 60 have some hearing loss. Most
            wait years before doing anything about it.
          </p>
          <p>
            The reason they wait is partly pride and partly price, and this
            guide is mostly about the price, because the hearing aid
            market is genuinely confusing and genuinely expensive, and
            knowing how it works is worth thousands of dollars.
          </p>
        </>
      ),
    },
    {
      heading: "How the market works, and where the money goes",
      body: (
        <>
          <p>
            Hearing aids in Canada run roughly <strong>$1,000 to $4,000
            per ear</strong>. The device itself is a fraction of that; the
            rest is bundled service: testing, fitting, adjustments,
            follow-ups, warranty. Bundling is not a scam, but it hides the
            numbers, so the first power move is asking for the{" "}
            <strong>unbundled price list</strong>: device, fitting,
            and service, separately. Clinics that refuse are telling you
            something.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Who you are dealing with matters.</strong> Audiologists
              are university-trained regulated professionals who assess and
              treat; hearing instrument specialists/practitioners are
              trained fitters and dispensers. Both are legitimate; for
              complex loss, tinnitus, or medical red flags (sudden loss,
              one-sided loss, pain), you want an audiologist and possibly an
              ENT referral first.
            </li>
            <li>
              <strong>Many clinics are owned by manufacturers.</strong>{" "}
              Several major Canadian clinic chains belong to the companies
              whose hearing aids they sell. It does not make the clinic bad;
              it makes "which brands do you carry, and who owns this
              clinic?" a fair and clarifying question.
            </li>
            <li>
              <strong>Price-shop with your audiogram.</strong> The hearing
              test produces an audiogram, and it is yours; ask for a copy.
              Costco's hearing centres, independent clinics, and chains
              will all quote against the same audiogram, and the spread on
              an equivalent device is routinely over a thousand dollars.
            </li>
            <li>
              <strong>Trial periods are law-adjacent and non-negotiable.</strong>{" "}
              Reputable Ontario dispensers offer a trial/return window
              (commonly 30 to 90 days). Get the return terms and any
              restocking fee in writing before paying.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "What Ontario pays, and who else helps",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Ontario's Assistive Devices Program contributes $500
              per hearing aid</strong> (so $1,000 for a pair), for any
              Ontario resident with a valid health card and a prescribed
              hearing aid, every three to five years. The clinic usually
              handles the paperwork and deducts it from the bill; confirm
              they are ADP-registered before testing.
            </li>
            <li>
              <strong>Veterans, current and former:</strong> Veterans
              Affairs Canada covers hearing aids generously for
              service-related loss. Always worth the call.
            </li>
            <li>
              <strong>Ontario Works / ODSP</strong> recipients have
              additional coverage routes, and{" "}
              <strong>workplace benefits and retiree plans</strong> often
              include a hearing aid allowance nobody remembers exists.
              Check the booklet before assuming.
            </li>
            <li>
              <strong>The medical expense tax credit</strong> applies to
              hearing aids, batteries, and repairs. Keep every receipt.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The honest middle ground: when you don't need $6,000 hearing aids",
      body: (
        <>
          <p>
            Two categories short of full hearing aids genuinely help, and
            because they are unfunded and inexpensive, the affiliate links
            below are ours (see{" "}
            <Link to="/disclosure" className="text-primary underline">
              disclosure
            </Link>
            ):
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>TV listening systems</strong>, wireless headphones
              with their own volume control, solve the single most common
              household hearing conflict for under $150.{" "}
              <AmazonSearchLink query="wireless tv headphones seniors">
                TV headphones on Amazon.ca
              </AmazonSearchLink>{" "}
              save marriages and Sunday dinners.
            </li>
            <li>
              <strong>Amplified phones</strong> with loud ringers, volume
              boost, and big buttons ({" "}
              <AmazonSearchLink query="amplified phone seniors hearing loss big button">
                amplified phones on Amazon.ca
              </AmazonSearchLink>
              ) keep the phone usable, which matters for safety, not just
              chat.
            </li>
            <li>
              <strong>Personal amplifiers</strong> (a small mic-and-earphone
              unit) help in one-on-one conversation for $50 to $200. They
              are not hearing aids and will not fix real hearing loss, but
              as a bridge while someone warms up to the idea, or for
              occasional use, they are honest value.
            </li>
          </ul>
          <p>
            What we do not recommend: unregulated "hearing aid" products
            sold online promising clinic results for $99. The gap between a
            personal amplifier honestly labelled and a fake hearing aid is
            the label.
          </p>
        </>
      ),
    },
    {
      heading: "Getting a resistant parent to yes",
      body: (
        <>
          <p>
            Average time from noticing hearing loss to doing something
            about it: years, sometimes a decade. What moves people: framing
            it as staying in the conversation rather than fixing a defect;
            the cognition link, stated plainly, because protecting memory
            motivates people who will not admit to mishearing; starting
            with the free hearing test, no commitment; and modern reality,
            because today's devices are nearly invisible and the
            grandparent generation's whistling beige banana is gone. A
            trial period turns "no" into "we'll see," and "we'll see,"
            with working hearing aids in place, usually becomes "fine."
          </p>
          <p className="italic">
            Hearing loss also masquerades as cognitive decline: a person
            who mishears answers oddly. Before concluding anything about
            memory, test hearing. The{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "dementia-concerns" }}
              className="text-primary underline"
            >
              Dementia Concerns guide
            </Link>{" "}
            covers this overlap.
          </p>
        </>
      ),
    },
  ],

  "vision-care-after-65": [
    {
      heading: "What OHIP actually covers after 65",
      body: (
        <>
          <p>
            Ontario seniors have better vision coverage than they think,
            with one significant hole:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Routine eye exams are OHIP-insured for seniors 65+</strong>,
              generally every 12 to 18 months depending on health
              conditions (the interval rules were tightened in recent
              years; the optometrist's office will confirm what applies).
              People with diabetes and certain eye conditions qualify for
              more frequent insured exams at any age.
            </li>
            <li>
              <strong>Cataract surgery is covered</strong>, including a
              standard lens implant. Upgraded lenses and some measurement
              fees are the common out-of-pocket add-ons; ask what is
              medically necessary versus optional before the surgery date,
              because the upsell conversation happens in the clinic
              hallway.
            </li>
            <li>
              <strong>Glasses are the hole.</strong> OHIP does not pay for
              them. Low-income seniors have options: Ontario Works
              discretionary benefits in some municipalities, service clubs
              (Lions Clubs have a long history with eyewear), and
              retailers' senior discounts. The medical expense tax credit
              applies to prescription eyewear; receipts, as always.
            </li>
          </ul>
          <p>
            The non-negotiable: <strong>an annual exam even when nothing
            feels wrong.</strong> Glaucoma and macular degeneration steal
            vision silently and irreversibly; caught early they can often
            be slowed or stopped. Half of vision loss in Canada is
            estimated to be preventable with timely care.
          </p>
        </>
      ),
    },
    {
      heading: "The big four conditions, in one honest paragraph each",
      body: (
        <>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Cataracts:</strong> the lens clouds, the world yellows
              and glares. Surgery is quick, routine, and life-changing;
              most people wish they had done it sooner. If night driving
              has quietly stopped, cataracts are a common reason.
            </li>
            <li>
              <strong>Glaucoma:</strong> pressure damages the optic nerve
              from the periphery inward, painlessly. By the time you notice,
              vision is gone for good. Drops manage it well. This is the
              main reason the annual exam is not optional.
            </li>
            <li>
              <strong>Macular degeneration (AMD):</strong> central vision
              blurs while peripheral survives; faces and print go first.
              The wet form is a same-week referral; treatment exists and
              timing matters enormously. A simple home test (the Amsler
              grid, free to print) catches changes between visits.
            </li>
            <li>
              <strong>Diabetic retinopathy:</strong> for any senior with
              diabetes, the eye exam schedule belongs to the diabetes plan,
              insured and essential.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Living well with low vision: the practical layer",
      body: (
        <>
          <p>
            When correction reaches its limits, the goal shifts from fixing
            vision to keeping the life. The tools are cheap and
            under-used. The product links here are affiliate links (see{" "}
            <Link to="/disclosure" className="text-primary underline">
              disclosure
            </Link>
            ); the strategies are free:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Light is the cheapest vision aid that exists.</strong>{" "}
              An aging eye needs roughly three times the light a
              20-year-old's does. A{" "}
              <AmazonSearchLink query="daylight LED task floor lamp reading">
                bright LED task lamp
              </AmazonSearchLink>{" "}
              at the reading chair and under-cabinet strips in the kitchen
              outperform gadgets costing ten times more.
            </li>
            <li>
              <strong>Magnifiers, matched to the task:</strong> a{" "}
              <AmazonSearchLink query="lighted handheld magnifier LED">
                lighted handheld magnifier
              </AmazonSearchLink>{" "}
              for price tags and pill bottles; a page-size stand magnifier
              for reading; a{" "}
              <AmazonSearchLink query="digital video magnifier low vision">
                digital video magnifier
              </AmazonSearchLink>{" "}
              when optical ones stop being enough.
            </li>
            <li>
              <strong>Contrast beats memory:</strong> dark switch plates on
              light walls, contrasting tape on stair edges, a black mug for
              milky tea and a white one for coffee, bump dots on the
              microwave's start button.
            </li>
            <li>
              <strong>The phone already in their pocket</strong> has a
              magnifier, voice assistant, and text-to-speech built in; a
              grandchild-led setup session is worth any gadget on this
              page.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The supports nobody tells families about",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>CNIB</strong> (cnib.ca, 1-800-563-2642) serves anyone
              with vision loss, not only blindness: independent living
              skills, technology training, peer support, and practical
              home visits. Free. Referrals can come from anyone, including
              self-referral.
            </li>
            <li>
              <strong>Vision Loss Rehabilitation Ontario</strong> provides
              clinical low-vision rehab (often physician-referred): reading
              strategies, mobility training with or without a white cane,
              home safety adaptations.
            </li>
            <li>
              <strong>The CRA's Disability Tax Credit</strong> applies to
              significant vision impairment, unlocks other credits, and can
              be claimed retroactively; see{" "}
              <Link
                to="/help/$category/$article"
                params={{ category: "legal-financial", article: "paying-for-care" }}
                className="text-primary underline"
              >
                Paying for Care
              </Link>
              .
            </li>
            <li>
              <strong>Libraries</strong> carry large-print collections and
              free access to audiobook services, and the CELA library
              (Centre for Equitable Library Access) mails accessible-format
              books to Canadians with print disabilities at no cost.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Vision, falls, and driving: the two safety intersections",
      body: (
        <>
          <p>
            Two places vision quietly becomes a different problem. First,
            falls: vision loss roughly doubles fall risk, and the fixes are
            the lighting and contrast changes in our{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "medical-alert-safety",
                article: "fall-proofing-the-home",
              }}
              className="text-primary underline"
            >
              fall-proofing guide
            </Link>
            , done with vision specifically in mind. Second, driving:
            Ontario's vision standard for a licence includes acuity and
            visual field minimums, and some eye conditions trigger
            mandatory reporting. If an optometrist raises driving, take it
            as the beginning of the planning in our{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "transportation", article: "when-driving-ends" }}
              className="text-primary underline"
            >
              driving guide
            </Link>
            , not as an insult to fight.
          </p>
        </>
      ),
    },
  ],
};
