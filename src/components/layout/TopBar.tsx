import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-eroscape-deep backdrop-blur-sm border-b border-purple-500/20 py-2 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-body text-eroscape-text-secondary text-sm">
          Experiencia para mayores de 18 años. Estética erótica no explícita.
        </p>
        <div className="flex items-center gap-4">
          <span className="font-body text-purple-400/70 text-xs font-medium hidden md:inline">
            Síguenos:
          </span>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/eroscaperoom?igsh=d2s1NHJ5NG50NG5h&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.youtube.com/@eroscape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@eroscape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-eroscape-text-accent transition-colors duration-200"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/eroscape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-eroscape-text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://twitter.com/eroscape"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-eroscape-text-accent transition-colors duration-200"
              aria-label="Twitter/X"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
