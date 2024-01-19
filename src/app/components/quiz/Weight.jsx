'use client'

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from '@Store/store'
import {
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setDisabledWeight,
  selectInputWeight,
  selectWeightImperial,
  selectWeightError,
  selectDisabledWeight,
  selectIsMetric,
} from '@Store/slices/formSlice'
import MetricSwitch from '@Components/switcher/MetricSwitch'
import styles from '@Styles/main.module.css'

const QuizWeight = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const inputWeight = useSelector(selectInputWeight)
  const inputWeightImp = useSelector(selectWeightImperial)
  const weightError = useSelector(selectWeightError)
  const disabled = useSelector(selectDisabledWeight)
  const isMetric = useSelector(selectIsMetric)

  const inputWeightHandler = (e) => {
    const value = e.target.value
    dispatch(setInputWeight(value))

    if (isMetric) {
      dispatch(setWeightError(''))

      if (!value) {
        dispatch(setDisabledWeight(true))
      } else if (isNaN(value) || value < 40 || value > 230) {
        dispatch(setDisabledWeight(true))
        dispatch(
          setWeightError('Kindly input a weight between 40 and 230 kilograms')
        )
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    } else {
      dispatch(setWeightImperial(value))

      if (!value) {
        dispatch(setWeightError(''))
        dispatch(setDisabledWeight(true))
      } else if (isNaN(value) || value < 90 || value > 540) {
        dispatch(setDisabledWeight(true))
        dispatch(setWeightError('Kindly input a weight between 90 and 540 lbs'))
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    router.push('/quiz/weight-goal')
  }

  return (
    <>
      <h2>{title}</h2>
      <MetricSwitch />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor={isMetric ? 'input-weight' : 'input-weight-imperial'}>
            <input
              type="text"
              name={isMetric ? 'input-weight' : 'input-weight-imperial'}
              className={`${styles.input}`}
              maxLength="3"
              placeholder={isMetric ? '75' : '130'}
              value={isMetric ? inputWeight : inputWeightImp}
              onChange={inputWeightHandler}
            />
            <span className={styles.inputMeasure}>
              {isMetric ? 'kg' : 'lbs'}
            </span>
          </label>
          <div className={styles.inputError}>{weightError}</div>
        </div>
        <button type="submit" disabled={disabled} className="button">
          Continue
        </button>
      </form>
    </>
  )
}

export default QuizWeight
