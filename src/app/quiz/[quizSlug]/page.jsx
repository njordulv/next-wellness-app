'use client'

import { useEffect } from 'react'
import NotFound from '../../not-found'
import quizPages from '../../data/quizPages'
import QuizTemplate from '../../components/quiz/QuizTemplate'
import Height from '../../components/quiz/Height'
import Weight from '../../components/quiz/Weight'
import WeightGoal from '../../components/quiz/WeightGoal'
import Results from '../../components/quiz/Results'
import { useDispatch } from '../../lib/redux/store'
import { setQuizSlug, setQuizTotal } from '../../lib/redux/slices/quizSlice'

const findPageBySlug = (slug) => quizPages.find((page) => page.slug === slug)

export default function QuizDetails({ params }) {
  const dispatch = useDispatch()
  const quizTotal = quizPages.length
  const currentQuiz = findPageBySlug(params.quizSlug)
  const currentIndex = quizPages.indexOf(currentQuiz) + 1
  const nextIndex = currentIndex + 1
  const hasNextPage = nextIndex < quizTotal
  const nextPage = hasNextPage ? quizPages[nextIndex - 1] : ''

  useEffect(() => {
    dispatch(setQuizSlug(currentIndex))
    dispatch(setQuizTotal(quizTotal))
  }, [dispatch, currentIndex, quizTotal])

  return (
    <>
      {currentQuiz ? (
        <>
          <QuizTemplate
            title={currentQuiz.title}
            options={currentQuiz.options}
            path={nextPage ? nextPage.slug : '/quiz/results'}
          />
          {params.quizSlug === 'height' && <Height />}
          {params.quizSlug === 'weight' && <Weight />}
          {params.quizSlug === 'weight-goal' && <WeightGoal />}
          {params.quizSlug === 'results' && <Results />}
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}
