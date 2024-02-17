'use client'

import { IoInvertMode, IoInvertModeOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div
      className="flex text-2xl cursor-pointer hover:text-blue trans active:scale-90"
      title={resolvedTheme === 'dark' ? 'Light Theme' : 'Dark Theme'}
    >
      {!mounted ? (
        <IoInvertMode />
      ) : resolvedTheme === 'dark' ? (
        <IoInvertMode onClick={() => setTheme('light')} />
      ) : (
        <IoInvertModeOutline onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}
