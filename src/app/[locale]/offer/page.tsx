import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Offer from '@/components/offer/Offer'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Offer' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function OfferPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Offer />
}
