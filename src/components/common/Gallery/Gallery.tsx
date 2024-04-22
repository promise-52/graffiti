// Import Swiper React components
import './Gallery.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useEffect, useRef, useState } from 'react';

import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'
import SliderItem from './components/SliderItem/SliderItem';

export default function Gallery() {
  const slidesPerPage = 7
  const screenWidth = 1920
  const centerSlideWidth = 640
  const slideWidth = ((screenWidth - centerSlideWidth - 10) / (slidesPerPage - 1)) - 10

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const slides = useRef<Element[]>([])

  const sliderInit = () => {
    const s = document.getElementsByClassName('slider-item');
    const containerStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration
    const overflowContainerStyle = (document.getElementsByClassName('slider-overflow-container')[0] as any).style as CSSStyleDeclaration

    slides.current = [...s]
    const slidesLengthDifference = s.length - slidesPerPage
    const index = Math.floor(s.length / 2);
    setActiveSlideIndex(index);
    (s[index] as any).style.minWidth = `${centerSlideWidth}px`
    s[index].classList.add('slider-item-active')
    containerStyle.transform = `translate3d(-${slideWidth+10}px, 0px, 0px)`
    overflowContainerStyle.width = `${screenWidth-5}px`
  }

  const changeSlide = (index: number) => {
    if(index < 0) {
      return
    } else if(index > slides.current.length - 1) {
      return
    }

    const direction = index > activeSlideIndex ? 1 : -1

    const elementStyle = (document.getElementsByClassName('slider-container')[0] as any).style as CSSStyleDeclaration

    const px = Number(elementStyle.transform.match(/translate3d\((-?\d+(?:\.\d+)?px)/)![1].replace('px', '')) - direction * slideWidth - direction * 10
    elementStyle.transform = elementStyle.transform.replace(/(-?\d+(?:\.\d+)?px)/, `${px.toString()}px`)
    //elementStyle.transform = `translate3d(-${(slideWidth+10)*index}px, 0px, 0px)`
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
  }, [])


  return (
    <>
      <div className='text-white'>
        {activeSlideIndex.toString()}
      </div>
      <button onClick={(e) => goBack(activeSlideIndex)}>Back</button>
        <button onClick={(e) => goForward(activeSlideIndex)}>Forward</button>
      <div className='slider-overflow-container'>
        <div className='slider-container text-white' style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          <SliderItem imgSrc={img} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img2} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img2} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img2} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img2} style={{ minWidth: slideWidth }} />
          <SliderItem imgSrc={img} style={{ minWidth: slideWidth }} />
        </div>
      </div>




      {/* <div style={{height: '25rem'}}>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true} 
          modules={[Navigation]}
          className="gallery-slider"
          onSlideChangeTransitionEnd={onSlideChange}
          ref={swiper}
        >
          <SwiperSlide >Slide 1</SwiperSlide>
          <SwiperSlide >Slide 2</SwiperSlide>
          <SwiperSlide >Slide 3</SwiperSlide>
          <SwiperSlide >Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <SwiperSlide>Slide 10</SwiperSlide>
          <SwiperSlide>Slide 11</SwiperSlide>
        </Swiper>
      </div> */}

    </>
  );
}
