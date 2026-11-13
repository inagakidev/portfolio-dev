import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { initHeroAnimation } from '../../animations/heroAnimation';
import { profile } from '../../data/profile';
import { sections } from '../../data/sections';
import ResponsiveImage from '../ui/ResponsiveImage';
import styles from './CircleTransition.module.css';

export default function CircleTransition({ sectionRef, nav, children }) {
  const { t } = useTranslation();
  const coverRef = useRef(null);
  const circleWrapRef = useRef(null);
  const circleRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const ctx = initHeroAnimation({
      section: sectionRef.current,
      cover: coverRef.current,
      circle: circleRef.current,
      circleWrap: circleWrapRef.current,
      reveal: revealRef.current,
      nav,
    });
    return ctx;
  }, [sectionRef, nav]);

  return (
    <div className={styles.stage}>
      <div ref={coverRef} className={styles.cover}>
        {children}
      </div>

      <div ref={circleWrapRef} className={styles.circleWrap} aria-hidden="true">
        <div ref={circleRef} className={styles.circle}>
          <span className={styles.circle__ring} data-circle-fade />
          <span className={styles.circle__ringSm} data-circle-fade />
          <p className={`jp ${styles.circle__label}`} lang="ja" data-circle-fade>
            花 · {profile.year}
          </p>
        </div>
        <div className={styles.circle__face} data-circle-fade>
          {profile.portrait ? (
            <ResponsiveImage
              image={profile.portrait}
              alt=""
              className={styles.circle__img}
              sizes="(max-width: 720px) 60vw, 480px"
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            <span className={styles.circle__monogram}>{profile.name.monogram}</span>
          )}
        </div>
      </div>

      <div ref={revealRef} className={styles.reveal}>
        <span className={styles.reveal__ring} data-reveal-el />
        <div className={styles.reveal__inner}>
          <p className={`eyebrow ${styles.reveal__label}`} data-reveal-el>
            <span className="jp" lang="ja">
              第二章
            </span>
            {t('reveal.label')}
          </p>
          <h2 className={styles.reveal__title} data-reveal-el>
            {t('reveal.title')}
            <em>{t('reveal.titleEm')}</em>
          </h2>
          <nav className={styles.reveal__index} aria-label={t('reveal.indexAria')}>
            {sections.map(({ id, number, jp }) => (
              <a key={id} href={`#${id}`} className={styles.reveal__indexLink} data-reveal-el>
                <span className={styles.reveal__num}>{number}</span>
                <span>{t(`${id}.eyebrow`)}</span>
                <span className="jp" lang="ja">
                  {jp}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
