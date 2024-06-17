import Slider from "./components/Slider/Slider";
import './Gallery.scss'
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'
import i18next from "i18next";
import { useInView } from 'react-intersection-observer'
import { Transition } from 'react-transition-group'

export interface Slide {
  location: string
  name: string
  authors: string[]
  imagesUrls: string[]
}

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function Gallery() {
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="gallery-title text-heathergreen">
      { i18next.t('gallery') }
      </div>
      <Transition in={inView} timeout={duration}>
        {state => (
          <div ref={ref} className="gallery-container" style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <Slider data={slides} />
            <div className="text-heathergreen" id="geography-title">
            { i18next.t('our') } <br /> { i18next.t('geography') }
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
