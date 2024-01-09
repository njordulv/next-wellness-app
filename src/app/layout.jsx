import { Baloo_2 } from 'next/font/google'
import { Providers } from './theme-provider'
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import styles from './styles/main.module.css'
import './globals.css'

const baloo = Baloo_2({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
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
        <Providers>
          <Header />
          <main className="text-center scroll-smooth">
            <section className="custom-bg min-h-[585px]">
              <div className={styles.wrapper}>
                <div className={styles.content}>{children}</div>
              </div>
            </section>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
