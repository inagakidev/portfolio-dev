import { useEffect } from 'react';

// Executa uma função de src/animations usando o elemento da ref como escopo.
// A função recebe o elemento e devolve o cleanup (normalmente mm.revert).
export function useAnimation(ref, init) {
  useEffect(() => {
    if (!ref.current) return undefined;
    return init(ref.current);
  }, [ref, init]);
}
