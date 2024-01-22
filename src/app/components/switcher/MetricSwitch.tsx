'use client'

import { useSelector, useDispatch } from '../../lib/redux/store'
import {
  toggleSwitch,
  selectSwitcherSystem,
  selectSwitcherIsMetric,
} from '../../lib/redux/slices/switcherSlice'
import { resetForm, setIsMetric } from '../../lib/redux/slices/formSlice'
import styles from '../../styles/metric-switch.module.scss'

const Switcher = () => {
  const dispatch = useDispatch()
  const SwitcherIsMetric = useSelector(selectSwitcherIsMetric)
  const SwitcherSystem = useSelector(selectSwitcherSystem)

  const toggleSystem = () => {
    dispatch(toggleSwitch())
    dispatch(resetForm())
    dispatch(setIsMetric(!SwitcherIsMetric))
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

export default Switcher
