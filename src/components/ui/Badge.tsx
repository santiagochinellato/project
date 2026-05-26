interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'adult' | 'gold';
  className?: string;
}

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const variants = {
    accent: `
      bg-purple-500/10 border border-purple-500/25
      text-purple-300 uppercase tracking-wider
    `,
    adult: `
      bg-black/60 backdrop-blur-sm border border-white/10
      text-eroscape-text-primary/80 font-bold
    `,
    gold: `
      bg-yellow-500/10 border border-yellow-500/25
      text-eroscape-gold uppercase tracking-wider
    `,
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1 rounded-full
        font-body text-xs font-semibold
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
