import { Heart, Lock, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

export default function About() {
  return (
    <Section id="experiencia" className="relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden="true">
        <img src="/images/img_7303.jpeg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          eyebrow="EXPERIENCIA · EROSCAPE ROOM®"
          title="¿Qué es EROSCAPE ROOM®?"
        />

        <div className="max-w-4xl mx-auto space-y-6 font-body text-eroscape-text-secondary text-lg leading-relaxed text-center mb-16">
          <p>
            EROSCAPE ROOM® es el{' '}
            <span className="text-purple-400 font-medium">primer Escape Room Erótico del mundo</span>.
          </p>
          <p>
            Una experiencia{' '}
            <span className="font-medium text-eroscape-text-primary">física y presencial</span> en tu
            ciudad. No es un escape room tradicional. No es un club. No es &quot;una cita&quot;.
          </p>
          <p className="text-xl text-purple-300 font-medium">
            Resuelve enigmas, descifra códigos y deja que la{' '}
            <span className="text-eroscape-text-primary">IA te guíe</span> a través del misterio...
          </p>
          <p className="text-2xl font-display font-light italic text-gradient-brand">
            ...hasta llegar a la habitación final: un espacio íntimo diseñado para el placer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card>
            <div className="text-center">
              <Heart className="mx-auto mb-4 text-pink-400" size={48} strokeWidth={1.5} fill="currentColor" />
              <h3 className="font-heading text-xl font-semibold text-purple-300 mb-3">Lovers</h3>
              <p className="font-body text-eroscape-text-muted text-left">
                Para parejas que quieren reconectar, jugar y volver a mirarse distinto. Resuelve enigmas
                juntos y llega a la habitación de placer.
              </p>
            </div>
          </Card>

          <Card variant="featured">
            <div className="text-center">
              <Sparkles className="mx-auto mb-4 text-purple-400" size={48} strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-purple-300 mb-3">Plan Golfo</h3>
              <p className="font-body text-eroscape-text-muted text-left">
                Para amigos con tensión, rolletes o parejas aventureras. Juego, adrenalina, risas nerviosas
                y una habitación final que no olvidarás.
              </p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <Lock className="mx-auto mb-4 text-pink-400" size={48} strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-purple-300 mb-3">Libertino</h3>
              <p className="font-body text-eroscape-text-muted text-left">
                Para swingers y mentes muy abiertas. Tres niveles de intensidad. El escape te lleva a una
                habitación tematizada de exploración total.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-16 space-y-8">
          <div className="text-center">
            <Card variant="featured" className="max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold text-purple-300 mb-4">El Secreto</h3>
              <p className="font-body text-eroscape-text-secondary text-lg italic">
                No desvelamos pruebas ni recorrido.
                <br />
                Porque el misterio… es parte del placer.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Card variant="featured" className="max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-semibold text-purple-300 mb-4">Game Master IA</h3>
              <p className="font-body text-eroscape-text-secondary text-lg leading-relaxed">
                Todas las experiencias son guiadas por una{' '}
                <span className="text-purple-400 font-medium">Game Master de Inteligencia Artificial automatizada</span>.
                <br />
                <span className="text-eroscape-text-muted">No hay presencia física humana durante tu experiencia.</span>
                <br />
                La IA te guía, adapta la narrativa y respeta tus límites en tiempo real.
                <br />
                <span className="text-purple-300 font-medium">
                  Si surge cualquier problema, contacto humano inmediato disponible desde la app.
                </span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
