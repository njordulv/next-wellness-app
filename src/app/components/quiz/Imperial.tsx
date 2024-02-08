'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import {
  setFeet,
  setInch,
  setHeightError,
  setTotalCm,
  selectHeightImperialFeet,
  selectHeightImperialInch,
  selectHeightError,
} from '@/store/slices/formSlice'
import * as mess from '@/utils/messages'
import styles from '@/styles/main.module.scss'

const HeightImperial = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Quiz')
  const heightError = useSelector(selectHeightError)
  const localFeet = useSelector(selectHeightImperialFeet)
  const localInch = useSelector(selectHeightImperialInch)

  const imperialInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const value = e.target.value
    if (name === 'feet') {
      dispatch(setFeet(value))
    } else if (name === 'inch') {
      dispatch(setInch(value))
    }
  }

  const continueImperialHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const updatedFeet = parseInt(localFeet)
    const updatedInch = parseInt(localInch)

    if (
      isNaN(updatedFeet) ||
      isNaN(updatedInch) ||
      updatedFeet < 4 ||
      updatedFeet > 7 ||
      updatedInch > 11
    ) {
      let errorMsg = ''
      if (isNaN(updatedFeet) || isNaN(updatedInch)) {
        errorMsg = mess.getDigitsErrMsg(t)
      } else if (updatedFeet < 4 || updatedFeet > 7) {
        errorMsg = mess.minHeightImpErrMsg(t)
      } else if (updatedInch > 11) {
        errorMsg = mess.maxHeightImpErrMsg(t)
      }
      dispatch(setHeightError(errorMsg))
    } else {
      dispatch(setHeightError(''))
      const totalCm = parseFloat(
        (updatedFeet * 30.48 + updatedInch * 2.54).toFixed()
      )
      dispatch(setTotalCm(totalCm))
      router.push(`/${locale}/quiz/weight`)
    }
  }

  return (
    <>
      <form onSubmit={continueImperialHandler} className={styles.heightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-height-ft">
            <input
              id="input-height-ft"
              name="input-height-ft"
              type="text"
              className={`${styles.input} ${styles.inputMin}`}
              maxLength={1}
              placeholder="5"
              value={localFeet}
              onChange={(e) => imperialInputHandler(e, 'feet')}
            />
            <span className={styles.inputMeasure}>ft</span>
          </label>
          <label htmlFor="input-height-inch">
            <input
              id="input-height-inch"
              name="input-height-inch"
              type="text"
              className={`${styles.input} ${styles.inputMin}`}
              maxLength={2}
              placeholder="9"
              value={localInch}
              onChange={(e) => imperialInputHandler(e, 'inch')}
            />
            <span className={styles.inputMeasure}>inch</span>
          </label>
          <div className={styles.inputError}>{heightError}</div>
        </div>
        <button type="submit" className="button">
          {t('continue')}
        </button>
      </form>
    </>
  )
}

export default HeightImperial
