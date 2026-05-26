import { useCallback, useEffect, useRef, useState } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Innovation from './components/sections/Innovation';
import HowItWorks from './components/sections/HowItWorks';
import Rooms from './components/sections/Rooms';
import Safety from './components/sections/Safety';
import BoutiqueTeaser from './components/sections/BoutiqueTeaser';
import BoutiqueShop from './components/sections/BoutiqueShop';
import Events from './components/sections/Events';
import PricingTeaser from './components/sections/PricingTeaser';
import PricingPage from './components/sections/PricingPage';
import Franchise from './components/sections/Franchise';
import FranchisePage from './components/sections/FranchisePage';
import Booking from './components/sections/Booking';
import SpecialEventBooking from './components/sections/SpecialEventBooking';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import SEOKeywords from './components/SEOKeywords';
import LegalTerms from './components/LegalTerms';
import DigitalTeaser from './components/sections/DigitalTeaser';
import DigitalPage from './components/sections/DigitalPage';
import Analytics from './components/Analytics';
import { type AppView, isSubPageView, readViewFromHash } from './lib/appView';

function App() {
  const [view, setView] = useState<AppView>(readViewFromHash);
  const pendingScrollRef = useRef<string | null>(null);
  const [specialEventType, setSpecialEventType] = useState('');
  const [pendingLegalTab, setPendingLegalTab] = useState('terminos');

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
  }, [view]);

  useEffect(() => {
    const onHashChange = () => setView(readViewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const scrollToSection = useCallback((section: string) => {
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
  }, []);

  useEffect(() => {
    if (view !== 'home') return;

    if (pendingScrollRef.current) {
      const section = pendingScrollRef.current;
      pendingScrollRef.current = null;
      requestAnimationFrame(() => scrollToSection(section));
      return;
    }

    const hash = window.location.hash.slice(1);
    const subPageHashes = ['boutique', 'precios', 'digital', 'digital-app', 'franquicia', 'franquicia-form'];
    if (!hash || subPageHashes.includes(hash)) return;

    const [sectionId, legalTab] = hash.split('--');
    if (legalTab) setPendingLegalTab(legalTab);
    requestAnimationFrame(() => scrollToSection(sectionId));
  }, [view, scrollToSection]);

  const openBoutique = useCallback(() => {
    setView('boutique');
    window.history.pushState(null, '', '#boutique');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const closeBoutique = useCallback(() => {
    setView('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openPricing = useCallback(() => {
    setView('precios');
    window.history.pushState(null, '', '#precios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const closePricing = useCallback(() => {
    setView('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openDigital = useCallback(() => {
    setView('digital');
    window.history.pushState(null, '', '#digital');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openDigitalApp = useCallback(() => {
    setView('digital');
    window.history.pushState(null, '', '#digital-app');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const closeDigital = useCallback(() => {
    setView('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openFranchise = useCallback(() => {
    setView('franquicia');
    window.history.pushState(null, '', '#franquicia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openFranchiseForm = useCallback(() => {
    setView('franquicia');
    window.history.pushState(null, '', '#franquicia-form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const closeFranchise = useCallback(() => {
    setView('home');
    window.history.pushState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goToSafetyLegal = useCallback(
    (tabId: string) => {
      setPendingLegalTab(tabId);
      const hash = `seguridad-informacion-legal--${tabId}`;

      if (isSubPageView(view)) {
        pendingScrollRef.current = 'seguridad-informacion-legal';
        setView('home');
        window.history.pushState(null, '', `${window.location.pathname}#${hash}`);
        return;
      }

      scrollToSection('seguridad-informacion-legal');
      window.history.replaceState(null, '', `${window.location.pathname}#${hash}`);
    },
    [view, scrollToSection],
  );

  const requestSpecialEvent = useCallback(
    (eventTypeId = '') => {
      setSpecialEventType(eventTypeId);
      if (isSubPageView(view)) {
        pendingScrollRef.current = 'reservar-evento';
        setView('home');
        window.history.pushState(null, '', '#reservar-evento');
        return;
      }
      scrollToSection('reservar-evento');
      window.history.replaceState(null, '', `${window.location.pathname}#reservar-evento`);
    },
    [view, scrollToSection],
  );

  const handleNavigate = useCallback(
    (section: string) => {
      if (section === 'boutique') {
        openBoutique();
        return;
      }

      if (section === 'precios') {
        openPricing();
        return;
      }

      if (section === 'digital') {
        openDigital();
        return;
      }

      if (section === 'digital-app') {
        openDigitalApp();
        return;
      }

      if (section === 'franquicia') {
        openFranchise();
        return;
      }

      if (section === 'franquicia-form') {
        openFranchiseForm();
        return;
      }

      if (isSubPageView(view)) {
        pendingScrollRef.current = section;
        setView('home');
        const hash = section === 'home' ? '' : `#${section}`;
        window.history.pushState(null, '', `${window.location.pathname}${hash}`);
        return;
      }

      scrollToSection(section);
      if (section !== 'home') {
        window.history.replaceState(null, '', `${window.location.pathname}#${section}`);
      } else {
        window.history.replaceState(null, '', window.location.pathname);
      }
    },
    [
      view,
      openBoutique,
      openPricing,
      openDigital,
      openDigitalApp,
      openFranchise,
      openFranchiseForm,
      scrollToSection,
    ],
  );

  return (
    <div className="min-h-screen bg-eroscape-void text-eroscape-text-primary">
      <Analytics />
      <SEOKeywords />
      <TopBar />
      <Navbar onNavigate={handleNavigate} />

      {view === 'boutique' ? (
        <main>
          <BoutiqueShop onBack={closeBoutique} />
        </main>
      ) : view === 'precios' ? (
        <main>
          <PricingPage
            onBack={closePricing}
            onNavigate={handleNavigate}
            onOpenBoutique={openBoutique}
          />
        </main>
      ) : view === 'digital' ? (
        <main>
          <DigitalPage onBack={closeDigital} />
        </main>
      ) : view === 'franquicia' ? (
        <main>
          <FranchisePage onBack={closeFranchise} />
        </main>
      ) : (
        <main>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Innovation />
          <HowItWorks />
          <Rooms
            onNavigate={handleNavigate}
            onRequestSpecialEvent={requestSpecialEvent}
            onOpenBoutique={openBoutique}
          />
          <Safety initialLegalTab={pendingLegalTab} />
          <BoutiqueTeaser onOpenBoutique={openBoutique} />
          <Events onRequestSpecialEvent={requestSpecialEvent} />
          <PricingTeaser
            onOpenPricing={openPricing}
            onOpenBoutique={openBoutique}
            onNavigate={handleNavigate}
          />
          <Booking />
          <SpecialEventBooking initialEventType={specialEventType} />
          <Franchise />
          <FAQ />
          <LegalTerms onGoToSafety={goToSafetyLegal} />
          <DigitalTeaser onOpenDigital={openDigital} onGoToApp={openDigitalApp} />
          <FinalCTA onNavigate={handleNavigate} />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
