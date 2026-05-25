import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Experiencia', section: 'experiencia' },
    { label: 'Digital', section: 'digital', new: true },
    { label: 'Videos', section: 'media' },
    { label: 'Salas', section: 'salas' },
    { label: 'Seguridad', section: 'seguridad' },
    { label: 'Precios', section: 'precios' },
    { label: 'Franquicia', section: 'franquicia', highlight: true },
    { label: 'FAQ', section: 'faq' },
  ];

  const handleClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <img
              src="/images/img_7272_2.jpeg"
              alt="EROSCAPE"
              className="h-14 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleClick(item.section)}
                className={`transition-colors font-medium relative ${
                  item.highlight
                    ? 'text-yellow-400 hover:text-yellow-300 font-bold'
                    : item.new
                    ? 'text-purple-400 hover:text-purple-300 font-bold'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item.label}
                {item.new && (
                  <span className="absolute -top-2 -right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    NUEVO
                  </span>
                )}
              </button>
            ))}
            <Button onClick={() => handleClick('reservar')} size="sm">
              Reservar
            </Button>
          </div>

          <button
            className="md:hidden text-purple-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleClick(item.section)}
                className={`block w-full text-left transition-colors font-medium py-2 ${
                  item.highlight
                    ? 'text-yellow-400 hover:text-yellow-300 font-bold'
                    : item.new
                    ? 'text-purple-400 hover:text-purple-300 font-bold'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item.label}
                {item.new && (
                  <span className="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    NUEVO
                  </span>
                )}
              </button>
            ))}
            <Button onClick={() => handleClick('reservar')} fullWidth>
              Reservar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
