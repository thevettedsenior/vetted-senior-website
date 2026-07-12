import { Link } from "@tanstack/react-router";
import type { ArticleContentMap } from "./types";

export const COMPANION_SOCIAL_ARTICLES: ArticleContentMap = {
  "loneliness-is-a-health-risk": [
    {
      heading: "The health claim, stated plainly",
      body: (
        <>
          <p>
            Chronic loneliness in older adults is associated with higher risks
            of heart disease, stroke, dementia, depression, and earlier death,
            at effect sizes researchers compare to smoking and obesity. Around a
            third of Canadian seniors report feeling lonely at least some of the
            time; for those living alone, more. This is not a soft issue that
            comes after the medical ones. It is a medical one.
          </p>
          <p>
            Families sense this but respond with guilt (visit more) or money
            (hire someone). Both help. But Canada also has an entire layer of
            programs built specifically for senior connection, most free or
            nearly free, most underused, and most invisible because they do not
            advertise. This guide is the inventory.
          </p>
        </>
      ),
    },
    {
      heading: "Seniors' centres and social clubs: the front door",
      body: (
        <>
          <p>
            Nearly every Ontario municipality has a seniors' centre or older
            adult centre: exercise classes, cards, crafts, lunches, trips, and
            the thing that actually matters, the same faces every week.
            Ontario's centres are organized under the Older Adult Centres'
            Association of Ontario (oacao.ca), and membership typically costs
            $20 to $60 a year, with individual programs a few dollars each.
          </p>
          <p>
            The honest obstacle is never the price; it is walking in the first
            time. Three things that work: go with them the first two or three
            visits (the goal is one familiar face, after which the centre takes
            over); start with an activity they already love rather than
            "socializing" in the abstract, because a euchre player joins a
            euchre table, not a friendship program; and treat the second visit
            as the real threshold, since first visits are awkward everywhere and
            the person who goes twice usually keeps going.
          </p>
        </>
      ),
    },
    {
      heading: "Adult day programs: connection plus care plus respite",
      body: (
        <>
          <p>
            Adult day programs are structured daytime programs (activities, a
            meal, gentle exercise, supervision) for seniors who need more
            support than a drop-in centre offers, including many designed
            specifically for dementia. In Ontario they are typically run by
            community agencies with provincial subsidy; families pay a daily fee
            in the range of $10 to $40, often income-adjusted, sometimes
            including transportation.
          </p>
          <p>
            Three problems solved at once: the senior gets a genuinely engaging
            day (well-run programs are lively places, and attendance often
            becomes the week's anchor), the family caregiver gets reliable hours
            off, and the transition is gentler than hiring a stranger into the
            house. Access in Ontario runs through Ontario Health atHome
            (310-2222) or directly through the agency; 211 lists what operates
            locally. Waitlists exist; apply before desperation, not after.
          </p>
          <p className="italic">
            If the caregiver's exhaustion is the acute problem, day programs are
            the single highest-value respite tool; the{" "}
            <Link
              to="/situations/$slug"
              params={{ slug: "caregiver-burnout" }}
              className="text-primary underline"
            >
              Caregiver Burnout guide
            </Link>{" "}
            builds the rest of the respite plan.
          </p>
        </>
      ),
    },
    {
      heading:
        "Friendly visiting, phone lines, and the intergenerational options",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Friendly visiting programs</strong> match a screened
              volunteer with a homebound senior for a weekly visit or walk.
              Free, run by community support agencies across Ontario, found
              through 211. The same agencies often run{" "}
              <strong>telephone reassurance</strong>: a scheduled friendly call
              that doubles as a safety check.
            </li>
            <li>
              <strong>A Friendly Voice</strong> (1-855-892-9992) is a phone line
              for Ontario seniors staffed by trained volunteers, for
              conversation, not crisis. For crisis support, 988 answers 24/7
              across Canada.
            </li>
            <li>
              <strong>Faith communities</strong> remain the most extensive
              visiting network in the country and visit lapsed members gladly;
              one phone call reactivates decades of belonging.
            </li>
            <li>
              <strong>Intergenerational programs</strong> (school pen-pal
              projects, "grandfriend" reading programs, university students
              housed with seniors) exist patchily but brilliantly; ask the local
              seniors' centre what runs nearby.
            </li>
            <li>
              <strong>Volunteering by the senior</strong> deserves its own line:
              the evidence on purpose and health is strong, and the senior who
              staffs the food bank table has social contact with a reason
              attached. Volunteer centres match by ability, including seated and
              from-home roles.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "Getting past 'I'm fine'",
      body: (
        <>
          <p>
            Almost no senior says "I am lonely." They say the days are long, or
            the neighbourhood has changed, or nothing at all. And the refusals
            ("I'm not a joiner," "those places are full of old people") are
            usually pride protecting itself, which deserves respect and gentle
            persistence rather than a spreadsheet of options. What works is
            specific and small: not "you should get out more" but "the centre on
            Elm has euchre Tuesdays at one; I'll drive you and stay the first
            time." One concrete offer, repeated kindly, beats ten brochures.
          </p>
          <p>
            And when mobility, hearing, or vision is what actually ended the
            social life, fix that first: the{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "transportation",
                article: "getting-to-appointments",
              }}
              className="text-primary underline"
            >
              rides plan
            </Link>{" "}
            and the{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "hearing-vision",
                article: "hearing-aids-without-overpaying",
              }}
              className="text-primary underline"
            >
              hearing guide
            </Link>{" "}
            are, in a real sense, loneliness interventions.
          </p>
        </>
      ),
    },
  ],

  "hiring-a-companion": [
    {
      heading: "What companion care is, and why it is underrated",
      body: (
        <>
          <p>
            A paid companion visits regularly to talk, play cards, walk, cook
            alongside, run errands together, and accompany appointments and
            outings. No personal care (bathing, dressing), no medical tasks; for
            those you want a{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "home-care", article: "homecare-care-types" }}
              className="text-primary underline"
            >
              PSW or nurse
            </Link>
            . What companions deliver is the thing this category's other guide
            establishes as a health intervention: reliable human connection,
            plus real respite for family, plus an extra set of attentive eyes on
            how someone is really doing.
          </p>
          <p>
            It is also the most flexible and least clinical way to introduce
            help into a resistant household. "Someone to drive you to the market
            and stay for tea" lands differently than "a caregiver," and many
            families deliberately start here.
          </p>
        </>
      ),
    },
    {
      heading: "What it costs, and the agency versus independent decision",
      body: (
        <>
          <p>
            In Ontario, companion care runs roughly{" "}
            <strong>$25 to $40 an hour through an agency</strong>, somewhat less
            hiring an independent person directly, usually with a two to four
            hour minimum per visit. The trade-off is the same one covered in
            depth in{" "}
            <Link
              to="/help/$category/$article"
              params={{ category: "home-care", article: "homecare-questions" }}
              className="text-primary underline"
            >
              our home care hiring guide
            </Link>
            : agencies cost more and bring screening, insurance, backup when
            someone is sick, and supervision; independents cost less and put
            those responsibilities on you, including the employment-law and tax
            side of being, effectively, an employer.
          </p>
          <p>
            One honest note specific to companionship: because the service is
            "spend time with a vulnerable person, often including errands and
            shopping," character screening matters more here than anywhere else
            in home services, not less. Vulnerable sector police checks,
            references actually called, and a family habit of keeping valuables
            and financial paperwork out of working areas are basic hygiene, not
            suspicion. Good companions expect all of it.
          </p>
        </>
      ),
    },
    {
      heading: "Finding the right person: fit is the product",
      body: (
        <>
          <p>
            With PSWs you hire skills; with companions you hire chemistry. A
            wonderful companion for one senior bores another. Interview with fit
            at the centre:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Ask the agency how they match, and whether you can meet the
              proposed companion before starting. (An agency that resists a
              meet-and-greet has answered a different, more important question.)
            </li>
            <li>
              Put the senior's actual interests in the request: cribbage,
              Portuguese, gardening, Blue Jays games. Agencies can only match
              what they know.
            </li>
            <li>
              Watch the first visits: does the companion talk with your parent
              or at them? Do they draw the person out or fill silence with their
              own chatter?
            </li>
            <li>
              Expect a trial period, and use it. Asking for a different match
              after three visits is normal and the request offends nobody
              professional.
            </li>
            <li>
              Ask what happens when the regular companion is away, because for
              an isolated senior the visit becoming unreliable hurts more than
              never starting.
            </li>
          </ul>
        </>
      ),
    },
    {
      heading: "The cheaper and free alternatives, honestly presented",
      body: (
        <>
          <p>
            Paid companionship is worth its price when the fit is right, but
            present the alternatives fairly before spending $600 a month:{" "}
            <strong>friendly visiting programs</strong> provide a weekly
            volunteer visit free; <strong>adult day programs</strong> deliver a
            whole social day with lunch for the price of one companion hour;{" "}
            <strong>seniors' centres</strong> offer the same faces weekly for
            $40 a year. The full inventory is in{" "}
            <Link
              to="/help/$category/$article"
              params={{
                category: "companion-social",
                article: "loneliness-is-a-health-risk",
              }}
              className="text-primary underline"
            >
              our community programs guide
            </Link>
            . The strongest setups combine them: a day program twice a week, a
            paid companion on Saturdays, family on Sundays. What matters is that
            the week has structure and faces in it, not which line item provided
            them.
          </p>
        </>
      ),
    },
    {
      heading: "Suggested next steps",
      body: (
        <>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Write down what a good week would look like for the person: which
              days need filling, and with what kind of activity.
            </li>
            <li>
              Call 211 and ask what free visiting programs and day programs
              serve the postal code; layer paid companionship on top of, not
              instead of, what is free.
            </li>
            <li>
              If hiring: decide agency versus independent using the home care
              guide's framework, and insist on vulnerable sector screening
              either way.
            </li>
            <li>
              Request a meet-and-greet, brief the companion on interests, and
              judge the match by whether your parent looks forward to the visits
              by week three.
            </li>
            <li>
              Reassess quarterly: as needs grow, companion visits often evolve
              into personal support; catching that transition early keeps care
              matched to reality.
            </li>
          </ol>
        </>
      ),
    },
  ],
};
