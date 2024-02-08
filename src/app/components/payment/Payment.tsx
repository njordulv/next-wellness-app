'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { toast, ToastContainer } from 'react-toastify'
import { BiLoaderAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from '@/store/store'
import {
  setPlans,
  setOffer,
  setPopular,
  selectPlans,
  selectCurrency,
  selectPlanOne,
  selectPlanTwo,
  selectPlanThree,
} from '@/store/slices/paymentSlice'
import { setCheckbox, selectCheckbox } from '@/store/slices/checkboxSlice'
import 'react-toastify/dist/ReactToastify.css'
import * as mess from '@/utils/messages'
import styles from '@/styles/payment.module.scss'

const Payment: React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Payment')
  const plans = useSelector(selectPlans)
  const checkbox = useSelector(selectCheckbox)
  const currency = useSelector(selectCurrency)
  const planOne = useSelector(selectPlanOne)
  const planTwo = useSelector(selectPlanTwo)
  const planThree = useSelector(selectPlanThree)
  const [bestOffer, setBestOffer] = useState(t('bestOffer'))
  const [mostPopular, setMostPopular] = useState('')
  const [defaultPrice, setDefaultPrice] = useState(planTwo.discountFullPrice)
  const [fullPrice, setFullPrice] = useState(planTwo.monthPrice)
  const [errorDisplayed, setErrorDisplayed] = useState(false)
  const [loading, setLoading] = useState(false)
  const paymentPlanId = ['plan1', 'plan2', 'plan3']

  // plan selection
  const handlePlanChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const updatedPlans = {
      plan1: false,
      plan2: false,
      plan3: false,
      [name]: event.target.checked,
    }

    dispatch(setPlans(updatedPlans))

    const { plan1, plan2 } = updatedPlans

    if (plan1) {
      setDefaultPrice(planOne.discountFullPrice)
      setFullPrice(planOne.monthPrice)
      dispatch(setOffer(''))
      dispatch(setPopular(''))
      setBestOffer('')
      setMostPopular('')
    } else if (plan2) {
      setDefaultPrice(planTwo.discountFullPrice)
      setFullPrice(planTwo.monthPrice)
      dispatch(setOffer(t('bestOffer')))
      dispatch(setPopular(''))
      setBestOffer(t('bestOffer'))
      setMostPopular('')
    } else {
      setDefaultPrice(planThree.discountFullPrice)
      setFullPrice(planThree.monthPrice)
      dispatch(setOffer(''))
      dispatch(setPopular(t('mostPopular')))
      setBestOffer('')
      setMostPopular(t('mostPopular'))
    }
  }

  // checkbox selection
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    dispatch(setCheckbox({ ...checkbox, [name]: event.target.checked }))
  }

  // form submiting
  const submitPaymentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorDisplayed(false)

    if (!(checkbox.conditions && checkbox.terms)) {
      if (!errorDisplayed) {
        toast.error(mess.checkboxError(t))
        setErrorDisplayed(true)
      }
    } else {
      toast.success(mess.toastComplete(t))
      setLoading(true)
      setTimeout(() => {
        router.push(`/${locale}/checkout`)
      }, 4000)
    }
  }

  return (
    <>
      <form className={styles.payment} onSubmit={submitPaymentHandler}>
        <div className={styles.paymentPlans}>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={paymentPlanId[0]}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans && plans.plan1}
              onChange={(e) => handlePlanChange(e, 'plan1')}
            />
            <label htmlFor={paymentPlanId[0]}>
              <div className={styles.paymentName}>{t('planOneName')}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planOne.discountPrice}
                  </b>
                  &nbsp;
                  <i>{t('perDay')}</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planOne.oldPrice}
                </span>
              </div>
            </label>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={paymentPlanId[1]}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans && plans.plan2}
              onChange={(e) => handlePlanChange(e, 'plan2')}
            />
            <label htmlFor={paymentPlanId[1]}>
              <div className={styles.paymentName}>{t('planTwoName')}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planTwo.discountPrice}
                  </b>
                  &nbsp;
                  <i>{t('perDay')}</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planTwo.oldPrice}
                </span>
              </div>
            </label>
            <div
              className={`${styles.paymentPopular} ${styles.paymentBestOffer}`}
            >
              {bestOffer}
            </div>
          </div>
          <div className={styles.paymentPlan}>
            <input
              type="radio"
              id={paymentPlanId[2]}
              name="planOptions"
              className={styles.paymentInput}
              checked={plans && plans.plan3}
              onChange={(e) => handlePlanChange(e, 'plan3')}
            />
            <label htmlFor={paymentPlanId[2]}>
              <div className={styles.paymentName}>{t('planThreeName')}</div>
              <div className={styles.paymentPrice}>
                <span>
                  <b>
                    {currency.symbol}
                    {planThree.discountPrice}
                  </b>
                  &nbsp;
                  <i>{t('perDay')}</i>
                </span>
                <span className={styles.paymentOldPrice}>
                  {currency.symbol}
                  {planThree.oldPrice}
                </span>
              </div>
            </label>
            <div className={styles.paymentPopular}>{mostPopular}</div>
          </div>
        </div>
        <div className={styles.checkboxes}>
          <div className={styles.checkbox}>
            <label
              htmlFor="checkbox-conditions"
              className={styles.checkboxWrapper}
            >
              <input
                type="checkbox"
                id="checkbox-conditions"
                name="checkbox-conditions"
                checked={checkbox.conditions}
                onChange={(e) => handleCheckboxChange(e, 'conditions')}
              />
              <div className={styles.checkboxSlider}>
                <div className={styles.checkboxKnob}></div>
              </div>
            </label>
            <small>{t('checkboxOne')}</small>
          </div>
          <div className={styles.checkbox}>
            <label htmlFor="checkbox-terms" className={styles.checkboxWrapper}>
              <input
                type="checkbox"
                id="checkbox-terms"
                name="checkbox-terms"
                checked={checkbox.terms}
                onChange={(e) => handleCheckboxChange(e, 'terms')}
              />
              <div className={styles.checkboxSlider}>
                <div className={styles.checkboxKnob}></div>
              </div>
            </label>
            <small>
              {t('checkboxTwoStart')}&nbsp;
              <b>
                {defaultPrice}
                &nbsp;{currency.abbr}
              </b>
              &nbsp;{t('and')}&nbsp;
              <b>
                {fullPrice}
                &nbsp;{currency.abbr}
              </b>
              &nbsp; {t('checkboxTwoEnd')}
            </small>
          </div>
        </div>
        <div className="text-center">
          {loading ? (
            <button type="submit" className="button loading">
              <BiLoaderAlt className="spinner" />
            </button>
          ) : (
            <button type="submit" className="button">
              {t('getMyPlan')}
            </button>
          )}
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
    </>
  )
}

export default Payment
