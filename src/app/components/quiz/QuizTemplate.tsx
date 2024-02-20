'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { RiCheckFill } from 'react-icons/ri'
import { useDispatch } from '@/store/store'
import { setQuiz } from '@/store/slices/quizSlice'
import styles from '@/styles/quiz.module.scss'

interface QuizTemplateProps {
  heading: string
  options: { text: string; icon?: React.ElementType | null }[]
  path: string
}

const extractKeyFromPathname = (pathName: string): string => {
  const segments = pathName.split('/')
  return segments.pop() || '/'
}

const QuizTemplate: React.FC<QuizTemplateProps> = ({
  heading,
  options,
  path,
}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathName = usePathname()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  useEffect(() => {
    const key = extractKeyFromPathname(pathName)
    const savedOption = localStorage.getItem(key)
    if (savedOption) {
      setSelectedOption(savedOption)
    }
  }, [pathName])

  const handleOptionChange = (option: string) => {
    const key = extractKeyFromPathname(pathName)

    dispatch(setQuiz({ pathname: key, option }))
    localStorage.setItem(key, option)
    setSelectedOption(option)

    setTimeout(() => {
      router.push(path)
    }, 400)
  }

  return (
    <>
      <h2>{heading}</h2>
      {options.length !== 0 && (
        <div className={styles.items}>
          {options.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className={
                selectedOption === text
                  ? `${styles.item} ${styles.selected}`
                  : `${styles.item}`
              }
            >
              <label>
                <input
                  className={styles.input}
                  type="radio"
                  name="quiz-options"
                  value={text}
                  onChange={() => handleOptionChange(text)}
                />
                <span className={styles.back}></span>
                <span className={styles.title}>{text}</span>
                <span className={styles.checkbox}>
                  <RiCheckFill className={styles.checkIcon} />
                </span>
                {Icon && (
                  <span className={styles.icon}>
                    <Icon />
                  </span>
                )}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default QuizTemplate
