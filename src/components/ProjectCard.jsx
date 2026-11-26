
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }) {
  const { t } = useTranslation();

  const projectKeys = {
    "01": "eschool",
    "02": "devconnect",
    "03": "fittrack",
    "04": "chatbot",
  };

  const key = projectKeys[project.number];

  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={`${project.name} preview`} />
      </div>

      <div className="project-card-content">
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>

          <span className="project-status">
            {t(
              `projects.status.${
                project.status === "Completed" ? "completed" : "development"
              }`
            )}
          </span>
        </div>

        <p className="project-category">
          {t(`projects.categories.${key}`)}
        </p>

        <h3>{project.name}</h3>

        <p className="project-description">
          {t(`projects.items.${key}.description`)}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={17} /> {t("projects.github")}
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.live")} <FiArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
