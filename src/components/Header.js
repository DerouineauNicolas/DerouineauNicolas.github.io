import React from 'react';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import './Header.css';

function LanguageSelector({ onLanguageChange }) {
   const handleLanguageSelect = (e) => {
      const selectedLocale = e.target.value;
      onLanguageChange(selectedLocale);
   };

   const currentLanguage = (i18n.language && i18n.language.startsWith('fr')) ? 'fr' : 'en';

   return (
      <select className="input-element" value={currentLanguage} onChange={handleLanguageSelect} aria-label="Select language">
         <option className="input-element-item" value="fr">🇫🇷 FR</option>
         <option className="input-element-item" value="en">🇬🇧 EN</option>
      </select>
   );
}

export default function Header({ resumeData }) {
   const { t } = useTranslation("common");

   const handleLanguageChange = (selectedLocale) => {
      i18n.changeLanguage(selectedLocale);
   };

   return (
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#close" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">{t('Home')}</a></li>
               <li><a className="smoothscroll" href="#about">{t('About')}</a></li>
               <li><a className="smoothscroll" href="#skills">{t('Skills')}</a></li>
               <li><a className="smoothscroll" href="#projects">{t('Projects')}</a></li>
               <li><a className="smoothscroll" href="#streaming">{t('StreamingLab')}</a></li>
               <li><a className="smoothscroll" href="#contact">{t('Contact')}</a></li>
               <li><LanguageSelector onLanguageChange={handleLanguageChange} /></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <div className="hero-status-container">
                  <span className="status-pill">
                     <span className="status-indicator"></span>
                     {t('status')}
                  </span>
               </div>

               <h1 className="hero-title">{t('name')}</h1>
               <h2 className="hero-role">{t('role')}</h2>
               <p className="hero-tagline">{t('tagline')}</p>
               <p className="hero-description">{t('description')}</p>

               <div className="hero-cta-group">
                  <a href="#projects" className="btn btn-primary smoothscroll">
                     <i className="fa fa-code"></i> {t('ctaProjects')}
                  </a>
                  <a href="#contact" className="btn btn-secondary smoothscroll">
                     <i className="fa fa-paper-plane"></i> {t('ctaContact')}
                  </a>
               </div>

               <ul className="hero-social-list">
                  {resumeData && resumeData.socialLinks && resumeData.socialLinks.map((item, idx) => (
                     <li key={idx}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.name} aria-label={item.name}>
                           <i className={item.className}></i>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
      </header>
   );
}
