import Link from 'next/link'
import { GiWeightScale } from 'react-icons/gi'
import styles from '@/styles/home.module.scss'
import { getDictionary } from '@/app/get-dictionary'
import { Locale } from '@/app/i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const trans = await getDictionary(lang)

  return (
    <>
      <h1 className={styles.page_heading}>{trans['home'].welcome}</h1>
      <div className={styles.page_content}>
        <p>{trans['home'].description}</p>
        <h2>{trans['home'].features}:</h2>
        <div className={styles.page_features}>
          <ul className={styles.page_list}>
            <li>{trans['home'].list1}</li>
            <li>{trans['home'].list2}</li>
            <li>{trans['home'].list3}</li>
            <li>{trans['home'].list4}</li>
            <li>{trans['home'].list5}</li>
            <li>{trans['home'].list6}</li>
            <li>{trans['home'].list7}</li>
          </ul>
          <GiWeightScale className={styles.page_icon} />
        </div>
        <br />
        <p>{trans['home'].text1}</p>
        <p>{trans['home'].text2}</p>
      </div>
      <div className={styles.page_buttons}>
        <Link href={`/${lang}/quiz/your-goal`} className="button">
          {trans['home'].startBtn}
        </Link>
      </div>
    </>
  )
}
