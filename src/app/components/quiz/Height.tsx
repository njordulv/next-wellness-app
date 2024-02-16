'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import {
  setInputHeight,
  setHeightError,
  setTotalCm,
  setDisabled,
  selectInputHeight,
  selectHeightError,
  selectDisabled,
  selectIsMetric,
} from '@/store/slices/formSlice'
import HeightImperial from './Imperial'
import MeasureSwitch from '@/components/switcher/MeasureSwitch'
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
  const cursorOnInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    cursorOnInput.current?.focus()
  }, [isMetric])

  const inputHeightHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numericValue = parseInt(value)

    dispatch(setInputHeight(value))
    dispatch(setTotalCm(parseInt(value)))

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
      <MeasureSwitch />
      {isMetric ? (
        <form onSubmit={continueHandler} className={styles.heightForm}>
          <div className={styles.inputField}>
            <div>
              <label htmlFor="input-height">
                <input
                  id="input-height"
                  name="input-height"
                  type="text"
                  className={`${styles.input}`}
                  maxLength={3}
                  placeholder="180"
                  value={inputHeight}
                  onChange={inputHeightHandler}
                  ref={cursorOnInput}
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
