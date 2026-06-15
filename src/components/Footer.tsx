import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
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
