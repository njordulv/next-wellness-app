import { useTranslations } from 'next-intl'
import Back from '@/components/Back'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <div className="grid justify-center">
      <h1>{t('title')}</h1>
      <hr />
      <h3 className="my-7">{t('description')}</h3>
      <Back back={t('back')} />
    </div>
  )
}
