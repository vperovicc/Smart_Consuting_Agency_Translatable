import React, { useState } from 'react'
import '../styles/Service.css'

import {useTranslation} from 'react-i18next'

const Service = ({ number, title, text, picture }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  const{t}=useTranslation();

  return (
    <div className='bg_services'>
    <div className='content_service'>
      <div className='all_service'>
        <div className='start_service'>
          <p>{number}</p>
          <h>{title}</h>
        </div>

        <div className='button_service' onClick={toggleShowMore}>
          <p>{showMore ? t('ser_button_close') : t('ser_button_open')}</p>
        </div>
      </div>
      <div className={`dropdown_service ${showMore ? 'open' : ''}`}>
        <div className='dropdown_text'>
          <p dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
        </div>
        <div className='dropdown_picture'>
          <img src={picture} alt='Service' />
        </div>
      </div>
      <div className='line_service' />
    </div>
    </div>
  )
}

export default Service
