import { Clock, Gauge, Sparkles, Users, PartyPopper } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import ExperienceCard from '../ui/ExperienceCard';
import SectionHeader from '../ui/SectionHeader';
import EventsShowcase from './EventsShowcase';
import ExperienceExpansionTeaser from './ExperienceExpansionTeaser';
import OffersPromoCitiesBlock from '../pricing/OffersPromoCitiesBlock';
import { thematicExperiences } from '../../data/thematicExperiences';
import { openWhatsApp } from '../../lib/whatsapp';
import { ROUTES } from '../../lib/paths';
import { useSiteNavigate } from '../../hooks/useSiteNavigate';

const experienceHighlights = [
  { icon: Clock, label: '2 h base', detail: '+30 · +1 h · +1.5 h' },
  { icon: Gauge, label: 'Intensidad', detail: 'Bajo · Medio · Turbio' },
  { icon: Sparkles, label: 'Boutique', detail: 'Personaliza tu sesión' },
  { icon: Users, label: '2–6 personas', detail: 'Según experiencia' },
] as const;

const featuredId = 'la-mascarada';
const gridExperiences = thematicExperiences.filter((e) => e.id !== featuredId);
const heroExperience = thematicExperiences.find((e) => e.id === featuredId)!;

export default function Rooms() {
  const { goToBooking, navigate } = useSiteNavigate();

  const requestSpecialEvent = (eventTypeId?: string) => {
    const query = eventTypeId ? `?tipo=${eventTypeId}` : '';
    navigate(`${ROUTES.eventos}${query}#reservar-evento`);
  };

  return (
    <Section id="salas" className="!py-16 sm:!py-20 md:!py-28">
      <SectionHeader
        eyebrow="LAS EXPERIENCIAS · EROSCAPE ROOM"
        title="Cinco mundos. Una habitación final."
        intro="Cada sala es un universo propio: enigmas, atmósfera sensorial e intensidad a tu medida. Elige el escenario que encaje con tu vínculo."
        className="mb-10 sm:mb-12 md:mb-14"
      />

      <div className="mb-10 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-4 sm:gap-4 md:mb-14">
        {experienceHighlights.map(({ icon: Icon, label, detail }) => (
          <div
            key={label}
            className="rounded-xl border border-purple-500/15 bg-eroscape-surface/80 px-3 py-3 text-center sm:px-4 sm:py-4"
          >
            <Icon className="mx-auto mb-2 text-purple-400" size={22} strokeWidth={1.5} />
            <p className="font-heading text-xs font-semibold text-eroscape-text-primary sm:text-sm">
              {label}
            </p>
            <p className="mt-0.5 font-body text-[10px] text-eroscape-text-muted sm:text-xs">{detail}</p>
          </div>
        ))}
      </div>

      <div className="mb-5 md:mb-6">
        <ExperienceCard experience={heroExperience} onSelect={goToBooking} featured />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 lg:gap-6">
        {gridExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} onSelect={goToBooking} />
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-5xl sm:mt-14 md:mt-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-500/25 bg-purple-500/10">
              <PartyPopper className="text-purple-300" size={22} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/70">
                Eventos especiales
              </p>
              <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary sm:text-2xl">
                Celebración, corporativo o algo único
              </h3>
            </div>
          </div>
          <Button variant="outline" className="hidden sm:inline-flex" onClick={() => requestSpecialEvent()}>
            Personalizar mi evento
          </Button>
        </div>

        <Card hover={false} className="!p-4 sm:!p-6 md:!p-8 bg-eroscape-surface/80 border-purple-500/20">
          <EventsShowcase variant="compact" onRequestQuote={requestSpecialEvent} />
          <div className="mt-6 flex justify-center sm:hidden">
            <Button variant="outline" onClick={() => requestSpecialEvent()} className="w-full">
              Personalizar mi evento
            </Button>
          </div>
        </Card>
      </div>

      <Card
        className="mx-auto mt-12 max-w-5xl overflow-hidden !p-0 sm:mt-14 md:mt-16"
        hover={false}
        variant="featured"
      >
        <div className="grid grid-cols-1 gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h3 className="font-display mb-3 text-2xl font-light italic leading-tight text-gradient-brand sm:mb-4 sm:text-3xl md:text-4xl">
              No eliges solo una experiencia.
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              Eliges cómo vivirla.
            </h3>
            <p className="font-body max-w-2xl text-sm leading-relaxed text-eroscape-text-secondary sm:text-base md:text-lg">
              ¿No estás seguro de qué sala encaja contigo? Te ayudamos según preferencias, límites y con
              quién vienes.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              <Button onClick={goToBooking} className="w-full">
                Reservar experiencia
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  openWhatsApp('Hola, me gustaría hablar con un asesor sobre qué experiencia EROSCAPE elegir')
                }
                className="w-full"
              >
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="mx-auto mt-12 max-w-5xl sm:mt-14 md:mt-16">
        <ExperienceExpansionTeaser />
      </div>

      <div className="mx-auto mt-12 max-w-5xl sm:mt-14 md:mt-16">
        <OffersPromoCitiesBlock className="border-t border-purple-500/15 pt-10 md:pt-12" />
      </div>
    </Section>
  );
}
