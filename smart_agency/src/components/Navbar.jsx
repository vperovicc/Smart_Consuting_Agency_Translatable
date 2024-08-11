import React, { useState } from 'react';
import Logo from '../assets/logoNew.jpg';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link as ScrollLink} from 'react-scroll'
import { Link } from 'react-router-dom';
import LogoAgilist from '../assets/logoBtnNavbar.jpg'
import {useTranslation} from 'react-i18next'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const{t}=useTranslation();

  return (
    <div className='container_navbar'>
      <Link to='/' className='logo_navbar' ><img src={Logo}  alt="Logo" /></Link>
      <div className={`nav_navbar ${isOpen ? 'open' : ''}`}>
        <ScrollLink to='home' smooth={true} duration={1000}><Link to='/' className='link_switch'><p>{t('nav_home')}</p></Link></ScrollLink>
        <ScrollLink to='about' smooth={true} duration={1000}><Link to='/' className='link_switch'><p>{t('nav_about')}</p></Link></ScrollLink>
        <ScrollLink to='services' smooth={true} duration={1000}><Link to='/' className='link_switch'><p>{t('nav_services')}</p></Link></ScrollLink>
        <ScrollLink to='trainings' smooth={true} duration={1000}><Link to='/' className='link_switch'><p>{t('nav_trainings')}</p></Link></ScrollLink>
        <ScrollLink to='blogs' smooth={true} duration={1000}><Link to='/' className='link_switch'><p>{t('nav_blogs')}</p></Link></ScrollLink>
        <a href='https://agilist-game.com' className='link_navbar' target='blank' ><img src={LogoAgilist} /></a>
      </div>
      <div className='button_navbar'>
      <ScrollLink to='calendly' smooth={true} duration={1000}><p>{t('nav_button')}</p></ScrollLink></div>
      <div className='burger_icon' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Navbar;
