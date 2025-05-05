import { motion } from 'framer-motion';
import React from 'react';

// Define the type for the props
interface ChildProps {
  ClickMenuEvent: (newMessage: string) => void,
  currentMenu : string
}

const Navigation: React.FC<ChildProps> = ({ ClickMenuEvent, currentMenu }) => {

  const isHome = (currentMenu == "home");

  const navPosition: any = {
    top : (isHome) ? 'unset' : '20px',
    bottom : (isHome) ? '100px' : 'unset',
    position : (isHome) ? 'absolute' : 'sticky',
  }

  return (
    <>
      <motion.ul className={'navigation'} >
        <li><a onClick={() => ClickMenuEvent("home")} className={(currentMenu == "home") ? "active" : ""}>HOME</a></li>
        <li><a onClick={() => ClickMenuEvent("experience")} className={(currentMenu == "experience") ? "active" : ""}>EXPERIENCE</a></li>
        <li><a onClick={() => ClickMenuEvent("skills")} className={(currentMenu == "skills") ? "active" : ""}>SKILLS</a></li>
        <li><a onClick={() => ClickMenuEvent("project")} className={(currentMenu == "project") ? "active" : ""}>PROJECT</a></li>
        <li><a onClick={() => ClickMenuEvent("contact")} className={(currentMenu == "contact") ? "active" : ""}>CONTACT</a></li>
      </motion.ul>
    </>
  );
}; 

export default Navigation;
