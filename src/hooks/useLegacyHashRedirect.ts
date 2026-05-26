import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LEGACY_HASH_TO_PATH } from '../lib/paths';

/** Redirige hashes antiguos (#boutique) a rutas reales en el primer render. */
export function useLegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const raw = window.location.hash.slice(1);
    if (!raw) return;

    const [section, suffix] = raw.split('--');
    const path = LEGACY_HASH_TO_PATH[section];
    if (!path) return;

    const search = suffix ? `?tab=${suffix}` : '';
    const extraHash =
      section === 'digital-app'
        ? '#digital-app'
        : section === 'franquicia-form'
          ? '#franquicia-form'
          : '';

    navigate(`${path}${search}${extraHash}`, { replace: true });
  }, [navigate]);
}
