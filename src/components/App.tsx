import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from '@/components/common/Gallery/Gallery';
import './App.scss'
import Form from "./common/Form/Form";

function App() {
  return (
    <>
      <div className="app-block-container">
        <Gallery />
      </div>
      <div className="app-block-container">
        <Form />
      </div>
    </>
  )
}

export default App
