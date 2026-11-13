import { useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { TbFlower } from 'react-icons/tb';
import { stack } from '../../data/stack';
import { initSkillsAnimations } from '../../animations/sectionAnimations';
import { useAnimation } from '../../hooks/useAnimation';
import SectionHead from '../ui/SectionHead';
import styles from './Skills.module.css';

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

export default function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);

  useAnimation(ref, initSkillsAnimations);

  return (
    <section ref={ref} id="stack" className={`section ${styles.skills}`}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marquee__track} data-anim="marquee">
          <div className={styles.marquee__group}>
            <MarqueeGroup />
          </div>
          <div className={styles.marquee__group}>
            <MarqueeGroup />
          </div>
        </div>
      </div>

      <div className="section__inner">
        <SectionHead id="stack" />

        <h2 className={`section-heading ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="stack.h1a" />
          </span>
          <span data-anim="heading">
            <Trans
              i18nKey="stack.h1b"
              components={{ dot: <em className={styles.heading__dot} /> }}
            />
          </span>
        </h2>

        <div className={styles.list} data-anim="parallax">
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
}
