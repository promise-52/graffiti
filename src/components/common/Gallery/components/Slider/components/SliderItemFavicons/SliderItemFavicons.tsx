import { Slide } from "@/components/common/Gallery/Gallery";

export default function ({ isActive, showIndex, slide, currentImageIndex, onClick, className }: {
  isActive: boolean,
  showIndex: boolean,
  slide: Slide,
  currentImageIndex: number
  className?: string
  onClick: (index: number) => void
}) {


  return <>
    {isActive && showIndex &&
      <div className={`slider-item-favicons-container text-white ${className}`}>
        {
          slide.imagesUrls.map((src, index) => (
            <div className={`slider-item-favicons-item ${index === currentImageIndex ? 'slider-item-favicons-item-active' : ''}`} key={index} onClick={() => onClick(index)}>
              <img src={src} className='slider-item-favicons-img' />
            </div>
          ))
        }
      </div>
    }
  </>
}