import { Shield, Lock, Heart, Sparkles, UserCheck, FileCheck } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import LegalInformationTabs from '../legal/LegalInformationTabs';

interface SafetyProps {
  initialLegalTab?: string;
}

export default function Safety({ initialLegalTab = 'terminos' }: SafetyProps) {
  const guarantees = [
    {
      icon: UserCheck,
      title: 'Consentimiento Guiado',
      description:
        'Formulario previo de límites y preferencias. Tu palabra segura siempre será respetada.',
      details: ['Entrevista previa personalizada', 'Códigos de colores claros', 'Staff entrenado en consentimiento'],
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description:
        'Protocolo de seguridad con personal presente en todo momento, sin intrusión en tu experiencia.',
      details: ['Personal de seguridad discreto', 'Protocolo médico de emergencia', 'Salidas de seguridad señalizadas'],
    },
    {
      icon: Lock,
      title: 'Privacidad Garantizada',
      description: 'Cámaras solo para seguridad, nunca para grabación. Tu intimidad está protegida.',
      details: ['Sin grabación de video ni audio', 'Protección de datos GDPR', 'Confidencialidad absoluta'],
    },
    {
      icon: Sparkles,
      title: 'Higiene Premium',
      description: 'Protocolos de limpieza hospitalaria entre sesiones. Todo esterilizado y renovado.',
      details: ['Limpieza con ozono entre sesiones', 'Productos desechables cuando procede', 'Certificación sanitaria'],
    },
    {
      icon: Heart,
      title: 'Game Master IA Automatizada',
      description:
        'Experiencia guiada 100% por Inteligencia Artificial. Sin presencia física humana durante la experiencia.',
      details: [
        'IA especializada en consentimiento',
        'Adaptación en tiempo real',
        'Soporte humano disponible 24/7 desde la app',
      ],
    },
    {
      icon: FileCheck,
      title: 'Documentación Clara',
      description: 'Contratos transparentes, políticas claras y derecho de veto en cualquier momento.',
      details: ['Términos en español simple', 'Cambio de fecha (72-48h antes)', 'Sin cancelaciones - solo reagendado'],
    },
  ];

  const process = [
    { step: 1, title: 'Consulta Previa', description: 'Completás el formulario de límites y preferencias' },
    { step: 2, title: 'Briefing Personal', description: 'Conversación privada sobre códigos y palabras seguras' },
    {
      step: 3,
      title: 'Durante la Experiencia',
      description:
        'Guiada completamente por Game Master IA automatizada. Personal humano disponible vía app ante cualquier emergencia',
    },
    { step: 4, title: 'Aftercare', description: 'Debriefing opcional y espacio para procesar la experiencia' },
  ];

  const finalGuarantees = [
    { icon: Lock, text: 'Sin Grabaciones', detail: 'Cero grabación de video, audio o fotos durante tu experiencia' },
    { icon: Heart, text: 'Sin juicios', detail: 'Personal formado en diversidad sexual y no discriminación' },
    { icon: UserCheck, text: 'Todo Opcional', detail: 'Podés parar, cambiar o modificar cualquier aspecto en cualquier momento' },
    { icon: Shield, text: 'Tú Mandas', detail: 'La experiencia se adapta a vos, no al revés' },
  ];

  return (
    <Section id="seguridad" dark>
      <SectionHeader
        eyebrow="CONSENTIMIENTO · PRIVACIDAD"
        title="Seguridad, Consentimiento & Privacidad"
        intro="En Eroscape, el placer solo existe con cuidado. Antes de empezar, defines tus límites, eliges tu palabra segura y decides tu nivel de intensidad. Nosotros cuidamos la ambientación, la higiene y tu privacidad."
      />

      <div className="text-center mb-16 -mt-8">
        <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
          <p className="font-body text-purple-300 font-medium text-lg italic">
            &quot;El consentimiento manda: sin él, no hay juego.&quot;
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {guarantees.map((guarantee, index) => {
          const Icon = guarantee.icon;
          return (
            <Card key={index}>
              <Icon className="text-purple-400 mb-4" size={40} strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-eroscape-text-primary mb-3 text-left">
                {guarantee.title}
              </h3>
              <p className="font-body text-eroscape-text-muted mb-4 text-left">{guarantee.description}</p>
              <ul className="space-y-2">
                {guarantee.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="font-body text-eroscape-text-muted text-sm flex items-start gap-2 text-left"
                  >
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      <div className="mb-16">
        <h3 className="font-display text-3xl font-light italic text-center text-gradient-brand mb-12">
          Proceso de Seguridad Paso a Paso
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item) => (
            <div key={item.step} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-4 text-eroscape-text-primary font-body font-bold text-2xl">
                {item.step}
              </div>
              <h4 className="font-heading text-lg font-semibold text-purple-300 mb-2">{item.title}</h4>
              <p className="font-body text-eroscape-text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-3xl font-light italic text-center text-gradient-brand mb-12">
          Nuestras Garantías
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalGuarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center">
                <Icon className="mx-auto text-purple-400 mb-3" size={32} strokeWidth={1.5} />
                <h4 className="font-heading text-lg font-semibold text-eroscape-text-primary mb-2">
                  {item.text}
                </h4>
                <p className="font-body text-eroscape-text-muted text-sm">{item.detail}</p>
              </Card>
            );
          })}
        </div>
      </div>

      <div
        id="seguridad-informacion-legal"
        className="mt-16 md:mt-20 pt-16 border-t border-purple-500/15 scroll-mt-24"
      >
        <SectionHeader
          eyebrow="LEGAL · TRANSPARENCIA"
          title="Información Legal"
          intro="Consulta aquí los términos, políticas de privacidad, consentimiento y protocolos. Usa las pestañas para leer cada documento."
          className="mb-10"
        />
        <LegalInformationTabs initialTab={initialLegalTab} showSafetyLink={false} />
      </div>
    </Section>
  );
}
