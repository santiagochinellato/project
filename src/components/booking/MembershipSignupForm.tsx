import { useState } from 'react';
import { Star } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const inputClass =
  'w-full px-5 py-4 bg-eroscape-surface border border-purple-500/20 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body text-base outline-none transition-[border-color,box-shadow] duration-300';

interface MembershipSignupFormProps {
  guestEmail: string;
  guestName: string;
  onComplete: () => void;
  onSkip: () => void;
}

export default function MembershipSignupForm({
  guestEmail,
  guestName,
  onComplete,
  onSkip,
}: MembershipSignupFormProps) {
  const [plan, setPlan] = useState<'mensual' | 'anual'>('anual');
  const [email, setEmail] = useState(guestEmail);
  const [name, setName] = useState(guestName);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onComplete, 600);
  };

  return (
    <Card variant="gold" className="max-w-2xl mx-auto mb-8" hover={false} id="membresia-reserva">
      <div className="flex items-center gap-2 mb-4">
        <Star className="text-eroscape-gold" fill="currentColor" size={24} />
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary">
          Solicitar Membresía VIP
        </h3>
      </div>

      <p className="font-body text-eroscape-text-secondary text-sm mb-6">
        Completa el formulario para activar tu membresía. Te enviaremos el acceso en 24 h. Después podrás
        descargar tu entrada.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-eroscape-gold mb-2 font-semibold text-sm">Nombre *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-eroscape-gold mb-2 font-semibold text-sm">Email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-eroscape-gold mb-2 font-semibold text-sm">Plan *</label>
          <div className="grid grid-cols-2 gap-3">
            {(['mensual', 'anual'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setPlan(option)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  plan === option
                    ? 'border-eroscape-gold bg-yellow-500/10 text-eroscape-text-primary'
                    : 'border-purple-500/20 text-eroscape-text-muted hover:border-purple-500/40'
                }`}
              >
                <span className="font-semibold capitalize block">{option}</span>
                <span className="text-sm">{option === 'mensual' ? '€19/mes' : '€149/año'}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input type="checkbox" id="membership-terms" required className="mt-1" />
          <label htmlFor="membership-terms" className="text-eroscape-text-secondary text-sm">
            Acepto los términos de la membresía VIP y el cobro recurrente del plan seleccionado.
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button type="submit" variant="gold" fullWidth disabled={submitted}>
            {submitted ? 'Solicitud enviada…' : 'Solicitar membresía'}
          </Button>
          <Button type="button" variant="outline" fullWidth onClick={onSkip}>
            Omitir y descargar entrada
          </Button>
        </div>
      </form>
    </Card>
  );
}
