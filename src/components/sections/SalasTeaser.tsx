import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import ExperienceCard from '../ui/ExperienceCard';
import SectionHeader from '../ui/SectionHeader';
import { getFeaturedExperiences } from '../../data/thematicExperiences';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

const featured = getFeaturedExperiences();

export default function SalasTeaser() {
  const { goToBooking } = useSiteNavigate();

  return (
    <Section id="salas-preview">
      <SectionHeader
        eyebrow="SALAS"
        title="Experiencias que se adaptan a ti"
        intro="Cinco mundos temáticos y tres salas reservables. Elige intensidad, duración y extras desde nuestra boutique."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
        {featured.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onSelect={goToBooking} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={ROUTES.salas}>
          <Button size="lg" className="pointer-events-none">
            Ver todas las salas
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
        <Button variant="outline" size="lg" onClick={goToBooking}>
          Reservar ahora
        </Button>
      </div>
    </Section>
  );
}
