import { useState } from 'react'

import { Slide } from '@/components/common/Gallery/Gallery'
import SliderItemFavicons from '../SliderItemFavicons/SliderItemFavicons'

interface PropsSliderItem {
  style: React.CSSProperties,
  imgSrc: string[]
  index: number
  isActive: boolean
  slide: Slide
  showIndex: boolean
  onClick?: (index: number) => void
}

export default function SliderItem({ style, imgSrc, isActive, index, onClick, slide, showIndex }: PropsSliderItem) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const onItemClick = (index: number) => {
    setCurrentImageIndex(index)
  }
  return <>
    <div className='slider-item-container'>
      { showIndex && <div className={`slider-item-index text-pptelegraph ${ isActive ? '' : 'primary-opacity'}`}>
        {`${index < 10 ? '0' : ''}${index}`}
      </div>}
      <div className='slider-item' style={style}>
        <SliderItemFavicons isActive={isActive} showIndex={showIndex} slide={slide} onClick={onItemClick} currentImageIndex={currentImageIndex}/>
        <img className='slider-item-main-image' src={imgSrc[currentImageIndex]} onClick={() => onClick && onClick(index)}></img>
      </div>
    </div>
  </>
}