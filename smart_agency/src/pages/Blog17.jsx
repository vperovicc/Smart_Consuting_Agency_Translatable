import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog17/pic1.png'
import Pic2 from '../assets/blog17/pic2.png'
import Pic3 from '../assets/blog17/pic3.png'
import Pic4 from '../assets/blog17/pic4.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog17 = () => {
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>5 reasons to use SCRUM for projects</h1>
          <h3 className='dateBlog'>26. Jan 2020.</h3>
          <h3>Scrum represents a very popular agile framework for incremental product development and it is widely used in software development. Scrum already changed the software industry and it is now spreading its influence on other industries, practically changing the way how organizations are conducting overall project management. </h3>
          <img src={Pic1} />
          <p>Scrum is based on an empirical process, and the whole idea is that we can find out the truth through experiments with concrete and observable results. There are three pillars on which scrum methodology is built: transparency, inspection, and adaptation. Its aim is to develop, deliver, and sustain complex products through collaboration, accountability, and iterative progress.</p>
          <img src={Pic2} />
          <h3>So, the question is, why Scrum methodology should be used for projects?</h3>
          <p>Following reasons are related to the team empowerment, accepting late changes, stakeholders engagement, focus on client and framework simplicity.</p>
          <h3>Reason #1 - Focus on people and collaboration</h3>
          <p>“a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.” - definition from the official <a target='blank' href='https://scrumguides.org/scrum-guide.html'>Scrum Guide.</a></p>
          <p>With Scrum, focus is on people that are working together on a project. This methodology could be proven very useful when a day-to-day decisions are required on a project. Scrum recognizes and supports this by empowering the project team during the spring/iteration and allowing them to work with minimum (or even without) interference from outside. Daily meetings, or daily scrums, are enabling continuous communication within the team and ensuring that every team member is clear on daily objectives, current progress and current challenges. Scrum also encourages collaborative decision making and constructive feedback, so that a higher quality product can be delivered efficiently. </p>
          <h3>Reason #2 - Enhances the flexibility of the team</h3>
          <p>"Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage." - second of the 12 principles behind the <a target='blank' href='https://agilemanifesto.org/principles.html'>Agile Manifesto</a></p>
          <p>Scrum is bringing flexibility to the team in requirements gathering and by prioritizing work, it enables a team to deliver value to the business/customer in regular increments. It allows late changes due to either shifting in customer needs or due to the unexpected failures that could arise. Often customers don't know what they want at the beginning, so it could be very useful to have the option to re-prioritize the remaining work on the project, or even to add some new features. Furthermore, unexpected failures could definitely happen, especially on projects, and with Scrum it is very easy to roll back to previous state or add new changes.</p>
          <img src={Pic3} />
          <h3>Reason #3  Transparent Process that Makes Stakeholder Engagement Possible</h3>
          <p>One of the three pillars of Scrum is transparency. During daily and other scrum ceremonies (meetings), the team can discuss progress, plan adjustments properly and share feedback. Ceremonies represent an opportunity to the client or business representative to provide useful feedback to the team, to prioritize features properly, provide clarifications on the existing features that should be developed and to make constructive suggestions on project. Thus, development team could engage stakeholders before, during and after iteration (sprint). By doing this, problems and failures could be identified in early iterations and could be fixed before the project completion.  </p>
          <h3>Reason #4 Focus on client</h3>
          <p>"Our highest priority is to satisfy the customer through early and continuous delivery of valuable software." - first of the 12 principles behind the <a target='blank' href='https://agilemanifesto.org/principles.html'>Agile Manifesto</a></p>
          <p>With scrum, client is placed in the center of the development process and it is the main source of the requirements for the team. Development process is driven by user stories (requirements coming from the client) and development team will use them to deliver product in increments through regular iterations. Also, iteration approach is giving client enough time to re-prioritize remaining work in order to have maximized value at the end. By following this process, it could be said that major prerequisites are met for the team to be able to deliver value to the client.</p>
          <h3>Reason #5 Simple and easy to understand framework</h3>
          <p>Scrum can be easily introduced in an organization, following basically three simple steps. First, roles should be defined. Second, few artifacts should be implemented to capture the information needed for the project. And third, some events should be scheduled and attended by the previously defined teams for performing specific actions.</p>
          <img src={Pic4} />
          <p>The product owner represents the best interests of a client or final user of the product, and makes sure that the sprint goals are clear for the development team. Scrum master is making sure that the Scrum framework and processes are followed and is there to remove any potential impediments. Finally, development team is responsible for delivering business value that is requested by the product owner by following Scrum framework and processes.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog17