import React from 'react';
import { METHODOLOGY_STEPS, DOCTOR_INFO } from '../data/nutritionistData';
import { CheckCircle, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
            <span>Metodología Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            ¿Cómo es la Consulta con la Dra. Geovanna?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Un método estructurado y empático diseñado para que alcances tus metas de forma amigable y sostenible en el tiempo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-b from-purple-50/50 to-white p-6 rounded-3xl border border-purple-100/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-serif text-purple-700/80 group-hover:text-purple-700 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {idx < METHODOLOGY_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-purple-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* High Conversion Banner at bottom of methodology */}
        <div className="mt-12 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              ¿Listo para empezar tu cambio sin dietas extremas?
            </h3>
            <p className="text-xs sm:text-sm text-purple-200">
              Agenda tu cita en el consultorio de La Carolina en Quito o en modalidad Online.
            </p>
          </div>

          <a
            href={DOCTOR_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-purple-50 text-purple-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4 text-purple-700 fill-emerald-500" />
            <span>Agendar Cita en Quito</span>
          </a>
        </div>

      </div>
    </section>
  );
};
