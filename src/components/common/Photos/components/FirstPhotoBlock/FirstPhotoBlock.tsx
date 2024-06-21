import i18next from "i18next";
import './FirstPhotoBlock.scss'
import { ImageCard } from "@/components/common/Manifest/components/ImageCard";
import src from '@/assets/img/image-card-placeholder.png';

export function FirstPhotoBlock() {
  return (
    <div className="first-photoblock-container">
      <div className="first-photoblock-container-header">
        {
          [1, 2, 3].map(i =>
            <>
              <span className='text-pptelegraph form-header text-underline'>
                { i18next.t(`moments.header.${i}`) }
              </span>
              <br/>
            </>
          )
        }
      </div>
      <ImageCard n={1} album={[src, src]} caption={i18next.t('moments.first.1')} />
      <ImageCard n={2} album={[src, src, src, src]} caption={i18next.t('moments.first.2')} />
    </div>
  )
}