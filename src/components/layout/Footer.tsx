import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-eroscape-surface border-t border-eroscape-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-display font-bold text-eroscape-accent-gold">EROSCAPE</span>
            </div>
            <p className="text-eroscape-text-muted text-sm leading-relaxed">
              El primer escape room erótico del mundo. Experiencias inmersivas, sensuales y seguras.
              Sin desnudez ni contenido explícito. Elegancia, misterio y consentimiento.
            </p>
          </div>

          <div>
            <h3 className="text-eroscape-accent-gold font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-eroscape-text-muted text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-eroscape-accent-gold mt-0.5 flex-shrink-0" />
                <span>Granada · Málaga · Sevilla</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-eroscape-accent-gold flex-shrink-0" />
                <span>+34 611257828</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-eroscape-accent-gold flex-shrink-0" />
                <span>hola@eroscape.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-eroscape-accent-gold font-semibold mb-4">Síguenos</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/eroscaperoom?igsh=d2s1NHJ5NG50NG5h&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eroscape-text-muted hover:text-eroscape-accent-gold transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@eroscape"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eroscape-text-muted hover:text-eroscape-accent-gold transition-colors transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@eroscape"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eroscape-text-muted hover:text-eroscape-accent-gold transition-colors transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/eroscape"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eroscape-text-muted hover:text-eroscape-accent-gold transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/eroscape"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eroscape-text-muted hover:text-eroscape-accent-gold transition-colors transform hover:scale-110"
                aria-label="Twitter/X"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-eroscape-text-muted">
                © 2026 EROSCAPE. Todos los derechos reservados.
              </p>
              <p className="text-xs text-eroscape-text-muted/60 mt-1">
                El primer escape room erótico del mundo
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-eroscape-border text-center">
          <p className="text-eroscape-accent-gold font-semibold text-sm">
            +18 · Solo adultos · Experiencia sensual sin desnudez ni contenido explícito
          </p>
        </div>
      </div>
    </footer>
  );
}
