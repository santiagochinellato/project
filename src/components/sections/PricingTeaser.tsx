import { CreditCard, Shield, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import IntensityLevelsBlock from '../pricing/IntensityLevelsBlock';
import ExpandExperienceBlock from '../pricing/ExpandExperienceBlock';
import OffersPromoCitiesBlock from '../pricing/OffersPromoCitiesBlock';

interface PricingTeaserProps {
  onOpenPricing: () => void;
  onOpenBoutique: () => void;
  onNavigate: (section: string) => void;
}

const previewCards = [
  {
    icon: CreditCard,
    title: 'Métodos de pago',
    text: 'Tarjeta, PayPal, transferencia y cripto.',
  },
  {
    icon: Shield,
    title: 'Garantía con tarjeta',
    text: 'Como en hotel: solo cargos por extras o incidencias.',
  },
  {
    icon: Calendar,
    title: 'Cambios de fecha',
    text: 'Reagenda con 72–48 h. Sin cancelaciones.',
  },
] as const;

export default function PricingTeaser({ onOpenPricing, onOpenBoutique, onNavigate }: PricingTeaserProps) {
  return (
    <Section id="precios-preview">
      <SectionHeader
        eyebrow="PRECIOS · OFERTAS"
        title="Precios, Pagos & Ofertas"
        variant="gold"
      />

      <div className="mb-14">
        <IntensityLevelsBlock
          onReserve={() => onNavigate('reservar')}
          showReserveButton={false}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 max-w-5xl mx-auto">
        {previewCards.map(({ icon: Icon, title, text }) => (
          <Card key={title} hover={false} className="text-center !p-5">
            <Icon className="mx-auto text-purple-400 mb-3" size={32} strokeWidth={1.5} />
            <h4 className="font-heading text-lg font-semibold text-eroscape-text-primary mb-2">
              {title}
            </h4>
            <p className="font-body text-sm text-eroscape-text-muted">{text}</p>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
        <Button size="lg" onClick={onOpenPricing} className="min-w-[14rem]">
          Ver precios y condiciones
        </Button>
        <Button variant="outline" size="lg" onClick={() => onNavigate('reservar')} className="min-w-[12rem]">
          Reservar ya
        </Button>
      </div>

      <ExpandExperienceBlock
        onNavigate={onNavigate}
        onOpenBoutique={onOpenBoutique}
        className="mb-14"
      />

      <OffersPromoCitiesBlock onNavigate={onNavigate} className="pt-10 border-t border-purple-500/15" />
    </Section>
  );
}
