import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import EventsShowcase from './EventsShowcase';

interface EventsProps {
  onRequestSpecialEvent: (eventTypeId?: string) => void;
}

export default function Events({ onRequestSpecialEvent }: EventsProps) {
  return (
    <Section id="eventos" dark>
      <SectionHeader
        eyebrow="EVENTOS · CORPORATIVO"
        title="Eventos & Corporativo"
        intro="Experiencias personalizadas para ocasiones especiales, team building empresarial y eventos de la comunidad. Siempre con nuestro sello de elegancia y profesionalidad."
      />

      <EventsShowcase variant="full" onRequestQuote={onRequestSpecialEvent} />

      <Card variant="featured" className="mt-12 md:mt-16 text-center" hover={false}>
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
          ¿Tienes una ocasión especial en mente?
        </h3>
        <p className="font-body text-eroscape-text-secondary mb-6 max-w-2xl mx-auto">
          Contacta con nuestro equipo de eventos para crear una experiencia completamente
          personalizada para ti y tu grupo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => onRequestSpecialEvent('personalizado')}>
            Solicitar cotización
          </Button>
          <a
            href="mailto:eventos@eroscape.com"
            className="inline-flex items-center justify-center gap-2 font-body font-semibold px-6 py-3 text-base rounded-xl bg-transparent border border-purple-500/40 hover:border-purple-400/70 hover:bg-purple-500/[0.06] text-purple-300 hover:text-eroscape-text-primary transition-[transform,opacity,box-shadow,background-color,border-color,color] duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            eventos@eroscape.com
          </a>
        </div>
      </Card>
    </Section>
  );
}
