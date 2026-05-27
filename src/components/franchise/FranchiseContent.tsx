import { useState, FormEvent } from 'react';
import {
  Globe,
  TrendingUp,
  Award,
  Users,
  Rocket,
  Shield,
  CheckCircle,
  Mail,
  Phone,
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { isSupabaseConfigured, supabase } from '../../lib/supabase';
import { trackEvent } from '../Analytics';

export default function FranchiseContent() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    city_interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured || !supabase) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('franchise_leads').insert([
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          city_interest: formData.city_interest,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      trackEvent('franchise_inquiry_submitted', {
        city_interest: formData.city_interest,
      });

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        city_interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting franchise inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Marca Mundial Pionera',
      description:
        'Primer Escape Room Erótico físico del mundo. Experiencia presencial única sin competencia directa en ninguna ciudad.',
    },
    {
      icon: Award,
      title: 'Tecnología Patentada',
      description: 'Acceso exclusivo a nuestra IA Game Master y metodología certificada de I+D.',
    },
    {
      icon: TrendingUp,
      title: 'Mercado en Crecimiento',
      description: 'Sector de entretenimiento adulto y experiencias inmersivas en expansión global.',
    },
    {
      icon: Shield,
      title: 'Soporte Total',
      description: 'Formación completa, protocolos establecidos, marketing y asesoría continua.',
    },
    {
      icon: Users,
      title: 'Modelo Probado',
      description: 'Sistema de negocio validado con alta rentabilidad y satisfacción de clientes.',
    },
    {
      icon: Rocket,
      title: 'Expansión Estratégica',
      description: 'Plan de crecimiento internacional con territorios exclusivos por ciudad/región.',
    },
  ];

  const included = [
    'Licencia de marca EROSCAPE ROOM® para tu territorio',
    'Acceso completo a tecnología IA Game Master patentada',
    'Diseño completo de salas temáticas y habitaciones de placer',
    'Especificaciones técnicas: iluminación, sonido, decoración',
    'Formación integral para ti y tu equipo',
    'Protocolos de seguridad y consentimiento certificados',
    'Material de marketing y branding completo',
    'Sistema de reservas y gestión online',
    'Soporte continuo y actualizaciones tecnológicas',
    'Manual de operaciones detallado con proveedores',
  ];

  const idealProfile = [
    'Emprendedores con visión innovadora',
    'Experiencia en hostelería, entretenimiento o turismo',
    'Capacidad de inversión inicial',
    'Mentalidad abierta y profesional',
    'Compromiso con la excelencia y seguridad',
    'Red de contactos en tu mercado local',
  ];

  const inputClass =
    'w-full px-5 py-4 bg-eroscape-surface border border-yellow-500/25 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/30 rounded-xl text-eroscape-text-primary placeholder:text-eroscape-text-muted font-body outline-none transition-[border-color,box-shadow] duration-300';

  return (
    <>
      <SectionHeader
        eyebrow="FRANQUICIA · OPORTUNIDAD MUNDIAL"
        title="Franquicia EROSCAPE ROOM®"
        intro="Únete a la revolución del entretenimiento adulto. Sé el primero en traer esta experiencia física presencial a tu ciudad."
        variant="gold"
      />

      {!isSupabaseConfigured && (
        <Card
          variant="gold"
          hover={false}
          className="mb-10 bg-eroscape-surface/80 border-yellow-500/30"
        >
          <p className="font-body text-sm sm:text-base text-eroscape-text-secondary leading-relaxed">
            El formulario está temporalmente desactivado en este despliegue porque faltan variables de
            entorno de Supabase. Configura{' '}
            <span className="text-purple-300 font-semibold">VITE_SUPABASE_URL</span> y{' '}
            <span className="text-purple-300 font-semibold">VITE_SUPABASE_ANON_KEY</span> en Vercel para
            activarlo.
          </p>
        </Card>
      )}

      <Card variant="gold" className="mb-12">
        <div className="text-center mb-8">
          <h3 className="font-heading text-3xl font-bold text-eroscape-text-primary mb-4">
            ¿Por qué una Franquicia EROSCAPE?
          </h3>
          <p className="font-body text-eroscape-text-secondary text-lg">
            No es solo un negocio, es la oportunidad de liderar un mercado completamente nuevo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-black/40 rounded-lg p-6 border border-yellow-500/20"
              >
                <Icon className="text-eroscape-gold mb-4" size={40} strokeWidth={1.5} />
                <h4 className="font-heading text-eroscape-text-primary font-bold text-lg mb-2">
                  {benefit.title}
                </h4>
                <p className="font-body text-eroscape-text-muted">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/20">
            <h4 className="text-yellow-300 font-bold text-xl mb-4 flex items-center gap-2 font-heading">
              <CheckCircle size={24} strokeWidth={1.5} />
              ¿Qué incluye la Franquicia?
            </h4>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-eroscape-text-secondary">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/20">
            <h4 className="text-yellow-300 font-bold text-xl mb-4 flex items-center gap-2 font-heading">
              <Users size={24} strokeWidth={1.5} />
              Perfil Ideal del Franquiciado
            </h4>
            <ul className="space-y-3 mb-6">
              {idealProfile.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-eroscape-text-secondary">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
              <p className="font-body text-yellow-300 font-semibold text-sm">
                No necesitas experiencia previa en escape rooms. Te formamos en todo.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <div className="font-display text-5xl font-bold text-yellow-400 mb-2">1ª</div>
          <p className="font-body text-eroscape-text-primary font-semibold mb-2">Del Mundo</p>
          <p className="font-body text-eroscape-text-muted text-sm">
            Sin competencia directa en ningún mercado
          </p>
        </Card>
        <Card className="text-center">
          <div className="font-display text-5xl font-bold text-yellow-400 mb-2">100%</div>
          <p className="font-body text-eroscape-text-primary font-semibold mb-2">Innovación I+D</p>
          <p className="font-body text-eroscape-text-muted text-sm">
            Tecnología patentada y certificada
          </p>
        </Card>
        <Card className="text-center">
          <div className="font-display text-5xl font-bold text-yellow-400 mb-2">∞</div>
          <p className="font-body text-eroscape-text-primary font-semibold mb-2">Potencial Global</p>
          <p className="font-body text-eroscape-text-muted text-sm">Mercado adulto en expansión mundial</p>
        </Card>
      </div>

      <div id="franquicia-form" className="scroll-mt-24">
      <Card className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-yellow-500/50">
        <div className="text-center mb-8">
          <h3 className="font-heading text-3xl font-bold text-eroscape-text-primary mb-4">
            Da el Primer Paso
          </h3>
          <p className="font-body text-eroscape-text-secondary text-lg mb-2">
            Solicita información sin compromiso y descubre cómo puedes formar parte de esta revolución
          </p>
          <p className="font-body text-yellow-300 font-semibold">
            Plazas limitadas por territorio. Reserva tu ciudad ahora.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/30">
              <Mail className="text-yellow-400 mb-3" size={32} strokeWidth={1.5} />
              <h4 className="font-heading text-eroscape-text-primary font-bold mb-2">Email</h4>
              <a
                href="mailto:franquicia@eroscaperoom.com"
                className="font-body text-yellow-300 hover:text-yellow-400 transition-colors"
              >
                franquicia@eroscaperoom.com
              </a>
            </div>
            <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/30">
              <Phone className="text-yellow-400 mb-3" size={32} strokeWidth={1.5} />
              <h4 className="font-heading text-eroscape-text-primary font-bold mb-2">Teléfono</h4>
              <a
                href="tel:+34611257828"
                className="font-body text-yellow-300 hover:text-yellow-400 transition-colors"
              >
                +34 611257828
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre completo"
              required
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Ciudad/País de interés"
              required
              value={formData.city_interest}
              onChange={(e) => setFormData({ ...formData, city_interest: e.target.value })}
              className={inputClass}
            />
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre ti y por qué te interesa esta oportunidad"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={inputClass}
            />
            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-green-300 text-center font-body">
                ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-300 text-center font-body">
                Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.
              </div>
            )}
            <Button
              variant="gold"
              fullWidth
              size="lg"
              disabled={isSubmitting || !isSupabaseConfigured}
              type="submit"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
            </Button>
            <p className="font-body text-xs text-eroscape-text-muted text-center">
              Al enviar este formulario, aceptas que nos pongamos en contacto contigo para compartir
              información sobre la franquicia.
            </p>
          </form>
        </div>
      </Card>
      </div>

      <div className="mt-12 bg-black/50 border border-yellow-500/30 rounded-xl p-8">
        <h4 className="font-heading text-xl font-bold text-yellow-300 mb-4 text-center">
          Territorios Prioritarios
        </h4>
        <p className="font-body text-eroscape-text-muted text-center mb-6">
          Estamos buscando activamente franquiciados en estas ubicaciones estratégicas:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            'Madrid',
            'Barcelona',
            'Valencia',
            'Bilbao',
            'Londres',
            'París',
            'Berlín',
            'Ámsterdam',
            'Roma',
            'Lisboa',
            'Nueva York',
            'Miami',
          ].map((city) => (
            <div key={city} className="bg-yellow-900/20 rounded-lg p-3 border border-yellow-500/20">
              <span className="font-body text-eroscape-text-primary font-semibold">{city}</span>
            </div>
          ))}
        </div>
        <p className="font-body text-eroscape-text-muted text-center mt-6 text-sm">
          ¿Tu ciudad no está en la lista? Contáctanos igualmente. Valoramos todas las propuestas.
        </p>
      </div>
    </>
  );
}
