import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page } from "@/components/SiteShell";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our approach to trust | The Vetted Senior" },
      {
        name: "description",
        content:
          "Clear sources, transparent costs, and careful distinctions between public resources, verified facts and deeper provider vetting.",
      },
    ],
  }),
  component: About,
});
function About() {
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <p className="tvs-kicker">Our approach</p>
          <h1>
            Trust should come
            <br />
            with the details.
          </h1>
          <p>
            The Vetted Senior helps Ontario families figure out what to do next
            when an ageing parent’s needs change. Clear next steps. Realistic
            cost planning. Sources you can follow. Local help when you need it.
          </p>
        </div>
        <div className="tvs-trust-tiers">
          {[
            [
              "01",
              "Public & official resources",
              "Original sources such as Ontario Health atHome, government programs and community organizations. A source link and review date tell you where the information comes from. This is not a private-provider endorsement.",
            ],
            [
              "02",
              "Verified provider facts",
              "Specific facts with evidence: service area, price basis, minimum hours, languages or regulatory records. Verification must say which fact was checked, against what source and when. This layer grows as records meet that standard.",
            ],
            [
              "03",
              "Deeper TVS vetting",
              "A smaller, distinct level requiring documented deeper review. A website, a public listing or an attractive badge cannot establish that a provider has passed this process. Evidence and the scope of review must support the label.",
            ],
          ].map(([n, title, body]) => (
            <section key={n} className="tvs-trust-tier">
              <span className="tvs-chapter">{n}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        <div className="tvs-page-layout">
          <div className="tvs-prose">
            <h2>Your parent stays at the centre.</h2>
            <p>
              We write for the person organising and researching support. That
              does not move decisions away from your parent. Their preferences,
              consent, language, culture and day-to-day priorities belong in
              every conversation.
            </p>
            <h2>A source is a starting point, not a guarantee.</h2>
            <p>
              We link to the original service or authority. Dates on the new
              navigation guides describe when source pages were checked; they
              are not clinical-review dates. Services, eligibility, prices and
              availability can change. Confirm them before relying on a plan.
            </p>
            <h2>The numbers should show their working.</h2>
            <p>
              Our cost planner uses the hours and quotes you enter. Illustrative
              figures are labelled. We do not turn sample rates into Ontario
              market averages or assume anyone is entitled to a particular
              amount of publicly funded care.
            </p>
            <h2>Useful information comes before a commercial decision.</h2>
            <p>
              Families can read the guides and use the planning tools without an
              account. Guidance on paying for care is educational. The planning
              tools do not send your details to a business or sign you up for a
              sales call.
            </p>
            <p>
              <Link to="/disclosure">
                Read the editorial and financial disclosure
              </Link>
              .
            </p>
            <h2>Tell us when something has changed.</h2>
            <p>
              A clear correction is more useful than a vague promise. If you
              find outdated service details, please send the page and the source
              that needs checking.
            </p>
            <Link to="/contact" className="tvs-text-link">
              Contact The Vetted Senior
              <ArrowRight size={17} />
            </Link>
          </div>
          <aside className="tvs-aside">
            <p className="tvs-kicker">The human behind the work</p>
            <img
              src="/images/ragini-founder.jpg"
              alt="Ragini, founder of The Vetted Senior"
              width="400"
              height="480"
              loading="lazy"
              style={{
                width: "100%",
                maxHeight: "16rem",
                objectFit: "cover",
                marginTop: "1rem",
              }}
            />
            <h2>Meet Ragini.</h2>
            <p>
              A personal project built around a practical question: how can
              families find a clearer way through?
            </p>
            <Link to="/founder" className="tvs-text-link">
              Read the founder’s story
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </div>
    </Page>
  );
}
