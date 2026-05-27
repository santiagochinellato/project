import { useSearchParams } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Innovation from '../components/sections/Innovation';
import HowItWorks from '../components/sections/HowItWorks';
import Rooms from '../components/sections/Rooms';
import Safety from '../components/sections/Safety';
import BoutiqueTeaser from '../components/sections/BoutiqueTeaser';
import Events from '../components/sections/Events';
import PricingTeaser from '../components/sections/PricingTeaser';
import Booking from '../components/sections/Booking';
import SpecialEventBooking from '../components/sections/SpecialEventBooking';
import Franchise from '../components/sections/Franchise';
import FAQ from '../components/sections/FAQ';
import LegalTerms from '../components/LegalTerms';
import DigitalTeaser from '../components/sections/DigitalTeaser';
import FinalCTA from '../components/sections/FinalCTA';
import { ROUTES } from '../lib/paths';
import { useSiteNavigate } from '../hooks/useSiteNavigate';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const { navigate } = useSiteNavigate();
  const specialEventType = searchParams.get('tipo') ?? '';
  const legalTab = searchParams.get('tab') ?? 'terminos';

  const goToSafetyLegal = (tabId: string) => {
    navigate(`${ROUTES.seguridad}?tab=${tabId}#seguridad-informacion-legal`);
  };

  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Innovation />
      <HowItWorks />
      <Safety initialLegalTab={legalTab} />
      <BoutiqueTeaser />
      {/* <Events /> */}
      <PricingTeaser />
      <Booking />
      <SpecialEventBooking initialEventType={specialEventType} />
      <Franchise />
      <FAQ />
      <LegalTerms onGoToSafety={goToSafetyLegal} />
      <DigitalTeaser />
      <FinalCTA />
    </main>
  );
}
