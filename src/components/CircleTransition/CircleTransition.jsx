import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { initHeroAnimation } from '../../animations/heroAnimation';
import { profile } from '../../data/profile';
import styles from './CircleTransition.module.css';
import portrait from '../../assets/images/amandaPerfil.png';

/**
 * The cinematic hand-off between the cover and the portfolio.
 * A red circle expands with scroll, covers the viewport, and reveals
 * the portfolio index — "stepping inside the circle".
 */
export default function CircleTransition({ sectionRef, nav, children }) {
  const { t } = useTranslation();
  const coverRef = useRef(null);
  const circleWrapRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = initHeroAnimation({
      section: sectionRef.current,
      cover: coverRef.current,
      circle: circleRef.current,
      circleWrap: circleWrapRef.current,
      reveal: circleRef.current?.closest('[data-stage]')?.querySelector('[data-reveal]'),
      nav,
    });
    return ctx;
  }, [sectionRef, nav]);

  return (
    <div className={styles.stage} data-stage>
      <div ref={coverRef} className={styles.cover} data-cover>
        {children}
      </div>

      {/* The red circle */}
      <div ref={circleWrapRef} className={styles.circleWrap} aria-hidden="true">
        <div ref={circleRef} className={styles.circle}>
          <span className={styles.circle__ring} data-circle-fade />
          <span className={styles.circle__ringSm} data-circle-fade />
          <p className={`jp ${styles.circle__label}`} lang="ja" data-circle-fade>
            花 · {profile.year}
          </p>
        </div>
        <div className={styles.circle__face} data-circle-fade>
          {portrait ? (
            <img src={portrait} alt="" className={styles.circle__img} />
          ) : (
            <span className={styles.circle__monogram}>{profile.name.monogram}</span>
          )}
        </div>
      </div>

      {/* Reveal — what you find inside the circle */}
      <div className={styles.reveal} data-reveal>

        <span className={styles.reveal__ring} data-reveal-el />
        <div className={styles.reveal__inner}>
          <p className={`eyebrow ${styles.reveal__label}`} data-reveal-el>
            <span className="jp" lang="ja">第二章</span>
            {t('reveal.label')}
          </p>
          <h2 className={styles.reveal__title} data-reveal-el>
            {t('reveal.title')}
            <em>{t('reveal.titleEm')}</em>
          </h2>
          <nav className={styles.reveal__index} aria-label={t('reveal.indexAria')}>
            <a href="#about" className={styles.reveal__indexLink} data-reveal-el>
              <span className={styles.reveal__num}>01</span>
              <span>{t('nav.about')}</span>
              <span className="jp" lang="ja">私</span>
            </a>
            <a href="#stack" className={styles.reveal__indexLink} data-reveal-el>
              <span className={styles.reveal__num}>02</span>
              <span>{t('nav.stack')}</span>
              <span className="jp" lang="ja">道具</span>
            </a>
            <a href="#projects" className={styles.reveal__indexLink} data-reveal-el>
              <span className={styles.reveal__num}>03</span>
              <span>{t('reveal.selectedWork')}</span>
              <span className="jp" lang="ja">作品</span>
            </a>
            <a href="#contact" className={styles.reveal__indexLink} data-reveal-el>
              <span className={styles.reveal__num}>04</span>
              <span>{t('nav.contact')}</span>
              <span className="jp" lang="ja">連絡</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
