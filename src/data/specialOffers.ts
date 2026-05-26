import { Calendar, Gift, Shield, type LucideIcon } from 'lucide-react';

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: 'parejas-nuevas',
    title: 'Parejas nuevas',
    description: '15% de descuento en primera experiencia',
    icon: Gift,
  },
  {
    id: 'cumpleanos',
    title: 'Cumpleaños y aniversarios',
    description: 'Copa de champagne gratis',
    icon: Calendar,
  },
  {
    id: 'grupos',
    title: 'Grupo de 4+ personas',
    description: '10% descuento por persona',
    icon: Shield,
  },
];
