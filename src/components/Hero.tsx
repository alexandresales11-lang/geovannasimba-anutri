import React from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { MessageCircle, Sparkles, Star, CheckCircle, ShieldCheck, ArrowRight, Activity, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-purple-50/30">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-200/40 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-amber-100/30 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column (DOM First for Mobile): Hero Visual & Photo Card */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-30 animate-pulse" />
              
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-purple-100">
                <div className="relative rounded-2xl overflow-hidden bg-purple-50/50 flex items-center justify-center p-6 border border-purple-100 min-h-[340px] sm:min-h-[380px]">
                  <img
                    src="https://i.imgur.com/6lVHRiB.png"
                    alt="Dra. Geovanna Simbaña - Nutricionista en Quito"
                    referrerPolicy="no-referrer"
                    className="max-h-[300px] sm:max-h-[340px] w-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                  />

                  {/* Gradient Overlay for badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Logo Badge top left */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg border border-purple-100 flex items-center gap-2.5">
                    <img
                      src={DOCTOR_INFO.logoUrl}
                      alt="Logo Nutricionista Geovanna Simbaña"
                      referrerPolicy="no-referrer"
                      className="w-9 h-9 object-contain"
                    />
                    <div className="pr-1">
                      <p className="text-xs font-bold text-slate-900 leading-none">GS Nutricionista</p>
                      <p className="text-[10px] font-medium text-purple-700 mt-0.5">Quito, Ecuador</p>
                    </div>
                  </div>

                  {/* Floating InBody Card bottom left */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-purple-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-purple-100 rounded-lg text-purple-700">
                        <Activity className="w-5 h-5 text-purple-700" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Análisis Bioimpedancia</p>
                        <p className="text-[11px] text-slate-600 font-medium">% Grasa, Masa Muscular y Agua</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">
                      InBody
                    </span>
                  </div>
                </div>
              </div>

              {/* Small floating rating tag */}
              <div className="absolute -bottom-4 -right-2 bg-purple-900 text-white px-4 py-2 rounded-2xl shadow-lg border border-purple-700 flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold">100% Evaluación Científica</span>
              </div>

            </div>
          </div>

          {/* Left Column (DOM Second for Mobile, First on Desktop): Copy & High-Conversion CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left w-full">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-purple-900 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-purple-800">Dra. Geovanna Simbaña</span>
              <span className="text-purple-400">•</span>
              <span className="text-purple-700 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-600" /> Quito, Ecuador
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-serif leading-[1.18] tracking-tight">
              Transforma tu salud y cuerpo en Quito{' '}
              <span className="text-purple-700 underline decoration-purple-300 decoration-wavy decoration-2">
                sin pasar hambre
              </span>{' '}
              ni dietas restrictivas.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Especialista en Nutrición Clínica, Deportiva y Recomposición Corporal. Planes 100% personalizados adaptados a tus gustos y a la verdadera gastronomía ecuatoriana, respaldados por evaluación <strong className="text-slate-800 font-semibold">InBody</strong> y soporte directo por <strong className="text-slate-800 font-semibold">WhatsApp 24/7</strong>.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg mx-auto lg:mx-0 text-left pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Evaluación InBody / Antropometría ISAK 1</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Atención Presencial (La Carolina) y Online</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Pérdida de grasa sostenida sin efecto rebote</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Acompañamiento cercano entre citas</span>
              </div>
            </div>

            {/* CTAs Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={DOCTOR_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-purple-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-emerald-400 text-purple-700" />
                <span>Agendar Consulta por WhatsApp</span>
              </a>

              <a
                href="#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-purple-50 text-purple-900 border-2 border-purple-200 font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Calculadora Nutricional Gratis</span>
              </a>
            </div>

            {/* Social Proof Metric bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 border-t border-purple-100">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Paciente" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Paciente" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Paciente" />
                </div>
                <div>
                  <div className="flex items-center text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 font-bold text-slate-800 text-xs">4.9/5</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    +1,200 pacientes satisfechos en Quito
                  </span>
                </div>
              </div>

              <a 
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs text-purple-800 font-semibold hover:underline"
              >
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>Google My Business</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
