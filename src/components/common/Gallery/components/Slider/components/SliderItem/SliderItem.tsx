import { useState } from 'react'
import './SliderItem.scss'
import { Slide } from '@/components/common/Gallery/Gallery'

interface PropsSliderItem {
  style: React.CSSProperties,
  imgSrc: string[]
  index: number
  isActive: boolean
  slide: Slide
  onClick?: (index: number) => void
}

export default function SliderItem({ style, imgSrc, isActive, index, onClick, slide }: PropsSliderItem) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const onItemClick = (index: number) => {
    setCurrentImageIndex(index)
  }

  return <>
    <div className='slider-item' style={style}>
      {isActive &&
        <div className='slider-item-favicons-container text-white'>
          {
            slide.imagesUrls.map((src, index) => (
              <div className={`slider-item-favicons-item ${ index === currentImageIndex ? 'slider-item-favicons-item-active' : '' }`} key={index} onClick={() => onItemClick(index)}>
                <img src={src} className='slider-item-favicons-img' />
              </div>
            ))
          }
        </div>
      }
      <img className='slider-item-main-image' src={imgSrc[currentImageIndex]} onClick={() => onClick && onClick(index)}></img>
    </div>
  </>
}