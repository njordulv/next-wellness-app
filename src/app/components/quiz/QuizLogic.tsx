'use client'

import { useEffect } from 'react'
import { useDispatch } from '@/store/store'
import { setQuizSlug, setQuizTotal } from '@/store/slices/quizSlice'
import quizPages from '@/data/quizPages'
import NotFound from '@/app/not-found'
import QuizTemplate from './QuizTemplate'
import Height from './Height'
import Weight from './Weight'
import WeightGoal from './WeightGoal'
import Results from './Results'

interface QuizLogicProps {
  params: {
    quizSlug: string
  }
}

const findPageBySlug = (slug: string) =>
  quizPages.find((page) => page.slug === slug)

const QuizLogic: React.FC<QuizLogicProps> = ({ params }) => {
  const dispatch = useDispatch()
  const quizTotal = quizPages.length
  const currentQuiz = findPageBySlug(params.quizSlug)
  const currentIndex = currentQuiz ? quizPages.indexOf(currentQuiz) + 1 : 0
  const nextIndex = currentIndex + 1
  const hasNextPage = nextIndex <= quizTotal
  const nextPage = hasNextPage ? quizPages[nextIndex - 1] : null

  useEffect(() => {
    dispatch(setQuizSlug(`${currentIndex}`))
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
          {params.quizSlug === 'height' && <Height title="" />}
          {params.quizSlug === 'weight' && <Weight title="" />}
          {params.quizSlug === 'weight-goal' && <WeightGoal title="" />}
          {params.quizSlug === 'results' && <Results title="" />}
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default QuizLogic
