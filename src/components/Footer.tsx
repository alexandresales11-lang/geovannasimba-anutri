import React from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { Instagram, MapPin, Phone, ExternalLink, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 ring-2 ring-purple-600 overflow-hidden shrink-0">
                <img
                  src={DOCTOR_INFO.logoUrl}
                  alt={DOCTOR_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-bold text-white font-serif block leading-snug">
                  Geovanna Simbaña
                </span>
                <span className="text-xs text-purple-400 font-semibold block uppercase">
                  Nutricionista Quito
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Nutrición Clínica, Deportiva y Recomposición Corporal. Consultas presenciales en el Sector La Carolina en Quito y atención online a todo Ecuador.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-purple-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#servicios" className="hover:text-purple-400 transition-colors">
                  Servicios Nutricionales
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-purple-400 transition-colors text-purple-300 font-bold">
                  Calculadora de Calorías & Macros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-purple-400 transition-colors">
                  Casos de Éxito y Reseñas
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-purple-400 transition-colors">
                  Metodología en 4 Pasos
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-purple-400 transition-colors">
                  Sobre la Dra. Geovanna
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-purple-400 transition-colors">
                  Agendar Cita
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Ubicación en Quito
            </h3>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Av. de los Shyris y Naciones Unidas, Sector La Carolina, Quito - Ecuador</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{DOCTOR_INFO.phone}</span>
              </p>
              <p className="text-slate-500 pt-1">
                Lunes a Viernes: 08:30 - 18:30<br />
                Sábados: 09:00 - 13:00
              </p>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de Calidad Profesional</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Atención médica certificada con equipo InBody 270 y acreditación Antropométrica ISAK Nivel 1.
            </p>
            <a
              href={DOCTOR_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold"
            >
              <span>Ver ficha Google My Business</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dra. Geovanna Simbaña - Nutricionista Quito, Ecuador. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado para la salud y el bienestar en Quito
          </p>
        </div>
      </div>
    </footer>
  );
};
