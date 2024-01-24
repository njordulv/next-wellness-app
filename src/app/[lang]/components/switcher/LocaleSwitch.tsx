'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { GrLanguage } from 'react-icons/gr'
import { i18n, type Locale } from '@/app/i18n-config'

export default function LocaleSwitch() {
  const pathName = usePathname()
  const [isActive, setIsActive] = useState(false)
  const [selectedText, setSelectedText] = useState('')

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleSelectClick = () => {
    setIsActive(!isActive)
  }

  const handleOptionClick = (optionText: string) => {
    setSelectedText(optionText)
    setIsActive(false)
  }

  return (
    <div
      className={`flex gap-2 items-center absolute left-[50px] select-menu ${
        isActive ? 'active' : ''
      }`}
    >
      <GrLanguage
        className="text-[22px] cursor-pointer hover:text-blue transition-all active:scale-90"
        onClick={handleSelectClick}
      />
      {isActive && (
        <ul className="options">
          {i18n.locales.map((locale) => (
            <li
              key={locale}
              className="option"
              onClick={() => handleOptionClick(locale)}
            >
              <Link href={redirectedPathName(locale)} className="option-text">
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
