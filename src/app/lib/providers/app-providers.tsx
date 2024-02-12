'use client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { reduxStore, persistor } from '@/store/store'

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
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
