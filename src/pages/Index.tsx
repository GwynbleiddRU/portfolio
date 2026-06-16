import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portraitImage from "../assets/images/portrait.jpeg";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

type LanguageEntry = {
  level: string;
  name: string;
};

const Index = () => {
  const { t } = useTranslation();
  const languages = t("about.languages", {
    returnObjects: true,
  }) as LanguageEntry[];

  return (
    <div className="page">
      <Header />

      <section className="section section--hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__orb hero__orb--one" aria-hidden="true" />
        <div className="hero__orb hero__orb--two" aria-hidden="true" />
        <div className="hero__content">
          <span className="hero__eyebrow">{t("hero.greeting")}</span>
          <h1 className="hero__name">{t("websiteName")}</h1>
          <div className="hero__tagline-row">
            <p className="hero__tagline">{t("hero.title")}</p>
            <a
              href="mailto:nosachev.george@mail.ru"
              className="hero__mail"
              aria-label={t("footer.contact")}
            >
              <Mail aria-hidden="true" />
            </a>
          </div>
          <p className="hero__description">{t("hero.description")}</p>

          <div className="hero__actions btn-group">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("buttons.viewWork")}
            </button>
            <a
              href="https://gwynbleiddru.github.io/my-brand/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              title="Book a project"
            >
              {t("buttons.bookProject")}
            </a>
            <a
              href="https://gwynbleiddru.github.io/cv-webpage/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              title="View CV"
            >
              {t("buttons.viewCV")}
            </a>
          </div>
        </div>

        <div className="hero__signature" aria-hidden="true">
          <span>100</span>
          <span>Proven quality</span>
        </div>
      </section>

      <section className="section section--about">
        <div className="about__card">
          <div className="about__body">
            <div
              className="about__portrait-frame"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={portraitImage}
                alt=""
                className="about__portrait-frame-image"
                loading="lazy"
                draggable={false}
              />
            </div>

            <div className="about__content">
              <span className="about__label">{t("about.title")}</span>
              <h2 className="about__headline">{t("about.description1")}</h2>
              <p className="about__text">{t("about.description2")}</p>
              <p className="about__text">{t("about.description3")}</p>

              <p className="about__languages">
                {languages.map((language, index) => (
                  <span key={language.name} className="about__language-item">
                    <span className="about__language-level">{language.level}</span>
                    <span className="about__language-name">{language.name}</span>
                    {index < languages.length - 1 && (
                      <span className="about__language-separator">,</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section section--projects">
        <header className="projects__header">
          <h2 className="projects__title">{t("projects.title")}</h2>
          <p className="projects__description">{t("projects.description")}</p>
        </header>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
