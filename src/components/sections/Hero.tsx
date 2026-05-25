import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../ui/Section';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <Section id="home" className="!pt-0 min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: 'url(/images/img_7280.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

      <div className="relative z-10 text-center w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Atrévete a entrar.
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Salir es otra historia.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          No es un juego. Es una experiencia sensorial.
          <br />
          Diseñado para adultos que saben jugar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            +18
          </div>
          <div className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Inclusivo
          </div>
          <div className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Seguro
          </div>
          <div className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Discreto
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => onNavigate('reservar')}>
            <Sparkles className="mr-2" size={20} />
            Reservar ahora
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNavigate('salas')}>
            Explorar salas
          </Button>
        </div>

        <div className="mt-16 text-sm text-purple-400 font-semibold">
          EROSCAPE ROOM® — El primer Escape Room Erótico del mundo
          <br />
          <span className="text-gray-500">Único. Original. Inventado por primera vez.</span>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-500/40 rounded-2xl p-6 backdrop-blur-sm animate-pulse hover:animate-none transition-all hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-yellow-400 text-2xl">🌍</span>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-300">
                Oportunidad de Franquicia Mundial
              </h3>
            </div>
            <p className="text-gray-300 mb-4 text-center">
              Se el primero en traer esta experiencia revolucionaria a tu ciudad. Inversión única en un mercado sin competencia.
            </p>
            <button
              onClick={() => onNavigate('franquicia')}
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Descubre la Franquicia
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
