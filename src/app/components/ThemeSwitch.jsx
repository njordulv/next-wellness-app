'use client'

import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="absolute flex left-0 text-2xl">
      {!mounted ? (
        <BiLoaderAlt className="animate-spinner" />
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
