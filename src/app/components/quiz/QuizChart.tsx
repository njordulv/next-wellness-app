'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useSelector } from '@/store/store'
import {
  selectInputWeight,
  selectWeightImperial,
  selectGoal,
  selectGoalImperial,
  selectIsMetric,
} from '@/store/slices/formSlice'
import styles from '@/styles/quiz.module.scss'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const QuizChart = () => {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Quiz')
  const w = useSelector(selectInputWeight)
  const wImp = useSelector(selectWeightImperial)
  const g = useSelector(selectGoal)
  const gImp = useSelector(selectGoalImperial)
  const isMetric = useSelector(selectIsMetric)
  const weightCurr = parseInt(isMetric ? w : wImp)
  const weightGoal = parseInt(isMetric ? g : gImp)
  const measure = isMetric ? 'kg' : 'lbs'
  const totalDiff = weightCurr - weightGoal
  const interval = totalDiff / 2.9
  const diff1 = weightCurr - interval
  const diff2 = weightCurr - 1.2 * interval
  const diff3 = weightCurr - 2.4 * interval
  const d = new Date()
  const date = d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })

  const nextStepHandler = () => {
    router.push(`/${locale}/testimonials`)
  }

  return (
    <>
      <h3>{t('chartTitle')}</h3>
      <h4 className={styles.chartTitle}>{`${weightGoal} ${measure} ${t(
        'by'
      )} ${date}`}</h4>
      <div className="">
        <Line
          data={{
            labels: [
              t('start'),
              `${t('week')} I`,
              `${t('week')} II`,
              `${t('week')} III`,
              t('finish'),
            ],
            datasets: [
              {
                data: [
                  weightCurr,
                  diff1.toFixed(),
                  diff2.toFixed(),
                  diff3.toFixed(),
                  weightGoal,
                ],
                borderWidth: 3,
                borderColor: '#757575',
                backgroundColor: '#ab79d7',
                hoverBackgroundColor: '#ab79d7',
                pointHoverBorderColor: '#ab79d7',
                pointStyle: 'circle',
                pointRadius: 9,
                pointHoverRadius: 9,
                pointBorderColor: '#222',
                pointBorderWidth: 3,
                pointHitRadius: 60,
              },
            ],
          }}
        />
      </div>
      <div className="flex items-center justify-center mt-7">
        <button className="button" onClick={nextStepHandler}>
          {t('continue')}
        </button>
      </div>
    </>
  )
}
export default QuizChart
