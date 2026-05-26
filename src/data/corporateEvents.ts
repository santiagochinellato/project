export interface CorporateEventType {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const corporateEventTypes: CorporateEventType[] = [
  {
    id: 'despedidas',
    title: 'Despedidas de Soltero/a',
    description: 'Una despedida única, elegante y memorable para el grupo más íntimo.',
    features: ['Sala privada exclusiva', 'Cócteles personalizados', 'Actividades grupales', 'Fotografía artística'],
  },
  {
    id: 'aniversarios',
    title: 'Aniversarios y Celebraciones',
    description: 'Celebra momentos especiales con una experiencia que nunca olvidaréis.',
    features: ['Decoración personalizada', 'Cena romántica incluida', 'Regalo conmemorativo', 'Servicio de concierge'],
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    description: 'Team building diferente con educación sexual positiva y dinámicas de confianza.',
    features: [
      'Facilitador profesional',
      'Dinámicas de comunicación',
      'Catering premium',
      'Certificado de participación',
    ],
  },
  {
    id: 'noches-tematicas',
    title: 'Noches Temáticas',
    description: 'Eventos especiales mensuales para la comunidad Eroscape.',
    features: ['Temática exclusiva', 'DJ especializado', 'Networking dirigido', 'Descuentos especiales'],
  },
];

export const specialEventTypeLabels: Record<string, string> = {
  despedidas: 'Despedidas de Soltero/a',
  aniversarios: 'Aniversarios y Celebraciones',
  corporativos: 'Eventos Corporativos',
  'noches-tematicas': 'Noches Temáticas',
  'team-building': 'Team Building Diferente',
  personalizado: 'Evento personalizado',
};
