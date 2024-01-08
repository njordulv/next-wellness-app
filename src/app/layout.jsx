import { Baloo_2 } from 'next/font/google'
import { Providers } from './lib/providers'
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
    <Providers>
      <html lang="en">
        <body className={baloo.className}>
          <Header />
          <main className={styles.main}>
            <section className={styles.mainSection}>
              <div className={styles.wrapper}>
                <div className={styles.content}>{children}</div>
              </div>
            </section>
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
