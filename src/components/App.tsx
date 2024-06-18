import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "@/components/common/Gallery/Gallery";
import "./App.scss";
import Form from "./common/Form/Form";
import { Main } from "./common/Main/Main";
import { useEffect, useRef, useState } from "react";
import { Contacts } from "./common/Contacts/Contacts";
import { NavBar } from "./common/Header/Header";
import i18next from "i18next";
import { Manifest } from "./common/Manifest/Manifest";
import { smoothScrollTo, tabs } from "@/utils/smoothScrollTo";
import { createContext } from "react";
import Photos from "./common/Photos/Photos";

export const AppContext = createContext<any>(null);
function App() {
  // const [pageIndex, setPageIndex] = useState(0)
  const pageIndex = useRef<number>(0);
  const canScroll = useRef<boolean>(true);
  const isAnimating = useRef(false);

  const handleScroll = async (e: WheelEvent) => {
    console.log(canScroll.current);
    if (!canScroll.current) {
      e.preventDefault();
      return;
    }
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = pageIndex.current + direction;

    e.preventDefault();
    if (tabs[nextIndex] && !isAnimating.current) {
      isAnimating.current = true;
      pageIndex.current = nextIndex;
      const element = document.getElementById(tabs[nextIndex]);

      if (element) {
        await smoothScrollTo(element); // ждем завершения анимации
        isAnimating.current = false;
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const [, setLang] = useState<"ru" | "en">("ru");

  const updLang = (newLang: "ru" | "en") => {
    setLang(newLang);
    i18next.changeLanguage(newLang);
  };

  return (
    <>
      <AppContext.Provider value={{ pageIndex, canScroll }}>
        {pageIndex.current}
        <div id="main">
          <NavBar lang={i18next.language} changeLanguage={updLang} />
          <Main />
        </div>
        <div className="app-block-container" id="manifest">
          <Manifest />
        </div>
        <div className="app-block-container" id="gallery">
          <Gallery />
        </div>
        <div className="app-block-container" id="photos">
          <Photos />
        </div>
        <div className="app-block-container" id="form">
          <Form />
        </div>
        <div className="app-block-container contacts" id="contacts">
          <Contacts />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
