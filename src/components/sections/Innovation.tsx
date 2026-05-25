import { Brain, Lightbulb, Users2 } from 'lucide-react';
import Section from '../ui/Section';

export default function Innovation() {
  return (
    <Section id="innovacion" className="bg-eroscape-surface">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-eroscape-accent-gold font-semibold mb-4 block">
          I+D
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-eroscape-text mb-6">
          EROSENSE
        </h2>
        <p className="text-lg text-eroscape-text-muted max-w-2xl mx-auto">
          Nuestro motor sensorial personalizado que adapta luz, sonido y aromas
          para crear experiencias únicas orientadas al bienestar y la conexión.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-eroscape-accent-gold/10 rounded-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-eroscape-accent-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-eroscape-text mb-3">
              Tecnología sensorial
            </h3>
            <p className="text-eroscape-text-muted">
              Sistema inteligente que adapta la experiencia en tiempo real
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-eroscape-accent-gold/10 rounded-full flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-eroscape-accent-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-eroscape-text mb-3">
              Bienestar y conexión
            </h3>
            <p className="text-eroscape-text-muted">
              Diseñado para fomentar intimidad emocional y física
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-eroscape-accent-gold/10 rounded-full flex items-center justify-center">
              <Users2 className="w-10 h-10 text-eroscape-accent-gold" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display font-semibold text-eroscape-text mb-3">
              Investigación ética
            </h3>
            <p className="text-eroscape-text-muted">
              Estudios sobre intimidad sin comprometer privacidad
            </p>
          </div>
        </div>

        <div className="bg-eroscape-bg border border-eroscape-border rounded-2xl p-10">
          <h3 className="text-2xl font-display font-bold text-eroscape-text mb-4 text-center">
            Colabora en investigación
          </h3>
          <p className="text-eroscape-text-muted text-center mb-6 max-w-2xl mx-auto">
            Si eres investigador, terapeuta de pareja o profesional del bienestar,
            te invitamos a explorar cómo EROSENSE puede contribuir a tu trabajo.
          </p>
          <div className="text-center">
            <button className="px-8 py-4 bg-transparent border border-eroscape-accent-gold text-eroscape-accent-gold font-semibold rounded-lg hover:bg-eroscape-accent-gold hover:text-eroscape-bg transition-all duration-300">
              Más información
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
