'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IoFitnessOutline, IoArrowBackCircleOutline } from 'react-icons/io5'
import ThemeSwitch from '../switcher/ThemeSwitch'
import GetPlanBtn from '../../components/GetPlanBtn'
import TotalQuiz from '../quiz/TotalQuiz'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const enablePath = pathname === '/offer'
  const quizPath = pathname.startsWith('/quiz')

  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div
          className={`flex items-center relative ${
            enablePath ? `flex-row justify-end` : `justify-center flex-col`
          }`}
        >
          <ThemeSwitch />
          {quizPath && (
            <>
              <IoArrowBackCircleOutline
                className="absolute flex left-12 text-[28px] cursor-pointer hover:text-blue transition-all active:scale-90"
                onClick={() => router.back()}
              />
              <TotalQuiz />
            </>
          )}
          {enablePath ? (
            <GetPlanBtn />
          ) : (
            <Link href="/" title="Wellness App">
              <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
