'use client'

import { useTranslations } from 'next-intl'
import { GiWeightScale, GiCheckMark } from 'react-icons/gi'
import {
  TbStretching2,
  TbTargetOff,
  TbStarFilled,
  TbActivity,
} from 'react-icons/tb'
import { SiReact, SiNextdotjs, SiVercel, SiNodedotjs } from 'react-icons/si'
import { useSelector } from '@/store/store'
import {
  selectIsMetric,
  selectGoal,
  selectGoalImperial,
} from '@/store/slices/formSlice'
import PageLayoutWithoutTitle from '../layouts/PageLayoutWithoutTitle'
import ProgressScroll from '../progress/ProgressScroll'
import TestimonialSlider from '../slider/testimonials'
import Payment from '../../[locale]/components/payment/Payment'
import * as mess from '@/utils/messages'
import styles from '@/styles/offer.module.scss'

const Offer = () => {
  const t = useTranslations('Offer')
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
    <PageLayoutWithoutTitle>
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
            <b>{t('before')}</b>
            <b>{t('after')}</b>
          </div>
          <div className={styles.offerTarget_bot}>
            <div>
              <span>{t('metabolicRate')}</span>
              <div className="flex flex-row gap-0 mt-4 text-2xl text-green">
                <TbActivity />
                <TbActivity />
                <TbActivity />
                <TbActivity className="text-grey" />
                <TbActivity className="text-grey" />
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span>{t('metabolicRate')}</span>
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
          <small>{t('keepInMind')}</small>
        </div>
        <br />
        <br />
        <h2>{t('customPlanAwaits')}</h2>
        <div className={styles.offerTarget_weight}>
          <h4>{t('targetWeight')}</h4>
          <span>
            <GiWeightScale className="text-green text-[22px]" />
            {isMetric
              ? goal
                ? `${goal} kg`
                : mess.completePrevSteps(t)
              : goalImperial
              ? `${goalImperial} lbs`
              : mess.completePrevSteps(t)}
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
          <p>{t('newcomersSuccess')}</p>
        </div>
        <br />
        <div className={styles.offerWhatYouGet}>
          <h2>{t('whatYouGet')}</h2>
          <p>{t('customizationDetails')}</p>
          <p>{t('goalList')}</p>
          <ul>
            <li>
              <GiCheckMark /> {t('item1')},
            </li>
            <li>
              <GiCheckMark /> {t('item2')},
            </li>
            <li>
              <GiCheckMark /> {t('item3')},
            </li>
            <li>
              <GiCheckMark />
              {t('item4')}.
            </li>
          </ul>
          <p>{t('appFeatures')}</p>
          <small>{t('poweredBy')}</small>
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
        <h2>{t('userSuccessStories')}</h2>
        <TestimonialSlider />
        <br />
        <br />
        <br />
        <div className="flex justify-center">
          <button className="button" onClick={handleScroll}>
            {t('grabMyPlan')}
          </button>
        </div>
        <br />
        <br />
        <h2>{t('transformationTimeframe')}</h2>
        <div className={styles.offerTarget_weight}>
          <h4>{t('targetWeight')}</h4>
          <span>
            <GiWeightScale className="text-green text-[22px]" />
            {goal ? `${goal} lbs` : mess.completePrevSteps(t)}
          </span>
        </div>
        <Payment />
      </div>
    </PageLayoutWithoutTitle>
  )
}

export default Offer
