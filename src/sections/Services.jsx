
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

import {
  FiMonitor,
  FiCode,
  FiRefreshCw,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    key: "website",
    icon: <FiMonitor />,
    path: "/services/website-development",
  },
  {
    number: "02",
    key: "applications",
    icon: <FiCode />,
    path: "/services/web-applications",
  },
  {
    number: "03",
    key: "redesign",
    icon: <FiRefreshCw />,
    path: "/services/website-redesign",
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <section className="services section-padding" id="services">
      <Reveal>
        <div className="section-heading">
          <p className="section-label">{t("services.eyebrow")}</p>
          <h2>{t("services.title")}</h2>
          <p>{t("services.description")}</p>
        </div>
      </Reveal>

      <div className="services-grid">
        {services.map((service) => (
          <Reveal key={service.number}>
            <article className="service-card">
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <h3>{t(`services.items.${service.key}.title`)}</h3>

              <p>{t(`services.items.${service.key}.description`)}</p>

              <Link to={service.path} className="service-link">
                {t("services.learnMore")} <FiArrowUpRight />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Services;
