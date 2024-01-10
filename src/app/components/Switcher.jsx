'use client'

import { useSelector, useDispatch } from '../lib/redux/store'
import {
  toggleSwitch,
  selectSwitcherSystem,
  selectSwitcherIsMetric,
} from '../lib/redux/slices/switcherSlice'
import { resetForm, setIsMetric } from '../lib/redux/slices/formSlice'
import styles from '../styles/main.module.css'

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
        <div className={styles.switcherButton}>
          <input
            type="checkbox"
            className={styles.switcherCheckbox}
            name={SwitcherSystem}
            checked={SwitcherIsMetric}
            onChange={() => toggleSystem()}
          />
          <div className={styles.switcherKnobs}>
            <span></span>
          </div>
          <div className={styles.switcherLayer}></div>
        </div>
      </div>
    </>
  )
}

export default Switcher
