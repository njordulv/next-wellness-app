interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: string[]
}

const quizPagesDe: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Quiz zu Gewichtsmanagement-Zielen',
    description: 'Wählen Sie Ihr Ziel für das Gewichtsmanagement.',
    heading: 'Was ist Ihr Ziel beim Gewichtsmanagement?',
    options: [
      'Gewichtsverlust',
      'Muskelaufbau',
      'Aktuelles Gewicht beibehalten',
      'Gesundheit allgemein verbessern',
    ],
  },
  {
    slug: 'full-meals',
    title: 'Quiz zu täglichen Mahlzeiten',
    description: 'Wählen Sie die Anzahl Ihrer täglichen Hauptmahlzeiten.',
    heading: 'Wie viele Hauptmahlzeiten nehmen Sie pro Tag zu sich?',
    options: [
      'Dreimal am Tag',
      'Mehr als dreimal am Tag',
      'Einmal am Tag',
      'Weniger als einmal am Tag',
    ],
  },
  {
    slug: 'most-foods',
    title: 'Lieblingsessen-Quiz',
    description: 'Wählen Sie Ihre bevorzugten Lebensmittelarten.',
    heading: 'Welche Art von Lebensmitteln mögen Sie am meisten?',
    options: ['Gemüse', 'Früchte', 'Fleisch', 'Milchprodukte', 'Getreide'],
  },
  {
    slug: 'least-foods',
    title: 'Unbeliebtes Essen-Quiz',
    description:
      'Wählen Sie die Lebensmittelarten, die Sie am wenigsten mögen.',
    heading: 'Welche Art von Lebensmitteln mögen Sie am wenigsten?',
    options: [
      'Fast Food',
      'Süßigkeiten',
      'Kohlensäurehaltige Getränke',
      'Kalorienreiche Snacks',
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Gewichtsverlust-Plan-Quiz',
    description: 'Wählen Sie eine dieser medizinischen Bedingungen aus',
    heading:
      'Haben Sie medizinische Bedingungen oder diätetische Einschränkungen, die Ihren Gewichtsverlustplan beeinflussen könnten?',
    options: [
      'Nein',
      'Diabetes',
      'Schilddrüsenprobleme',
      'Herzprobleme',
      'Nierenprobleme',
    ],
  },
  {
    slug: 'diet',
    title: 'Diät-Quiz',
    description: 'Wählen Sie Ihre Methoden oder Diäten zur Gewichtsreduktion',
    heading:
      'Welche Methoden zur Gewichtsreduktion oder Diäten haben Sie bereits ausprobiert?',
    options: [
      'Keto-Diät',
      'Kohlenhydratarme Diät',
      'Wasserfasten',
      'Vegetarismus',
    ],
  },
  {
    slug: 'activity',
    title: 'Aktivitäts-Quiz',
    description: 'Wählen Sie Ihre derzeitige Aktivität',
    heading: 'Sind Sie derzeit sportlich oder körperlich aktiv?',
    options: ['Ja, regelmäßig', 'Gelegentlich', 'Nein, überhaupt nicht'],
  },
  {
    slug: 'handling-stress',
    title: 'Quiz zum emotionalen Essen',
    description: 'Wählen Sie Ihr emotionales Essverhalten',
    heading: 'Wie gehen Sie mit Stress und emotionalem Essen um?',
    options: [
      'Ich esse mehr, wenn ich gestresst bin',
      'Ich esse weniger, wenn ich gestresst bin',
      'Stress beeinflusst mein Essverhalten nicht',
    ],
  },
  {
    slug: 'level-activity',
    title: 'Quiz zum Aktivitätsniveau',
    description: 'Wählen Sie Ihr Aktivitätsniveau',
    heading: 'Wie hoch ist Ihr Aktivitätsniveau?',
    options: [
      'Sitzend (wenig bis gar keine Bewegung)',
      'Leicht aktiv (leichte Bewegung oder Sport 1-3 Tage pro Woche)',
      'Mäßig aktiv (mittlere Bewegung oder Sport 3-5 Tage pro Woche)',
      'Sehr aktiv (intensive Bewegung oder Sport 6-7 Tage pro Woche)',
      'Extrem aktiv (intensive Bewegung oder Training zweimal am Tag)',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Motivations-Quiz',
    description: 'Wählen Sie Ihre Motivation',
    heading:
      'Wie motiviert sind Sie, Änderungen an Ihrer Ernährung und Lebensweise zur Gewichtsverwaltung vorzunehmen?',
    options: [
      'Überhaupt nicht motiviert',
      'Etwas motiviert',
      'Mäßig motiviert',
      'Hoch motiviert',
      'Extrem motiviert',
    ],
  },
  {
    slug: 'height',
    title: 'Größen-Quiz',
    description: 'Geben Sie Ihre Größe im vorgegebenen Feld ein',
    heading: 'Geben Sie Ihre Größe ein',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Gewichts-Quiz',
    description: 'Geben Sie Ihr Gewicht im vorgegebenen Feld ein',
    heading: 'Geben Sie Ihr Gewicht ein',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Zielgewicht-Quiz',
    description: 'Geben Sie Ihr Zielgewicht für die Gewichtsverwaltung an',
    heading: 'Was ist Ihr Zielgewicht?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Quiz-Ergebnisse',
    description:
      'Sehen Sie sich die Zusammenfassung Ihres allgemeinen Wohlbefindens basierend auf Ihren Antworten an.',
    heading: 'Eine Zusammenfassung Ihres allgemeinen Wohlbefindens',
    options: [],
  },
]

export default quizPagesDe
