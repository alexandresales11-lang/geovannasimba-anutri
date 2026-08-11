import React from 'react';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { MapPin, Smartphone, Award, HeartPulse, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Presencial en Quito',
      desc: 'Av. Los Shyris y Naciones Unidas',
    },
    {
      icon: Smartphone,
      title: 'Atención Online HD',
      desc: 'Todo Ecuador y el Exterior',
    },
    {
      icon: HeartPulse,
      title: 'InBody Medical',
      desc: 'Bioimpedancia de alta precisión',
    },
    {
      icon: Award,
      title: 'Certificación ISAK 1',
      desc: 'Antropometría médica avalada',
    },
  ];

  return (
    <section className="bg-purple-900 text-white py-8 border-y border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-purple-800/80">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 ${
                  idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="p-3 bg-purple-800/80 rounded-2xl text-purple-200 border border-purple-700/60 shrink-0">
                  <Icon className="w-5 h-5 text-purple-200" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">{item.title}</h3>
                  <p className="text-xs text-purple-200 font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
