import { ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import ThemeSwitch from '../switcher/ThemeSwitch'
import LocaleSwitch from '../switcher/LocaleSwitch'

type Props = {
  children: ReactNode
  params: { locale: string }
}

export default function Header() {
  const t = useTranslations('LocaleSwitcher')
  const current = t('current')

  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className={`flex items-center gap-4 relative h-[48px]`}>
          <ThemeSwitch />
          <LocaleSwitch locale={current} />
        </div>
      </div>
    </header>
  )
}
