import "./Navbar.css";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : "header"}>
      <Link>
        <h1>VIPUL'S.IN</h1>
      </Link>

      <ul className={click ? 'nav-menu activeY' : 'nav-menu'}>
       
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={splitLocation[1] === "project" ? "active" : ""}>
          <Link to="/project">Project</Link>
        </li>
        <li className={splitLocation[1] === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>

        <li className={splitLocation[1] === "contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
