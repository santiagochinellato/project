import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const LOGO_SRC = '/images/eros-logo-ico.png';

const menuItems = [
  { label: 'Experiencia', section: 'experiencia' },
  { label: 'Digital', section: 'digital', new: true },
  { label: 'Boutique', section: 'boutique' },
  { label: 'Salas', section: 'salas' },
  { label: 'Reservar', section: 'reservar' },
  { label: 'Seguridad', section: 'seguridad' },
  { label: 'Precios', section: 'precios' },
  { label: 'Franquicia', section: 'franquicia', highlight: true },
  { label: 'FAQ', section: 'faq' },
] as const;

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  const linkClass = (item: (typeof menuItems)[number]) =>
    `font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
      item.highlight
        ? 'text-eroscape-gold hover:text-eroscape-gold-light'
        : item.new
          ? 'text-purple-300 hover:text-purple-200'
          : 'text-eroscape-text-secondary hover:text-eroscape-text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50">
      <nav
        className="border-b border-purple-500/15 bg-eroscape-void/90 backdrop-blur-xl"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between gap-4 h-[4.5rem] lg:h-20">
            {/* Logo + marca */}
            <button
              type="button"
              onClick={() => handleClick('home')}
              className="group flex items-center gap-3 shrink-0 text-left transition-opacity duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-xl"
              aria-label="EROSCAPE — Ir al inicio"
            >
              <span className="relative flex h-11 w-11 md:h-12 md:w-12 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-full bg-purple-600/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <img
                  src={LOGO_SRC}
                  alt=""
                  className="relative h-full w-full object-contain drop-shadow-[0_0_12px_rgba(147,51,234,0.35)]"
                  width={48}
                  height={48}
                />
              </span>
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-lg md:text-xl font-semibold tracking-tight text-eroscape-text-primary">
                  EROSCAPE
                </span>
              </span>
            </button>

            {/* Enlaces desktop — centrados */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  type="button"
                  onClick={() => handleClick(item.section)}
                  className={`inline-flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg hover:bg-purple-500/[0.06] ${linkClass(item)}`}
                >
                  {item.label}
                  {item.new && (
                    <Badge variant="accent" className="text-[9px] px-1.5 py-0 leading-5">
                      NUEVO
                    </Badge>
                  )}
                </button>
              ))}
            </div>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <span
                className="h-8 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                aria-hidden="true"
              />
              <Button onClick={() => handleClick('reservar')} size="sm" className="min-w-[7.5rem]">
                Reservar
              </Button>
            </div>

            {/* Móvil: CTA compacto + menú */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <Button onClick={() => handleClick('reservar')} size="sm" className="!px-4 !py-2 text-sm">
                Reservar
              </Button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/25 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/40 transition-[background-color,border-color,color] duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Panel móvil */}
        <div
          id="mobile-nav"
          className={`lg:hidden overflow-hidden border-t border-purple-500/15 bg-eroscape-deep/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
            isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 border-t-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.section}
                type="button"
                onClick={() => handleClick(item.section)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors duration-200 hover:bg-purple-500/[0.08] ${linkClass(item)}`}
              >
                <span className="text-base">{item.label}</span>
                {item.new && <Badge variant="accent">NUEVO</Badge>}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
