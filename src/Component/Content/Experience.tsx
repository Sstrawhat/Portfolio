import React from 'react'

interface props {
    showedMenu? : string
}
const Experience : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="experience" className='section s-experience section-even'>
      <div className='container'>
        <div className='circle-start'></div>
        <ul>          
          <li>
            <span className='exp-year'>2023 - Present</span><br/>
            <span className='exp-title'>Software Development Team Lead</span><br/>
            <span className='exp-location'>ALGAR Information System, Inc</span>
             <ul>
              <li className='exp-list-title'>Work Experience</li>
              <li>Mentored junior developers and supported their technical growth</li>
              <li>Participated in technical decision-making for project architecture and implementation</li>
              <li>Provided suggestions and improvements for system functionality and workflow</li>
              <li>Developed a Laboratory Information Management System (LIMS) for lab data tracking and reporting</li>
              <li>Developed systems including HR, Admin, and Employee portals</li>
              <li>Performed debugging, system testing, and ongoing maintenance</li>
              <li>Continually learning new tools and technologies to improve development skills</li>
            </ul>
          </li>
          <li>
            <span className='exp-year'>2021 - 2023</span><br/>
            <span className='exp-title'>Junior Software Developer</span><br/>
            <span className='exp-location'>ALGAR Information System, Inc</span>
             <ul>
              <li className='exp-list-title'>Work Experience</li>
              <li>Developed systems including HR, Admin, and Employee portals</li>
              <li>Performed debugging, system testing, and ongoing maintenance</li>
              <li>Continually learning new tools and technologies to improve development skills</li>
            </ul>
          </li>
          <li>
            <span className='exp-year'>2016 - 2020</span><br/>
            <span className='exp-title'>BS - Information System</span><br/>
            <span className='exp-location'>Immaculate Conception I-College of arts and technology</span>
            <ul>
              <li className='exp-list-title'>Certificates and Achiements</li>
              <li>Best in Capstone</li>
              <li>Best in Practicum</li>
              <li>Programmer of the year</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience