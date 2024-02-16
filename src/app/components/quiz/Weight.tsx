'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import {
  setInputWeight,
  setWeightImperial,
  setWeightError,
  setDisabledWeight,
  setTotalKg,
  selectInputWeight,
  selectWeightImperial,
  selectWeightError,
  selectDisabledWeight,
  selectIsMetric,
} from '@/store/slices/formSlice'
import MeasureSwitch from '@/components/switcher/MeasureSwitch'
import * as mess from '@/utils/messages'
import styles from '@/styles/main.module.scss'

interface QuizWeightProps {
  title: string
}

const QuizWeight: React.FC<QuizWeightProps> = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Quiz')
  const inputWeight = useSelector(selectInputWeight)
  const inputWeightImp = useSelector(selectWeightImperial)
  const weightError = useSelector(selectWeightError)
  const disabled = useSelector(selectDisabledWeight)
  const isMetric = useSelector(selectIsMetric)
  const cursorOnInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    cursorOnInput.current?.focus()
  }, [isMetric])

  const inputWeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numericValue = parseInt(value)

    if (isMetric) {
      dispatch(setInputWeight(value))
      dispatch(setTotalKg(parseInt(value)))
      dispatch(setWeightError(''))

      if (!value) {
        dispatch(setDisabledWeight(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 50 ||
        numericValue > 250
      ) {
        dispatch(setDisabledWeight(true))
        dispatch(setWeightError(mess.weightErrMsg(t)))
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    } else {
      dispatch(setWeightImperial(value))
      let totalKg = Math.floor(parseInt(value) / 2.20462)
      dispatch(setTotalKg(totalKg))

      if (!numericValue) {
        dispatch(setWeightError(''))
        dispatch(setDisabledWeight(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 110 ||
        numericValue > 550
      ) {
        dispatch(setDisabledWeight(true))
        dispatch(setWeightError(mess.weightImpErrMsg(t)))
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    }
  }

  const continueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${locale}/quiz/weight-goal`)
  }

  return (
    <>
      <h2>{title}</h2>
      <MeasureSwitch />
      <form onSubmit={continueHandler} className={styles.weightForm}>
        <div className={styles.inputField}>
          <label htmlFor={isMetric ? 'input-weight' : 'input-weight-imperial'}>
            <input
              id={isMetric ? 'input-weight' : 'input-weight-imperial'}
              name={isMetric ? 'input-weight' : 'input-weight-imperial'}
              type="text"
              className={`${styles.input}`}
              maxLength={3}
              placeholder={isMetric ? '75' : '130'}
              value={isMetric ? inputWeight : inputWeightImp}
              onChange={inputWeightHandler}
              ref={cursorOnInput}
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
    </>
  )
}

export default QuizWeight
