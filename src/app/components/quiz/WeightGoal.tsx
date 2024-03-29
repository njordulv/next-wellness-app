'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import {
  GiLifeInTheBalance,
  GiTennisRacket,
  GiRunningShoe,
  GiTrophyCup,
  GiNothingToSay,
} from 'react-icons/gi'
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

const QuizWeightGoal: React.FC = () => {
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
  const cursorOnInput = useRef<HTMLInputElement>(null)
  const [Icon, setIcon] = useState(() => GiNothingToSay)

  useEffect(() => {
    cursorOnInput.current?.focus()
  }, [isMetric])

  const goalHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numericValue = parseFloat(value)
    let isValid = true

    if (isMetric) {
      dispatch(setGoal(value))
    } else {
      dispatch(setGoalImperial(value))
    }

    if (!value) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(''))
      isValid = false
    } else if (!totalWeight) {
      dispatch(setWeightGoalError(mess.weightValErrMsg(t)))
      isValid = false
    } else if (isMetric && (numericValue < 40 || numericValue > 250)) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightGoalErrMsg(t)))
      isValid = false
    } else if (isMetric && numericValue >= totalWeight) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightHigherErrMsg(t)))
      isValid = false
    } else if (isMetric && totalWeight - numericValue <= 3) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightDiffErrMsg(t)))
      isValid = false
    } else if (!isMetric && (numericValue < 90 || numericValue > 550)) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightGoalImpErrMsg(t)))
      isValid = false
    } else if (!isMetric && numericValue >= totalWeightLbs) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightHigherErrMsg(t)))
      isValid = false
    } else if (!isMetric && totalWeightLbs - numericValue <= 6) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.weightDiffImpErrMsg(t)))
      isValid = false
    } else {
      dispatch(setWeightGoalError(''))
    }

    if (isNaN(numericValue)) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(mess.getDigitsErrMsg(t)))
    }

    if (value.length < 1) {
      dispatch(setDisabledGoal(true))
      dispatch(setWeightGoalError(''))
    }

    if (!isValid) {
      dispatch(setVerdict(''))
      return
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

      if (+percent <= 1) {
        setIcon(() => GiNothingToSay)
        dispatch(setVerdict(''))
        dispatch(setDisabledGoal(true))
      } else if (+percent <= 6) {
        setIcon(() => GiLifeInTheBalance)
        dispatch(setVerdict(t('answer1', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (+percent <= 12) {
        setIcon(() => GiTennisRacket)
        dispatch(setVerdict(t('answer2', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (+percent <= 21) {
        setIcon(() => GiRunningShoe)
        dispatch(setVerdict(t('answer3', { percentNumber })))
        dispatch(setDisabledGoal(false))
      } else if (+percent <= 100) {
        setIcon(() => GiTrophyCup)
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
              ref={cursorOnInput}
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
        <div className={`${styles.weightInfo} ${styles.active}`}>
          <Icon className={styles.weightIcon} />
          <div>{verdict}</div>
        </div>
      )}
    </>
  )
}

export default QuizWeightGoal
