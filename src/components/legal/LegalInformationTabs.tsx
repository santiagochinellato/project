import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { legalDocuments, legalLastUpdated } from '../../data/legalDocuments';

interface LegalInformationTabsProps {
  initialTab?: string;
  onGoToSafety?: (tabId: string) => void;
  showSafetyLink?: boolean;
}

export default function LegalInformationTabs({
  initialTab = 'terminos',
  onGoToSafety,
  showSafetyLink = true,
}: LegalInformationTabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const activeDoc = legalDocuments.find((doc) => doc.id === activeTab) ?? legalDocuments[0];
  const ActiveIcon = activeDoc.icon;

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 md:flex-wrap md:justify-center md:overflow-visible">
        {legalDocuments.map((doc) => (
          <button
            key={doc.id}
            type="button"
            onClick={() => setActiveTab(doc.id)}
            className={`font-body px-4 py-2 rounded-full text-sm font-medium transition-[background-color,color,border-color] duration-300 ${
              activeTab === doc.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-eroscape-text-primary'
                : 'bg-eroscape-surface text-eroscape-text-muted border border-purple-500/20 hover:text-purple-300 hover:border-purple-500/40'
            }`}
          >
            {doc.title}
          </button>
        ))}
      </div>

      <Card variant="featured" className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
          <ActiveIcon className="text-purple-400 shrink-0" size={36} strokeWidth={1.5} />
          <div className="flex-1">
            <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-2">
              {activeDoc.title}
            </h3>
            <p className="font-body text-eroscape-text-secondary text-sm">{activeDoc.summary}</p>
          </div>
        </div>

        <div className="space-y-4 font-body text-eroscape-text-secondary text-sm leading-relaxed">
          {activeDoc.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.label && (
                <strong className="text-purple-300 font-semibold">{paragraph.label}: </strong>
              )}
              {paragraph.text}
            </p>
          ))}
        </div>

        {showSafetyLink && onGoToSafety && (
          <div className="mt-8 pt-6 border-t border-purple-500/20 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" onClick={() => onGoToSafety(activeTab)}>
              Ver en Seguridad
            </Button>
          </div>
        )}
      </Card>

      <div className="bg-eroscape-surface/50 border border-purple-500/20 rounded-xl p-6">
        <p className="font-body text-xs text-eroscape-text-muted leading-relaxed text-center">
          {legalLastUpdated}
        </p>
      </div>
    </div>
  );
}
