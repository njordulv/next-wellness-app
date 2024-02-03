'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
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
} from '@/store/slices/formSlice'
import MetricSwitch from '@/components/switcher/MetricSwitch'
import * as mess from '@/utils/messages'
import styles from '@/styles/main.module.scss'

interface QuizWeightGoalProps {
  title: string
}

const QuizWeightGoal: React.FC<QuizWeightGoalProps> = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Quiz')
  const inputWeight = useSelector(selectInputWeight)
  const weightImperial = useSelector(selectWeightImperial)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightError = useSelector(selectWeightError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)

  let inputWeightNumber = parseFloat(inputWeight)
  let goalNumber = parseFloat(goal)
  let weightImperialNumber = parseFloat(weightImperial)

  const percentNumber = isMetric
    ? (((inputWeightNumber - goalNumber) / inputWeightNumber) * 100).toFixed(1)
    : (
        ((weightImperialNumber - parseFloat(goalImperial)) /
          weightImperialNumber) *
        100
      ).toFixed(1)

  const goalHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    const numericValue = parseInt(value, 10)

    dispatch(setGoal(value))
    dispatch(setGoalImperial(value))

    if (value.length === 0 || isNaN(numericValue)) {
      dispatch(setDisabledGoal(true))
      dispatch(setVerdict(''))
      dispatch(setWeightError(''))
      return
    }

    if (value.length < 2) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightError(''))
    }

    const percentGoal =
      (numericValue / (isMetric ? inputWeightNumber : weightImperialNumber)) *
      10

    if (!value) {
      dispatch(setWeightError(''))
    } else if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      dispatch(setWeightError(mess.weightValErrMsg(t)))
      return
    }

    if (percentGoal >= 9.8) {
      dispatch(setVerdict(''))
      dispatch(setDisabledGoal(true))
    } else if (percentGoal >= 9) {
      dispatch(setVerdict(t('answer1', { percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 8) {
      dispatch(setVerdict(t('answer2', { percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 7) {
      dispatch(setVerdict(t('answer3', { percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 4) {
      dispatch(setVerdict(t('answer4', { percentNumber })))
      dispatch(setDisabledGoal(false))
    } else {
      dispatch(setDisabledGoal(true))
    }
  }

  const continueHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    router.push(`/${locale}/quiz/results`)
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
              maxLength={3}
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
          {t('continue')}
        </button>
      </form>
      {verdict && (
        <div className={`${styles.weightInfo} ${styles.active}`}>{verdict}</div>
      )}
    </>
  )
}

export default QuizWeightGoal
