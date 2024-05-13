import './GalleryModal.scss'
import img from '@/assets/img/test.jpg'
import img2 from '@/assets/img/test2.jpg'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from './images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const images = [
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img2,
    height: 1920,
    width: 1080
  },
  {
    src: img,
    height: 640,
    width: 320
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
  {
    src: img,
    height: 200,
    width: 200
  },
]

export default forwardRef(
  function GalleryModal(props: any, ref: any) {
    const [index, setIndex] = useState(-1);
    const container: any = useRef(null)
    const grid: any = useRef(null)

    const open = () => {
      console.log('open')
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

    return (
      <div className="gallery-modal-container" ref={container}>
        <FontAwesomeIcon icon={faXmark}
          className='gallery-modal-exit text-white'
          size="3x"
          onClick={close}
        />
        <div className='gallery-modal-grid' ref={grid}>
          <PhotoAlbum photos={photos} layout="columns" targetRowHeight={250} onClick={({ index }) => setIndex(index)} />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails]}
          />
        </div>
      </div>
    );
  })
