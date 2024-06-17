import i18next from 'i18next';
import './Manifest.scss';

import c1 from '@/assets/img/manifest/Rectangle 197.jpg';
import c2 from '@/assets/img/manifest/Rectangle 198.jpg';
import c3 from '@/assets/img/manifest/Rectangle 200.jpg';
import c4 from '@/assets/img/manifest/Rectangle 201.jpg';
import c5 from '@/assets/img/manifest/Rectangle 202.jpg';
import atom from '@/assets/img/big-atom.png'
import { ImageCard } from './components/ImageCard';

export function Manifest() {
  const cards = [c1, c2, c3, c4, c5];
  
  return (
    <div className='manifest-container'>
      <div className="gallery-title text-heathergreen">
        { i18next.t('manifestBlock.we') }
      </div>
      <img src={atom} alt='' className='manifest-container-atom' />
      <div className='manifest-container-left'>
        {
          cards.slice(0, 2).map((src, i) => 
            <ImageCard src={src} n={i + 1} />
          )
        }
      </div>
      <div className='manifest-container-right'>
        <div className='manifest-container-right-inner'>
          {
            cards.slice(2, 3).map((src, i) => 
              <ImageCard src={src} n={i + 3} caption='¡Hola!' />
            )
          }
          {
            cards.slice(3, 4).map((src, i) => 
              <ImageCard src={src} n={i + 4} />
            )
          }
          <div className='manifest-container-right-text text-pptelegraph'>
            <p>
              { i18next.t('manifestBlock.about') }
            </p>
          </div>
          {
            cards.slice(4).map((src, i) => 
              <ImageCard src={src} n={i + 5} />
            )
          }
        </div>
      </div>
    </div>
  )
}