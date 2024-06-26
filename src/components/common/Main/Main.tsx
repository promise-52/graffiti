import './Main.scss'
import star from '@/assets/img/star.svg'
import worksRu from '@/assets/img/works-ru.png'
import worksEn from '@/assets/img/works-en.png'
import { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '@/hooks/window-dimension'
import { Ballon } from '../Ballon/Ballon'
import i18next from 'i18next'

export function Main() {
  const showsRef = useRef(null)
  const [marginLeft, setMarginLeft] = useState('auto')
  const { width } = useWindowDimensions()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showsRef.current && width > 400) {
        const computedStyle = window.getComputedStyle(showsRef.current)
        setMarginLeft(computedStyle.marginLeft)
      }
    }, 1) // Выполняем через макротаск, чтобы убедиться, что браузер закончил рендеринг
    return () => clearTimeout(timer)
  }, [width, i18next.language])

  return (
    <>
      <div className='main-container'>
        <div className='main-balloon'>
          <Ballon />
        </div>
        <div className='main-text text-heathergreen'>
          <div className='main-stars-container'>
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div style={{}}>
            { i18next.t('label') }
          </div>
          <div style={{marginLeft: 'auto'}} ref={showsRef}>
            { i18next.t('present') }
          </div>
          <div style={{ marginTop: '1rem',}} className='main-jobs-container' >
            <img src={i18next.language === 'en' ? worksEn : worksRu}  alt="raboti"/>
          </div>
          <div style={{marginLeft}}>
            { i18next.t('here') }
          </div>
        </div>
      </div>
    </>
  )
}
