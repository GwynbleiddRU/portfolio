import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const isProjectPage = location.pathname.includes("/project/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : "header--top"}`}>
      <div className="header__inner">
        <div className="header__brand">
          {isProjectPage && (
            <button
              type="button"
              className="header__back animate-fade-in"
              onClick={() => navigate("/", { state: { restoreScroll: true } })}
              aria-label="Back to home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}
          <a href="/portfolio/" className="header__name">
            <span className="header__title">{t("websiteName")}</span>
            <span className="header__subtitle">{t("hero.title")}</span>
          </a>
        </div>

        <div className="header__actions">
          <div className="header__lang" role="group" aria-label="Language">
            <button
              type="button"
              className={`header__lang-btn ${i18n.language === "en" ? "header__lang-btn--active" : ""}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`header__lang-btn ${i18n.language === "ru" ? "header__lang-btn--active" : ""}`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>

          <button
            type="button"
            className="header__theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className="header__theme-icon"
              style={{ opacity: theme === "light" ? 0 : 1 }}
            >
              <Sun />
            </span>
            <span
              className="header__theme-icon"
              style={{ opacity: theme === "light" ? 1 : 0 }}
            >
              <Moon />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
