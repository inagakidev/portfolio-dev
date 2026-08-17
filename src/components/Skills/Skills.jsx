import { forwardRef, useRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TbFlower } from 'react-icons/tb';
import { stack } from '../../data/stack';
import styles from './Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_ITEMS = [...stack.marquee, ...stack.marquee];

function MarqueeGroup() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className={styles.marquee__item}>
          {item}
          <TbFlower className={styles.marquee__flower} aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

const Skills = forwardRef(function Skills(_props, ref) {
  const { t } = useTranslation();
  const trackRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
      gsap.fromTo(
        listRef.current,
        { xPercent: 3 },
        {
          xPercent: -2,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        },
      );
    });
    return () => mm.revert();
  }, [ref]);

  return (
    <section ref={ref} id="stack" className={`section ${styles.skills}`}>
      <div className={styles.marquee} aria-hidden="true">
        <div ref={trackRef} className={styles.marquee__track}>
          <div className={styles.marquee__group}>
            <MarqueeGroup />
          </div>
          <div className={styles.marquee__group}>
            <MarqueeGroup />
          </div>
        </div>
      </div>

      <div className="section__inner">
        <div className="section-head">
          <span className="section-head__label">
            <span className="section-head__num">02</span>
            <span className="section-head__line" aria-hidden="true" />
            <span className="eyebrow">{t('stack.eyebrow')}</span>
          </span>
          <span className="jp section-head__jp" aria-hidden="true">{stack.jp}</span>
        </div>

        <h2 className={`font-serif ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="stack.h1a" />
          </span>
          <span data-anim="heading">
            <Trans i18nKey="stack.h1b" components={{ dot: <em className={styles.heading__dot} /> }} />
          </span>
        </h2>

        <div ref={listRef} className={styles.list}>
          {stack.groups.map((group, gi) => (
            <div className={styles.group} key={group.id}>
              <h3 className={styles.group__title} data-anim="row">
                <span className={styles.group__num}>0{gi + 1}</span>
                <span className="eyebrow">{t(`stack.groups.${group.id}`)}</span>
              </h3>
              <ul className={styles.group__list}>
                {group.skills.map((skill, si) => (
                  <li className={styles.item} key={skill} data-anim="row">
                    <span className={styles.item__num}>0{si + 1}</span>
                    <span className={styles.item__name}>{skill}</span>
                    <span className={styles.item__ring} aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
