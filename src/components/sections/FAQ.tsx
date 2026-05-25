import { useState } from 'react';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { faqs } from '../../data/faq';
import { openWhatsApp } from '../../lib/whatsapp';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Preguntas Frecuentes
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Resolvemos todas tus dudas sobre la experiencia Eroscape. Si no encuentras tu respuesta, contáctanos directamente.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {faqs.map((category, catIndex) => (
          <div key={catIndex}>
            <h3 className="text-2xl font-bold text-purple-300 mb-4">{category.category}</h3>
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
                      <span className="text-white font-semibold flex-1">{item.question}</span>
                      <ChevronDown
                        className={`text-purple-400 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        size={24}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-purple-500/20">
                        <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Card className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <MessageCircle className="mx-auto text-purple-400 mb-4" size={48} />
        <h3 className="text-2xl font-bold text-white mb-3">¿Tienes más preguntas?</h3>
        <p className="text-gray-300 mb-6">
          Nuestro equipo está disponible para resolver cualquier duda adicional sobre tu experiencia en Eroscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => openWhatsApp('Hola, tengo una pregunta sobre EROSCAPE')}>
            <MessageCircle className="mr-2" size={20} />
            WhatsApp: +34 611257828
          </Button>
          <Button variant="outline" onClick={() => window.location.href = 'mailto:hola@eroscape.com'}>
            <Mail className="mr-2" size={20} />
            hola@eroscape.com
          </Button>
        </div>
      </Card>
    </Section>
  );
}
