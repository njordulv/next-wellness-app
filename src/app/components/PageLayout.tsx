import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import LocaleSwitcher from './LocaleSwitcher'
import styles from '@/styles/main.module.scss'

type Props = {
  children?: ReactNode
  title: ReactNode
}

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout')

  return (
    <main className="text-center scroll-smooth pt-[118px] bg-background">
      <section className="custom-bg min-h-[585px]">
        <div className={styles.wrapper}>
          <h1 className={styles.page_heading}>{title}</h1>
          <LocaleSwitcher />
          <div className={styles.content}>{children}</div>
        </div>
      </section>
    </main>
  )
}
