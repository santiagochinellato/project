import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PAGE_META, ROUTES, type RoutePath } from '../lib/paths';

function resolveMeta(pathname: string) {
  const base = (Object.values(ROUTES) as RoutePath[]).find(
    (route) => route === pathname || (route !== '/' && pathname.startsWith(route)),
  );
  return PAGE_META[base ?? ROUTES.home];
}

export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    document.title = meta.title;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', meta.description);
  }, [pathname]);
}
