import { useTranslations } from 'next-intl'
import { BiLoaderAlt } from 'react-icons/bi'
import PageLayout from '../components/PageLayout'

export default function Loading() {
  const t = useTranslations('Loading')

  return (
    <PageLayout title={t('title')}>
      <div className="grid justify-center">
        <BiLoaderAlt className="animate-spinner custom-color-pink text-5xl" />
      </div>
    </PageLayout>
  )
}
