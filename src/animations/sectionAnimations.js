import { gsap } from '../lib/gsap';
import { withMotion } from './withMotion';

export function revealHeadings(section) {
  section.querySelectorAll('[data-anim="heading"]').forEach((el, i) =>
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
    ),
  );
}

function revealRows(section, { y, start, delay }) {
  section.querySelectorAll('[data-anim="row"]').forEach((el, i) =>
    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: delay(i),
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start },
      },
    ),
  );
}

export const initAboutAnimations = withMotion((section) => {
  revealHeadings(section);

  section.querySelectorAll('[data-anim="para"]').forEach((el, i) => {
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

  section.querySelectorAll('[data-anim="portrait"]').forEach((el) => {
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
});

export const initSkillsAnimations = withMotion((section) => {
  const sectionScrub = (scrub) => ({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub,
  });

  gsap.to(section.querySelector('[data-anim="marquee"]'), {
    xPercent: -50,
    ease: 'none',
    scrollTrigger: sectionScrub(0.6),
  });
  gsap.fromTo(
    section.querySelector('[data-anim="parallax"]'),
    { xPercent: 3 },
    { xPercent: -2, ease: 'none', scrollTrigger: sectionScrub(0.8) },
  );

  revealHeadings(section);
  revealRows(section, { y: 40, start: 'top 92%', delay: (i) => (i % 6) * 0.07 });
});

export const initContactAnimations = withMotion((section) => {
  revealHeadings(section);
  revealRows(section, { y: 36, start: 'top 90%', delay: (i) => i * 0.08 });
});
