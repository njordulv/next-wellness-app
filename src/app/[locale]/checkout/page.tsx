import { unstable_setRequestLocale } from 'next-intl/server'
import Checkout from '@/components/checkout/Checkout'

type Props = {
  params: { locale: string }
}

export const metadata = {
  title: 'Next Wellness App Checkout',
  description: 'Add details of your payment information',
}

export default function CheckoutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Checkout />
}
