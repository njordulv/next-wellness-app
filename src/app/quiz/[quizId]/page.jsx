'use client'

import NotFound from '../../not-found'
import questions from '../../data/questions'
import QuestionTpl from '../../components/QuestionTpl'

const findQuestionBySlug = (slug) =>
  questions.find((question) => question.slug === slug)

export default function ProdDetails({ params }) {
  const currentQuestion = findQuestionBySlug(params.quizId)
  const currentIndex = questions.indexOf(currentQuestion)
  const nextIndex = currentIndex + 1

  const hasNextQuestion = nextIndex < questions.length
  const nextQuestion = hasNextQuestion ? questions[nextIndex] : ''

  return (
    <>
      {currentQuestion ? (
        <QuestionTpl
          question={currentQuestion.question}
          options={currentQuestion.options}
          path={nextQuestion.slug}
        />
      ) : (
        <NotFound />
      )}
    </>
  )
}
