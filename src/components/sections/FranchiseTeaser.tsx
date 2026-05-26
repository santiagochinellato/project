import { Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ROUTES } from '../../lib/paths';

export default function FranchiseTeaser() {
  return (
    <Section id="franquicia-preview" dark className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Globe className="text-eroscape-gold" size={28} strokeWidth={1.5} />
          <p className="font-body text-xs uppercase tracking-widest2 text-eroscape-gold">
            Franquicia mundial
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mb-4">
          Lleva EROSCAPE a tu ciudad
        </h2>
        <p className="font-body text-eroscape-text-secondary mb-8 leading-relaxed">
          Sé el primero en traer el primer escape room erótico del mundo a tu mercado. Modelo probado,
          soporte de marca y formación completa.
        </p>
        <Link to={ROUTES.franquicia}>
          <Button variant="gold" size="lg" className="pointer-events-none">
            Descubre la franquicia
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
