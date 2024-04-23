import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './main.scss'
import './scss/index.scss'
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense>
    <App />
  </React.Suspense>,
)
