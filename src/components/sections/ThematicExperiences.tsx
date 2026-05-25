import { Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import OptimizedImage from '../ui/OptimizedImage';

export default function ThematicExperiences() {
  const experiences = [
    {
      id: '65b4727d-ad81-473f-b1a9-012ea5d45494',
      title: 'Fantasía Glamurosa',
      description: 'Un mundo de lujo y sofisticación donde tus fantasías más glamurosas cobran vida',
      image: '/images/experiencias-tematicas/65b4727d-ad81-473f-b1a9-012ea5d45494.png',
    },
    {
      id: '0c22ccbf-abb1-42ef-9ce2-96d0967f10ad',
      title: 'Misterio Místico',
      description: 'Sumérgete en un ambiente mágico lleno de secretos ancestrales y conocimiento oculto',
      image: '/images/experiencias-tematicas/0c22ccbf-abb1-42ef-9ce2-96d0967f10ad.png',
    },
    {
      id: '46477e27-9f01-4026-b8f8-bdebabd4d869',
      title: 'Ritual Prohibido',
      description: 'Explora el lado oscuro del deseo en una ceremonia íntima y envolvente',
      image: '/images/experiencias-tematicas/46477e27-9f01-4026-b8f8-bdebabd4d869.png',
    },
    {
      id: '0ffac5aa-e714-46bc-a35e-cd648058b892',
      title: 'Futuro Neón',
      description: 'Una experiencia futurista donde la tecnología y el deseo se fusionan',
      image: '/images/experiencias-tematicas/0ffac5aa-e714-46bc-a35e-cd648058b892.png',
    },
    {
      id: '31906f6f-ec1f-4f7d-8bfd-90c3e7bbd87d',
      title: 'Elegancia Infinita',
      description: 'Reflejos, velas y una atmósfera de elegancia gótica para los sentidos',
      image: '/images/experiencias-tematicas/31906f6f-ec1f-4f7d-8bfd-90c3e7bbd87d.png',
    },
  ];

  return (
    <Section id="experiencias-tematicas" className="bg-gradient-to-b from-black via-rose-950/10 to-black">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-rose-900/30 border border-rose-500/30 rounded-full px-6 py-2 mb-6">
          <Sparkles className="text-rose-400" size={20} />
          <span className="text-rose-300 font-bold text-sm">AMBIENTES ÚNICOS</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Experiencias Temáticas
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Cada sala es un universo diferente. Descubre nuestros ambientes temáticos cuidadosamente diseñados
          para despertar tus sentidos y crear momentos inolvidables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {experiences.slice(0, 3).map((experience) => (
          <div
            key={experience.id}
            className="group relative overflow-hidden rounded-2xl border border-rose-500/20 bg-black/40 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <OptimizedImage
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">+18</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">{experience.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {experiences.slice(3).map((experience) => (
          <div
            key={experience.id}
            className="group relative overflow-hidden rounded-2xl border border-rose-500/20 bg-black/40 backdrop-blur-sm hover:border-rose-500/40 transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <OptimizedImage
                src={experience.image}
                alt={experience.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">+18</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">{experience.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 border border-rose-500/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <Sparkles className="mx-auto mb-4 text-rose-400" size={32} />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Cada Experiencia es Única
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nuestros ambientes temáticos se adaptan a tus preferencias y deseos. La IA Game Master
            personaliza cada detalle para crear una experiencia inolvidable diseñada exclusivamente para ti.
          </p>
        </div>
      </div>
    </Section>
  );
}
