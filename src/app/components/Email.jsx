'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from '../lib/redux/store'
import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import {
  submitEmail,
  setEmailValue,
  selectEmailValue,
  clearNetworkError,
  selectNetworkError,
} from '../lib/redux/slices/emailSlice'
import styles from '../styles/email.module.scss'

const Email = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const emailValue = useSelector(selectEmailValue)
  const networkError = useSelector(selectNetworkError)
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm()

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Invalid email address',
    },
  }

  const inputHandler = (e) => {
    const value = e.target.value
    dispatch(setEmailValue(value))

    if (value.length > 1) {
      dispatch(clearNetworkError())
      setDisabled(false)
      clearErrors()
    }

    if (!value) {
      setDisabled(true)
    }
  }

  const eraseInputHandler = () => {
    dispatch(setEmailValue(''))
    dispatch(clearNetworkError())
    setDisabled(true)
    clearErrors()
  }

  const onSubmitHandler = async (data) => {
    const dataWithTime = { ...data, time: `${hours}:${minutes}` }
    setLoading(true)
    try {
      const result = await dispatch(submitEmail(dataWithTime))

      setTimeout(() => {
        if (submitEmail.fulfilled.match(result)) {
          setLoading(false)
          router.push('/offer')
        }
      }, 3000)
    } catch (error) {
      setLoading(false)
      console.error('Error occurred:', error)
    }
  }

  return (
    <>
      <h2>
        Provide your email address for receiving your personalized fasting plan!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className={styles.formEmail}
      >
        <div className={`${styles.formEmail__field}`}>
          <HiOutlineMail className={styles.formEmail__icon} />
          <input
            {...register('email', emailValidation)}
            type="text"
            className={`${styles.input} ${styles.formEmail__input}`}
            placeholder="Email"
            value={emailValue}
            onChange={inputHandler}
          />
          {errors.email && (
            <div className={styles.formEmail__error}>
              {errors.email.message}
            </div>
          )}
          {networkError && (
            <div className={styles.formEmail__error}>{networkError}</div>
          )}
          <button
            className={styles.formEmail__erase}
            disabled={disabled}
            onClick={eraseInputHandler}
          >
            <IoCloseOutline />
          </button>
        </div>
        <div className={styles.formEmail__privacy}>
          <GoShieldCheck />
          <span>
            Kindly review our <Link href="/privacy-policy">Privacy Policy</Link>
            &nbsp; for insights on how we utilize your information.
          </span>
        </div>
        {loading ? (
          <button type="submit" className="button loading">
            <BiLoaderAlt className="spinner" />
          </button>
        ) : (
          <button type="submit" className="button">
            Submit
          </button>
        )}
      </form>
    </>
  )
}

export default Email
