import { Project } from "@/lib/projectData";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Add a staggered animation delay based on index
  const getAnimationDelay = () => {
    return `${100 + index * 50}ms`;
  };

  return (
    <div
      ref={cardRef}
      className="animate-scale-in h-full"
      style={{ animationDelay: getAnimationDelay() }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group h-full block overflow-hidden rounded-xl relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 opacity-80 transition-opacity duration-300" />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Content container */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-3 transition-transform duration-500" style={{
            transform: hovered ? "translateY(0)" : "translateY(20px)",
            opacity: hovered ? 1 : 0,
          }}>
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm text-white/90 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className="text-xs font-medium py-1 px-2 rounded-full bg-black/30 backdrop-blur-sm text-white/90 border border-white/10"
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          {/* Title */}
          <h3
            className="text-xl font-medium text-white mb-2 transition-transform duration-300"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(10px)",
            }}
          >
            {t(project.title)}
          </h3>
          {/* Description */}
          <p
            className="text-sm text-white/80 line-clamp-2 transition-all duration-500"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(20px)",
              opacity: hovered ? 1 : 0,
              maxHeight: hovered ? "3rem" : "0",
            }}
          >
            {t(project.shortDescription)}
          </p>
        </div>
        {/* View project overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          <span className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
            View Project
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;