import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Email from '@/components/email/Email'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Email' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function EmailPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)

  return <Email />
}
