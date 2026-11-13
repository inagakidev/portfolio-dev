import { forwardRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { TbArrowUpRight } from 'react-icons/tb';
import { contactLinks, profile } from '../../data/profile';
import TokyoClock from '../Decorative/TokyoClock';
import SectionHead from '../ui/SectionHead';
import styles from './Contact.module.css';

const Contact = forwardRef(function Contact({ onBackToTop }, ref) {
  const { t } = useTranslation();

  return (
    <section ref={ref} id="contact" className={`section ${styles.contact}`}>
      <div className={`section__inner ${styles.inner}`}>
        <SectionHead id="contact" />

        <h2 className={`section-heading ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="contact.h1a" />
          </span>
          <span data-anim="heading">
            <Trans i18nKey="contact.h1b" components={{ em: <em /> }} />
          </span>
        </h2>

        <p className={styles.note} data-anim="heading">
          {t('contact.note')}
        </p>

        <ul className={styles.links}>
          {contactLinks.map((link, i) => (
            <li key={link.id} data-anim="row">
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className={styles.links__item}
              >
                <span className={styles.links__num}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.links__label}>{t(`contact.${link.id}`)}</span>
                <span className={styles.links__value}>{link.value}</span>
                <span className={styles.links__arrow} aria-hidden="true">
                  <TbArrowUpRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footer__inner}>
          <p className={styles.footer__copy}>
            {t('contact.footerCopy', {
              year: profile.year,
              name: `${profile.name.first} ${profile.name.last}`,
            })}
          </p>

          <TokyoClock className={styles.footer__note} />

          <button type="button" className={styles.backTop} onClick={onBackToTop}>
            <span className={styles.backTop__arrow} aria-hidden="true">
              ↑
            </span>
            <span className="eyebrow">{t('contact.backToTop')}</span>
          </button>
        </div>
      </footer>
    </section>
  );
});

export default Contact;
