import React, { useState } from 'react';
import { FAQS } from '../data/nutritionistData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-purple-700" />
            <span>Resolvemos tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-slate-600">
            Todo lo que necesitas saber antes de agendar tu primera consulta nutricional en Quito.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-purple-50/50 border border-purple-100 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white text-purple-700 border border-purple-200 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-purple-700 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-100/60 font-normal">
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
