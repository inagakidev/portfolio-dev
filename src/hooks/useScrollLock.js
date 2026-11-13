import { useEffect } from 'react';

// Contador compartilhado: o scroll só é liberado quando todos os componentes
// que pediram o bloqueio (intro, menu overlay) tiverem liberado.
let activeLocks = 0;

export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    activeLocks += 1;
    document.body.style.overflow = 'hidden';

    return () => {
      activeLocks -= 1;
      if (activeLocks === 0) document.body.style.overflow = '';
    };
  }, [active]);
}
