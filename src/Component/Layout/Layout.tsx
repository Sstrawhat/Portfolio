
import { useEffect, useRef, useState } from "react"
import Geometry from "./Geometry"
import Navigation from "./Navigation"
import Home from "../Content/Home";
import Experience from "../Content/Experience";
import Skills from "../Content/Skills";
import Project from "../Content/Project";
import Contact from "../Content/Contact";

const Layout :React.FC = () => {

  const [menuState,setmenuState] = useState("");
  const currentMenu = useRef("home");

  const ClickMenu = (menu : string, isfromObserver : boolean = false) => {

    currentMenu.current = menu;
    setmenuState(menu);
     // Always update state for Geometry
  
    // Only scroll on manual clicks
    if (!isfromObserver) {
      const target = document.getElementById(menu);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

  };


  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ClickMenu(entry.target.id,true)
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // Visible when 50% of the element is in view
        }
      );
    
      // Observe the elements by their IDs
      const sections = ["home", "experience", "skills", "project", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el); // Only observe if the element exists
      });
    
    },[]); // Empty dependency array, so this only runs on mount and unmount

  return (
  <div className="layout">
    <Geometry showedMenu={currentMenu.current} />
    <Navigation  ClickMenuEvent={ClickMenu} currentMenu={currentMenu.current} />
    <div className="content">
      <Home showedMenu={currentMenu.current} />
      <Experience showedMenu={currentMenu.current} />
      <Skills showedMenu={currentMenu.current} />
      <Project showedMenu={currentMenu.current} />
      <Contact showedMenu={currentMenu.current} />
    </div>
  </div>
  )
}

export default Layout