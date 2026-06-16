import { useTranslation } from "react-i18next";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <button
        type="button"
        className="footer__scroll-top"
        onClick={scrollToTop}
        aria-label={t("footer.scrollToTop")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 11 12 4 19 11" />
          <path d="M5 19 12 12 19 19" />
        </svg>
      </button>
      <div className="footer__inner">
        <p className="footer__copyright">{t("footer.copyright")}</p>
        <nav className="footer__links" aria-label="Social links">
          <a href="https://t.me/dbops" className="footer__link" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://github.com/GwynbleiddRU" className="footer__link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/george-nosachev/" className="footer__link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:nosachev.george@mail.ru" className="footer__link">
            {t("footer.contact")}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
