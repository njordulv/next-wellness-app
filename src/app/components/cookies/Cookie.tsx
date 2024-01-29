'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { LiaCookieBiteSolid } from 'react-icons/lia'

type Props = {
  text: string
  link: string
}

export default function Cookie({ text, link }: Props) {
  const locale = useLocale()
  const [showCookie, setShowCookie] = useState<boolean>(false)

  useEffect(() => {
    const consentCookie = getCookie('user-consent')

    if (!consentCookie) {
      setShowCookie(true)
    }
  }, [])

  const handleCloseCookie = () => {
    setCookie('user-consent', 'true', { maxAge: 60 * 6 * 24 * 30 })
    setCookie('next-wellness-cookie', 'XXXXXXXXXXXXXXXXXXX')
    setShowCookie(false)
  }

  return (
    <>
      {showCookie && (
        <div
          className={`flex items-center fixed bottom-0 left-0 right-0 z-10 bg-background-darker py-4`}
        >
          <div className="w-full max-w-[620px] px-4 mx-auto box-border">
            <div className="relative flex items-center justify-center gap-4">
              <LiaCookieBiteSolid className="text-[30px] w-16 hidden sm:flex" />
              <div className="text-[14px]">
                {text}&nbsp;
                <Link href={`/${locale}/cookie-policy`}>{link}</Link>.
              </div>
              <button
                className="button button--extra-small"
                onClick={handleCloseCookie}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
