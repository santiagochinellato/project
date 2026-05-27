import { ArrowDown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import Badge from '../ui/Badge';
import { ROUTES } from '../../lib/paths';

export default function Hero() {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 88;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <Section
      id="home"
      noPadding
      className="relative flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden !px-4 sm:!px-6 md:!px-8 lg:min-h-[calc(100dvh-5rem)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-35"
        style={{ backgroundImage: 'url(/images/img_7280.jpeg)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-eroscape-void"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-700/15 blur-[100px] sm:-right-40 sm:-top-40 sm:h-96 sm:w-96 sm:blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl py-14 text-center sm:py-20 md:py-24 lg:py-28">
        <h1 className="font-display mb-5 text-[1.875rem] font-light italic leading-[1.08] tracking-tight text-gradient-brand min-[480px]:text-[2.25rem] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Atrévete a entrar.
          <br className="hidden min-[480px]:inline" />
          <span className="min-[480px]:hidden"> </span>
          Salir es otra historia.
        </h1>

        <p className="font-body mx-auto mb-6 max-w-2xl text-base leading-relaxed text-eroscape-text-secondary sm:mb-8 sm:text-lg md:max-w-3xl md:text-xl lg:text-2xl">
          No es un juego. Es una experiencia sensorial.
          <span className="hidden sm:inline">
            <br />
          </span>
          <span className="sm:hidden"> </span>
          Diseñado para adultos que saben jugar.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          <Badge variant="adult">+18</Badge>
          <Badge variant="accent">Inclusivo</Badge>
          <Badge variant="accent">Seguro</Badge>
          <Badge variant="accent">Discreto</Badge>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
          <Button
            size="lg"
            onClick={() => scrollTo('experiencia')}
            className="w-full sm:w-auto sm:min-w-[12rem]"
          >
            <ArrowDown size={20} strokeWidth={1.5} />
            Descubrí más
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('salas')}
            className="w-full sm:w-auto sm:min-w-[12rem]"
          >
            Explorar salas
          </Button>
        </div>

        <div className="mt-10 font-body text-xs font-medium text-purple-400 sm:mt-14 sm:text-sm">
          <p>EROSCAPE ROOM® — El primer Escape Room Erótico del mundo</p>
          <p className="mt-1 text-eroscape-text-muted">
            Único. Original. Inventado por primera vez.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-xl sm:mt-10 md:max-w-2xl lg:max-w-3xl">
          <div className="rounded-2xl border border-yellow-500/35 bg-gradient-to-br from-yellow-950/30 via-eroscape-surface to-amber-950/20 p-4 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 sm:p-6 md:hover:-translate-y-1">
            <div className="mb-3 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <span className="text-xl text-eroscape-gold sm:text-2xl" aria-hidden="true">
                🌍
              </span>
              <h3 className="font-heading text-lg font-bold text-gradient-gold sm:text-xl md:text-2xl">
                Oportunidad de Franquicia Mundial
              </h3>
            </div>
            <p className="font-body mb-4 text-center text-sm leading-relaxed text-eroscape-text-secondary sm:text-base">
              Sé el primero en traer esta experiencia revolucionaria a tu ciudad. Inversión única en un
              mercado sin competencia.
            </p>
            <Button variant="gold" fullWidth onClick={() => navigate(ROUTES.franquicia)}>
              Descubre la Franquicia
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
