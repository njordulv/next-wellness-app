import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import Navigation from '../components/Navigation'
import { locales } from '@/config'
import { Baloo_2 } from 'next/font/google'

import AppProviders from './lib/providers/app-providers'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Cookie from '../components/cookies/Cookie'
import styles from '@/styles/main.module.scss'

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={baloo.className}>
        <AppProviders>
          <Header />
          <main className="text-center scroll-smooth pt-[68px]">
            <section className="custom-bg min-h-[685px]">
              <div className={styles.wrapper}>
                <div className={styles.content}>
                  <Navigation />
                  {children}
                </div>
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
