import React from 'react'

interface props {
    showedMenu? : string
}
const Skills : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="skills" className='section section-odd'>Skills</section>
  )
}

export default Skills