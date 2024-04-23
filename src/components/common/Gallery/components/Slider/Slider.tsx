// Import Swiper React components
import './Slider.scss'

import { useEffect, useRef, useState } from 'react';
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'
import SliderItem from './components/SliderItem/SliderItem';
import { useContainerDimensions } from '@/hooks/container-dimenstion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Slider() {
  const sliderContainerRef = useRef<any>()
  const { width } = useContainerDimensions(sliderContainerRef)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const slides = useRef<Element[]>([])

  const slidesPerPage = 7
  const centerSlideWidth = width / 3
  const slideWidth = ((width - centerSlideWidth - 10) / (slidesPerPage - 1)) - 10



  const sliderInit = () => {
    const s = document.getElementsByClassName('slider-item');
    const containerStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration
    const oldActiveSlide = document.getElementsByClassName('slider-item-active')[0]
    if (oldActiveSlide) {
      oldActiveSlide.classList.remove('slider-item-active')
    }

    slides.current = [...s]
    const index = Math.floor(s.length / 2);
    setActiveSlideIndex(index);

    (s[index] as any).style.minWidth = `${centerSlideWidth}px`
    s[index].classList.add('slider-item-active')
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


  return (
    <>
      <div className='slider-arrows-container'>
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowLeft} onClick={(e) => goBack(activeSlideIndex)} />
        <FontAwesomeIcon className='slider-arrows-item' icon={faArrowRight} onClick={(e) => goForward(activeSlideIndex)} />
      </div>
      <div className='slider-overflow-container' ref={sliderContainerRef}>
        <div className='slider-container text-white' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          {new Array(9).fill(0).map((nothing: any, index: number) => (
            <SliderItem
              imgSrc={[img, img2]}
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
