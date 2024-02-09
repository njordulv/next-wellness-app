import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function GetPlanBtn() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('Header')
  const offerPage = pathname === `/${locale}/offer`

  const handleScrollToPlan = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {offerPage && (
        <button
          className="absolute right-0 button button--small"
          onClick={handleScrollToPlan}
        >
          {t('plan')}
        </button>
      )}
    </>
  )
}
