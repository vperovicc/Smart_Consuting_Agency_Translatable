import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog12/pic1.png'
import Pic2 from '../assets/blog12/pic2.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog12 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Scrum Master - Servant Leader and Coach</h1>
            <h3 className='dateBlog'>16. Feb 2020.</h3>
            <h3>Scrum master is a person responsible for ensuring the scrum team lives and follows agile values and principles. As a servant leader and coach, it could be said that Scrum Master is actually educating the team about the Scrum methodology. </h3>
            <img src={Pic1} />
            <p>In some organizations, #Scrummaster has been identified as a role that is outside of the #developmentteam (or scrum team). Thus, team members are seeing that person as someone who is actually bothering them and, in some situations, forcing to follow some processes that are written on paper. This represents a bad practice and not a good way for organization to implement and follow #agileprinciples and #scrum methodology. </p>
            <h3>"Scrum's roles, events, artifacts, and rules are immutable and although implementing only parts of Scrum is possible, the result is not Scrum."<a href='https://scrumguides.org/index.html' target='blank'> - The Scrum Guide</a> </h3>
            <img src={Pic2} />
            <p>If organization is aiming to implement and follow #scrum methodology, it should make sure that Scrum master role is adequately supported from the top management and most of all, that the scrum master is a part of the whole #scrumteam. On the other side, scrum master, as a servant leader and coach, should make sure that scrum processes are understandable, that understands and could explain to the team the reason(s) why those processes are in place and what benefits are introducing. </p>
            <p>Scrum master is a person who:<br/><br/>


is a multitasker,<br/><br/>
understands the work being done by the team, <br/><br/>
is motivating the team,<br/><br/>
is making sure that the teams are following the Scrum processes and <br/><br/>
is working together with the team to continuously improve them and the scrum process itself.<br/><br/>
Scrum does not provide example of processes so every organization will have to come up with its own processes. The only thing is that organization should make sure to use roles, events, artifacts and rules when designing scrum processes. </p>
<p>Although, the scrum master role is concerned about scrum processes, and not about the product itself that the team is (for example) building/working on, this position could be really challenging. There are several issues and challenges that scrum master is commonly faced with:<br/><br/>

Change resistance, either from individuals, the complete team or even departments.<br/><br/>
Role expectations, since the common case is that scrum master role is confused with project manager role. <br/><br/>
Urgent change requests, since in practice, Product Owner/Client/Stakeholder is often coming up with an urgent change request(s) or bug(s).<br/><br/>
Keeping everything Time-Boxed, since very often team members are starting discussions about technical issues and the meeting goes longer than the allotted time.<br/><br/>
Communication between distributed teams when teams are distributed geographically, there are always some  delays, network issues, cultural or regional issues, differences in time Zones and working hours. In these situations, it is very difficult to get all the team members connected and to collaborate/communicate with all other team members. </p>
<p>As indicated and explained, Scrum Master role could be very challenging, and also very interesting. To find out more about the Scrum Master and to receive professional training and certification, you can visit<a href='https://www.scrum.org/courses/professional-scrum-master-training' target='blank'> scrum.org website.</a></p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog12