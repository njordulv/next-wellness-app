'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useSelector } from '@/store/store'
import { selectQuizSlug } from '@/store/slices/quizSlice'
import getQuizPagesByLocale from '@/utils/localeUtils'

const StepBack = () => {
  const locale = useLocale()
  const router = useRouter()
  const quizPages = getQuizPagesByLocale(locale)
  const currentIndex = useSelector(selectQuizSlug)
  const currentNumber = parseFloat(currentIndex)
  const prevIndex = currentNumber - 2
  const hasPrevPage = prevIndex >= 0
  const prevPage = hasPrevPage ? quizPages[prevIndex] : null
  const path = prevPage ? `/${locale}/quiz/${prevPage.slug}` : `/${locale}`

  return (
    <IoArrowBackCircleOutline
      className="absolute flex left-[97px] text-[28px] cursor-pointer hover:text-blue transition-all active:scale-90"
      onClick={() => router.push(path)}
    />
  )
}

export default StepBack
