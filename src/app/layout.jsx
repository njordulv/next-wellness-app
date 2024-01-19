import { Baloo_2 } from 'next/font/google'
import { AppProviders } from '@App/lib/providers/app-providers'
import Header from '@Components/common/Header'
import Footer from '@Components/common/Footer'
import styles from '@Styles/main.module.scss'
import '@App/globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Next Wellness App',
  description:
    'Next.js Wellness App is a web application designed to help users track their health and fitness progress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        </AppProviders>
      </body>
    </html>
  )
}
