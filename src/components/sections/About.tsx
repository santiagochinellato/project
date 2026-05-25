import { Heart, Lock, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function About() {
  return (
    <Section id="experiencia" className="relative">
      <div className="absolute inset-0 opacity-5">
        <img src="/images/img_7303.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ¿Qué es EROSCAPE ROOM®?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            EROSCAPE ROOM® es el <span className="text-purple-400 font-semibold">primer Escape Room Erótico del mundo</span>.
          </p>
          <p>
            Una experiencia <span className="font-semibold text-white">física y presencial</span> en tu ciudad. No es un escape room tradicional. No es un club. No es "una cita".
          </p>
          <p className="text-xl text-purple-300 font-medium">
            Resuelve enigmas, descifra códigos y deja que la <span className="text-white">IA te guíe</span> a través del misterio...
          </p>
          <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
            ...hasta llegar a la habitación final: un espacio íntimo diseñado para el placer.
          </p>
          <p className="text-gray-400 text-base italic">
            Columpio, jacuzzi, ambiente tematizado... cada detalle pensado para que disfrutes del premio final.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card>
          <div className="text-center">
            <Heart className="mx-auto mb-4 text-pink-400" size={48} fill="currentColor" />
            <h3 className="text-xl font-bold text-purple-300 mb-3">Lovers</h3>
            <p className="text-gray-400">
              Para parejas que quieren reconectar, jugar y volver a mirarse distinto. Resuelve enigmas juntos y llega a la habitación de placer.
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Sparkles className="mx-auto mb-4 text-purple-400" size={48} />
            <h3 className="text-xl font-bold text-purple-300 mb-3">Plan Golfo</h3>
            <p className="text-gray-400">
              Para amigos con tensión, rolletes o parejas aventureras. Juego, adrenalina, risas nerviosas y una habitación final que no olvidarás.
            </p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Lock className="mx-auto mb-4 text-pink-400" size={48} />
            <h3 className="text-xl font-bold text-purple-300 mb-3">Libertino</h3>
            <p className="text-gray-400">
              Para swingers y mentes muy abiertas. Tres niveles de intensidad. El escape te lleva a una habitación tematizada de exploración total.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-16 space-y-8">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">El Secreto</h3>
            <p className="text-gray-300 text-lg italic">
              No desvelamos pruebas ni recorrido.
              <br />
              Porque el misterio… es parte del placer.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Game Master IA</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Todas las experiencias son guiadas por una <span className="text-purple-400 font-semibold">Game Master de Inteligencia Artificial automatizada</span>.
              <br />
              <span className="text-gray-400">No hay presencia física humana durante tu experiencia.</span>
              <br />
              La IA te guía, adapta la narrativa y respeta tus límites en tiempo real.
              <br />
              <span className="text-purple-300 font-semibold">Si surge cualquier problema, contacto humano inmediato disponible desde la app.</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </Section>
  );
}
