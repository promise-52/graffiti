import './Main.scss'
import star from '@/assets/img/star.svg'
import raboti from '@/assets/img/raboti.svg'
import { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '@/hooks/window-dimension'

export function Main() {
  const showsRef = useRef(null)
  const [marginLeft, setMarginLeft] = useState('auto')
  const { width, height } = useWindowDimensions()


  useEffect(() => {
    const timer = setTimeout(() => {
      if (showsRef.current && width > 400) {
        const computedStyle = window.getComputedStyle(showsRef.current)
        console.log(computedStyle.marginLeft) 
        setMarginLeft(computedStyle.marginLeft)
      }
    }, 1) // Выполняем через макротаск, чтобы убедиться, что браузер закончил рендеринг
    return () => clearTimeout(timer)
  }, [width])

  return (
    <div className='main-container'>
      <div className='main-balloon'></div>
      <div className='main-text text-heathergreen'>
        <div className='main-stars-container'>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <div style={{}}>
          ЭФФЕКТГРАФФ
        </div>
        <div style={{marginLeft: 'auto'}} ref={showsRef}>
          ПРЕДСТАВЛЯЕТ
        </div>
        <div style={{ marginTop: '1rem',}} className='main-jobs-container' >
          <img src={raboti}  alt="raboti"/>
        </div>
        <div style={{marginLeft}}>
          Здесь
        </div>
      </div>
    </div>
  )
}
