import {
  Smartphone,
  Tablet,
  Monitor,
  Download,
  Gamepad2,
  Wifi,
  Lock,
  Users,
  Sparkles,
  Star,
  Play,
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const features = [
  {
    icon: Gamepad2,
    title: 'Experiencia Interactiva',
    description: 'Narrativas adaptativas con IA que responden a tus decisiones en tiempo real',
  },
  {
    icon: Users,
    title: 'Multijugador',
    description: 'Juega en pareja o grupos de hasta 4 personas desde cualquier lugar',
  },
  {
    icon: Lock,
    title: 'Privacidad Total',
    description: 'Cifrado end-to-end. Tus conversaciones y decisiones son completamente privadas',
  },
  {
    icon: Sparkles,
    title: 'IA Game Master',
    description: 'La misma tecnología revolucionaria de nuestras salas físicas en tu dispositivo',
  },
  {
    icon: Wifi,
    title: 'Modo Online/Offline',
    description: 'Descarga aventuras completas y juega sin conexión cuando quieras',
  },
  {
    icon: Star,
    title: 'Actualizaciones Mensuales',
    description: 'Nuevas historias, salas y experiencias cada mes incluidas en tu suscripción',
  },
];

const platforms = [
  { icon: Smartphone, name: 'iOS & Android', description: 'App nativa optimizada' },
  { icon: Tablet, name: 'Tablet', description: 'Experiencia inmersiva' },
  { icon: Monitor, name: 'Desktop', description: 'Web y aplicación' },
];

const rooms = [
  {
    id: 'venecia-digital',
    name: 'El Burdel de Venecia',
    duration: '90-120 min',
    difficulty: 'Media',
    players: '2-4',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
  },
  {
    id: 'dungeon-digital',
    name: 'The Dungeon',
    duration: '60-90 min',
    difficulty: 'Alta',
    players: '2',
    image: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg',
  },
  {
    id: 'oasis-digital',
    name: 'El Oasis Prohibido',
    duration: '90 min',
    difficulty: 'Suave',
    players: '2-4',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
  },
];

const pricingPlans = [
  {
    name: 'Mensual',
    price: '19.99',
    period: '/mes',
    features: [
      'Acceso a todas las salas',
      'Actualizaciones mensuales',
      'Multijugador ilimitado',
      'Modo offline',
      'Soporte prioritario',
    ],
    popular: false,
  },
  {
    name: 'Anual',
    price: '149',
    period: '/año',
    features: [
      'Todo lo del plan mensual',
      '2 meses gratis (€199 valor)',
      'Contenido exclusivo',
      'Beta acceso temprano',
      'Sin anuncios nunca',
    ],
    popular: true,
  },
  {
    name: 'Experiencia Única',
    price: '9.99',
    period: '/sala',
    features: [
      '1 sala a elegir',
      'Acceso 30 días',
      'Hasta 4 jugadores',
      'Modo offline',
      'Sin suscripción',
    ],
    popular: false,
  },
];

export default function DigitalAppExperience() {
  return (
    <div id="digital-app" className="scroll-mt-24 pt-16 border-t border-purple-500/15">
      <div className="text-center mb-12">
        <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/90 mb-3">
          LA APLICACIÓN
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-light italic text-gradient-brand">
          Explora EROSCAPE ONLINE
        </h2>
      </div>

      <div className="mb-20">
        <h3 className="font-display text-2xl md:text-3xl font-light italic text-center text-gradient-brand mb-12">
          Características Principales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <Icon className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-bold text-eroscape-text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="font-body text-eroscape-text-muted text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="font-display text-2xl md:text-3xl font-light italic text-center text-gradient-brand mb-12">
          Plataformas Disponibles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <Card key={platform.name} className="text-center">
                <Icon className="text-purple-400 mb-4 mx-auto" size={48} strokeWidth={1.5} />
                <h4 className="font-heading text-xl font-bold text-eroscape-text-primary mb-2">
                  {platform.name}
                </h4>
                <p className="font-body text-eroscape-text-muted text-sm mb-4">{platform.description}</p>
                <div className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                  Disponible 2026
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="font-display text-2xl md:text-3xl font-light italic text-center text-gradient-brand mb-4">
          Salas Digitales Disponibles
        </h3>
        <p className="font-body text-eroscape-text-muted text-center mb-12 max-w-2xl mx-auto">
          Todas nuestras experiencias físicas adaptadas a digital, con nuevas salas exclusivas para la
          plataforma
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id}>
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-heading text-xl font-bold text-eroscape-text-primary mb-2">
                    {room.name}
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-purple-600/80 text-white text-xs px-2 py-1 rounded">
                      {room.duration}
                    </span>
                    <span className="bg-pink-600/80 text-white text-xs px-2 py-1 rounded">
                      {room.difficulty}
                    </span>
                    <span className="bg-purple-600/80 text-white text-xs px-2 py-1 rounded">
                      {room.players} jugadores
                    </span>
                  </div>
                </div>
              </div>
              <Button size="sm" fullWidth>
                <Play className="mr-2" size={16} />
                Vista Previa
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="font-display text-2xl md:text-3xl font-light italic text-center text-gradient-brand mb-12">
          Planes de Suscripción
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? 'border-2 border-purple-500 bg-gradient-to-br from-purple-900/40 to-pink-900/40'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h4 className="font-heading text-2xl font-bold text-eroscape-text-primary mb-2">
                  {plan.name}
                </h4>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="font-display text-5xl font-bold text-purple-300">€{plan.price}</span>
                  <span className="font-body text-eroscape-text-muted ml-2">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body text-eroscape-text-secondary text-sm"
                  >
                    <Star className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button fullWidth variant={plan.popular ? 'primary' : 'outline'} size="lg">
                {plan.popular ? 'Empezar Ahora' : 'Seleccionar Plan'}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-12 text-center mb-20">
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-eroscape-text-primary mb-4">
          Sé de los Primeros en Probarlo
        </h3>
        <p className="font-body text-eroscape-text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Regístrate en nuestra lista de espera y obtén acceso anticipado + 3 meses gratis cuando lancemos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-5 py-4 bg-eroscape-surface border border-purple-500/20 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body outline-none transition-[border-color,box-shadow] duration-300"
          />
          <Button size="lg">
            <Download className="mr-2" size={20} />
            Pre-registro
          </Button>
        </div>
        <p className="font-body text-eroscape-text-muted text-sm">
          +2.847 personas ya registradas | Lanzamiento Q2 2026
        </p>
      </div>

      <div
        id="digital-app-footer"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-mt-24"
        aria-label="Cierre del apartado de la aplicación"
      >
        <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-500/30">
          <h4 className="font-heading text-2xl font-bold text-eroscape-text-primary mb-4">
            ¿Por qué Digital?
          </h4>
          <ul className="space-y-3 font-body text-eroscape-text-secondary text-sm">
            {[
              {
                label: 'Accesible desde cualquier lugar',
                text: 'No necesitas viajar a nuestras sedes físicas',
              },
              {
                label: 'Precio más accesible',
                text: 'Vive la experiencia completa por una fracción del coste',
              },
              {
                label: 'Repetible',
                text: 'Juega las salas múltiples veces con narrativas diferentes',
              },
              {
                label: 'Distancia no es problema',
                text: 'Juega con tu pareja aunque estén en ciudades diferentes',
              },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong className="text-purple-300 font-semibold">{item.label}:</strong>{' '}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-pink-900/30 to-black border-pink-500/30">
          <h4 className="font-heading text-2xl font-bold text-eroscape-text-primary mb-4">
            Preguntas Frecuentes
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-body text-purple-300 font-bold mb-1 text-sm">
                ¿Es tan inmersivo como la experiencia física?
              </h5>
              <p className="font-body text-eroscape-text-muted text-sm">
                Diferente pero igualmente potente. Usamos audio 3D, haptics y narrativa adaptativa
                para crear inmersión.
              </p>
            </div>
            <div>
              <h5 className="font-body text-purple-300 font-bold mb-1 text-sm">
                ¿Es seguro y privado?
              </h5>
              <p className="font-body text-eroscape-text-muted text-sm">
                100%. Procesamiento local, cifrado end-to-end, cero servidores. Ni nosotros vemos tu
                contenido.
              </p>
            </div>
            <div>
              <h5 className="font-body text-purple-300 font-bold mb-1 text-sm">
                ¿Puedo cancelar cuando quiera?
              </h5>
              <p className="font-body text-eroscape-text-muted text-sm">
                Sí, sin permanencia. Cancela en cualquier momento desde la app.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
