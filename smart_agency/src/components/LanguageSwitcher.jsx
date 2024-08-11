// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='content_buttons'>
      <button className='button_buttons' onClick={() => changeLanguage('en')}>ENG</button>
      <button className='button_buttons' onClick={() => changeLanguage('sr')}>SRB</button>
    </div>
  );
};

export default LanguageSwitcher;
