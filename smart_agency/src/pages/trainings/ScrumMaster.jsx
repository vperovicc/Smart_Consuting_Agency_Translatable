import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'

const ScrumMaster = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>{t('training3_header1')}</h1>
          <h3>{t('training3_subheader1')}</h3>
          <p>{t('training3_text1')}</p>
          <p>{t('training3_text2')}</p>
          <p>{t('training3_text3')}</p>
          <h3>{t('training3_subheader2')}</h3>
          <ul>
            <li>{t('training3_text4')}</li>
            <li>{t('training3_text5')}</li>
            <li>{t('training3_text6')}</li>
          </ul>
          <h3>{t('training3_subheader3')}</h3>
          <ul>
            <li>{t('training3_text7')}</li>
            <li>{t('training3_text8')}</li>
            <li>{t('training3_text9')}</li>
            <li>{t('training3_text10')}</li>
            <li>{t('training3_text11')}</li>
          </ul>
          <img src={Learn} />
          <h3>{t('training3_subheader4')}</h3>
          <ul>
            <li>{t('training3_text12')}</li>
            <li>{t('training3_text13')}</li>
            <li>{t('training3_text14')}</li>
            <li>{t('training3_text15')}</li>
            <li>{t('training3_text16')}</li>
            <li>{t('training3_text17')}</li>
          </ul>
          <h3>{t('training3_subheader5')}</h3>
          <ul>
            <li>{t('training3_text18')}</li>
            <li>{t('training3_text19')}</li>
            <li>{t('training3_text20')}</li>
            <li>{t('training3_text21')}</li>
            <li>{t('training3_text22')}</li>
            <li>{t('training3_text23')}</li>
            <li>{t('training3_text24')}</li>
            <li>{t('training3_text25')}</li>
            <li>{t('training3_text26')}</li>
          </ul>
          <p>{t('training3_text27')}<strong>{t('training3_link1')}</strong></p>
        </div>
      <Footer/>
    </div>
  )
}

export default ScrumMaster
