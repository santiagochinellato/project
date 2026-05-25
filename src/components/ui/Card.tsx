import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20' : '';

  return (
    <div
      className={`bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl p-6 transition-all duration-300 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
