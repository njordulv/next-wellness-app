import { useTranslations } from 'next-intl'
import PageLayout from '@/components/layouts/PageLayout'
import Back from '@/components/Back'

// app/[locale]/[...rest]/page.tsx is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <PageLayout title={t('title')}>
      <div className="grid justify-center">
        <hr />
        <h3 className="my-7">{t('description')}</h3>
        <Back back={t('back')} />
      </div>
    </PageLayout>
  )
}
