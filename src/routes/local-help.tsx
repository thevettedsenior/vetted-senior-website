import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { REVIEWED, SOURCES } from "@/lib/journeys";
const services = [
  {
    number: "01",
    role: "HOME & COMMUNITY CARE",
    name: "Ontario Health atHome",
    body: "Ask about a care assessment, support after a hospital stay, or changes to existing services. Eligibility and available support are confirmed by the care coordinator.",
    url: SOURCES.athome.url,
    phone: "1-833-515-1234",
    tel: "18335151234",
    type: "Public service",
  },
  {
    number: "02",
    role: "PRACTICAL SUPPORT NEARBY",
    name: "211 Ontario",
    body: "Find the community services that fit your location and situation, including practical and social supports. Confirm program fees and eligibility with the service.",
    url: SOURCES.community.url,
    phone: "211",
    tel: "211",
    type: "Community resource",
  },
  {
    number: "03",
    role: "MEMORY & FAMILY SUPPORT",
    name: "Alzheimer Society · First Link",
    body: "Connect with information and community support for people living with dementia and their families. Ask your care team or local Alzheimer Society about the next step.",
    url: SOURCES.memory.url,
    phone: null,
    tel: null,
    type: "Community resource",
  },
  {
    number: "04",
    role: "NON-EMERGENCY HEALTH QUESTIONS",
    name: "Health811",
    body: "Speak with a registered nurse for non-emergency health advice. If there is an emergency, call 911.",
    url: SOURCES.health811.url,
    phone: "811",
    tel: "811",
    type: "Public service",
  },
];
export const Route = createFileRoute("/local-help")({
  head: () => ({
    meta: [
      { title: "Local help in Ontario | The Vetted Senior" },
      {
        name: "description",
        content:
          "Start with Ontario Health atHome, 211 and community support. Explore existing local provider records when you know the help you need.",
      },
    ],
  }),
  component: LocalHelp,
});
function LocalHelp() {
  const [city, setCity] = useState("");
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <p className="tvs-kicker">The right help, in the right order</p>
          <h1>
            Start with
            <br />
            the right door.
          </h1>
          <p>
            There’s a lot of help to navigate. Start with these Ontario
            services, then look for local providers to fill the specific gaps in
            your plan.
          </p>
        </div>
        <div className="tvs-page-layout">
          <div className="tvs-official-list">
            {services.map((s) => (
              <article key={s.number} className="tvs-official-row">
                <span className="tvs-step-number">{s.number}</span>
                <div>
                  <p className="tvs-kicker">{s.role}</p>
                  <h2>{s.name}</h2>
                  <p>{s.body}</p>
                  <div className="tvs-resource-actions">
                    <a href={s.url} target="_blank" rel="noreferrer">
                      Visit original source
                      <ArrowUpRight size={16} />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    {s.tel && (
                      <a href={`tel:${s.tel}`}>
                        <Phone size={15} />
                        Call {s.phone}
                      </a>
                    )}
                  </div>
                  <p className="tvs-help-note">
                    Source checked {REVIEWED} · Ontario
                  </p>
                </div>
                <span className="tvs-evidence-tag">{s.type}</span>
              </article>
            ))}
          </div>
          <aside className="tvs-aside">
            <p className="tvs-kicker">When you know what you need</p>
            <h2>Explore local records.</h2>
            <p>
              Our existing service research is still here. Local coverage
              varies; a listing does not guarantee suitability or availability.
            </p>
            <div className="tvs-field">
              <label htmlFor="help-city">Look in</label>
              <select
                id="help-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">All Ontario records</option>
                <option>Toronto</option>
                <option>Mississauga</option>
                <option>Oshawa</option>
                <option>Whitby</option>
                <option>Ajax</option>
                <option>Pickering</option>
              </select>
            </div>
            <div className="tvs-actions">
              <Link
                to="/directory"
                search={{ province: "on", city: city || undefined }}
                className="tvs-button"
              >
                Explore service records
                <ArrowRight size={17} />
              </Link>
            </div>
            <hr />
            <p>
              <strong>Know what a label means.</strong> Official resources,
              verified provider facts and deeper TVS vetting are different
              evidence levels.
            </p>
            <Link to="/about" className="tvs-text-link">
              Read our approach
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </div>
    </Page>
  );
}
