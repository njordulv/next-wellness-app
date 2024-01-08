import Link from 'next/link'
import { GiWeightScale } from 'react-icons/gi'
import styles from './styles/home.module.scss'

export default function Home() {
  return (
    <>
      <h1 className={styles.page_heading}>Welcome to the Next Wellness App!</h1>
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
      <br />
      <div className={styles.page_buttons}>
        <Link href="/quiz" className="button">
          Start Now
        </Link>
      </div>
    </>
  )
}
