import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';
import { specialOffers } from '../../data/specialOffers';

interface OffersPromoCitiesBlockProps {
  className?: string;
}

export default function OffersPromoCitiesBlock({ className = '' }: OffersPromoCitiesBlockProps) {
  const navigate = useNavigate();
  const { goToBooking } = useSiteNavigate();

  return (
    <div className={className}>
      <div className="mb-12">
        <h3 className="font-display text-2xl md:text-3xl font-light italic text-center text-gradient-brand mb-8">
          Ofertas Especiales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <button
                key={offer.id}
                type="button"
                onClick={goToBooking}
                className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-2xl"
              >
                <Card className="h-full text-center transition-[border-color,transform] duration-300 group-hover:border-purple-500/40 group-hover:-translate-y-1 cursor-pointer">
                  <Icon className="mx-auto text-purple-400 mb-4" size={40} strokeWidth={1.5} />
                  <h4 className="font-heading text-lg font-bold text-eroscape-text-primary mb-2">
                    {offer.title}
                  </h4>
                  <p className="font-body text-eroscape-text-muted">{offer.description}</p>
                  <span className="mt-4 inline-block font-body text-sm text-purple-300 group-hover:text-purple-200">
                    Reservar con esta oferta →
                  </span>
                </Card>
              </button>
            );
          })}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 mb-12">
        <div className="text-center">
          <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-4">
            ¿Tienes un código promocional?
          </h3>
          <p className="font-body text-eroscape-text-muted text-sm mb-6 max-w-md mx-auto">
            Aplícalo al reservar tu experiencia. Te lo pediremos en el formulario.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Código promocional"
              className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted focus:outline-none focus:border-purple-500 font-body"
            />
            <Button className="shrink-0" onClick={goToBooking}>
              Aplicar
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => navigate(ROUTES.salas)}>
              Ver salas y experiencias
            </Button>
            <Button onClick={goToBooking}>Ir a reservar</Button>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <div className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-xl p-6">
          <h4 className="font-body text-purple-300 font-semibold mb-4">Ciudades disponibles</h4>
          <div className="space-y-2">
            <p className="font-body text-eroscape-text-secondary text-lg font-semibold">Ahora mismo:</p>
            <p className="font-body text-purple-300 text-lg">Granada · Málaga · Sevilla</p>
            <p className="font-body text-eroscape-text-muted text-sm mt-4 mb-2">Próximamente:</p>
            <p className="font-body text-eroscape-text-muted">
              Madrid · Barcelona · Valencia · Alicante · Murcia
            </p>
          </div>
          <Button className="mt-6" onClick={goToBooking}>
            Reservar en tu ciudad
          </Button>
        </div>
      </div>
    </div>
  );
}
