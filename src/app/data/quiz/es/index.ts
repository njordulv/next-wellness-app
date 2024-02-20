import {
  GiCommercialAirplane,
  GiBasketballBall,
  GiBigDiamondRing,
  GiIsland,
  GiHouse,
  GiHumanPyramid,
  GiTomato,
  GiOrangeSlice,
  GiDonerKebab,
  GiMilkCarton,
  GiGrain,
  GiHamburger,
  GiCakeSlice,
  GiWaterBottle,
  GiBoba,
  GiChipsBag,
  GiBroccoli,
  GiHotMeal,
  GiWeightLiftingUp,
  GiRunningShoe,
  GiSofa,
  GiWeightScale,
  GiBiceps,
  GiNotebook,
  GiHealthIncrease,
  GiMedicines,
  GiStethoscope,
  GiKidneys,
  GiBrokenHeart,
  GiLindenLeaf,
  GiCancel,
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
} from 'react-icons/gi'

import { QuizPagesData } from '../Types'

const quizPagesEs: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Cuestionario de Objetivos de Gestión de Peso',
    description: 'Elige tu meta para la gestión de peso.',
    heading: '¿Cuál es tu objetivo con respecto a la gestión de peso?',
    options: [
      { text: 'Pérdida de peso', icon: GiWeightScale },
      { text: 'Ganancia muscular', icon: GiBiceps },
      { text: 'Mantener el peso actual', icon: GiNotebook },
      { text: 'Mejorar la salud general', icon: GiHealthIncrease },
    ],
  },
  {
    slug: 'full-meals',
    title: 'Cuestionario de Comidas Diarias',
    description: 'Selecciona el número de comidas completas que tienes al día.',
    heading: '¿Cuántas comidas completas tienes al día?',
    options: [
      { text: 'Tres veces al día', icon: GiInvertedDice3 },
      { text: 'Más de tres veces al día', icon: GiInvertedDice5 },
      { text: 'Una vez al día', icon: GiInvertedDice1 },
      { text: 'Menos de una vez al día', icon: GiCancel },
    ],
  },
  {
    slug: 'most-foods',
    title: 'Cuestionario de Alimentos Favoritos',
    description: 'Selecciona tus tipos de alimentos favoritos.',
    heading: '¿Qué tipo de alimentos disfrutas más?',
    options: [
      { text: 'Verduras', icon: GiTomato },
      { text: 'Frutas', icon: GiOrangeSlice },
      { text: 'Carne', icon: GiDonerKebab },
      { text: 'Productos lácteos', icon: GiMilkCarton },
      { text: 'Granos', icon: GiGrain },
    ],
  },
  {
    slug: 'least-foods',
    title: 'Cuestionario de Alimentos Menos Favoritos',
    description: 'Elige los tipos de alimentos que menos disfrutas.',
    heading: '¿Qué tipo de alimentos disfrutas menos?',
    options: [
      { text: 'Comida rápida', icon: GiHamburger },
      { text: 'Dulces', icon: GiCakeSlice },
      { text: 'Bebidas carbonatadas', icon: GiBoba },
      { text: 'Snacks altos en calorías', icon: GiChipsBag },
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Cuestionario del Plan de Pérdida',
    description: 'Selecciona una de estas condiciones médicas',
    heading:
      '¿Tienes alguna condición médica o restricciones dietéticas que puedan afectar tu plan de pérdida de peso?',
    options: [
      { text: 'No', icon: GiCancel },
      { text: 'Diabetes', icon: GiMedicines },
      { text: 'Problemas de tiroides', icon: GiStethoscope },
      { text: 'Problemas cardíacos', icon: GiBrokenHeart },
      { text: 'Problemas renales', icon: GiKidneys },
    ],
  },
  {
    slug: 'diet',
    title: 'Cuestionario de Dieta',
    description: 'Selecciona tus métodos de pérdida o dietas',
    heading:
      '¿Qué métodos de pérdida de peso o dietas has probado anteriormente?',
    options: [
      { text: 'Dieta Keto', icon: GiBroccoli },
      { text: 'Dieta baja en carbohidratos', icon: GiHotMeal },
      { text: 'Ayuno con agua', icon: GiWaterBottle },
      { text: 'Vegetarianismo', icon: GiLindenLeaf },
    ],
  },
  {
    slug: 'activity',
    title: 'Cuestionario de Actividad',
    description: 'Selecciona tu actividad actual',
    heading: '¿Actualmente estás ejercitando o físicamente activo?',
    options: [
      { text: 'Sí, regularmente', icon: GiWeightLiftingUp },
      { text: 'Ocasionalmente', icon: GiRunningShoe },
      { text: 'No, en absoluto', icon: GiSofa },
    ],
  },
  {
    slug: 'handling-stress',
    title: 'Cuestionario de Comer Emocional',
    description: 'Selecciona tu comer emocional',
    heading: '¿Cómo manejas el estrés y el comer emocional?',
    options: [
      { text: 'Comer más cuando estoy estresado', icon: GiInvertedDice5 },
      { text: 'Comer menos cuando estoy estresado', icon: GiInvertedDice1 },
      {
        text: 'No afectado por el estrés en términos de comer',
        icon: GiCancel,
      },
    ],
  },
  {
    slug: 'level-activity',
    title: 'Cuestionario del Nivel de Actividad Física',
    description: 'Selecciona tu nivel de actividad física',
    heading: '¿Cuál es tu nivel de actividad física?',
    options: [
      { text: 'Sedentario (poco o ningún ejercicio)', icon: GiInvertedDice1 },
      {
        text: 'Ligeramente activo (ejercicio ligero o deportes 1-3 días a la semana)',
        icon: GiInvertedDice2,
      },
      {
        text: 'Moderadamente activo (ejercicio moderado o deportes 3-5 días a la semana)',
        icon: GiInvertedDice3,
      },
      {
        text: 'Muy activo (ejercicio intenso o deportes 6-7 días a la semana)',
        icon: GiInvertedDice4,
      },
      {
        text: 'Extremadamente activo (ejercicio intenso o entrenamiento dos veces al día)',
        icon: GiInvertedDice5,
      },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Cuestionario de Motivación',
    description: 'Selecciona tu motivación',
    heading:
      '¿Cuán motivado estás para hacer cambios en tu dieta y estilo de vida para la gestión de peso?',
    options: [
      { text: 'Nada motivado', icon: GiCancel },
      { text: 'Ligeramente motivado', icon: GiInvertedDice1 },
      { text: 'Moderadamente motivado', icon: GiInvertedDice3 },
      { text: 'Muy motivado', icon: GiInvertedDice4 },
      { text: 'Extremadamente motivado', icon: GiInvertedDice5 },
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
    description: 'Especifica tu peso objetivo para la gestión de peso',
    heading: '¿Cuál es tu peso objetivo?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Resultados del Cuestionario',
    description:
      'Consulta el resumen de tu bienestar general basado en tus respuestas.',
    heading: 'Un resumen de tu bienestar general',
    options: [],
  },
  {
    slug: 'event',
    title: 'Cuestionario de Evento',
    description:
      'Explora estrategias personalizadas de pérdida de peso para tus próximos eventos.',
    heading: '¿Quieres perder peso debido a un evento específico próximo?',
    options: [
      { text: 'Vacaciones', icon: GiCommercialAirplane },
      { text: 'Competencia atlética', icon: GiBasketballBall },
      { text: 'Boda', icon: GiBigDiamondRing },
      { text: 'Viaje a la costa', icon: GiIsland },
      { text: 'Evento familiar', icon: GiHouse },
      { text: 'Reunión', icon: GiHumanPyramid },
      { text: 'Ningún evento relacionado', icon: GiCancel },
    ],
  },
  {
    slug: 'chart',
    title: 'Gráfico del Cuestionario',
    description: 'La estrategia de bienestar definitiva que necesitas',
    heading: 'La estrategia de bienestar definitiva que necesitas',
    options: [],
  },
]

export default quizPagesEs
