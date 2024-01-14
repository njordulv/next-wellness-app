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
    useSelector((state) => state.optionHistory[router.pathname]) || ''

  const handleOptionChange = (option) => {
    setTimeout(() => {
      router.push(path)
    }, 400)
    dispatch(setOptionHistory({ pathname: router.pathname, option }))
  }

  return (
    <>
      <h2>{question.question}</h2>
      <div className={styles.items}>
        {options.options.map((option, index) => (
          <div key={index} className={styles.item}>
            <label>
              <input
                className={styles.input}
                type="radio"
                value={option}
                checked={selectedOption === option ? 'checked' : ''}
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