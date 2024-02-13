'use client'

import { IoInvertMode, IoInvertModeOutline } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="flex text-2xl cursor-pointer hover:text-blue transition-all active:scale-90">
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
