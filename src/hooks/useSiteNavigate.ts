import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES, sectionToPath } from '../lib/paths';

const SCROLL_OFFSET = 80;

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function useSiteNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = useCallback(
    (section: string) => {
      const target = sectionToPath(section);
      const [path, hash] = target.split('#');
      const hashId = hash ?? (section.includes('--') ? section.split('--')[0] : section);

      if (path === ROUTES.home && section === 'home') {
        navigate(ROUTES.home);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (path === location.pathname) {
        if (hash) {
          requestAnimationFrame(() => scrollToElement(hash));
          window.history.replaceState(null, '', `${path}#${hash}`);
          return;
        }
        const scrollId =
          section === 'reservar' || section === 'reserva-confirmada'
            ? section
            : hashId !== path.replace('/', '')
              ? hashId
              : section;
        requestAnimationFrame(() => scrollToElement(scrollId));
        if (hashId && hashId !== path.replace('/', '')) {
          window.history.replaceState(null, '', `${path}#${scrollId}`);
        }
        return;
      }

      navigate(target);
    },
    [location.pathname, navigate],
  );

  const goToBooking = useCallback(() => {
    if (location.pathname === ROUTES.home) {
      scrollToElement('reservar');
      window.history.replaceState(null, '', `${ROUTES.home}#reservar`);
      return;
    }
    navigate(ROUTES.reservar);
  }, [location.pathname, navigate]);

  return { navigateToSection, goToBooking, navigate };
}
