import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import styles from '@/styles/main.module.scss'

type Props = {
  children?: ReactNode
}

export default function PageLayoutWithoutTitle({ children }: Props) {
  const t = useTranslations('PageLayout')

  return (
    <>
      <main className="text-center scroll-smooth pt-[118px] pb-[50px] bg-background">
        <section className="custom-bg min-h-[585px]">
          <div className={styles.wrapper}>
            <div className={styles.content}>{children}</div>
          </div>
        </section>
      </main>
    </>
  )
}
