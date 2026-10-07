import type { ReactNode } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { CodingProfileCard } from "../components/CodingProfileCard";
import { ExperienceCard } from "../components/ExperienceCard";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { SkillCategoryCard } from "../components/SkillCategoryCard";
import { codingProfilesWithDetails, portfolio } from "../data/portfolio";

function EmptyState({ children }: { children: ReactNode }) {
  return <p className="empty-state">{children}</p>;
}

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="A little about me"
      title="Building a strong foundation."
      description="I’m a BTech Computer Science Engineering student interested in software development, data and machine learning, and building practical projects."
      className="section--about section--about-profile"
    >
      <article className="about-focus">
        <p className="about-focus__label">Current focus</p>
        <p className="about-focus__text">{portfolio.about.focus}</p>
        <div className="about-focus__divider" />
        <p className="about-focus__label">What drives me</p>
        <p className="about-focus__text">{portfolio.about.motivation}</p>
      </article>
      <ul className="about-interests" aria-label="Areas of interest">
        {portfolio.about.interests.map((interest, index) => (
          <li className="about-interest" key={interest}>
            <span className="about-interest__number" aria-hidden="true">
              0{index + 1}
            </span>
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="The toolkit"
      title="Skills & technologies"
      description="A selection of tools and technologies used in my project work."
    >
      {portfolio.skills.length ? (
        <div className="skill-grid">
          {portfolio.skills.map((category, index) => (
            <SkillCategoryCard category={category} index={index} key={category.name} />
          ))}
        </div>
      ) : (
        <EmptyState>Skills will be added here once confirmed.</EmptyState>
      )}
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured projects"
      description="The problems I’ve explored, what I built, and the details behind each project."
      className="section--projects"
    >
      {portfolio.projects.length > 0 ? (
        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <ProjectCard index={index} key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="projects-empty">
          <span className="projects-empty__index">FEATURED WORK</span>
          <p className="projects-empty__title">Your projects belong here.</p>
          <p className="projects-empty__hint">
            Add verified project details to the projects list in{" "}
            <code>src/data/portfolio.ts</code>. Each entry supports the problem, solution,
            technologies, features, contribution, repository, demo, and an optional screenshot.
          </p>
        </div>
      )}
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Beyond the classroom"
      title="Experience & technical activities"
      description="Team projects, events, and other technical experience."
    >
      {portfolio.experience.length > 0 ? (
        <div className="experience-list">
          {portfolio.experience.map((item) => (
            <ExperienceCard
              key={`${item.type}-${item.title}-${item.organization ?? ""}`}
              entry={item}
            />
          ))}
        </div>
      ) : (
        <EmptyState>
          Add verified internships, hackathons, open-source contributions, team projects, or
          technical activities to the experience list in <code>src/data/portfolio.ts</code>.
        </EmptyState>
      )}
    </Section>
  );
}

export function CodingSection() {
  return (
    <Section
      id="coding"
      eyebrow="Practice & problem solving"
      title="DSA & coding"
      description="Coding profiles and problem-solving progress."
      className="section--coding"
    >
      {codingProfilesWithDetails.length > 0 ? (
        <div className="coding-grid">
          {codingProfilesWithDetails.map((profile) => (
            <CodingProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>
      ) : (
        <EmptyState>Coding profiles can be linked here.</EmptyState>
      )}
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" eyebrow="The foundation" title="Education">
      {portfolio.education.length > 0 ? (
        <div className="record-list">
          {portfolio.education.map((item) => {
            const details = [
              item.graduationYear && `Graduation · ${item.graduationYear}`,
              item.cgpa && `CGPA · ${item.cgpa}`,
            ].filter(Boolean);

            return (
              <article className="record education-record" key={`${item.degree}-${item.college ?? ""}`}>
                <div>
                  <h3>{item.degree}</h3>
                  {item.college && <p>{item.college}</p>}
                  {details.length > 0 && <p>{details.join(" · ")}</p>}
                </div>
                {item.relevantInformation && (
                  <p className="record__details">{item.relevantInformation}</p>
                )}
              </article>
            );
          })}
        </div>
      ) : (
        <EmptyState>Education details will be added here.</EmptyState>
      )}
    </Section>
  );
}

export function AchievementsSection() {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements">
      {portfolio.achievements.length > 0 ? (
        <ul className="simple-list">
          {portfolio.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      ) : (
        <EmptyState>Verified achievements will appear here.</EmptyState>
      )}
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section id="certifications" eyebrow="Learning in action" title="Certifications">
      {portfolio.certifications.length > 0 ? (
        <ul className="simple-list">
          {portfolio.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      ) : (
        <EmptyState>Confirmed certifications will appear here.</EmptyState>
      )}
    </Section>
  );
}

export function ContactSection() {
  const contactLinks = [
    portfolio.links.email && {
      label: "Email",
      href: `mailto:${portfolio.links.email}`,
    },
    portfolio.links.github && { label: "GitHub", href: portfolio.links.github },
    portfolio.links.linkedin && { label: "LinkedIn", href: portfolio.links.linkedin },
    portfolio.links.resume && { label: "Resume", href: portfolio.links.resume },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <Section
      id="contact"
      eyebrow="Start a conversation"
      title="Let’s connect."
      description="Get in touch about software, data, or technical collaboration."
      className="section--contact"
    >
      {contactLinks.length > 0 ? (
        <div className="link-row">
          {contactLinks.map((link) => (
            <ButtonLink
              href={link.href}
              key={link.label}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              target={link.label === "Email" ? undefined : "_blank"}
              variant="primary"
            >
              {link.label} <span aria-hidden="true">↗</span>
            </ButtonLink>
          ))}
        </div>
      ) : (
        <p className="contact-note">Professional contact links will be available here.</p>
      )}
    </Section>
  );
}
