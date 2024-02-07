import { ReactNode } from 'react'
import styles from '@/styles/main.module.scss'

type Props = {
  children?: ReactNode
  title: ReactNode
}

export default function PageLayoutAltTitle({ children, title }: Props) {
  return (
    <main className="text-center scroll-smooth mt-[68px] py-[60px] bg-background">
      <section className="custom-bg min-h-[560px]">
        <div className={styles.wrapper}>
          <h2 className={styles.page_heading}>{title}</h2>
          <div className={styles.content}>{children}</div>
        </div>
      </section>
    </main>
  )
}
