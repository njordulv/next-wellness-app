import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'de', 'fr', 'pl', 'es'] as const

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>

export const localeDetection = true

export const localePrefix = 'always'

export type AppPathnames = keyof typeof pathnames
