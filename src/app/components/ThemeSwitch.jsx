'use client'

import { IoSunnyOutline, IoMoonSharp, IoInvertMode } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="absolute flex left-0 text-2xl">
      {!mounted ? (
        <IoInvertMode />
      ) : resolvedTheme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <IoSunnyOutline />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <IoMoonSharp />
        </button>
      )}
    </div>
  )
}
