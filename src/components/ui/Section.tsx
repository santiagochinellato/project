import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, children, className = '', dark = false }: SectionProps) {
  const bgClass = dark ? 'bg-black' : 'bg-gradient-to-b from-black to-gray-900';

  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
