import { Clock, Users, Flame } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { rooms } from '../../data/rooms';
import { Room } from '../../types';

interface RoomsProps {
  onNavigate: (section: string) => void;
}

export default function Rooms({ onNavigate }: RoomsProps) {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Bajo':
        return 'text-eroscape-accent-gold/60';
      case 'Medio':
        return 'text-eroscape-accent-gold';
      case 'Alto':
        return 'text-eroscape-accent-gold';
      default:
        return 'text-eroscape-text-muted';
    }
  };

  const renderIntensity = (intensity: Room['intensity']) => {
    if (Array.isArray(intensity)) {
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <Flame className="text-eroscape-accent-gold" size={18} strokeWidth={1.5} />
          <span className="text-eroscape-text-muted text-sm">Intensidad:</span>
          {intensity.map((level, idx) => (
            <span key={idx} className={`${getIntensityColor(level)} text-sm font-semibold`}>
              {level}{idx < intensity.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <Flame className={getIntensityColor(intensity)} size={18} strokeWidth={1.5} />
        <span className="text-eroscape-text-muted text-sm">Intensidad: {intensity}</span>
      </div>
    );
  };

  return (
    <Section id="salas" className="bg-eroscape-bg">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-eroscape-accent-gold font-semibold mb-4 block">
          Las Experiencias
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-eroscape-text mb-6">
          EROSCAPE ROOM
        </h2>
        <p className="text-lg text-eroscape-text-muted max-w-3xl mx-auto leading-relaxed mb-8">
          No es un único juego. Es una experiencia que se adapta a ti, a tu vínculo y a tu forma de sentir.
        </p>
        <div className="max-w-2xl mx-auto bg-eroscape-surface border border-eroscape-border rounded-xl p-6">
          <h3 className="text-eroscape-accent-gold font-semibold mb-3">Todas nuestras experiencias</h3>
          <ul className="space-y-2 text-sm text-eroscape-text-muted">
            <li>• Duración base de 2 horas</li>
            <li>• Ampliaciones disponibles: +30 min, +1 h, +1.5 h</li>
            <li>• Personalización desde nuestra boutique</li>
            <li>• Nivel de intensidad: Bajo · Medio · Alto</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-eroscape-surface border border-eroscape-border rounded-2xl p-8 hover:border-eroscape-accent-gold/50 transition-all duration-300"
          >
            {room.badge && (
              <div className="inline-block bg-eroscape-accent-gold/10 text-eroscape-accent-gold text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                {room.badge}
              </div>
            )}

            <h3 className="text-3xl font-display font-bold text-eroscape-text mb-3">{room.name}</h3>
            <p className="text-eroscape-accent-gold text-sm font-semibold mb-6 tracking-wide">{room.tagline}</p>

            <p className="text-eroscape-text-muted mb-4 leading-relaxed">{room.description}</p>

            {room.fullDescription && (
              <p className="text-eroscape-text-muted/80 text-sm italic mb-6 leading-relaxed border-l-2 border-eroscape-accent-gold/30 pl-4">
                {room.fullDescription}
              </p>
            )}

            <div className="space-y-3 mb-6 pb-6 border-b border-eroscape-border">
              <div className="flex items-center gap-2">
                <Clock className="text-eroscape-accent-gold" size={18} strokeWidth={1.5} />
                <span className="text-eroscape-text-muted text-sm">{room.duration}</span>
              </div>
              <div className="text-sm">
                {renderIntensity(room.intensity)}
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-eroscape-accent-gold" size={18} strokeWidth={1.5} />
                <span className="text-eroscape-text-muted text-sm">{room.persons} personas</span>
              </div>
            </div>

            {room.idealFor && room.idealFor.length > 0 && (
              <div className="mb-6">
                <h4 className="text-eroscape-accent-gold text-sm font-semibold mb-3">Ideal para:</h4>
                <ul className="space-y-2">
                  {room.idealFor.map((item, index) => (
                    <li key={index} className="text-eroscape-text-muted text-sm flex items-start gap-2">
                      <span className="text-eroscape-accent-gold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-eroscape-bg/50 border border-eroscape-border rounded-xl p-4 mb-6">
              <h4 className="text-eroscape-text text-sm font-semibold mb-2">Personalización:</h4>
              <ul className="space-y-1.5">
                {room.includes.map((item, index) => (
                  <li key={index} className="text-eroscape-text-muted text-xs flex items-start gap-2">
                    <span className="text-eroscape-accent-gold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="text-xs text-eroscape-text-muted mb-1">Desde</div>
                <span className="text-3xl font-display font-bold text-eroscape-accent-gold">€{room.price}</span>
              </div>
              <button
                onClick={() => onNavigate('reservar')}
                className="px-6 py-3 bg-transparent border border-eroscape-accent-gold text-eroscape-accent-gold font-semibold rounded-lg hover:bg-eroscape-accent-gold hover:text-eroscape-bg transition-all duration-300"
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-eroscape-surface border border-eroscape-border rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-display font-bold text-eroscape-text mb-4">
          No eliges solo una experiencia. Eliges cómo vivirla.
        </h3>
        <p className="text-eroscape-text-muted mb-8 max-w-2xl mx-auto">
          ¿No estás seguro de qué experiencia se adapta mejor a ti? Nuestro equipo puede ayudarte a encontrar la perfecta según tus preferencias y límites.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => onNavigate('reservar')}
            className="px-8 py-4 bg-eroscape-accent-gold text-eroscape-bg font-semibold rounded-lg hover:bg-eroscape-accent-gold/90 transition-all duration-300 shadow-lg shadow-eroscape-accent-gold/20"
          >
            Descubre tu experiencia
          </button>
          <button className="px-8 py-4 bg-transparent border border-eroscape-accent-gold text-eroscape-accent-gold font-semibold rounded-lg hover:bg-eroscape-accent-gold hover:text-eroscape-bg transition-all duration-300">
            Hablar con un asesor
          </button>
        </div>
      </div>
    </Section>
  );
}
