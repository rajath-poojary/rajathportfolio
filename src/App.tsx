import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { codingProfilesWithDetails, portfolio } from "./data/portfolio";
import { Hero } from "./sections/Hero";
import {
  AboutSection,
  AchievementsSection,
  CertificationsSection,
  CodingSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from "./sections/PortfolioSections";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <div className="page-content">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          {portfolio.experience.length > 0 && <ExperienceSection />}
          {codingProfilesWithDetails.length > 0 && <CodingSection />}
          {portfolio.education.length > 0 && <EducationSection />}
          {portfolio.achievements.length > 0 && <AchievementsSection />}
          {portfolio.certifications.length > 0 && <CertificationsSection />}
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
