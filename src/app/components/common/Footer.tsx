import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-col items-center text-center py-5 text-[13px]">
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className="relative flex flex-col items-center justify-center">
          <p className="m-0">
            {t('copyright')} &copy; {year} Next Wellness App.
          </p>
          <p className="m-0">{t('rights')}.</p>
        </div>
      </div>
    </footer>
  )
}
