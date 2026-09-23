import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations({ aboutRef, stackRef, projectsRef, articlesRef, contactRef, onThemeChange }) {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo(
      '.scroll-progress',
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      },
    );

    const sections = [aboutRef, stackRef, projectsRef, articlesRef, contactRef]
      .map((r) => r?.current)
      .filter(Boolean);

    const revealHead = (el, i) =>
      gsap.fromTo(
        el,
        { xPercent: -8, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        },
      );

    sections.forEach((section) => {
      section.querySelectorAll('[data-anim="heading"]').forEach(revealHead);
    });

    aboutRef?.current?.querySelectorAll('[data-anim="para"]').forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 44, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        },
      );
    });

    aboutRef?.current?.querySelectorAll('[data-anim="portrait"]').forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(8% 8% 8% 8%)', opacity: 0, scale: 0.96 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        },
      );
    });

    stackRef?.current?.querySelectorAll('[data-anim="row"]').forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: (i % 6) * 0.07,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%' },
        },
      );
    });

    contactRef?.current?.querySelectorAll('[data-anim="row"]').forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        },
      );
    });
  });

  // Troca o tema da navbar quando a seção de contato entra/sai da viewport
  // ("paper" sobre o fundo vermelho, "ink" no restante da página).
  if (contactRef?.current) {
    ScrollTrigger.create({
      trigger: contactRef.current,
      start: 'top 60%',
      onEnter: () => onThemeChange('paper'),
      onLeaveBack: () => onThemeChange('ink'),
    });
  }

  return () => {
    mm.revert();
  };
}
