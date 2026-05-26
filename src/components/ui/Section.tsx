import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function Section({
  id,
  children,
  className = '',
  dark = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative
        ${noPadding ? '' : 'py-24 md:py-32 px-5 md:px-8'}
        ${dark ? 'bg-eroscape-deep' : 'bg-eroscape-void'}
        ${className}
      `}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
