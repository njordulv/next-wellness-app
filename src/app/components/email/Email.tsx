'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineMail } from 'react-icons/hi'
import { GoShieldCheck } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { BiLoaderAlt } from 'react-icons/bi'
import { useSelector, useDispatch, AppDispatch } from '@/store/store'
import {
  submitEmail,
  setEmailValue,
  selectEmailValue,
  clearNetworkError,
  selectNetworkError,
} from '@/store/slices/emailSlice'
import PageLayout from '@/components/layouts/PageLayout'
import * as mess from '@/utils/messages'
import styles from '@/styles/email.module.scss'

interface EmailFormData {
  email: string
}

const Email: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Email')
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
  } = useForm<EmailFormData>()

  const emailValidation = {
    required: mess.requiredEmail(t),
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: mess.invalidEmail(t),
    },
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onSubmitHandler = async (data: EmailFormData) => {
    const dataWithTime = { email: data.email, time: `${hours}:${minutes}` }
    setLoading(true)
    try {
      const result = await dispatch(submitEmail(dataWithTime))

      setTimeout(() => {
        if (submitEmail.fulfilled.match(result)) {
          setLoading(false)
          router.push(`/${locale}/offer`)
        }
      }, 3000)
    } catch (error) {
      setLoading(false)
      console.error(mess.errorEmail(t), error)
    }
  }

  return (
    <PageLayout title={t('title')}>
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
            {t('privacyPreText')}&nbsp;
            <Link href={`/${locale}/privacy-policy`}>{t('privacyLink')}</Link>
            &nbsp;{t('privacyPostText')}
          </span>
        </div>
        {loading ? (
          <button type="submit" className="button loading">
            <BiLoaderAlt className="spinner" />
          </button>
        ) : (
          <button type="submit" className="button">
            {t('submit')}
          </button>
        )}
      </form>
    </PageLayout>
  )
}

export default Email
