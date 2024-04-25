// Import Swiper React components
import './Slider.scss'

import { useEffect, useRef, useState } from 'react';
import SliderItem from './components/SliderItem/SliderItem';
import { useContainerDimensions } from '@/hooks/container-dimenstion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Slide } from '../../Gallery';

interface SliderProps {
  data: Slide[]
}

export default function Slider({ data }: SliderProps) {
  const sliderContainerRef = useRef<any>()
  const { width } = useContainerDimensions(sliderContainerRef)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const slides = useRef<Element[]>([])
  const galleryTitle = useRef<HTMLDivElement>(null)

  const getCenterSliderWidth = () => {
    if (width >= 1800) {
      return 742
    } else if (width >= 1500) {
      return 600
    } else if (width >= 1000) {
      return 400
    }
    return 300
  }

  const slidesPerPage = 7
  const centerSlideWidth = getCenterSliderWidth()
  const slideWidth = ((width - centerSlideWidth - 10) / (slidesPerPage - 1)) - 10

  const sliderInit = () => {
    const s = document.getElementsByClassName('slider-item');
    const containerStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration
    const oldActiveSlide = document.getElementsByClassName('slider-item-active')[0]
    if (oldActiveSlide) {
      oldActiveSlide.classList.remove('slider-item-active')
    }

    slides.current = [...s]
    const index = Math.ceil(slidesPerPage / 2);
    setActiveSlideIndex(index);

    (s[index] as any).style.minWidth = `${centerSlideWidth}px`
    s[index].classList.add('slider-item-active')
    console.log(index)
    containerStyle.transform = `translate3d(-${slideWidth + 5}px, 0px, 0px)`
  }

  const changeSlide = (index: number) => {
    if (index < 0) {
      return
    } else if (index > slides.current.length - 1) {
      return
    }

    const direction = index - activeSlideIndex
    const elementStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration

    const px = Number(elementStyle.transform.match(/translate3d\((-?\d+(?:\.\d+)?px)/)![1].replace('px', '')) - direction * slideWidth - direction * 10
    elementStyle.transform = elementStyle.transform.replace(/(-?\d+(?:\.\d+)?px)/, `${px.toString()}px`)
    setActiveSlideIndex(index);

    (slides.current[index - direction] as any).style.minWidth = `${slideWidth}px`;
    (slides.current[index] as any).style.minWidth = `${centerSlideWidth}px`;
    slides.current[index - direction].classList.remove('slider-item-active')
    slides.current[index].classList.add('slider-item-active')
  }

  const goBack = (index: number) => {
    changeSlide(index - 1)
  }

  const goForward = (index: number) => {
    changeSlide(index + 1)
  }

  useEffect(() => {
    sliderInit()
  }, [width])

  useEffect(() => {
    galleryTitle.current?.classList.remove('gallery-names-container')
    void galleryTitle.current?.offsetWidth
    galleryTitle.current?.classList.add('gallery-names-container');
  }, [activeSlideIndex])

  console.log(Math.ceil(slidesPerPage / 2))
  return (
    <>
      <div className='slider-arrows-container'>
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowLeft} onClick={(e) => goBack(activeSlideIndex)} />
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowRight} onClick={(e) => goForward(activeSlideIndex)} />
      </div>
      <div className="gallery-names-anim gallery-names-container text-white text-pptelegraph line-height-middle" 
        ref={galleryTitle}
        style={{ left: ((slideWidth + 10) * Math.floor(slidesPerPage / 2) + 15) }}
      >
        <div className='gallery-names-location'>
        {data[activeSlideIndex].location}
        </div>
        <div className='gallery-names-title'>
          {data[activeSlideIndex].name}
        </div>
        <div className='gallery-names-authors-container '>
          {
            data[activeSlideIndex].authors.map((author) => (
              <div className='gallery-names-authors-item line-height-middle'>
                <div>
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
        <div className='slider-container text-white' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          {data.map((slide: Slide, index: number) => (
            <SliderItem
              slide={slide}
              imgSrc={slide.imagesUrls}
              style={{ minWidth: slideWidth }}
              isActive={activeSlideIndex === index}
              index={index}
              key={index}
              onClick={(index) => changeSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
