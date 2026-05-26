import { Crown } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface MembershipPromptModalProps {
  onYes: () => void;
  onNo: () => void;
}

export default function MembershipPromptModal({ onYes, onNo }: MembershipPromptModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card variant="featured" className="max-w-lg w-full relative" hover={false}>
        <div className="text-center">
          <Crown className="mx-auto text-eroscape-gold mb-4" size={40} strokeWidth={1.5} />
          <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
            ¿Quieres tu Membresía VIP?
          </h3>
          <p className="font-body text-eroscape-text-secondary text-sm mb-8 leading-relaxed">
            Con la membresía obtienes 15% permanente en boutique, acceso a productos limitados y ventajas
            exclusivas en futuras reservas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" onClick={onYes} className="min-w-[8rem]">
              Sí, quiero membresía
            </Button>
            <Button variant="outline" size="lg" onClick={onNo} className="min-w-[8rem]">
              No, continuar
            </Button>
          </div>

          <p className="font-body text-xs text-eroscape-text-muted mt-6">
            Si eliges «No», podrás descargar tu entrada y confirmación de reserva al instante.
          </p>
        </div>
      </Card>
    </div>
  );
}
