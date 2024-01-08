'use client'

import { useEffect } from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { useSelector, useDispatch } from '../lib/redux/store'
import { setThemeMode, selectThemeMode } from '../lib/redux/slices/themeSlice'
import styles from '../styles/theme.module.scss'

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
      <label className={styles.themeSwitch_wrapper}>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={(e) => themeHandler(e, 'darkTheme')}
          className={styles.themeSwitch_input}
        />
        <div className={styles.themeSwitch_slider}>
          <div className={styles.themeSwitch_knob} aria-label="Switch theme">
            {darkTheme ? <IoMoonSharp /> : <IoSunnyOutline />}
          </div>
        </div>
      </label>
    </div>
  )
}

export default ThemeSwitcher
