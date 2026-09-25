import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  actionableTip: string;
  familyImpact: string;
}

const PILLARS_DATA: Pillar[] = [
  {
    number: '01',
    title: 'Despeje Físico sin Culpabilidad',
    subtitle: 'Aprender a soltar lo que ya cumplió su etapa en el hogar',
    description: 'Ropa que los niños ya no usan, juguetes rotos o duplicados, y objetos sentimentales acumulados por inercia. Guiamos el proceso con respeto y sin discusiones dolorosas.',
    actionableTip: 'Aplica la regla de la "Caja de Espera": guarda temporalmente lo dudoso durante 30 días. Si nadie lo pide, está listo para donar.',
    familyImpact: 'Reduce un 40% el estrés visual de las zonas comunes en la primera semana.',
  },
  {
    number: '02',
    title: 'El Sistema de Retorno Autónomo',
    subtitle: 'Organización pensada desde la estatura de tus hijos',
    description: 'Diseñamos sistemas donde un niño de 4 años puede guardar sus cosas sin pedir ayuda. Cajas abiertas, estantes bajos y categorías lógicas en lugar de muebles complicados.',
    actionableTip: 'Limita los recipientes principales a 3 por habitación. Menos opciones implican menos fatiga de decisión.',
    familyImpact: 'Los niños aprenden responsabilidad cotidiana de manera natural y lúdica.',
  },
  {
    number: '03',
    title: 'Consumo Intencional y Filtro Familiar',
    subtitle: 'Proteger la puerta de entrada antes de que el desorden ocurra',
    description: 'Estrategias para gestionar cumpleaños, fechas festivas y regalos de familiares sin ofender a nadie, priorizando experiencias memorables sobre cajas de plástico.',
    actionableTip: 'Implementa la "Lista de Experiencias Deseadas": entradas al acuario, tardes de cine o cursos creativos como alternativa de regalo.',
    familyImpact: 'Ahorro económico significativo y niños más agradecidos con lo que poseen.',
  },
  {
    number: '04',
    title: 'Ritmos y Rutinas Sin Fricción',
    subtitle: 'La calma matutina y nocturna que toda familia merece',
    description: 'El minimalismo trasciende lo material. Simplificamos los pasos antes de salir al colegio y antes de dormir para eliminar gritos, prisas y olvidos constantes.',
    actionableTip: 'Prepara las 3 mochilas o prendas la noche anterior en una estación de salida fija junto a la puerta.',
    familyImpact: 'Mañanas fluidas y noches de descanso real para ambos progenitores.',
  },
];

export const PillarsSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section id="pilares" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
              Metodología Comprobada
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
              Los 4 Pilares del Minimalismo Familiar
            </h2>
          </div>
          <p className="text-stone-600 text-sm md:text-base max-w-md">
            Un marco paso a paso adaptado a las dinámicas de la vida real con niños, sin dogmas extremos ni rigidez.
          </p>
        </div>

        {/* Pillars Layout: Selector + Focused Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar List Selection */}
          <div className="lg:col-span-6 space-y-3">
            {PILLARS_DATA.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              return (
                <button
                  key={pillar.number}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-stone-900 shadow-sm ring-1 ring-stone-900/10'
                      : 'bg-white/60 hover:bg-white border-stone-200/80 text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <span className={`text-base font-bold font-mono shrink-0 ${isSelected ? 'text-amber-700' : 'text-stone-400'}`}>
                    {pillar.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base font-semibold leading-tight font-display ${isSelected ? 'text-stone-950' : 'text-stone-800'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 shrink-0 transition-transform ${isSelected ? 'text-stone-900 translate-x-1' : 'text-stone-300'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Pillar Deep Dive Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-sm relative">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                Pilar {PILLARS_DATA[activePillar].number} de 04
              </span>
              <span className="text-xs text-stone-400">
                Especialidad Lisardo Warush
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                {PILLARS_DATA[activePillar].title}
              </h3>
              
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {PILLARS_DATA[activePillar].description}
              </p>

              {/* Actionable Tip Box */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-amber-950 text-sm">
                <span className="font-semibold block text-xs uppercase tracking-wider text-amber-900 mb-1">
                  Acción práctica sugerida:
                </span>
                <p className="text-stone-800 text-sm leading-relaxed">
                  {PILLARS_DATA[activePillar].actionableTip}
                </p>
              </div>

              {/* Concrete outcome */}
              <div className="pt-3 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-600">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>
                  <strong className="text-stone-900 font-semibold">Resultado tangible:</strong>{' '}
                  {PILLARS_DATA[activePillar].familyImpact}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500">¿Quieres aplicar esto en tu casa?</span>
              <a
                href="#contacto"
                className="text-xs font-semibold text-stone-900 hover:text-amber-800 underline underline-offset-4 transition-colors"
              >
                Consultar con Lisardo →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
