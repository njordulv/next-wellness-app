'use client'

import { useSelector, useDispatch } from '../../lib/redux/store'
import { useEffect } from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import {
  setThemeMode,
  selectThemeMode,
} from '../../lib/redux/slices/themeSlice'
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(selectThemeMode)
  const { darkTheme } = themeMode

  const themeHandler = (event, name) => {
    const mode = { ...themeMode, [name]: event.target.checked }
    dispatch(setThemeMode(mode))
    localStorage.setItem('theme', JSON.stringify(mode))
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme)
    document.body.classList.toggle('light-theme', !darkTheme)
    const storedTheme = JSON.parse(localStorage.getItem('theme'))

    if (storedTheme) {
      dispatch(setThemeMode(storedTheme))
    }
  }, [darkTheme, dispatch])

  return (
    <div className={styles.themeSwitch}>
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={(e) => themeHandler(e, 'darkTheme')}
          className={styles.checkboxInput}
        />
        <div className={styles.checkboxSlider}>
          <div className={styles.checkboxKnob} aria-label="Switch theme">
            {darkTheme ? <IoMoonSharp /> : <IoSunnyOutline />}
          </div>
        </div>
      </label>
    </div>
  )
}

export default ThemeSwitcher
