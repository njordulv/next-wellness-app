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

const quizPagesDe: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Quiz zu Gewichtsmanagement-Zielen',
    description: 'Wählen Sie Ihr Ziel für das Gewichtsmanagement.',
    heading: 'Was ist Ihr Ziel im Hinblick auf Gewichtsmanagement?',
    options: [
      { text: 'Gewichtsverlust', icon: GiWeightScale },
      { text: 'Muskelaufbau', icon: GiBiceps },
      { text: 'Aktuelles Gewicht halten', icon: GiNotebook },
      { text: 'Allgemeine Gesundheit verbessern', icon: GiHealthIncrease },
    ],
  },
  {
    slug: 'full-meals',
    title: 'Tägliche Mahlzeiten Quiz',
    description:
      'Wählen Sie die Anzahl der vollständigen Mahlzeiten, die Sie pro Tag haben.',
    heading: 'Wie viele vollständige Mahlzeiten haben Sie pro Tag?',
    options: [
      { text: 'Dreimal am Tag', icon: GiInvertedDice3 },
      { text: 'Mehr als dreimal am Tag', icon: GiInvertedDice5 },
      { text: 'Einmal am Tag', icon: GiInvertedDice1 },
      { text: 'Weniger als einmal am Tag', icon: GiCancel },
    ],
  },
  {
    slug: 'most-foods',
    title: 'Lieblingsessen Quiz',
    description: 'Wählen Sie Ihre bevorzugten Lebensmittelarten.',
    heading: 'Welche Art von Lebensmitteln genießen Sie am meisten?',
    options: [
      { text: 'Gemüse', icon: GiTomato },
      { text: 'Früchte', icon: GiOrangeSlice },
      { text: 'Fleisch', icon: GiDonerKebab },
      { text: 'Milchprodukte', icon: GiMilkCarton },
      { text: 'Getreide', icon: GiGrain },
    ],
  },
  {
    slug: 'least-foods',
    title: 'Weniger bevorzugte Lebensmittel Quiz',
    description:
      'Wählen Sie die Arten von Lebensmitteln, die Sie am wenigsten genießen.',
    heading: 'Welche Art von Lebensmitteln genießen Sie am wenigsten?',
    options: [
      { text: 'Fast Food', icon: GiHamburger },
      { text: 'Süßigkeiten', icon: GiCakeSlice },
      { text: 'Kohlensäurehaltige Getränke', icon: GiBoba },
      { text: 'Hochkalorische Snacks', icon: GiChipsBag },
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Verlustplan Quiz',
    description: 'Wählen Sie eine dieser medizinischen Bedingungen.',
    heading:
      'Haben Sie medizinische Bedingungen oder diätetische Einschränkungen, die Ihren Gewichtsverlustplan beeinflussen könnten?',
    options: [
      { text: 'Nein', icon: GiCancel },
      { text: 'Diabetes', icon: GiMedicines },
      { text: 'Schilddrüsenprobleme', icon: GiStethoscope },
      { text: 'Herzprobleme', icon: GiBrokenHeart },
      { text: 'Nierenprobleme', icon: GiKidneys },
    ],
  },
  {
    slug: 'diet',
    title: 'Diät Quiz',
    description: 'Wählen Sie Ihre Abnahmemethoden oder Diäten.',
    heading:
      'Welche Gewichtsverlustmethoden oder Diäten haben Sie zuvor ausprobiert?',
    options: [
      { text: 'Keto-Diät', icon: GiBroccoli },
      { text: 'Kohlenhydratarme Diät', icon: GiHotMeal },
      { text: 'Wasserfasten', icon: GiWaterBottle },
      { text: 'Vegetarismus', icon: GiLindenLeaf },
    ],
  },
  {
    slug: 'activity',
    title: 'Aktivitätsquiz',
    description: 'Wählen Sie Ihre derzeitige Aktivität.',
    heading: 'Sind Sie derzeit sportlich oder körperlich aktiv?',
    options: [
      { text: 'Ja, regelmäßig', icon: GiWeightLiftingUp },
      { text: 'Gelegentlich', icon: GiRunningShoe },
      { text: 'Nein, überhaupt nicht', icon: GiSofa },
    ],
  },
  {
    slug: 'handling-stress',
    title: 'Emotionales Essen Quiz',
    description: 'Wählen Sie Ihr emotionales Essverhalten.',
    heading: 'Wie gehen Sie mit Stress und emotionalem Essen um?',
    options: [
      { text: 'Mehr essen, wenn gestresst', icon: GiInvertedDice5 },
      { text: 'Weniger essen, wenn gestresst', icon: GiInvertedDice1 },
      {
        text: 'Vom Stress nicht in Bezug auf das Essen beeinflusst',
        icon: GiCancel,
      },
    ],
  },
  {
    slug: 'level-activity',
    title: 'Niveau der körperlichen Aktivität Quiz',
    description: 'Wählen Sie Ihr Niveau der körperlichen Aktivität.',
    heading: 'Was ist Ihr Niveau der körperlichen Aktivität?',
    options: [
      { text: 'Sedentär (wenig bis keine Übung)', icon: GiInvertedDice1 },
      {
        text: 'Leicht aktiv (leichte Übungen oder Sport 1-3 Tage pro Woche)',
        icon: GiInvertedDice2,
      },
      {
        text: 'Mäßig aktiv (mäßiges Training oder Sport 3-5 Tage pro Woche)',
        icon: GiInvertedDice3,
      },
      {
        text: 'Sehr aktiv (hartes Training oder Sport 6-7 Tage pro Woche)',
        icon: GiInvertedDice4,
      },
      {
        text: 'Extrem aktiv (hartes Training oder zweimal tägliches Training)',
        icon: GiInvertedDice5,
      },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Motivationsquiz',
    description: 'Wählen Sie Ihre Motivation.',
    heading:
      'Wie motiviert sind Sie, Änderungen an Ihrer Ernährung und Ihrem Lebensstil für das Gewichtsmanagement vorzunehmen?',
    options: [
      { text: 'Überhaupt nicht motiviert', icon: GiCancel },
      { text: 'Etwas motiviert', icon: GiInvertedDice1 },
      { text: 'Mäßig motiviert', icon: GiInvertedDice3 },
      { text: 'Hoch motiviert', icon: GiInvertedDice4 },
      { text: 'Extrem motiviert', icon: GiInvertedDice5 },
    ],
  },
  {
    slug: 'height',
    title: 'Größenquiz',
    description: 'Geben Sie Ihre Größe in das vorgegebene Feld ein.',
    heading: 'Geben Sie Ihre Größe ein.',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Gewichtsquiz',
    description: 'Geben Sie Ihr Gewicht in das vorgegebene Feld ein.',
    heading: 'Geben Sie Ihr Gewicht ein.',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Zielgewichtsquiz',
    description:
      'Spezifizieren Sie Ihr Zielgewicht für das Gewichtsmanagement.',
    heading: 'Was ist Ihr Zielgewicht?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Quiz-Ergebnisse',
    description:
      'Sehen Sie sich die Zusammenfassung Ihres allgemeinen Wohlbefindens basierend auf Ihren Antworten an.',
    heading: 'Eine Zusammenfassung Ihres allgemeinen Wohlbefindens.',
    options: [],
  },
  {
    slug: 'event',
    title: 'Ereignis-Quiz',
    description:
      'Erkunden Sie personalisierte Gewichtsverluststrategien, die auf Ihre bevorstehenden Ereignisse zugeschnitten sind.',
    heading:
      'Möchten Sie aufgrund eines bestimmten bevorstehenden Ereignisses Gewicht verlieren?',
    options: [
      { text: 'Urlaub', icon: GiCommercialAirplane },
      { text: 'Sportwettbewerb', icon: GiBasketballBall },
      { text: 'Hochzeit', icon: GiBigDiamondRing },
      { text: 'Strandreise', icon: GiIsland },
      { text: 'Familienereignis', icon: GiHouse },
      { text: 'Zusammenkunft', icon: GiHumanPyramid },
      { text: 'Keine verwandten Ereignisse', icon: GiCancel },
    ],
  },
  {
    slug: 'chart',
    title: 'Quiz-Diagramm',
    description: 'Die ultimative Wellness-Strategie, die Sie benötigen',
    heading: 'Die ultimative Wellness-Strategie, die Sie benötigen',
    options: [],
  },
]

export default quizPagesDe
