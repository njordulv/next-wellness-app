import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { Baloo_2 } from 'next/font/google'
import { locales } from '@/config'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import AppProviders from './lib/providers/app-providers'
import NextIntlProvider from './lib/providers/NextIntlProvider'
import Footer from '../components/common/Footer'
import Cookie from '../components/cookies/CookieLayout'
import Header from '../components/common/HeaderSSR'

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
  let messages
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={baloo.className}>
        <NextIntlProvider
          locale={locale}
          messages={messages}
          timeZone="Europe/Berlin"
          now={new Date()}
        >
          <AppProviders>
            <Header />
            {children}
            <Cookie />
            <Footer />
          </AppProviders>
        </NextIntlProvider>
      </body>
    </html>
  )
}
