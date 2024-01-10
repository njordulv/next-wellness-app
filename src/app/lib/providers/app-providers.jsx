'use client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { reduxStore } from '../redux/store'

export function AppProviders({ children }) {
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
