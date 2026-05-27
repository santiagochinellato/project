import { useSearchParams } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import MediaGallery from '../components/sections/MediaGallery';
import HowItWorks from '../components/sections/HowItWorks';
import Rooms from '../components/sections/Rooms';
import Safety from '../components/sections/Safety';
import BoutiqueTeaser from '../components/sections/BoutiqueTeaser';
import Events from '../components/sections/Events';
import PricingTeaser from '../components/sections/PricingTeaser';
import Booking from '../components/sections/Booking';
import SpecialEventBooking from '../components/sections/SpecialEventBooking';
import Innovation from '../components/sections/Innovation';
import Franchise from '../components/sections/Franchise';
import FAQ from '../components/sections/FAQ';
import DigitalTeaser from '../components/sections/DigitalTeaser';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const specialEventType = searchParams.get('tipo') ?? '';
  const legalTab = searchParams.get('tab') ?? 'terminos';

  return (
    <main>
      <Hero />
      <About />
      {/* <MediaGallery /> */}
      <Rooms />
      <HowItWorks />
      <Safety initialLegalTab={legalTab} />
      <PricingTeaser />
      <Booking />

      {/* Extras al pie (sin interrumpir el flujo principal) */}
      <BoutiqueTeaser />
      <DigitalTeaser />
      <Innovation />
      <Franchise />
      <FAQ />
      <Events />
      <SpecialEventBooking initialEventType={specialEventType} />

      <FinalCTA />
    </main>
  );
}
