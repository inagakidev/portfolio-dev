import portraitFallback from '../assets/images/optimized/amanda-perfil-512.png';
import portraitWebp512 from '../assets/images/optimized/amanda-perfil-512.webp';
import portraitWebp1024 from '../assets/images/optimized/amanda-perfil-1024.webp';

import mrBeaglesFallback from '../assets/images/optimized/mr-beagles-1600.jpg';
import mrBeaglesAvif800 from '../assets/images/optimized/mr-beagles-800.avif';
import mrBeaglesAvif1600 from '../assets/images/optimized/mr-beagles-1600.avif';
import mrBeaglesWebp800 from '../assets/images/optimized/mr-beagles-800.webp';
import mrBeaglesWebp1600 from '../assets/images/optimized/mr-beagles-1600.webp';

import sixtFallback from '../assets/images/optimized/sixt-1600.jpg';
import sixtAvif800 from '../assets/images/optimized/sixt-800.avif';
import sixtAvif1600 from '../assets/images/optimized/sixt-1600.avif';
import sixtWebp800 from '../assets/images/optimized/sixt-800.webp';
import sixtWebp1600 from '../assets/images/optimized/sixt-1600.webp';

export const portraitImage = {
  src: portraitFallback,
  width: 512,
  height: 768,
  webp: `${portraitWebp512} 512w, ${portraitWebp1024} 1024w`,
};

export const projectImages = {
  'mr-beagles': {
    src: mrBeaglesFallback,
    width: 1600,
    height: 764,
    avif: `${mrBeaglesAvif800} 800w, ${mrBeaglesAvif1600} 1600w`,
    webp: `${mrBeaglesWebp800} 800w, ${mrBeaglesWebp1600} 1600w`,
  },
  sixt: {
    src: sixtFallback,
    width: 1600,
    height: 761,
    avif: `${sixtAvif800} 800w, ${sixtAvif1600} 1600w`,
    webp: `${sixtWebp800} 800w, ${sixtWebp1600} 1600w`,
  },
};
