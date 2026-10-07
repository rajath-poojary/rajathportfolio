import type { ExperienceEntry } from "../data/portfolio";

interface ExperienceCardProps {
  entry: ExperienceEntry;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <div className="experience-card__meta">
        <span className="experience-card__type">{entry.type}</span>
        {entry.date && <span className="experience-card__date">{entry.date}</span>}
      </div>
      <div className="experience-card__content">
        <h3>{entry.title}</h3>
        {entry.organization && (
          <p className="experience-card__organization">{entry.organization}</p>
        )}
        <p className="experience-card__summary">{entry.summary}</p>
        {entry.contribution && (
          <div className="experience-card__contribution">
            <h4>My contribution</h4>
            <p>{entry.contribution}</p>
          </div>
        )}
      </div>
    </article>
  );
}
