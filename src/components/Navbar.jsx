
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { SiGithub, SiUpwork } from "react-icons/si";
import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

import { FiMenu, FiX } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { name: t("nav.home"), href: "/#home" },
    { name: t("nav.services"), href: "/#services" },
    { name: t("nav.projects"), href: "/#projects" },
    { name: t("nav.about"), href: "/#about" },
    { name: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <header className="navbar">
      <a
        href="/#home"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        JAVOKHIR<span>.</span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="nav-socials">
        <a
          href="https://github.com/Javokhir05"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <SiGithub size={19} />
        </a>

        <a
          href="https://www.linkedin.com/in/javokhirbek-ruziboev-b89424306/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={19} />
        </a>

        <a
          href="https://www.upwork.com/freelancers/~01e9c82191ddc38206"
          target="_blank"
          rel="noreferrer"
          aria-label="Upwork"
        >
          <SiUpwork />
        </a>

        <a
          href="https://t.me/mirzaolimov1ch"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram />
        </a>

        <a
          href="https://www.instagram.com/mirzaolimovic_/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <LanguageSwitcher />

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
