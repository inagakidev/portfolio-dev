import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { initScrollAnimations } from './animations/scrollAnimations';

export default function App() {
  const { t } = useTranslation();
  const [navTheme, setNavTheme] = useState('ink');
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = initScrollAnimations({
      aboutRef,
      stackRef,
      projectsRef,
      contactRef,
      onThemeChange: setNavTheme,
    });
    return ctx;
  }, []);

  const handleHeroNavUpdate = useCallback((progress) => {
    if (progress < 0.45) {
      setNavTheme('ink');
      setNavHidden(false);
    } else if (progress < 0.62) {
      setNavTheme('ink');
      setNavHidden(true);
    } else {
      setNavTheme('paper');
      setNavHidden(true);
    }
  }, []);

  const handleHeroNavLeave = useCallback(() => {
    setNavTheme('ink');
    setNavHidden(false);
  }, []);

  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {t('common.skipToContent')}
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <CustomCursor />
      <Navbar
        theme={navTheme}
        hidden={navHidden}
        menuOpen={menuOpen}
        onMenuToggle={setMenuOpen}
      />
      <main id="main">
        <Hero onNavUpdate={handleHeroNavUpdate} onNavLeave={handleHeroNavLeave} />
        <About ref={aboutRef} />
        <Skills ref={stackRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} onBackToTop={handleBackToTop} />
      </main>
    </>
  );
}
