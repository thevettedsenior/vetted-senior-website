import { ExternalLink } from "lucide-react";
import { REVIEWED, SOURCES } from "@/lib/journeys";
export function SourceNote({
  sources,
  reviewed = REVIEWED,
}: {
  sources: (keyof typeof SOURCES)[];
  reviewed?: string;
}) {
  return (
    <div className="tvs-source-note">
      <p>
        <strong>Follow the sources.</strong> Source pages checked {reviewed}.
        This is navigation guidance, not a clinical assessment.
      </p>
      <ul>
        {sources.map((key) => (
          <li key={key}>
            <a href={SOURCES[key].url} target="_blank" rel="noreferrer">
              {SOURCES[key].name}
              <ExternalLink size={12} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
