import { Brain, Lightbulb, Users2 } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function Innovation() {
  return (
    <Section id="innovacion" dark>
      <SectionHeader
        eyebrow="I+D · TECNOLOGÍA"
        title="EROSENSE"
        intro="Nuestro motor sensorial personalizado que adapta luz, sonido y aromas para crear experiencias únicas orientadas al bienestar y la conexión."
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
              <Brain className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3">
              Tecnología sensorial
            </h3>
            <p className="font-body text-eroscape-text-muted">
              Sistema inteligente que adapta la experiencia en tiempo real
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
              <Lightbulb className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3">
              Bienestar y conexión
            </h3>
            <p className="font-body text-eroscape-text-muted">
              Diseñado para fomentar intimidad emocional y física
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
              <Users2 className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3">
              Investigación ética
            </h3>
            <p className="font-body text-eroscape-text-muted">
              Estudios sobre intimidad sin comprometer privacidad
            </p>
          </div>
        </div>

        <div className="bg-eroscape-surface border border-purple-500/20 rounded-2xl p-10">
          <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-4 text-center">
            Colabora en investigación
          </h3>
          <p className="font-body text-eroscape-text-muted text-center mb-6 max-w-2xl mx-auto">
            Si eres investigador, terapeuta de pareja o profesional del bienestar, te invitamos a
            explorar cómo EROSENSE puede contribuir a tu trabajo.
          </p>
          <div className="text-center">
            <Button variant="outline">Más información</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
