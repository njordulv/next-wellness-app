import Link from 'next/link'
import { IoFitnessOutline } from 'react-icons/io5'
import ThemeSwitch from '../switcher/ThemeSwitch'

export default function Header() {
  return (
    <header>
      <div className="w-full max-w-[620px] px-4 mx-auto box-border">
        <div className="flex items-center justify-center flex-col relative">
          <ThemeSwitch />
          <Link href="/" title="Wellness App">
            <IoFitnessOutline className="custom-bg-logo text-5xl rounded-md" />
          </Link>
        </div>
      </div>
    </header>
  )
}
