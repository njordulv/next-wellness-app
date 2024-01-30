'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

type Props = {
  plan: string
}

export default function GetPlanBtn({ plan }: Props) {
  const locale = useLocale()
  const pathname = usePathname()
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
          {plan}
        </button>
      )}
    </>
  )
}
