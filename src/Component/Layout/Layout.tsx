
import { useRef, useState } from "react"
import Geometry from "./Geometry"
import Navigation from "./Navigation"
import Content from "./Content";

const Layout :React.FC = () => {

  const [menuState,setmenuState] = useState("");
  const currentMenu = useRef("");

  const ClickMenu = (menu : string) => {

    currentMenu.current = menu;
    setmenuState(menu);

  };


  return (
  <div className="layout">
    <Geometry parentState={menuState} showedMenu={currentMenu.current} />
    <Navigation  ClickMenuEvent={ClickMenu} currentMenu={currentMenu.current} />
    <Content showedMenu={currentMenu.current} />
  </div>
  )
}

export default Layout