import './GalleryModal.scss'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'

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

    useEffect(() => {
      const handleScroll = () => {
        console.log('a')
        console.log(container.current!.scrollTop, container.current!.scrollTop)
        container.current!.scrollHeight = grid.current!.scrollHeight
        container.current!.scrollTop = grid.current!.scrollTop
      };
      console.dir(container.current)
      console.dir(grid.current)
      container.current.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

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
        <div className='' ref={grid}>
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="img/img1.jpg">
              <img alt="img1" src={img} />
            </a>
            <a href="img/img2.jpg">
              <img alt="img2" src={img2} />
            </a>
            ...
          </LightGallery>
        </div>
      </div>
    );
  })
