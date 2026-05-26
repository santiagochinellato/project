import { useRef, useState } from 'react';
import { ArrowLeft, Gift, Star } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { products } from '../../data/products';

const inputClass =
  'w-full px-5 py-4 bg-eroscape-surface border border-purple-500/20 focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body text-base outline-none transition-[border-color,box-shadow] duration-300';

interface BoutiqueShopProps {
  onBack: () => void;
}

export default function BoutiqueShop({ onBack }: BoutiqueShopProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const promosRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);

  const categories = ['Todos', 'Kits', 'Juegos', 'Lencería', 'Accesorios', 'Masajes'];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const applyNewUserPromo = () => {
    setSelectedCategory('Kits');
    scrollToRef(promosRef);
  };

  const exploreMembership = () => {
    scrollToRef(newsletterRef);
  };

  return (
    <div id="boutique" className="min-h-screen bg-eroscape-void pt-6 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-body text-sm text-purple-300 hover:text-purple-200 transition-colors duration-200"
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          Volver a la experiencia
        </button>
      </div>

      <Section className="!py-0">
        <div className="mb-12 relative overflow-hidden rounded-2xl">
          <img
            src="/images/img_7272_2.jpeg"
            alt="Luxury Boutique"
            className="w-full h-72 object-cover opacity-20 hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <SectionHeader
          eyebrow="BOUTIQUE · SENSUAL"
          title="Boutique Sensual"
          intro="Lleva la magia de Eroscape a casa. Productos cuidadosamente seleccionados para extender tu experiencia más allá de nuestras salas."
        />

        <div className="flex justify-center -mt-8 mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/25 rounded-full px-4 py-2">
            <Gift className="text-purple-400" size={20} strokeWidth={1.5} />
            <span className="font-body text-purple-300 font-medium text-sm">
              Envío gratuito en pedidos +75€
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`font-body px-6 py-2 rounded-full font-medium transition-[background-color,color,border-color] duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-eroscape-text-primary'
                  : 'bg-eroscape-surface text-eroscape-text-muted hover:text-purple-400 border border-purple-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {filteredProducts.map((product) => {
            const productImages: Record<string, string> = {
              'kit-sensorial': 'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg',
              'cartas-deseo': 'https://images.pexels.com/photos/6069733/pexels-photo-6069733.jpeg',
              'lenceria-veneciana': 'https://images.pexels.com/photos/5240833/pexels-photo-5240833.jpeg',
              mascaras: 'https://images.pexels.com/photos/8069107/pexels-photo-8069107.jpeg',
              'velas-masaje': 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
              'box-privada': 'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg',
            };

            return (
              <Card key={product.id}>
                <div className="relative bg-gradient-to-br from-purple-950/40 to-pink-950/20 rounded-xl h-48 mb-4 overflow-hidden">
                  <img
                    src={
                      productImages[product.id] ||
                      'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg'
                    }
                    alt={product.name}
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <Badge variant="accent" className="mb-3">
                  {product.category}
                </Badge>
                <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-2 text-left">
                  {product.name}
                </h3>
                <p className="font-body text-eroscape-text-muted mb-4 text-sm text-left">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-gradient-brand">
                    €{product.price}
                  </span>
                  <Button size="sm">Añadir</Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div ref={promosRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 scroll-mt-24">
          <Card variant="featured">
            <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3 text-left">
              Para Parejas Nuevas
            </h3>
            <p className="font-body text-eroscape-text-secondary mb-6 text-left">
              Kit de iniciación con 20% descuento para quienes reserven su primera experiencia.
            </p>
            <Button variant="outline" onClick={applyNewUserPromo}>
              Ver Kit de Bienvenida
            </Button>
          </Card>

          <Card variant="featured">
            <div className="flex items-center gap-2 mb-3">
              <Star className="text-eroscape-gold" fill="currentColor" size={24} strokeWidth={1.5} />
              <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary">
                Membresía VIP
              </h3>
            </div>
            <p className="font-body text-eroscape-text-secondary mb-6 text-left">
              Acceso exclusivo a productos limitados y descuentos permanentes del 15%.
            </p>
            <Button variant="outline" onClick={exploreMembership}>
              Activar Membresía
            </Button>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="font-display text-2xl font-light italic text-center text-gradient-brand mb-8">
            Lo que dicen nuestros clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'El Kit Sensorial de Lujo superó nuestras expectativas. Calidad premium y muy discreto.',
              'Las Cartas del Deseo nos han dado horas de diversión. Preguntas muy creativas.',
              'Envío rápido y packaging increíblemente elegante. Se nota el cuidado en cada detalle.',
            ].map((testimonial, index) => (
              <Card key={index}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-eroscape-gold" fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="font-body text-eroscape-text-secondary mb-3 italic text-left">
                  &quot;{testimonial}&quot;
                </p>
                <p className="font-body text-purple-400 text-sm font-medium">Cliente verificado</p>
              </Card>
            ))}
          </div>
        </div>

        <div ref={newsletterRef} className="scroll-mt-24">
        <Card variant="featured" className="text-center" hover={false}>
          <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
            ¿Primera vez en nuestra boutique?
          </h3>
          <p className="font-body text-eroscape-text-secondary mb-6">
            Suscríbete y recibe un 10% de descuento en tu primera compra, además de acceso a productos
            exclusivos para suscriptores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Tu email" className={inputClass} />
            <Button className="shrink-0">Suscribirse</Button>
          </div>
        </Card>
        </div>
      </Section>
    </div>
  );
}
