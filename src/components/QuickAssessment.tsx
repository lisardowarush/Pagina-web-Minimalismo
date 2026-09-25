import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'toys',
    title: '1. ¿Cómo describirías la situación con los juguetes u objetos de los niños?',
    options: [
      { label: 'Desbordados', points: 3, description: 'Están en varias habitaciones y suelen quedar tirados por el suelo.' },
      { label: 'Moderados pero sin sistema', points: 2, description: 'Tenemos bastantes, pero cuesta que los niños los guarden solos.' },
      { label: 'Controlados y con rotación', points: 1, description: 'Tienen un lugar claro y solo dejamos los favoritos accesibles.' },
    ],
  },
  {
    id: 'mornings',
    title: '2. ¿Cómo se sienten las mañanas antes de salir de casa?',
    options: [
      { label: 'Caóticas y con prisas', points: 3, description: 'Siempre buscamos llaves, zapatos o mochilas a última hora.' },
      { label: 'Algo tensas', points: 2, description: 'Llegamos a tiempo pero con fatiga y algún enfado.' },
      { label: 'Predecibles y fluidas', points: 1, description: 'Dejamos todo listo la noche anterior y salimos tranquilos.' },
    ],
  },
  {
    id: 'tidying',
    title: '3. ¿Cuánto tiempo diario calculas que inviertes en recoger y ordenar?',
    options: [
      { label: 'Más de 1.5 horas al día', points: 3, description: 'Siento que el orden me absorbe las tardes y los fines de semana.' },
      { label: 'Entre 40 y 60 minutos', points: 2, description: 'Recojo constantemente pero al día siguiente vuelve el desorden.' },
      { label: 'Menos de 20 minutos', points: 1, description: 'Cada cosa tiene su sitio y los niños cooperan sin drama.' },
    ],
  },
];

interface QuickAssessmentProps {
  onSelectResult?: (summary: string) => void;
}

export const QuickAssessment: React.FC<QuickAssessmentProps> = ({ onSelectResult }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
  };

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

  const getResult = () => {
    if (totalScore >= 8) {
      return {
        level: 'Sobrecarga Alta en el Hogar',
        tone: 'text-amber-900',
        bg: 'bg-amber-50 border-amber-200',
        summary: 'Tu hogar tiene demasiados objetos demandando atención. Reducir un 30% del volumen inicial te devolverá horas de paz cada semana.',
        recommendation: 'Te recomiendo comenzar por la técnica del "Rincón Seguro": despejar un solo espacio común por completo antes de tocar los dormitorios.',
        presetMessage: 'Hola Lisardo, hice el autodiagnóstico y obtuve un nivel de sobrecarga alto. Me gustaría recibir asesoría para simplificar los espacios y juguetes de mi familia.',
      };
    }
    if (totalScore >= 5) {
      return {
        level: 'Carga Media con Potencial de Mejora',
        tone: 'text-stone-900',
        bg: 'bg-stone-50 border-stone-200',
        summary: 'Tienes una base establecida, pero la falta de sistemas accesibles para los niños hace que el peso del orden recaiga en ti.',
        recommendation: 'El pilar clave para ustedes es el "Sistema de Retorno Autónomo": contenedores a baja altura y rotación de objetos cada 30 días.',
        presetMessage: 'Hola Lisardo, mi autodiagnóstico arrojó carga media. Me interesa aprender a implementar sistemas que mis hijos puedan seguir solos.',
      };
    }
    return {
      level: 'Hogar Próximo al Equilibrio',
      tone: 'text-emerald-900',
      bg: 'bg-emerald-50 border-emerald-200',
      summary: '¡Gran trabajo! Tu familia ya practica hábitos conscientes. El siguiente paso es blindar la entrada contra regalos impulsivos y afinar rutinas.',
      recommendation: 'Aplica el "Filtro Familiar" para ocasiones especiales y crea momentos de pausa sin pantallas en el comedor.',
      presetMessage: 'Hola Lisardo, ya tenemos bases de orden pero quiero profundizar en hábitos de consumo consciente y desconexión digital en familia.',
    };
  };

  const result = getResult();

  return (
    <section id="diagnostico" className="py-16 md:py-20 bg-stone-50/50 border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            Herramienta Interactiva Gratuita
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-display">
            Autodiagnóstico: ¿Qué tan ligero es tu hogar hoy?
          </h2>
          <p className="text-stone-600 mt-2 text-sm">
            Responde 3 preguntas sencillas y recibe una recomendación directa de Lisardo Warush adaptada a tu situación actual.
          </p>
        </div>

        {/* Questions Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-sm space-y-8">
          {QUESTIONS.map((q) => (
            <div key={q.id} className="space-y-3">
              <h3 className="text-sm sm:text-base font-semibold text-stone-900">
                {q.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {q.options.map((opt) => {
                  const isChosen = answers[q.id] === opt.points;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelect(q.id, opt.points)}
                      className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                        isChosen
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-stone-50 hover:bg-white text-stone-700 border-stone-200/80 hover:border-stone-400'
                      }`}
                    >
                      <span className="font-semibold block mb-1">{opt.label}</span>
                      <span className={`block leading-relaxed ${isChosen ? 'text-stone-300' : 'text-stone-500'}`}>
                        {opt.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Results Display */}
          {allAnswered && (
            <div className={`mt-6 p-6 rounded-xl border ${result.bg} space-y-4 animate-in fade-in duration-300`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/70 pb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 block">
                    Resultado de tu Diagnóstico
                  </span>
                  <h4 className={`text-lg font-bold font-display ${result.tone}`}>
                    {result.level}
                  </h4>
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Puntuación: {totalScore} / 9
                </div>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {result.summary}
              </p>

              <div className="p-3.5 bg-white/80 rounded-lg border border-stone-200/80 text-xs sm:text-sm text-stone-800">
                <strong className="text-stone-900 font-semibold block mb-0.5">Consejo de Lisardo:</strong>
                {result.recommendation}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#contacto"
                  onClick={() => onSelectResult && onSelectResult(result.presetMessage)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs"
                >
                  <span>Llevar este resultado al formulario de contacto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setAnswers({})}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 py-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reiniciar preguntas</span>
                </button>
              </div>
            </div>
          )}

          {!allAnswered && (
            <div className="text-center py-2 text-xs text-stone-400">
              Selecciona una opción en las 3 preguntas para ver tu resultado personalizado.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
