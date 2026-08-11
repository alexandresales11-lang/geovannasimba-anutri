import React, { useState } from 'react';
import {
  BEFORE_AFTER_CASES,
  SOCIAL_SCREENSHOTS,
  AUDIO_TESTIMONIALS,
  GOOGLE_REVIEWS,
  DOCTOR_INFO,
} from '../data/nutritionistData';
import {
  Star,
  CheckCircle,
  Play,
  Pause,
  MessageSquare,
  Instagram,
  MapPin,
  ExternalLink,
  Volume2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'chats' | 'audios' | 'google'>('cases');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const toggleAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Evidencia y Resultados Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Transformaciones y Testimonios
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Historias reales de personas en Quito y Ecuador que lograron sus metas de salud, peso y rendimiento junto a la Dra. Geovanna Simbaña.
          </p>

          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'cases'
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
              }`}
            >
              📸 Casos Antes / Después
            </button>

            <button
              onClick={() => setActiveTab('chats')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'chats'
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
              }`}
            >
              💬 WhatsApp & Instagram Direct
            </button>

            <button
              onClick={() => setActiveTab('audios')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'audios'
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
              }`}
            >
              🎙️ Notas de Voz / Audios
            </button>

            <button
              onClick={() => setActiveTab('google')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                activeTab === 'google'
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
              }`}
            >
              ⭐ Google Maps (4.9 ★)
            </button>
          </div>
        </div>

        {/* TAB 1: BEFORE & AFTER CASES */}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEFORE_AFTER_CASES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Comparison Box */}
                  <div className="relative grid grid-cols-2 bg-slate-900 gap-0.5">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.beforeImg}
                        alt="Antes"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        ANTES
                      </span>
                    </div>

                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.afterImg}
                        alt="Después"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-purple-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        DESPUÉS
                      </span>
                    </div>
                  </div>

                  {/* Patient Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base font-serif">
                          {item.patientName}, {item.patientAge} años
                        </h3>
                        <p className="text-xs text-purple-700 font-medium">{item.goal}</p>
                      </div>

                      <span className="text-[11px] font-bold bg-purple-100 text-purple-900 px-2.5 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>

                    {/* Metrics Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-md">
                        📉 {item.weightLoss}
                      </span>
                      <span className="text-xs font-bold bg-purple-50 text-purple-900 border border-purple-200 px-2.5 py-1 rounded-md">
                        🔥 {item.bodyFatReduction}
                      </span>
                      {item.muscleGain && (
                        <span className="text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md">
                          💪 {item.muscleGain}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-2 italic">
                      "{item.story}"
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Caso Verificado InBody Quito
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: WHATSAPP & INSTAGRAM CHATS */}
        {activeTab === 'chats' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_SCREENSHOTS.map((chat) => (
              <div
                key={chat.id}
                className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xl space-y-4"
              >
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={chat.avatarUrl}
                      alt={chat.patientName}
                      className="w-10 h-10 rounded-full object-cover border border-purple-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900">{chat.patientName}</p>
                      <p className="text-[10px] text-slate-400">{chat.timeAgo}</p>
                    </div>
                  </div>

                  {chat.type === 'whatsapp' ? (
                    <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                      <MessageSquare className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="p-1.5 bg-pink-100 text-pink-700 rounded-lg">
                      <Instagram className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* Simulated Chat Bubbles */}
                <div className="space-y-3 font-sans text-xs">
                  {/* Patient incoming message */}
                  <div className="bg-slate-100 p-3.5 rounded-2xl rounded-tl-none text-slate-800 leading-relaxed">
                    {chat.message}
                  </div>

                  {/* Doctor response message */}
                  <div className="bg-purple-700 text-white p-3.5 rounded-2xl rounded-tr-none ml-4 leading-relaxed shadow-sm">
                    {chat.reply}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block text-[10px] font-bold bg-purple-50 text-purple-900 px-2.5 py-1 rounded-full border border-purple-200">
                    {chat.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: AUDIO TESTIMONIALS */}
        {activeTab === 'audios' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {AUDIO_TESTIMONIALS.map((audio) => {
              const isPlaying = playingAudioId === audio.id;

              return (
                <div
                  key={audio.id}
                  className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm font-serif">
                        {audio.patientName}
                      </h3>
                      <p className="text-xs text-purple-700 font-medium">{audio.location}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{audio.date}</span>
                  </div>

                  {/* Audio Player Simulated Component */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <button
                      onClick={() => toggleAudio(audio.id)}
                      className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-800 text-white flex items-center justify-center shadow-md transition-all shrink-0"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>

                    {/* Waveform graphic */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500">
                        <span>Nota de voz WhatsApp</span>
                        <span>{audio.duration}</span>
                      </div>

                      {/* Animated wave bars */}
                      <div className="flex items-center gap-1 h-6">
                        {[40, 70, 30, 90, 60, 100, 40, 80, 50, 90, 30, 70, 100, 60, 40, 80].map(
                          (h, i) => (
                            <div
                              key={i}
                              className={`flex-1 rounded-full transition-all ${
                                isPlaying ? 'bg-purple-600 animate-pulse' : 'bg-slate-300'
                              }`}
                              style={{ height: `${h}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Transcript */}
                  <div className="text-xs text-slate-600 bg-purple-50/60 p-3.5 rounded-xl border border-purple-100 leading-relaxed font-normal">
                    <p className="font-semibold text-purple-900 mb-1">Transcripción del Audio:</p>
                    <p className="italic">{audio.transcript}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 4: GOOGLE REVIEWS */}
        {activeTab === 'google' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GOOGLE_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-6 border border-purple-100 shadow-xl space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.authorPhoto}
                          alt={rev.authorName}
                          className="w-10 h-10 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-bold text-slate-900">{rev.authorName}</p>
                          <p className="text-[10px] text-slate-400">{rev.timeAgo}</p>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-purple-600" /> Reseña en Quito
                    </span>
                    <span className="text-purple-700">Verificada</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Google Maps Link Button */}
            <div className="text-center pt-2">
              <a
                href={DOCTOR_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold px-6 py-3 rounded-full border border-slate-300 shadow-sm text-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-purple-600" />
                <span>Ver todas las reseñas en Google Maps (Quito)</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
