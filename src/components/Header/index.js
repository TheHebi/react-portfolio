import React from 'react';
import './style.css';
import {Navbar} from "react-bootstrap"

export default function Header() {

  return (
    <div className="header">
      <Navbar expand="lg" bg="dark" sticky="top">
          <div className="text-light">
            <h4 className="nav-title-font">Nathaniel Turcotte</h4>
          </div>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
              <div className="nav-font text-light">About Me</div>
          </li>
          <li className="nav-item">
              <div className="nav-font text-light">Portfolio</div>
          </li>
          <li className="nav-item">
              <div className="nav-font text-light">Contact</div>
          </li>
          <li className="nav-item">
              <div className="nav-font text-light">Resume</div>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}