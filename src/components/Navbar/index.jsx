import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you are using React Router for navigation

import CV from '../../assets/RaphaeladoAmaralGil.pdf';

function MyNav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active" aria-label="Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active" aria-label="About me">
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" activeClassName="active" aria-label="Projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active" aria-label="Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={CV} aria-label="Resume" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
