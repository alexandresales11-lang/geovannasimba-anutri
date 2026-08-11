import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Video,
  CheckCircle,
  Sparkles,
  Phone,
  Mail,
  Send,
} from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [modality, setModality] = useState<'presencial' | 'online'>('presencial');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Pérdida de Grasa y Peso');
  const [preferredDay, setPreferredDay] = useState('Esta semana');
  const [timeSlot, setTimeSlot] = useState('Mañana (09:00 - 12:00)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `Hola Dra. Geovanna Simbaña! 👋 Quisiera solicitar una cita nutricional:\n\n` +
      `• *Paciente:* ${patientName || 'No especificado'}\n` +
      `• *Teléfono:* ${phone || 'No especificado'}\n` +
      `• *Modalidad:* ${modality === 'presencial' ? 'Presencial (La Carolina, Quito)' : 'Online (Videollamada HD)'}\n` +
      `• *Objetivo:* ${goal}\n` +
      `• *Preferencia:* ${preferredDay} en horario ${timeSlot}\n\n` +
      `¿Tendría disponibilidad para agendarme? ¡Muchas gracias!`;

    const url = `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-purple-50/60 via-white to-purple-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Details & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-purple-700" />
              <span>Consultorio y Ubicación en Quito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
              Agenda tu Valoración Nutricional Hoy
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Atención médica nutricional con calidez y rigor científico. Elige entre consulta presencial en nuestro moderno consultorio en La Carolina o consulta online.
            </p>

            {/* Address Box */}
            <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-md space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Ubicación Presencial</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{DOCTOR_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Horarios de Atención</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{DOCTOR_INFO.consultationHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">WhatsApp & Llamadas</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{DOCTOR_INFO.phone}</p>
                </div>
              </div>
            </div>

            {/* Google My Business Card Button */}
            <a
              href={DOCTOR_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between p-4 bg-purple-900 text-white rounded-2xl shadow-lg hover:bg-purple-950 transition-all text-xs font-semibold"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Ver mapa de cómo llegar en Google Maps</span>
              </div>
              <span className="underline text-purple-200">Abrir Mapa</span>
            </a>
          </div>

          {/* Right Column Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-100">
            <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
              Solicitud Directa de Cita
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Completa los datos y presiona enviar para abrir WhatsApp con tu solicitud lista.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Modality Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Modalidad de Consulta
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setModality('presencial')}
                    className={`p-3.5 rounded-xl font-bold text-xs sm:text-sm border flex items-center justify-center gap-2 transition-all ${
                      modality === 'presencial'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Presencial en Quito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setModality('online')}
                    className={`p-3.5 rounded-xl font-bold text-xs sm:text-sm border flex items-center justify-center gap-2 transition-all ${
                      modality === 'online'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Consulta Online</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: María José Torres"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 0991234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Objetivo Principal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                >
                  <option value="Pérdida de Grasa y Peso">Pérdida de Grasa y Peso</option>
                  <option value="Recomposición Corporal y Tonificación">Recomposición Corporal y Tonificación</option>
                  <option value="Nutrición Clínica (Diabetes / SOP / Digestión)">Nutrición Clínica (Diabetes / SOP / Digestión)</option>
                  <option value="Nutrición Deportiva / Aumento Muscular">Nutrición Deportiva / Aumento Muscular</option>
                  <option value="Embarazo o Lactancia">Embarazo o Lactancia</option>
                </select>
              </div>

              {/* Day & Time Slot Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Día de Preferencia
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  >
                    <option value="Lo antes posible (Esta semana)">Lo antes posible (Esta semana)</option>
                    <option value="Próxima semana">Próxima semana</option>
                    <option value="Un día Sábado (Mañana)">Un día Sábado (Mañana)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Horario Preferido
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                  >
                    <option value="Mañana (09:00 - 12:00)">Mañana (09:00 - 12:00)</option>
                    <option value="Mediodía (12:00 - 15:00)">Mediodía (12:00 - 15:00)</option>
                    <option value="Tarde (15:00 - 18:30)">Tarde (15:00 - 18:30)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Confirmar y Enviar a WhatsApp Directo</span>
              </button>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                🔒 Tus datos son 100% confidenciales y protegidos bajo secreto médico nutricional.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
