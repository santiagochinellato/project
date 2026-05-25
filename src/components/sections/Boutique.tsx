import { useState } from 'react';
import { ShoppingBag, Gift, Star } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { products } from '../../data/products';

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Kits', 'Juegos', 'Lencería', 'Accesorios', 'Masajes'];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Section id="boutique">
      <div className="mb-12 relative overflow-hidden rounded-xl">
        <img
          src="/images/img_7272_2.jpeg"
          alt="Luxury Boutique"
          className="w-full h-72 object-cover opacity-20 hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Boutique Sensual
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
          Lleva la magia de Eroscape a casa. Productos cuidadosamente seleccionados para extender tu experiencia más allá de nuestras salas.
        </p>
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 py-2">
          <Gift className="text-purple-400" size={20} />
          <span className="text-purple-300 font-semibold">Envío gratuito en pedidos +75€</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-900 text-gray-400 hover:text-purple-400 border border-purple-500/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProducts.map((product) => {
          const productImages: Record<string, string> = {
            'kit-sensorial': 'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg',
            'cartas-deseo': 'https://images.pexels.com/photos/6069733/pexels-photo-6069733.jpeg',
            'lenceria-veneciana': 'https://images.pexels.com/photos/5240833/pexels-photo-5240833.jpeg',
            'mascaras': 'https://images.pexels.com/photos/8069107/pexels-photo-8069107.jpeg',
            'velas-masaje': 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg',
            'box-privada': 'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg',
          };

          return (
          <Card key={product.id}>
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg h-48 mb-4 overflow-hidden">
              <img
                src={productImages[product.id] || 'https://images.pexels.com/photos/4046721/pexels-photo-4046721.jpeg'}
                alt={product.name}
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            <div className="inline-block bg-purple-600/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
              {product.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-300">€{product.price}</span>
              <Button size="sm">Añadir</Button>
            </div>
          </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gradient-to-br from-pink-900/30 to-purple-900/30">
          <h3 className="text-2xl font-bold text-white mb-3">Para Parejas Nuevas</h3>
          <p className="text-gray-300 mb-6">
            Kit de iniciación con 20% descuento para quienes reserven su primera experiencia.
          </p>
          <Button variant="secondary">Ver Kit de Bienvenida</Button>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30">
          <div className="flex items-center gap-2 mb-3">
            <Star className="text-yellow-400" fill="currentColor" size={24} />
            <h3 className="text-2xl font-bold text-white">Membresía VIP</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Acceso exclusivo a productos limitados y descuentos permanentes del 15%.
          </p>
          <Button variant="secondary">Explorar Beneficios</Button>
        </Card>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center text-white mb-8">Lo que dicen nuestros clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'El Kit Sensorial de Lujo superó nuestras expectativas. Calidad premium y muy discreto.',
            'Las Cartas del Deseo nos han dado horas de diversión. Preguntas muy creativas.',
            'Envío rápido y packaging increíblemente elegante. Se nota el cuidado en cada detalle.',
          ].map((testimonial, index) => (
            <Card key={index}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-300 mb-3 italic">"{testimonial}"</p>
              <p className="text-purple-400 text-sm font-semibold">Cliente verificado</p>
            </Card>
          ))}
        </div>
      </div>

      <Card className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <h3 className="text-2xl font-bold text-white mb-3">¿Primera vez en nuestra boutique?</h3>
        <p className="text-gray-300 mb-6">
          Suscribite y recibe un 10% de descuento en tu primera compra, además de acceso a productos exclusivos para suscriptores.
        </p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <Button>Suscribirse</Button>
        </div>
      </Card>
    </Section>
  );
}
