import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'featured' | 'gold';
}

export default function Card({
  children,
  className = '',
  hover = true,
  variant = 'default',
}: CardProps) {
  const variants = {
    default: `
      bg-eroscape-surface
      border border-purple-500/[0.12]
      ${hover ? 'hover:border-purple-500/[0.30] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(147,51,234,0.10)]' : ''}
    `,
    featured: `
      bg-gradient-to-br from-purple-950/40 via-eroscape-surface to-pink-950/20
      border border-purple-500/25
      ${hover ? 'hover:border-purple-500/50 hover:-translate-y-1' : ''}
    `,
    gold: `
      bg-gradient-to-br from-yellow-950/30 via-eroscape-surface to-amber-950/20
      border border-yellow-500/[0.25]
      ${hover ? 'hover:border-yellow-500/50 hover:-translate-y-1' : ''}
    `,
  };

  return (
    <div
      className={`
      relative overflow-hidden
      rounded-2xl p-6 md:p-8
      transition-[transform,border-color,box-shadow] duration-500 ease-out
      ${variants[variant]}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
