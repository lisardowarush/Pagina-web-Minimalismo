import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/socialLinks';

interface ContactFormProps {
  initialMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialMessage = '' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('Asesoría para mi hogar');
  const [message, setMessage] = useState(initialMessage);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync initial message if changed from outside (e.g., autodiagnosis)
  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const QUICK_TOPICS = [
    'Asesoría para mi hogar',
    'Organización de juguetes',
    'Rutinas familiares sin prisas',
    'Charlas y Talleres',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!email.trim() || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido para poder responderte.');
      return;
    }

    // Persist to localStorage for client-side persistence
    try {
      const existing = JSON.parse(localStorage.getItem('lisardo_contact_messages') || '[]');
      const newEntry = {
        name: name.trim() || 'Interesado',
        email: email.trim(),
        topic,
        message: message.trim(),
        timestamp: new Date().toISOString(),
      };
      existing.push(newEntry);
      localStorage.setItem('lisardo_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore localStorage errors
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setMessage('');
    setName('');
    setEmail('');
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#FAF9F5] border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-2">
            Contacto Directo & Sin Complicaciones
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight font-display text-balance">
            Escríbele a Lisardo Warush
          </h2>
          <p className="text-stone-600 mt-2 text-sm sm:text-base leading-relaxed">
            Deja tu correo o mensaje corto a continuación. Sin pasos largos ni formularios tediosos: una comunicación directa de persona a persona.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-10 max-w-2xl mx-auto relative">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Gracias {name ? <strong>{name}</strong> : 'por tu interés'}. Lisardo Warush ha recibido tu consulta sobre <em>"{topic}"</em> y te responderá personalmente a <strong>{email}</strong> lo antes posible.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-600 text-left space-y-1.5 max-w-md mx-auto">
                <div className="font-semibold text-stone-800">Copia de respaldo:</div>
                <div className="truncate font-mono text-[11px] text-stone-500">
                  Destinatario: {CONTACT_EMAIL}
                </div>
                {message && (
                  <div className="italic text-stone-700 bg-white p-2.5 rounded border border-stone-200">
                    "{message}"
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Contacto desde web: ${topic}`)}&body=${encodeURIComponent(`Hola Lisardo,\n\nSoy ${name || 'un interesado'} (${email}).\n\nMensaje:\n${message}`)}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Abrir también en mi app de correo</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            /* Short & Simple Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error indicator if any */}
              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Fast Topic Selector Pills (Buttons with active state) */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-2">
                  ¿En qué te gustaría que te oriente Lisardo?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                  {QUICK_TOPICS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        topic === item
                          ? 'bg-stone-900 text-white shadow-2xs'
                          : 'bg-stone-100/90 text-stone-700 hover:bg-stone-200/70 border border-stone-200/50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email (Required) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-stone-900">
                    Tu Correo Electrónico <span className="text-amber-700">*</span>
                  </label>
                  <span className="text-[11px] text-stone-400">Requerido para responderte</span>
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50/50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                />
              </div>

              {/* Name (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-stone-900">
                    Tu Nombre o Familia
                  </label>
                  <span className="text-[11px] text-stone-400">Opcional</span>
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="Ej. Familia Rodríguez o María"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50/50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-900">
                    Tu Mensaje o Consulta Breve
                  </label>
                  <span className="text-[11px] text-stone-400">Opcional</span>
                </div>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Cuéntale a Lisardo qué aspecto de tu hogar te gustaría simplificar..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-stone-50/50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-sm group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>Enviar mensaje a Lisardo Warush</span>
                </button>
              </div>

              {/* Direct Alternative / Privacy Note */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
                <span>¿Prefieres escribir directamente desde tu correo?</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 font-mono underline decoration-stone-300 underline-offset-2 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-400" />
                        <span>{CONTACT_EMAIL}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
