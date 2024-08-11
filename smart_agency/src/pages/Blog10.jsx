import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import Pic1 from '../assets/blog10/pic1.png'
import Pic2 from '../assets/blog10/pic2.png'
import Pic3 from '../assets/blog10/pic3.png'
import Pic4 from '../assets/blog10/pic4.png'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog10 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>Importance of coaching in the workplace</h1>
            <h3 className='dateBlog'>26. Jun 2020.</h3>
            <h3>You are working in a company and feel stress and tension?</h3>
            <h3>Productivity could be better?</h3>
            <h3>There are communication blockers and things are not getting through to the people they should?</h3>
            <h3>A lot of employees are leaving the company and there is a visible lack of commitment?</h3>
            <p>Even if the answer to some of those questions is NO, every area could always be improved. </p>
            <img src={Pic1} />
            <p>Well, nowadays, probably for most businesses there is a crisis and all is falling apart, but crisis comes and goes. If you are a person of influence in your company, you should think about a way to solve at least some of the mentioned problems. The solution is sometimes simple, but its implementation is one of the hardest things. There is no better way to invest in yourself, and your employees than to implement coaching in the workplace. The benefits of coaching can improve the workforce of a company, improve employee morale, and help achieve organizational goals.</p>
            <img src={Pic2} />
            <p>It is unreasonable to expect from every manager to be a coach, but on the opposite, it is quite good to have all managers coached. Companies who wish to survive need to implement change management in its DNA. One word is pretty much describing that injection - Agile. So, you will not need just a coach, you will need an Agile coach. Do not be puzzled - Agile coach is still a coach, but with vast knowledge of  Agile games, frameworks, facilitation techniques, scaling and team development techniques. He can sometimes, if necessary and if he is asked for, step out of its coaching role and be a trainer, consultant or even mentor. But he will always start as a coach first. </p>
            <p>You trained some sport and during it, you had a coach? And you remember how he jumps, runs, swims or fences instead of you? Of course not. It is your job, and you are accountable to put maximum effort and find the goal you wish to achieve, train hard, strive to the finish and fulfil your transformation. A coach can help you with a plan creation and fulfillment, can sometimes give you advice if you ask him, but he is usually there to provoke you and to push you to find a solution by yourself, to check how your training is going, but will never do a pushup instead of you. He will instead believe in you, and that you are capable of doing it by yourself. I will not talk a lot about techniques but be clear that open and honest discussion is the beginning of everything. You do not need a lot of time or some superhuman abilities for this.</p>
            <p>Picture below shows a summary of what all people that are called Agile coaches, should do and what skills could be beneficial.</p>
            <img src={Pic3} />
            <h3>How will you know that coaching is effective?</h3>
            <p>Answer: The goal will be achieved. </p>
            <p>Usually, after the feedback talk, the employee gets the area of improvement from the manager - but a plan is missing and means to improve. A good manager can enable support in the form of coaching (even better is if he contacts an external coach) to the employee, so he can work on areas from feedback. Why is it good to have somebody external (does not need to be external to the company but to the team or business section)? Just for the reason of impartiality. The coach will not judge you, but a coach is a person too, and if you are his manager, or you both share a common one, some mixed interest can be hard to separate.</p>
            <p>Example of job-related meaningful goals:<br/><br/>

1. Increase monthly active users of the app by 10%;<br/><br/>
2. Reduce attrition to 3%;<br/><br/>
3. Improve product ownership skills;<br/><br/>
4. Help team become performing one;<br/><br/>
5. Learn a new language.</p><br/><br/>
<img src={Pic4} />
<p>So, you can see that goals could be easily linked to OKRs, company-wide goals, but personal improvements, team goals and switching to the new position. But it is for an employee or for a system which is being coached to, with the help of the coach to identify those most important ones and work on them. The coach will not tell you what your goal should be but must be clear for what in the company he is engaged for, and what are his limits in coaching employees. A good coach will make a coaching agreement where all of these will be stated.</p>
<p>At the end what you can expect for that investment of employing or contracting a coach:<br/><br/>

- Improvement in an individual's performance, targets and goals;<br/><br/>
- Increased openness to personal learning and development;<br/><br/>
- Increased ability to identify solutions to specific work-related issues;<br/><br/>
- Greater ownership and responsibility;<br/><br/>
- Development of self-awareness;<br/><br/>
- And if you are really lucky, the privileges of working in the high performing teams.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog10