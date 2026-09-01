import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjectById } from "@/lib/projectData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MultiImageProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mounted, setMounted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const project = id ? getProjectById(id) : undefined;

  if (!project || !project.images) {
    return <Navigate to="/" replace />;
  }

  if (!mounted) return null;

  const activeImage = project.images[activeImageIndex];

  return (
    <div className="page">
      <Header />

      <section className="section section--project-hero animate-fade-in">
        <span className="project-detail__label">{t("projects.title")}</span>
        <h1 className="project-detail__title">{t(project.title)}</h1>
        <div className="tag-list">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--project-content section--project-content--multi-image">
        <div className="project-detail__layout project-detail__layout--multi-image">
          <div className="project-detail__overview animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="project-detail__overview-title">
              {t("projectDetail.overview")}
            </h2>
            {t(project.fullDescription)
              .split("\n")
              .map((paragraph, i) => (
                <p key={i} className="project-detail__paragraph">
                  {paragraph.trim()}
                </p>
              ))}
          </div>

          <aside
            className="project-detail__sidebar animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <h3 className="project-detail__sidebar-title">
              {t("projectDetail.details")}
            </h3>

            {project.liveUrl && (
              <div className="project-detail__detail">
                <h4 className="project-detail__detail-label">
                  {t("projectDetail.liveSite")}
                </h4>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__detail-link"
                >
                  {t("projectDetail.visitWebsite")}
                </a>
              </div>
            )}

            {project.demoUrl && (
              <div className="project-detail__detail">
                <h4 className="project-detail__detail-label">
                  {t("projectDetail.demo")}
                </h4>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__detail-link"
                >
                  {t("projectDetail.viewDemo")}
                </a>
              </div>
            )}

            {project.githubUrl && (
              <div className="project-detail__detail">
                <h4 className="project-detail__detail-label">
                  {t("projectDetail.codeRepository")}
                </h4>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail__detail-link"
                >
                  {t("projectDetail.viewOnGitHub")}
                </a>
              </div>
            )}

            <div className="project-detail__detail">
              <h4 className="project-detail__detail-label">
                {t("projectDetail.technologies")}
              </h4>
              <ul className="project-detail__tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div
          className="project-detail__gallery-block animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="project-detail__gallery-title">
            {t("projectDetail.moreAbout")}
          </h2>

          <div className="project-detail__carousel-panel">
            <div className="project-detail__carousel-media">
              <div
                className="project-detail__media-image"
                style={{
                  backgroundImage: `url(${activeImage.url})`,
                }}
              />
              {project.images.length > 1 && (
                <span className="project-detail__media-index">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(project.images.length).padStart(2, "0")}
                </span>
              )}
            </div>

            <div className="project-detail__carousel-footer">
              {activeImage.description && (
                <p
                  key={activeImageIndex}
                  className="project-detail__caption animate-fade-in"
                >
                  {t(activeImage.description)}
                </p>
              )}

              {project.images.length > 1 && (
                <div className="project-detail__gallery">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`project-detail__thumb ${
                        index === activeImageIndex
                          ? "project-detail__thumb--active"
                          : ""
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === activeImageIndex}
                    >
                      <div
                        className="project-detail__thumb-image"
                        style={{ backgroundImage: `url(${image.url})` }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MultiImageProjectDetail;
