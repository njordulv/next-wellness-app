interface QuizPagesData {
  slug: string
  title: string
  description: string
  heading: string
  options: string[]
}

const quizPagesPl: QuizPagesData[] = [
  {
    slug: 'your-goal',
    title: 'Kwestionariusz celów zarządzania wagą',
    description: 'Wybierz swój cel w zarządzaniu wagą.',
    heading: 'Jaki jest Twój cel w odniesieniu do zarządzania wagą?',
    options: [
      'Utrata wagi',
      'Przyrost masy mięśniowej',
      'Utrzymanie obecnej wagi',
      'Poprawa ogólnego stanu zdrowia',
    ],
  },
  {
    slug: 'full-meals',
    title: 'Kwestionariusz codziennych posiłków',
    description: 'Wybierz liczbę pełnych posiłków, które jesz w ciągu dnia.',
    heading: 'Ile pełnych posiłków jesz w ciągu dnia?',
    options: [
      'Trzy razy dziennie',
      'Więcej niż trzy razy dziennie',
      'Raz dziennie',
      'Mniej niż raz dziennie',
    ],
  },
  {
    slug: 'most-foods',
    title: 'Kwestionariusz ulubionych pokarmów',
    description: 'Wybierz swoje ulubione rodzaje pokarmów.',
    heading: 'Które pokarmy lubisz najbardziej?',
    options: ['Warzywa', 'Owoce', 'Mięso', 'Produkty mleczne', 'Zboża'],
  },
  {
    slug: 'least-foods',
    title: 'Kwestionariusz najmniej ulubionych pokarmów',
    description: 'Wybierz rodzaje pokarmów, które lubisz najmniej.',
    heading: 'Których pokarmów lubisz najmniej?',
    options: [
      'Fast food',
      'Słodycze',
      'Napoje gazowane',
      'Przekąski wysokokaloryczne',
    ],
  },
  {
    slug: 'loss-plan',
    title: 'Kwestionariusz planu odchudzania',
    description: 'Wybierz jedną z tych chorób.',
    heading:
      'Czy masz jakieś schorzenia lub ograniczenia dietetyczne, które mogą wpłynąć na Twój plan odchudzania?',
    options: [
      'Nie',
      'Cukrzyca',
      'Problemy z tarczycą',
      'Problemy z sercem',
      'Problemy z nerkami',
    ],
  },
  {
    slug: 'diet',
    title: 'Kwestionariusz diety',
    description: 'Wybierz swoje metody odchudzania lub diety',
    heading: 'Które metody odchudzania lub diety wcześniej próbowałeś?',
    options: [
      'Dieta keto',
      'Dieta niskowęglowodanowa',
      'Post wodny',
      'Wegetarianizm',
    ],
  },
  {
    slug: 'activity',
    title: 'Kwestionariusz aktywności',
    description: 'Wybierz swoją obecną aktywność',
    heading: 'Czy obecnie ćwiczysz lub jesteś aktywny fizycznie?',
    options: ['Tak, regularnie', 'Okazjonalnie', 'Nie, wcale'],
  },
  {
    slug: 'handling-stress',
    title: 'Kwestionariusz jedzenia emocjonalnego',
    description: 'Wybierz swój sposób na jedzenie emocjonalne',
    heading: 'Jak radzisz sobie ze stresem i jedzeniem emocjonalnym?',
    options: [
      'Jem więcej pod wpływem stresu',
      'Jem mniej pod wpływem stresu',
      'Stres nie wpływa na moje jedzenie',
    ],
  },
  {
    slug: 'level-activity',
    title: 'Kwestionariusz poziomu aktywności fizycznej',
    description: 'Wybierz swój poziom aktywności fizycznej',
    heading: 'Jaki jest Twój poziom aktywności fizycznej?',
    options: [
      'Siedzący (mało lub brak    ćwiczeń)',
      'Lekko aktywny (lekka gimnastyka lub sport 1-3 dni w tygodniu)',
      'Umiarkowanie aktywny (umiarkowane ćwiczenia lub sport 3-5 dni w tygodniu)',
      'Bardzo aktywny (ciężkie ćwiczenia lub sport 6-7 dni w tygodniu)',
      'Wyjątkowo aktywny (ciężkie ćwiczenia lub trening dwa razy dziennie)',
    ],
  },
  {
    slug: 'weight-management',
    title: 'Kwestionariusz motywacji',
    description: 'Wybierz swoją motywację',
    heading:
      'Jak bardzo jesteś zmotywowany, aby dokonać zmian w diecie i stylu życia dla zarządzania wagą?',
    options: [
      'Wcale nie jestem zmotywowany',
      'Lekko zmotywowany',
      'Umiarkowanie zmotywowany',
      'Bardzo zmotywowany',
      'Wyjątkowo zmotywowany',
    ],
  },
  {
    slug: 'height',
    title: 'Kwestionariusz wzrostu',
    description: 'Wprowadź swój wzrost w podanym polu',
    heading: 'Wprowadź swój wzrost',
    options: [],
  },
  {
    slug: 'weight',
    title: 'Kwestionariusz wagi',
    description: 'Wprowadź swoją wagę w podanym polu',
    heading: 'Wprowadź swoją wagę',
    options: [],
  },
  {
    slug: 'weight-goal',
    title: 'Kwestionariusz docelowej wagi',
    description: 'Określ swoją docelową wagę dla zarządzania wagą',
    heading: 'Jaka jest Twoja docelowa waga?',
    options: [],
  },
  {
    slug: 'results',
    title: 'Wyniki kwestionariusza',
    description:
      'Zobacz podsumowanie Twojego ogólnego samopoczucia na podstawie Twoich odpowiedzi.',
    heading: 'Podsumowanie Twojego ogólnego samopoczucia',
    options: [],
  },
]

export default quizPagesPl
