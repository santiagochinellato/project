import { Briefcase, Calendar, Heart, PartyPopper, type LucideIcon } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { corporateEventTypes, type CorporateEventType } from '../../data/corporateEvents';

const iconById: Record<string, LucideIcon> = {
  despedidas: PartyPopper,
  aniversarios: Heart,
  corporativos: Briefcase,
  'noches-tematicas': Calendar,
};

interface EventsShowcaseProps {
  variant?: 'full' | 'compact';
  onRequestQuote: (eventTypeId?: string) => void;
}

function EventTypeCard({
  event,
  compact,
  onRequestQuote,
}: {
  event: CorporateEventType;
  compact?: boolean;
  onRequestQuote: (eventTypeId: string) => void;
}) {
  const Icon = iconById[event.id] ?? Briefcase;

  const handleActivate = () => onRequestQuote(event.id);

  if (compact) {
    return (
      <button
        type="button"
        onClick={handleActivate}
        className="w-full text-left rounded-2xl border border-purple-500/20 bg-eroscape-surface p-5 transition-[border-color,background-color,transform] duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.06] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
      >
        <Icon className="text-purple-400 mb-3" size={28} strokeWidth={1.5} />
        <h4 className="font-heading text-lg font-semibold text-eroscape-text-primary mb-2">
          {event.title}
        </h4>
        <p className="font-body text-sm text-eroscape-text-muted line-clamp-2">{event.description}</p>
        <span className="mt-3 inline-block font-body text-sm text-purple-300">Solicitar propuesta →</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleActivate}
      className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-2xl"
    >
      <Card className="h-full transition-[border-color,transform] duration-300 group-hover:border-purple-500/40 group-hover:-translate-y-1 cursor-pointer">
        <Icon className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3 text-left">
          {event.title}
        </h3>
        <p className="font-body text-eroscape-text-muted mb-6 text-left">{event.description}</p>

        <ul className="space-y-2 mb-6">
          {event.features.map((feature) => (
            <li
              key={feature}
              className="font-body text-eroscape-text-secondary text-sm flex items-start gap-2 text-left"
            >
              <span className="text-purple-400 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-purple-500/20 flex justify-end">
          <span className="font-body text-sm font-medium text-purple-300 group-hover:text-purple-200">
            Solicitar propuesta personalizada →
          </span>
        </div>
      </Card>
    </button>
  );
}

export default function EventsShowcase({ variant = 'full', onRequestQuote }: EventsShowcaseProps) {
  if (variant === 'compact') {
    return (
      <div>
        <div className="text-center mb-8">
          <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/90 mb-3">
            EVENTOS ESPECIALES
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-eroscape-text-primary mb-3">
            ¿Celebración, corporativo o algo único?
          </h3>
          <p className="font-body text-eroscape-text-secondary max-w-2xl mx-auto">
            Despedidas, aniversarios, team building o noches temáticas. Te preparamos una propuesta a
            medida sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {corporateEventTypes.map((event) => (
            <EventTypeCard
              key={event.id}
              event={event}
              compact
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" onClick={() => onRequestQuote('personalizado')}>
            Personalizar mi evento
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {corporateEventTypes.map((event) => (
        <EventTypeCard key={event.id} event={event} onRequestQuote={onRequestQuote} />
      ))}
    </div>
  );
}
