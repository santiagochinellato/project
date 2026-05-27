import { ArrowUpRight } from 'lucide-react';
import Badge from './Badge';
import OptimizedImage from './OptimizedImage';
import type { ThematicExperience } from '../../data/thematicExperiences';

interface ExperienceCardProps {
  experience: ThematicExperience;
  onSelect: (id: string) => void;
  /** Ocupa dos columnas en grid desktop (experiencias premium destacadas) */
  featured?: boolean;
}

export default function ExperienceCard({ experience, onSelect, featured = false }: ExperienceCardProps) {
  const isPremium = experience.tier === 'premium';
  const imagePosition = experience.imagePosition ?? 'object-center';

  return (
    <button
      type="button"
      onClick={() => onSelect(experience.id)}
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-eroscape-surface text-left transition-[border-color,transform,box-shadow] duration-500 hover:border-purple-500/45 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(147,51,234,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div
        className={`relative w-full overflow-hidden ${
          featured ? 'aspect-[16/10] sm:aspect-[21/9]' : 'aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]'
        }`}
      >
        <OptimizedImage
          src={experience.image}
          alt={experience.title}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${imagePosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 opacity-80" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          {isPremium && (
            <Badge variant="gold" className="text-[10px] sm:text-xs">
              PREMIUM
            </Badge>
          )}
          <Badge variant="adult" className="text-[10px] sm:text-xs">
            +18
          </Badge>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 ${
            featured ? 'md:p-6 lg:p-8' : 'md:p-6'
          }`}
        >
          {experience.subtitle && (
            <p className="font-body mb-1.5 text-[10px] uppercase tracking-widest2 text-purple-300/90 sm:mb-2 sm:text-xs">
              {experience.subtitle}
            </p>
          )}
          <h3
            className={`font-display font-semibold italic leading-tight text-eroscape-text-primary ${
              featured ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'
            }`}
          >
            {experience.title}
          </h3>
          <p
            className={`mt-2 font-body leading-relaxed text-eroscape-text-secondary/95 ${
              featured
                ? 'max-w-2xl text-sm sm:text-base md:text-lg'
                : 'line-clamp-3 text-sm sm:text-base'
            }`}
          >
            {experience.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-semibold text-purple-300 transition-colors duration-300 group-hover:text-purple-200 sm:mt-4 sm:text-sm">
            Reservar experiencia
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </button>
  );
}
