import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog6 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>These companies are changing the world, and they use AGILE methods</h1>
            <h3 className='dateBlog'>21. Feb 2023.</h3>
            <p>The Agile Methodologies have shown to be the best approach for developing team work and increasing productivity and efficiency in your company. Here are some of the biggest companies in the world which have successfully implemented the Agile Methodology, and whose footsteps we should carefully follow:</p>
            <h3>1.     Sony</h3>
            <p>The Agile methodology applied at Sony supports the Scrum approach in project management. In project management and software engineering, they sought an easily understandable and applicable approach, which would help improve teamwork, as well as increase productivity and efficiency. With the help of consulting companies, they were introduced to the values of Scrum, based on which they were able to create a clearly defined style of project management and development process.</p>
            <h3>2.     LEGO</h3>
            <p>LEGO started its implementation of the Agile methodology with their teams - they had 20 teams within the whole company, 5 of which were Scrum teams. After realizing how many benefits there were, the rest of the teams gradually transformed to align with the Agile methodologies. These teams would meet every 8 weeks for a full-day planning session. At these meetings, they would present their accomplishments and plan future work.</p>
            <h3>3.     Yahoo!</h3>
            <p>Yahoo! aimed to reduce the amount of time needed for software development while maintaining the actual size of its teams, and this was achieved through the Agile methodology and Scrum. They planned and tested various products and services, modifying and improving them to reach their ideal versions.</p>
            <h3>4.     CISCO</h3>
            <p>CISCO was an organization primarily built according to the Waterfall methodology, which resulted in delays and missed deadlines, problems with product quality, and there was a lot of employee overtime, after which they switched to SAFe - the scaled agile framework. This enabled them to fix those problems. Teams would have 15-minute daily meetings and each team knew what projects other teams were working on, which increased the transparency of work and the responsibility of team members to deliver prime results on time.</p>
            <h3>5.     Google</h3>
            <p>Google has a number of sectors that use Agile methodologies such as Scrum, where they can test their services and products. Each team can choose how they want to work in order to achieve the best possible results in solving given problems. One of the projects in which the Scrum methodology was used was the development of Google Adwords.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog6