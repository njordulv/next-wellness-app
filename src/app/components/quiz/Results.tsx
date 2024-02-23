'use client'

import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector, useDispatch } from '@/store/store'
import { useState, useEffect } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import { GiWeightScale } from 'react-icons/gi'
import { FaThumbsUp } from 'react-icons/fa'
import { FaWeightScale } from 'react-icons/fa6'
import { IoWarning } from 'react-icons/io5'
import {
  setActive,
  selectActive,
  selectInputHeight,
  selectInputWeight,
  selectTotalCm,
  selectTotalKg,
  selectGoal,
  selectGoalImperial,
} from '@/store/slices/formSlice'
import { BMI } from '@/utils/healthMetrics'
import styles from '@/styles/results.module.scss'

const Results: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Results')
  const active = useSelector(selectActive)
  const [disabled, setDisabled] = useState(true)
  const goal = useSelector(selectGoal)
  const goalImp = useSelector(selectGoalImperial)
  let inputHeight = useSelector(selectInputHeight)
  let inputWeight = useSelector(selectInputWeight)
  let totalCm = useSelector(selectTotalCm)
  let totalKg = useSelector(selectTotalKg)

  const BMIcurrent = BMI(inputHeight, inputWeight, totalCm, totalKg)
  const delay = 1700

  const btnContinueHandler = () => {
    return router.push(`/${locale}/quiz/event`)
  }

  useEffect(() => {
    const timeoutDelayHandler = () => {
      let activeIndex: number = 0

      if (BMIcurrent <= 18.4) {
        activeIndex = 1
      } else if (BMIcurrent >= 18.5 && BMIcurrent <= 24.9) {
        activeIndex = 2
      } else if (BMIcurrent >= 25 && BMIcurrent <= 39.9) {
        activeIndex = 3
      } else if (BMIcurrent > 40) {
        activeIndex = 4
      } else {
        activeIndex = 0
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

    if (!totalCm) {
      router.push(`/${locale}/quiz/height`)
    } else if (!totalKg) {
      router.push(`/${locale}/quiz/weight`)
    } else if (!goal && !goalImp) {
      router.push(`/${locale}/quiz/weight-goal`)
    } else {
    }

    timeoutDelayHandler()
  }, [BMIcurrent, totalCm, totalKg, goal, goalImp, locale, router, dispatch])

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
          <span>
            {t('normal')} <b>21.4</b>
          </span>
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
          {active === 0 && ''}
          <span
            className={active === 1 ? styles.bmiUnderweight : styles.bmiVariant}
          >
            <strong>{t('underweight')}</strong>
          </span>
          <span className={active === 2 ? styles.bmiNormal : styles.bmiVariant}>
            <strong>{t('normal')}</strong>
          </span>
          <span
            className={active === 3 ? styles.bmiOverweight : styles.bmiVariant}
          >
            <strong>{t('overweight')}</strong>
          </span>
          <span className={active === 4 ? styles.bmiObese : styles.bmiVariant}>
            <strong>{t('obese')}</strong>
          </span>
        </div>
      </div>
      {BMIcurrent <= 18.4 && (
        <div className={`${styles.bmiText} shadow-custom shadow-amber-100`}>
          <GiWeightScale className="text-4xl" />
          <div>
            <p>
              <b>{t('underText1')}</b>
            </p>
            <p>{t('underText2')}</p>
            <p>{t('underText3')}</p>
          </div>
        </div>
      )}
      {BMIcurrent >= 18.5 && BMIcurrent <= 24.9 && (
        <div className={`${styles.bmiText} shadow-custom shadow-customGreen`}>
          <FaThumbsUp className="text-4xl" />
          <div>
            <p>
              <b>{t('normalText1')}</b>
            </p>
            <p>{t('normalText2')}</p>
            <p>{t('normalText3')}</p>
          </div>
        </div>
      )}
      {BMIcurrent >= 25 && BMIcurrent <= 39.9 && (
        <div className={`${styles.bmiText} shadow-custom shadow-orange`}>
          <FaWeightScale className="text-4xl" />
          <div>
            <p>
              <b>{t('overText1')}</b>
            </p>
            <p>{t('overText2')}</p>
            <p>{t('overText3')}</p>
          </div>
        </div>
      )}
      {BMIcurrent >= 40 && (
        <div className={`${styles.bmiText} shadow-custom shadow-red`}>
          <IoWarning className="text-4xl text-red" />
          <div>
            <p>
              <b>{t('obeseText1')}</b>
            </p>
            <p>{t('obeseText2')}</p>
            <p>{t('obeseText3')}</p>
          </div>
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
