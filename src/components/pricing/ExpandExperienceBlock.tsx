import { Calendar, Gift, Shield } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ExpandExperienceBlockProps {
  onNavigate: (section: string) => void;
  onOpenBoutique?: () => void;
  className?: string;
}

export default function ExpandExperienceBlock({
  onNavigate,
  onOpenBoutique,
  className = '',
}: ExpandExperienceBlockProps) {
  const openBoutique = () => {
    if (onOpenBoutique) {
      onOpenBoutique();
      return;
    }
    onNavigate('boutique');
  };

  return (
    <div className={className}>
      <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/40">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-eroscape-text-primary mb-4">
            Amplía Tu Experiencia
          </h3>
          <p className="font-body text-eroscape-text-secondary max-w-2xl mx-auto">
            Personaliza tu visita añadiendo extras para hacer tu experiencia aún más especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-xl p-6 text-center">
            <Calendar className="mx-auto text-purple-400 mb-4" size={40} strokeWidth={1.5} />
            <h4 className="font-heading text-eroscape-text-primary font-bold mb-2">Tiempo Adicional</h4>
            <p className="font-body text-eroscape-text-muted text-sm mb-3">
              Extiende tu experiencia con más tiempo en la sala
            </p>
            <ul className="font-body text-eroscape-text-secondary text-sm space-y-1">
              <li>+30 minutos</li>
              <li>+60 minutos</li>
              <li>+120 minutos</li>
            </ul>
          </div>

          <div className="bg-black/30 rounded-xl p-6 text-center">
            <Gift className="mx-auto text-purple-400 mb-4" size={40} strokeWidth={1.5} />
            <h4 className="font-heading text-eroscape-text-primary font-bold mb-2">
              Experiencia Personalizada
            </h4>
            <p className="font-body text-eroscape-text-muted text-sm mb-3">
              Diseña una experiencia única adaptada a vuestros deseos
            </p>
            <ul className="font-body text-eroscape-text-secondary text-sm space-y-1">
              <li>Escenarios a medida</li>
              <li>Ambientación especial</li>
              <li>Experiencias temáticas</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={openBoutique}
            className="bg-black/30 rounded-xl p-6 text-center w-full transition-[background-color,border-color,transform] duration-300 hover:bg-purple-500/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 border border-transparent hover:border-purple-500/30"
          >
            <Shield className="mx-auto text-purple-400 mb-4" size={40} strokeWidth={1.5} />
            <h4 className="font-heading text-eroscape-text-primary font-bold mb-2">Productos Boutique</h4>
            <p className="font-body text-eroscape-text-muted text-sm mb-3">
              Añade productos de nuestra boutique exclusiva
            </p>
            <ul className="font-body text-eroscape-text-secondary text-sm space-y-1">
              <li>Juguetes íntimos</li>
              <li>Lencería premium</li>
              <li>Vestuario y disfraces</li>
              <li>Accesorios especiales</li>
            </ul>
            <span className="mt-4 inline-block font-body text-sm text-purple-300">Ir a la boutique →</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={openBoutique} className="min-w-[14rem]">
            Ver todos los extras disponibles
          </Button>
          <Button variant="outline" onClick={() => onNavigate('reservar')}>
            Reservar con extras
          </Button>
        </div>
      </Card>
    </div>
  );
}
