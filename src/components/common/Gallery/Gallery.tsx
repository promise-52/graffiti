import Slider from "./components/Slider/Slider";
import './Gallery.scss'
import { slides } from "./slides";
import i18next from "i18next";
import { useInView } from 'react-intersection-observer'
import { Transition } from 'react-transition-group'

export interface Slide {
  city: string,
  country: string,
  year: string,
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
