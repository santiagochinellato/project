import { Sparkles, Lock, Waves } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function FinalRoom() {
  return (
    <Section id="habitacion-final" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Lock className="mx-auto text-amber-400" size={56} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-gray-200 to-amber-200 bg-clip-text text-transparent">
            Disfruta la experiencia hasta el final
          </h2>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-semibold mb-4">
            La habitación final es <span className="text-white text-3xl">el destino</span> de toda la experiencia.
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Una pasada de espacio donde posar al postureo. Todas las experiencias y temáticas son totalmente diferentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-amber-700/30">
            <div className="text-center">
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nocturna</h3>
              <p className="text-amber-400 font-semibold mb-2 text-sm">Habitación Tematizada</p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Opulenta para seguir el juego. Una pasada de espacio con temática urbana y cruda.
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-amber-700/30">
            <div className="text-center">
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tenebrosa</h3>
              <p className="text-amber-400 font-semibold mb-2 text-sm">Habitación Tematizada</p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Opulenta para seguir el juego. Una pasada de espacio con temática misteriosa.
              </p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900/90 to-black/90 border-amber-700/30">
            <div className="text-center">
              <div className="bg-amber-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Simulación</h3>
              <p className="text-amber-400 font-semibold mb-2 text-sm">Habitación Tematizada</p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Opulenta para seguir el juego. Una pasada de espacio futurista y envolvente.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/20 via-gray-900/80 to-black border-2 border-amber-700/30 rounded-2xl p-8 md:p-12">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl text-gray-200 text-center">
                Cada sala temática tiene su propia <span className="text-white font-bold">habitación de placer tematizada</span>, opulenta para seguir el juego.
              </p>

              <div className="bg-black/50 rounded-xl p-6 border border-amber-700/20">
                <h4 className="text-amber-400 font-bold mb-4 text-center text-lg">Todo lo necesario para que disfrutes del momento sin límites</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Bondage elegante
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Columpios
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Jacuzzis
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Luz controlable
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Música envolvente
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">•</span>
                    Privacidad absoluta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
