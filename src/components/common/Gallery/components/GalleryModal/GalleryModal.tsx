import './GalleryModal.scss'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


export default forwardRef(
  function GalleryModal(_props: any, ref: any) {
    const [index, setIndex] = useState(-1);
    const container = useRef<any>(null)
    const grid = useRef<any>(null)

    const open = () => {
      container.current.classList.add('gallery-modal-container-opened')
    }

    const close = () => {
      container.current && container.current.classList.remove('gallery-modal-container-opened')
    }

    useImperativeHandle(ref, () => {
      return {
        open,
        close
      }
    })

    const onInit = () => {
      console.log('lightGallery has been initialized');
    };

    return (
      <div className="gallery-modal-container" ref={container}>
        <FontAwesomeIcon icon={faXmark}
          className='gallery-modal-exit text-white'
          size="3x"
          onClick={close}
        />
        <div className='gallery-modal-grid' ref={grid}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
            <a href={img}>
              <img alt="img1" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img} />
            </a>
            <a href={img}>
              <img alt="img2" style={{width: '300px', height: '300px', objectFit: 'cover'}} src={img2} />
            </a>
          </LightGallery>
          </div>
        </div>
    );
  })
