import Link from 'next/link'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import styles from '../../styles/header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
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
