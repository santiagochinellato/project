import { CreditCard, Shield, Calendar } from 'lucide-react';
import Card from '../ui/Card';
import ExpandExperienceBlock from './ExpandExperienceBlock';
import OffersPromoCitiesBlock from './OffersPromoCitiesBlock';

interface PricingDetailsContentProps {
  onNavigate: (section: string) => void;
  onOpenBoutique?: () => void;
}

export default function PricingDetailsContent({
  onNavigate,
  onOpenBoutique,
}: PricingDetailsContentProps) {
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

  return (
    <>
      <ExpandExperienceBlock
        onNavigate={onNavigate}
        onOpenBoutique={onOpenBoutique}
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CreditCard className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
          <h3 className="font-heading text-xl font-bold text-eroscape-text-primary mb-4">Métodos de Pago</h3>
          <ul className="space-y-2">
            {paymentMethods.map((method) => (
              <li key={method} className="font-body text-eroscape-text-muted text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/40">
          <Shield className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
          <h3 className="font-heading text-xl font-bold text-eroscape-text-primary mb-4">
            Garantía con Tarjeta
          </h3>
          <div className="space-y-3 text-sm">
            <p className="font-body text-purple-300 font-semibold">
              Se requiere tarjeta de crédito como garantía (similar a hoteles)
            </p>
            <ul className="space-y-2">
              {[
                'Posibles ampliaciones de tiempo',
                'Daños al equipamiento o sala',
                'Uso indebido de las instalaciones',
                'Incumplimiento de normas',
              ].map((item) => (
                <li key={item} className="font-body text-eroscape-text-muted flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <Calendar className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
          <h3 className="font-heading text-xl font-bold text-eroscape-text-primary mb-4">
            Política de Cambios
          </h3>
          <ul className="space-y-2">
            {policies.slice(1, 3).map((policy) => (
              <li key={policy} className="font-body text-eroscape-text-muted text-sm flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <span>{policy}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-purple-500/20">
            <p className="font-body text-eroscape-text-muted text-xs italic">
              No ofrecemos cancelaciones. Puedes cambiar tu fecha con 72-48h de antelación sin coste
              adicional.
            </p>
          </div>
        </Card>

        <Card className="md:col-span-3" variant="featured">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-eroscape-text-primary mb-4">Duración</h3>
              <p className="font-body text-eroscape-text-secondary mb-4">
                Duración base: <span className="text-purple-300 font-bold">2 horas</span>
              </p>
              <div className="space-y-2">
                <p className="font-body text-eroscape-text-muted text-sm">Ampliaciones disponibles:</p>
                <ul className="font-body space-y-1 text-eroscape-text-muted text-sm">
                  <li>+30 minutos</li>
                  <li>+60 minutos</li>
                  <li>+120 minutos</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-heading text-xl font-bold text-eroscape-text-primary mb-4">
                Términos y Condiciones de Pago
              </h3>
              <div className="space-y-3 font-body text-sm text-eroscape-text-muted">
                <p>
                  <span className="text-purple-300 font-semibold">Depósito con tarjeta:</span> Se autoriza
                  temporalmente tu tarjeta de crédito como garantía. No se cobra a menos que existan cargos
                  adicionales.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">Cambio de fecha:</span> Puedes mover tu
                  reserva a otra fecha sin coste si lo solicitas con 72h-48h de antelación. Sin excepciones
                  fuera de este plazo.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">No cancelaciones:</span> No ofrecemos
                  reembolsos ni cancelaciones. Solo cambios de fecha según política.
                </p>
                <p>
                  <span className="text-purple-300 font-semibold">Cargos adicionales:</span> Se cobrarán a la
                  tarjeta registrada: ampliaciones no reservadas, daños materiales, limpieza extraordinaria o
                  incumplimiento de normas.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <OffersPromoCitiesBlock onNavigate={onNavigate} className="pt-4" />
    </>
  );
}
