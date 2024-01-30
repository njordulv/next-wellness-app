import { useTranslations } from 'next-intl'
import ThemeSwitch from '../switcher/ThemeSwitch'
import LocaleSwitch from '../switcher/LocaleSwitch'
import GetPlanBtn from '../GetPlanBtn'
import HeaderContent from './HeaderCSR'

export default function HeaderSSR() {
  const t = useTranslations('Header')

  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className={`flex items-center gap-4 relative h-[48px]`}>
          <ThemeSwitch />
          <LocaleSwitch locale={t('locale')} />
          <GetPlanBtn plan={t('plan')} />
          <HeaderContent />
        </div>
      </div>
    </header>
  )
}
