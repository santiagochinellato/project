export type ExperienceTier = 'normal' | 'premium';

export interface ThematicExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  tier: ExperienceTier;
}

export const thematicExperiences: ThematicExperience[] = [
  {
    id: 'fantasia-glamurosa',
    title: 'Fantasía Glamurosa',
    description: 'Un mundo de lujo y sofisticación donde tus fantasías más glamurosas cobran vida',
    image: '/images/experiencias-tematicas/65b4727d-ad81-473f-b1a9-012ea5d45494.png',
    tier: 'normal',
  },
  {
    id: 'misterio-mistico',
    title: 'Misterio Místico',
    description: 'Sumérgete en un ambiente mágico lleno de secretos ancestrales y conocimiento oculto',
    image: '/images/experiencias-tematicas/0c22ccbf-abb1-42ef-9ce2-96d0967f10ad.png',
    tier: 'normal',
  },
  {
    id: 'ritual-prohibido',
    title: 'Ritual Prohibido',
    description: 'Explora el lado oscuro del deseo en una ceremonia íntima y envolvente',
    image: '/images/experiencias-tematicas/46477e27-9f01-4026-b8f8-bdebabd4d869.png',
    tier: 'normal',
  },
  {
    id: 'futuro-neon',
    title: 'Futuro Neón',
    description: 'Una experiencia futurista donde la tecnología y el deseo se fusionan',
    image: '/images/experiencias-tematicas/0ffac5aa-e714-46bc-a35e-cd648058b892.png',
    tier: 'premium',
  },
  {
    id: 'elegancia-infinita',
    title: 'Elegancia Infinita',
    description: 'Reflejos, velas y una atmósfera de elegancia gótica para los sentidos',
    image: '/images/experiencias-tematicas/31906f6f-ec1f-4f7d-8bfd-90c3e7bbd87d.png',
    tier: 'premium',
  },
];
