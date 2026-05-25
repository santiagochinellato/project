import { Play, Film, Image as ImageIcon } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

export default function MediaGallery() {
  const mediaItems = [
    {
      type: 'video',
      title: 'Teaser Oficial EROSCAPE',
      description: 'Descubre la primera experiencia erótica con IA del mundo',
      thumbnail: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
      videoSrc: '/videos/teaser-oficial.mp4',
    },
    {
      type: 'video',
      title: 'Así Funciona la IA Game Master',
      description: 'Conoce la tecnología revolucionaria detrás de EROSCAPE',
      thumbnail: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg',
      videoSrc: '/videos/ia-explicacion.mp4',
    },
    {
      type: 'video',
      title: 'Tour Virtual: El Burdel de Venecia',
      description: 'Recorre nuestra sala más icónica en 360°',
      thumbnail: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
      videoSrc: '/videos/tour-venecia.mp4',
    },
    {
      type: 'video',
      title: 'EROSCAPE ONLINE - Demo App',
      description: 'Primera demostración de la aplicación móvil',
      thumbnail: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg',
      videoSrc: '/videos/app-demo.mp4',
    },
  ];

  return (
    <Section id="media" className="bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
          <Film className="text-purple-400" size={20} />
          <span className="text-purple-300 font-bold text-sm">GALERÍA MULTIMEDIA</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Videos & Contenido
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explora nuestro contenido exclusivo: teasers, tours virtuales, explicaciones de la tecnología IA y mucho más
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {mediaItems.map((item, index) => (
          <Card key={index} className="group cursor-pointer overflow-hidden">
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-purple-600/90 group-hover:bg-purple-600 rounded-full p-6 transform group-hover:scale-110 transition-all">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">+18</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <ImageIcon className="text-purple-400" size={24} />
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Añade Tus Propios Videos
          </h3>
        </div>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Esta sección está preparada para que puedas añadir fácilmente tus videos promocionales,
          teasers, tutoriales y contenido multimedia. Solo coloca tus archivos en la carpeta
          <code className="bg-black/40 px-2 py-1 rounded text-purple-300 mx-1">/public/videos/</code>
          y estarán listos para mostrar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-sm text-gray-400 max-w-3xl mx-auto">
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
            <p className="text-purple-300 font-bold mb-2">Formatos Soportados:</p>
            <p>MP4, WebM, MOV</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
            <p className="text-purple-300 font-bold mb-2">Tamaño Recomendado:</p>
            <p>1920x1080 (Full HD)</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
            <p className="text-purple-300 font-bold mb-2">Duración Ideal:</p>
            <p>30 segundos - 3 minutos</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Todos los videos incluyen marcador +18 y están optimizados para carga rápida en todos los dispositivos
        </p>
      </div>
    </Section>
  );
}
