'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MdGTranslate } from 'react-icons/md'
import { locales } from '@/config'

const LocaleSwitch: React.FC = () => {
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
        !(e.target as HTMLElement).closest('.language-select')
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
    <div className={`language-select ${isActive ? 'active' : ''}`}>
      <div
        className="flex gap-[1px] items-center cursor-pointer hover:text-blue trans active:scale-90"
        onClick={handleSelectClick}
        title="Language"
      >
        <MdGTranslate className="text-[22px]" />
      </div>
      {isActive && (
        <ul className="options">
          {locales.map((locale) => (
            <li
              key={locale}
              className={
                pathName == redirectedPathName(locale)
                  ? 'option active'
                  : 'option'
              }
              onClick={() => handleOptionClick()}
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

export default LocaleSwitch
