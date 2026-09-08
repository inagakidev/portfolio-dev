import { forwardRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { TbArrowUpRight } from "react-icons/tb";
import { PiScroll } from "react-icons/pi";
import { profile } from "../../data/profile";
import TokyoClock from "../Decorative/TokyoClock";
import styles from "./Contact.module.css";

const Contact = forwardRef(function Contact({ onBackToTop }, ref) {
  const { t } = useTranslation();

  const LINKS = [
    {
      num: "01",
      label: t("contact.email"),
      value: profile.socials.email,
      href: `mailto:${profile.socials.email}`,
    },
    {
      num: "02",
      label: t("contact.linkedin"),
      value: "@amanda-inagaki",
      href: profile.socials.linkedin,
    },
    {
      num: "03",
      label: t("contact.github"),
      value: "@inagakidev",
      href: profile.socials.github,
    },
    {
      num: "04",
      label: t("contact.instagram"),
      value: "@amandfsk",
      href: profile.socials.instagram,
    },
  ];

  return (
    <section ref={ref} id="contact" className={`section ${styles.contact}`}>

      <div className={`section__inner ${styles.inner}`}>
        <div className="section-head">
          <span className="section-head__label">
            <span className="section-head__num">04</span>
            <span className="eyebrow">{t("contact.eyebrow")}</span>
          </span>
          <span className="jp section-head__jp" aria-hidden="true">
            連絡
          </span>
        </div>

        <h2 className={`section-heading ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="contact.h1a" />
          </span>
          <span data-anim="heading">
            <Trans i18nKey="contact.h1b" components={{ em: <em /> }} />
          </span>
        </h2>

        <p className={styles.note} data-anim="heading">
          {t("contact.note")}
        </p>

        <a
          href={profile.cvUrl}
          download
          className={`btn btn--outline ${styles.cv}`}
          data-anim="heading"
        >
          <span className="btn__fill" />
          <PiScroll aria-hidden="true" className={styles.cv__icon} />
          {t("contact.downloadCV")}
        </a>

        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.num} data-anim="row">
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className={styles.links__item}
              >
                <span className={styles.links__num}>{link.num}</span>
                <span className={styles.links__label}>{link.label}</span>
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
            {t("contact.footerCopy", {
              year: profile.year,
              name: `${profile.name.first} ${profile.name.last}`,
            })}
          </p>

          <TokyoClock className={styles.footer__note} />

          <button
            type="button"
            className={styles.backTop}
            onClick={onBackToTop}
          >
            <span className={styles.backTop__arrow} aria-hidden="true">
              ↑
            </span>
            <span className="eyebrow">{t("contact.backToTop")}</span>
          </button>
        </div>
      </footer>
    </section>
  );
});

export default Contact;
