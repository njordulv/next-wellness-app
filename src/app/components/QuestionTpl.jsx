'use client'

import { useSelector, useDispatch } from '../lib/redux/store'
import { useRouter } from 'next/navigation'
import { RiCheckFill } from 'react-icons/ri'
import { setOptionHistory } from '../lib/redux/slices/optionHistorySlice'
import styles from '../styles/question.module.scss'

const QuestionTpl = ({ question, options, path }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const selectedOption =
    useSelector((state) => state.optionHistory[router.asPath]) || ''

  const handleOptionChange = (option) => {
    dispatch(setOptionHistory({ pathname: router.asPath, option }))
    setTimeout(() => {
      router.push(path)
    }, 500)
  }

  return (
    <>
      <h2>{question}</h2>
      <div className={styles.items}>
        {options.map((option, index) => (
          <div key={index} className={styles.item}>
            <label>
              <input
                className={styles.input}
                type="radio"
                value={option}
                checked={selectedOption === option}
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

export default QuestionTpl
