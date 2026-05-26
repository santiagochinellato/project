import { Calendar, Gift, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

const expansions = [
  {
    icon: Calendar,
    title: 'Más tiempo en sala',
    text: '+30, +60 o +90 minutos según disponibilidad.',
  },
  {
    icon: Sparkles,
    title: 'Experiencia a medida',
    text: 'Ambientación, temática o dinámicas personalizadas.',
  },
  {
    icon: Gift,
    title: 'Desde la boutique',
    text: 'Kits y accesorios para prolongar la magia en casa.',
  },
] as const;

export default function ExperienceExpansionTeaser() {
  const navigate = useNavigate();
  const { goToBooking } = useSiteNavigate();

  return (
    <div className="pt-10 border-t border-purple-500/15">
      <div className="text-center mb-8">
        <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/90 mb-3">
          AMPLÍA TU EXPERIENCIA
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-eroscape-text-primary mb-3">
          Hazla aún más tuya
        </h3>
        <p className="font-body text-eroscape-text-secondary max-w-2xl mx-auto">
          Cualquier experiencia puede ampliarse con tiempo extra, personalización o productos de
          boutique. Elige sala y nivel al reservar; el resto lo afinamos contigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 max-w-5xl mx-auto">
        {expansions.map(({ icon: Icon, title, text }) => (
          <Card key={title} hover={false} className="text-center !p-5">
            <Icon className="mx-auto text-purple-400 mb-3" size={32} strokeWidth={1.5} />
            <h4 className="font-heading text-lg font-semibold text-eroscape-text-primary mb-2">
              {title}
            </h4>
            <p className="font-body text-sm text-eroscape-text-muted">{text}</p>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        <Button onClick={() => navigate(ROUTES.salas)}>Ver salas y experiencias</Button>
        <Button variant="outline" onClick={goToBooking}>
          Reservar ya
        </Button>
        <Button variant="ghost" onClick={() => navigate(ROUTES.boutique)}>
          Explorar boutique
        </Button>
      </div>
    </div>
  );
}
