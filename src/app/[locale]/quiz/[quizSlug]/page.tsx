import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import QuizLogic from '@/components/quiz/QuizLogic'
import getQuizPagesByLocale from '@/utils/localeUtils'

interface QuizPage {
  slug: string
  title: string
  description: string
}

interface Params {
  quizSlug: string
  locale: string
}

type Props = {
  params: Params
}

export function generateMetadata({ params }: { params: Params }) {
  const quizPages = getQuizPagesByLocale(params.locale)
  const quiz = quizPages.find((page: QuizPage) => page.slug === params.quizSlug)

  if (!quiz) {
    return {
      title: 'Page Not Found',
      description: 'Sorry, the requested page was not found',
    }
  }

  return {
    title: quiz.title,
    description: quiz.description,
  }
}

export default function QuizPage({ params }: Props) {
  const { locale } = params
  setRequestLocale(locale)
  getQuizPagesByLocale(params.locale)

  const t = useTranslations('Quiz')
  return <QuizLogic params={params} />
}
