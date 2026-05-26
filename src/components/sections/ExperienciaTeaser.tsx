import { Heart, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { ROUTES } from '../../lib/paths';

export default function ExperienciaTeaser() {
  return (
    <Section id="experiencia-preview">
      <SectionHeader
        eyebrow="EXPERIENCIA"
        title="¿Qué es EROSCAPE ROOM®?"
        intro="El primer escape room erótico del mundo: misterio, enigmas y una habitación final diseñada para el placer — siempre con consentimiento."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
        <Card>
          <div className="text-center">
            <Heart className="mx-auto mb-4 text-pink-400" size={40} strokeWidth={1.5} fill="currentColor" />
            <h3 className="font-heading text-lg font-semibold text-purple-300 mb-2">Lovers</h3>
            <p className="font-body text-sm text-eroscape-text-muted text-left">
              Para parejas que quieren reconectar y jugar juntos hasta la habitación final.
            </p>
          </div>
        </Card>
        <Card variant="featured">
          <div className="text-center">
            <Sparkles className="mx-auto mb-4 text-purple-400" size={40} strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-semibold text-purple-300 mb-2">Plan Golfo</h3>
            <p className="font-body text-sm text-eroscape-text-muted text-left">
              Grupos selectos que buscan una experiencia compartida con reglas claras.
            </p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Lock className="mx-auto mb-4 text-eroscape-gold" size={40} strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-semibold text-purple-300 mb-2">Libertino</h3>
            <p className="font-body text-sm text-eroscape-text-muted text-left">
              Exploración avanzada dentro de tus límites, guiada por nuestra Game Master IA.
            </p>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <Link to={ROUTES.experiencia}>
          <Button size="lg" className="pointer-events-none">
            Conocer la experiencia completa
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
