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

interface Option {
  text: string
  icon?: React.ElementType
}
interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: Option[]
}

const quizPagesEn: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Weight Management Goal Quiz',
    description: 'Choose your goal for weight management.',
    heading: 'What is your goal with regard to weight management?',
    options: [
      { text: 'Weight loss', icon: GiWeightScale },
      { text: 'Muscle gain', icon: GiBiceps },
      { text: 'Maintaining current weight', icon: GiNotebook },
      { text: 'Improving overall health', icon: GiHealthIncrease },
    ],
  },
  {
    slug: 'full-meals',
    title: 'Daily Meals Quiz',
    description: 'Select the number of full meals you have in a day.',
    heading: 'How many full meals do you have during the day?',
    options: [
      { text: 'Three times a day', icon: GiInvertedDice3 },
      { text: 'More than three times a day', icon: GiInvertedDice5 },
      { text: 'Once a day', icon: GiInvertedDice1 },
      { text: 'Less than once a day', icon: GiCancel },
    ],
  },
  {
    slug: 'most-foods',
    title: 'Favorite Foods Quiz',
    description: 'Select your favorite types of foods.',
    heading: 'What type of foods do you enjoy the most?',
    options: [
      { text: 'Vegetables', icon: GiTomato },
      { text: 'Fruits', icon: GiOrangeSlice },
      { text: 'Meat', icon: GiDonerKebab },
      { text: 'Dairy products', icon: GiMilkCarton },
      { text: 'Grains', icon: GiGrain },
    ],
  },
  {
    slug: 'least-foods',
    title: 'Least Favorite Foods Quiz',
    description: 'Choose the types of foods you enjoy the least.',
    heading: 'What type of foods do you enjoy the least?',
    options: [
      { text: 'Fast food', icon: GiHamburger },
      { text: 'Sweets', icon: GiCakeSlice },
      { text: 'Carbonated beverages', icon: GiBoba },
      { text: 'High-calorie snacks', icon: GiChipsBag },
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Loss Plan Quiz',
    description: 'Select one of this medical conditions',
    heading:
      'Do you have any medical conditions or dietary restrictions that may affect your weight loss plan?',
    options: [
      { text: 'No', icon: GiCancel },
      { text: 'Diabetes', icon: GiMedicines },
      { text: 'Thyroid issues', icon: GiStethoscope },
      { text: 'Heart problems', icon: GiBrokenHeart },
      { text: 'Kidney problems', icon: GiKidneys },
    ],
  },
  {
    slug: 'diet',
    title: 'Diet Quiz',
    description: 'Select your loss methods or diets',
    heading: 'Which weight loss methods or diets have you previously tried?',
    options: [
      { text: 'Keto diet', icon: GiBroccoli },
      { text: 'Low-carb diet', icon: GiHotMeal },
      { text: 'Water fasting', icon: GiWaterBottle },
      { text: 'Vegetarianism', icon: GiLindenLeaf },
    ],
  },
  {
    slug: 'activity',
    title: 'Activity Quiz',
    description: 'Select your currently activity',
    heading: 'Are you currently exercising or physically active?',
    options: [
      { text: 'Yes, regularly', icon: GiWeightLiftingUp },
      { text: 'Occasionally', icon: GiRunningShoe },
      { text: 'No, not at all', icon: GiSofa },
    ],
  },
  {
    slug: 'handling-stress',
    title: 'Emotional Eating Quiz',
    description: 'Select your emotional eating',
    heading: 'How do you handle stress and emotional eating?',
    options: [
      { text: 'Eat more when stressed', icon: GiInvertedDice5 },
      { text: 'Eat less when stressed', icon: GiInvertedDice1 },
      { text: 'Not affected by stress in terms of eating', icon: GiCancel },
    ],
  },
  {
    slug: 'level-activity',
    title: 'Level of physical activity Quiz',
    description: 'Select your level of physical activity',
    heading: 'What is your level of physical activity?',
    options: [
      { text: 'Sedentary (little to no exercise)', icon: GiInvertedDice1 },
      {
        text: 'Lightly active (light exercise or sports 1-3 days a week)',
        icon: GiInvertedDice2,
      },
      {
        text: 'Moderately active (moderate exercise or sports 3-5 days a week)',
        icon: GiInvertedDice3,
      },
      {
        text: 'Very active (hard exercise or sports 6-7 days a week)',
        icon: GiInvertedDice4,
      },
      {
        text: 'Extremely active (hard exercise or training twice a day)',
        icon: GiInvertedDice5,
      },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Motivation Quiz',
    description: 'Select your motivation',
    heading:
      'How motivated are you to make changes to your diet and lifestyle for weight management?',
    options: [
      { text: 'Not motivated at all', icon: GiCancel },
      { text: 'Slightly motivated', icon: GiInvertedDice1 },
      { text: 'Moderately motivated', icon: GiInvertedDice3 },
      { text: 'Highly motivated', icon: GiInvertedDice4 },
      { text: 'Extremely motivated', icon: GiInvertedDice5 },
    ],
  },
  {
    slug: 'height',
    title: 'Height Quiz',
    description: 'Enter your height in the given field',
    heading: 'Enter your height',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Weight Quiz',
    description: 'Enter your weight in the given field',
    heading: 'Enter your weight',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Goal Weight Quiz',
    description: 'Specify your goal weight for weight management',
    heading: 'What is your goal weight?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Quiz Results',
    description:
      'View the recap of your general well-being based on your answers.',
    heading: 'A recap of your general well-being',
    options: [],
  },
  {
    slug: 'event',
    title: 'Event Quiz',
    description:
      'Explore personalized weight loss strategies tailored for your upcoming events.',
    heading: 'Do you want to lose weight due to a specific upcomming event?',
    options: [
      { text: 'Holiday', icon: GiCommercialAirplane },
      { text: 'Athletic competition', icon: GiBasketballBall },
      { text: 'Wedding', icon: GiBigDiamondRing },
      { text: 'Seaside journey', icon: GiIsland },
      { text: 'Family event', icon: GiFamilyHouse },
      { text: 'Gathering', icon: GiHumanPyramid },
      { text: 'None related events', icon: GiCancel },
    ],
  },
]

export default quizPagesEn
