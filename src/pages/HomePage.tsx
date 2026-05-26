import Hero from '../components/sections/Hero';
import SiteHub from '../components/sections/SiteHub';
import ExperienciaTeaser from '../components/sections/ExperienciaTeaser';
import SalasTeaser from '../components/sections/SalasTeaser';
import SafetyTeaser from '../components/sections/SafetyTeaser';
import BookingSection from '../components/booking/BookingSection';
import BoutiqueTeaser from '../components/sections/BoutiqueTeaser';
import PricingTeaser from '../components/sections/PricingTeaser';
import DigitalTeaser from '../components/sections/DigitalTeaser';
import EventsTeaser from '../components/sections/EventsTeaser';
import FranchiseTeaser from '../components/sections/FranchiseTeaser';
import FAQPreview from '../components/sections/FAQPreview';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SiteHub />
      <ExperienciaTeaser />
      <SalasTeaser />
      <SafetyTeaser />
      <BookingSection />
      <EventsTeaser />
      <BoutiqueTeaser />
      <PricingTeaser />
      <DigitalTeaser />
      <FranchiseTeaser />
      <FAQPreview />
      <FinalCTA />
    </main>
  );
}
