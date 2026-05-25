import { Smartphone, Tablet, Monitor, Download, Gamepad2, Wifi, Lock, Users, Sparkles, Star, Play } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Digital() {
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
    {
      icon: Smartphone,
      name: 'iOS & Android',
      description: 'App nativa optimizada',
      available: true,
    },
    {
      icon: Tablet,
      name: 'Tablet',
      description: 'Experiencia inmersiva',
      available: true,
    },
    {
      icon: Monitor,
      name: 'Desktop',
      description: 'Web y aplicación',
      available: true,
    },
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

  return (
    <Section id="digital" className="bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-6 py-2 rounded-full mb-6">
          NUEVO: LANZAMIENTO 2026
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          EROSCAPE ONLINE
        </h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-4">
          La revolución de las experiencias íntimas ahora en tu dispositivo
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Vive la misma intensidad, misterio y seducción de nuestras salas físicas desde cualquier lugar del mundo.
          Con la primera IA Game Master adaptativa diseñada para experiencias adultos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
            <div className="relative aspect-[9/16] max-w-sm mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/50 border-4 border-gray-800">
              <div className="absolute top-0 inset-x-0 h-8 bg-black flex items-center justify-center">
                <div className="w-24 h-5 bg-gray-900 rounded-full"></div>
              </div>

              <div className="pt-8 h-full bg-gradient-to-b from-purple-950 via-black to-pink-950">
                <div className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-purple-300 text-sm font-bold mb-2">BIENVENIDO A</h3>
                    <h2 className="text-white text-2xl font-bold mb-1">El Burdel de Venecia</h2>
                    <p className="text-gray-400 text-xs">Experiencia Digital Interactiva</p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-4 backdrop-blur">
                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "Las cortinas de terciopelo se abren lentamente... El aroma a jazmín y vainilla llena la estancia.
                      Una figura enigmática te observa desde las sombras..."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-sm font-bold transition-colors">
                      Acercarme
                    </button>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg text-sm font-bold transition-colors">
                      Observar
                    </button>
                  </div>

                  <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 text-xs font-bold">ATMÓSFERA</span>
                      <span className="text-gray-400 text-xs">Seductora</span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                    <Lock size={12} />
                    <span>Sesión privada cifrada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">¿Cómo Funciona?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-white">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Descarga la App</h4>
                  <p className="text-gray-400 text-sm">Disponible en iOS, Android y Web. Instalación en segundos.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-white">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Elige tu Aventura</h4>
                  <p className="text-gray-400 text-sm">Selecciona sala, nivel de intensidad y si jugarás solo o acompañado.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-white">
                  3
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Conéctate & Juega</h4>
                  <p className="text-gray-400 text-sm">La IA adapta la narrativa en tiempo real según tus decisiones.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold text-white">
                  4
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Vive la Experiencia</h4>
                  <p className="text-gray-400 text-sm">Audio inmersivo, efectos visuales y narrativa que se adapta a ti.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
            <h4 className="text-purple-300 font-bold mb-3 flex items-center gap-2">
              <Sparkles size={20} />
              Tecnología Exclusiva
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Utilizamos la misma IA revolucionaria de nuestras salas físicas, optimizada para dispositivos móviles.
              Procesamiento local para privacidad absoluta y respuestas instantáneas. Sin servidores externos,
              sin grabaciones, sin compromisos.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-4xl font-bold text-center mb-12 text-white">Características Principales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <feature.icon className="text-purple-400 mb-4" size={40} />
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-4xl font-bold text-center mb-12 text-white">Plataformas Disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <Card key={platform.name} className="text-center">
              <platform.icon className="text-purple-400 mb-4 mx-auto" size={48} />
              <h4 className="text-xl font-bold text-white mb-2">{platform.name}</h4>
              <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
              <div className="inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                Disponible 2026
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-4xl font-bold text-center mb-4 text-white">Salas Digitales Disponibles</h3>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Todas nuestras experiencias físicas adaptadas a digital, con nuevas salas exclusivas para la plataforma
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id}>
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-xl font-bold text-white mb-2">{room.name}</h4>
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
        <h3 className="text-4xl font-bold text-center mb-12 text-white">Planes de Suscripción</h3>
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-purple-300">€{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Star className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                fullWidth
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.popular ? 'Empezar Ahora' : 'Seleccionar Plan'}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sé de los Primeros en Probarlo
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Regístrate en nuestra lista de espera y obtén acceso anticipado + 3 meses gratis cuando lancemos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <Button size="lg">
            <Download className="mr-2" size={20} />
            Pre-registro
          </Button>
        </div>
        <p className="text-gray-500 text-sm">
          +2.847 personas ya registradas | Lanzamiento Q2 2026
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gradient-to-br from-purple-900/30 to-black border-purple-500/30">
          <h4 className="text-2xl font-bold text-white mb-4">¿Por qué Digital?</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong className="text-purple-300">Accesible desde cualquier lugar:</strong> No necesitas viajar a nuestras sedes físicas</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong className="text-purple-300">Precio más accesible:</strong> Vive la experiencia completa por una fracción del coste</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong className="text-purple-300">Repetible:</strong> Juega las salas múltiples veces con narrativas diferentes</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong className="text-purple-300">Distancia no es problema:</strong> Juega con tu pareja aunque estén en ciudades diferentes</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-pink-900/30 to-black border-pink-500/30">
          <h4 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-purple-300 font-bold mb-1 text-sm">¿Es tan inmersivo como la experiencia física?</h5>
              <p className="text-gray-400 text-sm">Diferente pero igualmente potente. Usamos audio 3D, haptics y narrativa adaptativa para crear inmersión.</p>
            </div>
            <div>
              <h5 className="text-purple-300 font-bold mb-1 text-sm">¿Es seguro y privado?</h5>
              <p className="text-gray-400 text-sm">100%. Procesamiento local, cifrado end-to-end, cero servidores. Ni nosotros vemos tu contenido.</p>
            </div>
            <div>
              <h5 className="text-purple-300 font-bold mb-1 text-sm">¿Puedo cancelar cuando quiera?</h5>
              <p className="text-gray-400 text-sm">Sí, sin permanencia. Cancela en cualquier momento desde la app.</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
