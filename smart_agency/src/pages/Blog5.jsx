import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog5 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Do you know what is Training from the Back of the Room?</h1>
            <h3 className='dateBlog'>28. Feb 2023.</h3>
            <p>Training from the Back of the Room is a framework that allows learning with more impact and use of the knowledge acquired. There are many books and methods on this topic, but Sharon Bowman is one of the authors who noted a collection of the best practices.</p>
            <h3>What's the catch? </h3>
            <p>At this point of time, passive lecturing techniques are less effective. Imagine that there is a person standing in front of you, speaking about theory, showing you some charts and diagrams and you siting there, passively listening their monolog and slowly falling asleep. Now, imagine a different circumstances, when you, as a learner, are activly paricipating in discussion concepts and practicing skills with a tutor and other fellow learners. Isn’t it a bit more encorageing and even fun? That’s what the Training from the Back of the Room is all about: enabling learners to remember and use information given to them by engagment during the training.</p>
            <h3>An introduction: The 4 Cs reference.</h3>
            <p>In recent years, the Agile Community has made Training from the Back of the Room an essential refenece for all training and coaching professionals who want to teach courses and really achieve their goal which is to help students learn more effectively. So, how does it work? Training from the Back of the Room is designed to deliver learning experiences. Lessons are structured to adress 4 Cs:<br/><br/>


·       Connections: What does the learner already know about the topic? Learners can make connections with what they already know or think they know about the topic.<br/><br/>

·       Concepts: What does the learner need to know about it? Learners take in new information in multisensory ways, such as hearing, seeing, discussing, writting, reflecting, etc.<br/><br/>

·       Concrete Practice: Can the learner do it or teach it to someone else? Learners actively practice the new skills, or they paricipate in an active review of the new knowledge.<br/><br/>

·       Conclusions: How does the learner plan to use it? Learners summarize what they have learned, evaluate it, create action plans about how they plan to use the new knowledge or skills after the training is over.</p>
<h3>Brain-friendly training environment</h3>
<p>In order to facilitate Training from the Back of the Room, tutor must create an environment that will support learning. So called brain-friendly environment include positive emotions, informal learning environment, novelty andvariety and participation. <br/><br/>

Positive emotions leave pleasant memory which will be more likely to last. Learners should feel competent, respected and smart. Informal learning environment provides attendees to feel comfortable in their training space. Novelty and variety make it possible to steer the level of attention and participation sets the frame that supports active collaboration.<br/><br/>

Therefore, the framework of 4 Cs held in the brain-friendly environment creates different approach from the traditional training where trainers talk and learners listen. The principle is swiched from “let me tell you” to “lets discover together”.</p>
<p>Written by Dajana Mitrov</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog5