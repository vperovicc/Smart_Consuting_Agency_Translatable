import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog9/pic1.png'
import Pic2 from '../assets/blog9/pic2.png'
import Pic3 from '../assets/blog9/pic3.png'
import Pic4 from '../assets/blog9/pic4.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog9 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Listening skills</h1>
            <h3 className='dateBlog'>29. Jun 2020.</h3>
            <h3>Communication is very important in life, not for job success only. If you wanna be a good communicator you need to learn how to listen. Do you know that there are 3 levels of listening?</h3>
            <img src={Pic1} />
            <p>On the first level, you are concentrated on yourself.  You are asking yourself what are you hearing, what are your thoughts, how that message implies to you. How do you feel about it? Typically, when you are in a class and the teacher is asking somebody question, you are hearing the response words, but in fact, you are preparing yourself to answer, you are going through what you experience, and the message does not get yo you. One of the exemplars is a political debate. Candidates just talk to the mass their opinion and message and do not react at all to any message from other candidates. It is not a conversation, because the other party is not heard at all. If you want to transcend to the next level you need to really hear the others. If you do not know are you on 1st level ask yourself, are you interrogating, passive or self-centered. You do not need to practice the 1st level.</p>
            <img src={Pic2} />
            <p>On the second level, you are employing your empathy. You are trying to actively listen. What does that mean? You are actually thinking what the person talking is thinking, feeling and saying. What is happening in him or her? Put yourself in somebody else shoes is a trait of 2nd level of listening.</p>

            <p>How you can practice skills for the second level:<br/><br/>

not interrupt;<br/><br/>
practice silence and start to be comfortable with it;<br/><br/>
put yourself in their shoes;<br/><br/>
be understanding;<br/><br/>
ask open questions and re-frame.</p>
<img src={Pic3} />
<p>3rd level is mastery of listening where you will sense what is happening around you, and if you can achieve it you will notice every detail, energy levels in conversation, environment, you will be with the person and your questions will turn out powerful, and will have a call to action and bring new views to the discussion.</p>
<img src={Pic4} />
        </div>
        <Footer/>
    </div>
  )
}

export default Blog9