/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        eroscape: {
          void: '#000000',
          deep: '#080808',
          surface: '#0D0D0D',
          elevated: '#141414',
          overlay: '#1A1A1A',
          purple: '#9333EA',
          fuchsia: '#C026D3',
          pink: '#EC4899',
          hot: '#F43F5E',
          gold: '#D4AF37',
          'gold-light': '#F0D060',
          'text-primary': '#F5F5F0',
          'text-secondary': '#A8A8A0',
          'text-muted': '#6B6B65',
          'text-accent': '#D8B4FE',
        },
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(147, 51, 234, 0.15)',
        'glow-purple-lg': '0 0 80px rgba(147, 51, 234, 0.2)',
        'glow-gold': '0 0 40px rgba(212, 175, 55, 0.2)',
        card: '0 8px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 16px 60px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #9333EA 0%, #C026D3 50%, #EC4899 100%)',
        'gradient-text': 'linear-gradient(135deg, #E879F9 0%, #F9A8D4 50%, #C084FC 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
