import { Gift, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { products } from '../../data/products';
import { ROUTES } from '../../lib/paths';

const previewProducts = products.slice(0, 3);

const perks = [
  { icon: Gift, label: 'Envío gratis en pedidos +75€' },
  { icon: Sparkles, label: '10% en tu primera compra (nuevos usuarios)' },
  { icon: Star, label: '15% permanente con Membresía VIP' },
] as const;

export default function BoutiqueTeaser() {
  return (
    <Section id="boutique-preview" className="relative overflow-hidden">
      <div className="mb-10 relative overflow-hidden rounded-2xl">
        <img
          src="/images/img_7272_2.jpeg"
          alt=""
          className="w-full h-48 md:h-56 object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eroscape-void via-eroscape-void/80 to-transparent" />
      </div>

      <SectionHeader
        eyebrow="BOUTIQUE · SENSUAL"
        title="Amplía tu experiencia"
        intro="Lleva la magia de Eroscape a casa. Kits, juegos y accesorios seleccionados para prolongar la experiencia más allá de nuestras salas."
      />

      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
        {perks.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-2 font-body text-sm text-purple-200"
          >
            <Icon className="shrink-0 text-purple-400" size={18} strokeWidth={1.5} />
            {label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
        {previewProducts.map((product) => (
          <Card key={product.id} hover={false} className="text-center !p-4">
            <p className="font-body text-xs uppercase tracking-wider text-purple-400 mb-1">
              {product.category}
            </p>
            <p className="font-heading text-base font-semibold text-eroscape-text-primary">
              {product.name}
            </p>
            <p className="font-display text-lg text-gradient-brand mt-1">€{product.price}</p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link to={ROUTES.boutique}>
          <Button size="lg" className="min-w-[14rem] pointer-events-none">
            Explorar la Boutique
          </Button>
        </Link>
        <p className="mt-4 font-body text-sm text-eroscape-text-muted max-w-md mx-auto">
          Reserva kits, activa promos para nuevos usuarios y gestiona tu membresía VIP desde la
          boutique.
        </p>
      </div>
    </Section>
  );
}
