'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import { useState, useEffect } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import {
  setActive,
  selectActive,
  selectInputHeight,
  selectInputWeight,
  selectWeightImperial,
  selectTotalCm,
  selectTotalKg,
} from '@/store/slices/formSlice'
import { BMI } from '@/utils/healthMetrics'
import styles from '@/styles/results.module.scss'

interface ResultsProps {
  title: string
}

const Results: React.FC<ResultsProps> = ({ title }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Results')
  const active = useSelector(selectActive)
  const weightImperial = useSelector(selectWeightImperial)
  const [disabled, setDisabled] = useState(true)
  let inputHeight = useSelector(selectInputHeight)
  let inputWeight = useSelector(selectInputWeight)
  let totalCm = useSelector(selectTotalCm)
  let totalKg = useSelector(selectTotalKg)

  const BMIcurrent = BMI(inputHeight, inputWeight, totalCm, totalKg)
  const delay = 1700

  const btnContinueHandler = () => {
    return router.push(`/${locale}/testimonials`)
  }

  useEffect(() => {
    const timeoutDelayHandler = () => {
      let activeIndex: number = 0

      if (BMIcurrent <= 18.4) {
        activeIndex = 0
      } else if (BMIcurrent >= 18.5 && BMIcurrent <= 24.9) {
        activeIndex = 1
      } else if (BMIcurrent >= 25 && BMIcurrent <= 39.9) {
        activeIndex = 2
      } else if (BMIcurrent > 40) {
        activeIndex = 3
      }

      if (activeIndex !== 0) {
        setTimeout(() => {
          dispatch(setActive(activeIndex))
        }, delay)
      }

      if (isNaN(BMIcurrent)) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }

    timeoutDelayHandler()
  }, [BMIcurrent, dispatch])

  let BMIprogress: number

  if (BMIcurrent <= 18.4) {
    BMIprogress = 10
  } else if (BMIcurrent >= 18.5 && BMIcurrent <= 24.9) {
    BMIprogress = 35
  } else if (BMIcurrent >= 25 && BMIcurrent <= 39.9) {
    BMIprogress = 60
  } else if (BMIcurrent > 40) {
    BMIprogress = 85
  } else {
    BMIprogress = 0
  }

  return (
    <>
      <h2>{title}</h2>
      <div className={styles.bmiContainer}>
        <div className={styles.bmiTop}>
          <span>
            {t('yourBMI')}
            {!isNaN(BMIcurrent) ? (
              <b>{BMIcurrent}</b>
            ) : (
              <span style={{ color: '#f26241' }}>{t('incorrect')}</span>
            )}
          </span>
          <span>{t('normal')} 21.4</span>
        </div>
        <div className={styles.bmiProgressBar}>
          <span
            className={styles.bmiProgress}
            style={{ left: `${BMIprogress}%` }}
          >
            <RiArrowDownSFill className={styles.bmiIconDown} />
            <RiArrowUpSFill className={styles.bmiIconUp} />
          </span>
        </div>
        <div className={styles.bmiBottom}>
          <span
            className={
              active === 0 ? `${styles.bmiUnderweight}` : `${styles.bmiVariant}`
            }
          >
            <strong>{t('underweight')}</strong>
          </span>
          <span
            className={
              active === 1 ? `${styles.bmiNormal}` : `${styles.bmiVariant}`
            }
          >
            <strong>{t('normal')}</strong>
          </span>
          <span
            className={
              active === 2 ? `${styles.bmiOverweight}` : `${styles.bmiVariant}`
            }
          >
            <strong>{t('overweight')}</strong>
          </span>
          <span
            className={
              active === 3 ? `${styles.bmiObese}` : `${styles.bmiVariant}`
            }
          >
            <strong>{t('obese')}</strong>
          </span>
        </div>
      </div>
      {BMIcurrent <= 18.4 && (
        <div className={styles.bmiText}>
          <p>{t('underText1')}</p>
          <p>{t('underText2')}</p>
          <p>{t('underText3')}</p>
        </div>
      )}
      {BMIcurrent >= 18.5 && BMIcurrent <= 24.9 && (
        <div className={styles.bmiText}>
          <p>{t('normalText1')}</p>
          <p>{t('normalText2')}</p>
          <p>{t('normalText3')}</p>
        </div>
      )}
      {BMIcurrent >= 25 && BMIcurrent <= 39.9 && (
        <div className={styles.bmiText}>
          <p>{t('overText1')}</p>
          <p>{t('overText2')}</p>
          <p>{t('overText3')}</p>
        </div>
      )}
      {BMIcurrent >= 40 && (
        <div className={styles.bmiText}>
          <p>{t('obeseText1')}</p>
          <p>{t('obeseText2')}</p>
          <p>{t('obeseText3')}</p>
        </div>
      )}
      {isNaN(BMIcurrent) && (
        <div className={`${styles.bmiText} ${styles.bmiTextError}`}>
          {t('errorBMI')}
        </div>
      )}
      <small className={styles.bmiTextSmall}>{t('note')}</small>
      <div className={styles.bmiBack}>
        <button
          type="button"
          className="button"
          disabled={disabled}
          onClick={btnContinueHandler}
        >
          {t('continue')}
        </button>
      </div>
    </>
  )
}

export default Results
