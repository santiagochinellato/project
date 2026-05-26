import { Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

export default function DigitalIntroCover() {
  return (
    <div id="digital-portada">
      <div className="flex justify-center mb-6">
        <Badge variant="accent">NUEVO: LANZAMIENTO 2026</Badge>
      </div>
      <SectionHeader
        eyebrow="DIGITAL · APP"
        title="EROSCAPE ONLINE"
        intro="La revolución de las experiencias íntimas ahora en tu dispositivo. Vive la misma intensidad, misterio y seducción de nuestras salas físicas desde cualquier lugar del mundo."
      />
      <p className="font-body text-lg text-eroscape-text-muted text-center max-w-3xl mx-auto -mt-8 mb-16">
        Con la primera IA Game Master adaptativa diseñada para experiencias adultos.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
            <div className="relative aspect-[9/16] max-w-sm mx-auto bg-eroscape-void rounded-2xl overflow-hidden shadow-glow-purple-lg border-4 border-eroscape-elevated">
              <div className="absolute top-0 inset-x-0 h-8 bg-black flex items-center justify-center">
                <div className="w-24 h-5 bg-eroscape-surface rounded-full" />
              </div>

              <div className="pt-8 h-full bg-gradient-to-b from-purple-950 via-black to-pink-950">
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-purple-300 text-sm font-bold mb-2">BIENVENIDO A</h3>
                    <h2 className="text-white text-2xl font-bold mb-1">El Burdel de Venecia</h2>
                    <p className="text-eroscape-text-muted text-xs">Experiencia Digital Interactiva</p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-4 backdrop-blur">
                    <p className="text-eroscape-text-secondary text-sm leading-relaxed italic">
                      &quot;Las cortinas de terciopelo se abren lentamente... El aroma a jazmín y vainilla llena la
                      estancia. Una figura enigmática te observa desde las sombras...&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <span className="bg-purple-600 text-white py-3 rounded-lg text-sm font-bold text-center">
                      Acercarme
                    </span>
                    <span className="bg-pink-600 text-white py-3 rounded-lg text-sm font-bold text-center">
                      Observar
                    </span>
                  </div>

                  <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 text-xs font-bold">ATMÓSFERA</span>
                      <span className="text-eroscape-text-muted text-xs">Seductora</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        style={{ width: '85%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-3xl font-bold text-eroscape-text-primary mb-4">
              ¿Cómo Funciona?
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Descarga la App',
                  text: 'Disponible en iOS, Android y Web. Instalación en segundos.',
                },
                {
                  step: '2',
                  title: 'Elige tu Aventura',
                  text: 'Selecciona sala, nivel de intensidad y si jugarás solo o acompañado.',
                },
                {
                  step: '3',
                  title: 'Conéctate & Juega',
                  text: 'La IA adapta la narrativa en tiempo real según tus decisiones.',
                },
                {
                  step: '4',
                  title: 'Vive la Experiencia',
                  text: 'Audio inmersivo, efectos visuales y narrativa que se adapta a ti.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-eroscape-text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-eroscape-text-muted text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
            <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2 font-body">
              <Sparkles size={20} strokeWidth={1.5} />
              Tecnología Exclusiva
            </h4>
            <p className="font-body text-eroscape-text-secondary text-sm leading-relaxed">
              Utilizamos la misma IA revolucionaria de nuestras salas físicas, optimizada para dispositivos
              móviles. Procesamiento local para privacidad absoluta y respuestas instantáneas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
