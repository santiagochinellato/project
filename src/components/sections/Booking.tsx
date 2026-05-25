import { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { rooms } from '../../data/rooms';
import { experienceExtras } from '../../data/extras';
import ConsentForm from '../ConsentForm';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);

  const cities = ['Granada', 'Málaga', 'Sevilla'];
  const intensityLevels = ['Suave', 'Media', 'Alta', 'Bajo', 'Medio', 'Avanzado'];

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculateExtrasTotal = () => {
    return selectedExtras.reduce((total, extraId) => {
      const extra = experienceExtras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
  };

  return (
    <Section id="reservar" dark>
      {showConsentForm && (
        <ConsentForm
          onClose={() => setShowConsentForm(false)}
          onAccept={() => {
            setConsentAccepted(true);
            setShowConsentForm(false);
          }}
        />
      )}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Reserva tu Experiencia
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Completa el formulario para reservar tu noche de misterio y deseo. Te contactaremos para confirmar todos los detalles y preparar tu experiencia perfecta.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= num
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800 text-gray-500'
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-12 h-1 ${step > num ? 'bg-purple-600' : 'bg-gray-800'}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="max-w-3xl mx-auto">
        {step === 1 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Paso 1: Información Personal</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Nombre completo *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Teléfono *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="+34 611257828"
                />
              </div>

              <div className="flex items-start gap-3 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                <input type="checkbox" id="age-confirm" className="mt-1" />
                <label htmlFor="age-confirm" className="text-gray-300 text-sm">
                  Confirmo que soy mayor de 18 años *
                </label>
              </div>
            </div>

            <Button fullWidth size="lg" className="mt-8" onClick={() => setStep(2)}>
              Siguiente
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Paso 2: Preferencias y Límites</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Sala *</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500">
                  <option>Selecciona una sala</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - €{room.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Ciudad *</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500">
                  <option>Selecciona una ciudad</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Nivel de intensidad *</label>
                <select className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500">
                  <option>Selecciona nivel</option>
                  {intensityLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">
                  Límites personales (opcional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Describe cualquier límite o preferencia que quieras comunicar..."
                />
              </div>

              <div>
                <label className="block text-purple-300 mb-2 font-semibold">Palabra segura *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Tu palabra para pausar o detener la experiencia"
                />
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                <h4 className="text-purple-300 font-bold mb-4">Personaliza tu Experiencia (Opcional)</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Añade extras para hacer tu experiencia aún más especial. Puedes seleccionar múltiples opciones.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experienceExtras.map((extra) => (
                    <label
                      key={extra.id}
                      className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                        selectedExtras.includes(extra.id)
                          ? 'bg-purple-600/30 border-2 border-purple-500'
                          : 'bg-black/30 border border-purple-500/20 hover:border-purple-500/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(extra.id)}
                        onChange={() => toggleExtra(extra.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-semibold text-sm">{extra.name}</span>
                          <span className="text-purple-300 font-bold text-sm">€{extra.price}</span>
                        </div>
                        <p className="text-gray-400 text-xs">{extra.description}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {selectedExtras.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-purple-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Extras seleccionados:</span>
                      <span className="text-purple-300 font-bold text-lg">+€{calculateExtrasTotal()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" fullWidth onClick={() => setStep(1)}>
                Anterior
              </Button>
              <Button fullWidth onClick={() => setStep(3)}>
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Paso 3: Confirmación & Pago</h3>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-purple-300 font-bold mb-4">Resumen de tu reserva</h4>
              <div className="space-y-2 text-gray-300">
                <p>Sala: <span className="text-white font-semibold">El Burdel de Venecia</span></p>
                <p>Ciudad: <span className="text-white font-semibold">Granada</span></p>
                <p>Duración: <span className="text-white font-semibold">2 horas</span></p>
                <p>Nivel: <span className="text-white font-semibold">Media</span></p>

                {selectedExtras.length > 0 && (
                  <div className="pt-3 mt-3 border-t border-purple-500/20">
                    <p className="font-semibold text-purple-300 mb-2">Extras seleccionados:</p>
                    {selectedExtras.map(extraId => {
                      const extra = experienceExtras.find(e => e.id === extraId);
                      return extra ? (
                        <p key={extraId} className="text-sm flex justify-between">
                          <span>{extra.name}</span>
                          <span className="text-purple-300">€{extra.price}</span>
                        </p>
                      ) : null;
                    })}
                  </div>
                )}

                <div className="pt-4 mt-4 border-t border-purple-500/30">
                  <p className="text-lg mb-1">
                    Experiencia base: <span className="text-white font-semibold">€180</span>
                  </p>
                  {calculateExtrasTotal() > 0 && (
                    <p className="text-lg mb-1">
                      Extras: <span className="text-white font-semibold">€{calculateExtrasTotal()}</span>
                    </p>
                  )}
                  <p className="text-xl mt-2 pt-2 border-t border-purple-500/20">
                    Total: <span className="text-purple-300 font-bold text-2xl">€{180 + calculateExtrasTotal()}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-purple-300 font-bold mb-4">Pago y Garantía</h4>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Número de tarjeta *</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">Fecha exp. *</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">CVV *</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-purple-300 font-semibold">Tu tarjeta se usará como garantía</span> (tipo hotel).
                  Solo se cobrará por: ampliaciones de tiempo, daños materiales, limpieza extraordinaria o incumplimiento de normas.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consentAccepted}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setShowConsentForm(true);
                      } else {
                        setConsentAccepted(false);
                      }
                    }}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-gray-300 text-sm">
                    He leído y acepto el{' '}
                    <button
                      type="button"
                      onClick={() => setShowConsentForm(true)}
                      className="text-purple-300 underline font-semibold hover:text-purple-200"
                    >
                      formulario de consentimiento informado
                    </button>
                    , políticas de privacidad y términos de servicio. *
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-gray-300 text-sm">
                    Acepto las políticas de seguridad y código de conducta.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="no-cancel" className="mt-1" />
                  <label htmlFor="no-cancel" className="text-gray-300 text-sm">
                    Entiendo que <span className="text-purple-300 font-semibold">NO hay cancelaciones</span>, solo puedo cambiar la fecha con 72-48h de antelación sin coste.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="charges" className="mt-1" />
                  <label htmlFor="charges" className="text-gray-300 text-sm">
                    Autorizo cargos adicionales a mi tarjeta por ampliaciones, daños o incumplimiento de normas.
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" fullWidth onClick={() => setStep(2)}>
                Anterior
              </Button>
              <Button fullWidth size="lg">
                Confirmar y Pagar
              </Button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              Te contactaremos en 24h para confirmar detalles finales
            </p>
          </div>
        )}
      </Card>
    </Section>
  );
}
