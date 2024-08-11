import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Title from '../components/Title'
import About from '../components/About'
import Services from '../components/Services'
import Trainings from '../components/Trainings'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import TitleUnique from '../components/TitleUnique.jsx'
import {useTranslation} from 'react-i18next'
import '../styles/Home.css'

const Home = () => {
  const{t}=useTranslation();
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Title Title={t('title_main1')}/>
        <About/>
        <div className='services_title'>
          <TitleUnique Title={t('title_main2')} />
          <Services/>
        </div>
        <Title Title={t('title_main3')}/>
        <Trainings/>
        <div className='blogs_title'>
        <Title Title={t('title_main4')}/>
        <Blog/>
        </div>
        <Cta/>
        <Footer/>
    </div>
  )
}

export default Home