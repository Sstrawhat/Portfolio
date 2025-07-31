import React from 'react'

interface props {
    showedMenu? : string
}
const Skills : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="skills" className='section s-skill section-odd'>
      <div className='container'>
        <div className='widget'>
          <span className='widget-title'>C-SHARP</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>ASP.NET CORE/MVC</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>.NET MAUI</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>.NET 5+</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>ENTITY FRAMEWORK CORE</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>SQL</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>ASP.NET CORE WEB API</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>BLAZOR</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>RAZOR</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>HTML</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>CSS</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>JAVASCRIPT</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>JQUERY</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>BOOTSTRAP</span>
        </div>
        <div className='widget'>
          <span className='widget-title'>FIGMA</span>
        </div>
      </div>
    </section>
  )
}

export default Skills