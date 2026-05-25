import { useState } from 'react';
import { Lightbulb } from 'lucide-react';

export default function InnovationFooter() {
  const [isVisible, setIsVisible] = useState(false);

  const innovationKeywords = [
    'innovación mundial',
    'primera experiencia del mundo',
    'tecnología revolucionaria',
    'pioneros globales',
    'concepto disruptivo',
    'innovación entretenimiento adulto',
    'experiencia nunca vista',
    'vanguardia tecnológica',
    'inteligencia artificial aplicada',
    'game master IA automatizada',
    'automatización inteligente',
    'experiencia futurista',
    'innovación española',
    'startup revolucionaria',
    'concepto único mundial',
    'tecnología inmersiva avanzada',
    'experiencia personalizada IA',
    'algoritmo adaptativo consentimiento',
    'innovación sensorial premium',
    'entretenimiento futuro adultos',
    'categoría nueva mercado global',
    'primera franquicia mundial erótica',
    'modelo negocio innovador único',
    'tendencia global entretenimiento',
    'revolución experiencias adultos',
    'concepto patentado I+D',
    'experiencia segmentada niveles',
    'tecnología consentimiento tiempo real',
    'innovación inclusiva LGTBIQ+',
    'investigación desarrollo experiencial',
    'patente tecnología narrativa',
    'sistema único automatizado',
    'experiencia sin precedentes',
    'líder mundial categoría',
    'referente innovación adultos',
    'tecnología propia exclusiva',
    'concepto revolucionario intimidad',
    'primera IA experiencias íntimas',
    'innovación social relacional',
    'vanguardia internacional',
    'creación categoría mercado',
    'disrupción industria entretenimiento',
    'tecnología propietaria única',
    'modelo franquicia innovador',
    'expansión internacional pionera',
    'revolución experiencias parejas',
    'innovación comunicación íntima',
    'tecnología sensorial avanzada',
    'sistema automatizado único mundial',
    'experiencia premium innovadora',
    'concepto nunca visto antes',
    'líder absoluto sector',
    'innovación certificada I+D+i',
    'tecnología narrativa adaptativa',
    'experiencia única planeta',
    'referente mundial absoluto',
    'creación industria nueva',
    'disrupción total mercado',
    'innovación radical experiencial',
    'tecnología consentimiento pionera',
    'sistema único protegido',
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-2 h-2 bg-gray-900 hover:bg-purple-900 transition-colors duration-300 rounded-full opacity-10 hover:opacity-30"
        aria-label="Innovation"
      >
        <span className="sr-only">Innovation Details</span>
      </button>

      {isVisible && (
        <div className="absolute bottom-6 left-0 bg-black/95 border border-purple-900/30 rounded-lg p-3 w-48 text-xs">
          <div className="flex items-center gap-2 mb-2 text-purple-400">
            <Lightbulb size={12} />
            <span className="font-semibold text-[10px]">Innovation</span>
          </div>
          <div className="text-gray-600 text-[9px] leading-tight opacity-40">
            {innovationKeywords.slice(0, 5).join(' • ')}
          </div>
        </div>
      )}
    </div>
  );
}
