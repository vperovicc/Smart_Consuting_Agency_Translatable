import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog7/pic1.png'
import Pic2 from '../assets/blog7/pic2.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog7 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>An Introduction to Scrum: The Agile Project Management Framework</h1>
            <h3 className='dateBlog'>9. Feb 2023.</h3>
            <p>The name Scrum originates from the word scrummage, a rugby method of restarting a match. As in sports, Scrum as an Agile project management framework means that a team need to learn through experiences, self-organize while working on a problem and reflect on their wins and losses to continuously improve.</p>
            <p>Scrum was developed in the early 1990s and it's opposed to the more conventional alternative of the Waterfall development. The Waterfall could go through an extensive process of planning, building and testing the product, then comes reviewing and eventually deploying the product. These phases could take months, even years to take the product out of the door, which can be a problem because market changes rapidly. </p>
            <p>With Scrum, an implementation of Agile, a process is divided into smaller iterations that usually occurs in a short time period (1 - 3 weeks). It involves just enough planning to start building a product, then testing it and reviewing what was done. These short processes are called Sprints, and they represent repetitive cycles until a product is a feature complete.</p>
            <p>At the beginning of each Sprint, there is a planning session in which the team review and define the work that is required to be done. The product backlog represents the prioritized list, an overview of the entire product and its features for the development team. The most important items are shown at the top of the product backlog so the team knows what to deliver first. The product backlog is broken into smaller tasks which represent the sprint backlog. The difference is that the sprint backlog gives a closer focus on the work of the product during a specific time period and it focuses on the Sprint Goal, that could be a single objective for the Sprint.</p>
            <img src={Pic1} />
            <p>For the framework to work well, there are three key roles in place:<br/><br/>

•	The Product Owner: The person with the ideas and the one responsible for defining the features needed for the product.<br/><br/>

•	Scrum Master: A servant leader to the team and the one responsible for the Scrum process, running the meetings and making the things progress.<br/><br/>

•	The team (developers/testers/writers/designers/business analysts): Those who build the product and get the job done. </p>
<p>In order for the team to follow the framework, there are events (Scrum ceremonies) that must take place:<br/><br/>


•	Sprint planning: The Product Owner, Scrum Master and Development Team collaborate to take work items from the product backlog and add them to the sprint backlog. The Product Owner may influence the Developers by helping them understand and select trade-offs, as well as to highlight the importance of certain work items.<br/><br/>

•	Daily Meetings: The team begins each day with a 15 minutes meeting, which helps keep the team on target and moving towards sprint goal(s). In these meetings everyone on the team shares what they did yesterday, what will they do today and what obstacles they have, if any. <br/><br/>

•	Sprint Review: The purpose of this meeting is to inspect the work that the team has prepared, delivered and adapt any feedback for the future iterations. . All three roles (Product Owner, Scrum Master and Development team) are involved and the stakeholders need to provide feedback for the team.<br/><br/>

•	Sprint Retrospective: These meetings are also held at the end of the Sprint, but without the stakeholders present. The team is gathering to assess the successes and failures of the internal processes and the main focus is on three questions: What went well (Kudos), what went poorly (Concerns) and what should be done better for the next Sprint (Opportunities). The purpose of the Sprint Retrospectives is to identify the most helpful changes to the way how team is working to improve overall effectiveness.</p>
<img src={Pic2} />
<p>•	Backlog Refinement: The single most important event that the Scrum Team should do. During this meeting, the whole team is reviewing the upcoming working items and Product Owner is providing requirements clarifications where needed. Commitment to the backlog refinement can ensure that there is less wasting of time and resources throughout the rest of the process. </p>
<p>To summarize, Scrum is a lightweight framework that helps people, teams and organizations generate values and workflows, enables quick detection and resolution of problems, reduces the risk of wasting time and resources, allows monitoring of the market trends due to short deadlines and providing enough time for incorporating them if needed.</p>
<p>Written by Dajana Mitrov</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog7