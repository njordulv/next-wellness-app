import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'

const Popup = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  z-index: 2;

  &.show {
    display: flex;
  }

  &.hide {
    display: none;
  }
`

const PopupWrapper = styled.div`
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black);
  padding: 50px 20px;
  border-radius: 10px;
  width: 100%;
  background-size: 200% 200%;
  animation: fadeIn 0.35s ease-in-out;
  z-index: 9;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    transform: scale(0.96) translateZ(0);
    filter: blur(20px);
    background: linear-gradient(
      to left,
      var(--pink),
      var(--green),
      var(--blue),
      var(--purple)
    );
    background-size: 200% 200%;
    animation: animateGlow 3s linear infinite;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    z-index: -1;
    background: var(--background-darker);
  }

  span {
    color: var(--green);
  }
`

const ClosePopup = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: var(--pink);
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color);
  }
`

interface FinalProps {
  showPopup: boolean
  setPopup: Dispatch<SetStateAction<boolean>>
  emailValue: string
}

const Final: React.FC<FinalProps> = ({ showPopup, setPopup, emailValue }) => {
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations('Checkout')
  const popupClass = showPopup ? 'show' : 'hide'

  const closePopupHandler = () => {
    setPopup(false)
    router.push(`/${locale}/`)
  }

  return (
    <Popup className={popupClass}>
      <PopupWrapper>
        <h2>{t('finalOrder')}</h2>
        <h3>{t('finalThanx')}</h3>
        <h5>
          {t('finalEmailStart')} <span>{emailValue}</span> {t('finalEmailEnd')}
        </h5>
        <ClosePopup onClick={closePopupHandler}>
          <VscChromeClose />
        </ClosePopup>
      </PopupWrapper>
    </Popup>
  )
}

export default Final
