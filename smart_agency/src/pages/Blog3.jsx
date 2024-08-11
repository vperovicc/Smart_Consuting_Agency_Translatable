import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Vid from '../assets/blog4/video1.mp4'
import SpecialNavbar from '../components/SpecialNavbar'
import '../styles/BlogsStyle.css'

const Blog3 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>Time for some answers: We asked our certified coach Bojan Smuđa some questions</h1>
          <h3 className='dateBlog'>10. Mar 2023.</h3>
          <p>Our certified coach Bojan Smuđa answered the most frequently asked questions about Scrum in a short interview.<br/><br/>

Is Scrum Master training fun, how long does it take, how long does it take someone to become a Scrum Master, are just some of the questions that Bojan answered. He also explained what Training from the Back of the Room is and why he likes to use it in his training.</p>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Blog3