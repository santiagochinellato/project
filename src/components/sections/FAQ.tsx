import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { faqs } from '../../data/faq';
import { openWhatsApp } from '../../lib/whatsapp';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ · AYUDA"
        title="Preguntas Frecuentes"
        intro="Resolvemos todas tus dudas sobre la experiencia Eroscape. Si no encuentras tu respuesta, contáctanos directamente."
      />

      <div className="space-y-8 mb-12">
        {faqs.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="font-heading text-2xl font-semibold text-purple-300 mb-4">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.questions.map((item, qIndex) => {
                const key = `${catIndex}-${qIndex}`;
                const isOpen = openItems[key];

                return (
                  <Card key={key} hover={false} className="cursor-pointer">
                    <button
                      onClick={() => toggleItem(key)}
                      className="w-full text-left flex items-start justify-between gap-4"
                    >
                      <span className="font-body text-eroscape-text-primary font-medium flex-1 text-left">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        size={24}
                        strokeWidth={1.5}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-purple-500/20">
                        <p className="font-body text-eroscape-text-muted leading-relaxed text-left">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Card variant="featured" className="text-center" hover={false}>
        <MessageCircle className="mx-auto text-purple-400 mb-4" size={48} strokeWidth={1.5} />
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-3">
          ¿Tienes más preguntas?
        </h3>
        <p className="font-body text-eroscape-text-secondary mb-6">
          Nuestro equipo está disponible para resolver cualquier duda adicional sobre tu experiencia
          en Eroscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => openWhatsApp('Hola, tengo una pregunta sobre EROSCAPE')}>
            <MessageCircle size={20} strokeWidth={1.5} />
            WhatsApp: +34 611257828
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = 'mailto:hola@eroscape.com')}>
            <Mail size={20} strokeWidth={1.5} />
            hola@eroscape.com
          </Button>
        </div>
      </Card>
    </Section>
  );
}
