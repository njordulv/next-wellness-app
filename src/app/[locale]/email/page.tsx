import { unstable_setRequestLocale } from 'next-intl/server'
import Email from '@/components/email/Email'

type Props = {
  params: { locale: string }
}

export const metadata = {
  title: 'Provide your email address',
  description:
    'Provide your email address for receiving your personalized fasting plan!',
}

export default function EmailPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Email />
}
