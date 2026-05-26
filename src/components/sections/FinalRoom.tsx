import { Sparkles, Lock, Waves } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

export default function FinalRoom() {
  const rooms = [
    { icon: Sparkles, title: 'Nocturna', desc: 'Opulenta para seguir el juego. Una pasada de espacio con temática urbana y cruda.' },
    { icon: Waves, title: 'Tenebrosa', desc: 'Opulenta para seguir el juego. Una pasada de espacio con temática misteriosa.' },
    { icon: Lock, title: 'Simulación', desc: 'Opulenta para seguir el juego. Una pasada de espacio futurista y envolvente.' },
  ];

  const amenities = [
    'Bondage elegante',
    'Columpios',
    'Jacuzzis',
    'Luz controlable',
    'Música envolvente',
    'Privacidad absoluta',
  ];

  return (
    <Section id="habitacion-final" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" aria-hidden="true" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <Lock className="mx-auto text-purple-400 mb-6" size={48} strokeWidth={1.5} />
          <SectionHeader
            eyebrow="DESTINO · HABITACIÓN FINAL"
            title="Disfruta la experiencia hasta el final"
            intro="La habitación final es el destino de toda la experiencia. Una pasada de espacio donde posar al postureo. Todas las experiencias y temáticas son totalmente diferentes."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {rooms.map((room) => {
            const Icon = room.icon;
            return (
              <Card key={room.title} variant="featured">
                <div className="text-center">
                  <div className="bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <Icon className="text-purple-400" size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold italic text-eroscape-text-primary mb-3">
                    {room.title}
                  </h3>
                  <p className="font-body text-purple-400 font-medium mb-2 text-sm">
                    Habitación Tematizada
                  </p>
                  <p className="font-body text-eroscape-text-muted leading-relaxed text-sm text-left">
                    {room.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card variant="featured" hover={false}>
            <div className="space-y-6 font-body text-eroscape-text-secondary text-lg leading-relaxed">
              <p className="text-xl text-center text-eroscape-text-primary">
                Cada sala temática tiene su propia{' '}
                <span className="font-medium text-purple-300">habitación de placer tematizada</span>,
                opulenta para seguir el juego.
              </p>

              <div className="bg-eroscape-void/50 rounded-xl p-6 border border-purple-500/20">
                <h4 className="font-heading text-purple-300 font-semibold mb-4 text-center text-lg">
                  Todo lo necesario para que disfrutes del momento sin límites
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-eroscape-text-muted">
                  {amenities.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-left">
                      <span className="text-purple-400">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
