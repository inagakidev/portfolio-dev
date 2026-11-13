import { useTranslation } from 'react-i18next';
import IntroScreen from './components/IntroScreen/IntroScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import { useNavState } from './hooks/useNavState';

export default function App() {
  const { t } = useTranslation();
  const nav = useNavState();

  return (
    <>
      <IntroScreen />
      <a className="skip-link" href="#main">
        {t('common.skipToContent')}
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={nav.theme} hidden={nav.hidden} />
      <main id="main">
        <Hero onNavUpdate={nav.onHeroProgress} onNavLeave={nav.onHeroLeave} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
