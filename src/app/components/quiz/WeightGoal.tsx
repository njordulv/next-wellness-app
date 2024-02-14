'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import {
  setGoal,
  setGoalImperial,
  setVerdict,
  setWeightGoalError,
  setDisabledGoal,
  selectGoal,
  selectInputWeight,
  selectGoalImperial,
  selectWeightImperial,
  selectWeightGoalError,
  selectVerdict,
  selectDisabledGoal,
  selectIsMetric,
} from '@/store/slices/formSlice'
import MeasureSwitch from '@/src/app/components/switcher/MeasureSwitch'
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
  const weightGoalError = useSelector(selectWeightGoalError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)

  let inputWeightNumber = parseFloat(inputWeight)
  let weightImperialNumber = parseFloat(weightImperial)

  const goalHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    const numericValue = parseInt(value, 10)

    dispatch(setGoal(value))
    dispatch(setGoalImperial(value))

    if (value.length === 0 || isNaN(numericValue)) {
      dispatch(setDisabledGoal(true))
      dispatch(setVerdict(''))
      dispatch(setWeightGoalError(''))
      return
    }

    if (value.length < 2) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(''))
    }

    const percentGoal =
      (numericValue / (isMetric ? inputWeightNumber : weightImperialNumber)) *
      10

    if (!value) {
      dispatch(setWeightGoalError(''))
    } else if ((isMetric && !inputWeight) || (!isMetric && !weightImperial)) {
      dispatch(setWeightGoalError(mess.weightValErrMsg(t)))
      return
    }

    const currentWeight = parseFloat(inputWeight)
    const percentNumber = (
      ((currentWeight - numericValue) / currentWeight) *
      100
    ).toFixed()

    if (percentGoal >= 9.8) {
      dispatch(setVerdict(''))
      dispatch(setDisabledGoal(true))
    } else if (percentGoal >= 9) {
      dispatch(setVerdict(t('answer1', { percentNumber: percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 8) {
      dispatch(setVerdict(t('answer2', { percentNumber: percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 7) {
      dispatch(setVerdict(t('answer3', { percentNumber: percentNumber })))
      dispatch(setDisabledGoal(false))
    } else if (percentGoal >= 4) {
      dispatch(setVerdict(t('answer4', { percentNumber: percentNumber })))
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
      <MeasureSwitch />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor={isMetric ? 'weight-goal' : 'weight-goal-imperial'}>
            <input
              id={isMetric ? 'weight-goal' : 'weight-goal-imperial'}
              name={isMetric ? 'weight-goal' : 'weight-goal-imperial'}
              type="text"
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
          <div className={styles.inputError}>{weightGoalError}</div>
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
