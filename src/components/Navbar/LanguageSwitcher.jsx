import { useTranslation } from 'react-i18next';
import { changeLanguage, SUPPORTED_LANGUAGES } from '../../i18n';
import styles from './Navbar.module.css';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.lang} role="group" aria-label={t('nav.langLabel')}>
      {SUPPORTED_LANGUAGES.map((code) => {
        const active = i18n.resolvedLanguage === code;
        return (
          <button
            key={code}
            type="button"
            className={`${styles.lang__btn} ${active ? styles['lang__btn--active'] : ''}`}
            aria-pressed={active}
            onClick={() => changeLanguage(code)}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
