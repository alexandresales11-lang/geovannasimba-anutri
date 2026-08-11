import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { DOCTOR_INFO } from '../data/nutritionistData';
import { CalculatorInput, CalculatorResult } from '../types';
import {
  Calculator as CalcIcon,
  Sparkles,
  Flame,
  Activity,
  ArrowRight,
  MessageCircle,
  RotateCcw,
  Scale,
  Check,
  TrendingDown,
  Dumbbell,
  Heart,
} from 'lucide-react';

export const Calculator: React.FC = () => {
  const [input, setInput] = useState<CalculatorInput>({
    gender: 'female',
    age: 30,
    weightKg: 65,
    heightCm: 160,
    activityLevel: 'moderate',
    goal: 'fat_loss',
  });

  const [hasCalculated, setHasCalculated] = useState(false);

  // Compute calculated metrics
  const result: CalculatorResult = useMemo(() => {
    const { gender, age, weightKg, heightCm, activityLevel, goal } = input;

    // Mifflin-St Jeor formula for BMR
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'female') {
      bmr -= 161;
    } else {
      bmr += 5;
    }

    // Activity Multipliers
    const actMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      intense: 1.725,
      extreme: 1.9,
    };

    const tdee = Math.round(bmr * actMultipliers[activityLevel]);

    // Target Calories & Macros based on goal
    let targetCalories = tdee;
    let proteinPerKg = 1.8;

    if (goal === 'fat_loss') {
      targetCalories = Math.round(tdee * 0.8); // 20% deficit
      proteinPerKg = 2.0;
    } else if (goal === 'recomposition') {
      targetCalories = Math.round(tdee * 0.9); // 10% deficit
      proteinPerKg = 2.2;
    } else if (goal === 'muscle_gain') {
      targetCalories = Math.round(tdee * 1.12); // 12% surplus
      proteinPerKg = 2.0;
    } else {
      targetCalories = tdee;
      proteinPerKg = 1.8;
    }

    const proteinGrams = Math.round(weightKg * proteinPerKg);
    const proteinCalories = proteinGrams * 4;

    const fatsCalories = targetCalories * 0.28;
    const fatsGrams = Math.round(fatsCalories / 9);

    const remainingCalories = targetCalories - proteinCalories - fatsCalories;
    const carbsGrams = Math.max(50, Math.round(remainingCalories / 4));

    // BMI
    const heightM = heightCm / 100;
    const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

    let bmiCategory = 'Peso Saludable';
    let bmiColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';

    if (bmi < 18.5) {
      bmiCategory = 'Bajo Peso';
      bmiColor = 'text-amber-600 bg-amber-50 border-amber-200';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Sobrepeso Ligero';
      bmiColor = 'text-amber-600 bg-amber-50 border-amber-200';
    } else if (bmi >= 30) {
      bmiCategory = 'Obesidad (Requiere Evaluación Clínica)';
      bmiColor = 'text-rose-600 bg-rose-50 border-rose-200';
    }

    let recommendation = '';
    if (goal === 'fat_loss') {
      recommendation = `Para perder grasa corporal de forma segura en Quito, necesitas un déficit calórico de approx. ${targetCalories} kcal/día, priorizando ${proteinGrams}g de proteína para proteger tu masa muscular.`;
    } else if (goal === 'recomposition') {
      recommendation = `La recomposición exige precisión: ${targetCalories} kcal/día combinando entrenamiento de fuerza y ${proteinGrams}g de proteína para quemar grasa y tonificar simultáneamente.`;
    } else if (goal === 'muscle_gain') {
      recommendation = `Para aumentar músculo magro sin acumular grasa extra, tu meta energética es de ${targetCalories} kcal/día con superávit controlado.`;
    } else {
      recommendation = `Tus calorías de mantenimiento son ${targetCalories} kcal/día para preservar tu peso actual y mantener tu metabolismo en óptimo estado.`;
    }

    return {
      bmi,
      bmiCategory,
      bmiColor,
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinGrams,
      carbsGrams,
      fatsGrams,
      recommendation,
    };
  }, [input]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCalculated(true);

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#7C3AED', '#9333EA', '#16A34A', '#EAB308'],
      });
    } catch {
      // Ignore if confetti fails
    }
  };

  const generateWhatsAppMessage = () => {
    const goalText =
      input.goal === 'fat_loss'
        ? 'Pérdida de Grasa'
        : input.goal === 'recomposition'
        ? 'Recomposición Corporal'
        : input.goal === 'muscle_gain'
        ? 'Aumento de Músculo'
        : 'Mantenimiento y Salud';

    const text = `Hola Dra. Geovanna! 👋 Usé la calculadora de su sitio web:\n\n` +
      `• *Edad:* ${input.age} años\n` +
      `• *Peso:* ${input.weightKg} kg | *Estatura:* ${input.heightCm} cm\n` +
      `• *IMC:* ${result.bmi} (${result.bmiCategory})\n` +
      `• *Objetivo:* ${goalText}\n` +
      `• *Calorías Estimadas:* ${result.targetCalories} kcal/día (${result.proteinGrams}g Proteína, ${result.carbsGrams}g Carbos, ${result.fatsGrams}g Grasas)\n\n` +
      `Me gustaría agendar una cita para diseñar mi plan nutricional personalizado.`;

    return `https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-b from-purple-50/40 via-white to-purple-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-bold text-xs uppercase tracking-wider">
            <CalcIcon className="w-4 h-4 text-purple-700" />
            <span>Herramienta Interactiva Gratuita</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Calculadora de Calorías, IMC y Macros
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Descubre cuánta energía y qué macronutrientes necesita tu cuerpo hoy según tu nivel de actividad física y tus metas de peso en Quito.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Input Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-100">
            <form onSubmit={handleCalculate} className="space-y-6">
              
              {/* Gender Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Sexo Biológico
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, gender: 'female' }))}
                    className={`py-3 px-4 rounded-xl font-semibold text-sm border flex items-center justify-center gap-2 transition-all ${
                      input.gender === 'female'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>Femenino</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, gender: 'male' }))}
                    className={`py-3 px-4 rounded-xl font-semibold text-sm border flex items-center justify-center gap-2 transition-all ${
                      input.gender === 'male'
                        ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>Masculino</span>
                  </button>
                </div>
              </div>

              {/* Age, Weight, Height inputs */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Edad (años)
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="95"
                    value={input.age}
                    onChange={(e) => setInput((prev) => ({ ...prev, age: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="220"
                    step="0.5"
                    value={input.weightKg}
                    onChange={(e) => setInput((prev) => ({ ...prev, weightKg: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Estatura (cm)
                  </label>
                  <input
                    type="number"
                    min="120"
                    max="220"
                    value={input.heightCm}
                    onChange={(e) => setInput((prev) => ({ ...prev, heightCm: Number(e.target.value) }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Nivel de Actividad Física Habituada
                </label>
                <select
                  value={input.activityLevel}
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      activityLevel: e.target.value as CalculatorInput['activityLevel'],
                    }))
                  }
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                >
                  <option value="sedentary">Sedentario (Trabajo de escritorio / Pocos pasos)</option>
                  <option value="light">Ligero (Ejercicio 1-2 veces por semana)</option>
                  <option value="moderate">Moderado (Ejercicio físico 3-4 veces por semana)</option>
                  <option value="intense">Intenso (Entrenamiento fuerte 5-6 días por semana)</option>
                  <option value="extreme">Atleta / Trabajo Físico Exigente Diaria</option>
                </select>
              </div>

              {/* Goal Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Tu Objetivo Principal Actual
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, goal: 'fat_loss' }))}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      input.goal === 'fat_loss'
                        ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold ring-1 ring-purple-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Pérdida de Grasa</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-normal block mt-1">
                      Bajar medidas sin perder músculo
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, goal: 'recomposition' }))}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      input.goal === 'recomposition'
                        ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold ring-1 ring-purple-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Dumbbell className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Recomposición</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-normal block mt-1">
                      Quemar grasa y tonificar
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, goal: 'muscle_gain' }))}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      input.goal === 'muscle_gain'
                        ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold ring-1 ring-purple-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <TrendingDown className="w-4 h-4 text-emerald-600 shrink-0 rotate-180" />
                      <span>Aumento Muscular</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-normal block mt-1">
                      Ganar masa magra limpia
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInput((prev) => ({ ...prev, goal: 'maintenance' }))}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      input.goal === 'maintenance'
                        ? 'bg-purple-50 border-purple-600 text-purple-950 font-bold ring-1 ring-purple-600'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Mantenimiento</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-normal block mt-1">
                      Salud y bienestar general
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-purple-700/20 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Calcular Mis Requerimientos</span>
              </button>
            </form>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">
                    GS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-serif">
                      Tus Resultados Estimados
                    </h3>
                    <p className="text-xs text-slate-500">
                      Basado en fórmulas metabólicas de precisión
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                  Resultado Listo
                </span>
              </div>

              {/* Top Summary Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                
                {/* Target Calories Big Box */}
                <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-purple-900 to-purple-800 text-white p-4 rounded-2xl shadow-md">
                  <p className="text-xs font-semibold text-purple-200 uppercase tracking-wider">
                    Meta Calórica Diaria
                  </p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-extrabold tracking-tight">
                      {result.targetCalories}
                    </span>
                    <span className="text-sm font-medium text-purple-200">kcal/día</span>
                  </div>
                  <p className="text-[11px] text-purple-200/80 mt-1">
                    TDEE Estimado: {result.tdee} kcal
                  </p>
                </div>

                {/* BMI Card */}
                <div className="col-span-2 sm:col-span-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Índice de Masa (IMC)
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-slate-900">{result.bmi}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${result.bmiColor}`}>
                      {result.bmiCategory}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Tasa Metabólica Basal: {result.bmr} kcal
                  </p>
                </div>

              </div>

              {/* Macro Distribution Bars */}
              <div className="mt-6 space-y-3.5">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                  <span>Distribución Sugerida de Macronutrientes</span>
                  <span className="text-purple-700 font-semibold text-[11px]">Personalizable en Cita</span>
                </h4>

                {/* Protein Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Proteína (Construcción & Saciedad)</span>
                    <span className="text-purple-900 font-bold">{result.proteinGrams}g ({result.proteinGrams * 4} kcal)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-purple-600 h-3 rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>

                {/* Carbs Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Carbohidratos (Energía para tu día en Quito)</span>
                    <span className="text-purple-900 font-bold">{result.carbsGrams}g ({result.carbsGrams * 4} kcal)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-purple-400 h-3 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>

                {/* Fats Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Grasas Saludables (Hormonas y Digestión)</span>
                    <span className="text-purple-900 font-bold">{result.fatsGrams}g ({result.fatsGrams * 9} kcal)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-amber-400 h-3 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
              </div>

              {/* Doctor's Recommendation Note */}
              <div className="mt-6 p-4 rounded-2xl bg-purple-50 border border-purple-200/80 text-xs text-purple-950 leading-relaxed space-y-1">
                <p className="font-bold flex items-center gap-1 text-purple-900">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Comentario Nutricional de la Dra. Geovanna:</span>
                </p>
                <p className="text-slate-700 font-medium">{result.recommendation}</p>
              </div>

            </div>

            {/* High-Conversion WhatsApp CTA */}
            <div className="mt-6 pt-4 border-t border-purple-100">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-5 rounded-xl shadow-lg transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Enviar este Resultado por WhatsApp para mi Plan</span>
              </a>
              <p className="text-[11px] text-center text-slate-500 font-medium mt-2">
                📲 Recibirás respuesta directa de la Dra. Geovanna Simbaña en Quito
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
