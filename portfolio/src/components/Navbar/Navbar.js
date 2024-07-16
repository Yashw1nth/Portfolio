import React, { useState } from 'react';
import  './Navbar';
import MobileNav from '../MobileNav/MobileNav';
import { CgEditHighlight } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
           
          <p className="logo"> <p className="icon1"><CgEditHighlight /></p>Portfolio</p>

          <ul>
            <li>
              <a href className="menu-item">Home</a>
            </li>
            <li>
              <a href className="menu-item">Skills</a>
            </li>
            <li>
              <a href className="menu-item">Projects</a>
            </li>
            <li>
              <a href className="menu-item">Contact Me</a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

            <button class="menu-btn" onClick={toggleMenu}>
              <span class={"material-symbols-outlined"}  style={{ fontSize: "1.8rem"}}> {openMenu ? "close" : "menu"}  </span> 
            </button>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar
