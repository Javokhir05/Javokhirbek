
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiMessageCircle,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

import Reveal from "../components/Reveal";

function ServicePage({ serviceKey }) {
  const { t } = useTranslation();

  const page = `servicePages.${serviceKey}`;

  const serviceNumber = {
    website: "01",
    applications: "02",
    redesign: "03",
  };

  const number = serviceNumber[serviceKey];

  if (!number) {
    return (
      <div className="service-not-found">
        {t("notFound.title")}
      </div>
    );
  }

  const features = t(`${page}.features`, {
    returnObjects: true,
  });

  const technologies = t(`${page}.technologies`, {
    returnObjects: true,
  });

  const process = t(`${page}.process`, {
    returnObjects: true,
  });

  const deliverables = t(`${page}.deliverables`, {
    returnObjects: true,
  });

  return (
    <main className="service-page">
      {/* HERO */}
      <section className="service-hero section-padding">
        <Link to="/#services" className="service-back">
          <FiArrowLeft />
          {t("servicePages.common.back")}
        </Link>

        <Reveal>
          <div className="service-hero-content">
            <span className="service-page-number">
              SERVICE / {number}
            </span>

            <h1>{t(`${page}.title`)}</h1>

            <h2>{t(`${page}.subtitle`)}</h2>

            <p>{t(`${page}.description`)}</p>

            <a href="/#contact" className="btn-primary">
              {t("servicePages.common.contact")}
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>

        <div className="service-hero-decoration">
          <span>{number}</span>
          <FiCode />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="service-overview section-padding">
        <Reveal>
          <div className="service-section-heading">
            <p className="section-label">
              {t("servicePages.common.overview")}
            </p>

            <h2>{t(`${page}.title`)}</h2>
          </div>

          <p className="service-overview-text">
            {t(`${page}.overview`)}
          </p>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section className="service-features-section section-padding">
        <Reveal>
          <div className="service-section-heading">
            <p className="section-label">
              {t("servicePages.common.features")}
            </p>

            <h2>{t(`${page}.title`)}</h2>
          </div>
        </Reveal>

        <div className="service-detail-grid">
          {features.map((feature, index) => (
            <Reveal key={index}>
              <article className="service-detail-card">
                <span className="service-detail-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FiCheck className="service-detail-check" />

                <h3>{feature}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="service-tech-section section-padding">
        <Reveal>
          <div className="service-section-heading">
            <p className="section-label">
              {t("servicePages.common.technologies")}
            </p>

            <h2>{t("servicePages.common.technologies")}</h2>

            <p>
              {t("skills.levelNote")}
            </p>
          </div>

          <div className="service-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>
                <FiCode />
                {technology}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="service-process-section section-padding">
        <Reveal>
          <div className="service-section-heading">
            <p className="section-label">
              {t("servicePages.common.process")}
            </p>

            <h2>{t("servicePages.common.process")}</h2>

            <p>
              {t("services.description")}
            </p>
          </div>
        </Reveal>

        <div className="service-process-list">
          {process.map((step, index) => (
            <Reveal key={index}>
              <article className="service-process-item">
                <span className="service-process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <FiArrowUpRight className="process-arrow" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="service-deliverables-section section-padding">
        <Reveal>
          <div className="service-deliverables-content">
            <div className="service-section-heading">
              <p className="section-label">
                {t("servicePages.common.deliverables")}
              </p>

              <h2>
                {t("servicePages.common.deliverables")}
              </h2>
            </div>

            <p className="service-deliverables-intro">
              {t(`${page}.description`)}
            </p>

            <div className="service-deliverables-list">
              {deliverables.map((item, index) => (
                <div key={index}>
                  <FiCheck />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section
        className="service-cta section-padding"
        id="service-contact"
      >
        <Reveal>
          <div className="service-cta-content">
            <div className="service-cta-icon">
              <FiMessageCircle />
            </div>

            <p className="section-label">
              {t("contact.eyebrow")}
            </p>

            <h2>
              {t("contact.title")}
            </h2>

            <p>
              {t("contact.description")}
            </p>

            <a href="/#contact" className="btn-primary">
              {t("servicePages.common.contact")}
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default ServicePage;
