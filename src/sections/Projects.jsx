
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects section-padding" id="projects">
      <Reveal>
        <div className="section-heading">
          <p className="section-label">{t("projects.eyebrow")}</p>

          <h2>
            {t("projects.title")}
          </h2>

          <p className="section-description">
            {t("projects.description")}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
