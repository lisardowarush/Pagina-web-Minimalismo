import React, { useState } from 'react';
import spacesImg from '../assets/images/spaces_declutter_peace_1790341414274.jpg';
import routineImg from '../assets/images/mindful_family_routine_1790341424090.jpg';
import heroImg from '../assets/images/hero_family_minimalism_1790341404666.jpg';
import { Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface SpaceItem {
  id: string;
  name: string;
  room: string;
  image: string;
  concept: string;
  beforeProblem: string;
  afterSolution: string;
  quickChecklist: string[];
}

const SPACES: SpaceItem[] = [
  {
    id: 'playroom',
    name: 'Rincón de Juego y Lectura Infantil',
    room: 'Dormitorio / Zona de Niños',
    image: spacesImg,
    concept: 'Juego libre con pocos elementos de alta calidad en vez de montañas de plástico.',
    beforeProblem: 'Cajas desbordadas de juguetes, piezas perdidas y niños aburridos en 10 minutos.',
    afterSolution: 'Estantería baja con rotación de 5 a 8 actividades visibles. Los niños se sumergen en el juego durante horas.',
    quickChecklist: [
      'Guardar el 70% de juguetes en un armario y rotar cada mes.',
      'Libros colocados con la portada de frente a la altura de sus ojos.',
      'Una alfombra limpia como perímetro de juego delimitado.',
    ],
  },
  {
    id: 'dining',
    name: 'Mesa Familiar y Despensa Consciente',
    room: 'Comedor y Cocina',
    image: routineImg,
    concept: 'Un espacio despejado para comer juntos sin pantallas ni distracciones.',
    beforeProblem: 'Mesa utilizada como vertedero de correo, llaves, mochilas y aparatos electrónicos.',
    afterSolution: 'Superficie de madera siempre despejada. Las comidas se convierten en momentos de diálogo genuino.',
    quickChecklist: [
      'Estación de aterrizaje en la entrada para dejar llaves y mochilas antes de llegar a la mesa.',
      'Regla de cero pantallas durante los desayunos y cenas familiares.',
      'Vajilla justa y necesaria: menos platos apilados en el fregadero.',
    ],
  },
  {
    id: 'living',
    name: 'Sala de Estar para la Relajación Plena',
    room: 'Área Común',
    image: heroImg,
    concept: 'El refugio del hogar donde descansar y compartir sin agobio visual.',
    beforeProblem: 'Cables sueltos, cojines desparramados y sensación de que siempre hay algo pendiente por recoger.',
    afterSolution: 'Mobiliario modular funcional con luz natural, plantas y superficies serenas.',
    quickChecklist: [
      'Rutina de 10 minutos en familia antes de acostarse para dejar la sala lista.',
      'Cestas cerradas para mantas o mandos a distancia.',
      'Iluminación cálida indirecta para calmar el ritmo al caer la tarde.',
    ],
  },
];

export const SpacesGallery: React.FC = () => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>('playroom');
  const currentSpace = SPACES.find(s => s.id === selectedSpaceId) || SPACES[0];

  return (
    <section id="espacios" className="py-16 md:py-24 bg-white border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            Transformación del Hogar
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Espacios diseñados para respirar tranquilidad
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base leading-relaxed">
            Observa cómo estructuramos los rincones clave de una casa familiar para que el orden sea automático y natural.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-stone-200">
          {SPACES.map((space) => {
            const isActive = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                type="button"
                onClick={() => setSelectedSpaceId(space.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-stone-100/80 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Space Showcase Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Asset Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
              <img
                src={currentSpace.image}
                alt={currentSpace.name}
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md font-medium">
                {currentSpace.room}
              </div>
            </div>
          </div>

          {/* Details & Action Plan */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-mono text-amber-800 font-semibold uppercase tracking-wider">
                Concepto Central
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mt-1">
                {currentSpace.name}
              </h3>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {currentSpace.concept}
              </p>
            </div>

            {/* Contrast: El problema común vs. El enfoque Lisardo */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 text-xs sm:text-sm">
                <span className="font-semibold text-rose-900 block mb-0.5">El caos habitual:</span>
                <p className="text-stone-700">{currentSpace.beforeProblem}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm">
                <span className="font-semibold text-emerald-900 block mb-0.5">La solución minimalista:</span>
                <p className="text-stone-700">{currentSpace.afterSolution}</p>
              </div>
            </div>

            {/* Checklist */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-stone-900 block mb-2">
                3 Pasos inmediatos para este espacio:
              </span>
              <ul className="space-y-2 text-xs text-stone-600">
                {currentSpace.quickChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-amber-800 transition-colors"
              >
                <span>¿Quieres asesoría para rediseñar este rincón?</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
