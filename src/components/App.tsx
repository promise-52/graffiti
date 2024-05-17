import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from '@/components/common/Gallery/Gallery';
import './App.scss'

function App() {
  const items = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="app-block-container">
        <Gallery />
      </div>
      
    </>
  )
}

export default App
