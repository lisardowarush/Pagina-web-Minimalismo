import React from 'react';
import { ExternalLink, Video, Users, Share2, Sparkles, MessageCircle } from 'lucide-react';
import { SOCIAL_CHANNELS, CONTACT_EMAIL } from '../data/socialLinks';

// Brand icons or custom styled SVGs for each network
const SocialIcon: React.FC<{ id: string; className?: string }> = ({ id, className = "w-5 h-5" }) => {
  switch (id) {
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.56c-.03 2.15-.9 4.25-2.48 5.74-1.74 1.64-4.22 2.4-6.6 2.08-2.61-.34-4.9-2.02-6-4.43-1.08-2.38-.85-5.26.6-7.44 1.4-2.1 3.79-3.32 6.32-3.23.33.01.66.04.99.09v4.06c-.4-.11-.82-.16-1.24-.15-1.16.02-2.29.56-3 1.46-.72.92-.93 2.17-.55 3.27.38 1.11 1.34 1.95 2.5 2.16 1.34.24 2.75-.24 3.6-1.26.68-.82.97-1.9.95-2.95V.02h2.57z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return <Share2 className={className} />;
  }
};

export const SocialHub: React.FC = () => {
  return (
    <section id="redes" className="py-16 md:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            Comunidad & Contenidos Oficiales
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Enlaces a Redes Profesionales de Lisardo Warush
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base leading-relaxed">
            Sigue mis reflexiones, videos tutoriales, consejos cotidianos y casos reales en las plataformas donde comparto contenido de valor sobre minimalismo familiar.
          </p>
        </div>

        {/* 5 Network Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOCIAL_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className={`p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${channel.bgColor}`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-white shadow-2xs border border-stone-200/60 ${channel.color}`}>
                    <SocialIcon id={channel.id} className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-stone-500 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200/70">
                    {channel.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 font-display">
                  {channel.name}
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  {channel.handle}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-200/70">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-900 hover:text-white border border-stone-300 rounded-lg transition-colors group shadow-2xs"
                >
                  <span>Visitar canal en {channel.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Email Connection */}
          <div className="p-6 rounded-2xl bg-amber-900 text-amber-50 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-800 flex items-center justify-center text-amber-200 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">
                Contacto Directo por Correo
              </h3>
              <p className="text-xs font-mono text-amber-300 mt-0.5 truncate">
                {CONTACT_EMAIL}
              </p>
              <p className="text-xs sm:text-sm text-amber-100/90 mt-3 leading-relaxed">
                ¿Prefieres escribir directamente a la bandeja de entrada personal de Lisardo? Respondo personalmente a cada familia e interesado.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-amber-800">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-amber-950 bg-white hover:bg-amber-100 rounded-lg transition-colors shadow-xs"
              >
                <span>Enviar email directo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
