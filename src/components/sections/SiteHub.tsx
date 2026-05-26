import {
  Sparkles,
  DoorOpen,
  Shield,
  CalendarCheck,
  PartyPopper,
  ShoppingBag,
  CreditCard,
  Smartphone,
  Globe,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { ROUTES } from '../../lib/paths';

const hubItems = [
  {
    to: ROUTES.experiencia,
    icon: Sparkles,
    title: 'Experiencia',
    description: 'Qué es EROSCAPE, perfiles y cómo funciona la sesión.',
  },
  {
    to: ROUTES.salas,
    icon: DoorOpen,
    title: 'Salas',
    description: 'Temáticas, intensidad y personalización de tu juego.',
  },
  {
    to: ROUTES.seguridad,
    icon: Shield,
    title: 'Seguridad',
    description: 'Consentimiento, privacidad e información legal.',
  },
  {
    to: ROUTES.reservar,
    icon: CalendarCheck,
    title: 'Reservar',
    description: 'Elige ciudad, sala e intensidad. Reserva en minutos.',
  },
  {
    to: ROUTES.eventos,
    icon: PartyPopper,
    title: 'Eventos',
    description: 'Corporativo, despedidas y ocasiones especiales.',
  },
  {
    to: ROUTES.boutique,
    icon: ShoppingBag,
    title: 'Boutique',
    description: 'Kits y accesorios para elevar tu experiencia.',
  },
  {
    to: ROUTES.precios,
    icon: CreditCard,
    title: 'Precios',
    description: 'Intensidad, pagos, garantías y ofertas por ciudad.',
  },
  {
    to: ROUTES.digital,
    icon: Smartphone,
    title: 'Digital',
    description: 'EROSCAPE ONLINE 2026 — app con IA multijugador.',
    badge: 'Nuevo',
  },
  {
    to: ROUTES.franquicia,
    icon: Globe,
    title: 'Franquicia',
    description: 'Lleva la experiencia a tu ciudad.',
    highlight: true,
  },
  {
    to: ROUTES.faq,
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Respuestas sobre reservas, límites y privacidad.',
  },
] as const;

export default function SiteHub() {
  return (
    <Section id="explorar">
      <SectionHeader
        eyebrow="EXPLORA EROSCAPE"
        title="Todo lo esencial, en un vistazo"
        intro="Cada tema tiene su propia página con más detalle. Empieza aquí y profundiza donde quieras."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {hubItems.map((item) => (
          <Link key={item.to} to={item.to} className="group block h-full">
            <Card
              hover
              className={`h-full transition-transform duration-300 group-hover:-translate-y-1 ${
                'highlight' in item && item.highlight ? 'border-yellow-500/35' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    'highlight' in item && item.highlight
                      ? 'bg-yellow-500/15 text-eroscape-gold'
                      : 'bg-purple-500/15 text-purple-300'
                  }`}
                >
                  <item.icon size={24} strokeWidth={1.5} />
                </span>
                <div className="min-w-0 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className={`font-heading text-lg font-semibold ${
                        'highlight' in item && item.highlight
                          ? 'text-eroscape-gold'
                          : 'text-eroscape-text-primary'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {'badge' in item && item.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-200">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-body text-sm text-eroscape-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
