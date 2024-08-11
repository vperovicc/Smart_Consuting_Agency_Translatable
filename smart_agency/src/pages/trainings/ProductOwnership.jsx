import React from 'react'
import '../../styles/training.css'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Learn from '../../assets/learn2.png'
import SpecialNavbar from '../../components/SpecialNavbar.jsx'
import {useTranslation} from 'react-i18next'

const ProductOwnership = () => {
  const{t}=useTranslation();
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>{t('training4_header1')}</h1>
          <h3>{t('training4_subheader1')}</h3>
          <p>{t('training4_text1')}</p>
          <p>{t('training4_text2')}</p>
          <img src={Learn} />
          <h3>{t('training4_subheader2')}</h3>
          <ul>
            <li>{t('training4_text3')}</li>
            <li>{t('training4_text4')}</li>
            <li>{t('training4_text5')}</li>
            <li>{t('training4_text6')}</li>
            <li>{t('training4_text7')}</li>
          </ul>
          <p>{t('training4_text8')}</p>
          <h3>{t('training4_subheader3')}</h3>
          <ul>
            <li>{t('training4_text9')}</li>
            <li>{t('training4_text10')}</li>
            <li>{t('training4_text11')}</li>
            <li>{t('training4_text12')}</li>
            <li>{t('training4_text13')}</li>
          </ul>

          <h3>{t('training4_subheader4')}</h3>
          <ul>
            <li>{t('training4_text14')}</li>
            <li>{t('training4_text15')}</li>
            <li>{t('training4_text16')}</li>
            <li>{t('training4_text17')}</li>
            <li>{t('training4_text18')}</li>
            <li>{t('training4_text19')}</li>
          </ul>
          <p>{t('training4_text20')}<strong>{t('training4_link1')}</strong></p>
        </div>
      <Footer/>
    </div>
  )
}

export default ProductOwnership