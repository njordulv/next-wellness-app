import { useTranslations } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ProgressCircular from '@/components/progress/ProgressCircular'
import PageLayout from '@/components/layouts/PageLayout'
import Slider from '@/components/slider/testimonials'

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

export default function Testimonials({ params: { locale } }: Props) {
  setRequestLocale(locale)

  const t = useTranslations('Testimonials')

  return (
    <PageLayout title={t('title')}>
      <ProgressCircular />
      <h3>{t('heading')}</h3>
      <Slider />
    </PageLayout>
  )
}
