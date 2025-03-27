import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectData";
import Header from "@/components/Header";
import portraitImage from "../assets/images/portrait.jpeg";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col items-start max-w-3xl mx-auto">
          <span className="text-sm font-medium text-muted-foreground mb-4 animate-fade-in">
            {t("hero.title")}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 animate-slide-down">
            {t("hero.greeting")} <br /><br />
            {t("hero.description")}
          </h1>

          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring mt-8"
            >
              {t("buttons.viewWork")}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-sm font-medium text-muted-foreground mb-4 block">
              {t("about.title")}
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              {t("about.description1")}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t("about.description2")}
            </p>
            <p className="text-muted-foreground mb-6">
              {t("about.description3")}
            </p>
            <p className="text-muted-foreground">
              {t("about.languages")}
            </p>
          </div>
          <div className="w-full md:w-1/3 order-1 md:order-2 mb-8 md:mb-0 px-8 md:px-0">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${portraitImage})` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
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
