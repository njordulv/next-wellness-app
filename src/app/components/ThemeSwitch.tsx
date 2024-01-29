'use client'

import { IoSunny, IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="absolute flex left-0 text-2xl cursor-pointer hover:text-blue transition-all active:scale-90">
      {!mounted ? (
        <IoSunny />
      ) : resolvedTheme === 'dark' ? (
        <IoSunnyOutline onClick={() => setTheme('light')} />
      ) : (
        <IoMoonSharp onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}
