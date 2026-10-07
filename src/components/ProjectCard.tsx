import type { Project } from "../data/portfolio";
import { ButtonLink } from "./ButtonLink";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card" style={{ animationDelay: `${index * 90}ms` }}>
      {project.image && (
        <div className="project-card__image-wrap">
          <img
            alt={project.image.alt}
            className="project-card__image"
            decoding="async"
            height="675"
            loading="lazy"
            sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 560px"
            src={project.image.src}
            width="1200"
          />
        </div>
      )}
      <div className="project-card__body">
        <div className="project-card__topline">
          <span className="project-card__number">
            PROJECT / {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project-card__mark" aria-hidden="true">
            ↗
          </span>
        </div>
        <h3>{project.name}</h3>
        <div className="project-card__summary">
          <p className="project-card__label">The problem</p>
          <p className="project-card__description">{project.problemStatement}</p>
          <p className="project-card__label">What I built</p>
          <p className="project-card__description">{project.solution}</p>
        </div>
        {project.technologies.length > 0 && (
          <ul className="tag-list" aria-label={`${project.name} technologies`}>
            {project.technologies.map((technology) => (
              <li className="tag" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        )}
        <details className="project-card__details">
          <summary>
            <span>Project details</span>
            <span className="project-card__details-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="project-card__details-content">
            {project.features.length > 0 && (
              <div>
                <h4>Key features</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h4>My contribution</h4>
              <p>{project.contribution}</p>
            </div>
          </div>
        </details>
        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="project-card__links">
            {project.githubUrl && (
              <ButtonLink href={project.githubUrl} target="_blank">
                GitHub <span aria-hidden="true">↗</span>
              </ButtonLink>
            )}
            {project.liveDemoUrl && (
              <ButtonLink href={project.liveDemoUrl} target="_blank">
                Live demo <span aria-hidden="true">↗</span>
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
