import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import PageLayout from '@/components/layouts/PageLayout'

type Props = {
  params: { locale: string }
}

export default function CookiePolicy({ params: { locale } }: Props) {
  setRequestLocale(locale)

  const t = useTranslations('CookiePolicy')

  return (
    <PageLayout title={t('title')}>
      <div className="text-left">
        <p>
          <b>{t('updated')}: 29.01.2024</b>
        </p>
        <p>{t('text1')}</p>
        <h3>{t('head1')}</h3>
        <p>{t('text2')}</p>
        <p>{t('text3')}</p>
        <h3>{t('head2')}</h3>
        <p>{t('text4')}</p>
        <h3>{t('head3')}</h3>
        <p>{t('text5')}</p>
      </div>
    </PageLayout>
  )
}
