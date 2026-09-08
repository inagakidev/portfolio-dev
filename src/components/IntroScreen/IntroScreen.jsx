import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../../data/profile';
import { prefersReducedMotion } from '../../utils/motion';
import styles from './IntroScreen.module.css';

gsap.registerPlugin(ScrollTrigger);

const STORAGE_KEY = 'portfolio.introShown';

export default function IntroScreen() {
  const [visible] = useState(() => !window.sessionStorage.getItem(STORAGE_KEY));
  const kanjiRef = useRef(null);
  const panelLeftRef = useRef(null);
  const panelRightRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!visible) return;

    window.sessionStorage.setItem(STORAGE_KEY, '1');
    document.body.style.overflow = 'hidden';

    const finish = () => {
      document.body.style.overflow = '';
      setDone(true);
      ScrollTrigger.refresh();
    };

    if (prefersReducedMotion()) {
      finish();
      return undefined;
    }

    const tl = gsap.timeline({ onComplete: finish });
    tl.fromTo(
      kanjiRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' },
    )
      .to(kanjiRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.5')
      .to(
        [panelLeftRef.current, panelRightRef.current],
        {
          xPercent: (i) => (i === 0 ? -100 : 100),
          duration: 0.9,
          ease: 'power4.inOut',
        },
        '-=0.15',
      );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible || done) return null;

  return (
    <div className={styles.intro} role="status" aria-live="polite">
      <span className={styles.srOnly}>Loading…</span>
      <div ref={panelLeftRef} className={`${styles.panel} ${styles.panelLeft}`} aria-hidden="true" />
      <div ref={panelRightRef} className={`${styles.panel} ${styles.panelRight}`} aria-hidden="true" />
      <span ref={kanjiRef} className={`jp ${styles.kanji}`} lang="ja" aria-hidden="true">
        {profile.heroJp}
      </span>
    </div>
  );
}
