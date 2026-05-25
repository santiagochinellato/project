export type IntensityLevel = 'Suave' | 'Media' | 'Alta' | 'Bajo' | 'Medio' | 'Avanzado';

export interface ExperienceExtra {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bebidas' | 'decoracion' | 'juguetes' | 'lenceria' | 'tiempo';
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  duration: string;
  intensity: IntensityLevel | IntensityLevel[];
  persons: string;
  includes: string[];
  idealFor?: string[];
  price: number;
  badge?: string;
  story?: string[];
  highlights?: {
    title: string;
    description: string;
    icon: string;
  }[];
  availableExtras?: ExperienceExtra[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface Event {
  id: string;
  date: string;
  name: string;
  description: string;
  spotsAvailable: number;
  price: number;
}

export interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}
