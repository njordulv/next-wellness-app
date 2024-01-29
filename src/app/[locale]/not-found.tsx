import { useTranslations } from 'next-intl'
import Back from '../components/Back'

// app/[locale]/[...rest]/page.tsx is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <>
      <div className="grid justify-center">
        <h1 className="my-3">{t('title')}</h1>
        <hr />
        <h3 className="my-3">{t('description')}</h3>
        <Back back={t('back')} />
      </div>
    </>
  )
}
