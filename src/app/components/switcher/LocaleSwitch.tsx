'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { IoChevronDown } from 'react-icons/io5'
import { locales } from '@/config'

const LocaleSwitch: React.FC = () => {
  const locale = useLocale()
  const pathName = usePathname()
  const [isActive, setIsActive] = useState(false)

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleSelectClick = () => {
    setIsActive(!isActive)
  }

  const handleOptionClick = () => {
    setIsActive(false)
  }

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        isActive &&
        e.target &&
        !(e.target as HTMLElement).closest('.select-menu')
      ) {
        setIsActive(false)
      }
    }

    if (isActive) {
      document.addEventListener('click', closeDropdown)
    }

    return () => document.removeEventListener('click', closeDropdown)
  }, [isActive])

  return (
    <div className={`select-menu ${isActive ? 'active' : ''}`}>
      <span
        className="flex gap-1 items-center cursor-pointer hover:text-blue transition-all active:scale-90"
        onClick={handleSelectClick}
      >
        {locale}
        <IoChevronDown />
      </span>
      {isActive && (
        <ul className="options">
          {locales.map((locale) => (
            <li
              key={locale}
              className="option"
              onClick={() => handleOptionClick()}
            >
              <Link
                href={redirectedPathName(locale)}
                className={
                  pathName == redirectedPathName(locale)
                    ? 'option-text active'
                    : 'option-text'
                }
              >
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LocaleSwitch
