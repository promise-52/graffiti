import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './main.scss'
import './scss/index.scss'
import 'swiper/css';
import { i18nInit } from './components/common/i18n/i18n.ts'

i18nInit();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense>
    <App />
  </React.Suspense>,
)
