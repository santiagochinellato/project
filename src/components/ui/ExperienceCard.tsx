import Badge from './Badge';
import OptimizedImage from './OptimizedImage';
import type { ThematicExperience } from '../../data/thematicExperiences';

interface ExperienceCardProps {
  experience: ThematicExperience;
  onSelect: (id: string) => void;
}

export default function ExperienceCard({ experience, onSelect }: ExperienceCardProps) {
  const isPremium = experience.tier === 'premium';

  return (
    <button
      type="button"
      onClick={() => onSelect(experience.id)}
      className={`group relative w-full overflow-hidden rounded-2xl border border-purple-500/20 bg-eroscape-surface text-left transition-[border-color,transform,box-shadow] duration-500 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(147,51,234,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 ${
        isPremium ? 'md:min-h-[22rem]' : ''
      }`}
    >
      <div className={`relative w-full overflow-hidden ${isPremium ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <OptimizedImage
          src={experience.image}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />

        {isPremium && (
          <div className="absolute top-4 left-4">
            <Badge variant="gold" className="text-[10px]">
              PREMIUM
            </Badge>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <Badge variant="adult">+18</Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3
            className={`font-display font-semibold italic text-eroscape-text-primary mb-2 ${
              isPremium ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
          >
            {experience.title}
          </h3>
          <p
            className={`font-body text-eroscape-text-secondary leading-relaxed ${
              isPremium
                ? 'text-sm md:text-base'
                : 'text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            }`}
          >
            {experience.description}
          </p>
        </div>
      </div>
    </button>
  );
}
