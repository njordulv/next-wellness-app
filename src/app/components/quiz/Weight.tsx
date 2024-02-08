'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
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
} from '@/store/slices/formSlice'
import MetricSwitch from '@/components/switcher/MetricSwitch'
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

  const inputWeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setInputWeight(value))

    const numericValue = parseInt(value, 10)

    if (isMetric) {
      dispatch(setWeightError(''))

      if (!value) {
        dispatch(setDisabledWeight(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 40 ||
        numericValue > 230
      ) {
        dispatch(setDisabledWeight(true))
        dispatch(setWeightError(mess.weightErrMsg(t)))
      } else {
        dispatch(setDisabledWeight(false))
        dispatch(setWeightError(''))
      }
    } else {
      dispatch(setWeightImperial(value))

      if (!numericValue) {
        dispatch(setWeightError(''))
        dispatch(setDisabledWeight(true))
      } else if (
        isNaN(numericValue) ||
        numericValue < 90 ||
        numericValue > 540
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
      <MetricSwitch />
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
