import { Event } from '../types';

export const events: Event[] = [
  {
    id: 'noche-mascaras',
    date: '15 Feb',
    name: 'Noche de Máscaras',
    description: 'Una velada veneciana con baile, música en vivo y experiencias grupales',
    spotsAvailable: 12,
    price: 75,
  },
  {
    id: 'san-valentin-tardio',
    date: '28 Feb',
    name: 'San Valentín Tardío',
    description: 'Para parejas que prefieren celebrar el amor fuera del bullicio comercial',
    spotsAvailable: 8,
    price: 85,
  },
  {
    id: 'taller-comunicacion',
    date: '10 Mar',
    name: 'Taller de Comunicación Íntima',
    description: 'Aprende técnicas de comunicación sensual con tu pareja',
    spotsAvailable: 6,
    price: 95,
  },
];
