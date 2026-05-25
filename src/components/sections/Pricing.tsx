import { useState } from 'react';
import { CreditCard, Shield, Calendar, Gift, Heart, Flame, Zap } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function Pricing() {
  const [selectedPacks, setSelectedPacks] = useState<{
    [key: string]: {
      intensity: string;
      level: string;
    };
  }>({
    lovers: { intensity: '', level: '' },
    golfo: { intensity: '', level: '' },
    libertino: { intensity: '', level: '' },
  });

  const handlePackChange = (packType: string, field: string, value: string) => {
    setSelectedPacks(prev => ({
      ...prev,
      [packType]: {
        ...prev[packType],
        [field]: value,
      },
    }));
  };

  const packs = [
    {
      id: 'lovers',
      name: 'Pack Lovers',
      icon: Heart,
      description: 'Experiencia íntima diseñada para parejas que desean reconectar',
      subtitle: 'Una experiencia íntima diseñada para parejas que desean reconectar a través del juego sensorial y la comunicación profunda. Perfecto para aniversarios, ocasiones especiales o simplemente para redescubrirse.',
      color: 'from-pink-600 to-rose-600',
      borderColor: 'border-pink-500/40',
      bgColor: 'from-pink-900/30 to-rose-900/30',
      baseIntensity: 'Suave',
      includes: [
        'Experiencia sensorial suave guiada por IA',
        'Dinámicas de comunicación íntima',
        'Ambiente romántico personalizado',
        'Caja de secretos y sorpresas',
        'Música ambiental personalizada',
      ],
    },
    {
      id: 'golfo',
      name: 'Pack Golfo',
      icon: Flame,
      description: 'Juguetón y atrevido para parejas que buscan diversión',
      subtitle: 'Una experiencia divertida y traviesa diseñada para parejas que desean explorar su lado más juguetón y atrevido con dinámicas interactivas.',
      color: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-500/40',
      bgColor: 'from-orange-900/30 to-red-900/30',
      baseIntensity: 'Moderada',
      includes: [
        'Juegos interactivos de pareja',
        'Desafíos y retos divertidos',
        'Ambiente festivo y energético',
        'Experiencias sorpresa aleatorias',
        'Sistema de recompensas',
      ],
    },
    {
      id: 'libertino',
      name: 'Pack Libertino',
      icon: Zap,
      description: 'Intensidad máxima para los más aventureros',
      subtitle: 'Una experiencia intensa y sin límites para parejas experimentadas que buscan llevar su intimidad al siguiente nivel con máxima libertad.',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500/40',
      bgColor: 'from-purple-900/30 to-pink-900/30',
      baseIntensity: 'Intensa',
      includes: [
        'Experiencias de alta intensidad',
        'Dinámicas avanzadas sin límites',
        'Ambiente totalmente personalizable',
        'Acceso a equipamiento premium',
        'Guía completa de escenarios',
      ],
    },
  ];
  const paymentMethods = [
    'Tarjetas de crédito y débito',
    'PayPal y Apple Pay',
    'Transferencia bancaria',
    'Criptomonedas (Bitcoin, Ethereum)',
  ];

  const policies = [
    'Tarjeta requerida como garantía (tipo hotel)',
    'Cambio de fecha sin coste (72h antes)',
    'Sin cancelaciones - solo reagendado',
    'Cargos por daños o uso indebido',
    'Pago seguro con encriptación SSL',
  ];

  const offers = [
    {
      title: 'Parejas nuevas',
      description: '15% de descuento en primera experiencia',
      icon: Gift,
    },
    {
      title: 'Cumpleaños y aniversarios',
      description: 'Copa de champagne gratis',
      icon: Calendar,
    },
    {
      title: 'Grupo de 4+ personas',
      description: '10% descuento por persona',
      icon: Shield,
    },
  ];

  return (
    <Section id="precios">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Precios, Pagos & Ofertas
        </h2>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center text-white mb-4">Selecciona Tu Experiencia</h3>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Elige el pack que más se ajuste a vuestros deseos, selecciona la intensidad y tu nivel de experiencia
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packs.map((pack) => {
            const Icon = pack.icon;
            return (
              <Card
                key={pack.id}
                className={`bg-gradient-to-br ${pack.bgColor} ${pack.borderColor}`}
              >
                <div className="text-center mb-6">
                  <Icon className="mx-auto text-white mb-4" size={48} />
                  <h4 className="text-2xl font-bold text-white mb-2">{pack.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{pack.description}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{pack.subtitle}</p>
                </div>

                <div className="mb-6 p-4 bg-black/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Duración base:</span>
                    <span className="text-white font-semibold">2 horas</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Intensidad base:</span>
                    <span className="text-white font-semibold">{pack.baseIntensity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Personas:</span>
                    <span className="text-white font-semibold">2 personas</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3 text-sm">Incluye:</h5>
                  <ul className="space-y-2">
                    {pack.includes.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm">
                      Nivel de Intensidad
                    </label>
                    <div className="space-y-2">
                      {['Básica', 'Media', 'Avanzada'].map((intensity) => (
                        <label
                          key={intensity}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name={`${pack.id}-intensity`}
                            value={intensity}
                            checked={selectedPacks[pack.id].intensity === intensity}
                            onChange={(e) =>
                              handlePackChange(pack.id, 'intensity', e.target.value)
                            }
                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                            {intensity}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm">
                      Nivel de Experiencia
                    </label>
                    <div className="space-y-2">
                      {['Bajo (Principiante)', 'Medio (Explorador)', 'Avanzado (Experto)'].map(
                        (level) => (
                          <label
                            key={level}
                            className="flex items-center space-x-3 cursor-pointer group"
                          >
                            <input
                              type="radio"
                              name={`${pack.id}-level`}
                              value={level}
                              checked={selectedPacks[pack.id].level === level}
                              onChange={(e) =>
                                handlePackChange(pack.id, 'level', e.target.value)
                              }
                              className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                              {level}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>

                <button
                  className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${pack.color} hover:opacity-90 text-white font-semibold rounded-lg transition-all transform hover:scale-105`}
                >
                  Reservar {pack.name}
                </button>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-16">
        <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/40">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Amplía Tu Experiencia</h3>
            <p className="text-gray-300">
              Personaliza tu visita añadiendo extras para hacer tu experiencia aún más especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <Calendar className="mx-auto text-purple-400 mb-4" size={40} />
              <h4 className="text-white font-bold mb-2">Tiempo Adicional</h4>
              <p className="text-gray-400 text-sm mb-3">
                Extiende tu experiencia con más tiempo en la sala
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>+30 minutos</li>
                <li>+60 minutos</li>
                <li>+120 minutos</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-6 text-center">
              <Gift className="mx-auto text-purple-400 mb-4" size={40} />
              <h4 className="text-white font-bold mb-2">Experiencia Personalizada</h4>
              <p className="text-gray-400 text-sm mb-3">
                Diseña una experiencia única adaptada a vuestros deseos
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Escenarios a medida</li>
                <li>Ambientación especial</li>
                <li>Experiencias temáticas</li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-6 text-center">
              <Shield className="mx-auto text-purple-400 mb-4" size={40} />
              <h4 className="text-white font-bold mb-2">Productos Boutique</h4>
              <p className="text-gray-400 text-sm mb-3">
                Añade productos de nuestra boutique exclusiva
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>Juguetes íntimos</li>
                <li>Lencería premium</li>
                <li>Vestuario y disfraces</li>
                <li>Accesorios especiales</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
              Ver Todos los Extras Disponibles
            </button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CreditCard className="text-purple-400 mb-4" size={40} />
          <h3 className="text-xl font-bold text-white mb-4">Métodos de Pago</h3>
          <ul className="space-y-2">
            {paymentMethods.map((method, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/40">
          <Shield className="text-purple-400 mb-4" size={40} />
          <h3 className="text-xl font-bold text-white mb-4">Garantía con Tarjeta</h3>
          <div className="space-y-3 text-sm">
            <p className="text-purple-300 font-semibold">
              Se requiere tarjeta de crédito como garantía (similar a hoteles)
            </p>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Posibles ampliaciones de tiempo</span>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Daños al equipamiento o sala</span>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Uso indebido de las instalaciones</span>
              </li>
              <li className="text-gray-400 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Incumplimiento de normas</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card>
          <Calendar className="text-purple-400 mb-4" size={40} />
          <h3 className="text-xl font-bold text-white mb-4">Política de Cambios</h3>
          <ul className="space-y-2">
            {policies.slice(1, 3).map((policy, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <span>{policy}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-purple-500/20">
            <p className="text-gray-400 text-xs italic">
              No ofrecemos cancelaciones. Puedes cambiar tu fecha con 72-48h de antelación sin coste adicional.
            </p>
          </div>
        </Card>

        <Card className="md:col-span-3 bg-gradient-to-r from-gray-900 to-black border-purple-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Duración</h3>
              <p className="text-gray-300 mb-4">Duración base: <span className="text-purple-300 font-bold">2 horas</span></p>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Ampliaciones disponibles:</p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>+30 minutos</li>
                  <li>+60 minutos</li>
                  <li>+120 minutos</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">Términos y Condiciones de Pago</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p>
                  <span className="text-purple-300 font-semibold">Depósito con tarjeta:</span> Se autoriza temporalmente tu tarjeta de crédito como garantía. No se cobra a menos que existan cargos adicionales.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">Cambio de fecha:</span> Puedes mover tu reserva a otra fecha sin coste si lo solicitas con 72h-48h de antelación. Sin excepciones fuera de este plazo.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">No cancelaciones:</span> No ofrecemos reembolsos ni cancelaciones. Solo cambios de fecha según política.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">Cargos adicionales:</span> Se cobrarán a la tarjeta registrada: ampliaciones no reservadas, daños materiales, limpieza extraordinaria o incumplimiento de normas.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center text-white mb-8">Ofertas Especiales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card key={index} className="text-center">
                <Icon className="mx-auto text-purple-400 mb-4" size={40} />
                <h4 className="text-lg font-bold text-white mb-2">{offer.title}</h4>
                <p className="text-gray-400">{offer.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">¿Tienes un código promocional?</h3>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Código promocional"
              className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all">
              Aplicar
            </button>
          </div>
        </div>
      </Card>

      <div className="mt-12 text-center">
        <div className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-xl p-6">
          <h4 className="text-purple-300 font-semibold mb-4">Ciudades disponibles</h4>
          <div className="space-y-2">
            <p className="text-gray-300 text-lg font-semibold">Ahora mismo:</p>
            <p className="text-purple-300 text-lg">Granada · Málaga · Sevilla</p>
            <p className="text-gray-400 text-sm mt-4 mb-2">Próximamente:</p>
            <p className="text-gray-400">Madrid · Barcelona · Valencia · Alicante · Murcia</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
