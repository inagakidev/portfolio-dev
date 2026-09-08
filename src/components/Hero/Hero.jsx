import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import CircleTransition from '../CircleTransition/CircleTransition';
import FallingPetals from '../Decorative/FallingPetals';
import styles from './Hero.module.css';

export default function Hero({ onNavUpdate, onNavLeave }) {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const nav = useMemo(
    () => ({ onUpdate: onNavUpdate, onLeave: onNavLeave, onLeaveBack: onNavLeave }),
    [onNavUpdate, onNavLeave],
  );

  return (
    <section ref={sectionRef} id="top" className={styles.hero} aria-label={t('hero.coverAria')}>
      <CircleTransition sectionRef={sectionRef} nav={nav}>
        <FallingPetals />

        <div className={styles.ghost} aria-hidden="true" data-hero-fade data-ghost>
          {profile.name.last}
        </div>

        <p className={`eyebrow ${styles.cover__kicker}`} data-hero-label>
          <span className="jp" lang="ja">{profile.roleJp}</span>
          {t('hero.kicker', { year: profile.year })}
        </p>

        <div className={styles.cover__name} data-hero-fade>
          <h1 className={styles.cover__h1}>
            <span className={styles.cover__first}>{profile.name.first}</span>
            <span className={styles.cover__last}>{profile.name.last}</span>
          </h1>
          <p className={styles.cover__role}>{t('hero.role')}</p>
          <div className={styles.cover__meta}>
            <span className={styles.cover__dot} aria-hidden="true" />
            {t('hero.available')}
            <span className={styles.cover__metaSep} aria-hidden="true" />
            {t('hero.location')}
          </div>
          <p className={styles.cover__intro}>{t('hero.intro')}</p>
          <div className={styles.cover__cta}>
            <a href="#projects" className="btn btn--solid">
              <span className="btn__fill" />
              {t('hero.viewWork')}
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="btn btn--outline">
              <span className="btn__fill" />
              {t('hero.contact')}
            </a>
          </div>
        </div>

        <div className={styles.scrollHint} data-hero-label>
          <span className="eyebrow">{t('hero.scroll')}</span>
          <span className={styles.scrollHint__line} aria-hidden="true" />
        </div>
      </CircleTransition>
    </section>
  );
}
