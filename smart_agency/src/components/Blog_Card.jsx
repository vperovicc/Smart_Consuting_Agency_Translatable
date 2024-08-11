import React from 'react'
import '../styles/Blog_Card.css'
import {Link} from 'react-router-dom'

const Blog_Card = ({title,image,text,link,date}) => {
  return (
    <div className='content_blogcard'>
        <div className='all_blogcard'>
        <h>{title}</h>
        <img src={image}/>
        <p className='text_blogcard'>{text}</p>        
        </div>
        <Link to={link} className='linker'><div className='button_blogcard'><p>Read More</p></div></Link>
    </div>
  )
}

export default Blog_Card