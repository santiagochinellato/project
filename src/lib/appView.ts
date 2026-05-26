export type AppView = 'home' | 'boutique' | 'precios' | 'digital' | 'franquicia';

export function readViewFromHash(): AppView {
  const hash = window.location.hash.slice(1);
  if (hash === 'boutique') return 'boutique';
  if (hash === 'precios') return 'precios';
  if (hash === 'digital' || hash === 'digital-app') return 'digital';
  if (hash === 'franquicia' || hash === 'franquicia-form') return 'franquicia';
  return 'home';
}

export function isSubPageView(view: AppView): boolean {
  return view === 'boutique' || view === 'precios' || view === 'digital' || view === 'franquicia';
}
