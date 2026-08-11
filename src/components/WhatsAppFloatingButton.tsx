import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = userMsg || 'Hola Dra. Geovanna, quisiera agendar una consulta nutricional en Quito.';
    const url = `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Floating Chat Popup Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden transition-all transform animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={DOCTOR_INFO.logoUrl}
                  alt={DOCTOR_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full bg-white object-contain p-0.5"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-purple-900" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight font-serif">
                  Dra. Geovanna Simbaña
                </p>
                <p className="text-[10px] text-purple-200">
                  Nutricionista Quito • En Línea
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-purple-700 rounded-full text-purple-200 hover:text-white"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-purple-50/60 space-y-3 font-sans text-xs">
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-purple-100 text-slate-800 leading-relaxed space-y-1">
              <p className="font-bold text-purple-900">¡Hola! 👋 Bienvenido/a.</p>
              <p>
                Soy la Dra. Geovanna Simbaña. ¿En qué te puedo asesorar hoy para tu salud y composición corporal en Quito?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Hace 1 min</span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setUserMsg('Quiero agendar una cita presencial en La Carolina')}
                className="text-[11px] font-semibold bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 px-2.5 py-1 rounded-full shadow-2xs"
              >
                📍 Cita Presencial Quito
              </button>
              <button
                type="button"
                onClick={() => setUserMsg('Quiero información de la Consulta Online')}
                className="text-[11px] font-semibold bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 px-2.5 py-1 rounded-full shadow-2xs"
              >
                💻 Consulta Online
              </button>
              <button
                type="button"
                onClick={() => setUserMsg('Quiero consultar precios y planes nutricionales')}
                className="text-[11px] font-semibold bg-white hover:bg-purple-100 text-purple-900 border border-purple-200 px-2.5 py-1 rounded-full shadow-2xs"
              >
                💰 Precios y Planes
              </button>
            </div>
          </div>

          {/* Chat Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-purple-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="flex-1 bg-slate-100 text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-purple-600 font-medium text-slate-800"
            />
            <button
              type="submit"
              className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all transform hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600 animate-bounce" />
        <span className="hidden sm:inline-block text-sm font-bold">
          WhatsApp Directo
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
        </span>
      </button>
    </div>
  );
};
