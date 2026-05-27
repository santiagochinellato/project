export type ExperienceTier = 'normal' | 'premium';

export interface ThematicExperience {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  tier: ExperienceTier;
  /** Tailwind object-position utility, e.g. `object-center` */
  imagePosition?: string;
}

export const thematicExperiences: ThematicExperience[] = [
  {
    id: 'la-mascarada',
    title: 'La Mascarada',
    subtitle: 'Ritual · Identidad · Grupos',
    description:
      'Velvet rojo, máscaras y enigmas ceremoniales. Un salón oscuro donde las reglas cambian y cada decisión tiene peso.',
    image: '/images/lamascarada.png',
    tier: 'premium',
    imagePosition: 'object-center',
  },
  {
    id: 'la-confesion',
    title: 'La Confesión',
    subtitle: 'Intimidad · Velas · Misterio',
    description:
      'Un salón privado iluminado solo por velas. Whiskey, cuero y secretos que solo se revelan en voz baja.',
    image: '/images/laconfesion.png',
    tier: 'normal',
    imagePosition: 'object-center',
  },
  {
    id: 'habitacion-veneciana',
    title: 'Habitación Veneciana',
    subtitle: 'Canal · Seda · Mascarada',
    description:
      'Seda púrpura, máscaras venecianas y la ciudad reflejada en el agua. Elegancia clásica con un giro sensual.',
    image: '/images/habitacioveneciana.png',
    tier: 'normal',
    imagePosition: 'object-[center_35%]',
  },
  {
    id: 'espejo-negro',
    title: 'Espejo Negro',
    subtitle: 'Neón · Reflejos · Tensión',
    description:
      'Luces magenta, espejos infinitos y siluetas en penumbra. Una experiencia futurista donde el deseo se multiplica.',
    image: '/images/espejonegro.png',
    tier: 'premium',
    imagePosition: 'object-center',
  },
  {
    id: 'el-coleccionista',
    title: 'El Coleccionista',
    subtitle: 'Museo · Arte · Obsesión',
    description:
      'Vitrinas doradas, objetos prohibidos y velas en un salón de coleccionista. Cada pieza es una pista hacia el placer.',
    image: '/images/coleccionista.png',
    tier: 'premium',
    imagePosition: 'object-center',
  },
];

/** Destacadas en home / teasers */
export const featuredExperienceIds = ['la-mascarada', 'habitacion-veneciana', 'espejo-negro'] as const;

export function getFeaturedExperiences() {
  return featuredExperienceIds
    .map((id) => thematicExperiences.find((e) => e.id === id))
    .filter((e): e is ThematicExperience => Boolean(e));
}
