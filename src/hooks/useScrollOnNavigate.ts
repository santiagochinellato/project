import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_OFFSET = 80;

export function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
}
