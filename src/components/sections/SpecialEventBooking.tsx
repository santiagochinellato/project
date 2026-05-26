import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import {
  corporateEventTypes,
  specialEventTypeLabels,
} from '../../data/corporateEvents';

const inputClass =
  'w-full px-5 py-4 bg-eroscape-surface border border-purple-500/20 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body text-base outline-none transition-[border-color,box-shadow] duration-300';

interface SpecialEventBookingProps {
  initialEventType?: string;
}

export default function SpecialEventBooking({ initialEventType = '' }: SpecialEventBookingProps) {
  const [eventType, setEventType] = useState(initialEventType);

  useEffect(() => {
    setEventType(initialEventType);
  }, [initialEventType]);

  const eventOptions = [
    ...corporateEventTypes.map((e) => ({ id: e.id, label: e.title })),
    { id: 'team-building', label: specialEventTypeLabels['team-building'] },
    { id: 'personalizado', label: specialEventTypeLabels.personalizado },
  ];

  return (
    <Section id="reservar-evento" dark>
      <SectionHeader
        eyebrow="EVENTO ESPECIAL · PROPUESTA"
        title="Cuéntanos tu evento"
        intro="Nuestro equipo de eventos te contactará para personalizar la experiencia y enviarte una propuesta con precio adaptado a tu grupo. Sin compromiso."
        className="mb-10"
      />

      <Card className="max-w-3xl mx-auto">
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">
                Nombre completo *
              </label>
              <input type="text" required className={inputClass} placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">Empresa / grupo</label>
              <input type="text" className={inputClass} placeholder="Opcional" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">Email *</label>
              <input type="email" required className={inputClass} placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">Teléfono *</label>
              <input type="tel" required className={inputClass} placeholder="+34 600 000 000" />
            </div>
          </div>

          <div>
            <label className="block text-purple-300 mb-2 font-semibold font-body">Tipo de evento *</label>
            <select
              required
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className={inputClass}
            >
              <option value="">Selecciona el tipo de evento</option>
              {eventOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">Ciudad *</label>
              <select required className={inputClass}>
                <option value="">Ciudad</option>
                <option value="granada">Granada</option>
                <option value="malaga">Málaga</option>
                <option value="sevilla">Sevilla</option>
              </select>
            </div>
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">
                Fecha aproximada
              </label>
              <input type="date" className={inputClass} />
            </div>
            <div>
              <label className="block text-purple-300 mb-2 font-semibold font-body">
                Nº de personas *
              </label>
              <input type="number" required min={2} className={inputClass} placeholder="Ej. 12" />
            </div>
          </div>

          <div>
            <label className="block text-purple-300 mb-2 font-semibold font-body">
              Cuéntanos qué tienes en mente *
            </label>
            <textarea
              required
              rows={5}
              className={inputClass}
              placeholder="Tipo de celebración, necesidades del grupo, catering, dinámicas, horarios..."
            />
          </div>

          <div className="flex items-start gap-3 bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
            <input type="checkbox" id="event-age" required className="mt-1" />
            <label htmlFor="event-age" className="font-body text-eroscape-text-secondary text-sm">
              Confirmo que todos los participantes serán mayores de 18 años *
            </label>
          </div>

          <Button type="submit" fullWidth size="lg">
            Enviar solicitud de propuesta
          </Button>

          <p className="font-body text-center text-sm text-eroscape-text-muted">
            Te respondemos en menos de 24–48 h con una propuesta personalizada y presupuesto sin
            compromiso.
          </p>
        </form>
      </Card>
    </Section>
  );
}
