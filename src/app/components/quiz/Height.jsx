'use client'

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from '../../lib/redux/store'
import {
  setInputHeight,
  setHeightError,
  setDisabled,
  selectInputHeight,
  selectHeightError,
  selectDisabled,
  selectIsMetric,
} from '../../lib/redux/slices/formSlice'
import HeightImperial from './Imperial'
import MetricSwitch from '../switcher/MetricSwitch'
import styles from '../../styles/main.module.css'

const QuizHeight = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const inputHeight = useSelector(selectInputHeight)
  const heightError = useSelector(selectHeightError)
  const disabled = useSelector(selectDisabled)
  const isMetric = useSelector(selectIsMetric)

  const inputHeightHandler = (e) => {
    const value = e.target.value
    dispatch(setInputHeight(value))

    if (isMetric) {
      if (!value) {
        dispatch(setHeightError(''))
        dispatch(setDisabled(true))
      } else if (isNaN(value)) {
        dispatch(setHeightError('Ensure you input digits only'))
        dispatch(setDisabled(true))
      } else if (value < 120) {
        dispatch(setHeightError('The minimum allowable height is 120 cm'))
        dispatch(setDisabled(true))
      } else if (value > 240) {
        dispatch(setHeightError('The maximum allowable height is 240 cm'))
        dispatch(setDisabled(true))
      } else {
        dispatch(setHeightError(''))
        dispatch(setDisabled(false))
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    router.push('/quiz/weight')
  }

  return (
    <>
      <h2>{title}</h2>
      <MetricSwitch />
      {isMetric ? (
        <form onSubmit={continueHandler} className={styles.heightForm}>
          <div className={styles.inputField}>
            <div>
              <label htmlFor="input-height">
                <input
                  type="text"
                  name="input-height"
                  className={`${styles.input}`}
                  maxLength="3"
                  placeholder="180"
                  value={inputHeight}
                  onChange={inputHeightHandler}
                />
                <span className={styles.inputMeasure}>cm</span>
              </label>
            </div>
            <div className={styles.inputError}>{heightError}</div>
          </div>
          <button type="submit" disabled={disabled} className="button">
            Continue
          </button>
        </form>
      ) : (
        <HeightImperial />
      )}
    </>
  )
}

export default QuizHeight
