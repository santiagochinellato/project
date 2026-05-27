import { Gift, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import OptimizedImage from '../ui/OptimizedImage';
import { products } from '../../data/products';
import { ROUTES } from '../../lib/paths';

const previewProducts = products.slice(0, 3);
const KIT_IMAGES = [
  '/kits/pack-afterdark.PNG',
  '/kits/pack-intimate-experience.PNG',
  '/kits/pack5-escape-desire-box.PNG',
  '/kits/pack00-mini-love-box.PNG',
  '/kits/pack00-sweet-connection.PNG',
] as const;

const productImageById: Partial<Record<(typeof previewProducts)[number]['id'], string>> = {
  'kit-sensorial': '/kits/pack-intimate-experience.PNG',
  'box-privada': '/kits/pack-afterdark.PNG',
  'cartas-deseo': '/kits/pack00-sweet-connection.PNG',
  'lenceria-veneciana': '/kits/pack00-mini-love-box.PNG',
  mascaras: '/kits/pack5-escape-desire-box.PNG',
  'velas-masaje': '/kits/pack-afterdark.PNG',
};

const perks = [
  { icon: Gift, label: 'Envío gratis en pedidos +75€' },
  { icon: Sparkles, label: '10% en tu primera compra (nuevos usuarios)' },
  { icon: Star, label: '15% permanente con Membresía VIP' },
] as const;

export default function BoutiqueTeaser() {
  return (
    <Section id="boutique-preview" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -bottom-48 -right-40 h-[28rem] w-[28rem] rounded-full bg-pink-600/10 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
      </div>

      <SectionHeader
        eyebrow="BOUTIQUE · SENSUAL"
        title="Amplía tu experiencia"
        intro="Lleva la magia de Eroscape a casa. Kits, juegos y accesorios seleccionados para prolongar la experiencia más allá de nuestras salas."
      />

      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3">
        {perks.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-eroscape-surface/70 px-4 py-2 font-body text-xs text-purple-200 sm:text-sm"
          >
            <Icon className="shrink-0 text-purple-400" size={18} strokeWidth={1.5} />
            {label}
          </span>
        ))}
      </div>

      <div className="mx-auto mb-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {previewProducts.map((product, index) => {
          const image = productImageById[product.id] ?? KIT_IMAGES[index % KIT_IMAGES.length];
          return (
          <Card
            key={product.id}
            hover={false}
            className="text-left !p-0 overflow-hidden bg-eroscape-surface/80 border-purple-500/20"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <OptimizedImage
                src={image}
                alt={product.name}
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-body text-xs uppercase tracking-wider text-purple-400 mb-1">
                {product.category}
              </p>
              <p className="font-heading text-base font-semibold text-eroscape-text-primary">
                {product.name}
              </p>
              <p className="font-display text-lg text-gradient-brand mt-1">€{product.price}</p>
            </div>
          </Card>
          );
        })}
      </div>

      <Card
        variant="featured"
        hover={false}
        className="mx-auto max-w-5xl text-center !p-6 sm:!p-8 md:!p-10"
      >
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
          Boutique EROSCAPE
        </h3>
        <p className="font-body text-sm sm:text-base text-eroscape-text-secondary max-w-2xl mx-auto leading-relaxed">
          Añade kits y accesorios a tu reserva, activa promos para nuevos usuarios y gestiona la
          membresía VIP desde un solo lugar.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to={ROUTES.boutique} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:min-w-[14rem]">
              Explorar la Boutique
            </Button>
          </Link>
          <Link to={ROUTES.reservar} className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:min-w-[14rem]">
              Reservar con extras
            </Button>
          </Link>
        </div>
      </Card>
    </Section>
  );
}
