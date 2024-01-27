'use client'

import { GiWeightScale, GiCheckMark } from 'react-icons/gi'
import {
  TbStretching2,
  TbTargetOff,
  TbStarFilled,
  TbActivity,
} from 'react-icons/tb'
import { SiReact, SiNextdotjs, SiVercel, SiNodedotjs } from 'react-icons/si'
import { useSelector } from '../../lib/redux/store'
import {
  selectIsMetric,
  selectGoal,
  selectGoalImperial,
} from '../../lib/redux/slices/formSlice'
import ProgressScroll from '../progress/ProgressScroll'
import TestimonialSlider from '../slider/testimonials'
import Payment from '../payment/Payment'
import styles from '@/styles/offer.module.scss'

const Offer = () => {
  const isMetric = useSelector(selectIsMetric)
  const goal = useSelector(selectGoal)
  const goalImperial = useSelector(selectGoalImperial)

  const handleScroll = () => {
    const getMyPlan = document.getElementById('getMyPlan')

    if (getMyPlan) {
      getMyPlan.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.offerPage}>
      <ProgressScroll />
      <div className={styles.offerTarget}>
        <div className={styles.offerTarget_top}>
          <div>
            <TbTargetOff />
          </div>
          <div>
            <TbStretching2 />
          </div>
        </div>
        <div className={styles.offerTarget_mid}>
          <b>Before</b>
          <b>After</b>
        </div>
        <div className={styles.offerTarget_bot}>
          <div>
            <span>Metabolic rate</span>
            <div className="flex flex-row gap-0 mt-4 text-2xl text-green">
              <TbActivity />
              <TbActivity />
              <TbActivity />
              <TbActivity className="text-grey" />
              <TbActivity className="text-grey" />
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span>Metabolic rate</span>
            <div className="flex flex-row gap-0 mt-4 text-2xl text-green">
              <TbActivity />
              <TbActivity />
              <TbActivity />
              <TbActivity />
              <TbActivity />
            </div>
          </div>
        </div>
      </div>
      <div className="text-left">
        <small>
          Keep in mind that this doesn`t guarantee the expected outcomes.
        </small>
      </div>
      <br />
      <br />
      <h2>Your custom plan awaits!</h2>
      <div className={styles.offerTarget_weight}>
        <h4>Target Weight</h4>
        <span>
          <GiWeightScale className="text-green text-[22px]" />
          {isMetric
            ? goal
              ? `${goal} kg`
              : 'Please complete all the previous steps'
            : goalImperial
            ? `${goalImperial} lbs`
            : 'Please complete all the previous steps'}
        </span>
      </div>
      <div id="getMyPlan">
        <Payment />
      </div>
      <br />
      <div className="text-center">
        <h2 className="flex items-center justify-center">
          <TbStarFilled className="text-orange text-2xl" />
          &nbsp;10000+&nbsp;
          <TbStarFilled className="text-orange text-2xl" />
        </h2>
        <p>
          Newcomers achieved their enduring weight loss goals with our program!
        </p>
      </div>
      <br />
      <div className={styles.offerWhatYouGet}>
        <h2>What you`ll get:</h2>
        <p>
          We customize our plan to fit your unique needs and objectives using
          the information you provide alongside our special algorithms.
        </p>
        <p>To reach your goal, you`ll receive:</p>
        <ul>
          <li>
            <GiCheckMark /> A step-by-step lifestyle guide
          </li>
          <li>
            <GiCheckMark /> Over 100 weight-loss insights
          </li>
          <li>
            <GiCheckMark /> Trackers for hydration and weight
          </li>
          <li>
            <GiCheckMark />
            Exclusive guides to deepen your understanding of nutrition and
            training for achieving your goal.
          </li>
        </ul>
        <p>
          All these features are integrated into a single mobile app available
          on IOS 14.0+ or Android 8.0+ devices.
        </p>
        <small>Powered by:</small>
        <div className="grid grid-cols-2 items-center gap-4 text-grey text-[88px] mt-2 mb-5">
          <SiReact
            className="bg-background-darker w-full rounded-md p-5"
            aria-label="react"
          />
          <SiNextdotjs className="bg-background-darker w-full rounded-md p-5" />
          <SiVercel className="bg-background-darker w-full rounded-md p-5" />
          <SiNodedotjs className="bg-background-darker w-full rounded-md p-5" />
        </div>
      </div>
      <br />
      <h2>Read the inspiring success stories from our users</h2>
      <TestimonialSlider />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <button className="button" onClick={handleScroll}>
          Grab My Plan
        </button>
      </div>
      <br />
      <br />
      <h2>Witness noticeable transformations within a mere 3 weeks</h2>
      <div className={styles.offerTarget_weight}>
        <h4>Target Weight</h4>
        <span>
          <GiWeightScale className="text-green text-[22px]" />
          {goal ? `${goal} lbs` : 'Please complete all the previous steps'}
        </span>
      </div>
      <Payment />
    </div>
  )
}

export default Offer
