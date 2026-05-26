import { useCallback, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import PageBackLink from '../layout/PageBackLink';
import DigitalIntroCover from '../digital/DigitalIntroCover';
import DigitalAppExperience from '../digital/DigitalAppExperience';

export default function DigitalPage() {
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
      <PageBackLink />

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
