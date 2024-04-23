import { useState } from "react";
import Slider from "./components/Slider/Slider";
import './Gallery.scss'
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'

export interface Slide {
  location: string
  author: string
  authors: string[]
  imagesUrls: string[]
}

export default function Gallery() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const slides: Slide[] = [
    {
      location: 'Камчатка, Россия // 2022',
      author: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2]
    }
  ]

  return <>
    <div className="gallery-container">
      <Slider />
      <div className="text-heathergreen" id="geography-title">
        Наша <br />география
      </div>
    </div>
  </>
}