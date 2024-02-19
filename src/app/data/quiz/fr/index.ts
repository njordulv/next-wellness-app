import {
  GiCommercialAirplane,
  GiBasketballBall,
  GiBigDiamondRing,
  GiIsland,
  GiFamilyHouse,
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

const quizPagesFr: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Quiz sur les Objectifs de Gestion du Poids',
    description: 'Choisissez votre objectif pour la gestion du poids.',
    heading: 'Quel est votre objectif en matière de gestion du poids ?',
    options: [
      { text: 'Perte de poids', icon: GiWeightScale },
      { text: 'Gain musculaire', icon: GiBiceps },
      { text: 'Maintien du poids actuel', icon: GiNotebook },
      { text: 'Amélioration de la santé générale', icon: GiHealthIncrease },
    ],
  },
  {
    slug: 'full-meals',
    title: 'Quiz sur les Repas Quotidiens',
    description:
      'Sélectionnez le nombre de repas complets que vous avez par jour.',
    heading: 'Combien de repas complets avez-vous par jour ?',
    options: [
      { text: 'Trois fois par jour', icon: GiInvertedDice3 },
      { text: 'Plus de trois fois par jour', icon: GiInvertedDice5 },
      { text: 'Une fois par jour', icon: GiInvertedDice1 },
      { text: 'Moins d’une fois par jour', icon: GiCancel },
    ],
  },
  {
    slug: 'most-foods',
    title: 'Quiz sur les Aliments Favoris',
    description: 'Sélectionnez vos types d’aliments préférés.',
    heading: 'Quels types d’aliments appréciez-vous le plus ?',
    options: [
      { text: 'Légumes', icon: GiTomato },
      { text: 'Fruits', icon: GiOrangeSlice },
      { text: 'Viande', icon: GiDonerKebab },
      { text: 'Produits laitiers', icon: GiMilkCarton },
      { text: 'Céréales', icon: GiGrain },
    ],
  },
  {
    slug: 'least-foods',
    title: 'Quiz sur les Aliments les Moins Appréciés',
    description: 'Choisissez les types d’aliments que vous appréciez le moins.',
    heading: 'Quels types d’aliments appréciez-vous le moins ?',
    options: [
      { text: 'Fast-food', icon: GiHamburger },
      { text: 'Sucreries', icon: GiCakeSlice },
      { text: 'Boissons gazeuses', icon: GiBoba },
      { text: 'Snacks riches en calories', icon: GiChipsBag },
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Quiz sur le Plan de Perte',
    description: 'Sélectionnez l’une de ces conditions médicales',
    heading:
      'Avez-vous des conditions médicales ou des restrictions alimentaires qui pourraient affecter votre plan de perte de poids ?',
    options: [
      { text: 'Non', icon: GiCancel },
      { text: 'Diabète', icon: GiMedicines },
      { text: 'Problèmes de thyroïde', icon: GiStethoscope },
      { text: 'Problèmes cardiaques', icon: GiBrokenHeart },
      { text: 'Problèmes rénaux', icon: GiKidneys },
    ],
  },
  {
    slug: 'diet',
    title: 'Quiz sur le Régime Alimentaire',
    description: 'Sélectionnez vos méthodes de perte ou régimes',
    heading:
      'Quelles méthodes de perte de poids ou régimes avez-vous déjà essayés ?',
    options: [
      { text: 'Régime Keto', icon: GiBroccoli },
      { text: 'Régime faible en glucides', icon: GiHotMeal },
      { text: 'Jeûne hydrique', icon: GiWaterBottle },
      { text: 'Végétarisme', icon: GiLindenLeaf },
    ],
  },
  {
    slug: 'activity',
    title: 'Quiz sur l’Activité',
    description: 'Sélectionnez votre activité actuelle',
    heading:
      'Êtes-vous actuellement en train de faire de l’exercice ou êtes-vous physiquement actif ?',
    options: [
      { text: 'Oui, régulièrement', icon: GiWeightLiftingUp },
      { text: 'Occasionnellement', icon: GiRunningShoe },
      { text: 'Non, pas du tout', icon: GiSofa },
    ],
  },
  {
    slug: 'handling-stress',
    title: 'Quiz sur l’Alimentation Émotionnelle',
    description: 'Sélectionnez votre alimentation émotionnelle',
    heading: 'Comment gérez-vous le stress et l’alimentation émotionnelle ?',
    options: [
      { text: 'Manger plus quand stressé', icon: GiInvertedDice5 },
      { text: 'Manger moins quand stressé', icon: GiInvertedDice1 },
      {
        text: 'Non affecté par le stress en termes d’alimentation',
        icon: GiCancel,
      },
    ],
  },
  {
    slug: 'level-activity',
    title: 'Quiz sur le Niveau d’Activité Physique',
    description: 'Sélectionnez votre niveau d’activité physique',
    heading: 'Quel est votre niveau d’activité physique ?',
    options: [
      { text: 'Sédentaire (peu ou pas d’exercice)', icon: GiInvertedDice1 },
      {
        text: 'Légèrement actif (exercice léger ou sport 1-3 jours par semaine)',
        icon: GiInvertedDice2,
      },
      {
        text: 'Modérément actif (exercice modéré ou sport 3-5 jours par semaine)',
        icon: GiInvertedDice3,
      },
      {
        text: 'Très actif (exercice intense ou sport 6-7 jours par semaine)',
        icon: GiInvertedDice4,
      },
      {
        text: 'Extrêmement actif (exercice intense ou entraînement deux fois par jour)',
        icon: GiInvertedDice5,
      },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Quiz sur la Motivation',
    description: 'Sélectionnez votre motivation',
    heading:
      'À quel point êtes-vous motivé pour apporter des changements à votre alimentation et à votre style de vie pour la gestion du poids ?',
    options: [
      { text: 'Pas du tout motivé', icon: GiCancel },
      { text: 'Légèrement motivé', icon: GiInvertedDice1 },
      { text: 'Modérément motivé', icon: GiInvertedDice3 },
      { text: 'Très motivé', icon: GiInvertedDice4 },
      { text: 'Extrêmement motivé', icon: GiInvertedDice5 },
    ],
  },
  {
    slug: 'height',
    title: 'Quiz sur la Taille',
    description: 'Entrez votre taille dans le champ indiqué',
    heading: 'Entrez votre taille',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Quiz sur le Poids',
    description: 'Entrez votre poids dans le champ indiqué',
    heading: 'Entrez votre poids',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Quiz sur le Poids Cible',
    description: 'Spécifiez votre poids cible pour la gestion du poids',
    heading: 'Quel est votre poids cible ?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Résultats du Quiz',
    description:
      'Voyez le récapitulatif de votre bien-être général basé sur vos réponses.',
    heading: 'Un récapitulatif de votre bien-être général',
    options: [],
  },
  {
    slug: 'event',
    title: 'Quiz sur l’Événement',
    description:
      'Explorez des stratégies de perte de poids personnalisées adaptées à vos événements à venir.',
    heading:
      'Voulez-vous perdre du poids en raison d’un événement spécifique à venir ?',
    options: [
      { text: 'Vacances', icon: GiCommercialAirplane },
      { text: 'Compétition sportive', icon: GiBasketballBall },
      { text: 'Mariage', icon: GiBigDiamondRing },
      { text: 'Voyage au bord de la mer', icon: GiIsland },
      { text: 'Événement familial', icon: GiFamilyHouse },
      { text: 'Rassemblement', icon: GiHumanPyramid },
      { text: 'Aucun événement lié', icon: GiCancel },
    ],
  },
]

export default quizPagesFr
