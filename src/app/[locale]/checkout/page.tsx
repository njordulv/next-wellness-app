import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Checkout from '@/components/checkout/Checkout'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Checkout' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function CheckoutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Checkout />
}
