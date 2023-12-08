import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Nav() {
  return (
    <nav className="secnavbar">
      <ul className="navbar-nav divide-x">
        <li className="nav-item pl-3">
          <a href="#" className="nav-link">What's New</a>
        </li>
        <li className="nav-item pl-3">
          <a href="#" className="nav-link">Models</a>
        </li>
        <li className="nav-item pl-3">
          <a href="#" className="nav-link">HDRI</a>
        </li>
        <li className="nav-item pl-3">
          <a href="#" className="nav-link">Free</a>
        </li>
      </ul>
    </nav>
    
  );
}

export default Nav
