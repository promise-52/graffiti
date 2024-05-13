// Import Swiper React components
import './Slider.scss'

import { useEffect, useMemo, useRef, useState } from 'react';
import SliderItem from './components/SliderItem/SliderItem';
import { useContainerDimensions } from '@/hooks/container-dimenstion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Slide } from '../../Gallery';
import arrowRight from '@/assets/img/Arrow 2.svg'
import useWindowDimensions from '@/hooks/window-dimension';

interface SliderProps {
  data: Slide[]
}

export default function Slider({ data }: SliderProps) {
  const sliderContainerRef = useRef<any>()
  const { width: screenWidth, height: screenHeight } = useWindowDimensions()
  const { width } = useContainerDimensions(sliderContainerRef)
  
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const slides = useRef<Element[]>([])
  const galleryTitle = useRef<HTMLDivElement>(null)

  const sliderGap = useMemo(() => {
    if(width > 605) {
      return 10
    } else {
      return 5
    }
  }, [width])
  
  const getCenterSliderWidth = () => {
    if (screenWidth > 1700) {
      return [742, 7]
    } else if (screenWidth > 1500) {
      return [600, 5]
    } else if (screenWidth >= 1000) {
      return [350, 5]
    }
    else if(screenWidth >= 550) {
      return [width/5, 5]
    } else if(screenWidth <= 550) {
      return [width/3, 3]
    }
    return [width/5, 5]
  }

  

  const [centerSlideWidth, slidesPerPage] = width ? getCenterSliderWidth() : [0,0]
  const slideWidth = width ? ((width - centerSlideWidth - sliderGap) / (slidesPerPage > 2 ? (slidesPerPage - 1) : 1)) - sliderGap : 0
  
  const sliderInit = () => {
    const s = document.getElementsByClassName('slider-item');
    const containerStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration
    const oldActiveSlide = document.getElementsByClassName('slider-item-active')[0]
    if (oldActiveSlide) {
      oldActiveSlide.classList.remove('slider-item-active')
      oldActiveSlide.parentElement?.classList.remove('slider-item-container-active')
    }

      console.log('width', width)
    slides.current = [...s]
    const index = Math.ceil(slidesPerPage / 2);
    setActiveSlideIndex(index);

    (s[index] as any).style.minWidth = `${centerSlideWidth}px`
    s[index].classList.add('slider-item-active')
    s[index].parentElement?.classList.add('slider-item-container-active')
    containerStyle.transform = `translate3d(-${slideWidth + sliderGap/2}px, 0px, 0px)`
  }

  const changeSlide = (index: number) => {
    if (index < 0) {
      return
    } else if (index > slides.current.length - 1) {
      return
    }

    const direction = index - activeSlideIndex
    const elementStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration

    const px = Number(elementStyle.transform.match(/translate3d\((-?\d+(?:\.\d+)?px)/)![1].replace('px', '')) - direction * slideWidth - direction * sliderGap
    elementStyle.transform = elementStyle.transform.replace(/(-?\d+(?:\.\d+)?px)/, `${px.toString()}px`)
    setActiveSlideIndex(index);

    (slides.current[index - direction] as any).style.minWidth = `${slideWidth}px`;
    (slides.current[index] as any).style.minWidth = `${centerSlideWidth}px`;
    slides.current[index - direction].classList.remove('slider-item-active')
    slides.current[index].classList.add('slider-item-active')

    slides.current[index - direction].parentElement?.classList.remove('slider-item-container-active')
    slides.current[index].parentElement?.classList.add('slider-item-container-active')
  }

  const goBack = (index: number) => {
    changeSlide(index - 1)
  }

  const goForward = (index: number) => {
    changeSlide(index + 1)
  }

  useEffect(() => {
    if(width > 0) {
      sliderInit()
    }
    
    console.log(width)
  }, [width])

  useEffect(() => {
    galleryTitle.current?.classList.remove('slider-names-container')
    void galleryTitle.current?.offsetWidth
    galleryTitle.current?.classList.add('slider-names-container');
  }, [activeSlideIndex])

  console.log(Math.ceil(slidesPerPage / 2))
  return (
    <>
      <div className='slider-arrows-container'>
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowLeft} onClick={(e) => goBack(activeSlideIndex)} />
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowRight} onClick={(e) => goForward(activeSlideIndex)} />
      </div>
      
      <div className='slider-counter text-pptelegraph text-white weight-800'>
        <div className='primary-opacity'>
          {activeSlideIndex+1}
        </div>
        /
        <div>
          {data.length}
        </div>
      </div>
      <div className="slider-names-anim slider-names-container text-white text-pptelegraph line-height-middle" 
        ref={galleryTitle}
        style={{ left: ((slideWidth + sliderGap) * Math.floor(slidesPerPage / 2) + sliderGap + sliderGap/2) }}
      >
        <div className='slider-names-location'>
        {data[activeSlideIndex].location}
        </div>
        <div className='slider-names-title primary-opacity'>
          {data[activeSlideIndex].name}
        </div>
        <div className='slider-names-authors-container '>
          {
            data[activeSlideIndex].authors.map((author) => (
              <div className='slider-names-authors-item line-height-middle'>
                <div className='primary-opacity'>
                  /
                </div>
                <div>
                  {author }
                </div>
              </div>
              )
            )
          }
        </div>
      </div>
      <div className='slider-overflow-container' ref={sliderContainerRef}>
        { screenWidth <= 1000 && 
          <img src={data[activeSlideIndex].imagesUrls[0]} className='slider-overflow-container-image' />
        }
        <div className='slider-container text-white' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          {data.map((slide: Slide, index: number) => (
            <SliderItem
              slide={slide}
              imgSrc={slide.imagesUrls}
              style={{ minWidth: slideWidth }}
              isActive={activeSlideIndex === index}
              index={index}
              key={index}
              showIndex={width > 1000 ? true : false}
              onClick={(index) => changeSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
