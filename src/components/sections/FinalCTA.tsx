import { Shield, Users, Lock, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

interface FinalCTAProps {
  onNavigate: (section: string) => void;
}

export default function FinalCTA({ onNavigate }: FinalCTAProps) {
  return (
    <Section id="final-cta" dark className="text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <img src="/images/img_7280.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="TU AVENTURA · TE ESPERA"
          title="¿Listos para el juego?"
          intro="Tu próxima aventura te está esperando. Una experiencia que recordaréis para siempre, en un entorno seguro, elegante y completamente personalizado según vuestros deseos."
        />

        <p className="font-body text-eroscape-text-muted mb-8 -mt-8 max-w-3xl mx-auto">
          Guiada por una Game Master de Inteligencia Artificial automatizada consciente del
          consentimiento, cada experiencia es única, irrepetible y creada solo para vosotros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          {[
            { icon: Users, title: 'Solo Adultos', desc: 'Experiencia exclusiva para mayores de edad' },
            { icon: Shield, title: '100% Consensuado', desc: 'Tu palabra segura siempre será respetada' },
            { icon: Lock, title: 'Máxima Privacidad', desc: 'Sin grabaciones, total confidencialidad' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
                  <Icon className="text-eroscape-text-primary" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-heading text-eroscape-text-primary font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-eroscape-text-muted text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <Card variant="featured" className="mb-8" hover={false}>
          <p className="font-body text-xl text-purple-200 font-medium mb-2">
            Prometemos discreción, cuidamos tu seguridad y garantizamos una experiencia irrepetible.
          </p>
          <p className="font-display text-2xl font-light italic text-gradient-brand">
            El deseo no espera. La aventura comienza con un clic.
          </p>
        </Card>

        <Button size="lg" onClick={() => onNavigate('reservar')} className="text-lg px-12">
          <Sparkles size={24} strokeWidth={1.5} />
          Reservar mi experiencia
        </Button>

        <div className="mt-12 font-body text-purple-400 font-medium">
          EROSCAPE ROOM®
          <br />
          <span className="text-eroscape-text-muted">El primer Escape Room Erótico del mundo.</span>
          <br />
          <span className="text-eroscape-text-muted/70 text-sm">Gracias por llegar hasta aquí.</span>
          <br />
          <span className="text-eroscape-text-muted/70 text-sm italic">
            El resto… solo se vive dentro.
          </span>
        </div>
      </div>
    </Section>
  );
}
