'use client'

import { useDispatch } from '../../lib/redux/store'
import { useRouter } from 'next/navigation'
import { RiCheckFill } from 'react-icons/ri'
import { setOptionHistory } from '../../lib/redux/slices/optionHistorySlice'
import styles from '../../styles/quiz.module.scss'

const QuizTemplate = ({ heading, options, path }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleOptionChange = (option) => {
    dispatch(setOptionHistory({ pathname: path, option }))

    setTimeout(() => {
      router.push(path)
    }, 500)
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
