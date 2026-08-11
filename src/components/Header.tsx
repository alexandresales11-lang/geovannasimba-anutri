import React, { useState, useEffect } from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { MapPin, MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-purple-100'
          : 'bg-gradient-to-b from-purple-900/10 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 ring-2 ring-purple-600 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src={DOCTOR_INFO.logoUrl}
                alt={DOCTOR_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight font-serif">
                Geovanna Simbaña
              </span>
              <span className="text-xs font-semibold text-purple-700 block tracking-wide uppercase">
                Nutricionista Quito
              </span>
            </div>
          </a>

          {/* Location Badge & Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#servicios" className="hover:text-purple-700 transition-colors">
              Servicios
            </a>
            <a href="#calculadora" className="hover:text-purple-700 transition-colors flex items-center gap-1.5 text-purple-900 font-semibold bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
              Calculadora
            </a>
            <a href="#testimonios" className="hover:text-purple-700 transition-colors">
              Resultados Reales
            </a>
            <a href="#metodologia" className="hover:text-purple-700 transition-colors">
              Metodología
            </a>
            <a href="#sobre-mi" className="hover:text-purple-700 transition-colors">
              Sobre Mí
            </a>
            <a href="#contacto" className="hover:text-purple-700 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              <span>Quito, Ecuador 🇪🇨</span>
            </div>

            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-purple-700" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white p-2 rounded-full shadow-sm"
              aria-label="WhatsApp Directo"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 focus:outline-none"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg text-xs font-semibold text-purple-900 border border-purple-200">
            <MapPin className="w-4 h-4 text-purple-600" />
            <span>Consultorio Presencial en Quito & Atención Online</span>
          </div>
          <div className="grid gap-2 pt-2">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium text-sm"
            >
              Servicios Nutricionales
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-purple-900 bg-purple-100/70 hover:bg-purple-200 rounded-md font-bold text-sm flex items-center justify-between"
            >
              <span>Calculadora de Calorías y Metas</span>
              <Sparkles className="w-4 h-4 text-purple-700" />
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium text-sm"
            >
              Resultados & Testimonios Reales
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium text-sm"
            >
              Metodología en 4 Pasos
            </a>
            <a
              href="#sobre-mi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium text-sm"
            >
              Sobre la Dra. Geovanna
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-md font-medium text-sm"
            >
              Ubicación y Preguntas
            </a>
          </div>

          <div className="pt-2">
            <a
              href={DOCTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-400 text-purple-700" />
              <span>Agendar Consulta por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
