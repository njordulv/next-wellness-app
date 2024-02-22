import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps,
} from 'recharts'
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

interface CustomTooltipProps extends TooltipProps<string, string> {
  active?: boolean
  payload?: any[]
}

export default function QuizChart() {
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

  const data = [
    {
      name: t('start'),
      weight: weightCurr,
    },
    {
      name: `${t('week')} I`,
      weight: diff1.toFixed(),
    },
    {
      name: `${t('week')} II`,
      weight: diff2.toFixed(),
    },
    {
      name: `${t('week')} III`,
      weight: diff3.toFixed(),
    },
    {
      name: t('finish'),
      weight: weightGoal,
    },
  ]

  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-950 bg-opacity-75 rounded-md px-3 text-white">
          {`${payload[0].value} ${measure}`}
        </div>
      )
    }

    return null
  }

  return (
    <>
      <h3 className="font-medium">{t('chartTitle')}</h3>
      <h4 className={styles.chartTitle}>{`${weightGoal} ${measure} ${t(
        'by'
      )} ${date}`}</h4>
      <div className="flex justify-center">
        <ComposedChart
          width={480}
          height={200}
          data={data}
          margin={{ top: 10, right: 35, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="line1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="24%" stopColor="#ab79d7" stopOpacity={0.8} />
              <stop offset="98%" stopColor="#ab79d7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="weight"
            stroke="#ab79d7"
            fillOpacity={1}
            fill="url(#line1)"
            animationBegin={100}
            animationEasing="ease-in-out"
          />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#cd94ff"
            strokeWidth="2"
            dot={{ stroke: '#ab79d7', fill: '#ab79d7' }}
            activeDot={{ stroke: '#ab79d7', fill: 'white' }}
            animationEasing="ease-in-out"
          />
        </ComposedChart>
      </div>
      <div className="flex items-center justify-center mt-9">
        <button className="button" onClick={nextStepHandler}>
          {t('continue')}
        </button>
      </div>
    </>
  )
}
