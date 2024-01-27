import QuizLogic from '../.@/components/quiz/QuizLogic'
import quizPages from '../../data/quizPages'

interface QuizPage {
  slug: string
  title: string
  description: string
}

interface Params {
  quizSlug: string
}

export function generateMetadata({ params }: { params: Params }) {
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

export default function QuizPage({ params }: { params: Params }) {
  return <QuizLogic params={params} />
}
