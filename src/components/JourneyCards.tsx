import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CornerDownRight } from "lucide-react";
import { JOURNEYS } from "@/lib/journeys";
export function JourneyCards() {
  return (
    <div className="tvs-journey-grid">
      {JOURNEYS.map((j) => (
        <Link
          key={j.slug}
          to="/situations/$slug"
          params={{ slug: j.slug }}
          className={`tvs-journey-card ${j.className}`}
        >
          <div className="tvs-card-top">
            <span className="tvs-chapter">{j.number}</span>
            <ArrowUpRight size={26} aria-hidden="true" />
          </div>
          <span className="tvs-kicker">{j.label}</span>
          <h3>{j.title}</h3>
          <p>{j.short}</p>
          <span className="tvs-card-end">
            <CornerDownRight size={17} aria-hidden="true" />
            {j.tag}
          </span>
        </Link>
      ))}
    </div>
  );
}
