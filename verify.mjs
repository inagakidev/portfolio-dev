import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  headless: true,
  executablePath: '/home/lidia/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.route('**/*', (r) => {
  if (/fonts\.googleapis|gstatic\.com/.test(r.request().url())) return r.abort();
  return r.continue();
});
await page.goto('http://localhost:4173/', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(2400);

const log = [];
const check = (name, ok, detail = '') => log.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`);

let r = await page.evaluate(() => {
  return { stage: getComputedStyle(document.querySelector('[data-stage]')).position };
});
check('stage sticky', r.stage === 'sticky', r.stage);

const circleInfo = await page.evaluate(() => {
  const wrap = document.querySelector('[data-stage] > div:nth-child(2)');
  const cs = getComputedStyle(wrap);
  const rect = wrap.getBoundingClientRect();
  const circle = wrap.firstElementChild;
  const circ = getComputedStyle(circle).transform;
  return {
    pos: cs.position,
    top: rect.top,
    right: rect.right,
    size: rect.width,
    radius: getComputedStyle(circle).borderRadius,
    bg: getComputedStyle(circle).backgroundImage.slice(0, 40),
    transform: circ,
  };
});
check('circle absolute right', circleInfo.pos === 'absolute', circleInfo.pos);
check('circle on right side', circleInfo.right > 1300, `right=${Math.round(circleInfo.right)}`);
check('circle circular', circleInfo.radius.includes('50%'), circleInfo.radius);
check('circle red gradient', circleInfo.bg.includes('gradient'), circleInfo.bg);
check('circle transform ok', circleInfo.transform === 'none' || circleInfo.transform.includes('matrix'), circleInfo.transform);

const nameInfo = await page.evaluate(() => {
  const h1 = document.querySelector('#top h1');
  const cs = getComputedStyle(h1);
  return { font: cs.fontFamily.slice(0, 40), size: cs.fontSize, color: cs.color };
});
check('name serif font', /zen|serif/i.test(nameInfo.font), nameInfo.font);
check('name big', parseFloat(nameInfo.size) > 90, nameInfo.size);
check('name ink color', nameInfo.color.includes('28, 22, 19'), nameInfo.color);

await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.45 }));
await page.waitForTimeout(900);
const midState = await page.evaluate(() => {
  const circle = document.querySelector('[data-stage] > div:nth-child(2) > div');
  const t = getComputedStyle(circle).transform;
  const m = t.match(/matrix\(([^)]+)\)/);
  return m ? parseFloat(m[1]) : null;
});
check('circle scaled at scroll', midState !== null && midState > 1.2, `scale≈${midState?.toFixed(2)}`);

await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.92 }));
await page.waitForTimeout(900);
const revealState = await page.evaluate(() => {
  const rv = document.querySelector('[data-reveal]');
  const cs = getComputedStyle(rv);
  const nav = document.querySelector('header');
  return { opacity: cs.opacity, pe: cs.pointerEvents, navOpacity: getComputedStyle(nav).opacity };
});
check('reveal visible', parseFloat(revealState.opacity) > 0.9, `opacity=${revealState.opacity}`);
check('reveal interactive', revealState.pe === 'auto', revealState.pe);
check('nav hidden over reveal', parseFloat(revealState.navOpacity) < 0.5, `navOpacity=${revealState.navOpacity}`);

await page.evaluate(() => window.scrollTo({ top: window.innerHeight * 2.2 }));
await page.waitForTimeout(1200);
const afterHero = await page.evaluate(() => {
  const nav = document.querySelector('header');
  const aboutHeading = document.querySelector('#about h2');
  return {
    navOpacity: getComputedStyle(nav).opacity,
    navColor: getComputedStyle(nav).color,
    aboutVisible: aboutHeading.getBoundingClientRect().top < window.innerHeight,
  };
});
check('nav visible after hero', parseFloat(afterHero.navOpacity) > 0.9, `op=${afterHero.navOpacity}`);
check('about heading reached', afterHero.aboutVisible);

await page.evaluate(() => document.querySelector('header button').click());
await page.waitForTimeout(900);
const menuState = await page.evaluate(() => {
  const ov = document.getElementById('nav-overlay');
  return { clip: getComputedStyle(ov).clipPath, links: ov.querySelectorAll('a').length };
});
check('menu opens', menuState.clip === 'inset(0%)', menuState.clip);
check('menu has links', menuState.links >= 4, `links=${menuState.links}`);
await page.keyboard.press('Escape');
await page.waitForTimeout(800);

await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
await page.waitForTimeout(1400);
const contactState = await page.evaluate(() => {
  const nav = document.querySelector('header');
  return { navColor: getComputedStyle(nav).color, contactBg: getComputedStyle(document.querySelector('#contact')).backgroundColor };
});
check('contact nav paper theme', /255/.test(contactState.navColor), contactState.navColor);
check('contact red bg', contactState.contactBg.includes('200, 16, 46'), contactState.contactBg);

await page.evaluate(() => document.querySelector('#contact button').click());
await page.waitForTimeout(1500);
const scrolledTop = await page.evaluate(() => window.scrollY);
check('back to top works', scrolledTop < 200, `scrollY=${Math.round(scrolledTop)}`);

const rmPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await rmPage.emulateMedia({ reducedMotion: 'reduce' });
await rmPage.route('**/*', (r) => {
  if (/fonts\.googleapis|gstatic\.com/.test(r.request().url())) return r.abort();
  return r.continue();
});
await rmPage.goto('http://localhost:4173/', { waitUntil: 'load', timeout: 60000 });
await rmPage.waitForTimeout(1500);
const rmState = await rmPage.evaluate(() => {
  const stage = document.querySelector('[data-stage]');
  const reveal = document.querySelector('[data-reveal]');
  const hero = document.querySelector('#top');
  return {
    stagePos: getComputedStyle(stage).position,
    revealDisplay: getComputedStyle(reveal).display,
    heroH: hero.offsetHeight,
    viewport: window.innerHeight,
  };
});
check('reduced-motion: no sticky', rmState.stagePos !== 'sticky', rmState.stagePos);
check('reduced-motion: reveal hidden', rmState.revealDisplay === 'none', rmState.revealDisplay);
check('reduced-motion: hero ~100vh', Math.abs(rmState.heroH - rmState.viewport) < 60, `heroH=${rmState.heroH}`);

const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
mob.on('pageerror', (e) => check('mobile no pageerror', false, e.message));
await mob.route('**/*', (r) => {
  if (/fonts\.googleapis|gstatic\.com/.test(r.request().url())) return r.abort();
  return r.continue();
});
await mob.goto('http://localhost:4173/', { waitUntil: 'load', timeout: 60000 });
await mob.waitForTimeout(2200);
const mobInfo = await mob.evaluate(() => {
  const wrap = document.querySelector('[data-stage] > div:nth-child(2)');
  const rect = wrap.getBoundingClientRect();
  return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom, w: rect.width, vw: window.innerWidth };
});
check('mobile circle centered', Math.abs((mobInfo.left + mobInfo.right) / 2 - mobInfo.vw / 2) < 20, `L=${Math.round(mobInfo.left)} R=${Math.round(mobInfo.right)}`);
check('mobile circle below fold-ish', mobInfo.top > mobInfo.vw * 0.3, `top=${Math.round(mobInfo.top)}`);
await mob.evaluate(() => window.scrollTo({ top: window.innerHeight * 0.6 }));
await mob.waitForTimeout(1200);
const mobScale = await mob.evaluate(() => {
  const circle = document.querySelector('[data-stage] > div:nth-child(2) > div');
  const m = getComputedStyle(circle).transform.match(/matrix\(([^)]+)\)/);
  return m ? parseFloat(m[1]) : null;
});
check('mobile circle scales on touch scroll', mobScale !== null && mobScale > 1.15, `scale≈${mobScale?.toFixed(2)}`);

console.log(log.join('\n'));
await browser.close();
