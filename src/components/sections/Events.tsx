import { useNavigate } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import EventsShowcase from './EventsShowcase';
import { ROUTES } from '../../lib/paths';

interface EventsProps {
  onRequestSpecialEvent?: (eventTypeId?: string) => void;
}

export default function Events({ onRequestSpecialEvent }: EventsProps) {
  const navigate = useNavigate();

  const requestQuote =
    onRequestSpecialEvent ??
    ((eventTypeId?: string) => {
      const query = eventTypeId ? `?tipo=${eventTypeId}` : '';
      navigate(`${ROUTES.eventos}${query}#reservar-evento`);
    });

  return (
    <Section id="eventos" dark>
      <SectionHeader
        eyebrow="EVENTOS · CORPORATIVO"
        title="Eventos & Corporativo"
        intro="Experiencias personalizadas para ocasiones especiales, team building empresarial y eventos de la comunidad. Siempre con nuestro sello de elegancia y profesionalidad."
      />

      <EventsShowcase variant="full" onRequestQuote={requestQuote} />

      <Card variant="featured" className="mt-12 md:mt-16 text-center" hover={false}>
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
          ¿Tienes una ocasión especial en mente?
        </h3>
        <p className="font-body text-eroscape-text-secondary mb-6 max-w-2xl mx-auto">
          Contacta con nuestro equipo de eventos para crear una experiencia completamente
          personalizada para ti y tu grupo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => requestQuote()}>Solicitar propuesta</Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = 'mailto:eventos@eroscape.com')}
          >
            eventos@eroscape.com
          </Button>
        </div>
      </Card>
    </Section>
  );
}
