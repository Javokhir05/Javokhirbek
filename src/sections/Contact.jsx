
import {
  FiMail,
  FiMapPin,
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

function Contact() {
  const { t } = useTranslation();
  const email = "roziboyevjavokhir045@gmail.com";

  return (
    <section className="contact section-padding" id="contact">
      <Reveal>
        <div className="section-heading">
          <p className="section-label">{t("contact.eyebrow")}</p>

          <h2>{t("contact.title")}</h2>

          <p className="section-description">
            {t("contact.description")}
          </p>
        </div>
      </Reveal>

      <div className="contact-content">
        <Reveal>
          <div className="contact-info">
            <h3>{t("contact.conversationTitle")}</h3>

            <p>{t("contact.conversationDescription")}</p>

            <a className="contact-item" href={`mailto:${email}`}>
              <span className="contact-icon">
                <FiMail />
              </span>

              <span>
                <small>{t("contact.emailLabel")}</small>
                {email}
              </span>

              <FiArrowUpRight className="contact-arrow" />
            </a>

            <div className="contact-item">
              <span className="contact-icon">
                <FiMapPin />
              </span>

              <span>
                <small>{t("contact.locationLabel")}</small>
                {t("contact.location")}
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Javokhir05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/javokhirbek-ruziboev-b89424306/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01e9c82191ddc38206"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              >
                <SiUpwork />
              </a>

              <a
                href="https://t.me/mirzaolimov1ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>

              <a
                href="https://www.instagram.com/mirzaolimovic_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-message">
            <span className="contact-code-label">
              {t("contact.messageLabel")}
            </span>

            <h3>{t("contact.messageTitle")}</h3>

            <p>{t("contact.messageDescription")}</p>

            <a href={`mailto:${email}`} className="btn-primary">
              {t("contact.sendEmail")} <FiArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
