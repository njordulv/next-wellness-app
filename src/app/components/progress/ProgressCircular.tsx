'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressCircular: React.FC = () => {
  const locale = useLocale()
  const [percentage, setPercentage] = useState<number>(0)
  const router = useRouter()

  useEffect(() => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 1
      if (progress > 100) {
        clearInterval(interval)
        setTimeout(() => {
          router.push(`/${locale}/email`)
        }, 1000)
      } else {
        setPercentage(progress)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [router, locale])

  return (
    <CircularProgressbar
      className="w-[190px] h-[190px] mb-5"
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={5}
      styles={buildStyles({
        textColor: 'var(--color)',
        pathColor: 'var(--purple)',
        trailColor: 'var(--dark)',
        textSize: '15px',
      })}
    />
  )
}

export default ProgressCircular
