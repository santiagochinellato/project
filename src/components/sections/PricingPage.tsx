import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import PageBackLink from '../layout/PageBackLink';
import IntensityLevelsBlock from '../pricing/IntensityLevelsBlock';
import PricingDetailsContent from '../pricing/PricingDetailsContent';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

export default function PricingPage() {
  const { goToBooking } = useSiteNavigate();

  return (
    <div id="precios" className="min-h-screen bg-eroscape-void pt-6 pb-16">
      <PageBackLink />

      <Section className="!py-0">
        <SectionHeader
          eyebrow="PRECIOS · OFERTAS"
          title="Precios, Pagos & Ofertas"
          variant="gold"
        />

        <div className="mb-16">
          <IntensityLevelsBlock onReserve={goToBooking} />
        </div>

        <PricingDetailsContent />
      </Section>
    </div>
  );
}
