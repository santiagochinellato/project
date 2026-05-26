import { Shield, Lock, Heart, Sparkles, UserCheck, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { ROUTES } from '../../lib/paths';

const pillars = [
  { icon: UserCheck, title: 'Consentimiento' },
  { icon: Shield, title: 'Seguridad' },
  { icon: Lock, title: 'Privacidad' },
  { icon: Sparkles, title: 'Higiene' },
  { icon: Heart, title: 'Game Master IA' },
  { icon: FileCheck, title: 'Documentación' },
] as const;

export default function SafetyTeaser() {
  return (
    <Section id="seguridad-preview">
      <SectionHeader
        eyebrow="CONFIANZA"
        title="Tu seguridad es innegociable"
        intro="Protocolos de consentimiento, privacidad GDPR y personal de apoyo 24/7. Sin grabaciones en las salas."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {pillars.map((pillar) => (
          <Card key={pillar.title} hover={false} className="text-center !p-4">
            <pillar.icon className="mx-auto mb-2 text-purple-400" size={28} strokeWidth={1.5} />
            <p className="font-body text-xs text-eroscape-text-secondary">{pillar.title}</p>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link to={ROUTES.seguridad}>
          <Button variant="outline" size="lg" className="pointer-events-none">
            Ver seguridad y legal
            <ArrowRight size={18} strokeWidth={1.5} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
