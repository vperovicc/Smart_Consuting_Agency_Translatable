import React from 'react'
import '../styles/Hero.css'
import {Link as ScrollLink} from 'react-scroll'
import {useTranslation} from 'react-i18next'

const Hero = () => {
  const{t}=useTranslation();
  return (
    <div  id='home' className='background_hero'>
        <div className='content_hero'>
            <p className='title_hero'>{t('her_1')}<span className='span_hero'>{t('her_2')}</span>{t('her_3')}<span className='span_hero'>{t('her_4')}</span>{t('her_5')}<span className='span_hero'>{t('her_6')}</span></p>
            <p className='subtext_hero'>{t('her_txt')}</p>
            <div className='button_hero'>
            <ScrollLink to='calendly' smooth={true} duration={1000}><p>{t('nav_button')}</p></ScrollLink>
            </div>
        </div>

    </div>
  )
}

export default Hero