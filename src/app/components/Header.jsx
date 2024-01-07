import Link from 'next/link'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitcher from './ThemeSwitcher'
import styles from '../page.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div className={styles.container}>
          <ThemeSwitcher />
          <Link href="/" className={styles.logo} title="Fasting App">
            <IoFitnessOutline className={styles.logoIcon} />
          </Link>
        </div>
      </div>
    </header>
  )
}
