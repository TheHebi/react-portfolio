import React from 'react';
import './style.css';
import {Navbar} from "react-bootstrap"

export default function Header() {

  return (
    <div className="header">
      <Navbar expand="lg" bg="dark" sticky="top">
          <div class="text-light">
            <h4 class="nav-title-font">Nathaniel Turcotte</h4>
          </div>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
              <div class="nav-font text-light">About Me</div>
          </li>
          <li class="nav-item">
              <div class="nav-font text-light">Portfolio</div>
          </li>
          <li class="nav-item">
              <div class="nav-font text-light">Contact</div>
          </li>
          <li class="nav-item">
              <div class="nav-font text-light">Resume</div>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}