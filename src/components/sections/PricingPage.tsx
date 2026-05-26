import { ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import IntensityLevelsBlock from '../pricing/IntensityLevelsBlock';
import PricingDetailsContent from '../pricing/PricingDetailsContent';

interface PricingPageProps {
  onBack: () => void;
  onNavigate: (section: string) => void;
  onOpenBoutique: () => void;
}

export default function PricingPage({ onBack, onNavigate, onOpenBoutique }: PricingPageProps) {
  const goToBooking = () => {
    onBack();
    requestAnimationFrame(() => onNavigate('reservar'));
  };

  return (
    <div id="precios" className="min-h-screen bg-eroscape-void pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-body text-sm text-purple-300 hover:text-purple-200 transition-colors duration-200"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Volver a la experiencia
        </button>
      </div>

      <Section className="!py-0">
        <SectionHeader
          eyebrow="PRECIOS · OFERTAS"
          title="Precios, Pagos & Ofertas"
          variant="gold"
        />

        <div className="mb-16">
          <IntensityLevelsBlock onReserve={goToBooking} />
        </div>

        <PricingDetailsContent
          onOpenBoutique={onOpenBoutique}
          onNavigate={(section) => {
            if (section === 'boutique') {
              onOpenBoutique();
              return;
            }
            if (section === 'reservar') {
              goToBooking();
              return;
            }
            onBack();
            requestAnimationFrame(() => onNavigate(section));
          }}
        />
      </Section>
    </div>
  );
}
