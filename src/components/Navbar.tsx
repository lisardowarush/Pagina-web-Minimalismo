import React, { useState } from 'react';
import { Menu, X, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/socialLinks';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#inicio" 
          className="text-lg font-bold tracking-tight text-stone-900 font-display hover:text-amber-800 transition-colors"
        >
          Lisardo Warush
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#inicio" className="hover:text-stone-900 transition-colors">Inicio</a>
          <a href="#filosofia" className="hover:text-stone-900 transition-colors">Filosofía</a>
          <a href="#pilares" className="hover:text-stone-900 transition-colors">Pilares</a>
          <a href="#espacios" className="hover:text-stone-900 transition-colors">Espacios</a>
          <a href="#redes" className="hover:text-stone-900 transition-colors">Redes</a>
          <a href="#diagnostico" className="hover:text-stone-900 transition-colors">Autodiagnóstico</a>
        </nav>

        {/* Zone 3: Primary action */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contactar</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-stone-200 px-4 py-4 space-y-3">
          <a 
            href="#inicio" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Inicio
          </a>
          <a 
            href="#filosofia" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Filosofía
          </a>
          <a 
            href="#pilares" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Pilares
          </a>
          <a 
            href="#espacios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Espacios
          </a>
          <a 
            href="#redes" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Redes Sociales
          </a>
          <a 
            href="#diagnostico" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-stone-700 hover:text-stone-950 py-1"
          >
            Autodiagnóstico
          </a>
          <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-stone-400" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a>
          </div>
        </div>
      )}
    </header>
  );
};
