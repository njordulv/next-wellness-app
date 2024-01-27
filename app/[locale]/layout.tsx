import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import { useLocale } from 'next-intl'
import AppProviders from '@/providers/app-providers'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Cookie from '@/components/cookies/Cookie'
import styles from '@/styles/main.module.scss'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Next Wellness App',
  description:
    'Next.js Wellness App is a web application designed to help users track their health and fitness progress',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
    lang: string
  }
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  const locale = useLocale()

  if (params.locale !== locale) {
    return <h1>Not found</h1>
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={baloo.className}>
        <AppProviders>
          <Header />
          <main className="text-center scroll-smooth pt-[68px]">
            <section className="custom-bg min-h-[685px]">
              <div className={styles.wrapper}>
                <div className={styles.content}>{children}</div>
              </div>
            </section>
          </main>
          <Footer />
          <Cookie />
        </AppProviders>
      </body>
    </html>
  )
}

export default RootLayout
