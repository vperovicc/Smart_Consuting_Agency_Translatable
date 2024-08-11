import React from 'react'
import '../styles/Blog.css'
import Slider from 'react-slick'
import Blog_Card from './Blog_Card'
import Slika1 from '../assets/blog1.png'
import Slika2 from '../assets/blog2.png'
import Slika3 from '../assets/blog3.png'
import Slika4 from '../assets/blog4.png'
import Slika5 from '../assets/blog5.png'
import Slika6 from '../assets/blog6.png'
import Slika7 from '../assets/blog7.png'
import Slika8 from '../assets/blog8.png'
import Slika9 from '../assets/blog9.png'
import Slika10 from '../assets/blog10.png'
import Slika11 from '../assets/blog11.png'
import Slika12 from '../assets/blog12.png'
import Slika13 from '../assets/blog13.png'
import Slika14 from '../assets/blog14.png'
import Slika15 from '../assets/blog15.png'
import Slika16 from '../assets/blog16.png'
import Slika17 from '../assets/blog17.png'


const Blog = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    const serviceData = [
      {
        title:"Ko su Scrum masteri i kako oni zarađuju više od 1.800 evra u Srbiji?",
        text:"Iako su Scrum masteri sve traženiji, kako u svetu, tako i u Srbiji, za ovo zanimanje još mnogi nisu čuli. Ono se ne izučava...",
        image:Slika1,
        link:"/blog1",
        date:"18 May 2023"
      },
      {
        title:"The Benefits of Scrum: Improving Team Performance and Productivity",
        text:"Business owners are always looking for ways to boost employee productivity and ways of creating a cohesive team. For...",
        image:Slika2,
        link:"/blog2",
        date:"20 Mar 2023"
      },
      {
        title:"Time for some answers: We asked our certified coach Bojan Smuđa some questions",
        text:"Our certified coach Bojan Smuđa answered the most frequently asked questions about Scrum in a short...",
        image:Slika3,
        link:"/blog3",
        date:"10 Mar 2023"
      },
      {
        title:"How long does it take someone to become a Scrum Master? Our coach Francesco knows",
        text:"Our certified coach Francesco Bianchi answered the most frequently asked questions about Scrum in a short...",
        image:Slika4,
        link:"/blog4",
        date:"16 Mar 2023"
      },
      {
        title:"Do you know what is Training from the Back of the Room?",
        text:"Training from the Back of the Room is a framework that allows learning with more impact...",
        image:Slika5,
        link:"/blog5",
        date:"28 Feb 2023"
      },
      {
        title:"These companies are changing the world, and they use AGILE methods",
        text:"The Agile Methodologies have shown to be the best approach for developing team work and...",
        image:Slika6,
        link:"/blog6",
        date:"21 Feb 2023"
      },
      {
        title:"An Introduction to Scrum: The Agile Project Management Framework",
        text:"The name Scrum originates from the word scrummage, a rugby method of restarting a match...",
        image:Slika7,
        link:"/blog7",
        date:"9 Feb 2023"
      },
      {
        title:"Importance of business process mapping in agile project management",
        text:"Business process mapping is a framework intended to layout a process graphically so that everyone has...",
        image:Slika8,
        link:"/blog8",
        date:"5 Dec 2020"
      },
      {
        title:"Listening skills",
        text:"Communication is very important in life, not for job success only. If you wanna be a good communicator you need to...",
        image:Slika9,
        link:"/blog9",
        date:"29 Jun 2020"
      },
      {
        title:"Importance of coaching in the workplace",
        text:"There is no better way to invest in yourself, and your employees than to implement coaching...",
        image:Slika10,
        link:"/blog10",
        date:"26 Jun 2020"
      },
      {
        title:"Key Responsibilities of a Business Analyst",
        text:"Business analyst is a person within an organization who is observing business processes and operations...",
        image:Slika11,
        link:"/blog11",
        date:"31 May 2020"
      },
      {
        title:"Scrum Master - Servant Leader and Coach",
        text:"Scrum master is a person responsible for ensuring the scrum team lives and follows agile values and principles...",
        image:Slika12,
        link:"/blog12",
        date:"16 Feb 2020"
      },
      {
        title:"How to perform PERT planning",
        text:"PERT stands for Program Evaluation and Review Technique. It represents a tool commonly used in project managemen...",
        image:Slika13,
        link:"/blog13",
        date:"12 Feb 2020"
      },
      {
        title:"30 terms you must know as a Business Analyst",
        text:"Business analyst is a generic term for various roles in Company. Activities that are covered with this role are related...",
        image:Slika14,
        link:"/blog14",
        date:"9 Feb 2020"
      },
      {
        title:"How to draw a Critical Path Analysis Diagram",
        text:"Critical Path Analysis could be very powerful tool for scheduling and managing complex projects...",
        image:Slika15,
        link:"/blog15",
        date:"2 Feb 2020"
      },
      {
        title:"Project Management through time",
        text:"Application of Project management is connected with the great human achievements recorded in history...",
        image:Slika16,
        link:"/blog16",
        date:"30 Jan 2020"
      },
      {
        title:"5 reasons to use SCRUM for projects",
        text:"Scrum represents a very popular agile framework for incremental product development and it is widely...",
        image:Slika17,
        link:"/blog17",
        date:"26 Jan 2020"
      },
    ];

  return (
    <div className='bg_blog' id='blogs'>
      <div className='content_blog'>
      <Slider className="slider-container" {...settings}>
      {serviceData.map((blogs, index) => (
        <Blog_Card 
        key={index}
        title={blogs.title}
        text={blogs.text}
        image={blogs.image}
        link={blogs.link}
        date={blogs.date}/>
      ))}
      </Slider>
    </div>
    </div>
  )
}

export default Blog