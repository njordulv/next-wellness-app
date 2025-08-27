import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import PageLayout from '@/components/layouts/PageLayout'

type Props = {
  params: { locale: string }
}

export default function PrivacyPolicy({ params: { locale } }: Props) {
  setRequestLocale(locale)

  const t = useTranslations('PrivacyPolicy')

  return (
    <PageLayout title={t('title')}>
      <div className="text-left">
        <p>{t('intro')}</p>
        <h3>{t('infoCollectionTitle')}</h3>
        <p>{t('infoCollectionDesc')}</p>
        <ul className="list-disc">
          <li>
            <p>{t('emailInfo')}</p>
          </li>
          <li>
            <p>{t('usageDataInfo')}</p>
          </li>
        </ul>
        <h3>{t('dataSecurityTitle')}</h3>
        <p>{t('dataSecurityDesc')}</p>
        <h3>{t('infoSharingTitle')}</h3>
        <p>{t('infoSharingDesc')}</p>
        <h3>{t('consentTitle')}</h3>
        <p>{t('consentDesc')}</p>
        <h3>{t('updatesTitle')}</h3>
        <p>{t('updatesDesc')}</p>
        <h3>{t('contactTitle')}</h3>
        <p>{t('contactDesc')}</p>
        <p>{t('closingNote')}</p>
      </div>
    </PageLayout>
  )
}
