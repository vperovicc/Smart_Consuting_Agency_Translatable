import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog13/pic1.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog13 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>How to perform PERT planning</h1>
            <h3 className='dateBlog'>12. Feb 2020.</h3>
            <p>PERT stands for Program Evaluation and Review Technique. It represents a tool commonly used in project management domain for scheduling, organizing and coordinating activities within a project. Project managers are using PERT to analyze activities that are required for completing a specific project in terms of their duration and to identify and calculate the minimum time for project completion.</p>
            <img src={Pic1} />
            <h3>"PERT charts were first created by the U.S. Navy's Special Projects Office in 1957 to guide the Polaris nuclear submarine project." - <a href='https://www.brighthubpm.com/project-planning/14025-five-things-you-didnt-know-about-the-pert-chart/' target='blank'>Facts about the PERT chart</a> </h3>
            <p>PERT represents a method for analyzing the activities on a specific project. Some of the characteristics of the PERT tool are:<br/><br/>

The main objective is to facilitate decision making process.<br/><br/>
If properly used, it could help in reducing the time and cost required for project completion.<br/><br/>
It is event-oriented technique.<br/><br/>
It is used on the projects where time is more important factor than cost.</p>
        
        <p>By giving the option for someone to schedule a project while not knowing all details and duration of all activities, PERT incorporates uncertainty. PERT should be used on next projects:<br/><br/>

very complex, <br/><br/>
large-scale,<br/><br/>
one-time,<br/><br/>
non-routine,<br/><br/>
with high degree of inter-task dependency and<br/><br/>
when series of sequential activities are required.</p>
<p>Next steps should be followed for creating PERT chart:<br/><br/>

1. Identification of the specific activities and milestones (key project points)<br/><br/>
2. Determination of the proper sequence, orders and dependencies between activities<br/><br/>
3. Construction of the initial PERT diagram<br/><br/>
4. Estimation of the duration of each activity<br/><br/>
5. Determination of the critical path based on dependencies and duration of activities<br/><br/>
6. Update of the chart on regular basis to follow the project progress.</p>
<p>Each activity in PERT chart should be properly visible and recommendation is to have few key information such as Task Name, Task ID, Duration, Start Date and End Date. A traditional PERT charts could be updated and enhanced with the lanes which could represent responsible person/team/department for certain activities. Thus, PERT chart could be arranged into horizontal zones separated by lines. </p>
<p>One of the commonly used tool for creating PERT chart is Microsoft Visio. More about this tool and how to create Visio PERT charts to plan projects and analyze dependencies you can find <a href='https://support.microsoft.com/en-us/office/create-visio-pert-charts-to-plan-projects-and-analyze-dependencies-fe81f477-963e-4977-8e5b-7be634030deb?ui=en-us&rs=en-us&ad=us' target='blank'>here.</a></p>
</div>
        <Footer/>
    </div>
  )
}

export default Blog13