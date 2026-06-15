import { Project } from "@/lib/projectData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();

  const getAnimationDelay = () => `${100 + index * 50}ms`;
  const variant = (index % 4) + 1;

  return (
    <div
      className={`project-card project-card--v${variant} animate-scale-in`}
      style={{ animationDelay: getAnimationDelay() }}
    >
      <Link
        to={`/project/${project.id}`}
        className="project-card__link"
      >
        <div className="project-card__pattern" aria-hidden="true" />

        <div className="project-card__topline">
          <span className="project-card__index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="project-card__tech">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="project-card__tech-tag">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="project-card__tech-tag">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="project-card__content">
          <h3 className="project-card__title">{t(project.title)}</h3>
          <p className="project-card__desc">{t(project.shortDescription)}</p>
        </div>

        <div className="project-card__cta">
          <span>View Project</span>
          <span aria-hidden="true">-&gt;</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
