import { SiGithub, SiUpwork } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import profilePhoto from "../assets/profile.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          {t("hero.availability")}
        </div>

        <p className="hero-intro">{t("hero.intro")}</p>

        <h1>{t("hero.title")}</h1>

        <h2>{t("hero.role")}</h2>

        <p className="hero-description">{t("hero.description")}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            {t("hero.explore")} <FiArrowUpRight size={18} />
          </a>

          <a href="#contact" className="btn-secondary">
            {t("hero.talk")}
          </a>

          <a
            href="/Javokhirbek-Ruziboev-CV.pdf"
            className="btn-secondary"
            download
          >
            {t("hero.download")} <FiDownload size={18} />
          </a>
        </div>

        <div className="hero-bottom">
          <div className="hero-socials">
            <a
              href="https://github.com/Javokhir05"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/javokhirbek-ruziboev-b89424306/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={19} />
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

          <a href="#services" className="scroll-link">
            {t("hero.scroll")} <FiArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <img
            src={profilePhoto}
            alt="Portrait of Javokhirbek"
            className="hero-photo"
          />
        </div>

        <div className="engineering-animation">
          <div className="circuit-line circuit-line-one"></div>
          <div className="circuit-line circuit-line-two"></div>
          <div className="circuit-node node-one"></div>
          <div className="circuit-node node-two"></div>
          <div className="circuit-node node-three"></div>

          <span className="engineering-code code-one">&lt;code /&gt;</span>
          <span className="engineering-code code-two">{`{ }`}</span>
          <span className="engineering-code code-three">01</span>
        </div>

        <span className="hero-image-label">{t("hero.imageLabel")}</span>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <span>01</span>
        <div></div>
        <span>06</span>
      </div>
    </section>
  );
}

export default Hero;
