import { useCallback, useEffect, useState } from 'react';
import { ScrollTrigger } from '../lib/gsap';

// Pontos do progresso (0–1) da transição do hero em que a navbar muda.
const HERO_HIDE_AT = 0.45; // navbar sai de cena enquanto o círculo se expande
const HERO_PAPER_AT = 0.62; // painel de reveal (fundo vermelho) aparece em heroAnimation

export function useNavState() {
  const [theme, setTheme] = useState('ink');
  const [hidden, setHidden] = useState(false);

  // "paper" sobre o fundo vermelho da seção de contato, "ink" no restante.
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#contact',
      start: 'top 60%',
      onEnter: () => setTheme('paper'),
      onLeaveBack: () => setTheme('ink'),
    });
    return () => trigger.kill();
  }, []);

  const onHeroProgress = useCallback((progress) => {
    setHidden(progress >= HERO_HIDE_AT);
    setTheme(progress >= HERO_PAPER_AT ? 'paper' : 'ink');
  }, []);

  const onHeroLeave = useCallback(() => {
    setTheme('ink');
    setHidden(false);
  }, []);

  return { theme, hidden, onHeroProgress, onHeroLeave };
}
