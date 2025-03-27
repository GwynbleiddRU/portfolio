import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjectById } from "@/lib/projectData";
import Header from "@/components/Header";

const MultiImageProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [mounted, setMounted] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const { t } = useTranslation();

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    useEffect(() => {
        setMounted(true);
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    const project = id ? getProjectById(id) : undefined;

    if (!project) {
        return <Navigate to="/" replace />;
    }

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto animate-fade-in">
                <span className="text-sm font-medium text-muted-foreground mb-4 block">
                    {t("projects.title")}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {t(project.title)}
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="text-sm py-1 px-3 rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Multiple Project Images Section */}
            <section className="py-8 px-6 max-w-7xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
                {/* Main Image Display */}
                <div className="rounded-xl overflow-hidden aspect-video mb-8">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.images[activeImageIndex].url})` }}
                    />
                </div>

                {/* Thumbnail Gallery */}
                {project.images.length > 1 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className={`aspect-video rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${index === activeImageIndex ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                                    }`}
                                onClick={() => setActiveImageIndex(index)}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${image.url})` }}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Image Description */}
                {project.images[activeImageIndex].description && (
                    <div className="mb-8 prose prose-lg dark:prose-invert max-w-none animate-fade-in">
                        <p className="text-muted-foreground whitespace-pre-line">
                            {t(project.images[activeImageIndex].description)}
                        </p>
                    </div>
                )}
            </section>

            {/* Project Content */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "200ms" }}>
                        <h2 className="text-2xl font-semibold mb-6">
                            {t("projectDetail.overview")}
                        </h2>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            {t(project.fullDescription).split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-4 text-muted-foreground">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                        <div className={isSafari ? "top-32" : "sticky top-32"}>
                            <h3 className="text-xl font-semibold mb-6">
                                {t("projectDetail.details")}
                            </h3>

                            <div className="space-y-6">
                                {project.liveUrl && (
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                            {t("projectDetail.liveSite")}
                                        </h4>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:no-underline"
                                        >
                                            {t("projectDetail.visitWebsite")}
                                        </a>
                                    </div>
                                )}

                                {project.demoUrl && (
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                            {t("projectDetail.demo")}
                                        </h4>
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:no-underline"
                                        >
                                            {t("projectDetail.viewDemo")}
                                        </a>
                                    </div>
                                )}

                                {project.githubUrl && (
                                    <div>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                            {t("projectDetail.codeRepository")}
                                        </h4>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline hover:no-underline"
                                        >
                                            {t("projectDetail.viewOnGitHub")}
                                        </a>
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                        {t("projectDetail.technologies")}
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.technologies.map((tech, i) => (
                                            <li key={i} className="text-sm">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
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
                </div>
            </footer>
        </div>
    );
};

export default MultiImageProjectDetail;