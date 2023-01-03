import React from 'react'
// import './Toggle'

export default function Nav() {
  return (
    <nav id="navbar">
      <a href="/" className="logoLink">
        <img
          src="/images/logo.png"
          className="logoImg"
          alt="logo"
        />
      </a>
      <ul className="menu">
        <li className="navItem">
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li className="navItem dropLink">
          <a href="/" className="navLink">
            About us <i className="fas fa-angle-down"></i>
          </a>
          <ul className="dropdown">
            <li className="navItem">
              <a href="/" className="navLink">
                Who we are
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Vision
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Mission
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Supports
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Why choose us?
              </a>
            </li>
          </ul>
        </li>
        <li className="navItem">
          <a href="/" className="navLink">
            Works
          </a>
        </li>
        <li className="navItem">
          <a href="/" className="navLink">
            Clients
          </a>
        </li>
        <li className="navItem">
          <a href="/" className="navLink">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navBtn" id="sideNavBtn">
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </nav>
  );
}
