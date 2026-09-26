import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { JourneyCards } from "@/components/JourneyCards";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Vetted Senior | A clearer next step for your family" },
      {
        name: "description",
        content:
          "Practical Ontario guidance for adult children helping ageing parents. Start with your situation, plan care costs and find local help.",
      },
    ],
  }),
  component: Home,
});
function Home() {
  return (
    <Page>
      <section className="tvs-home-hero tvs-wrap">
        <div className="tvs-hero-copy">
          <p className="tvs-kicker">
            <span className="tvs-dot" /> A field guide for this chapter of life
          </p>
          <h1>
            When things change,
            <br />
            find your <em>next step.</em>
          </h1>
          <p className="tvs-hero-intro">
            Helping an ageing parent can feel like a lot.
            <br className="desktop-break" /> Let’s make what comes next a little
            clearer.
          </p>
          <a className="tvs-button" href="#start-here">
            What’s happening in your family?
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <p className="tvs-hero-footnote">
            Ontario guidance. Practical tools. Room to breathe.
          </p>
        </div>
        <figure className="tvs-hero-image">
          <img
            src="/images/situations/staying-at-home.jpeg"
            alt="An older woman making tea in her own kitchen"
            width="1920"
            height="1071"
            fetchPriority="high"
          />
          <figcaption>
            <span className="tvs-image-caption-rule" />
            More of the life they love.
            <br />A little help along the way.
          </figcaption>
          <span className="tvs-image-label">THE EVERYDAY MATTERS</span>
        </figure>
      </section>
      <section id="start-here" className="tvs-section tvs-wrap tvs-start">
        <div className="tvs-section-heading">
          <div>
            <p className="tvs-kicker">01 / Start where you are</p>
            <h2>What brought you here?</h2>
          </div>
          <p>
            You don’t need to know the system.
            <br />
            Just start with what’s happening.
          </p>
        </div>
        <JourneyCards />
        <div className="tvs-under-cards">
          <span>Something else on your mind?</span>
          <Link to="/situations">
            Explore all situations
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="tvs-cost-band">
        <div className="tvs-wrap tvs-cost-feature">
          <div className="tvs-cost-copy">
            <p className="tvs-kicker">02 / Make the numbers make sense</p>
            <h2>
              A clearer picture
              <br />
              of the cost of care.
            </h2>
            <p>
              What can public services cover? What can family realistically take
              on? What’s left to arrange?
            </p>
            <p>
              Put your hours and a provider’s quote together. See the gap before
              making a commitment.
            </p>
            <Link to="/care-costs" className="tvs-button light">
              Work out your care budget
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <div className="tvs-cost-paper">
            <div className="tvs-paper-head">
              <span className="tvs-kicker">YOUR CARE PICTURE</span>
              <span className="tvs-paper-number">01—03</span>
            </div>
            <div className="tvs-paper-row">
              <span>01</span>
              <div>
                <h3>What’s needed</h3>
                <p>Support with the everyday</p>
              </div>
              <span>+</span>
            </div>
            <div className="tvs-paper-row">
              <span>02</span>
              <div>
                <h3>What’s already covered</h3>
                <p>Confirmed public care & family help</p>
              </div>
              <span>−</span>
            </div>
            <div className="tvs-paper-row">
              <span>03</span>
              <div>
                <h3>What’s left to arrange</h3>
                <p>The hours and cost to plan for</p>
              </div>
              <span>=</span>
            </div>
            <p className="tvs-paper-note">
              <Check size={16} aria-hidden="true" />
              Your numbers. Clear assumptions. No sign-up.
            </p>
          </div>
        </div>
      </section>
      <section className="tvs-section tvs-wrap tvs-local-feature">
        <div>
          <p className="tvs-kicker">03 / Find the right people</p>
          <h2>
            Good help starts
            <br />
            with the right door.
          </h2>
          <p>
            Start with Ontario’s public and community services. Explore local
            providers when you know what kind of help you need.
          </p>
          <Link to="/local-help" className="tvs-text-link">
            Find local help
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <div className="tvs-resource-preview">
          <Link to="/local-help">
            <span className="tvs-resource-icon">
              <MapPin size={22} />
            </span>
            <div>
              <span className="tvs-kicker">HOME & COMMUNITY CARE</span>
              <h3>Ontario Health atHome</h3>
              <p>Your starting point for a care assessment</p>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link to="/local-help">
            <span className="tvs-resource-icon">
              <MapPin size={22} />
            </span>
            <div>
              <span className="tvs-kicker">SERVICES NEAR YOU</span>
              <h3>211 Ontario</h3>
              <p>Community support, connected to your needs</p>
            </div>
            <ArrowUpRight aria-hidden="true" />
          </Link>
          <p>Official resources first. Provider facts clearly labelled.</p>
        </div>
      </section>
      <section className="tvs-trust-section">
        <div className="tvs-wrap tvs-trust-inner">
          <span className="tvs-trust-mark" aria-hidden="true">
            “
          </span>
          <div>
            <p className="tvs-kicker">Our promise to your family</p>
            <h2>Clarity, without the pressure.</h2>
            <p>
              We’ll show you where information comes from, what we’ve checked,
              and what still needs a conversation. Your parent’s wishes belong
              at the centre.
            </p>
            <Link to="/about" className="tvs-text-link">
              How we earn your trust
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="tvs-trust-list">
            <span>
              <Check size={18} />
              Sources you can follow
            </span>
            <span>
              <Check size={18} />
              Costs with context
            </span>
            <span>
              <Check size={18} />
              Choices that stay yours
            </span>
          </div>
        </div>
      </section>
    </Page>
  );
}
