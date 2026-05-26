import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { ROUTES } from '../../lib/paths';

export default function DigitalTeaser() {
  return (
    <Section id="digital-preview" dark>
      <div className="flex justify-center mb-6">
        <Badge variant="accent">NUEVO: LANZAMIENTO 2026</Badge>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/90 mb-4">
          DIGITAL · APP
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light italic text-gradient-brand mb-4">
          EROSCAPE ONLINE
        </h2>
        <p className="font-body text-eroscape-text-secondary leading-relaxed mb-2">
          La misma intensidad, misterio y seducción de nuestras salas físicas, ahora en tu dispositivo.
          IA Game Master adaptativa para jugar en pareja o a distancia.
        </p>
      </div>

      <Card variant="featured" className="max-w-2xl mx-auto mb-10 text-center" hover={false}>
        <Smartphone className="mx-auto text-purple-400 mb-4" size={40} strokeWidth={1.5} />
        <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3">
          ¿Qué es EROSCAPE ONLINE?
        </h3>
        <p className="font-body text-eroscape-text-muted text-sm leading-relaxed">
          Descarga la app, elige tu aventura y conéctate. Narrativa en tiempo real, salas digitales y
          planes de suscripción. Todo explicado en la pestaña Digital.
        </p>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={ROUTES.digital}>
          <Button size="lg" className="min-w-[14rem] pointer-events-none">
            Descubrir Digital
          </Button>
        </Link>
        <Link to={`${ROUTES.digital}#digital-app`}>
          <Button variant="outline" size="lg" className="min-w-[14rem] pointer-events-none">
            Ve a la aplicación
          </Button>
        </Link>
      </div>
    </Section>
  );
}
