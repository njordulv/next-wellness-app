'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IoFitnessOutline, IoArrowBackCircleOutline } from 'react-icons/io5'
import { type Locale } from '@/app/i18n-config'
import LocaleSwitch from '@/components/switcher/LocaleSwitch'
import ThemeSwitch from '@/components/switcher/ThemeSwitch'
import GetPlanBtn from '@/components/GetPlanBtn'
import TotalQuiz from '@/components/quiz/TotalQuiz'

type HeaderProps = {
  lang: Locale
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const router = useRouter()
  const pathname = usePathname()
  const enablePath = pathname === `/${lang}/offer`
  const quizPath = pathname.startsWith(`/${lang}/quiz`)

  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div
          className={`flex items-center relative ${
            enablePath ? `flex-row justify-end` : `justify-center flex-col`
          }`}
        >
          <ThemeSwitch />
          <LocaleSwitch />
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
            <Link href={`/${lang}`} title="Wellness App">
              <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
