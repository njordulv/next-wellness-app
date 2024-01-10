import { BiLoaderAlt } from 'react-icons/bi'

export default function Loading() {
  return (
    <>
      <div className="grid justify-center">
        <BiLoaderAlt className="animate-spinner custom-color-pink text-5xl" />
      </div>
    </>
  )
}
