import { Play, Image as ImageIcon } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

export default function MediaGallery() {
  const mediaItems = [
    {
      title: 'Teaser Oficial EROSCAPE',
      description: 'Descubre la primera experiencia erótica con IA del mundo',
      thumbnail: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    },
    {
      title: 'Así Funciona la IA Game Master',
      description: 'Conoce la tecnología revolucionaria detrás de EROSCAPE',
      thumbnail: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
    },
    {
      title: 'Tour Virtual: El Burdel de Venecia',
      description: 'Recorre nuestra sala más icónica en 360°',
      thumbnail: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
    },
    {
      title: 'EROSCAPE ONLINE - Demo App',
      description: 'Primera demostración de la aplicación móvil',
      thumbnail: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg',
    },
  ];

  return (
    <Section id="media" dark>
      <SectionHeader
        eyebrow="GALERÍA · MULTIMEDIA"
        title="Videos & Contenido"
        intro="Explora nuestro contenido exclusivo: teasers, tours virtuales, explicaciones de la tecnología IA y mucho más"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
        {mediaItems.map((item, index) => (
          <Card key={index} className="group cursor-pointer overflow-hidden p-0">
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600/90 group-hover:bg-purple-600 rounded-full p-6 transition-[transform,background-color] duration-300 group-hover:scale-105">
                  <Play size={32} className="text-eroscape-text-primary ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <Badge variant="adult">+18</Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-1 text-left">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="font-body text-eroscape-text-muted text-sm p-6 pt-4 text-left">
              {item.description}
            </p>
          </Card>
        ))}
      </div>

      <Card variant="featured" className="text-center" hover={false}>
        <div className="inline-flex items-center gap-2 mb-4">
          <ImageIcon className="text-purple-400" size={24} strokeWidth={1.5} />
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-eroscape-text-primary">
            Añade Tus Propios Videos
          </h3>
        </div>
        <p className="font-body text-eroscape-text-secondary mb-6 max-w-2xl mx-auto">
          Esta sección está preparada para que puedas añadir fácilmente tus videos promocionales,
          teasers, tutoriales y contenido multimedia. Solo coloca tus archivos en la carpeta
          <code className="bg-eroscape-void px-2 py-1 rounded text-purple-300 mx-1">/public/videos/</code>
          y estarán listos para mostrar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-sm text-eroscape-text-muted max-w-3xl mx-auto">
          {[
            { title: 'Formatos Soportados:', value: 'MP4, WebM, MOV' },
            { title: 'Tamaño Recomendado:', value: '1920x1080 (Full HD)' },
            { title: 'Duración Ideal:', value: '30 segundos - 3 minutos' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-eroscape-void/50 rounded-xl p-4 border border-purple-500/20"
            >
              <p className="font-body text-purple-300 font-medium mb-2">{item.title}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-12 text-center">
        <p className="font-body text-eroscape-text-muted text-sm">
          Todos los videos incluyen marcador +18 y están optimizados para carga rápida en todos los
          dispositivos
        </p>
      </div>
    </Section>
  );
}
