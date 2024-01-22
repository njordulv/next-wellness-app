import ProgressCircular from '../components/progress/ProgressCircular'
import Slider from '../components/slider/testimonials'

export const metadata = {
  title: 'Testimonials',
  description:
    'Over a thousand users have successfully reached their milestones using the Next Wellness App',
}

export default function Testimonials() {
  return (
    <>
      <ProgressCircular />
      <h1>Our Users</h1>
      <h3>
        Over a thousand users have successfully reached their milestones using
        the Next Wellness App
      </h3>
      <Slider />
    </>
  )
}
