import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog15/pic1.png'
import Pic2 from '../assets/blog15/pic2.png'
import Pic3 from '../assets/blog15/pic3.png'
import Pic4 from '../assets/blog15/pic4.png'
import Pic5 from '../assets/blog15/pic5.png'
import Pic6 from '../assets/blog15/pic6.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog15 = () => {
  return (
    <div>
      <SpecialNavbar/>
        <div className='content_blogsStyle'>
          <h1>How to draw a Critical Path Analysis Diagram</h1>
          <h3 className='dateBlog'>2. Feb 2020.</h3>
          <h3>Critical Path Analysis could be very powerful tool for scheduling and managing complex projects. It was developed in the 1950's together with the another popular tool used in project management - PERT (Program Evaluation and Review Technique). Both tools were developed for the purpose of managing large US Navy defense and technology projects.</h3>
          <img src={Pic1} />
          <p>Similar like Gantt Charts, Critical Path Analysis (CPA) is commonly used for project planing, and it is showing all tasks that needed to be completed as a part of a project. Also, by focusing on the visual interpretation of activities and tasks, CPA is used for the preparation of schedule and for resource planning. In case when project is not going as expected, critical path could indicate specific activities or tasks on which certain actions should be taken and additional resources assigned. </p>
          <p>The precursors of CPA:<br/><br/>

Some initial pieces of CPA were actually developed first by Morgan R. Walker from DuPont (a chemical company) between 1940 and 1943 and contributed to the success of well known Manhattan Project. More about this project, you can read here. When the tool itself was proven to be useful and contributed to the success of the mentioned project, its started to be applied on other projects as well. </p>
<h3>"The Critical Path Method (CPM) is the real, honest-to-goodness, outgrowth of a progressive management's active search for better ways to do things." -  <a target='blank' href='https://www.pmi.org/learning/library/origins-cpm-personal-history-3762'>The origins of CPM: a personal history. By: James E. Kelley, Jr. and Morgan R. Walker</a></h3>
<img src={Pic2} />
<p>The same as with any other tool, CPA also have some advantages (or benefits) and disadvantages (or some limitations). By its definition, CPA identifies tasks that must be completed on time in order for the project to be completed on time. Also, it identifies and highlights the tasks that could be delayed if resources should be re-assigned or shifted to some other tasks that are overrunning or are missed. On the other side, CPA diagram could be very difficult for understanding, since it is not obvious immediately on first look like for example Gantt Chart. Another disadvantage is that CPA is not concerned about resources that are working on project and on which tasks and how they are assigned. A good example could be an activity such as create complete design for the new website. When this activity was planned and its duration was estimated to be 10 working day, it was assumed that two designers will work on it, but this very important information is not visible on the CPA diagram.</p>
<p>The same as with any other tool, CPA also have some advantages (or benefits) and disadvantages (or some limitations). By its definition, CPA identifies tasks that must be completed on time in order for the project to be completed on time. Also, it identifies and highlights the tasks that could be delayed if resources should be re-assigned or shifted to some other tasks that are overrunning or are missed. On the other side, CPA diagram could be very difficult for understanding, since it is not obvious immediately on first look like for example Gantt Chart. Another disadvantage is that CPA is not concerned about resources that are working on project and on which tasks and how they are assigned. A good example could be an activity such as create complete design for the new website. When this activity was planned and its duration was estimated to be 10 working day, it was assumed that two designers will work on it, but this very important information is not visible on the CPA diagram.</p>
<h3>1. List out all activities</h3>
<p>For each activity show estimated time for completion (duration), type of activity (whether it is parallel or sequential) and dependencies between the activities. All activities are usually extracted from work breakdown structure diagram (WBS). Based on dependencies and the duration, it is easy to calculate the earliest start date. In addition, you can also highlight here milestones or deliverable items. </p>
<h3>2. Plot activities on a diagram</h3>
<p>There are various versions of this diagram using circles or blocks for plotting activities, and the most important is to make enough space in the shape you chose to use for other information (events) required to determine the critical path. Plot activities on the diagram based on their dependencies and use arrows to connect them.</p>
<h3>3. Enter events in the shape for each of the activities</h3>
<p>Next figure is illustrating the events required to be entered for each of the activity.</p>
<img src={Pic3} />
<p>For first activity A (e.g. Website mock up) its early start will be 0 (zero), if it is not defined otherwise for the purpose of some specific project, but the principle remains the same. Than, add the duration (e.g. 8 working days) to early start to calculate the early finish (which will be in our example 8). For the next activity, early finish from the previous one will be the early start. So for activity B (e.g. website final design), early start will be 8 and by adding the duration (e.g. 2 working days), the early finish will be 10. The example is illustrated on the next figure. </p>
<img src={Pic4} />
<p>Repeat this all the way to the last activity and make sure that all activities have calculated early start and finish dates. Early finish date for the last activity will be equal to the latest finish date, thus, the late start date will be late finish date reduced for the duration. Late start date of the last activity will be late finish date for the activity before the last one and so on. Also, float time could be calculated as: Late finish date - Early finish date. Example is shown on the figure below.</p>
<img src={Pic5} />
<h3>4. Determine critical path</h3>
<p>Critical path represents the sequence of activities which have the longest total duration. This is actually the shortest possible time to complete the project. Thus, first you would need to find all possible paths. For the demonstration purpose, we will follow example given on the next figure.</p>
<img src={Pic6} />
<p>Path 1: A-B-E-H-J-K-L = 8+2+60+20+10+12+3=115<br/><br/>

Path 2: A-C-F-H-J-K-L = 8+3+2+20+10+12+3=58<br/><br/>

Path 3: A-D-G-I-J-K-L = 8+60+2+10+10+12+3=105</p>
<p>Based on the calculations, the longest and critical path will be path 1 (A-B-E-H-J-K-L) with 115 working days. With this, the creation of the CPA diagram is completed.</p>
<h3>Rules for specific cases</h3>
<p>Case 1: Determine the early start date when activity depends on two or more activities.

Example from the picture is that activity J depends on activities H and I.The question is for this case from which activity (H or I) the early finish date should be chosen to be the early start date for activity J? The answer is from the activity with the longer early finish date. In our example that would be activity H (90 working days). 

Case 2: Determine the late finish date when activity  is dependent activity for two or more activities

Example from the picture is that  activities B, C and D are depending on the activity A. The question is for this case from which activity (B, C or D) the late start date should be chosen to be the late finish date for activity  A? The answer is from the activity with the earliest late start date. In our example that would be activity B (8 working days).</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog15