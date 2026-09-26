import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Page } from "@/components/SiteShell";
import { JourneyCards } from "@/components/JourneyCards";
import { SITUATIONS } from "@/lib/directory-data";
import { JOURNEYS } from "@/lib/journeys";
export const Route = createFileRoute("/situations/")({
  head: () => ({
    meta: [
      { title: "Start with your situation | The Vetted Senior" },
      {
        name: "description",
        content:
          "Hospital to home, more help at home, or memory changes. Find practical next steps for your Ontario family.",
      },
    ],
  }),
  component: Situations,
});
function Situations() {
  const others = SITUATIONS.filter(
    (s) => s.phase === "live" && !JOURNEYS.some((j) => j.slug === s.slug),
  );
  return (
    <Page>
      <div className="tvs-wrap">
        <div className="tvs-page-intro">
          <p className="tvs-kicker">Start where you are</p>
          <h1>
            One situation.
            <br />A clearer way forward.
          </h1>
          <p>
            Pick the one that sounds like your family. You’ll find a short
            sequence of actions, useful questions and the Ontario services to
            start with.
          </p>
        </div>
        <JourneyCards />
        <section className="tvs-section">
          <div className="tvs-section-heading">
            <div>
              <p className="tvs-kicker">
                There’s room for the other questions, too
              </p>
              <h2>More family situations</h2>
            </div>
          </div>
          <div className="tvs-link-list">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/situations/$slug"
                params={{ slug: s.slug }}
              >
                {s.title}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="tvs-help-note">
            These additional guides are from our existing resource library. The
            three paths above contain the new Ontario navigation format.
          </p>
        </section>
      </div>
    </Page>
  );
}
