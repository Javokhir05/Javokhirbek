
import { FiArrowUp, FiGithub } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="logo">
          JAVOKHIR<span>.</span>
        </a>

        <p>Building ideas into digital experiences.</p>

        <a href="/#home" className="back-to-top">
          {t("footer.backToTop")} <FiArrowUp />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Javokhirbek. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/Javokhir05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>

          <a href="https://www.linkedin.com/in/javokhirbek-ruziboev-b89424306/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a href="https://www.upwork.com/freelancers/~01e9c82191ddc38206" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
            <SiUpwork />
          </a>

          <a href="https://t.me/mirzaolimov1ch" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram />
          </a>

          <a href="https://www.instagram.com/mirzaolimovic_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        <span>Designed & built with React.</span>
      </div>
    </footer>
  );
}

export default Footer;
