import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/BlogsStyle.css'
import SpecialNavbar from '../components/SpecialNavbar'

const Blog2 = () => {
  return (
    <div>
        <SpecialNavbar/>
        <div className='content_blogsStyle'>
            <h1>The Benefits of Scrum: Improving Team Performance and Productivity</h1>
            <h3 className='dateBlog'>20. May 2023.</h3>
            <p>Business owners are always looking for ways to boost employee productivity and ways of creating a cohesive team. For such needs, Scrum is an ideal, lightweight framework solution that brings many methods for improving team performance. </p>
            <h3>1.  Improving productivity through prioritizing tasks</h3>
            <p>One of the benefits of the Scrum framework is that it can help team members focus their energy and efforts on essential tasks which must be completed first. The entire team must understand their responsibilities and when they must meet the deadlines. Scrum can help save time and ensure that work is focused on the most important tasks.</p>
            <h3>2. Open Communication and Transparency</h3>
            <p>To know what a task is and what is required to be done, transparency is needed. Thus, tasks can be distributed to team members more efficiently. Also, when team members know that they can frankly talk about difficulties with assigned tasks and call for help from other team members without shame, problems can be solved more quickly and tasks can be completed on time. Therefore, another benefit of the Scrum framework is open communication among team members.</p>
            <h3>3. Adapt and Change</h3>
            <p>Productivity improvement can be made by being able to quickly adapt if needed, based on customer feedback or market changes. It means that Scrum allows team members to easily change plans and adapt to shifts while preventing the moral decline that could result from the need to start over from scratch. The team is effectively learning from mistakes and avoiding them in the future which provides a boost of energy forced into new performances. </p>
            <h3>4. Measure Progress </h3>
            <p>When Sprint is over, team members can reflect on their progress and measure the results. Scrum is allowing to track the team's progress and see improvements needed to be made. Measuring progress can help identify areas of business that are not productive and this information can be used to quickly make changes that will improve overall progress toward set goals. </p>
            <h3>5. Increase in Moral</h3>
            <p>Scrum can boost team morale if the previously stated conditions are met, but there are occasions when the entire team needs more support, and Scrum can help identify the areas where it may be needed. That could help provide the resources for the team to be more successful, which can make members feel more motivated and engaged in their work.</p>
            <h3>Conclusion:</h3>
            <p>Due to the division of a large project into Sprints, this framework enables quick identification of difficulties that may jeopardize progress. With open dialogue and transparency, resolving complications can be quick, the team can learn from mistakes, grow and adapt for future Sprints. Additionally, Scrum can help locate ineffective business areas and can be used to advance overall performance. Therefore, Scrum can help achieve high-quality work with the promotion of cohesiveness.</p>
            <p>Written by Dajana Mitrov</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog2