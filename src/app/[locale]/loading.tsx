import { BiLoaderAlt } from 'react-icons/bi'
import PageLayoutWithoutTitle from '../components/layouts/PageLayoutWithoutTitle'

export default function Loading() {
  return (
    <PageLayoutWithoutTitle>
      <div className="grid justify-center">
        <BiLoaderAlt className="animate-spinner custom-color-pink text-5xl" />
      </div>
    </PageLayoutWithoutTitle>
  )
}
