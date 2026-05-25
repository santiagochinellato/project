import { Shield, Scale, Lock, FileText, AlertCircle, Building2 } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

export default function LegalTerms() {
  return (
    <Section id="terminos-legales" className="bg-black">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Información Legal
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Términos, condiciones y políticas que garantizan tu seguridad y privacidad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card>
          <Scale className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Términos y Condiciones</h3>
          <p className="text-gray-400 text-sm mb-4">
            Al utilizar nuestros servicios, aceptas cumplir con nuestros términos de uso, políticas de comportamiento y normas de convivencia.
          </p>
        </Card>

        <Card>
          <Lock className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Política de Privacidad</h3>
          <p className="text-gray-400 text-sm mb-4">
            Cumplimiento estricto del GDPR. Tus datos personales están protegidos con encriptación de nivel bancario y nunca se comparten con terceros.
          </p>
        </Card>

        <Card>
          <Shield className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Política de Consentimiento</h3>
          <p className="text-gray-400 text-sm mb-4">
            Consentimiento informado y revocable en todo momento. Tu palabra segura es sagrada y respetada inmediatamente sin excepción.
          </p>
        </Card>

        <Card>
          <FileText className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Política de Cancelación</h3>
          <p className="text-gray-400 text-sm mb-4">
            Cancelación gratuita hasta 48h antes. Reembolso del 50% entre 48h-24h. Sin reembolso con menos de 24h de antelación excepto causas de fuerza mayor.
          </p>
        </Card>

        <Card>
          <AlertCircle className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Código de Conducta</h3>
          <p className="text-gray-400 text-sm mb-4">
            Tolerancia cero con comportamientos no consensuados, acoso o irrespeto. Expulsión inmediata sin reembolso por incumplimiento.
          </p>
        </Card>

        <Card>
          <Building2 className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">Información Corporativa</h3>
          <p className="text-gray-400 text-sm mb-4">
            EROSCAPE ROOM® - Empresa legalmente constituida. CIF: B-XXXXXXXX. Registro Mercantil de Granada, Tomo XXX, Folio XX, Hoja GR-XXXXX.
          </p>
        </Card>
      </div>

      <div className="space-y-8">
        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Protección de Datos (GDPR)</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <strong className="text-purple-300">Responsable del tratamiento:</strong> EROSCAPE ROOM S.L., con domicilio en Granada, España.
            </p>
            <p>
              <strong className="text-purple-300">Finalidad:</strong> Gestión de reservas, prestación de servicios, comunicaciones comerciales (solo con consentimiento previo) y mejora de la experiencia mediante análisis anónimos.
            </p>
            <p>
              <strong className="text-purple-300">Legitimación:</strong> Consentimiento del interesado y ejecución de contrato.
            </p>
            <p>
              <strong className="text-purple-300">Conservación:</strong> Durante la relación comercial y 5 años adicionales para obligaciones legales y fiscales.
            </p>
            <p>
              <strong className="text-purple-300">Derechos:</strong> Acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad. Contacto: privacidad@eroscape.com
            </p>
            <p>
              <strong className="text-purple-300">Delegado de Protección de Datos:</strong> dpo@eroscape.com
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Política de Cookies</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              Utilizamos cookies técnicas (necesarias para el funcionamiento), analíticas (Google Analytics con IP anonimizada) y de preferencias (recordar tu configuración).
            </p>
            <p>
              <strong className="text-purple-300">Cookies técnicas:</strong> Imprescindibles, no requieren consentimiento.
            </p>
            <p>
              <strong className="text-purple-300">Cookies analíticas:</strong> Requieren consentimiento. Puedes rechazarlas sin afectar la funcionalidad.
            </p>
            <p>
              Puedes gestionar tus preferencias de cookies en cualquier momento desde la configuración de tu navegador.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Seguridad y Protocolos</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <strong className="text-purple-300">Seguridad física:</strong> Salas equipadas con sistemas de comunicación directa con personal de seguridad. Botones de emergencia accesibles en todo momento.
            </p>
            <p>
              <strong className="text-purple-300">Higiene y limpieza:</strong> Desinfección profunda entre sesiones según protocolos sanitarios. Todos los elementos utilizados son de un solo uso o esterilizados según normativa médica.
            </p>
            <p>
              <strong className="text-purple-300">Confidencialidad absoluta:</strong> Accesos privados independientes. Sin registro público de entrada. Personal firmante de acuerdos de confidencialidad.
            </p>
            <p>
              <strong className="text-purple-300">Seguros:</strong> Cobertura de responsabilidad civil profesional por 1.000.000€. Seguro de accidentes para participantes.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Propiedad Intelectual</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <strong className="text-purple-300">EROSCAPE ROOM®</strong> es una marca registrada. Todos los derechos reservados.
            </p>
            <p>
              Las experiencias, narrativas, diseños, metodologías, tecnologías y protocolos son propiedad intelectual exclusiva de EROSCAPE ROOM S.L. y están protegidos por las leyes de propiedad intelectual e industrial españolas, europeas e internacionales.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización expresa por escrito.
            </p>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Resolución de Disputas</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p>
              <strong className="text-purple-300">Jurisdicción:</strong> Para cualquier controversia derivada de estos términos, las partes se someten a los juzgados y tribunales de Granada, España, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
            </p>
            <p>
              <strong className="text-purple-300">Mediación:</strong> Antes de acudir a la vía judicial, recomendamos resolver disputas mediante nuestro servicio de atención al cliente: legal@eroscape.com
            </p>
            <p>
              <strong className="text-purple-300">Arbitraje de consumo:</strong> Los usuarios consumidores pueden acudir a la Junta Arbitral de Consumo de su localidad.
            </p>
          </div>
        </Card>

        <div className="bg-black/70 border border-purple-500/20 rounded-xl p-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Última actualización: Enero 2026. EROSCAPE ROOM S.L. se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados con al menos 30 días de antelación y publicados en esta página. El uso continuado de nuestros servicios tras la notificación constituye aceptación de los nuevos términos.
          </p>
        </div>
      </div>
    </Section>
  );
}
