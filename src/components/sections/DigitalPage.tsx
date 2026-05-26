import { useCallback, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import DigitalIntroCover from '../digital/DigitalIntroCover';
import DigitalAppExperience from '../digital/DigitalAppExperience';

interface DigitalPageProps {
  onBack: () => void;
}

export default function DigitalPage({ onBack }: DigitalPageProps) {
  const goToApp = useCallback(() => {
    const element = document.getElementById('digital-app');
    if (element) {
      const offset = 88;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `${window.location.pathname}#digital-app`);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === '#digital-app') {
      requestAnimationFrame(() => goToApp());
    }
  }, [goToApp]);

  return (
    <div id="digital" className="min-h-screen bg-eroscape-void pt-6 pb-16">
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

      <Section className="!py-0" dark>
        <DigitalIntroCover />

        <div className="flex justify-center my-12 md:my-16">
          <Button size="lg" onClick={goToApp} className="min-w-[16rem]">
            Ve a la aplicación
          </Button>
        </div>

        <DigitalAppExperience />
      </Section>
    </div>
  );
}
