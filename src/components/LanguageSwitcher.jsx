
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || "en";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("portfolio-language", language);
  };

  return (
    <div className="language-switcher" aria-label="Select language">
      {["en", "ru", "uz"].map((language) => (
        <button
          key={language}
          type="button"
          className={currentLanguage === language ? "active" : ""}
          onClick={() => changeLanguage(language)}
          aria-pressed={currentLanguage === language}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
