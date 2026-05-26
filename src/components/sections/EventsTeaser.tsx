import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import EventsShowcase from './EventsShowcase';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

export default function EventsTeaser() {
  const { navigate } = useSiteNavigate();

  const requestQuote = (eventTypeId?: string) => {
    const query = eventTypeId ? `?tipo=${eventTypeId}` : '';
    navigate(`${ROUTES.eventos}${query}#reservar-evento`);
  };

  return (
    <Section id="eventos-preview">
      <SectionHeader
        eyebrow="EVENTOS"
        title="Corporativo y ocasiones especiales"
        intro="Despedidas, aniversarios y team building con el sello EROSCAPE."
      />

      <EventsShowcase variant="compact" onRequestQuote={requestQuote} />

      <div className="text-center mt-10">
        <Link to={ROUTES.eventos}>
          <Button size="lg" className="pointer-events-none">
            Ver eventos y solicitar propuesta
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
