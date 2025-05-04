import React from 'react'

interface props {
    showedMenu : string
}
const Experience : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="experience" className='section section-even'>Experience</section>
  )
}

export default Experience