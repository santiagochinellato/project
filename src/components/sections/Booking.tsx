import { useState } from 'react';
import { Clock, Package, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { rooms } from '../../data/rooms';
import { experienceExtras } from '../../data/extras';
import { products } from '../../data/products';
import ConsentForm from '../ConsentForm';
import SectionHeader from '../ui/SectionHeader';
import MembershipPromptModal from '../booking/MembershipPromptModal';
import MembershipSignupForm from '../booking/MembershipSignupForm';
import ReservationConfirmation from '../booking/ReservationConfirmation';
import {
  type BookingFormData,
  type BookingPhase,
  type CompletedReservation,
  initialBookingFormData,
} from '../../types/booking';
import {
  FEATURED_EXTRA_IDS,
  buildReservation,
  calculateBookingTotal,
} from '../../lib/reservation';

const inputClass =
  'w-full px-5 py-4 bg-eroscape-surface border border-purple-500/20 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body text-base outline-none transition-[border-color,box-shadow] duration-300';

const cities = ['Granada', 'Málaga', 'Sevilla'];
const intensityLevels = ['Bajo', 'Medio', 'Turbio'];
const timeSlots = ['18:00', '19:30', '21:00', '22:30'];

const featuredExtras = experienceExtras.filter((e) =>
  (FEATURED_EXTRA_IDS as readonly string[]).includes(e.id),
);
const timeExtensions = experienceExtras.filter((e) => e.category === 'tiempo');
const boutiqueKits = products.filter((p) => p.category === 'Kits');

export default function Booking() {
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<BookingPhase>('form');
  const [form, setForm] = useState<BookingFormData>(initialBookingFormData);
  const [reservation, setReservation] = useState<CompletedReservation | null>(null);
  const [showConsentForm, setShowConsentForm] = useState(false);
  const [formError, setFormError] = useState('');

  const updateForm = (patch: Partial<BookingFormData>) => {
    setForm((prev) => ({ ...prev, ...patch }));
    setFormError('');
  };

  const toggleExtra = (extraId: string) => {
    setForm((prev) => ({
      ...prev,
      selectedExtras: prev.selectedExtras.includes(extraId)
        ? prev.selectedExtras.filter((id) => id !== extraId)
        : [...prev.selectedExtras, extraId],
    }));
  };

  const toggleKit = (kitId: string) => {
    setForm((prev) => ({
      ...prev,
      selectedKits: prev.selectedKits.includes(kitId)
        ? prev.selectedKits.filter((id) => id !== kitId)
        : [...prev.selectedKits, kitId],
    }));
  };

  const { basePrice, extrasTotal, kitsTotal, total, roomName } = calculateBookingTotal(form);

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim() || !form.ageConfirmed) {
        setFormError('Completa nombre, email, teléfono y confirma que eres mayor de 18 años.');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!form.roomId || !form.city || !form.intensity || !form.safeWord.trim()) {
        setFormError('Selecciona sala, ciudad, nivel de intensidad y palabra segura.');
        return false;
      }
    }
    if (currentStep === 3) {
      if (
        !form.cardNumber.trim() ||
        !form.cardExpiry.trim() ||
        !form.cardCvv.trim() ||
        !form.consentAccepted ||
        !form.termsAccepted ||
        !form.noCancelAccepted ||
        !form.chargesAccepted
      ) {
        setFormError('Completa los datos de tarjeta y acepta todas las condiciones.');
        return false;
      }
    }
    return true;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(3, s + 1));
  };

  const handleConfirmPayment = () => {
    if (!validateStep(3)) return;
    const pending = buildReservation(form);
    setReservation(pending);
    setPhase('membership-prompt');
  };

  const finishWithMembership = (requested: boolean) => {
    if (!reservation) return;
    setReservation({ ...reservation, membershipInterest: requested });
    setPhase('confirmed');
    requestAnimationFrame(() => {
      document.getElementById('reserva-confirmada')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const resetBooking = () => {
    setForm(initialBookingFormData);
    setStep(1);
    setPhase('form');
    setReservation(null);
    setFormError('');
  };

  return (
    <Section id="reservar" dark className="scroll-mt-24">
      {showConsentForm && (
        <ConsentForm
          onClose={() => setShowConsentForm(false)}
          onAccept={() => {
            updateForm({ consentAccepted: true });
            setShowConsentForm(false);
          }}
        />
      )}

      {phase === 'membership-prompt' && reservation && (
        <MembershipPromptModal
          onYes={() => setPhase('membership-form')}
          onNo={() => finishWithMembership(false)}
        />
      )}

      <SectionHeader
        eyebrow="RESERVA · EXPERIENCIA"
        title="Reserva tu Experiencia"
        intro="Elige tu sala, personaliza con extras y kits, garantiza con tu tarjeta y descarga tu entrada con código único y QR."
        className="mb-12"
      />

      {phase === 'confirmed' && reservation ? (
        <div id="reserva-confirmada" className="scroll-mt-24">
          <ReservationConfirmation
            reservation={reservation}
            membershipRequested={reservation.membershipInterest}
          />
          <div className="text-center mt-8">
            <Button variant="outline" onClick={resetBooking}>
              Hacer otra reserva
            </Button>
          </div>
        </div>
      ) : (
        <>
          {phase === 'membership-form' && reservation && (
            <MembershipSignupForm
              guestEmail={form.email}
              guestName={form.fullName}
              onComplete={() => finishWithMembership(true)}
              onSkip={() => finishWithMembership(false)}
            />
          )}

          {phase === 'form' && (
            <>
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          step >= num
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-eroscape-text-primary'
                            : 'bg-eroscape-elevated text-eroscape-text-muted'
                        }`}
                      >
                        {num}
                      </div>
                      {num < 3 && (
                        <div
                          className={`w-12 h-1 ${step > num ? 'bg-purple-600' : 'bg-eroscape-elevated'}`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {formError && (
                <p className="text-center text-pink-400 text-sm mb-4 font-body">{formError}</p>
              )}

              <Card className="max-w-3xl mx-auto">
                {step === 1 && (
                  <div>
                    <h3 className="text-2xl font-bold text-eroscape-text-primary mb-6">
                      Paso 1: Información Personal
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-purple-300 mb-2 font-semibold">Nombre completo *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Tu nombre"
                          value={form.fullName}
                          onChange={(e) => updateForm({ fullName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-purple-300 mb-2 font-semibold">Email *</label>
                        <input
                          type="email"
                          className={inputClass}
                          placeholder="tu@email.com"
                          value={form.email}
                          onChange={(e) => updateForm({ email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-purple-300 mb-2 font-semibold">Teléfono *</label>
                        <input
                          type="tel"
                          className={inputClass}
                          placeholder="+34 611257828"
                          value={form.phone}
                          onChange={(e) => updateForm({ phone: e.target.value })}
                        />
                      </div>
                      <div className="flex items-start gap-3 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                        <input
                          type="checkbox"
                          id="age-confirm"
                          checked={form.ageConfirmed}
                          onChange={(e) => updateForm({ ageConfirmed: e.target.checked })}
                          className="mt-1"
                        />
                        <label htmlFor="age-confirm" className="text-eroscape-text-secondary text-sm">
                          Confirmo que soy mayor de 18 años *
                        </label>
                      </div>
                    </div>
                    <Button fullWidth size="lg" className="mt-8" onClick={goNext}>
                      Siguiente
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-2xl font-bold text-eroscape-text-primary mb-6">
                      Paso 2: Sala, extras y ampliaciones
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-purple-300 mb-3 font-semibold">Elige tu sala *</label>
                        <div className="grid grid-cols-1 gap-3">
                          {rooms.map((room) => (
                            <button
                              key={room.id}
                              type="button"
                              onClick={() => updateForm({ roomId: room.id })}
                              className={`text-left p-4 rounded-xl border transition-all ${
                                form.roomId === room.id
                                  ? 'bg-purple-600/25 border-2 border-purple-500'
                                  : 'bg-black/30 border border-purple-500/20 hover:border-purple-500/40'
                              }`}
                            >
                              <div className="flex justify-between items-start gap-2">
                                <span className="text-eroscape-text-primary font-semibold">{room.name}</span>
                                <span className="text-purple-300 font-bold shrink-0">€{room.price}</span>
                              </div>
                              <p className="text-eroscape-text-muted text-xs mt-1">{room.tagline}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-purple-300 mb-2 font-semibold">Ciudad *</label>
                          <select
                            className={inputClass}
                            value={form.city}
                            onChange={(e) => updateForm({ city: e.target.value })}
                          >
                            <option value="">Selecciona una ciudad</option>
                            {cities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-purple-300 mb-2 font-semibold">Nivel de intensidad *</label>
                          <select
                            className={inputClass}
                            value={form.intensity}
                            onChange={(e) => updateForm({ intensity: e.target.value })}
                          >
                            <option value="">Selecciona nivel</option>
                            {intensityLevels.map((level) => (
                              <option key={level} value={level}>
                                {level}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-purple-300 mb-2 font-semibold">Fecha preferida</label>
                          <input
                            type="date"
                            className={inputClass}
                            value={form.date}
                            onChange={(e) => updateForm({ date: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-purple-300 mb-2 font-semibold">Hora preferida</label>
                          <select
                            className={inputClass}
                            value={form.time}
                            onChange={(e) => updateForm({ time: e.target.value })}
                          >
                            <option value="">Selecciona hora</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-purple-300 mb-2 font-semibold">Palabra segura *</label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="Tu palabra para pausar o detener la experiencia"
                          value={form.safeWord}
                          onChange={(e) => updateForm({ safeWord: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-purple-300 mb-2 font-semibold">
                          Límites personales (opcional)
                        </label>
                        <textarea
                          rows={3}
                          className={inputClass}
                          placeholder="Describe cualquier límite o preferencia..."
                          value={form.limits}
                          onChange={(e) => updateForm({ limits: e.target.value })}
                        />
                      </div>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="text-pink-400" size={22} />
                          <h4 className="text-purple-300 font-bold">Detalles románticos</h4>
                        </div>
                        <p className="text-eroscape-text-muted text-sm mb-4">
                          Champán, pétalos de rosa y ramo de rosas — selección previa para tu sala.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {featuredExtras.map((extra) => (
                            <label
                              key={extra.id}
                              className={`flex flex-col gap-2 p-4 rounded-lg cursor-pointer transition-all ${
                                form.selectedExtras.includes(extra.id)
                                  ? 'bg-purple-600/30 border-2 border-purple-500'
                                  : 'bg-black/30 border border-purple-500/20 hover:border-purple-500/40'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={form.selectedExtras.includes(extra.id)}
                                onChange={() => toggleExtra(extra.id)}
                                className="sr-only"
                              />
                              <span className="text-eroscape-text-primary font-semibold text-sm">
                                {extra.name}
                              </span>
                              <span className="text-purple-300 font-bold text-sm">€{extra.price}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="text-purple-400" size={22} />
                          <h4 className="text-purple-300 font-bold">Ampliación de horario</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {timeExtensions.map((extra) => (
                            <label
                              key={extra.id}
                              className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                                form.selectedExtras.includes(extra.id)
                                  ? 'bg-purple-600/30 border-2 border-purple-500'
                                  : 'bg-black/30 border border-purple-500/20'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={form.selectedExtras.includes(extra.id)}
                                onChange={() => toggleExtra(extra.id)}
                                className="mt-1"
                              />
                              <div>
                                <span className="text-eroscape-text-primary font-semibold text-sm block">
                                  {extra.name}
                                </span>
                                <span className="text-purple-300 font-bold text-sm">€{extra.price}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Package className="text-purple-400" size={22} />
                          <h4 className="text-purple-300 font-bold">Amplía con kits de boutique</h4>
                        </div>
                        <p className="text-eroscape-text-muted text-sm mb-4">
                          Añade kits a tu reserva y recíbelos preparados para tu experiencia o en casa.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {boutiqueKits.map((kit) => (
                            <label
                              key={kit.id}
                              className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                                form.selectedKits.includes(kit.id)
                                  ? 'bg-purple-600/30 border-2 border-purple-500'
                                  : 'bg-black/30 border border-purple-500/20'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={form.selectedKits.includes(kit.id)}
                                onChange={() => toggleKit(kit.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <span className="text-eroscape-text-primary font-semibold text-sm block">
                                  {kit.name}
                                </span>
                                <p className="text-eroscape-text-muted text-xs mt-1">{kit.description}</p>
                                <span className="text-purple-300 font-bold text-sm">€{kit.price}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {(form.selectedExtras.length > 0 || form.selectedKits.length > 0) && (
                        <div className="flex justify-between items-center pt-2 border-t border-purple-500/20">
                          <span className="text-eroscape-text-secondary">Extras y kits</span>
                          <span className="text-purple-300 font-bold">
                            +€{extrasTotal + kitsTotal}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Button variant="outline" fullWidth onClick={() => setStep(1)}>
                        Anterior
                      </Button>
                      <Button fullWidth onClick={goNext}>
                        Siguiente
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-2xl font-bold text-eroscape-text-primary mb-6">
                      Paso 3: Confirmación & Pago
                    </h3>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-bold mb-4">Resumen de tu reserva</h4>
                      <div className="space-y-2 text-eroscape-text-secondary text-sm">
                        <p>
                          Sala: <span className="text-eroscape-text-primary font-semibold">{roomName}</span>
                        </p>
                        <p>
                          Ciudad: <span className="text-eroscape-text-primary font-semibold">{form.city}</span>
                        </p>
                        <p>
                          Fecha:{' '}
                          <span className="text-eroscape-text-primary font-semibold">
                            {form.date || 'Por confirmar'} · {form.time || '—'}
                          </span>
                        </p>
                        <p>
                          Nivel:{' '}
                          <span className="text-eroscape-text-primary font-semibold">{form.intensity}</span>
                        </p>

                        {form.selectedExtras.length > 0 && (
                          <div className="pt-3 mt-3 border-t border-purple-500/20">
                            <p className="font-semibold text-purple-300 mb-2">Extras y ampliaciones:</p>
                            {form.selectedExtras.map((extraId) => {
                              const extra = experienceExtras.find((e) => e.id === extraId);
                              return extra ? (
                                <p key={extraId} className="flex justify-between">
                                  <span>{extra.name}</span>
                                  <span className="text-purple-300">€{extra.price}</span>
                                </p>
                              ) : null;
                            })}
                          </div>
                        )}

                        {form.selectedKits.length > 0 && (
                          <div className="pt-3 mt-3 border-t border-purple-500/20">
                            <p className="font-semibold text-purple-300 mb-2">Kits boutique:</p>
                            {form.selectedKits.map((kitId) => {
                              const kit = products.find((p) => p.id === kitId);
                              return kit ? (
                                <p key={kitId} className="flex justify-between">
                                  <span>{kit.name}</span>
                                  <span className="text-purple-300">€{kit.price}</span>
                                </p>
                              ) : null;
                            })}
                          </div>
                        )}

                        <div className="pt-4 mt-4 border-t border-purple-500/30">
                          <p className="text-lg mb-1">
                            Experiencia base:{' '}
                            <span className="text-eroscape-text-primary font-semibold">€{basePrice}</span>
                          </p>
                          {(extrasTotal > 0 || kitsTotal > 0) && (
                            <p className="text-lg mb-1">
                              Extras y kits:{' '}
                              <span className="text-eroscape-text-primary font-semibold">
                                €{extrasTotal + kitsTotal}
                              </span>
                            </p>
                          )}
                          <p className="text-xl mt-2 pt-2 border-t border-purple-500/20">
                            Total: <span className="text-purple-300 font-bold text-2xl">€{total}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
                      <h4 className="text-purple-300 font-bold mb-4">Pago y Garantía</h4>
                      <p className="text-eroscape-text-muted text-sm mb-4">
                        Introduce tu tarjeta como garantía (tipo hotel). Solo se cobrará por ampliaciones no
                        reservadas, daños o incumplimiento de normas.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-eroscape-text-secondary mb-2 font-semibold">
                            Número de tarjeta *
                          </label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className={inputClass}
                            value={form.cardNumber}
                            onChange={(e) => updateForm({ cardNumber: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-eroscape-text-secondary mb-2 font-semibold">
                              Fecha exp. *
                            </label>
                            <input
                              type="text"
                              placeholder="MM/AA"
                              className={inputClass}
                              value={form.cardExpiry}
                              onChange={(e) => updateForm({ cardExpiry: e.target.value })}
                            />
                          </div>
                          <div>
                            <label className="block text-eroscape-text-secondary mb-2 font-semibold">CVV *</label>
                            <input
                              type="text"
                              placeholder="123"
                              className={inputClass}
                              value={form.cardCvv}
                              onChange={(e) => updateForm({ cardCvv: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="consent"
                            checked={form.consentAccepted}
                            onChange={(e) => {
                              if (e.target.checked) setShowConsentForm(true);
                              else updateForm({ consentAccepted: false });
                            }}
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-eroscape-text-secondary text-sm">
                            He leído y acepto el{' '}
                            <button
                              type="button"
                              onClick={() => setShowConsentForm(true)}
                              className="text-purple-300 underline font-semibold hover:text-purple-200"
                            >
                              formulario de consentimiento informado
                            </button>
                            . *
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={form.termsAccepted}
                            onChange={(e) => updateForm({ termsAccepted: e.target.checked })}
                            className="mt-1"
                          />
                          <label htmlFor="terms" className="text-eroscape-text-secondary text-sm">
                            Acepto las políticas de seguridad y código de conducta. *
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="no-cancel"
                            checked={form.noCancelAccepted}
                            onChange={(e) => updateForm({ noCancelAccepted: e.target.checked })}
                            className="mt-1"
                          />
                          <label htmlFor="no-cancel" className="text-eroscape-text-secondary text-sm">
                            Entiendo que no hay cancelaciones; solo cambio de fecha con 72–48 h de antelación. *
                          </label>
                        </div>
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="charges"
                            checked={form.chargesAccepted}
                            onChange={(e) => updateForm({ chargesAccepted: e.target.checked })}
                            className="mt-1"
                          />
                          <label htmlFor="charges" className="text-eroscape-text-secondary text-sm">
                            Autorizo cargos adicionales por ampliaciones, daños o incumplimiento. *
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" fullWidth onClick={() => setStep(2)}>
                        Anterior
                      </Button>
                      <Button fullWidth size="lg" onClick={handleConfirmPayment}>
                        Confirmar y Pagar
                      </Button>
                    </div>

                    <p className="text-center text-eroscape-text-muted text-sm mt-4">
                      Tras confirmar, podrás activar membresía VIP o descargar tu entrada al instante.
                    </p>
                  </div>
                )}
              </Card>
            </>
          )}
        </>
      )}
    </Section>
  );
}
