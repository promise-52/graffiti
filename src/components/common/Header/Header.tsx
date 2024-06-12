import { useState } from "react";
import './Header.scss';

export function NavBar() {
  const tabs = [
    {
      label: 'МАНИФЕСТ',
      yakor: 'manifest',
    },
    {
      label: 'ПОРТФОЛИО',
      yakor: 'gallery',
    },
    {
      label: 'ФОРМА',
      yakor: 'form',
    },
    {
      label: 'КОНТАКТЫ',
      yakor: 'contacts',
    },
  ];

  const [lang, setLang] = useState<'ru' | 'eng'>('ru');
  return (
    <div className=" text-pptelegraph navbar">
      <div className="navbar-links">
        {
          tabs.map((tab) => 
            <a href={`#${tab.yakor}`}>
              { tab.label }
            </a>
          )
        }
      </div>
      <div className="navbar-lang">
        <a className={ lang === 'eng' ? 'active' : '' } onClick={() => setLang('eng')} href="#">
          ENG
        </a>
        <a className={ lang === 'ru' ? 'active' : '' } onClick={() => setLang('ru')} href="#">
          RU
        </a>
      </div>
    </div>
  )
}