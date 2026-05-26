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
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="w-2 h-2 bg-eroscape-deep hover:bg-purple-900/50 transition-colors duration-300 rounded-full opacity-10 hover:opacity-30"
        aria-label="Innovation"
      >
        <span className="sr-only">Innovation Details</span>
      </button>

      {isVisible && (
        <div className="absolute bottom-6 left-0 bg-eroscape-void/95 border border-purple-500/20 rounded-2xl p-3 w-48 text-xs">
          <div className="flex items-center gap-2 mb-2 text-purple-400">
            <Lightbulb size={12} strokeWidth={1.5} />
            <span className="font-body font-semibold text-[10px]">Innovation</span>
          </div>
          <div className="font-body text-eroscape-text-muted text-[9px] leading-tight opacity-60">
            {innovationKeywords.join(' • ')}
          </div>
        </div>
      )}
    </div>
  );
}
