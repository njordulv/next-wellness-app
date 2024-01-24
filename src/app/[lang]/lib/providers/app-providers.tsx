'use client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { reduxStore } from '@/app/[lang]/lib/redux/store'

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem
      storageKey="theme"
    >
      <Provider store={reduxStore}>{children}</Provider>
    </ThemeProvider>
  )
}
