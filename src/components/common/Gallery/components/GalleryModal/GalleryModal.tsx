import "./GalleryModal.scss";
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { slides } from "../../slides";
import { AppContext } from "@/components/App";

interface GalleryModalProps {
  onImageClick: (index: number) => void
}

export default forwardRef(function GalleryModal({onImageClick}: GalleryModalProps, ref: any) {
  const { canScroll } = useContext(AppContext);
  const container = useRef<any>(null);
  const grid = useRef<any>(null);

  const open = () => {
    container.current.classList.add("gallery-modal-container-opened");
    canScroll.current = false;
  };

  const close = () => {
    container.current &&
      container.current.classList.remove("gallery-modal-container-opened");
    canScroll.current = true;
  };

  useImperativeHandle(ref, () => {
    return {
      open,
      close,
    };
  });

  const showLocation = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    type: "hidden" | "visible"
  ) => {
    (event.currentTarget.children[0] as any).style.visibility = type;
  };

  return (
    <div className="gallery-modal-container" ref={container}>
      <FontAwesomeIcon
        icon={faXmark}
        className="gallery-modal-exit text-white"
        size="3x"
        onClick={close}
      />
      <div className="gallery-modal-grid" ref={grid}>
        {slides.map((slide, index) => (
          <div
            className="gallery-modal-img-container"
            onMouseLeave={(ev) => showLocation(ev, "hidden")}
            onMouseEnter={(ev) => showLocation(ev, 'visible')}
            onClick={(ev) => {onImageClick(index); close(); showLocation(ev, 'hidden')}}
          >
            <div className="gallery-modal-img-hover">
              <div className="gallery-modal-img-hover-location text-pptelegraph">{slide.city.toUpperCase()}</div>
            </div>
            <img src={slide.imagesUrls[0]} className="gallery-modal-img" />
          </div>
        ))}
      </div>
    </div>
  );
});
