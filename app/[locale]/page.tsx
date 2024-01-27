import Link from 'next/link'
import { GiWeightScale } from 'react-icons/gi'
import styles from '@/styles/home.module.scss'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <h1 className={styles.page_heading}>{t('welcome')}</h1>
      <div className={styles.page_content}>
        <p>{t('description')}</p>
        <h2>{t('features')}</h2>
        <div className={styles.page_features}>
          <ul className={styles.page_list}>
            <li>{t('list1')}</li>
            <li>{t('list2')}</li>
            <li>{t('list3')}</li>
            <li>{t('list4')}</li>
            <li>{t('list5')}</li>
            <li>{t('list6')}</li>
            <li>{t('list7')}</li>
          </ul>
          <GiWeightScale className={styles.page_icon} />
        </div>
        <br />
        <p>{t('text1')}</p>
        <p>{t('text2')}</p>
      </div>
      <div className={styles.page_buttons}>
        <Link href={`/quiz/your-goal`} className="button">
          {t('startBtn')}
        </Link>
      </div>
    </>
  )
}
