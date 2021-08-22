import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div className="text-light nav-name">
            <h4 className="nav-title-font">Nathaniel Turcotte</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <div className="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio">
              <div className="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/resume">
              <div className="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}