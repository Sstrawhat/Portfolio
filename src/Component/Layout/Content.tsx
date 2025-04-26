import React from 'react'
import Home from '../Content/Home'

interface props {
    showedMenu : string
}
const Content : React.FC<props> = ({showedMenu = "home"}) => {
  return (
    <div className='content'>
        <Home />
    </div>
  )
}

export default Content