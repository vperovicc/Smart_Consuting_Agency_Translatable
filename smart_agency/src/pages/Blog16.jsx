import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog16/pic1.png'
import Pic2 from '../assets/blog16/pic2.png'
import Pic3 from '../assets/blog16/pic3.png'
import Pic4 from '../assets/blog16/pic4.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog16 = () => {
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>Project Management through time</h1>
          <h3 className='dateBlog'>30. Jan 2020.</h3>
          <h3>Application of Project management is connected with the great human achievements recorded in history.  Starting from the huge ancient construction projects (e.g. Pyramids), and to one of the latest initiatives related to the agile approach for software development (e.g. Agile Manifesto).</h3>
          <img src={Pic1} />
          <p>Project management as concept has been around forever, as long as people have been around and needed to organize themselves into groups to finish some time sensitive work or activity. The good thing is that observing through time, it could be said that project management is not standing in one place, but it is constantly growing and influencing the way people (and organizations) are doing almost everything. This article starts at the beginning (from Pyramids) and points out some of the key and very important moments in the rich history of project management. </p>
          <h3>1. Giza Pyramids</h3>
          <p>One of the seven World wonders which survived time are Giza Pyramids. What we know so far is that Pharaoh ordered building of Pyramids and we suspect that there were managers responsible for each of the four faces of the Great Pyramid. For sure, there was some degree of planning, execution and control involved in managing this project, but most historical records are not preserved. More information about the Giza Pyramids project organization and how they were built, could be found in one interesting and comprehensive article from <a target='blank' href='https://www.nationalgeographic.com/history/article/giza-pyramids'>National Geographic. </a></p>
          <img src={Pic2} />
          <h3>2. The Great Wall of China</h3>
          <p>Moving on, we can address the Great Wall of China which was a huge achievement spanning through different eras and dynasties. This complex project required different group of specialists organized in teams and a lot of coordinated work.</p>
          <h3>lt was built by a labor force including soldiers, common people and criminals in fact. Emperor Qin Shihuang is widely recognized as the first man who ordered to build the Great Wall of China; however, it is not him. A duke of Chu State in the Spring and Autumn Period (770BC-276BC) was first one ordering to build the wall." - more information could be found on <a target='blank' href='https://www.travelchinaguide.com/china_great_wall/facts/who-built.htm'>Travel China Guide</a> website.</h3>
          <p>Among many, there are two important lessons that are learned through the construction of the Great Wall of China. First, this construction for fortification was built over time, in a phases, piece by piece. Spoken through the Scrum terminology, it was delivered in increments. If we compare it to nowadays projects, it could be said that many of them are broken into domains, modules and work packages that are delivered in some time spans. Second, the Great Wall was built overtime by various dynasties, which were sponsors of the project in today's terminology. So, following the change in power, the project sponsors changed, and despite that change, construction continued until it was finally done. This means that project outlasted its actual sponsors. This could be very good lesson for the project managers who find themselves worrying that their project will be abandoned or terminated if there is a change in project sponsor. As we can see from the example of the Great Wall of China, this could not necessarily be the case. </p>
          <h3>3. Scheduling diagram (Gantt Chart)</h3>
          <p>Next, we can jump few millenniums ahead to something that is still in use today and created in the era of industrialization. Henry Gantt created a scheduling diagram which everyone who is working on projects knows well.</p>
          <img src={Pic3} />
          <p>These charts that are legacy of Henry Gantt have been applied to almost all projects. At the beginning, when Henry invented them, main purpose was to illustrate how scheduling could be achieved on optimal level. The Gantt Charts represented a graphic interpretation and tool for planning and controlling the work. Later, they led to the development of PERT (Program Evaluation and Review Technique) diagrams.</p>
          <h3>4. Program Evaluation and Review Technique (PERT)</h3>
          <p>Important things in the filed of project management were achieved in 1950’s in USA and are related to the Polaris Missile program commenced by US Navy. It used Program Evaluation and Review Technique, also known as PERT, to schedule, organize and coordinate tasks within the project. Some can say that the complexity of this program is equivalent to the Moon Landing Mission.<br/><br/>


PERT should be used in case of projects which are:<br/><br/>

Large,<br/><br/>
Complex,<br/><br/>
Require a series of sequential tasks and<br/><br/>
are performed in parallel with some other project(s).<br/><br/>
The case of Dupont and Univac:<br/><br/>

In 1956, Dupont (a chemical company) and Remington Rand Univac (a computer company) defined together the Critical Path Method to tackle the dependencies between activities on a project.  CPM is a commonly used technique in the conjunction with the PERT, and represents a sequence of individual activities that must be finished on schedule (as planned) in order for the whole project to be completed on time. Main point is that activities on the critical path could not start until a predecessor activity is finished. Since this first started as a initiative of the joint venture of two mentioned companies, it was recorded that the calculations for CPM were first made on the UNIVAC-1 computer. </p>
<h3>5. Project Management Institute (PMI)</h3>
<h3>"We work on your behalf to advance the project management profession worldwide." - <a target='blank' href='https://www.pmi.org/about'>Project Management Institute</a></h3>
<p>When talking about the history of project management, two very important events could not be neglected and are related to the Worldwide project management organization. Project Management Institute was launched in 1969. to promote Project Management profession. Moving on and collecting best practices in the project management area, a guide to the Project Management Body of Knowledge (PMBOK) was published in  in 1987. in a form of a white paper.</p>
<img src={Pic4} />
<h3>6. The Agile Manifesto</h3>
<p>Agile era of Project Management started in late 1980's but one of the most significant events was charting the <a target='blank' href='https://agilemanifesto.org'>Agile Manifesto</a> in 2001. What happened was that the group of 17 software developers gathered in Utah and published the Manifesto. From then onward the Agile Project Management gained foothold and now it is considered as a mainstream in many industries. One of the most popular agile framework for incremental product development  is Scrum.</p>
<p>As indicated at the beginning, these were just a few key and very important moments in the rich history of project management. If you are interested to dive more deeply into this topic, a lot of interesting cases could be found in the book <a target='blank' href='https://historyofprojectmanagement.com'>The History of Project Management.</a></p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog16