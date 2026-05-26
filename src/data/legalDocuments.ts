import {
  AlertCircle,
  Building2,
  FileText,
  Lock,
  Scale,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export interface LegalParagraph {
  label?: string;
  text: string;
}

export interface LegalDocument {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  paragraphs: LegalParagraph[];
}

export const legalDocuments: LegalDocument[] = [
  {
    id: 'terminos',
    title: 'Términos y Condiciones',
    summary:
      'Al utilizar nuestros servicios, aceptas cumplir con nuestros términos de uso, políticas de comportamiento y normas de convivencia.',
    icon: Scale,
    paragraphs: [
      {
        text: 'El acceso y uso de EROSCAPE ROOM® implica la aceptación de estas condiciones. La experiencia está dirigida exclusivamente a mayores de 18 años.',
      },
      {
        label: 'Uso del servicio',
        text: 'Queda prohibido el uso de las instalaciones bajo efectos de sustancias que impidan el consentimiento informado o la comunicación clara de límites.',
      },
      {
        label: 'Reservas',
        text: 'La confirmación de la reserva supone compromiso de asistencia en la fecha acordada. Los cambios de fecha se gestionan según nuestra política de cancelación.',
      },
    ],
  },
  {
    id: 'privacidad',
    title: 'Política de Privacidad',
    summary:
      'Cumplimiento estricto del GDPR. Tus datos personales están protegidos con encriptación de nivel bancario y nunca se comparten con terceros.',
    icon: Lock,
    paragraphs: [
      {
        label: 'Responsable del tratamiento',
        text: 'EROSCAPE ROOM S.L., con domicilio en Granada, España.',
      },
      {
        label: 'Finalidad',
        text: 'Gestión de reservas, prestación de servicios, comunicaciones comerciales (solo con consentimiento previo) y mejora de la experiencia mediante análisis anónimos.',
      },
      {
        label: 'Legitimación',
        text: 'Consentimiento del interesado y ejecución de contrato.',
      },
      {
        label: 'Conservación',
        text: 'Durante la relación comercial y 5 años adicionales para obligaciones legales y fiscales.',
      },
      {
        label: 'Derechos',
        text: 'Acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad. Contacto: privacidad@eroscape.com',
      },
      {
        label: 'Delegado de Protección de Datos',
        text: 'dpo@eroscape.com',
      },
    ],
  },
  {
    id: 'consentimiento',
    title: 'Política de Consentimiento',
    summary:
      'Consentimiento informado y revocable en todo momento. Tu palabra segura es sagrada y respetada inmediatamente sin excepción.',
    icon: Shield,
    paragraphs: [
      {
        text: 'Antes de cada experiencia completarás un formulario de límites, preferencias y palabra segura. Puedes modificar o retirar tu consentimiento en cualquier momento.',
      },
      {
        label: 'Palabra segura',
        text: 'Al pronunciarla, la experiencia se detiene de forma inmediata sin necesidad de justificación.',
      },
      {
        label: 'Personal',
        text: 'Todo el equipo está formado en protocolos de consentimiento, diversidad sexual y comunicación asertiva.',
      },
    ],
  },
  {
    id: 'cancelacion',
    title: 'Política de Cancelación',
    summary:
      'Cambio de fecha sin coste con 72–48 h de antelación. Sin cancelaciones con reembolso; solo reagendado según disponibilidad.',
    icon: FileText,
    paragraphs: [
      {
        text: 'No ofrecemos cancelaciones con devolución del importe. Puedes solicitar cambio de fecha comunicándolo con la antelación indicada.',
      },
      {
        label: 'Cambio de fecha',
        text: 'Gratuito si se solicita entre 72 y 48 horas antes de la reserva. Fuera de ese plazo puede aplicarse coste o no ser posible el cambio.',
      },
      {
        label: 'No presentación',
        text: 'La no asistencia sin aviso puede suponer el cargo íntegro de la reserva según las condiciones de garantía con tarjeta.',
      },
    ],
  },
  {
    id: 'conducta',
    title: 'Código de Conducta',
    summary:
      'Tolerancia cero con comportamientos no consensuados, acoso o irrespeto. Expulsión inmediata sin reembolso por incumplimiento.',
    icon: AlertCircle,
    paragraphs: [
      {
        text: 'EROSCAPE promueve un entorno de respeto, consentimiento y dignidad. Cualquier conducta que vulnere estos principios conlleva la finalización inmediata de la experiencia.',
      },
      {
        label: 'Prohibido',
        text: 'Acoso, grabaciones no autorizadas, consumo de sustancias ilegales en instalaciones, daños intencionados o incumplimiento de las normas de higiene y seguridad.',
      },
      {
        label: 'Consecuencias',
        text: 'Expulsión inmediata, posible prohibición de futuras reservas y cargos por daños o limpieza extraordinaria.',
      },
    ],
  },
  {
    id: 'seguridad',
    title: 'Seguridad y Protocolos',
    summary:
      'Protocolos físicos, higiene certificada, confidencialidad absoluta y cobertura de seguros para tu tranquilidad.',
    icon: Shield,
    paragraphs: [
      {
        label: 'Seguridad física',
        text: 'Salas con comunicación directa con personal de seguridad y botones de emergencia accesibles.',
      },
      {
        label: 'Higiene y limpieza',
        text: 'Desinfección profunda entre sesiones. Elementos de un solo uso o esterilizados según normativa.',
      },
      {
        label: 'Confidencialidad',
        text: 'Accesos privados, sin registro público de entrada y personal sujeto a confidencialidad.',
      },
      {
        label: 'Seguros',
        text: 'Cobertura de responsabilidad civil profesional y seguro de accidentes para participantes.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Política de Cookies',
    summary:
      'Cookies técnicas imprescindibles y analíticas opcionales. Puedes gestionar tus preferencias en cualquier momento.',
    icon: FileText,
    paragraphs: [
      {
        text: 'Utilizamos cookies técnicas (necesarias para el funcionamiento), analíticas (Google Analytics con IP anonimizada) y de preferencias.',
      },
      {
        label: 'Cookies técnicas',
        text: 'Imprescindibles para la web y la reserva. No requieren consentimiento.',
      },
      {
        label: 'Cookies analíticas',
        text: 'Requieren consentimiento. Puedes rechazarlas sin afectar la funcionalidad principal.',
      },
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo y Propiedad',
    summary:
      'Información de la empresa, marca registrada EROSCAPE ROOM® y protección de propiedad intelectual.',
    icon: Building2,
    paragraphs: [
      {
        label: 'Información corporativa',
        text: 'EROSCAPE ROOM® — EROSCAPE ROOM S.L. CIF: B-XXXXXXXX. Registro Mercantil de Granada, Tomo XXX, Folio XX, Hoja GR-XXXXX.',
      },
      {
        label: 'Marca',
        text: 'EROSCAPE ROOM® es una marca registrada. Todos los derechos reservados.',
      },
      {
        label: 'Propiedad intelectual',
        text: 'Experiencias, narrativas, diseños, metodologías y tecnologías son propiedad exclusiva de EROSCAPE ROOM S.L.',
      },
      {
        label: 'Jurisdicción',
        text: 'Para controversias, las partes se someten a los juzgados de Granada, España. Mediación previa: legal@eroscape.com',
      },
    ],
  },
];

export const legalLastUpdated =
  'Última actualización: Enero 2026. EROSCAPE ROOM S.L. se reserva el derecho de modificar estos términos. Los cambios se notificarán con al menos 30 días de antelación.';
