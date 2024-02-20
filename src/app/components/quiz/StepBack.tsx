'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from '@/store/store'
import { selectQuizCurrent } from '@/store/slices/stepSlice'
import { resetWeightGoalForm } from '@/store/slices/formSlice'
import getQuizPagesByLocale from '@/utils/localeUtils'

const StepBack = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const quizPages = getQuizPagesByLocale(locale)
  const currentIndex = useSelector(selectQuizCurrent)
  const prevIndex = currentIndex - 2
  const hasPrevPage = prevIndex >= 0
  const prevPage = hasPrevPage ? quizPages[prevIndex] : null
  const path = prevPage ? `/${locale}/quiz/${prevPage.slug}` : `/${locale}`

  const backHandler = () => {
    if (pathname === `/${locale}/quiz/weight-goal`) {
      dispatch(resetWeightGoalForm())
    }
    router.push(path)
  }

  return (
    <IoArrowBackCircleOutline
      className="absolute flex left-[71px] text-[27px] cursor-pointer hover:text-blue trans active:scale-90"
      onClick={backHandler}
      title="Step Back"
    />
  )
}

export default StepBack
