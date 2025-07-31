import React from 'react'

interface props {
    showedMenu? : string
}
const Project : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="project" className='section section-odd'>
      <div className='container'>
        <div className='circle-start'></div>
        <ul>   
          <li>
            <span className='exp-year'>GARGET (Garbage collector App)</span>
            <p className='exp-location'>is a mobile-based application developed to improve waste management operations at the community level. It enables real-time monitoring, scheduling, and reporting of garbage collection activities to ensure a cleaner and more organized environment. The system is designed with three main user roles: Admin, Driver, and Community Residents, each with specific features and responsibilities.
            </p>
            <p className='exp-location'>
              The Admin panel lets officials schedule garbage collection, assign routes, track drivers live, and respond to reports. <br/>
              Drivers can view their routes, start and stop collection, and share their location. <br/>
              Community members can check schedules, track trucks, and send reports.
            </p>
              <span className='project-tool'>Clean Architecture (Onion)</span>
            <span className='project-tool'>C#</span>
            <span className='project-tool'>EF Core</span>
             <span className='project-tool'>Asp.Net Core Web API</span>
             <span className='project-tool'>.Net Maui (Hybrid)</span><br/>
             <span className='project-tool'>Blazor</span>
             <span className='project-tool'>HTML</span>
             <span className='project-tool'>CSS</span>
             <span className='project-tool'>JQuery</span>
             <span className='project-tool'>Bootstrap</span>
             <span className='project-tool'>Sql Server</span>
             <br/><br/>
             <a className='exp-git' target='_blank' href='https://github.com/Sstrawhat/GARGETV2.git'>Check   Github</a>
          </li>       
          <li>
            <span className='exp-year'>BMS (Barangay Managment System)</span>
            <p className='exp-location'>a computerized or web-based tool that helps barangay officials manage daily tasks and services digitally.</p>
            <span className='project-tool'>Clean Architecture (Onion)</span>
            <span className='project-tool'>C#</span>
            <span className='project-tool'>Asp.Net Core MVC</span>
            <span className='project-tool'>EF Core</span>
            <span className='project-tool'>HTML</span><br/>
            <span className='project-tool'>CSS</span>
            <span className='project-tool'>Javascript</span>
            <span className='project-tool'>Jquery</span>
            <span className='project-tool'>Bootstrap</span>
            <span className='project-tool'>SQL Server</span>
            <br/><br/>
                     <a className='exp-git' target='_blank' href='https://github.com/Sstrawhat/BMS.git'>Check   Github</a>
          </li>
          <li>
            <span className='exp-year'>BHCS (Barangay Health Center System)</span>
            <p className='exp-location'>a computerized or web-based information system designed to help a barangay health center effectively organize, 
              manage, and monitor community healthcare services and medicine inventory.</p>
            <span className='project-tool'>Clean Architecture (Onion)</span>
            <span className='project-tool'>C#</span>
            <span className='project-tool'>Asp.Net Core MVC</span>
            <span className='project-tool'>EF Core</span>
            <span className='project-tool'>HTML</span><br/>
            <span className='project-tool'>CSS</span>
            <span className='project-tool'>Javascript</span>
            <span className='project-tool'>Jquery</span>
            <span className='project-tool'>Bootstrap</span>
            <span className='project-tool'>SQL Server</span>    <br/><br/>
            <a className='exp-git' target='_blank' href='https://github.com/Sstrawhat/HC.git'>Check   Github</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Project