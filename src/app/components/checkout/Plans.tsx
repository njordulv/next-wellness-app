'use client'

import { useTranslations } from 'next-intl'
import { useSelector } from '@/store/store'
import {
  selectPlans,
  selectPlanOne,
  selectPlanTwo,
  selectPlanThree,
} from '@/store/slices/paymentSlice'
import styles from '@/styles/checkout.module.scss'

const Plans: React.FC = () => {
  const t = useTranslations('Checkout')
  const plans = useSelector(selectPlans)
  const planOne = useSelector(selectPlanOne)
  const planTwo = useSelector(selectPlanTwo)
  const planThree = useSelector(selectPlanThree)
  const currency = plans.currency.symbol

  let selectedPlan: string = ''
  let monthlyPrice: string = ''
  let discountPrice: string = ''
  let totalPrice: string = ''
  let totalDiscountPrice: string = ''

  if (plans.plan1 === true) {
    selectedPlan = planOne.name
    monthlyPrice = planOne.monthPrice
    discountPrice = planOne.discountFullPrice
    totalPrice = planOne.totalPrice
    totalDiscountPrice = planOne.totalDiscountPrice
  }

  if (plans.plan2 === true) {
    selectedPlan = planTwo.name
    monthlyPrice = planTwo.monthPrice
    discountPrice = planTwo.discountFullPrice
    totalPrice = planTwo.totalPrice
    totalDiscountPrice = planTwo.totalDiscountPrice
  }

  if (plans.plan3 === true) {
    selectedPlan = planThree.name
    monthlyPrice = planThree.monthPrice
    discountPrice = planThree.discountFullPrice
    totalPrice = planThree.totalPrice
    totalDiscountPrice = planThree.totalDiscountPrice
  }

  return (
    <section className={styles.orderDetails}>
      <h3>{t('orderDetails')}:</h3>
      <div className={styles.orderDetailsItems}>
        <div className={styles.orderDetailsItem}>
          <div>{t('yourChoice')}:</div>
          <div></div>
          <div>{selectedPlan}</div>
        </div>
        <div className={styles.orderDetailsItem}>
          <div>{t('monthlyPrice')}:</div>
          <div></div>
          <div>
            <span className={styles.orderDetailsOldPrice}>
              {currency}
              {monthlyPrice}
            </span>
            <span>
              {currency}
              {discountPrice}
            </span>
          </div>
        </div>
        <div className={styles.orderDetailsItem}>
          <div>{t('total')}:</div>
          <div></div>
          <div>
            <span className={styles.orderDetailsOldPrice}>
              {currency}
              {totalPrice}
            </span>
            <span>
              {currency}
              {totalDiscountPrice}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
