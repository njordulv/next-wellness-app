import { useTranslations } from 'next-intl'
import Cookie from './Cookie'

export default function CookieMain() {
  const t = useTranslations('Cookie')
  return <Cookie text={t('text')} />
}
