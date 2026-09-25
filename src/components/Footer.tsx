import React from 'react';
import { SOCIAL_CHANNELS, CONTACT_EMAIL } from '../data/socialLinks';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xl font-bold text-white tracking-tight font-display">
              Lisardo Warush
            </span>
            <p className="text-xs text-stone-400 mt-1">
              Especialidad en minimalismo familiar y estilo de vida sereno en el hogar.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-3">
            {SOCIAL_CHANNELS.map((ch) => (
              <a
                key={ch.id}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-300 hover:text-white px-2.5 py-1 rounded bg-stone-800/80 hover:bg-stone-800 transition-colors"
              >
                {ch.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Contact */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Lisardo Warush. Todos los derechos reservados.</span>
            <span>·</span>
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-stone-400 hover:text-stone-200 transition-colors font-mono"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
