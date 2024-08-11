import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'

const ManagementAgile = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>{t('training2_header1')}</h1>
          <h3>{t('training2_subheader1')}</h3>
          <p>{t('training2_text1')}</p>
          <p>{t('training2_text2')}</p>
          <p>{t('training2_text3')}</p>
          <p>{t('training2_text4')}</p>
          <p>{t('training2_text5')}</p>
          <img src={Learn} />
          <h3>{t('training2_subheader2')}</h3>
          <ul>
            <li>{t('training2_text6')}</li>
            <li>{t('training2_text7')}</li>
            <li>{t('training2_text8')}</li>
            <li>{t('training2_text9')}</li>
            <li>{t('training2_text10')}</li>
            <li>{t('training2_text11')}</li>
            <li>{t('training2_text12')}</li>
            <li>{t('training2_text13')}</li>
            <li>{t('training2_text14')}</li>
            <li>{t('training2_text15')}</li>
            <li>{t('training2_text16')}</li>
            <li>{t('training2_text17')}</li>
            <li>{t('training2_text18')}</li>
            <li>{t('training2_text19')}</li>
          </ul>
          <h3>{t('training2_subheader3')}</h3>
          <ul>
            <li>{t('training2_text20')}</li>
            <li>{t('training2_text21')}</li>
            <li>{t('training2_text22')}</li>
            <li>{t('training2_text23')}</li>
            <li>{t('training2_text24')}</li>
          </ul>
          <p>{t('training2_text25')}<strong>{t('training2_link1')}</strong></p>
        </div>
      <Footer/>
    </div>
  )
}

export default ManagementAgile