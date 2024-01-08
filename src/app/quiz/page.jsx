import Link from 'next/link'

export const metadata = {
  title: 'Start Quiz Page',
  description: 'Start the quiz',
}

export default function Quiz() {
  return (
    <>
      <h1>Achieve Your Ideal Weight</h1>
      <p>
        Welcome to Achieve Your Ideal Weight Quiz - your trusted companion on
        the journey to a healthier lifestyle and reaching your desired weight.
        Our questions will help create a personalized plan for you, considering
        your goals, habits, and needs. Start your unique path to becoming the
        best version of yourself right now!
      </p>
      <div className="text-center flex items-center flex-col">
        <Link href="/quiz/goal" className="button">
          Start Quiz
        </Link>
      </div>
    </>
  )
}
