import { Heart, Flame, Zap } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { intensityLevels } from '../../data/intensityLevels';

const levelIcons = {
  bajo: Heart,
  medio: Flame,
  turbio: Zap,
} as const;

interface IntensityLevelsBlockProps {
  onReserve?: () => void;
  showReserveButton?: boolean;
}

export default function IntensityLevelsBlock({
  onReserve,
  showReserveButton = true,
}: IntensityLevelsBlockProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="font-heading text-2xl md:text-3xl font-semibold text-eroscape-text-primary mb-4">
        Elige el nivel de tu experiencia
      </h3>
      <p className="font-body text-eroscape-text-secondary leading-relaxed mb-10">
        Cualquier sala o experiencia temática puede vivirse en{' '}
        <strong className="text-purple-300">bajo</strong>, <strong className="text-purple-300">medio</strong>{' '}
        o <strong className="text-purple-300">turbio</strong>. Al reservar, nos indicas cómo queréis sentirla:
        nosotros adaptamos el ritmo, las pruebas y la habitación final a vuestros límites.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-10">
        {intensityLevels.map((level) => {
          const Icon = levelIcons[level.id];
          return (
            <Card key={level.id} hover={false} className="text-center !p-5 md:!p-6">
              <Icon className="mx-auto mb-3 text-purple-400" size={32} strokeWidth={1.5} aria-hidden />
              <p className="font-display text-xl font-semibold text-gradient-brand mb-1">{level.name}</p>
              <p className="font-body text-xs uppercase tracking-wider text-purple-400/90 mb-3">
                {level.tagline}
              </p>
              <p className="font-body text-sm text-eroscape-text-muted leading-relaxed">
                {level.description}
              </p>
            </Card>
          );
        })}
      </div>

      <p className="font-body text-sm text-eroscape-text-muted mb-8">
        Duración base 2 h · Ampliaciones +30 / +60 / +90 min · Lo concretamos en la reserva
      </p>

      {showReserveButton && onReserve && (
        <Button size="lg" onClick={onReserve} className="min-w-[12rem]">
          Reservar ya
        </Button>
      )}
    </div>
  );
}
