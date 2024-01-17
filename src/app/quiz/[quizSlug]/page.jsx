import QuizLogic from '../../components/quiz/QuizLogic'
import quizPages from '../../data/quizPages'

export function generateMetadata({ params }) {
  const quiz = quizPages.find((page) => page.slug === params.quizSlug)

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

export default function QuizPage({ params }) {
  return <QuizLogic params={params} />
}
