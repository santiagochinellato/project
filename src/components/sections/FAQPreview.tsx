import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { faqs } from '../../data/faq';
import { ROUTES } from '../../lib/paths';

const PREVIEW_COUNT = 5;

const previewItems = faqs.flatMap((category, catIndex) =>
  category.questions.map((item, qIndex) => ({
    key: `${catIndex}-${qIndex}`,
    category: category.category,
    ...item,
  })),
).slice(0, PREVIEW_COUNT);

export default function FAQPreview() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Section id="faq-preview">
      <SectionHeader
        eyebrow="FAQ"
        title="Preguntas frecuentes"
        intro="Las dudas más habituales antes de reservar."
      />

      <div className="space-y-3 mb-10 max-w-3xl mx-auto">
        {previewItems.map((item) => {
          const isOpen = openItems[item.key];
          return (
            <Card key={item.key} hover={false} className="cursor-pointer">
              <button
                type="button"
                onClick={() => toggleItem(item.key)}
                className="w-full text-left flex items-start justify-between gap-4"
              >
                <span className="font-body text-eroscape-text-primary font-medium flex-1">
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
                  <p className="font-body text-sm text-eroscape-text-muted leading-relaxed text-left">
                    {item.answer}
                  </p>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Link to={ROUTES.faq}>
          <Button variant="outline" size="lg" className="pointer-events-none">
            Ver todas las preguntas
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
