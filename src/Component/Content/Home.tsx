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
      Hey, I’m Ash — a software developer who loves building cool, useful stuff on the internet.

I’m all about clean code, great user experiences, and figuring things out one bug at a time. Whether it’s crafting slick UIs or solving deep backend logic, I enjoy turning ideas into real, working products.

Always curious. Always improving. Let’s build something awesome.

      </p>
</div>
    </section>
  )
}

export default Home