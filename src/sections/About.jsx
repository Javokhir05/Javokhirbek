
import { FiMapPin, FiCode, FiTarget } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about section-padding" id="about">
      <Reveal>
        <div className="about-content">
          <div className="section-heading">
            <p className="section-label">{t("about.eyebrow")}</p>
            <h2>{t("about.title")}</h2>
          </div>

          <p className="about-description">{t("about.paragraph1")}</p>

          <p className="about-description">{t("about.paragraph2")}</p>

          <p className="about-description">{t("about.paragraph3")}</p>

          <div className="about-details">
            <div>
              <FiMapPin />
              <span>{t("about.locationValue")}</span>
            </div>

            <div>
              <FaGraduationCap />
              <span>{t("about.educationValue")}</span>
            </div>

            <div>
              <FiCode />
              <span>{t("about.focusValue")}</span>
            </div>

            <div>
              <FiTarget />
              <span>{t("about.statusValue")}</span>
            </div>
          </div>

          <a href="/#contact" className="btn-primary about-button">
            {t("about.button")}
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-visual">
          <div className="about-visual-inner">
            <span className="about-code-label">developer.js</span>

            <pre>
{`const developer = {
  name: "Javokhirbek",
  role: "${t("about.code.role")}",
  location: "${t("about.locationValue")}",
  focus: ["React", "JavaScript"],
  mindset: "${t("about.code.learning")}"
};`}
            </pre>

            <div className="about-visual-footer">
              <span className="status-dot"></span>
              {t("about.code.status")}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;
