interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: string[]
}

const quizPagesFr: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: "Quiz sur l'objectif de gestion du poids",
    description: 'Choisissez votre objectif de gestion du poids.',
    heading: 'Quel est votre objectif en matière de gestion du poids ?',
    options: [
      'Perte de poids',
      'Gain de muscle',
      'Maintenir le poids actuel',
      'Améliorer la santé générale',
    ],
  },
  {
    slug: 'full-meals',
    title: 'Quiz sur les repas quotidiens',
    description:
      'Sélectionnez le nombre de repas complets que vous prenez par jour.',
    heading: 'Combien de repas complets prenez-vous par jour ?',
    options: [
      'Trois fois par jour',
      'Plus de trois fois par jour',
      'Une fois par jour',
      "Moins d'une fois par jour",
    ],
  },
  {
    slug: 'most-foods',
    title: 'Quiz sur les aliments préférés',
    description: "Sélectionnez vos types d'aliments préférés.",
    heading: "Quels types d'aliments aimez-vous le plus ?",
    options: ['Légumes', 'Fruits', 'Viande', 'Produits laitiers', 'Céréales'],
  },
  {
    slug: 'least-foods',
    title: 'Quiz sur les aliments les moins appréciés',
    description: "Choisissez les types d'aliments que vous aimez le moins.",
    heading: "Quels types d'aliments aimez-vous le moins ?",
    options: [
      'Fast-food',
      'Sucreries',
      'Boissons gazeuses',
      'Snacks riches en calories',
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Quiz sur le plan de perte de poids',
    description: "Sélectionnez l'une de ces conditions médicales",
    heading:
      'Avez-vous des conditions médicales ou des restrictions alimentaires qui peuvent affecter votre plan de perte de poids ?',
    options: [
      'Non',
      'Diabète',
      'Problèmes de thyroïde',
      'Problèmes cardiaques',
      'Problèmes rénaux',
    ],
  },
  {
    slug: 'diet',
    title: 'Quiz sur les régimes',
    description: 'Sélectionnez vos méthodes ou régimes de perte de poids',
    heading:
      'Quelles méthodes de perte de poids ou quels régimes avez-vous déjà essayés ?',
    options: [
      'Régime cétogène',
      'Régime pauvre en glucides',
      'Jeûne hydrique',
      'Végétarisme',
    ],
  },
  {
    slug: 'activity',
    title: "Quiz sur l'activité",
    description: 'Sélectionnez votre activité actuelle',
    heading:
      "Faites-vous actuellement de l'exercice ou êtes-vous physiquement actif ?",
    options: ['Oui, régulièrement', 'Occasionnellement', 'Non, pas du tout'],
  },
  {
    slug: 'handling-stress',
    title: 'Quiz sur la gestion du stress alimentaire',
    description: 'Sélectionnez votre façon de gérer le stress alimentaire',
    heading: "Comment gérez-vous le stress et l'alimentation émotionnelle ?",
    options: [
      'Je mange plus quand je suis stressé',
      'Je mange moins quand je suis stressé',
      "Le stress n'affecte pas mon alimentation",
    ],
  },
  {
    slug: 'level-activity',
    title: "Quiz sur le niveau d'activité physique",
    description: "Sélectionnez votre niveau d'activité physique",
    heading: "Quel est votre niveau d'activité physique ?",
    options: [
      "Sédentaire (peu ou pas d'exercice)",
      'Légèrement actif (exercice léger ou sport 1 à 3 jours par semaine)',
      'Modérément actif (exercice modéré ou sport 3 à 5 jours par semaine)',
      'Très actif (exercice intense ou sport 6 à 7 jours par semaine)',
      'Extrêmement actif (exercice intense ou entraînement deux fois par jour)',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Quiz sur la motivation pour la gestion du poids',
    description: 'Sélectionnez votre motivation',
    heading:
      'Quelle est votre motivation pour apporter des changements à votre alimentation et votre mode de vie pour la gestion du poids ?',
    options: [
      'Pas du tout motivé',
      'Légèrement motivé',
      'Modérément motivé',
      'Très motivé',
      'Extrêmement motivé',
    ],
  },
  {
    slug: 'height',
    title: 'Quiz sur la taille',
    description: 'Entrez votre taille dans le champ indiqué',
    heading: 'Entrez votre taille',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Quiz sur le poids',
    description: 'Entrez votre poids dans le champ indiqué',
    heading: 'Entrez votre poids',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Quiz sur le poids cible',
    description: 'Indiquez votre poids cible pour la gestion du poids',
    heading: 'Quel est votre poids cible ?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Résultats du Quiz',
    description:
      'Consultez le récapitulatif de votre bien-être général en fonction de vos réponses.',
    heading: 'Un récapitulatif de votre bien-être général',
    options: [],
  },
]

export default quizPagesFr
