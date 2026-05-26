import PageBackLink from '../components/layout/PageBackLink';
import About from '../components/sections/About';
import HowItWorks from '../components/sections/HowItWorks';
import Innovation from '../components/sections/Innovation';
import FinalRoom from '../components/sections/FinalRoom';
import MediaGallery from '../components/sections/MediaGallery';

export default function ExperienciaPage() {
  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <About />
      <HowItWorks />
      <Innovation />
      <FinalRoom />
      <MediaGallery />
    </main>
  );
}
