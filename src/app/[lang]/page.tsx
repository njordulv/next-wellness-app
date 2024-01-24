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
  const dictionary = await getDictionary(lang)

  return (
    <>
      <h1 className={styles.page_heading}>{dictionary['home'].welcome}</h1>
      <div className={styles.page_content}>
        <p>
          Get on the path to a healthier you with our wellness and BMI
          calculator. Start your journey to a better lifestyle today.
        </p>
        <h2>Features:</h2>
        <div className={styles.page_features}>
          <ul className={styles.page_list}>
            <li>Take our quiz to customize your wellness plan</li>
            <li>Calculate your Body Mass Index (BMI)</li>
            <li>Get results and recommendations based on your BMI</li>
            <li>Track your progress with our progress bars</li>
            <li>Easily navigate through different quiz and result pages</li>
            <li>Check our testimonials</li>
            <li>Choose your best activity plan</li>
          </ul>
          <GiWeightScale className={styles.page_icon} />
        </div>
        <br />
        <p>Start exploring the app to unlock a healthier you!</p>
        <p>Ready to begin? Click below to start your personalized quiz.</p>
      </div>
      <div className={styles.page_buttons}>
        <Link href={`/${lang}/quiz/your-goal`} className="button">
          Start Now
        </Link>
      </div>
    </>
  )
}
