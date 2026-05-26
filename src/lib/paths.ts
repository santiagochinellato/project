export const ROUTES = {
  home: '/',
  experiencia: '/experiencia',
  salas: '/salas',
  seguridad: '/seguridad',
  reservar: '/reservar',
  eventos: '/eventos',
  precios: '/precios',
  boutique: '/boutique',
  digital: '/digital',
  franquicia: '/franquicia',
  faq: '/faq',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Hash legacy (#boutique) → ruta real */
export const LEGACY_HASH_TO_PATH: Record<string, RoutePath> = {
  boutique: ROUTES.boutique,
  precios: ROUTES.precios,
  digital: ROUTES.digital,
  'digital-app': ROUTES.digital,
  franquicia: ROUTES.franquicia,
  'franquicia-form': ROUTES.franquicia,
  experiencia: ROUTES.experiencia,
  salas: ROUTES.salas,
  seguridad: ROUTES.seguridad,
  reservar: ROUTES.reservar,
  'reserva-confirmada': ROUTES.reservar,
  eventos: ROUTES.eventos,
  faq: ROUTES.faq,
  home: ROUTES.home,
};

const SECTION_TO_PATH: Record<string, RoutePath | string> = {
  home: ROUTES.home,
  experiencia: ROUTES.experiencia,
  innovacion: ROUTES.experiencia,
  'como-funciona': ROUTES.experiencia,
  salas: ROUTES.salas,
  seguridad: ROUTES.seguridad,
  'seguridad-informacion-legal': ROUTES.seguridad,
  reservar: ROUTES.reservar,
  'reserva-confirmada': ROUTES.reservar,
  eventos: ROUTES.eventos,
  'reservar-evento': ROUTES.eventos,
  boutique: ROUTES.boutique,
  'boutique-preview': ROUTES.boutique,
  precios: ROUTES.precios,
  'precios-preview': ROUTES.precios,
  digital: ROUTES.digital,
  'digital-preview': ROUTES.digital,
  'digital-app': `${ROUTES.digital}#digital-app`,
  franquicia: ROUTES.franquicia,
  'franquicia-home': ROUTES.franquicia,
  'franquicia-form': `${ROUTES.franquicia}#franquicia-form`,
  faq: ROUTES.faq,
};

export function sectionToPath(section: string): string {
  return SECTION_TO_PATH[section] ?? ROUTES.home;
}

export const PAGE_META: Record<
  RoutePath,
  { title: string; description: string }
> = {
  [ROUTES.home]: {
    title: 'EROSCAPE — El primer escape room erótico del mundo',
    description:
      'Experiencias inmersivas, sensuales y seguras en Granada, Málaga y Sevilla. Reserva tu sesión EROSCAPE ROOM®.',
  },
  [ROUTES.experiencia]: {
    title: 'La experiencia — EROSCAPE',
    description:
      'Descubre qué es EROSCAPE ROOM®, cómo funciona y el motor sensorial EROSENSE.',
  },
  [ROUTES.salas]: {
    title: 'Salas y experiencias — EROSCAPE',
    description:
      'Explora experiencias temáticas, niveles de intensidad y personalización en nuestras salas.',
  },
  [ROUTES.seguridad]: {
    title: 'Seguridad y legal — EROSCAPE',
    description:
      'Consentimiento, privacidad, higiene y documentación legal de EROSCAPE.',
  },
  [ROUTES.reservar]: {
    title: 'Reservar — EROSCAPE',
    description: 'Reserva tu experiencia EROSCAPE en Granada, Málaga o Sevilla.',
  },
  [ROUTES.eventos]: {
    title: 'Eventos y corporativo — EROSCAPE',
    description: 'Despedidas, team building y eventos personalizados con EROSCAPE.',
  },
  [ROUTES.precios]: {
    title: 'Precios y ofertas — EROSCAPE',
    description: 'Niveles de intensidad, métodos de pago y promociones por ciudad.',
  },
  [ROUTES.boutique]: {
    title: 'Boutique — EROSCAPE',
    description: 'Kits, juegos y accesorios para personalizar tu experiencia.',
  },
  [ROUTES.digital]: {
    title: 'EROSCAPE Digital — App 2026',
    description: 'EROSCAPE ONLINE: experiencias digitales con IA y multijugador.',
  },
  [ROUTES.franquicia]: {
    title: 'Franquicia — EROSCAPE',
    description: 'Lleva EROSCAPE a tu ciudad. Oportunidad de franquicia mundial.',
  },
  [ROUTES.faq]: {
    title: 'Preguntas frecuentes — EROSCAPE',
    description: 'Resuelve tus dudas sobre reservas, seguridad y la experiencia.',
  },
};
