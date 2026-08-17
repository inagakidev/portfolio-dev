import { forwardRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { TbArrowUpRight } from 'react-icons/tb';
import { projects } from '../../data/projects';
import { initProjectAnimations } from '../../animations/projectAnimations';
import SakuraBlossom from '../Decorative/SakuraBlossom';
import styles from './Projects.module.css';

function ProjectItem({ project, index }) {
  const { t } = useTranslation();
  const words = project.title.split(' ');
  const flip = index % 2 === 1;

  return (
    <article
      className={`${styles.project} ${flip ? styles['project--flip'] : ''}`}
      data-project
      id={project.id}
    >
      <div className={styles.project__ghost} data-anim="num" aria-hidden="true">
        {project.number}
      </div>

      <header className={styles.project__head}>
        <p className={`eyebrow ${styles.project__eyebrow}`} data-anim="num">
          {t('projects.projectLabel', { num: project.number })}
          <span className={styles.project__year}>({project.year})</span>
        </p>
        <div className={styles.project__titlewrap}>
          <h3 className={styles.project__title} data-anim="title">
            {words.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h3>
        </div>
        <span className={`jp ${styles.project__jp}`} aria-hidden="true">{project.jp}</span>
      </header>

      <div className={styles.project__body}>
        <div className={styles.project__media} data-anim="image">
          {project.image && (
            <img src={project.image} alt={`${project.title} preview`} className={styles.project__img} />
          )}
        </div>

        <div className={styles.project__meta} data-anim="text">
          <p className={styles.project__category}>{t(`projects.list.${project.id}.category`)}</p>
          <p className={styles.project__desc}>{t(`projects.list.${project.id}.description`)}</p>
          <ul className={styles.project__techs} aria-label={t('projects.techsAria')}>
            {project.techs.map((tech) => (
              <li key={tech} className={styles.project__tech}>{tech}</li>
            ))}
          </ul>
          <div className={styles.project__links}>
            {project.links.url ? (
              <a
                href={project.links.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn--solid"
                data-cursor
              >
                <span className="btn__fill" />
                {t('projects.visit')}
                <span aria-hidden="true"><TbArrowUpRight /></span>
              </a>
            ) : null}
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              <span className="btn__fill" />
              {t('projects.github')}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

const Projects = forwardRef(function Projects(_props, ref) {
  const { t } = useTranslation();
  useEffect(() => {
    const ctx = initProjectAnimations(ref.current);
    return ctx;
  }, [ref]);

  return (
    <section ref={ref} id="projects" className={`section ${styles.projects}`}>
      <SakuraBlossom size={120} className={styles.sakura} />

      <div className="section__inner">
        <div className="section-head">
          <span className="section-head__label">
            <span className="section-head__num">03</span>
            <span className="eyebrow">{t('projects.eyebrow')}</span>
          </span>
          <span className="jp section-head__jp" aria-hidden="true">作品</span>
        </div>

        <h2 className={`font-serif ${styles.heading}`}>
          <span data-anim="heading">
            <Trans i18nKey="projects.h1a" />
          </span>
          <span data-anim="heading">
            <Trans i18nKey="projects.h1b" components={{ em: <em /> }} />
          </span>
        </h2>

        <div className={styles.intro} data-anim="heading">
          <p>{t('projects.intro')}</p>
        </div>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <ProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
