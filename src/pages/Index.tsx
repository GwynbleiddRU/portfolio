import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectData";
import Header from "@/components/Header";
import portraitImage from "../assets/images/portrait.jpeg";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [typedGreeting, setTypedGreeting] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const text = t("hero.greeting");
    setTypedGreeting("");

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedGreeting(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [t]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-4 px-6 md:pt-40 md:pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-start max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 animate-slide-down mr-4 ml-4">
            <span className="typewriter">
              {typedGreeting}
            </span>
            <br />
            <br />
            {t("hero.description")}
          </h1>

        <div
          className="mt-8 w-full pl-4 pr-4 animate-slide-up flex flex-col items-center space-y-1 md:mt-8 md:flex-row md:items-start md:space-y-0 md:space-x-1 md:w-auto"
          style={{ animationDelay: "200ms" }}
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex h-11 md:mr-4 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:w-auto"
          >
            {t("buttons.viewWork")}
          </button>
          <a
            href="https://gwynbleiddru.github.io/cv-webpage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:w-auto"
            title="View CV"
          >
            {t("buttons.viewCV")}
          </a>
        </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:py-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${portraitImage})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/55" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" aria-hidden="true" />

          <div className="relative z-10 px-6 py-10 md:px-10 md:py-14 lg:px-16">
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground/90 mb-4 block">
              {t("about.title")}
            </span>

            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {t("about.description1")}
              </h2>
            </div>

            <div className="max-w-3xl space-y-5">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {t("about.description2")}
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {t("about.description3")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/40 max-w-2xl">
                {t("about.languages")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-4 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright")}
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://t.me/dbops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ★ Telegram
            </a>
            <a href="https://github.com/GwynbleiddRU" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/george-nosachev/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="mailto:nosachev.george@mail.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.contact")}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
