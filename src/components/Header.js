import React from 'react';
import i18n from 'i18next';

import { useTranslation } from "react-i18next";
import './Header.css';

function LanguageSelector({ onLanguageChange }) {
   const handleLanguageSelect = (e) => {
      const selectedLocale = e.target.value;
      onLanguageChange(selectedLocale);
   };

   return (
      <select className="input-element" value={i18n.language} onChange={handleLanguageSelect}>
         <option className="input-element-item" value="fr">🇫🇷</option>
         <option className="input-element-item" value="en">🇬🇧</option>
      </select>
   );
}


export default function Header() {

   const { t } = useTranslation("common");
   const handleLanguageChange = (selectedLocale) => {
      i18n.changeLanguage(selectedLocale);
   };

   return (
      <React.Fragment>

         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#close" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">{t('Home')}</a></li>
                  <li><a className="smoothscroll" href="#web">{t('WebProgTitle')}</a></li>
                  <li><a className="smoothscroll" href="#cprogramming">{t('CProgTitle')}</a></li>
                  <li><a className="smoothscroll" href="#streaming">{t('StreamingTitle')}</a></li>
                  <li><a className="smoothscroll" href="#blender">Blender/3D</a></li>
                  <li><LanguageSelector onLanguageChange={handleLanguageChange} /></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h3 className="responsive-headline"> {t('description')}</h3>
                  <hr />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#cprogramming"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      </React.Fragment>
   );

}