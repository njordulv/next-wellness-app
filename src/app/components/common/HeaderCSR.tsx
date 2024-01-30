'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { IoFitnessOutline, IoArrowBackCircleOutline } from 'react-icons/io5'
import TotalQuiz from '../../components/quiz/TotalQuiz'

export default function HeaderCSR() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const offerPage = pathname === `/${locale}/offer`
  const quizPages = pathname.startsWith(`/${locale}/quiz`)

  return (
    <>
      {quizPages && (
        <>
          <IoArrowBackCircleOutline
            className="absolute flex left-[97px] text-[28px] cursor-pointer hover:text-blue transition-all active:scale-90"
            onClick={() => router.back()}
          />
          <TotalQuiz />
        </>
      )}
      {!offerPage && (
        <Link
          href={`/${locale}`}
          title="Wellness App Logo"
          className="absolute left-0 right-0 m-auto w-[48px]"
        >
          <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
        </Link>
      )}
    </>
  )
}
