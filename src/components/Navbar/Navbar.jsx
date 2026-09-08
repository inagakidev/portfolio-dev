import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { profile } from '../../data/profile';
import { prefersReducedMotion } from '../../utils/motion';
import SakuraBranch from '../Decorative/SakuraBranch';
import styles from './Navbar.module.css';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NAV_IDS = ['about', 'stack', 'projects', 'contact'];
const LANGUAGES = ['en', 'pt', 'ja'];

export default function Navbar({ theme = 'ink', hidden = false, menuOpen, onMenuToggle }) {
  const { t, i18n } = useTranslation();
  const headerRef = useRef(null);
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const branchRef = useRef(null);
  const branchTimelineRef = useRef(null);
  const branchSwayRef = useRef(null);

  const closeMenu = useCallback(() => onMenuToggle(false), [onMenuToggle]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linksRef.current;
    const burger = headerRef.current?.querySelector('button');

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.set(overlay, { pointerEvents: 'auto' });
      gsap.to(overlay, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.7,
        ease: 'power4.inOut',
      });
      gsap.fromTo(
        links,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.07,
          ease: 'power4.out',
          delay: 0.35,
          overwrite: true,
        },
      );
      gsap.to(overlay.querySelectorAll('[data-menu-fade]'), {
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.5,
      });
      overlay.querySelector('a')?.focus({ preventScroll: true });

      const branch = branchRef.current;
      if (branch && !prefersReducedMotion()) {
        const group = branch.querySelector('[data-branch-group]');
        const lines = branch.querySelectorAll('[data-branch-path]');
        const blossoms = branch.querySelectorAll('[data-branch-blossom]');

        lines.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        });
        gsap.set(blossoms, { scale: 0, transformOrigin: 'center' });

        branchTimelineRef.current = gsap
          .timeline({ delay: 0.4 })
          .to(lines, {
            strokeDashoffset: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.inOut',
          })
          .to(
            blossoms,
            {
              scale: (_i, target) => parseFloat(target.dataset.scale) || 1,
              duration: 0.55,
              stagger: 0.06,
              ease: 'back.out(2.4)',
            },
            '-=0.5',
          )
          .add(() => {
            branchSwayRef.current = gsap.to(group, {
              rotate: 1.6,
              transformOrigin: '12% 96%',
              duration: 3.4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          });
      }
    } else {
      document.body.style.overflow = '';
      gsap.set(overlay, { pointerEvents: 'none' });
      gsap.to(overlay, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.7,
        ease: 'power4.inOut',
      });
      gsap.to(links, { yPercent: 110, duration: 0.4, ease: 'power3.in', overwrite: true });
      gsap.to(overlay.querySelectorAll('[data-menu-fade]'), {
        opacity: 0,
        duration: 0.25,
      });
      burger?.focus({ preventScroll: true });

      branchTimelineRef.current?.kill();
      branchTimelineRef.current = null;
      branchSwayRef.current?.kill();
      branchSwayRef.current = null;
    }

    return () => {
      document.body.style.overflow = '';
      branchTimelineRef.current?.kill();
      branchSwayRef.current?.kill();
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  const paperTheme = !menuOpen && theme === 'paper';

  return (
    <>
      <header
        ref={headerRef}
        className={`${styles.nav} ${paperTheme ? styles['nav--paper'] : ''} ${hidden ? styles['nav--hidden'] : ''}`}
      >
        <a
          className={styles.brand}
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className={styles.brand__seal}>愛</span>
          <span className={styles.brand__name}>
            AMANDA <em>INAGAKI</em>
          </span>
        </a>

        <div className={styles.nav__right}>
          <button
            className={styles.burger}
            type="button"
            aria-label={menuOpen ? t('common.menuClose') : t('common.menuOpen')}
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            onClick={() => onMenuToggle(!menuOpen)}
          >
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>

          <div className={styles.lang} role="group" aria-label={t('nav.langLabel')}>
            {LANGUAGES.map((code) => {
              const active = i18n.resolvedLanguage === code;
              return (
                <button
                  key={code}
                  type="button"
                  className={`${styles.lang__btn} ${active ? styles['lang__btn--active'] : ''}`}
                  aria-pressed={active}
                  onClick={() => i18n.changeLanguage(code)}
                >
                  {code.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div
        id="nav-overlay"
        ref={overlayRef}
        className={styles.overlay}
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <SakuraBranch ref={branchRef} className={styles.overlay__sakura} />
        <div className={styles.overlay__inner}>
          <p className={`eyebrow ${styles.overlay__label}`} data-menu-fade>
            <span className="jp" lang="ja">{profile.heroJp}</span> {t('nav.navigation')}
          </p>
          <nav aria-label={t('common.menu')}>
            <ul ref={linksRef}>
              {NAV_IDS.map((id, i) => (
                <li key={id}>
                  <a
                    className={styles.overlay__link}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      setTimeout(() => {
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }, 250);
                    }}
                  >
                    <span className={styles.overlay__linknum}>0{i + 1}</span>
                    <span className={styles.overlay__linktext}>{t(`nav.${id}`)}</span>
                    <span className={`jp ${styles.overlay__linkjp}`} lang="ja">
                      {id === 'about' && '私'}
                      {id === 'stack' && '道具'}
                      {id === 'projects' && '作品'}
                      {id === 'contact' && '連絡'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.overlay__foot} data-menu-fade>
            <a className="link-line" href={`mailto:${profile.socials.email}`}>
              {profile.socials.email}
            </a>
            <span className={`jp ${styles.overlay__footjp}`} lang="ja">{t('contact.footerNote')}</span>
            <div className={styles.lang} role="group" aria-label={t('nav.langLabel')}>
              {LANGUAGES.map((code) => {
                const active = i18n.resolvedLanguage === code;
                return (
                  <button
                    key={code}
                    type="button"
                    className={`${styles.lang__btn} ${active ? styles['lang__btn--active'] : ''}`}
                    aria-pressed={active}
                    onClick={() => i18n.changeLanguage(code)}
                  >
                    {code.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
