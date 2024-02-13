'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitch from '@/components/switcher/ThemeSwitch'
import LocaleSwitch from '@/components/switcher/LocaleSwitch'
import GetPlanBtn from '@/components/GetPlanBtn'
import StepBack from '@/components/quiz/StepBack'
import StepProgress from '@/components/quiz/StepProgress'
import TotalQuiz from '@/components/quiz/TotalQuiz'

export default function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const offerPage = pathname === `/${locale}/offer`
  const quizPages = pathname.startsWith(`/${locale}/quiz`)

  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className="flex items-center gap-4 relative h-[48px]">
          <LocaleSwitch />
          <ThemeSwitch />
          <GetPlanBtn />
          {quizPages && (
            <>
              <StepBack />
              <StepProgress />
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
        </div>
      </div>
    </header>
  )
}
