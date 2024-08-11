import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Vid from '../assets/blog3/video.mp4'
import '../styles/BlogsStyle.css'
import SpecialNavbar from '../components/SpecialNavbar'
const Blog3 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
        <h1>How long does it take someone to become a Scrum Master? Our coach Francesco knows</h1>
        <h3 className='dateBlog'>16. Mar 2023.</h3>
        <p>Our certified coach Francesco Bianchi answered the most frequently asked questions about Scrum in a short interview.</p>
        <p>Is Scrum Master training fun, how long does it take, how long does it take someone to become a Scrum Master, are just some of the questions that Francesco answered. He also explained what Training from the Back of the Room is and why he likes to use it in his training.</p>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Blog3