'use client'

import { useEffect } from 'react'
import NotFound from '../../not-found'
import quizData from '../../data/quiz'
import QuestionTpl from '../../components/quiz/QuestionTpl'
import Height from '../../components/quiz/Height'
import Weight from '../../components/quiz/Weight'
import WeightGoal from '../../components/quiz/Weight-goal'
import Results from '../../components/quiz/Results'
import { useDispatch } from '../../lib/redux/store'
import { setQuizId, setQuizTotal } from '../../lib/redux/slices/quizSlice'

const findQuestionBySlug = (slug) =>
  quizData.find((question) => question.slug === slug)

export default function QuizDetails({ params }) {
  const dispatch = useDispatch()
  const quizTotal = quizData.length
  const currentQuestion = findQuestionBySlug(params.quizId)
  const currentIndex = quizData.indexOf(currentQuestion)
  const nextIndex = currentIndex + 1
  const hasNextQuestion = nextIndex < quizTotal
  const nextQuestion = hasNextQuestion ? quizData[nextIndex] : ''

  useEffect(() => {
    dispatch(setQuizId(currentIndex))
    dispatch(setQuizTotal(quizTotal))
  }, [dispatch, currentIndex, quizTotal])

  return (
    <>
      {currentQuestion ? (
        <>
          <QuestionTpl
            question={currentQuestion.question}
            options={currentQuestion.options}
            path={nextQuestion ? nextQuestion.slug : '/quiz/results'}
          />
          {params.quizId === 'height' && <Height />}
          {params.quizId === 'weight' && <Weight />}
          {params.quizId === 'weight-goal' && <WeightGoal />}
          {params.quizId === 'results' && <Results />}
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}
