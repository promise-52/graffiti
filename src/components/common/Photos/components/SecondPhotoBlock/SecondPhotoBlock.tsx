import { ImageCard } from '@/components/common/Manifest/components/ImageCard'
import './SecondPhotoBlock.scss'
import src from '@/assets/img/image-card-placeholder.png';
import i18next from 'i18next';

export function SecondPhotoBlock() {
  return (
    <div className="second-photoblock-container">
      <div className="second-photoblock-container-line">
        <ImageCard n={3} album={[src, src, src]} caption={i18next.t('moments.second.1')} />
        <ImageCard n={4} album={[src]} caption={i18next.t('moments.second.2')} />
      </div>
      <ImageCard n={5} album={[src, src, src]} caption={i18next.t('moments.second.3')} />
    </div>
  )
}