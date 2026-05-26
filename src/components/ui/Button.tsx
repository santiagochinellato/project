import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variants = {
  primary: `
    bg-gradient-to-r from-purple-600 to-pink-600
    hover:from-purple-500 hover:to-pink-500
    text-white
    shadow-[0_4px_20px_rgba(147,51,234,0.30)]
    hover:shadow-[0_4px_32px_rgba(147,51,234,0.50)]
  `,
  secondary: `
    bg-eroscape-elevated
    border border-purple-500/30
    hover:border-purple-400/60
    hover:bg-purple-500/[0.07]
    text-purple-300 hover:text-purple-200
  `,
  outline: `
    bg-transparent
    border border-purple-500/40
    hover:border-purple-400/70
    hover:bg-purple-500/[0.06]
    text-purple-300 hover:text-eroscape-text-primary
  `,
  ghost: `
    bg-transparent
    text-eroscape-text-secondary hover:text-purple-300
    hover:bg-purple-500/[0.06]
  `,
  gold: `
    bg-gradient-to-r from-yellow-600 to-amber-500
    hover:from-yellow-500 hover:to-amber-400
    text-black font-bold
    shadow-[0_4px_20px_rgba(212,175,55,0.25)]
    hover:shadow-[0_4px_32px_rgba(212,175,55,0.40)]
  `,
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-base md:text-lg rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-body font-semibold
        transition-[transform,opacity,box-shadow,background-color,border-color,color] duration-300
        hover:scale-[1.02] active:scale-[0.98]
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-40 cursor-not-allowed hover:scale-100' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
