import React from 'react'
import '../styles/SpecialNavbar.css'
import LogoSpecial from '../assets/logoNew.jpg'
import {Link} from 'react-router-dom'

const SpecialNavbar = () => {
  return (
    <div className='specialNav_container'>
        <Link to='/' className='logoSpecial'><img src={LogoSpecial}/></Link>
    </div>
  )
}

export default SpecialNavbar