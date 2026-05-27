import { CheckCircle2, Shield, Play } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';

export default function HowItWorks() {
  const steps = [
    {
      icon: Play,
      title: 'Reserva y elige tu nivel',
      description:
        'Selecciona la experiencia que más resuene con tus deseos y define tu nivel de intensidad.',
    },
    {
      icon: Shield,
      title: 'Define límites y palabra segura',
      description:
        'Establece tus límites personales y tu palabra segura. Tu comodidad es nuestra prioridad.',
    },
    {
      icon: CheckCircle2,
      title: 'Resuelve y alcanza el destino',
      description:
        'La IA te guía a través de enigmas y pruebas. Tu objetivo: llegar a la habitación final, un espacio íntimo y tematizado diseñado para el placer.',
    },
  ];

  return (
    <Section id="como-funciona" dark>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {['/images/img_7303.jpeg', '/images/img_7272_2 copy.jpeg', '/images/img_7280.jpeg'].map(
          (src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl h-64">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover opacity-30 hover:opacity-50 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          )
        )}
      </div> */}

      <SectionHeader
        eyebrow="PROCESO · CONSENTIMIENTO"
        title="¿Cómo funciona?"
        intro="Tres pasos. Siempre bajo tu control."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                  <Icon className="text-eroscape-text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div className="font-body text-purple-400 font-semibold text-lg mb-2">
                  Paso {index + 1}
                </div>
                <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-eroscape-text-muted text-left">{step.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
          <p className="font-body text-purple-300 font-medium text-lg italic">
            &quot;El consentimiento manda: sin él, no hay juego.&quot;
          </p>
        </div>
      </div>
    </Section>
  );
}
