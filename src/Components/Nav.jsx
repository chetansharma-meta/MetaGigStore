import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">What's New</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Models</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">HDRI</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Free</a>
        </li>
      </ul>
    </nav>

    
  );
}

export default Nav
