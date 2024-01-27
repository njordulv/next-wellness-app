import { useTranslations } from 'next-intl'
import Back from '@/components/Back'

export const metadata = {
  title: 'Page Not Found',
  description: '404 - Page Not Found',
}

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <>
      <div className="grid justify-center">
        <h1 className="m-0">404</h1>
        <hr />
        <h3 className="m-0">{t('text')}</h3>
        <br />
        <Back />
      </div>
    </>
  )
}
