import { portfolio } from "../data/portfolio";

export function Footer() {
  const footerLinks = [
    portfolio.links.github && { label: "GitHub", href: portfolio.links.github },
    portfolio.links.linkedin && { label: "LinkedIn", href: portfolio.links.linkedin },
    portfolio.links.email && {
      label: portfolio.links.email,
      href: `mailto:${portfolio.links.email}`,
    },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <a className="site-brand site-brand--footer" href="#top" aria-label="Back to top">
          <span className="site-brand__symbol" aria-hidden="true">
            {portfolio.name ? portfolio.name.charAt(0).toUpperCase() : "P"}
          </span>
          <span>{portfolio.name || "Portfolio"}</span>
        </a>
        <p>{portfolio.professionalTitle}</p>
      </div>
      {footerLinks.length > 0 && (
        <nav className="site-footer__links" aria-label="Footer contact links">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
      <div className="site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {portfolio.name || "Portfolio"}. All rights reserved.
        </p>
        <a className="footer-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
