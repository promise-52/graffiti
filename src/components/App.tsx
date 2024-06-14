import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from '@/components/common/Gallery/Gallery';
import './App.scss';
import Form from "./common/Form/Form";
import { Main } from "./common/Main/Main";
import { useEffect, useRef, useState } from "react";
import { Contacts } from "./common/Contacts/Contacts";
import { NavBar } from "./common/Header/Header";
import i18next from "i18next";

function App() {
  const pageIndex = useRef<number>(0);
  const breakpointsIds = ['main', 'gallery', 'form'];
  const isAnimating = useRef(false);

  const smoothScrollTo = (target: HTMLElement) => {
    return new Promise<void>((resolve) => {
      const startY = window.scrollY;
      const targetY = target.getBoundingClientRect().top + window.scrollY - 15;
      const distance = targetY - startY;
      const duration = 200; // длительность анимации в миллисекундах
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startY, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve(); // завершаем промис после завершения анимации
        }
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = async (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = pageIndex.current + direction;

      e.preventDefault();
      if (breakpointsIds[nextIndex] && !isAnimating.current) {
        isAnimating.current = true;
        pageIndex.current = nextIndex;
        const element = document.getElementById(breakpointsIds[nextIndex]);

        if (element) {
          await smoothScrollTo(element); // ждем завершения анимации
          isAnimating.current = false;
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const [, setLang] = useState<'ru' | 'en'>('ru');

  const updLang = (newLang: 'ru' | 'en') => {
    setLang(newLang)
    i18next.changeLanguage(newLang)
  }

  return (
    <>
      <div id="main">
        <NavBar lang={i18next.language} changeLanguage={updLang} />
        <Main />
      </div>
      <div className="app-block-container" id="gallery">
        <Gallery />
      </div>
      <div className="app-block-container" id="form">
        <Form />
      </div>
      <div className="app-block-container contacts" id="contacts">
        <Contacts />
      </div>
    </>
  );
}

export default App;
