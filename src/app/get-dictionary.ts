import 'server-only'
import type { Locale } from './i18n-config'

const dictionaries = {
  en: () =>
    import('../../public/locales/en/index.json').then(
      (module) => module.default
    ),
  de: () =>
    import('../../public/locales/de/index.json').then(
      (module) => module.default
    ),
  fr: () =>
    import('../../public/locales/fr/index.json').then(
      (module) => module.default
    ),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
