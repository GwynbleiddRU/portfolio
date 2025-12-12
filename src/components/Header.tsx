import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass" : "py-5 bg-transparent"}`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isProjectPage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="mr-2 animate-fade-in"
              aria-label="Back to home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
          )}
          <a
            href="/portfolio/"
            className="hover:opacity-80 transition-opacity"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-medium tracking-tight">
                {t("websiteName")}
              </span>
              <span className="text-sm font-medium text-muted-foreground animate-fade-in">
                {t("hero.title")}
              </span>
            </div>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex space-x-2 border border-gray-300 dark:border-gray-600 rounded-full p-1">
            <button
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${i18n.language === "en" ? "bg-primary text-white dark:text-gray-600" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${i18n.language === "ru" ? "bg-primary text-white dark:text-gray-600" : "text-gray-600 dark:text-gray-300"}`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="relative w-9 h-9 rounded-full overflow-hidden"
          >
            <span className="sr-only">Toggle theme</span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: theme === "light" ? 0 : 1 }}>
              <Sun className="h-5 w-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: theme === "light" ? 1 : 0 }}>
              <Moon className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
