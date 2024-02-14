'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from '@/store/store'
import {
  toggleSwitch,
  selectSwitcherSystem,
  selectSwitcherIsMetric,
} from '@/store/slices/metricSlice'
import {
  setIsMetric,
  resetForm,
  resetWeightGoalForm,
  resetWeightForm,
} from '@/store/slices/formSlice'
import styles from '@/styles/metric-switch.module.scss'

const MeasureSwitch = () => {
  const locale = useLocale()
  const pathname = usePathname()

  const dispatch = useDispatch()
  const SwitcherIsMetric = useSelector(selectSwitcherIsMetric)
  const SwitcherSystem = useSelector(selectSwitcherSystem)

  const toggleSystem = () => {
    dispatch(toggleSwitch())
    dispatch(setIsMetric(!SwitcherIsMetric))

    switch (pathname) {
      case `/${locale}/quiz/weight`:
        dispatch(resetWeightForm())
        break
      case `/${locale}/quiz/weight-goal`:
        dispatch(resetWeightGoalForm())
        break
      default:
        dispatch(resetForm())
        break
    }
  }

  return (
    <>
      <div className={styles.switcher}>
        <div className={styles.switcher_button}>
          <input
            type="checkbox"
            className={styles.switcher_checkbox}
            name={SwitcherSystem}
            checked={SwitcherIsMetric}
            onChange={() => toggleSystem()}
          />
          <div className={styles.switcher_knobs}>
            <span></span>
          </div>
          <div className={styles.switcher_layer}></div>
        </div>
      </div>
    </>
  )
}

export default MeasureSwitch
