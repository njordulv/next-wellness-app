'use client'

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from '@Store/store'
import {
  setGoal,
  setGoalImperial,
  setVerdict,
  setWeightError,
  setDisabledGoal,
  selectGoal,
  selectInputWeight,
  selectGoalImperial,
  selectWeightImperial,
  selectWeightError,
  selectVerdict,
  selectDisabledGoal,
  selectIsMetric,
} from '@Store/slices/formSlice'
import MetricSwitch from '@Components/switcher/MetricSwitch'
import { verdictData } from '@Data/verdict'
import styles from '@Styles/main.module.css'

const QuizWeightGoal = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const inputWeight = useSelector(selectInputWeight)
  const weightImperial = useSelector(selectWeightImperial)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightError = useSelector(selectWeightError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)

  const verdictText = (text, percentNumber) => {
    const updatedText = text.replace(
      /\d+(?=\s(of your weight))/i,
      percentNumber + '%'
    )
    return updatedText
  }

  let percentNumber = isMetric
    ? (((inputWeight - goal) / inputWeight) * 100).toFixed()
    : (((weightImperial - goal) / weightImperial) * 100).toFixed()

  const goalHandler = (e) => {
    e.preventDefault()
    const value = e.target.value

    dispatch(setGoal(value))
    dispatch(setGoalImperial(value))
    dispatch(setVerdict(''))

    if (value.length < 2) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightError(''))
    }

    const percentGoal = (value / (isMetric ? inputWeight : weightImperial)) * 10

    if (!value) {
      dispatch(setWeightError(''))
    } else if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      dispatch(
        setWeightError(
          "Something went wrong, it looks like your weight value isn't set"
        )
      )
      return
    }

    if (percentGoal >= 9.8) {
      dispatch(setVerdict(''))
      dispatch(setDisabledGoal(true))
    } else if (percentGoal >= 9) {
      dispatch(setVerdict(verdictData[0].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 8) {
      dispatch(setVerdict(verdictData[1].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 7) {
      dispatch(setVerdict(verdictData[2].text))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 4) {
      dispatch(setVerdict(verdictData[3].text))
      dispatch(setDisabledGoal(false))
    } else {
      dispatch(setDisabledGoal(true))
    }
  }

  const continueHandler = (e) => {
    e.preventDefault()
    router.push('/quiz/results')
  }

  return (
    <>
      <h2>{title}</h2>
      <MetricSwitch />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-weight">
            <input
              type="text"
              name="input-weight"
              className={`${styles.input}`}
              maxLength="3"
              placeholder={isMetric ? '65' : '120'}
              value={isMetric ? goal : goalImperial}
              onChange={goalHandler}
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
      {verdict && (
        <div className={`${styles.weightInfo} ${styles.active}`}>
          {verdictText(verdict, percentNumber)}
        </div>
      )}
    </>
  )
}

export default QuizWeightGoal
