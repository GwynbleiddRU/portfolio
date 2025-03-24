
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projectData";
import Header from "@/components/Header";

import portraitImage from '../assets/images/portrait.jpeg';

const Index = () => {
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
            Fullstack developer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 animate-slide-down">
            Hi, I'm George Nosachev. <br /><br />
            I create clear infrastructure for client-server communication specializing on secure API endpoints
          </h1>

          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            I'm a developer specializing in creating exceptional digital experiences.
            Currently, I'm focused on exploring the opportunities of AI tools.
          </p>

          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-sm font-medium text-muted-foreground mb-4 block">
              About Me
            </span>

            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Experienced Fullstack developer with deep knowledge of software engineering and extensive hands-on experience developing full-stack applications.
            </h2>

            <p className="text-muted-foreground mb-6">
              I have extensive experience working with AI tools in development context with clear understanding of how good prompts should look like. Currently learning MCP for an even more native development process with AI.
            </p>

            <p className="text-muted-foreground mb-6">
              I am most interested in developing APIs and logic for highly loaded systems.
            </p>

            <p className="text-muted-foreground">
              English - C1, Spanish - A2, Russian - Native
            </p>
          </div>


          <div className="flex-1 md:flex-initial md:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${portraitImage})` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my recent work. Each project is unique and showcases different skills and technologies.
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
              © 2025 George Nosachev. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://t.me/dbops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Telegram
            </a>
            <a href="https://github.com/GwynbleiddRU" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/george-nosachev-8a9938326/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="mailto:nosachev.george@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
