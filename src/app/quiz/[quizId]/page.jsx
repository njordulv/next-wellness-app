'use client'

import { useEffect } from 'react'
import NotFound from '../../not-found'
import questions from '../../data/questions'
import QuestionTpl from '../../components/QuestionTpl'
import { useDispatch } from '../../lib/redux/store'
import { setQuizId, setQuizTotal } from '../../lib/redux/slices/quizSlice'

const findQuestionBySlug = (slug) =>
  questions.find((question) => question.slug === slug)

export default function QuizDetails({ params }) {
  const dispatch = useDispatch()
  const quizTotal = questions.length
  const currentQuestion = findQuestionBySlug(params.quizId)
  const currentIndex = questions.indexOf(currentQuestion)
  const nextIndex = currentIndex + 1
  const hasNextQuestion = nextIndex < quizTotal
  const nextQuestion = hasNextQuestion ? questions[nextIndex] : ''

  useEffect(() => {
    dispatch(setQuizId(currentIndex))
    dispatch(setQuizTotal(quizTotal))
  }, [dispatch, currentIndex, quizTotal])

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
