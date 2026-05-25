import { Shield, Users, Lock, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

interface FinalCTAProps {
  onNavigate: (section: string) => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <Section id="final-cta" dark className="text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/img_7280.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          ¿Listos para el juego?
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Tu próxima aventura te está esperando. Una experiencia que recordaréis para siempre, en un entorno seguro, elegante y completamente personalizado según vuestros deseos.
        </p>

        <p className="text-gray-400 mb-4">
          Guiada por una Game Master de Inteligencia Artificial automatizada consciente del consentimiento, cada experiencia es única, irrepetible y creada solo para vosotros. Sin presencia humana durante la experiencia, pero con soporte inmediato disponible desde la app ante cualquier necesidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-white font-bold mb-2">Solo Adultos</h4>
            <p className="text-gray-400 text-sm">Experiencia exclusiva para mayores de edad</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-white font-bold mb-2">100% Consensuado</h4>
            <p className="text-gray-400 text-sm">Tu palabra segura siempre será respetada</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
              <Lock className="text-white" size={32} />
            </div>
            <h4 className="text-white font-bold mb-2">Máxima Privacidad</h4>
            <p className="text-gray-400 text-sm">Sin grabaciones, total confidencialidad</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8 mb-8">
          <p className="text-xl text-purple-200 font-semibold mb-2">
            Prometemos discreción, cuidamos tu seguridad y garantizamos una experiencia irrepetible.
          </p>
          <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
            El deseo no espera. La aventura comienza con un clic.
          </p>
        </div>

        <Button size="lg" onClick={() => onNavigate('reservar')} className="text-xl px-12 py-5">
          <Sparkles className="mr-2" size={24} />
          Reservar mi experiencia
        </Button>

        <div className="mt-12 text-purple-400 font-semibold">
          EROSCAPE ROOM®
          <br />
          <span className="text-gray-500">El primer Escape Room Erótico del mundo.</span>
          <br />
          <span className="text-gray-600 text-sm">Gracias por llegar hasta aquí.</span>
          <br />
          <span className="text-gray-600 text-sm italic">El resto… solo se vive dentro.</span>
        </div>
      </div>
      </div>
    </Section>
  );
}
