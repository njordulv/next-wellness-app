'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import {
  setInputHeight,
  setHeightError,
  setDisabled,
  selectInputHeight,
  selectHeightError,
  selectDisabled,
  selectIsMetric,
} from '@/store/slices/formSlice'
import HeightImperial from './Imperial'
import MetricSwitch from '../../components/switcher/MetricSwitch'
import * as mess from '@/utils/messages'
import styles from '@/styles/main.module.scss'

interface QuizHeightProps {
  title: string
}

const QuizHeight: React.FC<QuizHeightProps> = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Quiz')
  const inputHeight = useSelector(selectInputHeight)
  const heightError = useSelector(selectHeightError)
  const disabled = useSelector(selectDisabled)
  const isMetric = useSelector(selectIsMetric)

  const inputHeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    dispatch(setInputHeight(value))

    const numericValue = parseInt(value, 10)

    if (isMetric) {
      if (!value) {
        dispatch(setHeightError(''))
        dispatch(setDisabled(true))
      } else if (isNaN(numericValue)) {
        dispatch(setHeightError(mess.getDigitsErrMsg(t)))
        dispatch(setDisabled(true))
      } else if (numericValue < 120) {
        dispatch(setHeightError(mess.minHeightErrMsg(t)))
        dispatch(setDisabled(true))
      } else if (numericValue > 240) {
        dispatch(setHeightError(mess.maxHeightErrMsg(t)))
        dispatch(setDisabled(true))
      } else {
        dispatch(setHeightError(''))
        dispatch(setDisabled(false))
      }
    }
  }

  const continueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${locale}/quiz/weight`)
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
                  maxLength={3}
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
            {t('continue')}
          </button>
        </form>
      ) : (
        <HeightImperial />
      )}
    </>
  )
}

export default QuizHeight
