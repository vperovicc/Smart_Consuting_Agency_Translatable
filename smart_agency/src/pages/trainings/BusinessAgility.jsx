import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'


const BusinessAgility = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
      <div className='content_blogsStyle'>
        <h1>{t('training1_header1')}</h1>
        <h3>{t('training1_subheader1')}</h3>
        <p>{t('training1_text1')}</p>
        <p>{t('training1_text2')}</p>
        <p>{t('training1_text3')}</p>
        <h3>{t('training1_subheader2')}</h3>
        <p>{t('training1_text4')}</p>
        <p>{t('training1_text5')}</p>
        <img  src={Learn}/>
        <h1>{t('training1_header2')}</h1>
        <h3>{t('training1_subheader3')}</h3>
        <p>{t('training1_text6')}</p>
        <h3>{t('training1_subheader4')}</h3>
        <p>{t('training1_text7')}</p>
        <h3>{t('training1_subheader5')}</h3>
        <p>{t('training1_text8')}</p>
        <h3>{t('training1_subheader6')}</h3>
        <p>{t('training1_text9')}</p>
        <h3>{t('training1_subheader7')}</h3>
        <p>{t('training1_text10')}</p>
        <h3>{t('training1_subheader8')}</h3>
        <p>{t('training1_text11')}</p>
        <p>{t('training1_text12')}<a target='blank' href='https://agilist-game.com/'>{t('training1_link1')}</a></p>
        <p>{t('training1_text13')}<strong>{t('training1_email1')}</strong></p>
      </div>
      <Footer/>
    </div>
  )
}

export default BusinessAgility