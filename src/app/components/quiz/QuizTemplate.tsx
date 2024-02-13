'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { RiCheckFill } from 'react-icons/ri'
import { useDispatch } from '@/store/store'
import { setQuiz } from '@/store/slices/quizSlice'
import styles from '@/styles/quiz.module.scss'

interface QuizTemplateProps {
  heading: string
  options: string[]
  path: string
}

const QuizTemplate: React.FC<QuizTemplateProps> = ({
  heading,
  options,
  path,
}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathName = usePathname()

  const extractKeyFromPathname = (pathName: string): string => {
    const segments = pathName.split('/')
    const lastSegment = segments.pop()
    return lastSegment || '/'
  }

  const handleOptionChange = (option: string) => {
    const key = extractKeyFromPathname(pathName)
    dispatch(setQuiz({ pathname: key, option }))

    setTimeout(() => {
      router.push(path)
    }, 400)
  }

  return (
    <>
      <h2>{heading}</h2>
      <div className={styles.items}>
        {options.map((option) => (
          <div key={option} className={styles.item}>
            <label>
              <input
                className={styles.input}
                type="radio"
                name="quiz-options"
                value={option}
                onChange={() => handleOptionChange(option)}
              />
              <span className={styles.back}></span>
              <span className={styles.title}>{option}</span>
              <span className={styles.checkbox}>
                <RiCheckFill className={styles.icon} />
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default QuizTemplate
