import { CheckCircle2, Shield, Play } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function HowItWorks() {
  const steps = [
    {
      icon: Play,
      title: 'Reserva y elige tu nivel',
      description: 'Selecciona la experiencia que más resuene con tus deseos y define tu nivel de intensidad.',
    },
    {
      icon: Shield,
      title: 'Define límites y palabra segura',
      description: 'Establece tus límites personales y tu palabra segura. Tu comodidad es nuestra prioridad.',
    },
    {
      icon: CheckCircle2,
      title: 'Resuelve y alcanza el destino',
      description: 'La IA te guía a través de enigmas y pruebas. Tu objetivo: llegar a la habitación final, un espacio íntimo y tematizado diseñado para el placer.',
    },
  ];

  return (
    <Section id="como-funciona" dark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="relative overflow-hidden rounded-xl h-64">
          <img
            src="/images/img_7303.jpeg"
            alt="Experience Step"
            className="w-full h-full object-cover opacity-30 hover:opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-xl h-64">
          <img
            src="/images/img_7272_2 copy.jpeg"
            alt="Safety Protocol"
            className="w-full h-full object-cover opacity-30 hover:opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative overflow-hidden rounded-xl h-64">
          <img
            src="/images/img_7280.jpeg"
            alt="Immersive Journey"
            className="w-full h-full object-cover opacity-30 hover:opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ¿Cómo funciona?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Tres pasos. Siempre bajo tu control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-purple-400 font-bold text-lg mb-2">Paso {index + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <div className="inline-block bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-6">
          <p className="text-purple-300 font-semibold text-lg italic">
            "El consentimiento manda: sin él, no hay juego."
          </p>
        </div>
      </div>
    </Section>
  );
}
