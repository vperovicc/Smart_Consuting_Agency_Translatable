import React from 'react'
import '../styles/Services.css'
import Service from './Service'
import Slika1 from '../assets/jiraSetup.png'
import Slika3 from '../assets/projectManagement.png'
import Slika2 from '../assets/agileCoaching.png'
import Slika4 from '../assets/mapping.png'
import {useTranslation} from 'react-i18next'

const Services = () => {
  const{t}=useTranslation();

  const serviceData = [
    {
      number: "01",
      title: t('ser1_title'),
      text: t('ser1_text'),
      picture: Slika1
    },
    {
      number: "02",
      title: t('ser2_title'),
      text: t('ser2_text'),
      picture: Slika2
    },
    {
      number: "03",
      title: t('ser3_title'),
      text: t('ser3_text'),
      picture: Slika3
    },
    {
      number: "04",
      title: t('ser4_title'),
      text: t('ser4_text'),
      picture: Slika4
    }
  ];

  return (
    <div id='services' className='content_services'>
        {serviceData.map((service, index) => (
        <Service
          key={index}
          number={service.number}
          title={service.title}
          text={service.text}
          picture={service.picture}
        />
      ))}
    </div>
  )
}

export default Services