import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

export default function Hero() {
  const { goToBooking } = useSiteNavigate();
  return (
    <Section id="home" noPadding className="min-h-screen flex items-center relative overflow-hidden !px-5 md:!px-8 pt-0">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: 'url(/images/img_7280.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-700/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center w-full py-24 md:py-32">
        <h1 className="font-display font-light italic text-5xl md:text-7xl mb-6 leading-[1.05] tracking-tight text-gradient-brand">
          Atrévete a entrar.
          <br />
          Salir es otra historia.
        </h1>

        <p className="font-body text-xl md:text-2xl text-eroscape-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          No es un juego. Es una experiencia sensorial.
          <br />
          Diseñado para adultos que saben jugar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Badge variant="adult">+18</Badge>
          <Badge variant="accent">Inclusivo</Badge>
          <Badge variant="accent">Seguro</Badge>
          <Badge variant="accent">Discreto</Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={goToBooking}>
            <Sparkles size={20} strokeWidth={1.5} />
            Reservar ahora
          </Button>
          <Link to={ROUTES.salas}>
            <Button variant="outline" size="lg" className="pointer-events-none">
              Explorar salas
            </Button>
          </Link>
        </div>

        <div className="mt-16 font-body text-sm text-purple-400 font-medium">
          EROSCAPE ROOM® — El primer Escape Room Erótico del mundo
          <br />
          <span className="text-eroscape-text-muted">Único. Original. Inventado por primera vez.</span>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-950/30 via-eroscape-surface to-amber-950/20 border border-yellow-500/35 rounded-2xl p-6 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-eroscape-gold text-2xl">🌍</span>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-gradient-gold">
                Oportunidad de Franquicia Mundial
              </h3>
            </div>
            <p className="font-body text-eroscape-text-secondary mb-4 text-center">
              Se el primero en traer esta experiencia revolucionaria a tu ciudad. Inversión única en un
              mercado sin competencia.
            </p>
            <Link to={ROUTES.franquicia}>
              <Button variant="gold" fullWidth className="pointer-events-none">
                Descubre la Franquicia
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
