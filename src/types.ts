export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  benefits: string[];
  popular?: boolean;
  idealFor: string;
}

export interface BeforeAfterCase {
  id: string;
  patientName: string;
  patientAge: number;
  goal: string;
  duration: string;
  weightLoss: string;
  bodyFatReduction: string;
  muscleGain?: string;
  story: string;
  beforeImg: string;
  afterImg: string;
  verified: boolean;
}

export interface SocialScreenshot {
  id: string;
  type: 'whatsapp' | 'instagram';
  patientName: string;
  timeAgo: string;
  message: string;
  reply: string;
  avatarUrl: string;
  tag: string;
}

export interface AudioTestimonial {
  id: string;
  patientName: string;
  location: string;
  duration: string;
  audioUrl?: string; // simulated waveform
  transcript: string;
  date: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  timeAgo: string;
  comment: string;
  authorPhoto: string;
}

export interface CalculatorInput {
  gender: 'female' | 'male';
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'intense' | 'extreme';
  goal: 'fat_loss' | 'recomposition' | 'muscle_gain' | 'maintenance';
}

export interface CalculatorResult {
  bmi: number;
  bmiCategory: string;
  bmiColor: string;
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatsGrams: number;
  recommendation: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'consultas' | 'planes' | 'ubicacion' | 'pagos';
}
