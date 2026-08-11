import {
  Service,
  BeforeAfterCase,
  SocialScreenshot,
  AudioTestimonial,
  GoogleReview,
  FAQItem,
} from '../types';

export const DOCTOR_INFO = {
  name: 'Dra. Geovanna Simbaña',
  title: 'Nutricionista Clínica & Deportiva',
  credentials: 'MSc. Nutrición Clínica | Antropometrista ISAK Nivel 1 | Especialista en Recomposición Corporal',
  city: 'Quito, Ecuador',
  phone: '+593 99 290 3053',
  phoneClean: '593992903053',
  whatsappUrl: 'https://wa.me/593992903053?text=Hola%20Dra.%20Geovanna,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20nutricional',
  instagram: 'nutri.geovanna1',
  instagramUrl: 'https://instagram.com/nutri.geovanna1',
  googleMapsUrl: 'https://maps.app.goo.gl/Aw1Htxo93LMiP3aV8',
  logoUrl: 'https://i.imgur.com/6lVHRiB.png',
  address: 'Av. de los Shyris N36-120 y Naciones Unidas, Sector La Carolina, Quito - Ecuador',
  consultationHours: 'Lunes a Viernes: 08:30 - 18:30 | Sábados: 09:00 - 13:00',
  stats: [
    { value: '+1,200', label: 'Pacientes Transformados' },
    { value: '4.9 ★', label: 'Calificación en Google Maps' },
    { value: '100%', label: 'Planes Personalizados Sin Dietas Extremas' },
    { value: 'Quito', label: 'Consulta Presencial y Online' },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'perdidagrasa',
    title: 'Control de Peso y Recomposición Corporal',
    subtitle: 'Reduce grasa corporal manteniendo o ganando masa muscular',
    description: 'Diseñado para personas que buscan perder grasa de forma definitiva sin efecto rebote, disfrutando de la gastronomía ecuatoriana sin culpas.',
    iconName: 'Flame',
    popular: true,
    benefits: [
      'Evaluación de composición corporal InBody / Antropometría ISAK 1',
      'Plan nutricional flexible adaptado a tus horarios y gustos',
      'Estrategias para acelerar el metabolismo y controlar la ansiedad',
      'Soporte directo por WhatsApp para dudas diarias',
    ],
    idealFor: 'Quienes han intentado dietas restrictivas y quieren resultados duraderos en Quito.',
  },
  {
    id: 'nutricionclinica',
    title: 'Nutrición Clínica Integral',
    subtitle: 'Manejo de Diabetes, Hígado Graso, SOP, Hipertensión y Digestión',
    description: 'Tratamiento nutricional basado en evidencia científica para controlar patologías, optimizar exámenes de laboratorio y mejorar tu calidad de vida.',
    iconName: 'HeartPulse',
    benefits: [
      'Interpretación clínica de exámenes de sangre y perfil lipídico',
      'Diseño de planes antiinflamatorios y de bajo índice glucémico',
      'Mejora de salud digestiva (colon irritable, gastritis, estreñimiento)',
      'Coordinación con tu médico tratante en Quito si se requiere',
    ],
    idealFor: 'Pacientes con diagnóstico de resistencia a la insulina, hígado graso o problemas digestivos.',
  },
  {
    id: 'nutriciondeportiva',
    title: 'Nutrición Deportiva y Rendimiento',
    subtitle: 'Optimización de energía, hipertrofia y recuperación',
    description: 'Aumenta tu fuerza, mejora tus tiempos y potencia la ganancia muscular con estrategias nutricionales y suplementación basada en ciencia.',
    iconName: 'Dumbbell',
    benefits: [
      'Cálculo preciso de requerimientos energéticos según tu disciplina',
      'Estrategia de nutrición peri-entrenamiento (antes, durante y después)',
      'Asesoría en suplementación segura y efectiva (Creatina, Proteína, etc.)',
      'Optimización de peso y composición corporal para competencia',
    ],
    idealFor: 'Deportistas de gimnasio, runners, crossfitters y atletas en Quito.',
  },
  {
    id: 'nutriciononline',
    title: 'Asesoría Nutricional Online',
    subtitle: 'Atención personalizada desde cualquier lugar de Ecuador o el mundo',
    description: 'La misma atención profesional de la consulta presencial en Quito, pero desde la comodidad de tu hogar o lugar de trabajo.',
    iconName: 'Video',
    benefits: [
      'Videollamada personalizada de 45 a 60 minutos',
      'Guía paso a paso para tomar tus medidas antropométricas en casa',
      'Plataforma digital para revisar tus planes y recetarios',
      'Acompañamiento semanal continuo por WhatsApp',
    ],
    idealFor: 'Personas fuera de Quito o con agendas apretadas que valoran la flexibilidad.',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    patientName: 'Carolina M.',
    patientAge: 32,
    goal: 'Reducción de Grasa Abdominal y Energía',
    duration: '3 Meses',
    weightLoss: '-9.5 kg de grasa',
    bodyFatReduction: '-7.2% Grasa Corporal',
    muscleGain: '+1.1 kg Músculo',
    story: 'Llegué con mucha frustración por dietas restrictivas. La Dra. Geovanna me enseñó a comer de todo, equilibrando mi comida ecuatoriana favorita. Hoy tengo más energía que nunca y logré mi peso soñado.',
    beforeImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 'case-2',
    patientName: 'Esteban R.',
    patientAge: 29,
    goal: 'Recomposición Corporal y Rendimiento',
    duration: '4 Meses',
    weightLoss: '-6.0 kg Grasa',
    bodyFatReduction: '-5.8% Grasa',
    muscleGain: '+2.8 kg Músculo',
    story: 'Entrenaba duro en el gimnasio en Quito pero no veía definición. Ajustamos la proteína y los carbohidratos alrededor del entrenamiento. Los cambios se notaron desde la tercera semana.',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
  {
    id: 'case-3',
    patientName: 'Verónica K.',
    patientAge: 41,
    goal: 'Control de Resistencia a la Insulina',
    duration: '5 Meses',
    weightLoss: '-12.2 kg Total',
    bodyFatReduction: '-8.5% Grasa',
    story: 'Mis exámenes salieron alterados y mi médico me recomendó a la Dra. Geovanna. En 5 meses reduje mi glucosa e insulina a valores normales sin medicamentos. ¡Le estoy infinitamente agradecida!',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    afterImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    verified: true,
  },
];

export const SOCIAL_SCREENSHOTS: SocialScreenshot[] = [
  {
    id: 'wa-1',
    type: 'whatsapp',
    patientName: 'Andrea V. (Quito)',
    timeAgo: 'Ayer, 10:14 AM',
    message: 'Hola Doc Geovanna! 👋 Le cuento que hoy me pesé en la mañana y bajé 1.8 kg esta semana! Y lo mejor es que no me dio nada de hambre en la tarde. ¡El menú con bolón al horno estuvo 10/10! 🔥',
    reply: '¡Súper Andrea! 🎉 Me alegro muchísimo. Recuerda que no se trata de pasar hambre sino de saber combinar los macronutrientes. ¡A seguir con todo esta semana! 💪✨',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    tag: 'Pérdida de Peso sin pasar hambre',
  },
  {
    id: 'wa-2',
    type: 'whatsapp',
    patientName: 'Mateo S. (Cumbayá)',
    timeAgo: 'Hace 2 días',
    message: 'Dra! Le muestro mis nuevos exámenes de laboratorio. El colesterol bajó de 240 a 185 y los triglicéridos están en rango normal. ¡Mi cardiólogo se quedó sorprendido!',
    reply: '¡Excelente noticia Mateo! 👏 Ese es el resultado del compromiso con tu salud y tu alimentación antiinflamatoria. ¡Nos vemos en el control presencial!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    tag: 'Salud Clínica y Laboratorios',
  },
  {
    id: 'ig-1',
    type: 'instagram',
    patientName: '@gabriela_nutrition_journey',
    timeAgo: 'Hace 4 días',
    message: 'Doc @nutri.geovanna1 de verdad eres la mejor nutricionista de Quito! Llevo 8 semanas y ya me entra la ropa que no me quedaba hace 3 años. Gracias por ser tan empática siempre ❤️',
    reply: '¡Awww Gabi bella! Me llena el corazón leer esto. ¡Tú has hecho un trabajo increíble manteniendo la constancia! 🥰🙌',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    tag: 'Testimonio Instagram Direct',
  },
];

export const AUDIO_TESTIMONIALS: AudioTestimonial[] = [
  {
    id: 'audio-1',
    patientName: 'María Fernanda C.',
    location: 'La Carolina, Quito',
    duration: '0:42',
    date: 'Hace 3 días',
    transcript: '“Hola Dra. Geovanna, le quería mandar este audio para darle las gracias de corazón. En el control con el InBody vi que bajé 3% de grasa y subí masa muscular. Me encantó que en mi plan incluyó comida típica como el seco de pollo equilibrado y chochos. ¡Se siente súper fácil de seguir!”',
  },
  {
    id: 'audio-2',
    patientName: 'Francisco P.',
    location: 'Quito Norte',
    duration: '0:35',
    date: 'Hace 1 semana',
    transcript: '“Buenas tardes Dra. Geovanna. Solo quería decirle que corrí la carrera de 10K este fin de semana en Quito y no tuve nada de fatiga ni calambres. La estrategia de carbohidratos que me dio funcionó a la perfección. ¡Nos vemos el martes!”',
  },
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'g-1',
    authorName: 'Patricio Andrade',
    rating: 5,
    timeAgo: 'Hace 2 semanas',
    comment: 'Excelente profesional en Quito. La Dra. Geovanna te escucha con mucha paciencia, explica de forma súper clara la composición corporal y no te manda dietas imposibles. Muy recomendada.',
    authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
  },
  {
    id: 'g-2',
    authorName: 'Johanna Cevallos',
    rating: 5,
    timeAgo: 'Hace 1 mes',
    comment: 'La mejor decisión que tomé este año. El examen con la báscula InBody en el consultorio de La Carolina es súper completo. En 2 meses he bajado medidas de cintura notablemente.',
    authorPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
  },
  {
    id: 'g-3',
    authorName: 'David Paredes',
    rating: 5,
    timeAgo: 'Hace 1 mes',
    comment: 'Atención de primera categoría. Me ayudó muchísimo con mi hipertensión y con el entrenamiento de pesas. El seguimiento por WhatsApp da mucha tranquilidad.',
    authorPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Evaluación y Diagnóstico Inicial',
    description: 'Analizamos tus hábitos, historial clínico, gustos de comida y realizamos análisis antropométrico completo en Quito (InBody / ISAK 1).',
  },
  {
    number: '02',
    title: 'Diseño del Plan Personalizado',
    description: 'Creamos una pauta nutricional adaptada a tu presupuesto, rutina diaria y comidas que disfrutas en Ecuador, sin listas prohibidas rigurosas.',
  },
  {
    number: '03',
    title: 'Acompañamiento Continuo 24/7',
    description: 'No estás solo entre consultas. Tienes acceso directo a WhatsApp con la Dra. Geovanna para resolver dudas, compras en supermercado o salidas a restaurantes.',
  },
  {
    number: '04',
    title: 'Revisión y Consolidación de Hábitos',
    description: 'Medimos progresos reales cada 2 a 3 semanas, reajustando la estrategia para garantizar que los resultados perduren en el tiempo.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Dónde está ubicado el consultorio en Quito?',
    answer: 'El consultorio principal se encuentra en el Sector La Carolina (Av. de los Shyris N36-120 y Naciones Unidas, Edificio Centro Médico). Cuenta con parqueadero privado y fácil acceso.',
    category: 'ubicacion',
  },
  {
    question: '¿Tengo que dejar de comer arroz, verde o pan?',
    answer: '¡En absoluto! En la consulta con la Dra. Geovanna Simbaña promovemos una educación nutricional flexible. Aprenderás las porciones y momentos adecuados para disfrutar de los carbohidratos ecuatorianos que te gustan mientras logras tus objetivos.',
    category: 'planes',
  },
  {
    question: '¿Cómo funciona la consulta online para personas fuera de Quito?',
    answer: 'Se realiza mediante videollamada HD. Previamente te enviamos una guía fácil para medirte en casa. Recibes el mismo plan detallado, recetarios digitales y acompañamiento por WhatsApp.',
    category: 'consultas',
  },
  {
    question: '¿Qué métodos de pago se aceptan en Ecuador?',
    answer: 'Aceptamos transferencias bancarias directas (Banco Pichincha, Banco de Guayaquil, Produbanco), tarjetas de crédito/débito, deuna! y efectivo en la consulta presencial.',
    category: 'pagos',
  },
  {
    question: '¿Cada cuánto tiempo son los controles de progreso?',
    answer: 'Generalmente se recomiendan controles cada 15 a 21 días para evaluar la variación de grasa y músculo en el InBody y hacer ajustes progresivos.',
    category: 'consultas',
  },
];

export const SAMPLE_MEAL_PREVIEW = {
  title: 'Un Día en tu Plan Personalizado (Ejemplo)',
  description: 'Comida real, deliciosa y adaptada a la disponibilidad en Ecuador.',
  meals: [
    {
      time: 'Desayuno (08:00)',
      name: 'Omelette Nutritivo con Aguacate y Plátano Verde al Horno',
      details: '2 huevos enteros + espinaca + 1/4 de aguacate ecuatoriano + 1 verde pequeño asado + café o té verde.',
    },
    {
      time: 'Almuerzo (13:00)',
      name: 'Seco de Pollo Saludable con Arroz Integral y Ensalada Fresca',
      details: 'Pechuga a la plancha condimentada con achiote y hierbitas + 1/2 taza de arroz + ensalada abundante de tomate, pepino y limón.',
    },
    {
      time: 'Media Tarde (16:30)',
      name: 'Bowl de Yogur Griego con Quinua Pop y Frutas Locales',
      details: 'Yogur griego sin azúcar + quinua pop + frambuesas o frutillas + almendras fileteadas.',
    },
    {
      time: 'Cena (19:30)',
      name: 'Filete de Pescado a la Plancha con Vegetales Salteados y Humitas',
      details: 'Filete de corvina o dorado a las finas hierbas + salteado de zuchini y pimientos + 1 humita pequeña al vapor.',
    },
  ],
};
