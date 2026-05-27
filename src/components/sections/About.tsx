import { Bot, Heart, Lock, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import SectionHeader from '../ui/SectionHeader';

const profiles = [
  {
    icon: Heart,
    iconClass: 'text-pink-400',
    ringClass: 'from-pink-500/20 to-purple-500/10 border-pink-500/25',
    fill: true,
    index: '01',
    title: 'Lovers',
    tagline: 'Parejas · Reconexión',
    description:
      'Para quienes quieren reconectar, jugar y volver a mirarse distinto. Enigmas compartidos hasta la habitación de placer.',
  },
  {
    icon: Sparkles,
    iconClass: 'text-purple-400',
    ringClass: 'from-purple-500/25 to-pink-500/10 border-purple-500/35',
    fill: false,
    index: '02',
    title: 'Plan Golfo',
    tagline: 'Amigos · Tensión · Aventura',
    description:
      'Rolletes, parejas aventureras o amigos con chispa. Adrenalina, risas nerviosas y un final que no olvidarás.',
    featured: true,
  },
  {
    icon: Lock,
    iconClass: 'text-eroscape-gold',
    ringClass: 'from-yellow-500/15 to-purple-500/10 border-yellow-500/25',
    fill: false,
    index: '03',
    title: 'Libertino',
    tagline: 'Grupos · Mente abierta',
    description:
      'Swingers y exploradores. Tres niveles de intensidad y una habitación tematizada de exploración total.',
  },
] as const;

export default function About() {
  return (
    <Section id="experiencia" className="!py-16 sm:!py-20 md:!py-28">
      <SectionHeader
        eyebrow="EXPERIENCIA · EROSCAPE ROOM®"
        title="¿Qué es EROSCAPE ROOM®?"
        className="mb-10 sm:mb-12 md:mb-14"
      />

      {/* Narrativa principal */}
      <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className="lg:col-span-5 xl:col-span-4">
          <Badge variant="gold" className="mb-4 sm:mb-5">
            Primera vez en el mundo
          </Badge>
          <p className="font-display text-3xl font-light leading-[1.15] text-eroscape-text-primary sm:text-4xl md:text-[2.75rem]">
            El primer Escape Room Erótico del planeta.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-eroscape-text-muted sm:text-base">
            Misterio, intensidad y consentimiento. Todo en un entorno elegante y privado.
          </p>
          <div className="mt-6 hidden h-px w-16 bg-gradient-to-r from-purple-500/60 to-transparent lg:block" />
        </div>

        <Card
          hover={false}
          className="lg:col-span-7 xl:col-span-8 !p-5 sm:!p-7 md:!p-8 bg-eroscape-surface/80 border-purple-500/20"
        >
          <div className="space-y-4 sm:space-y-5 font-body leading-relaxed">
            <p className="text-base text-eroscape-text-secondary sm:text-lg md:text-xl">
              Una experiencia{' '}
              <span className="font-semibold text-eroscape-text-primary">física y presencial</span> en
              tu ciudad. No es un escape room tradicional. No es un club. No es &quot;una cita&quot;.
            </p>
            <p className="text-base text-eroscape-text-secondary sm:text-lg md:text-xl">
              Resuelve enigmas, descifra códigos y deja que la{' '}
              <span className="font-semibold text-purple-300">IA te guíe</span> a través del misterio.
            </p>

            <div className="rounded-2xl border border-purple-500/20 bg-black/25 px-5 py-4 sm:px-6 sm:py-5">
              <p className="font-display text-lg font-light leading-[1.25] text-eroscape-text-primary sm:text-xl md:text-2xl">
                Llegas a la habitación final: un espacio íntimo diseñado para el placer.
              </p>
              <p className="mt-2 font-body text-sm text-eroscape-text-muted sm:text-base">
                Sin desnudez ni contenido explícito. Elegancia, sugerencia y límites claros.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Perfiles */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-body mb-1 text-xs uppercase tracking-widest2 text-purple-400/70">
            Perfiles de experiencia
          </p>
          <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary sm:text-2xl">
            ¿Con quién vienes?
          </h3>
        </div>
        <p className="max-w-md font-body text-sm leading-relaxed text-eroscape-text-muted sm:text-right">
          El mismo universo EROSCAPE, tres formas de vivirlo según tu vínculo y tus límites.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-4 md:mb-16 md:grid-cols-3 md:gap-5 lg:gap-6">
        {profiles.map(({ icon: Icon, iconClass, ringClass, fill, index, title, tagline, description, ...rest }) => {
          const featured = 'featured' in rest && rest.featured;

          return (
            <Card
              key={title}
              variant={featured ? 'featured' : 'default'}
              className={`relative flex h-full flex-col !p-5 sm:!p-6 md:!p-7 ${
                featured ? 'md:-translate-y-1 md:shadow-[0_12px_40px_rgba(147,51,234,0.12)]' : ''
              }`}
            >
              <span className="font-body absolute right-5 top-5 text-[10px] font-semibold tracking-widest text-purple-500/40 sm:right-6 sm:top-6">
                {index}
              </span>

              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br sm:mb-5 sm:h-16 sm:w-16 ${ringClass}`}
              >
                <Icon
                  className={iconClass}
                  size={28}
                  strokeWidth={1.5}
                  fill={fill ? 'currentColor' : 'none'}
                />
              </div>

              <p className="font-body mb-1 text-[10px] uppercase tracking-widest2 text-purple-400/80 sm:text-xs">
                {tagline}
              </p>
              <h3 className="font-heading mb-3 text-xl font-semibold text-purple-300 sm:text-2xl">
                {title}
              </h3>
              <p className="font-body mt-auto text-sm leading-relaxed text-eroscape-text-muted sm:text-base">
                {description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Cierre: secreto + IA */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
        <Card
          variant="featured"
          hover={false}
          className="flex flex-col justify-center !p-6 sm:!p-7 md:!p-8"
        >
          <p className="font-body mb-2 text-xs uppercase tracking-widest2 text-purple-400/70">
            Sin spoilers
          </p>
          <h3 className="font-heading mb-4 text-2xl font-semibold text-purple-300 sm:text-3xl">
            El Secreto
          </h3>
          <p className="font-display text-lg font-light italic leading-relaxed text-eroscape-text-primary sm:text-xl md:text-2xl">
            No desvelamos pruebas ni recorrido.
          </p>
          <p className="mt-3 font-body text-sm leading-relaxed text-eroscape-text-muted sm:text-base">
            Porque el misterio… es parte del placer.
          </p>
        </Card>

        <Card variant="default" hover={false} className="!p-6 sm:!p-7 md:!p-8">
          <div className="mb-4 flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-500/25 bg-purple-500/10">
              <Bot className="text-purple-400" size={28} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-body mb-1 text-xs uppercase tracking-widest2 text-purple-400/70">
                Tecnología · Consentimiento
              </p>
              <h3 className="font-heading text-2xl font-semibold text-purple-300 sm:text-3xl">
                Game Master IA
              </h3>
            </div>
          </div>

          <ul className="space-y-3 font-body text-sm leading-relaxed text-eroscape-text-secondary sm:text-base">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" aria-hidden="true" />
              <span>
                Experiencia guiada por una{' '}
                <span className="font-medium text-purple-400">Game Master de IA automatizada</span>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/60" aria-hidden="true" />
              <span className="text-eroscape-text-muted">
                Sin presencia humana física durante la sesión.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/60" aria-hidden="true" />
              <span>Narrativa adaptativa que respeta tus límites en tiempo real.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" aria-hidden="true" />
              <span className="font-medium text-purple-300">
                Soporte humano inmediato desde la app ante cualquier incidencia.
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
