import React from 'react'

interface props {
    showedMenu : string
}
const Contact : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <section id="contact" className='section section-even'>Contact</section>
  )
}

export default Contact