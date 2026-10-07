import { useEffect, useRef, useState } from "react";
import { navigation, portfolio } from "../data/portfolio";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-22% 0px -68% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a
        className="site-brand"
        href="#top"
        aria-label="Go to top"
        onClick={() => setMenuOpen(false)}
      >
        <span className="site-brand__symbol" aria-hidden="true">
          {portfolio.name ? portfolio.name.charAt(0).toUpperCase() : "P"}
        </span>
        <span>{portfolio.name || "Portfolio"}</span>
      </a>
      <button
        ref={menuButtonRef}
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
      </button>
      <nav
        aria-label="Main navigation"
        className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
        id="primary-navigation"
      >
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
            aria-current={activeSection === item.href ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
