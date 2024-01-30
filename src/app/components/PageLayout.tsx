import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import Footer from '../components/common/Footer'
import Cookie from '../components/cookies/CookieLayout'
import Header from './common/HeaderSSR'
import styles from '@/styles/main.module.scss'

type Props = {
  children?: ReactNode
  title: ReactNode
}

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout')

  return (
    <>
      <Header />
      <main className="text-center scroll-smooth pt-[118px] bg-background">
        <section className="custom-bg min-h-[585px]">
          <div className={styles.wrapper}>
            <h1 className={styles.page_heading}>{title}</h1>
            <div className={styles.content}>{children}</div>
          </div>
        </section>
      </main>
      <Cookie />
      <Footer />
    </>
  )
}
