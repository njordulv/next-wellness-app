import Link from 'next/link'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitcher from '../ThemeSwitcher'

export default function Header() {
  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className="flex items-center justify-center flex-col relative">
          <ThemeSwitcher />
          <Link href="/" title="Wellness App">
            <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
          </Link>
        </div>
      </div>
    </header>
  )
}
