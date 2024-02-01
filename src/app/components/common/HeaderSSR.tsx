import { useTranslations } from 'next-intl'
import ThemeSwitch from '@/components/switcher/ThemeSwitch'
import LocaleSwitch from '@/components/switcher/LocaleSwitch'
import GetPlanBtn from '@/components/GetPlanBtn'
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
