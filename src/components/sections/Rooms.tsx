import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ExperienceCard from '../ui/ExperienceCard';
import EventsShowcase from './EventsShowcase';
import ExperienceExpansionTeaser from './ExperienceExpansionTeaser';
import OffersPromoCitiesBlock from '../pricing/OffersPromoCitiesBlock';
import { thematicExperiences } from '../../data/thematicExperiences';
import { openWhatsApp } from '../../lib/whatsapp';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

const normalExperiences = thematicExperiences.filter((e) => e.tier === 'normal');
const premiumExperiences = thematicExperiences.filter((e) => e.tier === 'premium');

export default function Rooms() {
  const { navigateToSection, goToBooking, navigate } = useSiteNavigate();

  const requestSpecialEvent = (eventTypeId?: string) => {
    const query = eventTypeId ? `?tipo=${eventTypeId}` : '';
    navigate(`${ROUTES.eventos}${query}#reservar-evento`);
  };

  return (
    <Section id="salas">
      <div className="text-center mb-10 md:mb-12">
        <p className="font-body text-xs uppercase tracking-widest2 text-eroscape-text-primary/80 mb-4">
          LAS EXPERIENCIAS
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-eroscape-text-primary uppercase tracking-tight mb-6">
          EROSCAPE ROOM
        </h2>
        <p className="font-body text-base md:text-lg text-eroscape-text-primary/90 max-w-3xl mx-auto leading-relaxed">
          No es un único juego. Es una experiencia que se adapta a ti, a tu vínculo y a tu forma de
          sentir.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto mb-12 md:mb-16" hover={false}>
        <h3 className="font-heading text-lg md:text-xl font-semibold text-eroscape-text-primary mb-4 text-center">
          Todas nuestras experiencias
        </h3>
        <ul className="space-y-2 font-body text-sm md:text-base text-eroscape-text-secondary text-center">
          <li>Duración base de 2 horas</li>
          <li>Ampliaciones disponibles: +30 min, +1 h, +1.5 h</li>
          <li>Personalización desde nuestra boutique</li>
          <li>Nivel de intensidad: Bajo · Medio · Turbio</li>
        </ul>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">
        {normalExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onSelect={goToBooking} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto mb-14 md:mb-16">
        {premiumExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onSelect={goToBooking} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto mb-14 md:mb-16 pt-10 border-t border-purple-500/15">
        <EventsShowcase variant="compact" onRequestQuote={requestSpecialEvent} />
      </div>

      <Card className="max-w-4xl mx-auto text-center mb-14 md:mb-16" hover={false}>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-eroscape-text-primary mb-4">
          No eliges solo una experiencia. Eliges cómo vivirla.
        </h3>
        <p className="font-body text-eroscape-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          ¿No estás seguro de qué experiencia se adapta mejor a ti? Nuestro equipo puede ayudarte a
          encontrar la perfecta según tus preferencias y límites.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <Button onClick={() => navigateToSection('salas')}>Ver todas las experiencias</Button>
          <Button onClick={goToBooking}>Descubre tu experiencia</Button>
          <Button
            variant="outline"
            onClick={() =>
              openWhatsApp('Hola, me gustaría hablar con un asesor sobre qué experiencia EROSCAPE elegir')
            }
          >
            Hablar con un asesor
          </Button>
        </div>
      </Card>

      <div className="max-w-5xl mx-auto mb-14 md:mb-16">
        <ExperienceExpansionTeaser />
      </div>

      <OffersPromoCitiesBlock className="max-w-5xl mx-auto pt-10 border-t border-purple-500/15" />
    </Section>
  );
}
