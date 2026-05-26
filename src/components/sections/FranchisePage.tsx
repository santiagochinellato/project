import { useCallback, useEffect } from 'react';
import Section from '../ui/Section';
import PageBackLink from '../layout/PageBackLink';
import FranchiseContent from '../franchise/FranchiseContent';

export default function FranchisePage() {
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
      <PageBackLink />

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
