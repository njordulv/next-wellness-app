// Utility function to get quiz pages based on locale
import quizPagesEn from '@/data/quiz/en'
import quizPagesDe from '@/data/quiz/de'
import quizPagesFr from '@/data/quiz/fr'

export default function getQuizPagesByLocale(locale) {
  switch (locale) {
    case 'de':
      return quizPagesDe
    case 'fr':
      return quizPagesFr
    default:
      return quizPagesEn
  }
}
