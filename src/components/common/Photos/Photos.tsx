import { useEffect, useRef } from 'react'

import i18next from 'i18next'
import fbRu from '@/assets/img/flashbacks-ru.png'
import fbEn from '@/assets/img/flashbacks-en.png'
import './Photos.scss'
import { smoothScrollTo } from '@/utils/smoothScrollTo'
import { FirstPhotoBlock } from './components/FirstPhotoBlock/FirstPhotoBlock'
import { SecondPhotoBlock } from './components/SecondPhotoBlock/SecondPhotoBlock'

export default function Photos() {
  const container = useRef<HTMLDivElement>(null);
  const isFirst = useRef(true);
  const handleScroll = async (e: WheelEvent) => {
    console.log
    e.preventDefault();
    let elemTo = null;
    if (e.deltaY > 0 && isFirst.current) {
      isFirst.current = false;
      elemTo = document.getElementById('photos-container-second');
      e.stopPropagation();
    } else if (e.deltaY < 0 && !isFirst.current) {
      isFirst.current = true;
      elemTo = document.getElementById('photos-container-first');
      e.stopPropagation();
    }
    if (elemTo && container.current) {
      await smoothScrollTo(elemTo, container.current);
    }
  };
  useEffect(() => {
    smoothScrollTo(document.getElementById('photos-container-first')!, container.current!).then(() => console.log('ss'));
    container.current?.addEventListener("wheel", (e) => handleScroll(e), { passive: false });
    return () => {
      container.current?.removeEventListener("wheel", (e) => handleScroll(e));
    };
  }, []);
  return (
    <div className='photos-container' ref={container}>
      <div className='photos-container-cover'>
        <img src={i18next.language === 'en' ? fbEn : fbRu} />
      </div>
      <div className='photos-container-first' id="photos-container-first">
        <FirstPhotoBlock />
      </div>
      <div className='photos-container-second' id="photos-container-second">
        <SecondPhotoBlock />
      </div>
    </div>
  )
}