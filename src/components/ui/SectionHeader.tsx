interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  variant?: 'brand' | 'gold';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  variant = 'brand',
  className = '',
}: SectionHeaderProps) {
  const titleClass =
    variant === 'gold'
      ? 'text-gradient-gold'
      : 'text-gradient-brand';

  return (
    <div className={`text-center mb-16 ${className}`}>
      <p className="font-body text-xs uppercase tracking-widest2 text-purple-400/60 mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-display font-light italic text-4xl md:text-5xl lg:text-[3.5rem] text-center mb-6 leading-[1.1] ${titleClass}`}
      >
        {title}
      </h2>
      {intro && (
        <p className="font-body text-base md:text-lg text-eroscape-text-secondary text-center max-w-2xl mx-auto leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
