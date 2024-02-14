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
  const totalWeight = useSelector(selectTotalKg)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)
  const weightGoalError = useSelector(selectWeightGoalError)
  const verdict = useSelector(selectVerdict)
  const disabled = useSelector(selectDisabledGoal)
  const isMetric = useSelector(selectIsMetric)

  const goalHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    const numericValue = parseInt(value)

    if (isMetric) {
      dispatch(setGoal(value))
    } else {
      dispatch(setGoalImperial(value))
    }

    if (!totalWeight) {
      dispatch(setWeightGoalError(mess.weightValErrMsg(t)))
    }

    if (!value || isNaN(numericValue)) {
      dispatch(setDisabledGoal(true))
      dispatch(setVerdict(''))
      dispatch(setWeightGoalError(''))
      return
    }

    if (value.length < 2) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(''))
    }

    let totalWeightLbs = totalWeight * 2.20462
    let percentImperial = ((numericValue / totalWeightLbs) * 100).toFixed()
    let percentGoal: string = ((numericValue / totalWeight) * 100).toFixed()

    function dispatchVerdict(
      percent: number,
      isImperial: boolean = false
    ): void {
      const percentNumber: string = isImperial
        ? percent.toFixed()
        : (((totalWeight - numericValue) / totalWeight) * 100).toFixed()

      if (percent >= 98) {
        dispatch(setVerdict(''))
        dispatch(setDisabledGoal(true))
      } else if (percent >= 90) {
        dispatch(setVerdict(t('answer1', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (percent >= 80) {
        dispatch(setVerdict(t('answer2', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (percent >= 70) {
        dispatch(setVerdict(t('answer3', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (percent >= 40) {
        dispatch(setVerdict(t('answer4', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else {
        dispatch(setDisabledGoal(true))
      }
    }

    dispatchVerdict(+percentGoal)
    dispatchVerdict(+percentImperial, true)
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
