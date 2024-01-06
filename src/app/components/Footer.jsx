import styles from '../page.module.css'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div>
          Copyright &copy; {year} React Fasting App. <br />
          All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
