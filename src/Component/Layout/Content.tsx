import React from 'react'
import Home from '../Content/Home'
import Experience from '../Content/Experience'
import About from '../Content/About'
import Project from '../Content/Project'
import Contact from '../Content/Contact'
import Skill from '../Content/Skill'

const Content = () => {
  return (
    <div className='content'>
        <Home />
        <About />
        <Experience />
        <Skill />
        <Project />
        <Contact />
    </div>
  )
}

export default Content