// Utility function to get quiz pages based on locale
import quizPagesEn from '@/data/quiz/en'
import quizPagesDe from '@/data/quiz/de'
import quizPagesFr from '@/data/quiz/fr'
import quizPagesPl from '@/data/quiz/pl'
import quizPagesEs from '@/data/quiz/es'

export default function getQuizPagesByLocale(locale) {
  switch (locale) {
    case 'de':
      return quizPagesDe
    case 'fr':
      return quizPagesFr
    case 'pl':
      return quizPagesPl
    case 'es':
      return quizPagesEs
    default:
      return quizPagesEn
  }
}
