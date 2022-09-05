import { NavLink } from "react-router-dom";
import "./header.css";
import NavLinkList from "./NavLinkList";
import {useState} from 'react'

function Header(props) {
  let [openMenu, isOpenMenu] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">AitishNik</NavLink>
        </div>
        <div className={ openMenu?"nav_link_open":"nav_link"}>
          <NavLinkList {...props} />
        </div>
        <div className="menu_burger">
          <span onClick={()=>isOpenMenu(!openMenu)}></span> 
        </div>
      </div>
    </header>
  );
}

export default Header;
