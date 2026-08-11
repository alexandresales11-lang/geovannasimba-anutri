import React from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { Award, CheckCircle2, Instagram, MapPin, Heart, ShieldCheck, ExternalLink } from 'lucide-react';

export const AboutDoctor: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-20" />

              <div className="relative bg-white rounded-3xl p-3 border border-purple-100 shadow-2xl overflow-hidden">
                <div className="bg-purple-50/50 p-6 rounded-2xl flex items-center justify-center">
                  <img
                    src="https://i.imgur.com/6lVHRiB.png"
                    alt="Dra. Geovanna Simbaña Nutricionista Quito"
                    referrerPolicy="no-referrer"
                    className="max-h-[280px] w-auto object-contain drop-shadow-md"
                  />
                </div>

                <div className="p-4 bg-purple-50 rounded-xl mt-3 border border-purple-100 flex items-center gap-3">
                  <img
                    src={DOCTOR_INFO.logoUrl}
                    alt="Logo Dra Geovanna Simbaña"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif">
                      Dra. Geovanna Simbaña
                    </h3>
                    <p className="text-xs text-purple-700 font-medium">
                      Nutricionista Clínica & Deportiva
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-purple-700" />
              <span>Conoce a tu Nutricionista en Quito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
              Hola, soy la Dra. Geovanna Simbaña.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Mi misión principal es ayudarte a sanar tu relación con la comida, alcanzar tu composición corporal óptima y maximizar tu vitalidad sin sufrir dietas punitivas.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Entiendo perfectamente el estilo de vida acelerado en Quito y la riqueza de nuestra gastronomía. Por eso, mis tratamientos combinan el rigor de la <strong className="text-slate-800 font-semibold">evaluación científica antropométrica (InBody / ISAK)</strong> con la calidez y empatía de un acompañamiento personalizado diario por WhatsApp.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Antropometrista ISAK Nivel 1</h4>
                  <p className="text-[11px] text-slate-500">Medición internacional de pliegues y masa magra</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Heart className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Especialista Clínica</h4>
                  <p className="text-[11px] text-slate-500">Manejo de laboratorio, glucosa e inflamación</p>
                </div>
              </div>
            </div>

            {/* Instagram Profile CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Sígueme en Instagram</p>
                  <p className="text-xs text-purple-800 font-semibold">@{DOCTOR_INFO.instagram}</p>
                </div>
              </div>

              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all"
              >
                <span>Ver Perfil</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
