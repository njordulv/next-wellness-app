'use client'

import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from '../../lib/redux/store'
import {
  setFeet,
  setInch,
  setHeightError,
  setTotalCm,
  selectHeightImperialFeet,
  selectHeightImperialInch,
  selectHeightError,
} from '../../lib/redux/slices/formSlice'
import styles from '@/styles/main.module.scss'

const HeightImperial = () => {
  const dispatch = useDispatch()
  const router = useRouter()

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
        errorMsg = 'Ensure you input digits only'
      } else if (updatedFeet < 4 || updatedFeet > 7) {
        errorMsg = 'Please state at least 4 ft and at most 7 ft'
      } else if (updatedInch > 11) {
        errorMsg = 'Please state at most 11 inch'
      }
      dispatch(setHeightError(errorMsg))
    } else {
      dispatch(setHeightError(''))
      const totalCm = parseFloat(
        (updatedFeet * 30.48 + updatedInch * 2.54).toFixed()
      )
      dispatch(setTotalCm(totalCm))
      router.push('/quiz/weight')
    }
  }

  return (
    <>
      <form onSubmit={continueImperialHandler} className={styles.heightForm}>
        <div className={styles.inputField}>
          <label htmlFor="input-height-ft">
            <input
              type="text"
              name="input-height-ft"
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
              type="text"
              name="input-height-inch"
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
          Continue
        </button>
      </form>
    </>
  )
}

export default HeightImperial