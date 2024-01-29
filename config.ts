import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'de', 'fr'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    de: '/pathnamess',
    fr: '/pathnamesss',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
