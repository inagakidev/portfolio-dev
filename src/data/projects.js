import { projectImages } from './images';

export const projects = [
  {
    id: 'mr-beagles',
    number: '01',
    title: 'MR BEAGLES',
    jp: 'ミスタービーグル',
    year: '2025',
    techs: ['HTML', 'CSS', 'JavaScript'],
    image: projectImages['mr-beagles'],
    links: {
      url: 'https://sitebeagles.vercel.app/',
    },
  },
  {
    id: 'sixt',
    number: '02',
    title: 'SIXT',
    jp: 'シックスト',
    year: '2026',
    techs: ['React', 'GSAP', 'ScrollTrigger'],
    image: projectImages.sixt,
    links: {
      url: 'https://sixt-five.vercel.app/',
    },
  },
];
