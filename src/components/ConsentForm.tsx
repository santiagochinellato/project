import { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import Button from './ui/Button';

interface ConsentFormProps {
  onClose: () => void;
  onAccept: () => void;
}

export default function ConsentForm({ onClose, onAccept }: ConsentFormProps) {
  const [agreements, setAgreements] = useState({
    age: false,
    consent: false,
    safeword: false,
    limits: false,
    privacy: false,
    recording: false,
    health: false,
    responsibility: false,
  });

  const allAgreed = Object.values(agreements).every(v => v);

  const handleCheck = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAccept = () => {
    if (allAgreed) {
      onAccept();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Shield className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Formulario de Consentimiento</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6 flex gap-3">
            <AlertTriangle className="text-yellow-400 flex-shrink-0" size={24} />
            <div className="text-yellow-200 text-sm">
              <p className="font-bold mb-2">IMPORTANTE: Lee cuidadosamente antes de continuar</p>
              <p>Este formulario establece los términos de participación en EROSCAPE ROOM®. Tu consentimiento informado es fundamental para garantizar una experiencia segura, respetuosa y consensuada.</p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">1. Declaraciones de Consentimiento</h3>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.age}
                    onChange={() => handleCheck('age')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Mayoría de Edad:</strong> Confirmo que soy mayor de 18 años y tengo plena capacidad legal para participar en experiencias para adultos.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.consent}
                    onChange={() => handleCheck('consent')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Consentimiento Informado:</strong> Entiendo que EROSCAPE ROOM® es una experiencia inmersiva para adultos con contenido erótico y sensual. Participo voluntariamente y con pleno conocimiento de la naturaleza de la experiencia.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.safeword}
                    onChange={() => handleCheck('safeword')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Palabra Segura:</strong> He establecido mi palabra segura y comprendo que puedo utilizarla en cualquier momento para detener inmediatamente la experiencia sin consecuencias ni preguntas.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.limits}
                    onChange={() => handleCheck('limits')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Límites Personales:</strong> He definido claramente mis límites personales, preferencias y zonas de no consentimiento. Entiendo que estos serán respetados en todo momento.
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">2. Privacidad y Datos</h3>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.privacy}
                    onChange={() => handleCheck('privacy')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Privacidad GDPR:</strong> Acepto el tratamiento de mis datos personales según la Política de Privacidad y el Reglamento General de Protección de Datos (GDPR). Mis datos serán utilizados exclusivamente para la gestión de la experiencia y mejora del servicio.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.recording}
                    onChange={() => handleCheck('recording')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">No Grabación:</strong> Entiendo y acepto la política de NO GRABACIÓN. Ningún dispositivo personal de grabación (móviles, cámaras, etc.) está permitido dentro de las salas. EROSCAPE ROOM® no graba ni registra imágenes de los participantes.
                  </span>
                </label>
              </div>
            </div>

            <div className="bg-black/50 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4">3. Salud y Responsabilidad</h3>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.health}
                    onChange={() => handleCheck('health')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Estado de Salud:</strong> Declaro que mi estado físico y mental es adecuado para participar en esta experiencia. He informado de cualquier condición médica, alergia o limitación relevante.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreements.responsibility}
                    onChange={() => handleCheck('responsibility')}
                    className="mt-1 w-5 h-5 rounded border-purple-500/50 bg-black/50 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    <strong className="text-purple-300">Responsabilidad Personal:</strong> Asumo la responsabilidad de mis decisiones y acciones durante la experiencia. Entiendo que EROSCAPE ROOM® proporciona un entorno controlado y seguro, pero soy responsable de respetar mis propios límites y los de otros participantes.
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              Al aceptar este formulario de consentimiento, declaro haber leído, comprendido y aceptado todos los términos establecidos. Confirmo que mi participación es completamente voluntaria y que puedo retirar mi consentimiento en cualquier momento utilizando mi palabra segura o solicitando la finalización de la experiencia.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              onClick={handleAccept}
              disabled={!allAgreed}
              className={!allAgreed ? 'opacity-50 cursor-not-allowed' : ''}
            >
              <CheckCircle2 className="mr-2" size={20} />
              {allAgreed ? 'Acepto todos los términos' : 'Acepta todos los términos para continuar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
