'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { IoFitnessOutline, IoArrowBackCircleOutline } from 'react-icons/io5'
import GetPlanBtn from '@/components/GetPlanBtn'
import TotalQuiz from '@/components/quiz/TotalQuiz'

const Header: React.FC = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const enablePath = pathname === `/${locale}/offer`
  const quizPath = pathname.startsWith(`/${locale}/quiz`)

  return (
    <>
      <div
        className={`flex items-center relative ${
          enablePath ? `flex-row justify-end` : `justify-center flex-col`
        }`}
      >
        {quizPath && (
          <>
            <IoArrowBackCircleOutline
              className="absolute flex left-[97px] text-[28px] cursor-pointer hover:text-blue transition-all active:scale-90"
              onClick={() => router.back()}
            />
            <TotalQuiz />
          </>
        )}
        {enablePath ? (
          <GetPlanBtn />
        ) : (
          <Link href={`/${locale}`} title="Wellness App">
            <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
          </Link>
        )}
      </div>
    </>
  )
}

export default Header