import { useCallback, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Section from '../ui/Section';
import FranchiseContent from '../franchise/FranchiseContent';

interface FranchisePageProps {
  onBack: () => void;
}

export default function FranchisePage({ onBack }: FranchisePageProps) {
  const scrollToForm = useCallback(() => {
    const element = document.getElementById('franquicia-form');
    if (element) {
      const offset = 88;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.replaceState(null, '', `${window.location.pathname}#franquicia-form`);
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === '#franquicia-form') {
      requestAnimationFrame(() => scrollToForm());
    }
  }, [scrollToForm]);

  return (
    <div id="franquicia" className="min-h-screen bg-eroscape-void pt-6 pb-16">
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

      <Section className="!py-0 relative overflow-hidden" dark>
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <FranchiseContent />
        </div>
      </Section>
    </div>
  );
}
