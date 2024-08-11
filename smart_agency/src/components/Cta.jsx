import React from 'react'
import '../styles/Cta.css'
import {InlineWidget} from 'react-calendly'
import {useTranslation} from 'react-i18next'

const Cta = () => {
  const{t}=useTranslation();
  return (
    <div id='calendly' className='all_cta'>
    <div className='content_cta'>
        <p className='text_cta'>{t('cta_text')}</p>
    </div>

    <InlineWidget url="https://calendly.com/nikola-y-bh/15min"/>
    <div className='separate_cta'/>
    <div className='fade_cta'/>
    </div>
  )
}

export default Cta