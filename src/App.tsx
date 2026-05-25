import { useEffect, useRef } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Innovation from './components/sections/Innovation';
import HowItWorks from './components/sections/HowItWorks';
import Rooms from './components/sections/Rooms';
import FinalRoom from './components/sections/FinalRoom';
import Safety from './components/sections/Safety';
import Boutique from './components/sections/Boutique';
import Events from './components/sections/Events';
import Pricing from './components/sections/Pricing';
import Franchise from './components/sections/Franchise';
import Booking from './components/sections/Booking';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import SEOKeywords from './components/SEOKeywords';
import LegalTerms from './components/LegalTerms';
import Digital from './components/sections/Digital';
import ThematicExperiences from './components/sections/ThematicExperiences';
import Analytics from './components/Analytics';

function App() {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: string) => {
    const targetId = section === 'home' ? 'home' : section;
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Analytics />
      <SEOKeywords />
      <TopBar />
      <Navbar onNavigate={handleNavigate} />

      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Innovation />
        <HowItWorks />
        <Rooms onNavigate={handleNavigate} />
        <ThematicExperiences />
        <FinalRoom />
        <Safety />
        <Boutique />
        <Events />
        <Pricing />
        <Booking />
        <Digital />
        <Franchise />
        <FAQ />
        <LegalTerms />
        <FinalCTA onNavigate={handleNavigate} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
