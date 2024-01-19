'use client'

import { useEffect } from 'react'
import { useDispatch } from '@Store/store'
import { setQuizSlug, setQuizTotal } from '@Store/slices/quizSlice'
import quizPages from '../../data/quizPages'
import NotFound from '../../not-found'
import QuizTemplate from './QuizTemplate'
import Height from './Height'
import Weight from './Weight'
import WeightGoal from './WeightGoal'
import Results from './Results'

const findPageBySlug = (slug) => quizPages.find((page) => page.slug === slug)

export default function QuizLogic({ params }) {
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
            heading={currentQuiz.heading}
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
