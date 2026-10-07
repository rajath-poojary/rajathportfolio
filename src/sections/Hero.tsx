import { ButtonLink } from "../components/ButtonLink";
import { portfolio } from "../data/portfolio";

export function Hero() {
  const socialLinks = [
    portfolio.links.github && { label: "GitHub", href: portfolio.links.github },
    portfolio.links.linkedin && { label: "LinkedIn", href: portfolio.links.linkedin },
    portfolio.links.email && {
      label: "Email",
      href: `mailto:${portfolio.links.email}`,
    },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className={`hero__content${portfolio.projects.length ? " hero__content--featured" : ""}`}>
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">{portfolio.professionalTitle}</p>
          <h1 id="hero-title">
            {portfolio.name ? (
              <>
                <span className="hero__greeting">Hello, I’m</span>
                <span>{portfolio.name}</span>
              </>
            ) : (
              <>
                Computer Science
                <br />
                <span>Engineering.</span>
              </>
            )}
          </h1>
          <p className="hero__intro">
            {portfolio.introduction ||
              "A collection of projects, learning, and work in computer science."}
          </p>
          <div className="hero__actions">
            <ButtonLink href="#projects" variant="primary">
              View Projects <span aria-hidden="true">↘</span>
            </ButtonLink>
            {portfolio.links.resume && (
              <ButtonLink href={portfolio.links.resume} download variant="secondary">
                Download Resume <span aria-hidden="true">↓</span>
              </ButtonLink>
            )}
          </div>
          {socialLinks.length > 0 && (
            <nav className="hero__socials" aria-label="Social and contact links">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  target={link.label === "Email" ? undefined : "_blank"}
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>
          )}
        </div>
        {portfolio.projects[0] && (
          <aside className="hero-project" aria-label="Featured project preview">
            <div className="hero-project__topline">
              <span>FEATURED PROJECT</span>
              <span aria-hidden="true">01</span>
            </div>
            <h2>{portfolio.projects[0].name}</h2>
            <p>{portfolio.projects[0].problemStatement}</p>
            <a href="#projects">
              Explore project <span aria-hidden="true">↘</span>
            </a>
          </aside>
        )}
      </div>
      <a className="hero__scroll" href="#about">
        <span className="hero__scroll-line" aria-hidden="true" />
        Explore portfolio
      </a>
      <div className="hero__index" aria-hidden="true">
        {portfolio.degree}
      </div>
    </section>
  );
}
