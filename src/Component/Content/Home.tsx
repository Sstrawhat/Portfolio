import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface props {
    showedMenu? : string
}
const Home : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="home" className='section section-odd'>
<div className='container'>
<h1 className='name'>ASHLEY FAJARDO</h1>
      <h4 className='title'>SOFTWARE DEVELOPER</h4>
      <p className='paragraph'>
       A Software Developer with 4 years and 6 Months of experience at Algar. I specialize in C# .NET, ASP.NET Core Web API, and ASP.NET MVC. I also have experience with HTML, CSS, JavaScript, JQuery, Bootstrap and SQL Server.

      I enjoy building both the backend and frontend parts of web applications, focusing on clean code, performance, and user-friendly design. I'm passionate about learning and improving my skills to create better software solutions.
      </p>
      <div className='link'>
        <ul>
          <li><a target="_blank" href='https://www.linkedin.com/in/ashleyfajardo07'><FontAwesomeIcon className='icon-link' icon={faLinkedin} /></a></li>
          <li><a target="_blank" href='https://github.com/Sstrawhat'><FontAwesomeIcon className='icon-link' icon={faGithub } /></a></li>
          <li><a target="_blank" href='../Portfolio/public/resume/Ashley_Fajardo_Resume.pdf'><FontAwesomeIcon className='icon-link' icon={faFile } /></a></li>
        </ul>
      </div>
</div>
    </section>
  )
}

export default Home