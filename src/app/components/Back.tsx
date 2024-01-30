'use client'

import { useRouter } from 'next/navigation'

type Props = {
  back: string
}

export default function Back({ back }: Props) {
  const router = useRouter()

  return (
    <button className="button" type="button" onClick={() => router.back()}>
      {back}
    </button>
  )
}
