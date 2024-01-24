'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '@/app/i18n-config'

export default function LocaleSwitch() {
  const pathName = usePathname()
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <>
      <ul className="flex gap-2 items-center absolute left-[100px]">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
