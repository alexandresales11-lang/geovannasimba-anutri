import React from 'react';
import { SERVICES, DOCTOR_INFO } from '../data/nutritionistData';
import {
  Flame,
  HeartPulse,
  Dumbbell,
  Video,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6 text-purple-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-purple-700" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-purple-700" />;
      case 'Video':
        return <Video className="w-6 h-6 text-purple-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-700" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-slate-50/70 border-t border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
            <span>Servicios Especializados en Quito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Atención Nutricional Basada en Ciencia
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Planes 100% individualizados respaldados por antropometría InBody, análisis clínico y acompañamiento continuo sin dietas restrictivas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const waUrl = `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(
              `Hola Dra. Geovanna! Quisiera más información sobre el servicio de: ${service.title}`
            )}`;

            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 ${
                  service.popular
                    ? 'border-purple-300 ring-2 ring-purple-600/20'
                    : 'border-slate-200 hover:border-purple-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 right-8 bg-purple-700 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Más Solicitado en Quito</span>
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 bg-purple-100/80 rounded-2xl border border-purple-200/80 shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-serif leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-purple-700 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      ¿Qué incluye este plan?
                    </p>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for tag */}
                  <div className="bg-purple-50/80 p-3.5 rounded-xl border border-purple-100 text-xs text-purple-950 font-medium mb-6">
                    <strong className="font-bold text-purple-900">Ideal para: </strong>
                    {service.idealFor}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-5 rounded-xl transition-all shadow-md text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-400 text-purple-700" />
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
