import { useContext, useState } from "react";
import './Header.scss';
import atom from '@/assets/img/atom.png'
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import { smoothScrollTo, tabs } from "@/utils/smoothScrollTo";
import { AppContext } from "@/components/App";

interface INavBarProps {
  changeLanguage: (lang: 'en' | 'ru') => void,
  lang: string,
}

export function NavBar({ changeLanguage, lang }: INavBarProps) {
  const { pageIndex } = useContext(AppContext)
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <img src={atom} className="navbar-atom" />
      <div style={{ display: 'flex' }}>
        <FontAwesomeIcon
          icon={!isVisible ? faBars : faChevronLeft}
          className='open-icon'
          onClick={() => setVisible(!isVisible)}
        />
      </div>

      <div className={`text-pptelegraph navbar ${isVisible ? 'visible' : ''}`}>
        <div className="navbar-links">
          {
            tabs.map((tab) => 
              <a href={`#${tab}`} onClick={() => {
                smoothScrollTo(window.document.getElementById(tab) as HTMLElement)
                pageIndex.current = tabs.findIndex((d) => d === tab)
              }}>
                { i18next.t(tab) }
              </a>
            )
          }
        </div>
        <div className="navbar-lang">
          <a className={ lang === 'en' ? 'active' : '' } onClick={() => changeLanguage('en')} href="#">
            ENG
          </a>
          <a className={ lang === 'ru' ? 'active' : '' } onClick={() => changeLanguage('ru')} href="#">
            RU
          </a>
        </div>
      </div>
    </>
  )
}