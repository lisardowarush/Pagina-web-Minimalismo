import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿El minimalismo familiar significa tirar todos los juguetes de los niños?',
    answer: 'En absoluto. No se trata de privar a tus hijos de jugar, sino de cuidar su atención. Cuando los niños tienen 50 opciones en una caja, se saturan y no juegan con nada. Al dejar accesibles de 5 a 8 opciones significativas e ir rotándolas, el juego se vuelve más profundo y creativo.',
  },
  {
    question: '¿Qué hacemos con los regalos de cumpleaños y de los abuelos?',
    answer: 'La clave es la comunicación afectuosa previa. Enseño a las familias a crear una "Lista de Experiencias Deseadas" (paseos, talleres, actividades) y a involucrar a la familia extendida con amabilidad, agradeciendo el cariño y orientando los obsequios hacia cosas útiles o vivencias.',
  },
  {
    question: '¿Por dónde empezar si nuestra casa está completamente desbordada?',
    answer: 'Nunca empieces por toda la casa a la vez ni por la habitación de los niños. El método Warush recomienda iniciar por tu propio espacio personal (tu mesita de noche o armario) o por una superficie clave común (la mesa de comedor). Al experimentar el alivio de ver una superficie despejada, la motivación familiar se contagia naturalmente.',
  },
  {
    question: '¿Cómo puedo agendar una asesoría directa con Lisardo Warush?',
    answer: 'Solo necesitas dejar tu correo en el formulario de contacto al final de esta página indicando tu consulta. Lisardo te responderá personalmente para coordinar una sesión personalizada adaptada al ritmo y necesidades de tu hogar.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            Preguntas Frecuentes
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-display">
            Dudas comunes sobre el minimalismo en familia
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200/80 rounded-xl overflow-hidden bg-[#FAF9F5] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-display font-semibold text-stone-900 text-sm sm:text-base hover:text-amber-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-200/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
