import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog11/pic1.png'
import Pic2 from '../assets/blog11/pic2.png'
import Pic3 from '../assets/blog11/pic3.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog11 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Key Responsibilities of a Business Analyst</h1>
            <h3 className='dateBlog'>31. May 2020.</h3>
            <h3>Business analyst is a person within an organization who is observing business processes and operations, and works as a liaison between stakeholders and other teams. This role should be able to understand business issues and problems, as well as, to detect possible opportunities and recommend solutions that could improve organization, its processes and the way how business goals are achieved.  </h3>
            <img src={Pic1} />
            <p>As the role name indicates, the primary goal of a business analyst is to analyze and the question is what, since the concepts of an organization, strategy, business processes and operations are very wide. Here, it could be useful to quickly take a look at a financial analyst who analyzes finance and a financial health of a company. Thus, it could be said that business analyst analyze business processes and operational health of a company, with the aim of trying to identify and clearly communicate inefficiencies.</p>
            <h3>"A business analyst works as a liaison among stakeholders in order to elicit, analyze, communicate and validate requirements for changes to business processes, policies and information systems." -<a href='https://www.iiba.org/career-resources/a-business-analysis-professionals-foundation-for-success/babok/' target='blank'> Business Analysis Body of Knowledge® (BABOK® Guide)</a></h3>
            <p>There are various responsibilities of a business analyst that could be grouped, presented and covered through next 6 areas:<br/><br/>

Capture and model business context<br/><br/>
Plan requirements gathering activities<br/><br/>
Conduct research and identify requirements<br/><br/>
Analyse the requirements<br/><br/>
Communicate the analysis output<br/><br/>
Validate proposed solution</p>
<img src={Pic2} />
        <h3>1. Capture and model business context</h3>
        <p>Capturing and modeling business context could be related and easily presented as pre-project or early project activities. The main objective for the business analyst is to capture the necessary view of the business, in order to understand and model business context through requirements in upcoming stages. Person performing a Business analyst role, usually in this first stage, investigates the specific area or problem and formulate business context model. </p>
        <h3>2. Plan requirements gathering activities</h3>
        <p>Once the specific area or problem is detected and context is defined, the next step is to plan how to collect as much information as possible, that will, after the detailed analysis, help in finding the solution or making a decision. The role of a business analyst is to define and plan requirements gathering activities, considering also the way those activities could be performed on a project, in accordance with the structure and standards of an organization.If this plan is done properly, and if during this step, business analyst manages to capture as much elements as possible, it will be much easier to conduct upcoming analysis.</p>
        <h3>3. Conduct research and identify requirements</h3>
        <p>This is a key task for the business analyst, since the proposed solution that fits business needs actually depends on the requirements which are gathered. Requirements are the input of the upcoming analysis, thus it is essential that they are clear, consistent, complete and correct. There are various techniques that business analysts could use in this stage such as brainstorming, document analysis, focus groups, interview, observation, prototyping, requirements workshops and etc.</p>
        <img src={Pic3} />
        <h3>4. Analyse the requirements</h3>
        <p>This stage requires for business analyst to actually analyze previously collected requirements. Many mistakes are made here in practice due to various factors (not enough time, or insufficient resources, lack of knowledge, lack of interpretability, etc.). Although, it is very important to carefully perform the analysis activities, it is also very important to put equal or even greater attention to the interpretation of findings and presentation structure. The main objective for the business analyst is to define the set of characteristics of an acceptable solution to the business problem and document using the appropriate form. Also, the project team that will be responsible for designing and implementing the solution needs to have a clear understanding of it.</p>
        <h3>5. Communicate the analysis output</h3>
        <p>In this stage, a business analyst needs to communicate the output of the analysis - the proposed solution and present it to the broad and diverse audience. Communication activity could be performed in parallel with previous activities of gathering and analyzing. Also it could be a part of the iterative process: Gather - Analyze - Communicate. Business analyst should be able to clearly communicate the findings and present the proposed solution, in order to obtain approval from the stakeholders for the final stage in which solution should be implemented and validated.</p>
        <h3>6. Validate proposed solution</h3>
        <p>In this stage, major activities are on the project team who is working on the solution implementation. Before the team starts to work on building the solution, a business analyst is assisting the team in detailed design work (defining smaller chunks of work, deliverables, reviewing technical design, defining acceptance criteria, etc.). After that, a business analyst should actively be involved in the working activities, so that he or she could help if someone from the team has some questions or is uncertain about some requirements. In this stage, another most important activity for the business analyst is to support the quality assurance testing, to help with user acceptance testing and in validating implemented solution thoroughly, in order to ensure that it meets the objectives of stakeholders and it actually solves the observed problem.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog11