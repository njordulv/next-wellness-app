interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: string[]
}

const quizPagesEs: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Cuestionario de Objetivos de Manejo de Peso',
    description: 'Elige tu objetivo para el manejo del peso.',
    heading: '¿Cuál es tu objetivo respecto al manejo del peso?',
    options: [
      'Pérdida de peso',
      'Ganancia muscular',
      'Mantener el peso actual',
      'Mejorar la salud en general',
    ],
  },
  {
    slug: 'full-meals',
    title: 'Cuestionario de Comidas Diarias',
    description:
      'Selecciona el número de comidas completas que tienes en un día.',
    heading: '¿Cuántas comidas completas tienes durante el día?',
    options: [
      'Tres veces al día',
      'Más de tres veces al día',
      'Una vez al día',
      'Menos de una vez al día',
    ],
  },
  {
    slug: 'most-foods',
    title: 'Cuestionario de Alimentos Favoritos',
    description: 'Selecciona tus tipos de alimentos favoritos.',
    heading: '¿Qué tipo de alimentos disfrutas más?',
    options: ['Verduras', 'Frutas', 'Carne', 'Productos lácteos', 'Granos'],
  },
  {
    slug: 'least-foods',
    title: 'Cuestionario de Alimentos Menos Favoritos',
    description: 'Elige los tipos de alimentos que menos disfrutas.',
    heading: '¿Qué tipo de alimentos disfrutas menos?',
    options: [
      'Comida rápida',
      'Dulces',
      'Bebidas carbonatadas',
      'Snacks altos en calorías',
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Cuestionario de Plan de Pérdida',
    description: 'Selecciona una de estas condiciones médicas',
    heading:
      '¿Tienes alguna condición médica o restricciones dietéticas que puedan afectar tu plan de pérdida de peso?',
    options: [
      'No',
      'Diabetes',
      'Problemas de tiroides',
      'Problemas cardiacos',
      'Problemas renales',
    ],
  },
  {
    slug: 'diet',
    title: 'Cuestionario de Dieta',
    description: 'Selecciona tus métodos de pérdida de peso o dietas',
    heading:
      '¿Qué métodos de pérdida de peso o dietas has probado anteriormente?',
    options: [
      'Dieta cetogénica',
      'Dieta baja en carbohidratos',
      'Ayuno con agua',
      'Vegetarianismo',
    ],
  },
  {
    slug: 'activity',
    title: 'Cuestionario de Actividad',
    description: 'Selecciona tu actividad actual',
    heading: '¿Actualmente haces ejercicio o eres físicamente activo?',
    options: ['Sí, regularmente', 'Ocasionalmente', 'No, en absoluto'],
  },
  {
    slug: 'handling-stress',
    title: 'Cuestionario de Alimentación Emocional',
    description: 'Selecciona tu forma de comer emocional',
    heading: '¿Cómo manejas el estrés y la alimentación emocional?',
    options: [
      'Como más cuando estoy estresado',
      'Como menos cuando estoy estresado',
      'El estrés no afecta mi forma de comer',
    ],
  },
  {
    slug: 'level-activity',
    title: 'Cuestionario del Nivel de Actividad Física',
    description: 'Selecciona tu nivel de actividad física',
    heading: '¿Cuál es tu nivel de actividad física?',
    options: [
      'Sedentario (poco o ningún ejercicio)',
      'Ligeramente activo (ejercicio ligero o deportes 1-3 días a la semana)',
      'Moderadamente activo (ejercicio moderado o deportes 3-5 días a la semana)',
      'Muy activo (ejercicio intenso o deportes 6-7 días a la semana)',
      'Extremadamente activo (ejercicio intenso o entrenamiento dos veces al día)',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Cuestionario de Motivación',
    description: 'Selecciona tu motivación',
    heading:
      '¿Qué tan motivado estás para hacer cambios en tu dieta y estilo de vida para el manejo del peso?',
    options: [
      'No estoy motivado en absoluto',
      'Ligeramente motivado',
      'Moderadamente motivado',
      'Altamente motivado',
      'Extremadamente motivado',
    ],
  },
  {
    slug: 'height',
    title: 'Cuestionario de Altura',
    description: 'Ingresa tu altura en el campo dado',
    heading: 'Ingresa tu altura',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Cuestionario de Peso',
    description: 'Ingresa tu peso en el campo dado',
    heading: 'Ingresa tu peso',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Cuestionario de Peso Objetivo',
    description: 'Especifica tu peso objetivo para el manejo del peso',
    heading: '¿Cuál es tu peso objetivo?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Resultados del Cuestionario',
    description:
      'Vista del resumen de tu bienestar general basado en tus respuestas.',
    heading: 'Un resumen de tu bienestar general',
    options: [],
  },
]

export default quizPagesEs
