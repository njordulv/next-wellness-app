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
  selectGoalImperial,
  selectWeightGoalError,
  selectVerdict,
  selectDisabledGoal,
  selectIsMetric,
  selectTotalKg,
} from '@/store/slices/formSlice'
import MeasureSwitch from '@/components/switcher/MeasureSwitch'
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
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightGoalError = useSelector(selectWeightGoalError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)
  const totalWeight = useSelector(selectTotalKg)
  const totalWeightLbs = totalWeight * 2.20462

  const goalHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numericValue = parseFloat(value)

    if (isMetric) {
      dispatch(setGoal(value))
      if (!value) {
        dispatch(setDisabledGoal(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 40 ||
        numericValue > 250
      ) {
        dispatch(setDisabledGoal(true))
        dispatch(setWeightGoalError(mess.weightGoalErrMsg(t)))
      } else if (numericValue >= totalWeight) {
        dispatch(setDisabledGoal(true))
        dispatch(setWeightGoalError(mess.weightHigherErrMsg(t)))
      } else if (totalWeight - numericValue <= 3) {
        dispatch(setDisabledGoal(true))
        dispatch(setWeightGoalError(mess.weightDiffErrMsg(t)))
      } else {
        dispatch(setDisabledGoal(false))
        dispatch(setWeightGoalError(''))
      }
    } else {
      dispatch(setGoalImperial(value))
      if (!value) {
        dispatch(setDisabledGoal(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 90 ||
        numericValue > 550
      ) {
        dispatch(setDisabledGoal(true))
        dispatch(setWeightGoalError(mess.weightGoalImpErrMsg(t)))
      } else if (numericValue >= totalWeightLbs) {
        dispatch(setDisabledGoal(true))
        dispatch(setWeightGoalError(mess.weightHigherErrMsg(t)))
      } else if (totalWeightLbs - numericValue <= 6) {
        dispatch(setWeightGoalError(mess.weightGapImpErrMsg(t)))
      } else {
        dispatch(setDisabledGoal(false))
        dispatch(setWeightGoalError(''))
      }
    }

    if (!totalWeight) {
      dispatch(setWeightGoalError(mess.weightValErrMsg(t)))
    }

    if (value.length < 2) {
      dispatch(setVerdict(''))
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(''))
    }

    let percentNumber: string

    if (isMetric) {
      percentNumber = (
        ((totalWeight - numericValue) / totalWeight) *
        100
      ).toFixed()
    } else {
      const numericValueKg = numericValue / 2.20462
      percentNumber = (
        ((totalWeight - numericValueKg) / totalWeight) *
        100
      ).toFixed()
    }

    function dispatchVerdict(): void {
      const percent = percentNumber

      if (+percent >= 98.9) {
        dispatch(setVerdict(''))
        dispatch(setDisabledGoal(true))
      } else if (+percent >= 95) {
        dispatch(setVerdict(t('answer1', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (+percent >= 92) {
        dispatch(setVerdict(t('answer2', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (+percent >= 16) {
        dispatch(setVerdict(t('answer4', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else {
        dispatch(setDisabledGoal(true))
      }
    }
    dispatchVerdict()
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
