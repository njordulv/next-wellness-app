'use client'

import { useEffect } from 'react'
import { notFound } from 'next/navigation'
import { useDispatch } from '@/store/store'
import { setQuizCurrent, setQuizTotal } from '@/store/slices/stepSlice'
import PageLayoutWithoutTitle from '@/components/layouts/PageLayoutWithoutTitle'
import getQuizPagesByLocale from '@/utils/localeUtils'
import QuizTemplate from './QuizTemplate'
import Height from './Height'
import Weight from './Weight'
import WeightGoal from './WeightGoal'
import Results from './Results'

interface QuizLogicProps {
  params: {
    quizSlug: string
    locale: string
  }
}

const QuizLogic: React.FC<QuizLogicProps> = ({ params }) => {
  const dispatch = useDispatch()
  const quizPages = getQuizPagesByLocale(params.locale)
  const quizTotal = quizPages.length
  const currentQuiz = quizPages.find((page) => page.slug === params.quizSlug)
  const currentIndex = currentQuiz ? quizPages.indexOf(currentQuiz) + 1 : 0
  const nextIndex = currentIndex + 1
  const hasNextPage = nextIndex <= quizTotal
  const nextPage = hasNextPage ? quizPages[nextIndex - 1] : null

  useEffect(() => {
    dispatch(setQuizCurrent(currentIndex))
    dispatch(setQuizTotal(quizTotal))
  }, [dispatch, currentIndex, quizTotal])

  return (
    <>
      {currentQuiz ? (
        <PageLayoutWithoutTitle>
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
        </PageLayoutWithoutTitle>
      ) : (
        notFound()
      )}
    </>
  )
}

export default QuizLogic
