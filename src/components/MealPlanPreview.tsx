import React from 'react';
import { SAMPLE_MEAL_PREVIEW, DOCTOR_INFO } from '../data/nutritionistData';
import { Utensils, Clock, Check, Sparkles, MessageCircle, Heart } from 'lucide-react';

export const MealPlanPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/80 border border-purple-700 text-purple-200 font-bold text-xs uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5 text-purple-300" />
              <span>Gastronomía Ecuatoriana Sostenible</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif leading-tight text-white">
              Come rico, variado y de nuestra tierra sin culpabilidad.
            </h2>

            <p className="text-sm sm:text-base text-purple-100/80 leading-relaxed font-normal">
              Olvídate de comer lechuga con pollo hervido sin sabor. En la consulta con la Dra. Geovanna Simbaña aprendes a adaptar platos ecuatorianos reales con los macronutrientes idóneos para tu objetivo.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-purple-100 font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Incluye ingredientes accesibles en supermercados y mercados de Quito</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-purple-100 font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Recetarios fáciles con tiempos de preparación rápidos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-purple-100 font-medium">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Opciones para comer fuera de casa o en la oficina</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={DOCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-purple-600" />
                <span>Solicitar mi Plan Personalizado</span>
              </a>
            </div>
          </div>

          {/* Right Column Interactive Menu Mockup */}
          <div className="lg:col-span-7 bg-purple-950/80 border border-purple-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-purple-800/80">
              <div>
                <h3 className="text-lg font-bold font-serif text-white">
                  {SAMPLE_MEAL_PREVIEW.title}
                </h3>
                <p className="text-xs text-purple-300/80 mt-0.5">
                  {SAMPLE_MEAL_PREVIEW.description}
                </p>
              </div>

              <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                Sin Pasar Hambre
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SAMPLE_MEAL_PREVIEW.meals.map((meal, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-purple-900/40 p-4 rounded-2xl border border-purple-800/60 space-y-2 hover:border-purple-600 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[11px] font-bold text-amber-300">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{meal.time}</span>
                  </div>

                  <p className="text-xs font-bold text-white leading-snug">
                    {meal.name}
                  </p>

                  <p className="text-[11px] text-purple-200/70 leading-relaxed">
                    {meal.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-purple-900/60 rounded-xl border border-purple-700/60 flex items-center gap-3 text-xs text-purple-200">
              <Heart className="w-4 h-4 text-rose-400 shrink-0" />
              <span>
                Todos los planes se recalculan según tus gustos, presupuesto y ritmo de vida en Quito.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
