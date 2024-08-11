import React from 'react'
import '../styles/About.css'
import {useTranslation} from 'react-i18next'


const About = () => {
    const{t}=useTranslation();
  return (
    <div id='about' className='content_about'>
        <div className='up_about'>
            <div className='left_up_about'>
                <h className='title_about'>{t('abt1_header')}</h>
                <p className='first_sub'>{t('abt1_text')}</p>
            </div>
        </div>

        <div className='down_about'>
            <div className='left_down_about'>
                <div className='first_left_about'>
                    <h className='title_about'>{t('abt2_header')}</h>
                    <p>{t('abt2_text')}</p>
                </div>
                <div className='second_left_about'>
                    <h className='title_about'>{t('abt3_header')}</h>
                    <p>{t('abt3_text')}</p>
                </div>
            </div>

            <div className='right_down_about'>
                <h className='title_about'>{t('abt4_header')}</h>
                <p>{t('abt4_text1')}</p>
                <p>{t('abt4_text2')}</p>
                <p>{t('abt4_text3')}</p>
                <p>{t('abt4_text4')}</p>
            </div>
        </div>
    </div>
  )
}

export default About