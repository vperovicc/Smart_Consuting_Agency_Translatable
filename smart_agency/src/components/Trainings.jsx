import React from 'react'
import '../styles/Trainings.css'
import Joystick from '../assets/joystick.svg'
import Clipboard from '../assets/clipboard.svg'
import Teacher from '../assets/teacher.svg'
import Box from '../assets/box.svg'
import Robot from '../assets/robot.svg'
import Tools from '../assets/tools.svg'
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next'

const Trainings = () => {
    const{t}=useTranslation();
  return (
    <div className='content_trainings' id='trainings'>
        
        <Link className='box_trainings' to='/businessagility'>
            <img src={Joystick}/>
            <p>{t('tra1_header')}</p>
        </Link>
        

        <Link className='box_trainings' to='/managementagile'>
        <img src={Clipboard}/>
            <p>{t('tra2_header')}</p>
        </Link>

        <Link className='box_trainings' to='/scrummaster'>
            <img src={Teacher}/>
            <p>{t('tra3_header')}</p>
        </Link>

        <Link className='box_trainings' to='/productownership'>
            <img src={Box}/>
            <p>{t('tra4_header')}</p>
        </Link>

        <Link className='box_trainings' to='/aiprojectmanagers'>
            <img src={Robot}/>
            <p>{t('tra5_header')}</p>
        </Link>

        <Link className='box_trainings' to='/atlassiantools'>
            <img src={Tools}/>
            <p>{t('tra6_header')}</p>
        </Link>
    </div>
  )
}

export default Trainings