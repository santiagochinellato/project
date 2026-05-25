import { useState, FormEvent } from 'react';
import { Globe, TrendingUp, Award, Users, Rocket, Shield, CheckCircle, Mail, Phone } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { trackEvent } from '../Analytics';

export default function Franchise() {
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
      description: 'Primer Escape Room Erótico físico del mundo. Experiencia presencial única sin competencia directa en ninguna ciudad.',
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

  return (
    <Section id="franquicia" dark className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/40 rounded-full px-6 py-2 mb-6 animate-pulse">
          <span className="text-yellow-300 font-bold text-sm">OPORTUNIDAD MUNDIAL EXCLUSIVA</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
          Franquicia EROSCAPE ROOM®
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
          Únete a la revolución del entretenimiento adulto
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Se el primero en traer esta <span className="text-white font-semibold">experiencia física presencial</span> a tu ciudad. Un espacio real con salas temáticas, habitaciones de placer y tecnología IA. Invierte en un negocio sin precedentes con rentabilidad probada.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/40 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">¿Por qué una Franquicia EROSCAPE?</h3>
          <p className="text-gray-300 text-lg">
            No es solo un negocio, es la oportunidad de liderar un mercado completamente nuevo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-black/40 rounded-lg p-6 border border-yellow-500/20">
                <Icon className="text-yellow-400 mb-4" size={40} />
                <h4 className="text-white font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/20">
            <h4 className="text-yellow-300 font-bold text-xl mb-4 flex items-center gap-2">
              <CheckCircle size={24} />
              ¿Qué incluye la Franquicia?
            </h4>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/20">
            <h4 className="text-yellow-300 font-bold text-xl mb-4 flex items-center gap-2">
              <Users size={24} />
              Perfil Ideal del Franquiciado
            </h4>
            <ul className="space-y-3 mb-6">
              {idealProfile.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
              <p className="text-yellow-300 font-semibold text-sm">
                No necesitas experiencia previa en escape rooms. Te formamos en todo.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <div className="text-5xl font-bold text-yellow-400 mb-2">1ª</div>
          <p className="text-white font-semibold mb-2">Del Mundo</p>
          <p className="text-gray-400 text-sm">Sin competencia directa en ningún mercado</p>
        </Card>
        <Card className="text-center">
          <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
          <p className="text-white font-semibold mb-2">Innovación I+D</p>
          <p className="text-gray-400 text-sm">Tecnología patentada y certificada</p>
        </Card>
        <Card className="text-center">
          <div className="text-5xl font-bold text-yellow-400 mb-2">∞</div>
          <p className="text-white font-semibold mb-2">Potencial Global</p>
          <p className="text-gray-400 text-sm">Mercado adulto en expansión mundial</p>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border-yellow-500/50">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-4">Da el Primer Paso</h3>
          <p className="text-gray-300 text-lg mb-2">
            Solicita información sin compromiso y descubre cómo puedes formar parte de esta revolución
          </p>
          <p className="text-yellow-300 font-semibold">
            Plazas limitadas por territorio. Reserva tu ciudad ahora.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/30">
              <Mail className="text-yellow-400 mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Email</h4>
              <a href="mailto:franquicia@eroscaperoom.com" className="text-yellow-300 hover:text-yellow-400 transition-colors">
                franquicia@eroscaperoom.com
              </a>
            </div>
            <div className="bg-black/40 rounded-lg p-6 border border-yellow-500/30">
              <Phone className="text-yellow-400 mb-3" size={32} />
              <h4 className="text-white font-bold mb-2">Teléfono</h4>
              <a href="tel:+34611257828" className="text-yellow-300 hover:text-yellow-400 transition-colors">
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
              className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="tel"
              placeholder="Tu teléfono"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="text"
              placeholder="Ciudad/País de interés"
              required
              value={formData.city_interest}
              onChange={(e) => setFormData({ ...formData, city_interest: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre ti y por qué te interesa esta oportunidad"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 text-green-300 text-center">
                ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 text-red-300 text-center">
                Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.
              </div>
            )}
            <Button
              fullWidth
              size="lg"
              className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Al enviar este formulario, aceptas que nos pongamos en contacto contigo para compartir información sobre la franquicia.
            </p>
          </form>
        </div>
      </Card>

      <div className="mt-12 bg-black/50 border border-yellow-500/30 rounded-xl p-8">
        <h4 className="text-xl font-bold text-yellow-300 mb-4 text-center">Territorios Prioritarios</h4>
        <p className="text-gray-400 text-center mb-6">
          Estamos buscando activamente franquiciados en estas ubicaciones estratégicas:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Madrid', 'Barcelona', 'Valencia', 'Bilbao', 'Londres', 'París', 'Berlín', 'Ámsterdam', 'Roma', 'Lisboa', 'Nueva York', 'Miami'].map((city) => (
            <div key={city} className="bg-yellow-900/20 rounded-lg p-3 border border-yellow-500/20">
              <span className="text-white font-semibold">{city}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm">
          ¿Tu ciudad no está en la lista? Contáctanos igualmente. Valoramos todas las propuestas.
        </p>
      </div>
      </div>
    </Section>
  );
}
