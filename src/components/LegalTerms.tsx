import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import LegalInformationTabs from './legal/LegalInformationTabs';

interface LegalTermsProps {
  onGoToSafety?: (tabId: string) => void;
}

export default function LegalTerms({ onGoToSafety }: LegalTermsProps) {
  return (
    <Section id="informacion-legal" dark className="scroll-mt-24">
      <SectionHeader
        eyebrow="LEGAL · TRANSPARENCIA"
        title="Información Legal"
        intro="Términos, condiciones y políticas que garantizan tu seguridad y privacidad. Selecciona una pestaña para desplegar el texto completo."
      />

      <LegalInformationTabs onGoToSafety={onGoToSafety} showSafetyLink={Boolean(onGoToSafety)} />
    </Section>
  );
}
