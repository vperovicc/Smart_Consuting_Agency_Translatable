import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog8/pic1.png'
import Pic2 from '../assets/blog8/pic2.png'
import Pic3 from '../assets/blog8/pic3.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog8 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Importance of business process mapping in agile project management</h1>
            <h3 className='dateBlog'>5. Dec 2020.</h3>
            <p>Business process mapping is a framework intended to layout a process graphically so that everyone has the same understanding of it and can perform it in the same way. Map is showing the relationship between process steps that are using inputs to produce an output in the form of a product and/or service. Business process maps are encouraging process owners to reflect on their workflows and to identify areas for improvement.</p>
            <img src={Pic1}/>
            <p>Next are key benefits that are introduced with the business process mapping:<br/><br/>

Breaks down the complex processes into smaller steps/activities which are easier to understand and follow.<br/><br/>
Enables development, calculation and monitor of suitable process metrics. <br/><br/>
Helps management to understand the current state of a process. <br/><br/>
Enables easier and more efficient process analysis.
Presents the gap between the ideal and current process more clearly and enables its easy identification. <br/><br/>
Business process maps could be used to show and demonstrate how current processes are performed, to present what is in the scope of the specific project and for the purpose of business process reengineering. By focusing on the analysis and design of workflows, business process reengineering starts with the creation of current “As-Is” and “To-Be” models for a specific process and focuses on “Bridging the Gap” and on process transition from current to future state.</p>
        <p>For the project team, the first two groups of business process maps that are mentioned are important. The first group that is showing how the project management and execution processes should be conducted/followed, and the second group that is explaining how the processes which are in the scope of the project are functioning (what are steps, roles, inputs, expected output, following documentation, decisions and etc.). </p>
        <p>By going through the maps of the business processes that are in the scope of the specific project, team members could understand more clearly what is included, what are boundaries and what is out of the scope. In other words, visualization and graphical presentation of the processes could help significantly to the project team to understand the scope, reasons behind, definitions and overall impact of processes and activities on the project. Understanding how processes are functioning will make project realization more effective. </p>
        <p>Usually, business process mapping is done in the project planning phase for a variety of different project types, such as improvement projects, implementation projects, software development, or business process re-engineering projects. The importance of having business process maps in place could be presented using the example of the development and implementation of a new ERP software. One of the major challenges of implementing a new ERP software is making sure that business and end users understand which processes, operations and activities will be conducted through the new software and what will remain unchanged, which could be clearly indicated through the business process maps. </p>
        <img src={Pic2}/>
        <p>If used properly, business process maps are playing a significant role in almost all project phases. They could be used for the BRD (business requirements document) to help in detailing the business solution that would be implemented and to visualize customer needs and expectations. Furthermore, business process maps could be used for the purpose of User Acceptance Testing (UAT). The goal of the UAT is to ensure that the specific solution meets the functional and non-functional requirements specified in the business requirements, and during this activity process maps are used to reflect on the requirements. Finally, if the solution requests training for the end users, business process maps could be used for the preparation of training material, as well as for the preparation of user guides, manuals and other documentation. </p>
        <p>
        Business process maps are promoting transparency for all stakeholders, since they are showing what will be done, who will be conducting activities, when and where it will be done, and who or what will be using the output of the process. With transparent process, stakeholders can see and (more important) understand the necessary elements, activities and status of process execution. Business process mapping also improves transparency by clearly indicating how value is created through the process. </p>
        <img src={Pic3}/>
        <p>Transparency is a significant and important aspect in Scrum. Considering what has been said previously, application of business process mapping framework could help in improving the transparency in the scrum process that the team is following. Since every company is specific, the execution of scrum processes is also tailored to match companies' needs, which is another good reason to have a transparent and clear process flow in place for the team and other stakeholders. </p>
        <p>If you need or have any difficulties to map current processes to reflect the way how scrum and other operations and activities are performed, need to map processes that are in the scope for the specific project or you are planning to improve current processes following business process reengineering approach, please reach out to us for help and guidance and schedule a session.  </p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog8