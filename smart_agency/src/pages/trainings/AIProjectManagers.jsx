import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'

const AIProjectManagers = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
        <h1>{t('training5_header1')}</h1>
        <h3>{t('training5_subheader1')}</h3>
        <p>{t('training5_text1')}</p>
        <p>{t('training5_text2')}</p>
        <p>{t('training5_text3')}</p>
        <h3>{t('training5_subheader2')}</h3>
        <ul>
          <li>{t('training5_text4')}</li>
          <li>{t('training5_text5')}</li>
          <li>{t('training5_text6')}</li>
          <li>{t('training5_text7')}</li>
          <li>{t('training5_text8')}</li>
        </ul>
        <img  src={Learn}/>
        <h3>{t('training5_subheader3')}</h3>
        <ul>
          <li>{t('training5_text9')}</li>
          <li>{t('training5_text10')}</li>
          <li>{t('training5_text11')}</li>
          <li>{t('training5_text12')}</li>
          <li>{t('training5_text13')}</li>
          <li>{t('training5_text14')}</li>
          <li>{t('training5_text15')}</li>
          <li>{t('training5_text16')}</li>
          <li>{t('training5_text17')}</li>
          <li>{t('training5_text18')}</li>
          <li>{t('training5_text19')}</li>
          <li>{t('training5_text20')}</li>
        </ul>
        <p>{t('training5_text21')}</p>
        <p>{t('training5_text22')}<strong>{t('training5_link1')}</strong></p>
        </div>
      <Footer/>
    </div>
  )
}

export default AIProjectManagers