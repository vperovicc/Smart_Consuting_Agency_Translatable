import React from 'react'
import '../styles/Footer.css'
import Instagram from '../assets/instagram.png'
import TikTok from '../assets/tiktok.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next'

const Footer = () => {
    const{t}=useTranslation();
    return(
    <div className='content_footer'>
        <div className='part1_footer'>
            <Link to='/home'><img src={Logo} /></Link>
            <div className='info_footer'>
                <div className='letstalk_footer'>
                    <h>{t('fot_header1')}</h>
                    <p>nikola@smartconsulting-agency.com</p>
                    <p>milica.vojtek@smartconsulting-agency.com</p>
                    <p>contact@smartconsulting-agency.com</p>
                </div>

                <div className='terms_footer'>
                    <h>{t('fot_header2')}</h>
                    <Link to='/privacy'><p>{t('fot_text1')}</p></Link>
                    <Link to='/terms'><p>{t('fot_text2')}</p></Link>
                    <Link to='/return'><p>{t('fot_text3')}</p></Link>
                    <Link to='/delivery'><p>{t('fot_text4')}</p></Link>
                </div>
            </div>
        </div>

        <div className='line_footer' />

        <div className='part2_footer'>
            <div className='social_footer'>
                <a className='sociala' href='https://www.instagram.com/smart_consulting_agency/' target='blank'><img src={Instagram} /></a>
                <a className='sociala' href='https://www.linkedin.com/company/smart-consulting-agency' target='blank'><img src={LinkedIn} /></a>
                <a className='sociala' href='https://www.tiktok.com/@smartconsultingagency' target='blank'><img src={TikTok} /></a>
            </div>

            <p>©2024 by Smart Consulting Agency.</p>
        </div>
    </div>
    )
}

export default Footer