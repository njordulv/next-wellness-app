import { unstable_setRequestLocale } from 'next-intl/server'
import Offer from '../../components/offer/Offer'

type Props = {
  params: { locale: string }
}

export const metadata = {
  title: 'Choose Your Plan',
  description: 'Your custom plan awaits!',
}

export default function OfferPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Offer />
}
