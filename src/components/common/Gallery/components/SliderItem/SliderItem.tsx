import './SliderItem.scss'

interface PropsSliderItem {
  style: React.CSSProperties,
  imgSrc: string
}

export default function SliderItem({style, imgSrc}: PropsSliderItem) {
  return <>
    <div className='slider-item' style={style}>
      <img src={imgSrc}></img>
    </div>
  </>
}