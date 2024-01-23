interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: string[]
}

const quizPages: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Weight Management Goal Quiz',
    description: 'Choose your goal for weight management.',
    heading: 'What is your goal with regard to weight management?',
    options: [
      'Weight loss',
      'Muscle gain',
      'Maintaining current weight',
      'Improving overall health',
    ],
  },
  {
    slug: 'full-meals',
    title: 'Daily Meals Quiz',
    description: 'Select the number of full meals you have in a day.',
    heading: 'How many full meals do you have during the day?',
    options: [
      'Three times a day',
      'More than three times a day',
      'Once a day',
      'Less than once a day',
    ],
  },
  {
    slug: 'most-foods',
    title: 'Favorite Foods Quiz',
    description: 'Select your favorite types of foods.',
    heading: 'What type of foods do you enjoy the most?',
    options: ['Vegetables', 'Fruits', 'Meat', 'Dairy products', 'Grains'],
  },
  {
    slug: 'least-foods',
    title: 'Least Favorite Foods Quiz',
    description: 'Choose the types of foods you enjoy the least.',
    heading: 'What type of foods do you enjoy the least?',
    options: [
      'Fast food',
      'Sweets',
      'Carbonated beverages',
      'High-calorie snacks',
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Loss Plan Quiz',
    description: 'Select one of this medical conditions',
    heading:
      'Do you have any medical conditions or dietary restrictions that may affect your weight loss plan?',
    options: [
      'No',
      'Diabetes',
      'Thyroid issues',
      'Heart problems',
      'Kidney problems',
    ],
  },
  {
    slug: 'diet',
    title: 'Diet Quiz',
    description: 'Select your loss methods or diets',
    heading: 'Which weight loss methods or diets have you previously tried?',
    options: ['Keto diet', 'Low-carb diet', 'Water fasting', 'Vegetarianism'],
  },
  {
    slug: 'activity',
    title: 'Activity Quiz',
    description: 'Select your currently activity',
    heading: 'Are you currently exercising or physically active?',
    options: ['Yes, regularly', 'Occasionally', 'No, not at all'],
  },
  {
    slug: 'handling-stress',
    title: 'Emotional Eating Quiz',
    description: 'Select your emotional eating',
    heading: 'How do you handle stress and emotional eating?',
    options: [
      'Eat more when stressed',
      'Eat less when stressed',
      'Not affected by stress in terms of eating',
    ],
  },
  {
    slug: 'level-activity',
    title: 'Level of physical activity Quiz',
    description: 'Select your level of physical activity',
    heading: 'What is your level of physical activity?',
    options: [
      'Sedentary (little to no exercise)',
      'Lightly active (light exercise or sports 1-3 days a week)',
      'Moderately active (moderate exercise or sports 3-5 days a week)',
      'Very active (hard exercise or sports 6-7 days a week)',
      'Extremely active (hard exercise or training twice a day)',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Motivation Quiz',
    description: 'Select your motivation',
    heading:
      'How motivated are you to make changes to your diet and lifestyle for weight management?',
    options: [
      'Not motivated at all',
      'Slightly motivated',
      'Moderately motivated',
      'Highly motivated',
      'Extremely motivated',
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
]

export default quizPages
