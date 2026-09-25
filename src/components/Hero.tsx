import React from 'react';
import { ArrowRight, Sparkles, Mail, Heart, CheckCircle2 } from 'lucide-react';
import portraitImg from '../assets/images/lisardo_warush_portrait_1790341442080.jpg';
import heroImg from '../assets/images/hero_family_minimalism_1790341404666.jpg';
import { SOCIAL_CHANNELS, CONTACT_EMAIL } from '../data/socialLinks';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Kicker Profile Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <img
                src={portraitImg}
                alt="Lisardo Warush con su hijo"
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-stone-900/10 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#FAF9F5] rounded-full" title="Disponible para asesorías familiares" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-900 text-sm sm:text-base">Lisardo Warush</span>
                <span className="text-xs text-stone-400">·</span>
                <span className="text-xs text-amber-900 font-medium">Mentor de Vida Familiar</span>
              </div>
              <p className="text-xs text-stone-500">
                Especialista en minimalismo familiar y bienestar en el hogar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-stone-950 underline decoration-stone-300 underline-offset-2 transition-colors font-mono"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Main Grid: Headline & Visual Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              <span>ESTILO DE VIDA CONSCIENTE PARA EL HOGAR</span>
            </div>

            {/* Requested exact main title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-950 tracking-tight leading-[1.15] font-display text-balance">
              Lisardo Warush mi especialidad minimalismo familiar
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Ayudo a padres y familias a despejar el desorden físico, simplificar las rutinas diarias y construir un hogar donde abunde la calma, el juego libre y la conexión verdadera con sus hijos.
            </p>

            {/* Micro-principles checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Menos juguetes, más creatividad infantil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rutinas simples sin prisas matutinas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Espacios ordenados que se mantienen solos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% realista para familias con niños</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all shadow-sm group whitespace-nowrap"
              >
                <span>Dejar un mensaje rápido</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#pilares"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200/80 rounded-lg hover:bg-stone-50 hover:text-stone-950 transition-colors whitespace-nowrap"
              >
                <span>Conocer el método</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-stone-200/70">
              <span className="text-xs text-stone-500 font-medium block mb-2.5">
                Conéctate conmigo en mis redes oficiales:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_CHANNELS.map((channel) => (
                  <a
                    key={channel.id}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-md hover:border-stone-400 hover:text-stone-950 transition-all shadow-2xs"
                  >
                    <span>{channel.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 group">
              <img
                src={heroImg}
                alt="Hogar familiar sereno con espacio abierto y luz natural"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent flex flex-col justify-end p-5 text-white">
                <p className="text-xs font-medium tracking-wide uppercase text-amber-200/90 mb-1">
                  Espacios que unen
                </p>
                <p className="text-sm font-semibold leading-snug">
                  "El verdadero minimalismo familiar no es una casa vacía; es una casa llena de momentos y libre de cargas innecesarias."
                </p>
                <span className="text-xs text-stone-300 mt-1">— Lisardo Warush</span>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-500">¿Deseas una consulta rápida?</p>
                <p className="text-xs font-semibold text-stone-900">Escríbeme por el formulario directo</p>
              </div>
              <a
                href="#contacto"
                className="px-3 py-1.5 text-xs font-medium text-stone-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-md transition-colors"
              >
                Ir a contacto
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
