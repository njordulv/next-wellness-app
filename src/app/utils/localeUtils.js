// Utility function to get quiz pages based on locale
import quizPagesEn from '@/data/quizPages_en'
import quizPagesDe from '@/data/quizPages_de'
import quizPagesFr from '@/data/quizPages_fr'

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
