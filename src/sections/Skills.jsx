
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    key: "frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Prisma", icon: <SiPrisma /> },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills section-padding" id="skills">
      <Reveal>
        <div className="section-heading">
          <p className="section-label">{t("skills.eyebrow")}</p>

          <h2>{t("skills.title")}</h2>

          <p className="section-description">
            {t("skills.description")}
          </p>
        </div>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <Reveal key={group.key}>
            <article className="skill-group">
              <h3>{t(`skills.categories.${group.key}`)}</h3>

              <p>{t("skills.levelNote")}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
