import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'

const AtlassianTools = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
      <div className='content_blogsStyle'>
        <h1>{t('training6_header1')}</h1>
        <h3>{t('training6_subheader1')}</h3>
        <p>{t('training6_text1')}</p>
        <h3>{t('training6_subheader2')}</h3>
        <p>{t('training6_text2')}</p>
        <p>{t('training6_text3')}</p>
        <img  src={Learn}/>
        <h3>{t('training6_subheader3')}</h3>
        <ul>
          <li>{t('training6_text4')}</li>
          <li>{t('training6_text5')}</li>
          <li>{t('training6_text6')}</li>
          <li>{t('training6_text7')}</li>
          <li>{t('training6_text8')}</li>
          <li>{t('training6_text9')}</li>
        </ul>
        <p>{t('training6_text10')}</p>
        <p>{t('training6_text11')}</p>
        <p>{t('training6_text12')}<strong>{t('training6_link1')}</strong></p>
      </div>
      <Footer/>
    </div>
  )
}

export default AtlassianTools
