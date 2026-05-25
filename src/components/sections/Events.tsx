import { Calendar, Users, Briefcase, PartyPopper, Heart, Target } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { events } from '../../data/events';

export default function Events() {
  const eventTypes = [
    {
      icon: PartyPopper,
      title: 'Despedidas de Soltero/a',
      description: 'Una despedida única, elegante y memorable para el grupo más íntimo.',
      features: ['Sala privada exclusiva', 'Cócteles personalizados', 'Actividades grupales', 'Fotografía artística'],
      priceFrom: 150,
    },
    {
      icon: Heart,
      title: 'Aniversarios y Celebraciones',
      description: 'Celebra momentos especiales con una experiencia que nunca olvidaréis.',
      features: ['Decoración personalizada', 'Cena romántica incluida', 'Regalo conmemorativo', 'Servicio de concierge'],
      priceFrom: 200,
    },
    {
      icon: Briefcase,
      title: 'Eventos Corporativos',
      description: 'Team building diferente con educación sexual positiva y dinámicas de confianza.',
      features: [
        'Facilitador profesional',
        'Dinámicas de comunicación',
        'Catering premium',
        'Certificado de participación',
      ],
      priceFrom: 300,
    },
    {
      icon: Calendar,
      title: 'Noches Temáticas',
      description: 'Eventos especiales mensuales para la comunidad Eroscape.',
      features: ['Temática exclusiva', 'DJ especializado', 'Networking dirigido', 'Descuentos especiales'],
      priceFrom: 75,
    },
  ];

  return (
    <Section id="eventos" dark>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Eventos & Corporativo
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experiencias personalizadas para ocasiones especiales, team building empresarial y eventos de la comunidad. Siempre con nuestro sello de elegancia y profesionalidad.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {eventTypes.map((event, index) => {
          const Icon = event.icon;
          return (
            <Card key={index}>
              <Icon className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-gray-400 mb-6">{event.description}</p>

              <ul className="space-y-2 mb-6">
                {event.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <span className="text-gray-400">
                  Desde <span className="text-2xl font-bold text-purple-300">€{event.priceFrom}</span>/persona
                </span>
                <Button variant="outline" size="sm">
                  Más información
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-white mb-12">Próximos Eventos Públicos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id}>
              <div className="inline-block bg-purple-600/20 text-purple-300 font-bold px-4 py-2 rounded-lg mb-4">
                {event.date}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{event.name}</h4>
              <p className="text-gray-400 mb-4">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Users size={18} className="text-purple-400" />
                <span>{event.spotsAvailable} plazas disponibles</span>
              </div>
              <Button variant="outline" fullWidth>
                Reservar plaza
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50">
        <div className="text-center">
          <Target className="mx-auto text-purple-400 mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-3">Team Building Diferente</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Fortalece los vínculos de tu equipo con dinámicas de confianza, comunicación asertiva y educación sexual positiva en un ambiente profesional y respetuoso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-purple-300 font-semibold mb-2">Comunicación Efectiva</h4>
              <p className="text-gray-400 text-sm">
                Dinámicas para mejorar la comunicación interpersonal en el equipo
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-purple-300 font-semibold mb-2">Gestión de Límites</h4>
              <p className="text-gray-400 text-sm">
                Aprende a establecer y respetar límites profesionales saludables
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-4 md:col-span-2">
              <h4 className="text-purple-300 font-semibold mb-2">Diversidad e Inclusión</h4>
              <p className="text-gray-400 text-sm">
                Sensibilización sobre diversidad sexual y de género en el workplace
              </p>
            </div>
          </div>

          <Button size="lg">Solicitar propuesta personalizada</Button>
        </div>
      </Card>

      <Card className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 mt-8">
        <h3 className="text-2xl font-bold text-white mb-3">¿Tienes una ocasión especial en mente?</h3>
        <p className="text-gray-300 mb-6">
          Contacta con nuestro equipo de eventos para crear una experiencia completamente personalizada para ti y tu grupo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Solicitar cotización</Button>
          <Button variant="outline">eventos@eroscape.com</Button>
        </div>
      </Card>
    </Section>
  );
}
