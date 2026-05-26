import { useSearchParams } from 'react-router-dom';
import PageBackLink from '../components/layout/PageBackLink';
import Events from '../components/sections/Events';
import SpecialEventBooking from '../components/sections/SpecialEventBooking';
import { ROUTES } from '../lib/paths';
import { useSiteNavigate } from '../hooks/useSiteNavigate';

export default function EventosPage() {
  const [searchParams] = useSearchParams();
  const eventType = searchParams.get('tipo') ?? '';
  const { navigate } = useSiteNavigate();

  const requestQuote = (eventTypeId?: string) => {
    const query = eventTypeId ? `?tipo=${eventTypeId}` : '';
    navigate(`${ROUTES.eventos}${query}#reservar-evento`);
  };

  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <Events onRequestSpecialEvent={requestQuote} />
      <SpecialEventBooking initialEventType={eventType} />
    </main>
  );
}
