import React from 'react'

interface props {
    showedMenu : string
}
const Project : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="project" className='section section-odd'>project</section>
  )
}

export default Project