import { useState } from "react";
import Slider from "./components/Slider/Slider";
import './Gallery.scss'
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'

export interface Slide {
  location: string
  name: string
  authors: string[]
  imagesUrls: string[]
}

export default function Gallery() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const slides: Slide[] = [
    {
      location: 'Камчатка, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 2 , Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img2, img, img, img2, img2, img2]
    },
    {
      location: 'Камчатка 3, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 4, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 5, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img2, img, img, img2, img2, img2]
    },
    {
      location: 'Камчатка 6, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 7, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 8, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 9, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 10, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 11, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    },
    {
      location: 'Камчатка 12, Россия // 2022',
      name: 'therewas_fiaskoband',
      authors: ['jozi_one', 'kingmaiz', 'kabyone'],
      imagesUrls: [img, img2, img2, img2, img2, img2]
    }
  ]

  return <>
    <div className="gallery-container">
      <Slider data={slides}/>
      <div className="text-heathergreen" id="geography-title">
        Наша <br />география
      </div>
      
    </div>
  </>
}