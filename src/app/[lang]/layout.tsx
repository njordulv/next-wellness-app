import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import { i18n, type Locale } from '@/app/i18n-config'
import AppProviders from '@/app/[lang]/lib/providers/app-providers'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Cookie from '@/components/cookies/Cookie'
import styles from '@/styles/main.module.scss'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Next Wellness App',
  description:
    'Next.js Wellness App is a web application designed to help users track their health and fitness progress',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={baloo.className}>
        <AppProviders>
          <Header lang={params.lang} />
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
