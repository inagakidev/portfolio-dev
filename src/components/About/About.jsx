import { forwardRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { profile } from '../../data/profile';
import SakuraBranch from '../Decorative/SakuraBranch';
import styles from './About.module.css';

const About = forwardRef(function About(_props, ref) {
  const { t } = useTranslation();
  const portrait = profile.portrait;
  const paragraphs = t('about.paragraphs', { returnObjects: true });
  const approach = t('about.approach', { returnObjects: true });

  return (
    <section ref={ref} id="about" className={`section ${styles.about}`}>
      <div className="section__inner">
        <div className="section-head">
          <span className="section-head__label">
            <span className="section-head__num">01</span>
            <span className="eyebrow">{t('about.eyebrow')}</span>
          </span>
          <span className="jp section-head__jp" aria-hidden="true">私</span>
        </div>

        <h2 className={`section-heading ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="about.h1a" components={{ em: <em /> }} />
          </span>
          <span data-anim="heading">
            <Trans i18nKey="about.h1b" components={{ em: <em /> }} />
          </span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            {paragraphs.map((paragraph, i) => (
              <p key={i} data-anim="para" className={styles.para}>
                {paragraph}
              </p>
            ))}

            <blockquote className={styles.quote} data-anim="para">
              <p>
                "{t('about.tagline')}"
              </p>
              <cite className="eyebrow">— {profile.name.first}</cite>
            </blockquote>

          </div>

          <aside className={styles.aside}>
            <figure className={styles.portrait} data-anim="portrait">
              <span className={styles.portrait__ring} aria-hidden="true" />
              <SakuraBranch className={styles.portrait__sakura} />
              {portrait ? (
                <img src={portrait} alt={t('about.portraitAlt')} className={styles.portrait__img} />
              ) : (
                <span className={styles.portrait__monogram}>{profile.name.monogram}</span>
              )}
              <figcaption className={styles.portrait__caption}>
                <span className="eyebrow">{t('about.portraitLabel')}</span>
                <span>{profile.name.first} {profile.name.last}</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
});

export default About;
