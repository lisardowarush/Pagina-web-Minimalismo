import React from 'react';
import { Compass, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="filosofia" className="py-16 md:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            La Visión de Lisardo
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Por qué el minimalismo familiar transforma la convivencia diaria
          </h2>
          <p className="text-stone-600 mt-3 text-base leading-relaxed">
            Muchos creen que el minimalismo con niños es imposible. Mi enfoque no busca casas de revista impersonales, sino hogares cálidos donde cada objeto tenga un propósito y cada miembro de la familia respire tranquilidad.
          </p>
        </div>

        {/* 3 Core Philosophical Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 rounded-xl bg-stone-50/70 border border-stone-200/70 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center font-semibold text-sm">
              01
            </div>
            <h3 className="text-lg font-semibold text-stone-900 font-display">
              Menos sobrecarga sensorial infantil
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Los niños expuestos a menos juguetes y pantallas juegan por periodos más prolongados, desarrollan mayor concentración y cuidan con más aprecio sus pertenencias esenciales.
            </p>
            <div className="pt-2 text-xs text-stone-500 border-t border-stone-200/60">
              Rotación mensual de juguetes · Espacios despejados
            </div>
          </div>

          <div className="p-6 rounded-xl bg-stone-50/70 border border-stone-200/70 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center font-semibold text-sm">
              02
            </div>
            <h3 className="text-lg font-semibold text-stone-900 font-display">
              Sistemas que los niños entienden
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Si ordenar requiere instrucciones complejas, el hogar siempre recaerá en los padres. Implemento zonas intuitivas de guardado a la altura de los pequeños para fomentar su autonomía.
            </p>
            <div className="pt-2 text-xs text-stone-500 border-t border-stone-200/60">
              Cestas accesibles · Etiquetas visuales · Autonomía
            </div>
          </div>

          <div className="p-6 rounded-xl bg-stone-50/70 border border-stone-200/70 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center font-semibold text-sm">
              03
            </div>
            <h3 className="text-lg font-semibold text-stone-900 font-display">
              Tiempo ganado para estar juntos
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Al reducir el volumen de cosas que limpiar, ordenar y clasificar, una familia promedio recupera entre 4 y 7 horas semanales para pasear, leer, cocinar o simplemente descansar juntos.
            </p>
            <div className="pt-2 text-xs text-stone-500 border-t border-stone-200/60">
              Paz mental parental · Menos discusiones domésticas
            </div>
          </div>

        </div>

        {/* Lisardo's Personal Note Quote */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-12 h-12 rounded-full bg-amber-800 text-amber-100 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-stone-800 text-base sm:text-lg italic font-serif leading-relaxed">
              "Como padre, descubrí que mis momentos más felices con mi hijo no ocurrían en medio de compras o habitaciones abarrotadas, sino cuando teníamos espacio para caminar, conversar y construir cosas juntos sin la prisa de tener que ordenar un desorden interminable."
            </p>
            <div className="text-xs text-stone-500 font-sans">
              <span className="font-semibold text-stone-900">Lisardo Warush</span> · Especialista en Minimalismo Familiar
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
